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

function buildGraph() {
  const nodes: Node[] = entries.map((entry, i) => {
    const angle = (i / entries.length) * Math.PI * 2;
    const radius = 150;
    return {
      entry,
      x: 300 + Math.cos(angle) * radius,
      y: 250 + Math.sin(angle) * radius,
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
  const cx = 300, cy = 250;

  for (let iter = 0; iter < iterations; iter++) {
    const alpha = 1 - iter / iterations;

    // Repulsion between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
        const force = (800 * alpha) / (dist * dist);
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
      const source = nodes.find(n => n.entry.slug === edge.source)!;
      const target = nodes.find(n => n.entry.slug === edge.target)!;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = (dist - 120) * 0.02 * alpha;
      const fx = (dx / Math.max(dist, 1)) * force;
      const fy = (dy / Math.max(dist, 1)) * force;
      source.vx += fx;
      source.vy += fy;
      target.vx -= fx;
      target.vy -= fy;
    }

    // Center gravity
    for (const node of nodes) {
      node.vx += (cx - node.x) * 0.01 * alpha;
      node.vy += (cy - node.y) * 0.01 * alpha;
    }

    // Apply velocity with damping
    for (const node of nodes) {
      node.vx *= 0.6;
      node.vy *= 0.6;
      node.x += node.vx;
      node.y += node.vy;
      // Clamp to bounds
      node.x = Math.max(60, Math.min(540, node.x));
      node.y = Math.max(60, Math.min(440, node.y));
    }
  }
}

export default function WebView() {
  const [graph, setGraph] = useState<{ nodes: Node[]; edges: Edge[] } | null>(null);
  const [selected, setSelected] = useState<Entry | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const { nodes, edges } = buildGraph();
    simulate(nodes, edges, 200);
    setGraph({ nodes, edges });
  }, []);

  if (!graph) return null;

  return (
    <div>
      <p className="text-text-tertiary text-sm mb-6">
        Entries connected by shared themes and relationships. Click a node to explore.
      </p>

      <div className="bg-bg-surface rounded-lg border border-border-subtle overflow-hidden">
        <svg viewBox="0 0 600 500" className="w-full" style={{ maxHeight: '60vh' }}>
          {/* Edges */}
          {graph.edges.map(edge => {
            const source = graph.nodes.find(n => n.entry.slug === edge.source)!;
            const target = graph.nodes.find(n => n.entry.slug === edge.target)!;
            const isHighlighted = selected && (selected.slug === edge.source || selected.slug === edge.target);
            return (
              <line
                key={`${edge.source}-${edge.target}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={isHighlighted ? 'var(--color-accent-dim)' : 'var(--color-border-default)'}
                strokeWidth={isHighlighted ? 2 : 1}
                opacity={isHighlighted ? 0.8 : 0.4}
              />
            );
          })}

          {/* Nodes */}
          {graph.nodes.map(node => {
            const meta = CATEGORY_META[node.entry.category];
            const isSelected = selected?.slug === node.entry.slug;
            const connectionCount = graph.edges.filter(
              e => e.source === node.entry.slug || e.target === node.entry.slug
            ).length;
            const radius = 12 + connectionCount * 3;

            return (
              <g key={node.entry.slug} className="cursor-pointer">
                {/* Glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius + 8}
                  fill={meta.color}
                  opacity={isSelected ? 0.15 : 0}
                  className="transition-opacity duration-300"
                />
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={isSelected ? meta.color : 'var(--color-bg-card)'}
                  stroke={meta.color}
                  strokeWidth={isSelected ? 3 : 2}
                  onClick={() => setSelected(isSelected ? null : node.entry)}
                  className="transition-all duration-300 hover:opacity-80"
                />
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + radius + 16}
                  textAnchor="middle"
                  fill="var(--color-text-secondary)"
                  fontSize="11"
                  fontFamily="var(--font-body)"
                  className="pointer-events-none"
                >
                  {node.entry.name}
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
                </div>
                <h3 className="font-display text-xl font-medium text-text-primary mb-1">{selected.name}</h3>
                <p className="text-text-secondary text-sm mb-2">{selected.tagline}</p>

                {/* Show connections */}
                <div className="text-xs text-text-tertiary mb-3">
                  Connected to:{' '}
                  {selected.connections
                    .filter(c => entries.find(e => e.slug === c.slug))
                    .map(c => entries.find(e => e.slug === c.slug)!.name)
                    .join(', ')}
                </div>

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
