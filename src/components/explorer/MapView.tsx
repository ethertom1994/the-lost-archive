import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';
import type { Entry } from '../../types';

// Simple equirectangular projection: converts lat/lng to x/y percentages
function project(lat: number, lng: number): { x: number; y: number } {
  // Map longitude -180..180 to 0..100
  const x = ((lng + 180) / 360) * 100;
  // Map latitude 90..-90 to 0..100 (inverted because y increases downward)
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

export default function MapView() {
  const [selected, setSelected] = useState<Entry | null>(null);

  const entriesWithCoords = entries.filter(e => e.coordinates);

  return (
    <div>
      <p className="text-text-tertiary text-sm mb-6">
        Locations where entries were last known. Click a marker to learn more.
      </p>

      <div className="relative bg-bg-surface rounded-lg border border-border-subtle overflow-hidden aspect-[2/1]">
        {/* Simple world map SVG outline */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified continent outlines */}
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Grid lines */}
          {[...Array(7)].map((_, i) => (
            <line
              key={`h${i}`}
              x1="0" y1={i * (500/6)} x2="1000" y2={i * (500/6)}
              stroke="var(--color-border-subtle)" strokeWidth="0.5"
            />
          ))}
          {[...Array(13)].map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * (1000/12)} y1="0" x2={i * (1000/12)} y2="500"
              stroke="var(--color-border-subtle)" strokeWidth="0.5"
            />
          ))}

          {/* Simplified continent shapes */}
          {/* North America */}
          <path d="M150,80 L230,70 L270,90 L280,130 L260,160 L240,190 L220,210 L180,220 L160,200 L130,170 L120,130 L130,100 Z" fill="var(--color-bg-card)" stroke="var(--color-border-default)" strokeWidth="0.5" />
          {/* South America */}
          <path d="M220,230 L250,240 L270,270 L280,310 L270,350 L250,380 L230,400 L210,380 L200,340 L195,300 L200,260 Z" fill="var(--color-bg-card)" stroke="var(--color-border-default)" strokeWidth="0.5" />
          {/* Europe */}
          <path d="M460,80 L510,70 L540,85 L530,110 L510,120 L490,130 L470,120 L450,110 Z" fill="var(--color-bg-card)" stroke="var(--color-border-default)" strokeWidth="0.5" />
          {/* Africa */}
          <path d="M460,150 L510,140 L540,160 L550,200 L540,260 L520,300 L490,320 L470,300 L460,260 L450,200 Z" fill="var(--color-bg-card)" stroke="var(--color-border-default)" strokeWidth="0.5" />
          {/* Asia */}
          <path d="M540,60 L620,50 L700,70 L750,90 L780,120 L770,150 L730,170 L680,180 L620,170 L570,150 L540,120 L530,90 Z" fill="var(--color-bg-card)" stroke="var(--color-border-default)" strokeWidth="0.5" />
          {/* Australia */}
          <path d="M750,280 L810,270 L840,290 L830,320 L800,340 L770,330 L750,310 Z" fill="var(--color-bg-card)" stroke="var(--color-border-default)" strokeWidth="0.5" />

          {/* Entry markers */}
          {entriesWithCoords.map(entry => {
            const [lat, lng] = entry.coordinates!;
            const pos = project(lat, lng);
            const cx = (pos.x / 100) * 1000;
            const cy = (pos.y / 100) * 500;
            const meta = CATEGORY_META[entry.category];
            const isSelected = selected?.slug === entry.slug;

            return (
              <g key={entry.slug}>
                {/* Glow */}
                <circle cx={cx} cy={cy} r={isSelected ? 20 : 12} fill="url(#glow)" opacity={isSelected ? 1 : 0.5} />
                {/* Dot */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 7 : 5}
                  fill={meta.color}
                  stroke="var(--color-bg-void)"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelected(isSelected ? null : entry)}
                />
                {/* Label */}
                <text
                  x={cx}
                  y={cy - 12}
                  textAnchor="middle"
                  fill="var(--color-text-secondary)"
                  fontSize="10"
                  fontFamily="var(--font-body)"
                  className="pointer-events-none"
                >
                  {entry.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected entry detail */}
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
                <p className="text-text-secondary text-sm mb-1">{selected.tagline}</p>
                <p className="text-text-tertiary text-xs mb-3">{selected.lastKnownLocation}</p>
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
