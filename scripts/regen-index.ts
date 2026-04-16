/**
 * Phase 2d: Regenerate src/content/index.ts import + export list from the
 * filesystem. Preserves the existing imports and their ordering; only
 * appends imports + list entries for new entry files that aren't yet
 * referenced.
 *
 * Safe to run repeatedly — idempotent for already-imported entries.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'content', 'entries');
const INDEX_PATH = path.join(ROOT, 'src', 'content', 'index.ts');

function slugToCamel(slug: string): string {
  return slug.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
}

const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.ts')).sort();
const indexSrc = fs.readFileSync(INDEX_PATH, 'utf8');

// For each file, check whether its export is already referenced in index.ts.
// If not, it's a new entry we need to add.
const missing: { slug: string; camel: string; file: string }[] = [];
for (const file of files) {
  const slug = file.replace(/\.ts$/, '');
  const camel = slugToCamel(slug);
  // Look for `import { camel } from './entries/slug'`
  const importRegex = new RegExp(
    `\\bimport\\s*\\{\\s*${camel}\\s*\\}\\s*from\\s*['"]\\./entries/${slug.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}['"]`,
  );
  if (!importRegex.test(indexSrc)) {
    missing.push({ slug, camel, file });
  }
}

if (missing.length === 0) {
  console.log('index.ts is already up to date.');
  process.exit(0);
}

console.log(`Found ${missing.length} new entries to register:`);
for (const m of missing) console.log(`  ${m.slug}`);

// Build the new import block: append after the last `import { ... } from './entries/...'` line
const importLines = missing
  .map((m) => `import { ${m.camel} } from './entries/${m.slug}';`)
  .join('\n');
const exportLines = missing.map((m) => `  ${m.camel},`).join('\n');

// Insert imports after the last entries/ import
const lines = indexSrc.split(/\r?\n/);
let lastEntriesImport = -1;
for (let i = 0; i < lines.length; i++) {
  if (/from\s+['"]\.\/entries\//.test(lines[i])) lastEntriesImport = i;
}
if (lastEntriesImport === -1) {
  console.error('Could not find any existing entries import line. Aborting.');
  process.exit(1);
}

// Insert the new imports after the last entries/ import line, prefixed with a section header
lines.splice(
  lastEntriesImport + 1,
  0,
  '',
  `// ===== Auto-appended by scripts/regen-index.ts =====`,
  importLines,
);

// Find the entries array close bracket `];` and insert new exports before it
let closeIdx = -1;
for (let i = lines.length - 1; i >= 0; i--) {
  if (/^];\s*$/.test(lines[i])) {
    closeIdx = i;
    break;
  }
}
if (closeIdx === -1) {
  console.error('Could not find the entries array closing bracket. Aborting.');
  process.exit(1);
}
lines.splice(closeIdx, 0, `  // ===== Auto-appended =====`, exportLines);

fs.writeFileSync(INDEX_PATH, lines.join('\n'));
console.log(`\nRegenerated ${INDEX_PATH}`);
console.log(`Added ${missing.length} imports and export entries.`);
