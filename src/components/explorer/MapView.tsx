import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import { feature } from 'topojson-client';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';
import type { Entry } from '../../types';

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';

export default function MapView() {
  const [selected, setSelected] = useState<Entry | null>(null);
  const [landGeo, setLandGeo] = useState<GeoPermissibleObjects | null>(null);

  const width = 960;
  const height = 500;

  const projection = useMemo(
    () => geoNaturalEarth1().scale(160).translate([width / 2, height / 2]),
    []
  );
  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    fetch(WORLD_ATLAS_URL)
      .then(r => r.json())
      .then(topo => {
        const land = feature(topo, topo.objects.land);
        setLandGeo(land as unknown as GeoPermissibleObjects);
      })
      .catch(() => {});
  }, []);

  const entriesWithCoords = entries.filter(e => e.coordinates);

  // Group markers that are very close together so labels don't overlap
  const projected = entriesWithCoords.map(entry => {
    const [lat, lng] = entry.coordinates!;
    const point = projection([lng, lat]);
    return { entry, cx: point?.[0] ?? 0, cy: point?.[1] ?? 0 };
  });

  return (
    <div>
      <p className="text-text-tertiary text-sm mb-6">
        Locations where entries were last known. Click a marker to learn more.
      </p>

      <div className="relative bg-bg-surface rounded-lg border border-border-subtle overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          style={{ maxHeight: '65vh' }}
        >
          <defs>
            <radialGradient id="marker-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Graticule grid lines */}
          {[-60, -30, 0, 30, 60].map(lat => {
            const d = pathGenerator({ type: 'LineString', coordinates: Array.from({ length: 361 }, (_, i) => [i - 180, lat]) });
            return d ? <path key={`lat${lat}`} d={d} fill="none" stroke="var(--color-border-subtle)" strokeWidth="0.3" /> : null;
          })}
          {[-120, -60, 0, 60, 120].map(lng => {
            const d = pathGenerator({ type: 'LineString', coordinates: Array.from({ length: 181 }, (_, i) => [lng, i - 90]) });
            return d ? <path key={`lng${lng}`} d={d} fill="none" stroke="var(--color-border-subtle)" strokeWidth="0.3" /> : null;
          })}

          {/* Land masses */}
          {landGeo && (
            <path
              d={pathGenerator(landGeo) || ''}
              fill="var(--color-bg-card)"
              stroke="var(--color-border-default)"
              strokeWidth="0.5"
            />
          )}

          {/* Sphere outline */}
          <path
            d={pathGenerator({ type: 'Sphere' } as GeoPermissibleObjects) || ''}
            fill="none"
            stroke="var(--color-border-subtle)"
            strokeWidth="0.5"
          />

          {/* Entry markers */}
          {projected.map(({ entry, cx, cy }) => {
            const meta = CATEGORY_META[entry.category];
            const isSelected = selected?.slug === entry.slug;

            return (
              <g key={entry.slug}>
                <circle cx={cx} cy={cy} r={isSelected ? 18 : 10} fill="url(#marker-glow)" opacity={isSelected ? 1 : 0.6} />
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? 6 : 4}
                  fill={meta.color}
                  stroke="var(--color-bg-void)"
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  onClick={() => setSelected(isSelected ? null : entry)}
                />
              </g>
            );
          })}

          {/* Labels only for selected or when few nearby */}
          {selected && (() => {
            const p = projected.find(p => p.entry.slug === selected.slug);
            if (!p) return null;
            return (
              <text
                x={p.cx}
                y={p.cy - 12}
                textAnchor="middle"
                fill="var(--color-text-primary)"
                fontSize="11"
                fontWeight="500"
                fontFamily="var(--font-body)"
                className="pointer-events-none"
              >
                {selected.name}
              </text>
            );
          })()}
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
