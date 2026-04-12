import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';
import type { Entry } from '../../types';

interface Node {
  entry: Entry;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Edge {
  source: string;
  target: string;
  relationship: string;
}

const W = 1000;
const H = 700;

function buildGraph() {
  const nodes: Node[] = entries.map((entry, i) => {
    const angle = (i / entries.length) * Math.PI * 2;
    const radius = 250;
    return {
      entry,
      x: W / 2 + Math.cos(angle) * radius,
      y: H / 2 + Math.sin(angle) * radius,
      vx: 0,
      vy: 0,
    };
  });

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

  return { nodes, edges };
}

function simulate(nodes: Node[], edges: Edge[], iterations: number) {
  const cx = W / 2, cy = H / 2;

  // Build adjacency for fast lookups
  const nodeMap = new Map(nodes.map(n => [n.entry.slug, n]));

  for (let iter = 0; iter < iterations; iter++) {
    const alpha = Math.max(0.01, 1 - iter / iterations);

    // Repulsion between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
        const force = (2000 * alpha) / (dist * dist);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        nodes[i].vx -= fx;
        nodes[i].vy -= fy;
        nodes[j].vx += fx;
        nodes[j].vy += fy;
      }
    }

    // Attraction along edges
    for (const edge of edges) {
      const source = nodeMap.get(edge.source)!;
      const target = nodeMap.get(edge.target)!;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = (dist - 100) * 0.015 * alpha;
      const fx = (dx / Math.max(dist, 1)) * force;
      const fy = (dy / Math.max(dist, 1)) * force;
      source.vx += fx;
      source.vy += fy;
      target.vx -= fx;
      target.vy -= fy;
    }

    // Center gravity
    for (const node of nodes) {
      node.vx += (cx - node.x) * 0.005 * alpha;
      node.vy += (cy - node.y) * 0.005 * alpha;
    }

    // Apply velocity with damping
    for (const node of nodes) {
      node.vx *= 0.6;
      node.vy *= 0.6;
      node.x += node.vx;
      node.y += node.vy;
      node.x = Math.max(50, Math.min(W - 50, node.x));
      node.y = Math.max(40, Math.min(H - 40, node.y));
    }
  }
}

// Pre-compute connection counts
function getConnectionCounts(edges: Edge[]) {
  const counts = new Map<string, number>();
  for (const e of edges) {
    counts.set(e.source, (counts.get(e.source) ?? 0) + 1);
    counts.set(e.target, (counts.get(e.target) ?? 0) + 1);
  }
  return counts;
}

export default function WebView() {
  const [graph, setGraph] = useState<{ nodes: Node[]; edges: Edge[] } | null>(null);
  const [selected, setSelected] = useState<Entry | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const { nodes, edges } = buildGraph();
    simulate(nodes, edges, 400);
    setGraph({ nodes, edges });
  }, []);

  if (!graph) return null;

  const connCounts = getConnectionCounts(graph.edges);
  const nodeMap = new Map(graph.nodes.map(n => [n.entry.slug, n]));

  // Determine which edges to highlight
  const highlightedSlugs = new Set<string>();
  if (selected) {
    highlightedSlugs.add(selected.slug);
    for (const e of graph.edges) {
      if (e.source === selected.slug) highlightedSlugs.add(e.target);
      if (e.target === selected.slug) highlightedSlugs.add(e.source);
    }
  }

  return (
    <div>
      <p className="text-text-tertiary text-sm mb-6">
        Entries connected by shared themes and relationships. Click a node to explore.
      </p>

      <div className="bg-bg-surface rounded-lg border border-border-subtle overflow-hidden">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: '65vh' }}>
          {/* Edges */}
          {graph.edges.map(edge => {
            const source = nodeMap.get(edge.source)!;
            const target = nodeMap.get(edge.target)!;
            const isHighlighted = selected && (selected.slug === edge.source || selected.slug === edge.target);
            return (
              <line
                key={`${edge.source}-${edge.target}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={isHighlighted ? 'var(--color-accent-dim)' : 'var(--color-border-default)'}
                strokeWidth={isHighlighted ? 1.5 : 0.5}
                opacity={selected ? (isHighlighted ? 0.8 : 0.1) : 0.3}
              />
            );
          })}

          {/* Nodes */}
          {graph.nodes.map(node => {
            const meta = CATEGORY_META[node.entry.category];
            const isSelected = selected?.slug === node.entry.slug;
            const isConnected = highlightedSlugs.has(node.entry.slug);
            const count = connCounts.get(node.entry.slug) ?? 0;
            const radius = 6 + count * 1.5;
            const dimmed = selected && !isConnected;

            return (
              <g key={node.entry.slug} className="cursor-pointer" opacity={dimmed ? 0.2 : 1}>
                {isSelected && (
                  <circle cx={node.x} cy={node.y} r={radius + 10} fill={meta.color} opacity={0.12} />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={isSelected ? meta.color : 'var(--color-bg-card)'}
                  stroke={meta.color}
                  strokeWidth={isSelected ? 2.5 : 1.5}
                  onClick={() => setSelected(isSelected ? null : node.entry)}
                />
                {!dimmed && (
                  <text
                    x={node.x}
                    y={node.y + radius + 12}
                    textAnchor="middle"
                    fill={isSelected || isConnected ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'}
                    fontSize="9"
                    fontFamily="var(--font-body)"
                    className="pointer-events-none"
                  >
                    {node.entry.name.length > 20 ? node.entry.name.slice(0, 18) + '...' : node.entry.name}
                  </text>
                )}
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
