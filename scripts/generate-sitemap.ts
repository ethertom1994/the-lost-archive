import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://the-lost-archive.vercel.app';

const TRAILS = [
  'roman-legacy',
  'last-speakers',
  'climates-toll',
  'lost-flavors',
  'destroyed-by-conquest',
  'lost-secrets',
  'loneliest-creatures',
];

function main() {
  const entriesDir = path.join(__dirname, '..', 'src', 'content', 'entries');
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

  const slugs = fs.readdirSync(entriesDir)
    .filter(f => f.endsWith('.ts'))
    .map(f => f.replace('.ts', ''))
    .sort();

  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    // Static pages
    `  <url><loc>${BASE_URL}/</loc><priority>1.0</priority></url>`,
    `  <url><loc>${BASE_URL}/explore</loc><priority>0.9</priority></url>`,
    `  <url><loc>${BASE_URL}/trails</loc><priority>0.8</priority></url>`,
    `  <url><loc>${BASE_URL}/bookmarks</loc><priority>0.5</priority></url>`,
    `  <url><loc>${BASE_URL}/stats</loc><priority>0.7</priority></url>`,
    `  <url><loc>${BASE_URL}/vanishing</loc><priority>0.8</priority></url>`,
    `  <url><loc>${BASE_URL}/about</loc><priority>0.5</priority></url>`,
    `  <url><loc>${BASE_URL}/privacy</loc><priority>0.3</priority></url>`,
    // Trail pages
    ...TRAILS.map(t => `  <url><loc>${BASE_URL}/trails/${t}</loc><priority>0.7</priority></url>`),
    // Entry pages
    ...slugs.map(s => `  <url><loc>${BASE_URL}/archive/${s}</loc><priority>0.7</priority></url>`),
    '</urlset>',
  ];

  fs.writeFileSync(outputPath, lines.join('\n') + '\n');
  console.log(`Sitemap generated: ${slugs.length} entries, ${TRAILS.length} trails, 7 static pages`);
}

main();
