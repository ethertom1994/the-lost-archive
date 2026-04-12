import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { zoom as d3Zoom } from 'd3-zoom';
import { select } from 'd3-selection';
import { entries } from '../../content';
import { CATEGORY_META, type Category } from '../../types';
import type { Entry } from '../../types';

interface NodePos {
  entry: Entry;
  x: number;
  y: number;
}

interface Edge {
  source: string;
  target: string;
  relationship: string;
}

const SIZE = 1200;
const CENTER = SIZE / 2;
const RING_RADIUS = 420;
const CLUSTER_RADIUS = 90;

function buildEdges(): Edge[] {
  const edgeSet = new Set<string>();
  const edges: Edge[] = [];
  for (const entry of entries) {
    for (const conn of entry.connections) {
      const key = [entry.slug, conn.slug].sort().join('|');
      if (!edgeSet.has(key) && entries.find(e => e.slug === conn.slug)) {
        edgeSet.add(key);
        edges.push({ source: entry.slug, target: conn.slug, relationship: conn.relationship });
      }
    }
  }
  return edges;
}

function buildRadialLayout(): NodePos[] {
  const categories = Object.keys(CATEGORY_META) as Category[];
  const grouped = new Map<Category, Entry[]>();
  for (const cat of categories) {
    grouped.set(cat, entries.filter(e => e.category === cat));
  }

  const nodes: NodePos[] = [];

  categories.forEach((cat, catIndex) => {
    const catEntries = grouped.get(cat) || [];
    const catAngle = (catIndex / categories.length) * Math.PI * 2 - Math.PI / 2;
    const catCenterX = CENTER + Math.cos(catAngle) * RING_RADIUS;
    const catCenterY = CENTER + Math.sin(catAngle) * RING_RADIUS;

    catEntries.forEach((entry, entryIndex) => {
      const count = catEntries.length;
      let x: number, y: number;

      if (count === 1) {
        x = catCenterX;
        y = catCenterY;
      } else {
        // Spread entries in a small arc around the category center
        const spreadAngle = Math.min(Math.PI * 0.8, (count * 0.25));
        const startAngle = catAngle - spreadAngle / 2;
        const entryAngle = startAngle + (entryIndex / (count - 1)) * spreadAngle;
        const entryRadius = CLUSTER_RADIUS * (0.5 + (entryIndex % 2) * 0.5);
        x = catCenterX + Math.cos(entryAngle) * entryRadius;
        y = catCenterY + Math.sin(entryAngle) * entryRadius;
      }

      nodes.push({ entry, x, y });
    });
  });

  return nodes;
}

function getCurvedPath(x1: number, y1: number, x2: number, y2: number): string {
  // Bezier curve that bows slightly toward center
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = midX - CENTER;
  const dy = midY - CENTER;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // Pull control point toward center by a fraction
  const pull = Math.min(0.3, 80 / dist);
  const cx = midX - dx * pull;
  const cy = midY - dy * pull;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

export default function WebView() {
  const [selected, setSelected] = useState<Entry | null>(null);
  const [currentScale, setCurrentScale] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const nodes = useMemo(() => buildRadialLayout(), []);
  const edges = useMemo(() => buildEdges(), []);
  const nodeMap = useMemo(() => new Map(nodes.map(n => [n.entry.slug, n])), [nodes]);

  // d3-zoom for mobile
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = select(svgRef.current);
    const g = select(gRef.current);

    const zoomBehavior = d3Zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.5, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
        setCurrentScale(event.transform.k);
      });

    svg.call(zoomBehavior);

    return () => { svg.on('.zoom', null); };
  }, []);

  const handleSelect = useCallback((entry: Entry) => {
    setSelected(prev => prev?.slug === entry.slug ? null : entry);
    setTimeout(() => {
      if (window.innerWidth < 768 && detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  }, []);

  // Determine highlighted nodes
  const highlightedSlugs = useMemo(() => {
    const set = new Set<string>();
    if (selected) {
      set.add(selected.slug);
      for (const e of edges) {
        if (e.source === selected.slug) set.add(e.target);
        if (e.target === selected.slug) set.add(e.source);
      }
    }
    return set;
  }, [selected, edges]);

  const categories = Object.entries(CATEGORY_META) as [Category, typeof CATEGORY_META[Category]][];
  const nodeRadius = 5 / currentScale;
  const hitRadius = 16 / currentScale;

  return (
    <div>
      <p className="text-text-tertiary text-sm mb-4">
        Entries grouped by category, connected by shared themes. Tap a node to explore connections.
      </p>

      <div className="bg-bg-surface rounded-lg border border-border-subtle overflow-hidden">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full touch-none"
          style={{ maxHeight: '75vh' }}
        >
          <g ref={gRef}>
            {/* Category labels on the ring */}
            {categories.map(([key, meta], i) => {
              const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
              const labelRadius = RING_RADIUS + CLUSTER_RADIUS + 30;
              const lx = CENTER + Math.cos(angle) * labelRadius;
              const ly = CENTER + Math.sin(angle) * labelRadius;
              const fontSize = 12 / currentScale;
              return (
                <text
                  key={key}
                  x={lx}
                  y={ly}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={meta.color}
                  fontSize={fontSize}
                  fontFamily="var(--font-body)"
                  fontWeight="500"
                  className="pointer-events-none"
                >
                  {meta.icon} {meta.label}
                </text>
              );
            })}

            {/* Connection edges */}
            {edges.map(edge => {
              const source = nodeMap.get(edge.source);
              const target = nodeMap.get(edge.target);
              if (!source || !target) return null;

              const isHighlighted = selected && (selected.slug === edge.source || selected.slug === edge.target);
              const path = getCurvedPath(source.x, source.y, target.x, target.y);

              return (
                <path
                  key={`${edge.source}-${edge.target}`}
                  d={path}
                  fill="none"
                  stroke={isHighlighted ? 'var(--color-accent-dim)' : 'var(--color-border-default)'}
                  strokeWidth={(isHighlighted ? 1.5 : 0.5) / currentScale}
                  opacity={selected ? (isHighlighted ? 0.7 : 0.05) : 0.15}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map(({ entry, x, y }) => {
              const meta = CATEGORY_META[entry.category];
              const isSelected = selected?.slug === entry.slug;
              const isConnected = highlightedSlugs.has(entry.slug);
              const dimmed = selected && !isConnected;

              return (
                <g key={entry.slug} opacity={dimmed ? 0.15 : 1}>
                  {/* Selection halo */}
                  {isSelected && (
                    <circle
                      cx={x} cy={y}
                      r={nodeRadius * 3}
                      fill={meta.color}
                      opacity={0.2}
                    />
                  )}
                  {/* Hit target */}
                  <circle
                    cx={x} cy={y}
                    r={hitRadius}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() => handleSelect(entry)}
                  />
                  {/* Visible node */}
                  <circle
                    cx={x} cy={y}
                    r={isSelected ? nodeRadius * 1.5 : nodeRadius}
                    fill={isSelected || isConnected ? meta.color : 'var(--color-bg-card)'}
                    stroke={meta.color}
                    strokeWidth={(isSelected ? 2 : 1) / currentScale}
                    className="pointer-events-none"
                  />
                  {/* Label - only show for selected/connected or when not too zoomed out */}
                  {(isSelected || (isConnected && selected)) && (
                    <text
                      x={x}
                      y={y - nodeRadius * 2.5}
                      textAnchor="middle"
                      fill="var(--color-text-primary)"
                      fontSize={11 / currentScale}
                      fontFamily="var(--font-body)"
                      fontWeight={isSelected ? '600' : '400'}
                      className="pointer-events-none"
                    >
                      {entry.name.length > 22 ? entry.name.slice(0, 20) + '...' : entry.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
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
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="size-2 rounded-full shrink-0"
                    style={{ backgroundColor: CATEGORY_META[selected.category].color }}
                  />
                  <span className="text-xs" style={{ color: CATEGORY_META[selected.category].color }}>
                    {CATEGORY_META[selected.category].label}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-text-primary mb-1">{selected.name}</h3>
                <p className="text-text-secondary text-sm mb-2">{selected.tagline}</p>
                <div className="text-xs text-text-tertiary mb-3">
                  Connected to:{' '}
                  {selected.connections
                    .filter(c => entries.find(e => e.slug === c.slug))
                    .map(c => entries.find(e => e.slug === c.slug)!.name)
                    .join(', ')}
                </div>
                <Link to={`/archive/${selected.slug}`} className="text-accent text-sm hover:underline">
                  Read full story →
                </Link>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-text-muted hover:text-text-primary text-sm cursor-pointer shrink-0"
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
