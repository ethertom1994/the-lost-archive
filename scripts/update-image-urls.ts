/**
 * Phase 1c: rewrite `imageUrl: '<wikimedia-url>'` to `imageUrl: '/images/entries/<slug>.<ext>'`
 * for every entry whose download succeeded (according to download-images.report.json).
 *
 * Leaves other entries untouched. Leaves imageCredit alone (attribution still required).
 * Idempotent — running twice is a no-op.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'content', 'entries');
const REPORT_PATH = path.join(__dirname, 'download-images.report.json');

interface RunRecord {
  slug: string;
  sourceUrl: string;
  filename: string | null;
  localPath: string | null;
  status: string;
}

const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8')) as { records: RunRecord[] };

let updated = 0;
let alreadyLocal = 0;
let skipped = 0;

for (const rec of report.records) {
  if (rec.status !== 'downloaded' || !rec.localPath) {
    continue;
  }
  const filePath = path.join(ENTRIES_DIR, `${rec.slug}.ts`);
  if (!fs.existsSync(filePath)) {
    console.warn(`  [${rec.slug}] entry file missing; skipped`);
    skipped++;
    continue;
  }
  const original = fs.readFileSync(filePath, 'utf8');

  // If already local, skip.
  if (/imageUrl:\s*['"]\/images\/entries\//.test(original)) {
    alreadyLocal++;
    continue;
  }

  // Replace the imageUrl string. Match either single or double quotes.
  const pattern = /imageUrl:\s*(?:'([^']+)'|"([^"]+)")/;
  if (!pattern.test(original)) {
    console.warn(`  [${rec.slug}] no imageUrl string found; skipped`);
    skipped++;
    continue;
  }
  const replaced = original.replace(pattern, `imageUrl: '${rec.localPath}'`);
  if (replaced === original) {
    skipped++;
    continue;
  }
  fs.writeFileSync(filePath, replaced);
  updated++;
  console.log(`  [${rec.slug}] -> ${rec.localPath}`);
}

console.log(`\nUpdated: ${updated}`);
console.log(`Already local: ${alreadyLocal}`);
console.log(`Skipped: ${skipped}`);
