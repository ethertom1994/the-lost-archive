/**
 * Phase 1b: Download all Wikimedia-hosted entry images locally so the site
 * doesn't depend on Wikimedia's hotlink/CDN policy (which started 429-ing
 * `upload.wikimedia.org/thumb/...` links in late 2025/early 2026).
 *
 * Strategy:
 *   - Scan src/content/entries/*.ts for `imageUrl: '...'`.
 *   - Extract the Wikimedia filename from either the old `upload.wikimedia.org/thumb/...`
 *     pattern or the `commons.wikimedia.org/w/index.php?title=Special:Redirect/file/...` pattern.
 *   - Download through Special:Redirect with a width=800 param. This endpoint
 *     returns a regular file and is the supported programmatic access point.
 *   - Save to public/images/entries/[slug].[ext]. Skip if already present.
 *   - Rate limit: ~1 req/sec. Honor Retry-After on 429/503.
 *   - Identify ourselves with a proper User-Agent per Wikimedia's policy.
 *   - Write a run report to scripts/download-images.report.json.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'content', 'entries');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'entries');
const REPORT_PATH = path.join(__dirname, 'download-images.report.json');

const USER_AGENT =
  'TheLostArchive/1.0 (https://the-lost-archive-chi.vercel.app/; contact@the-lost-archive.example)';
const POLITE_DELAY_MS = 1100; // ~0.9 req/sec
const MAX_RETRIES = 4;

interface ScannedEntry {
  file: string;
  slug: string;
  imageUrl: string;
}

interface RunRecord {
  slug: string;
  sourceUrl: string;
  filename: string | null;
  localPath: string | null;
  status: 'downloaded' | 'skipped-existing' | 'failed' | 'skipped-undefined' | 'skipped-non-wikimedia';
  error?: string;
  httpStatus?: number;
  bytes?: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractSlug(filename: string): string {
  // slug is the filename without .ts
  return filename.replace(/\.ts$/, '');
}

/**
 * Given a Wikimedia URL, return the raw filename (e.g. `Foo_Bar.jpg`).
 * Handles:
 *   upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Foo.jpg/400px-Foo.jpg
 *   upload.wikimedia.org/wikipedia/commons/a/ab/Foo.jpg
 *   commons.wikimedia.org/w/index.php?title=Special:Redirect/file/Foo.jpg&width=800
 */
function extractWikimediaFilename(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === 'upload.wikimedia.org') {
      const parts = u.pathname.split('/').filter(Boolean);
      // .../thumb/a/ab/Foo.jpg/400px-Foo.jpg  -> Foo.jpg is second-to-last
      // .../commons/a/ab/Foo.jpg              -> Foo.jpg is last
      const thumbIdx = parts.indexOf('thumb');
      if (thumbIdx >= 0) {
        // file is part at length-2
        if (parts.length >= 2) {
          return decodeURIComponent(parts[parts.length - 2]);
        }
      }
      return decodeURIComponent(parts[parts.length - 1]);
    }
    if (u.hostname === 'commons.wikimedia.org') {
      const title = u.searchParams.get('title') || '';
      const m = title.match(/^Special:Redirect\/file\/(.+)$/);
      if (m) return decodeURIComponent(m[1]);
    }
    return null;
  } catch {
    return null;
  }
}

function guessExtension(filename: string): string {
  const m = filename.match(/\.([a-zA-Z0-9]{2,5})$/);
  if (!m) return 'jpg';
  return m[1].toLowerCase();
}

function scanEntries(): { entries: ScannedEntry[]; skipped: RunRecord[] } {
  const files = fs
    .readdirSync(ENTRIES_DIR)
    .filter((f) => f.endsWith('.ts'))
    .sort();

  const entries: ScannedEntry[] = [];
  const skipped: RunRecord[] = [];

  for (const file of files) {
    const slug = extractSlug(file);
    const content = fs.readFileSync(path.join(ENTRIES_DIR, file), 'utf8');
    // Match both `imageUrl: 'http...'` and `imageUrl: undefined`
    const m = content.match(/imageUrl:\s*(?:'([^']+)'|"([^"]+)"|undefined|null)/);
    if (!m) continue;
    const url = m[1] || m[2] || null;
    if (!url) {
      skipped.push({
        slug,
        sourceUrl: '',
        filename: null,
        localPath: null,
        status: 'skipped-undefined',
      });
      continue;
    }
    if (url.startsWith('/images/entries/')) {
      // already localized — treat as skip
      skipped.push({
        slug,
        sourceUrl: url,
        filename: null,
        localPath: url,
        status: 'skipped-existing',
      });
      continue;
    }
    entries.push({ file, slug, imageUrl: url });
  }

  return { entries, skipped };
}

async function downloadOne(slug: string, imageUrl: string): Promise<RunRecord> {
  const filename = extractWikimediaFilename(imageUrl);
  if (!filename) {
    return {
      slug,
      sourceUrl: imageUrl,
      filename: null,
      localPath: null,
      status: 'skipped-non-wikimedia',
      error: 'Not a recognized Wikimedia URL pattern',
    };
  }
  const ext = guessExtension(filename);
  const outPath = path.join(OUT_DIR, `${slug}.${ext}`);
  const relPath = `/images/entries/${slug}.${ext}`;

  if (fs.existsSync(outPath)) {
    return {
      slug,
      sourceUrl: imageUrl,
      filename,
      localPath: relPath,
      status: 'skipped-existing',
    };
  }

  const downloadUrl = `https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/${encodeURIComponent(
    filename,
  )}&width=800`;

  let attempt = 0;
  while (attempt < MAX_RETRIES) {
    attempt++;
    try {
      const res = await fetch(downloadUrl, {
        headers: { 'User-Agent': USER_AGENT, Accept: 'image/*' },
        redirect: 'follow',
      });

      if (res.status === 429 || res.status === 503) {
        const retryAfter = Number(res.headers.get('Retry-After')) || 5;
        console.warn(`  [${slug}] ${res.status}, backing off ${retryAfter}s (attempt ${attempt})`);
        await sleep(retryAfter * 1000);
        continue;
      }

      if (!res.ok) {
        return {
          slug,
          sourceUrl: imageUrl,
          filename,
          localPath: null,
          status: 'failed',
          httpStatus: res.status,
          error: `HTTP ${res.status}`,
        };
      }

      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outPath, buf);
      return {
        slug,
        sourceUrl: imageUrl,
        filename,
        localPath: relPath,
        status: 'downloaded',
        httpStatus: res.status,
        bytes: buf.length,
      };
    } catch (err) {
      if (attempt >= MAX_RETRIES) {
        return {
          slug,
          sourceUrl: imageUrl,
          filename,
          localPath: null,
          status: 'failed',
          error: err instanceof Error ? err.message : String(err),
        };
      }
      await sleep(2000);
    }
  }

  return {
    slug,
    sourceUrl: imageUrl,
    filename,
    localPath: null,
    status: 'failed',
    error: 'Max retries exceeded',
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const { entries, skipped } = scanEntries();
  console.log(`Scanned ${entries.length + skipped.length} entry files.`);
  console.log(`  To download: ${entries.length}`);
  console.log(`  Skipped (no url / already local): ${skipped.length}`);

  const records: RunRecord[] = [...skipped];
  let downloaded = 0;
  let failed = 0;
  let skippedExisting = 0;

  for (let i = 0; i < entries.length; i++) {
    const e = entries[i];
    process.stdout.write(`[${i + 1}/${entries.length}] ${e.slug} ... `);
    const rec = await downloadOne(e.slug, e.imageUrl);
    records.push(rec);
    if (rec.status === 'downloaded') {
      downloaded++;
      console.log(`OK (${rec.bytes} bytes) -> ${rec.localPath}`);
    } else if (rec.status === 'skipped-existing') {
      skippedExisting++;
      console.log('skipped (already exists)');
    } else {
      failed++;
      console.log(`FAILED (${rec.error ?? rec.status})`);
    }
    // politeness delay
    if (rec.status === 'downloaded') {
      await sleep(POLITE_DELAY_MS);
    }
  }

  const summary = {
    total: entries.length + skipped.length,
    toDownload: entries.length,
    downloaded,
    failed,
    skippedExisting,
    skippedOther: skipped.length,
    records,
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(summary, null, 2));

  console.log('\n=== Summary ===');
  console.log(`Downloaded:     ${downloaded}`);
  console.log(`Skipped (exist):${skippedExisting}`);
  console.log(`Failed:         ${failed}`);
  console.log(`Report:         ${REPORT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
