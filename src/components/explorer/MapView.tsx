import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from 'd3-geo';
import { zoom as d3Zoom, zoomIdentity, type ZoomBehavior } from 'd3-zoom';
import { select } from 'd3-selection';
import { feature } from 'topojson-client';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';
import type { Entry } from '../../types';

const WORLD_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';

const WIDTH = 960;
const HEIGHT = 500;

export default function MapView() {
  const [selected, setSelected] = useState<Entry | null>(null);
  const [landGeo, setLandGeo] = useState<GeoPermissibleObjects | null>(null);
  const [currentScale, setCurrentScale] = useState(1);
  const [showHint, setShowHint] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const projection = useMemo(
    () => geoNaturalEarth1().scale(160).translate([WIDTH / 2, HEIGHT / 2]),
    []
  );
  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  // Load world atlas
  useEffect(() => {
    fetch(WORLD_ATLAS_URL)
      .then(r => r.json())
      .then(topo => {
        const land = feature(topo, topo.objects.land);
        setLandGeo(land as unknown as GeoPermissibleObjects);
      })
      .catch(() => {});
  }, []);

  // Show mobile hint
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Setup d3-zoom
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = select(svgRef.current);
    const g = select(gRef.current);

    const zoomBehavior = d3Zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
        setCurrentScale(event.transform.k);
      });

    svg.call(zoomBehavior);
    // Prevent default touch scrolling on the SVG so pinch/pan works
    svg.on('touchstart.zoom', null);
    svg.call(zoomBehavior);

    zoomRef.current = zoomBehavior;

    return () => {
      svg.on('.zoom', null);
    };
  }, []);

  const handleZoomIn = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = select(svgRef.current);
    zoomRef.current.scaleBy(svg, 1.5);
  }, []);

  const handleZoomOut = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = select(svgRef.current);
    zoomRef.current.scaleBy(svg, 0.67);
  }, []);

  const handleZoomReset = useCallback(() => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = select(svgRef.current);
    zoomRef.current.transform(svg, zoomIdentity);
  }, []);

  const handleSelect = useCallback((entry: Entry) => {
    setSelected(prev => prev?.slug === entry.slug ? null : entry);
    // Scroll detail into view on mobile
    setTimeout(() => {
      if (window.innerWidth < 768 && detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  }, []);

  const entriesWithCoords = entries.filter(e => e.coordinates);
  const projected = entriesWithCoords.map(entry => {
    const [lat, lng] = entry.coordinates!;
    const point = projection([lng, lat]);
    return { entry, cx: point?.[0] ?? 0, cy: point?.[1] ?? 0 };
  });

  // Inverse scale for markers so they stay constant visual size
  const markerRadius = 6 / currentScale;
  const hitRadius = 20 / currentScale;
  const strokeWidth = 1.5 / currentScale;

  return (
    <div>
      <p className="text-text-tertiary text-sm mb-4">
        Locations where entries were last known. Click a marker to learn more.
      </p>

      <div className="relative bg-bg-surface rounded-lg border border-border-subtle overflow-hidden">
        {/* Mobile hint */}
        {showHint && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-bg-card/90 backdrop-blur-sm border border-border-subtle rounded-full px-4 py-1.5 text-xs text-text-secondary animate-pulse">
            Pinch to zoom, drag to pan
          </div>
        )}

        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full touch-none"
          style={{ maxHeight: '65vh' }}
        >
          <g ref={gRef}>
            {/* Graticule grid lines */}
            {[-60, -30, 0, 30, 60].map(lat => {
              const d = pathGenerator({ type: 'LineString', coordinates: Array.from({ length: 361 }, (_, i) => [i - 180, lat]) });
              return d ? <path key={`lat${lat}`} d={d} fill="none" stroke="var(--color-border-subtle)" strokeWidth={0.3 / currentScale} /> : null;
            })}
            {[-120, -60, 0, 60, 120].map(lng => {
              const d = pathGenerator({ type: 'LineString', coordinates: Array.from({ length: 181 }, (_, i) => [lng, i - 90]) });
              return d ? <path key={`lng${lng}`} d={d} fill="none" stroke="var(--color-border-subtle)" strokeWidth={0.3 / currentScale} /> : null;
            })}

            {/* Land masses */}
            {landGeo && (
              <path
                d={pathGenerator(landGeo) || ''}
                fill="var(--color-bg-card)"
                stroke="var(--color-border-default)"
                strokeWidth={0.5 / currentScale}
              />
            )}

            {/* Sphere outline */}
            <path
              d={pathGenerator({ type: 'Sphere' } as GeoPermissibleObjects) || ''}
              fill="none"
              stroke="var(--color-border-subtle)"
              strokeWidth={0.5 / currentScale}
            />

            {/* Entry markers */}
            {projected.map(({ entry, cx, cy }) => {
              const meta = CATEGORY_META[entry.category];
              const isSelected = selected?.slug === entry.slug;

              return (
                <g key={entry.slug}>
                  {/* Glow */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? markerRadius * 3 : markerRadius * 1.8}
                    fill={meta.color}
                    opacity={isSelected ? 0.3 : 0.12}
                  />
                  {/* Pulse animation for selected */}
                  {isSelected && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={markerRadius * 2.5}
                      fill="none"
                      stroke={meta.color}
                      strokeWidth={strokeWidth * 0.5}
                      opacity={0.5}
                    >
                      <animate attributeName="r" from={String(markerRadius * 2)} to={String(markerRadius * 4)} dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  {/* Invisible hit target */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={hitRadius}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() => handleSelect(entry)}
                  />
                  {/* Visible marker */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? markerRadius * 1.3 : markerRadius}
                    fill={meta.color}
                    stroke="var(--color-bg-void)"
                    strokeWidth={strokeWidth}
                    className="pointer-events-none"
                  />
                </g>
              );
            })}

            {/* Label for selected */}
            {selected && (() => {
              const p = projected.find(p => p.entry.slug === selected.slug);
              if (!p) return null;
              const fontSize = 11 / currentScale;
              return (
                <text
                  x={p.cx}
                  y={p.cy - markerRadius * 2.5}
                  textAnchor="middle"
                  fill="var(--color-text-primary)"
                  fontSize={fontSize}
                  fontWeight="500"
                  fontFamily="var(--font-body)"
                  className="pointer-events-none"
                >
                  {selected.name}
                </text>
              );
            })()}
          </g>
        </svg>

        {/* Zoom controls */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1 z-10">
          <button
            onClick={handleZoomIn}
            className="size-8 flex items-center justify-center bg-bg-card/80 backdrop-blur-sm border border-border-subtle rounded text-text-primary text-sm font-mono hover:bg-bg-card-hover cursor-pointer transition-colors"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="size-8 flex items-center justify-center bg-bg-card/80 backdrop-blur-sm border border-border-subtle rounded text-text-primary text-sm font-mono hover:bg-bg-card-hover cursor-pointer transition-colors"
            aria-label="Zoom out"
          >
            -
          </button>
          <button
            onClick={handleZoomReset}
            className="size-8 flex items-center justify-center bg-bg-card/80 backdrop-blur-sm border border-border-subtle rounded text-text-tertiary text-[10px] font-mono hover:bg-bg-card-hover cursor-pointer transition-colors"
            aria-label="Reset zoom"
          >
            1:1
          </button>
        </div>
      </div>

      {/* Selected entry detail */}
      <AnimatePresence>
        {selected && (
          <motion.div
            ref={detailRef}
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
