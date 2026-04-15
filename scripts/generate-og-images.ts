import { createCanvas } from 'canvas';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATEGORY_COLORS: Record<string, string> = {
  fauna: '#7A9B8F',
  flora: '#6B8F6B',
  food: '#C8965A',
  sound: '#8B7AAF',
  language: '#7A8FAF',
  material: '#AF8B7A',
  technology: '#7AAFAF',
  place: '#8FAF7A',
  culture: '#AF7A8B',
};

const CATEGORY_LABELS: Record<string, string> = {
  fauna: 'Fauna',
  flora: 'Flora',
  food: 'Food & Flavor',
  sound: 'Sound',
  language: 'Language',
  material: 'Material & Pigment',
  technology: 'Technology',
  place: 'Place & Landscape',
  culture: 'Culture',
};

interface EntryMeta {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  lastKnownYear: number | string;
  lastKnownLocation: string;
}

function wrapText(ctx: ReturnType<typeof createCanvas>['getContext'], text: string, maxWidth: number, maxLines: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
      if (lines.length >= maxLines) break;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }
  if (lines.length === maxLines && currentLine !== lines[lines.length - 1]) {
    lines[lines.length - 1] = lines[lines.length - 1].replace(/\s*\S+$/, '...');
  }
  return lines;
}

function generateOGImage(entry: EntryMeta, outputPath: string) {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const categoryColor = CATEGORY_COLORS[entry.category] ?? '#C8965A';

  // Background
  ctx.fillStyle = '#0A0A0A';
  ctx.fillRect(0, 0, width, height);

  // Category color accent strip on left edge
  ctx.fillStyle = categoryColor;
  ctx.fillRect(0, 0, 6, height);

  // Subtle gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(200, 150, 90, 0.03)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Category label
  ctx.fillStyle = categoryColor;
  ctx.font = '500 18px Georgia, "Times New Roman", serif';
  const catLabel = CATEGORY_LABELS[entry.category] ?? entry.category;
  ctx.fillText(catLabel.toUpperCase(), 60, 80);

  // Category underline
  const catWidth = ctx.measureText(catLabel.toUpperCase()).width;
  ctx.fillStyle = categoryColor;
  ctx.globalAlpha = 0.3;
  ctx.fillRect(60, 88, catWidth, 2);
  ctx.globalAlpha = 1;

  // Entry name - large serif
  ctx.fillStyle = '#E8E0D4';
  ctx.font = '700 52px Georgia, "Times New Roman", serif';
  const nameLines = wrapText(ctx, entry.name, width - 140, 2);
  let nameY = 150;
  for (const line of nameLines) {
    ctx.fillText(line, 60, nameY);
    nameY += 64;
  }

  // Tagline - smaller text
  ctx.fillStyle = '#8A8478';
  ctx.font = 'italic 24px Georgia, "Times New Roman", serif';
  const taglineLines = wrapText(ctx, entry.tagline, width - 140, 3);
  let taglineY = nameY + 20;
  for (const line of taglineLines) {
    ctx.fillText(line, 60, taglineY);
    taglineY += 34;
  }

  // Year and location - muted text
  ctx.fillStyle = '#5A5650';
  ctx.font = '16px "Segoe UI", Arial, sans-serif';
  const yearLoc = `${entry.lastKnownYear}  ·  ${entry.lastKnownLocation}`;
  ctx.fillText(yearLoc, 60, height - 60);

  // "The Lost Archive" branding - bottom right
  ctx.fillStyle = '#5A5650';
  ctx.font = '500 18px Georgia, "Times New Roman", serif';
  ctx.textAlign = 'right';
  ctx.fillText('The Lost Archive', width - 60, height - 60);
  ctx.textAlign = 'left';

  // Bottom border line
  ctx.fillStyle = categoryColor;
  ctx.globalAlpha = 0.2;
  ctx.fillRect(60, height - 30, width - 120, 1);
  ctx.globalAlpha = 1;

  // Write PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}

async function main() {
  const entriesDir = path.join(__dirname, '..', 'src', 'content', 'entries');
  const outputDir = path.join(__dirname, '..', 'public', 'og');

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs.readdirSync(entriesDir).filter(f => f.endsWith('.ts'));
  console.log(`Found ${files.length} entry files`);

  let count = 0;
  for (const file of files) {
    const slug = file.replace('.ts', '');
    const filePath = path.join(entriesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract fields from the TypeScript source
    const nameMatch = content.match(/name:\s*['"`]([^'"`]+)['"`]/);
    const taglineMatch = content.match(/tagline:\s*['"`]([^'"`]+)['"`]/);
    const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)['"`]/);
    const yearMatch = content.match(/lastKnownYear:\s*([^\n,]+)/);
    const locationMatch = content.match(/lastKnownLocation:\s*['"`]([^'"`]+)['"`]/);

    if (!nameMatch || !taglineMatch || !categoryMatch) {
      console.log(`  SKIP ${slug} (missing fields)`);
      continue;
    }

    const entry: EntryMeta = {
      slug,
      name: nameMatch[1],
      tagline: taglineMatch[1],
      category: categoryMatch[1],
      lastKnownYear: yearMatch ? yearMatch[1].trim().replace(/[',]/g, '') : '',
      lastKnownLocation: locationMatch ? locationMatch[1] : '',
    };

    const outputPath = path.join(outputDir, `${slug}.png`);
    generateOGImage(entry, outputPath);
    count++;
  }

  console.log(`Generated ${count} OG images in public/og/`);
}

main().catch(err => {
  console.error('Failed to generate OG images:', err);
  process.exit(1);
});
