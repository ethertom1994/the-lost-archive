import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';
import type { Entry } from '../../types';

function parseYear(y: number | string): number {
  if (typeof y === 'number') return y;
  const s = String(y);
  const match = s.match(/-?\d+/);
  if (!match) return 0;
  const num = parseInt(match[0]);
  return s.toLowerCase().includes('bce') ? -num : num;
}

interface Era {
  label: string;
  start: number;
  end: number;
}

const ERAS: Era[] = [
  { label: 'Ancient', start: -3000, end: 500 },
  { label: 'Medieval', start: 500, end: 1400 },
  { label: 'Early Modern', start: 1400, end: 1700 },
  { label: 'Industrial', start: 1700, end: 1900 },
  { label: 'Modern', start: 1900, end: 1970 },
  { label: 'Contemporary', start: 1970, end: 2030 },
];

function yearToPosition(year: number): number {
  // Use a segmented scale that gives each era equal visual weight
  for (let i = 0; i < ERAS.length; i++) {
    const era = ERAS[i];
    if (year <= era.end) {
      const eraStart = Math.max(year, era.start);
      const eraSpan = era.end - era.start;
      const fraction = eraSpan > 0 ? (eraStart - era.start) / eraSpan : 0;
      return (i + fraction) / ERAS.length;
    }
  }
  return 1;
}

export default function TimelineView() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Entry | null>(null);

  const sortedEntries = [...entries].sort((a, b) => parseYear(a.lastKnownYear) - parseYear(b.lastKnownYear));

  const TIMELINE_WIDTH = Math.max(1200, entries.length * 200);

  return (
    <div className="relative">
      <p className="text-text-tertiary text-sm mb-6">
        Scroll horizontally to explore entries across time. Click an entry to see details.
      </p>

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-none"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="relative" style={{ width: TIMELINE_WIDTH, height: 360 }}>
          {/* Era labels */}
          {ERAS.map((era, i) => {
            const left = (i / ERAS.length) * 100;
            const width = (1 / ERAS.length) * 100;
            return (
              <div
                key={era.label}
                className="absolute top-0"
                style={{ left: `${left}%`, width: `${width}%` }}
              >
                <div className="px-3 py-2 text-xs text-text-muted font-medium uppercase tracking-wider">
                  {era.label}
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle" />
              </div>
            );
          })}

          {/* Timeline axis */}
          <div className="absolute left-0 right-0 top-10 h-px bg-border-default" />

          {/* Entry dots */}
          {sortedEntries.map((entry, i) => {
            const year = parseYear(entry.lastKnownYear);
            const x = yearToPosition(year) * 100;
            const meta = CATEGORY_META[entry.category];
            const isSelected = selected?.slug === entry.slug;
            // Alternate vertical positions to avoid overlaps
            const yOffset = 60 + (i % 4) * 70;

            return (
              <div
                key={entry.slug}
                className="absolute"
                style={{ left: `${x}%`, top: yOffset }}
              >
                {/* Vertical connector line */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-px bg-border-subtle"
                  style={{ top: -(yOffset - 40), height: yOffset - 40 }}
                />

                {/* Dot */}
                <button
                  onClick={() => setSelected(isSelected ? null : entry)}
                  className={`relative -translate-x-1/2 size-4 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                    isSelected ? 'scale-150 shadow-lg' : 'hover:scale-125'
                  }`}
                  style={{
                    backgroundColor: isSelected ? meta.color : 'transparent',
                    borderColor: meta.color,
                  }}
                  aria-label={`${entry.name}, ${entry.lastKnownYear}`}
                />

                {/* Label */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 text-center">
                  <p className="text-xs text-text-secondary font-medium truncate">{entry.name}</p>
                  <p className="text-[10px] text-text-muted">{entry.lastKnownYear}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected entry popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 bg-bg-card border border-border-default rounded-lg p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: CATEGORY_META[selected.category].color }}
                  />
                  <span className="text-xs" style={{ color: CATEGORY_META[selected.category].color }}>
                    {CATEGORY_META[selected.category].label}
                  </span>
                  <span className="text-text-muted text-xs">· {selected.lastKnownYear}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-text-primary mb-1">{selected.name}</h3>
                <p className="text-text-secondary text-sm mb-3">{selected.tagline}</p>
                <Link
                  to={`/archive/${selected.slug}`}
                  className="text-accent text-sm hover:underline"
                >
                  Read full story →
                </Link>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-text-muted hover:text-text-primary text-sm cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
