/**
 * Phase 2a: Count entries per era by parsing `lastKnownYear` from each entry file.
 * Supports numeric years, 'nnn BCE' strings, and 'nnn CE' strings.
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENTRIES_DIR = path.resolve(__dirname, '..', 'src', 'content', 'entries');

function parseYear(raw: string): number | null {
  // Try numeric literal first
  const num = raw.match(/lastKnownYear:\s*(-?\d+)\b/);
  if (num) return parseInt(num[1], 10);

  // Try string variants: 'c. 500 BCE', '1200 BCE', '800 CE', '3000 BCE', etc.
  const str = raw.match(/lastKnownYear:\s*['"]([^'"]+)['"]/);
  if (!str) return null;
  const s = str[1];
  const bce = s.match(/(\d{1,5})\s*BCE/i);
  if (bce) return -parseInt(bce[1], 10);
  const ce = s.match(/(\d{1,5})\s*CE/i);
  if (ce) return parseInt(ce[1], 10);
  const plain = s.match(/^(\d{1,4})$/);
  if (plain) return parseInt(plain[1], 10);
  const year = s.match(/(\d{4})/);
  if (year) return parseInt(year[1], 10);
  return null;
}

function eraOf(y: number): string {
  if (y < -3000) return 'Prehistory (<3000 BCE)';
  if (y < 500) return 'Ancient (3000 BCE – 500 CE)';
  if (y < 1500) return 'Medieval (500 – 1500)';
  if (y < 1800) return 'Early Modern (1500 – 1800)';
  if (y < 1945) return 'Industrial (1800 – 1945)';
  return 'Modern (1945 – present)';
}

const files = fs.readdirSync(ENTRIES_DIR).filter((f) => f.endsWith('.ts'));
const counts: Record<string, number> = {
  'Prehistory (<3000 BCE)': 0,
  'Ancient (3000 BCE – 500 CE)': 0,
  'Medieval (500 – 1500)': 0,
  'Early Modern (1500 – 1800)': 0,
  'Industrial (1800 – 1945)': 0,
  'Modern (1945 – present)': 0,
};
const unclassified: string[] = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(ENTRIES_DIR, file), 'utf8');
  const y = parseYear(content);
  if (y === null) {
    unclassified.push(file);
    continue;
  }
  counts[eraOf(y)]++;
}

console.log(`Total entries: ${files.length}`);
console.log(`Unclassified: ${unclassified.length}`);
console.log();
for (const [era, n] of Object.entries(counts)) {
  console.log(`  ${era.padEnd(35)} ${n}`);
}
if (unclassified.length) {
  console.log('\nUnclassified files:');
  unclassified.forEach((f) => console.log(`  ${f}`));
}
