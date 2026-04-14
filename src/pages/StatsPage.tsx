import { useMemo, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { entries } from '../content';
import { trails } from '../content/trails';
import { CATEGORY_META, type Category } from '../types';
import { categorizeCause, CAUSE_META, type LossCause } from '../utils/causes';
import MetaTags from '../components/shared/MetaTags';
import { useProgress } from '../hooks/useProgress';

function parseYear(y: number | string): number {
  if (typeof y === 'number') return y;
  const s = String(y);
  const neg = s.toLowerCase().includes('bce') || s.toLowerCase().includes('bc');
  const match = s.match(/(\d+)/);
  if (!match) return 0;
  const num = parseInt(match[1], 10);
  return neg ? -num : num;
}

function AnimatedBar({ width, delay, color, className = '' }: { width: number; delay: number; color: string; className?: string }) {
  const ref = useRef<SVGRectElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <rect
      ref={ref}
      width={visible ? width : 0}
      height="100%"
      fill={color}
      rx={3}
      className={className}
      style={{ transition: `width 0.8s ease-out ${delay}s` }}
    />
  );
}

const TIME_PERIODS = [
  { label: 'Ancient', min: -10000, max: 500 },
  { label: 'Medieval', min: 500, max: 1500 },
  { label: '1500s', min: 1500, max: 1600 },
  { label: '1600s', min: 1600, max: 1700 },
  { label: '1700s', min: 1700, max: 1800 },
  { label: '1800-1850', min: 1800, max: 1850 },
  { label: '1850-1900', min: 1850, max: 1900 },
  { label: '1900-1950', min: 1900, max: 1950 },
  { label: '1950-2000', min: 1950, max: 2000 },
  { label: '2000+', min: 2000, max: 2100 },
];

export default function StatsPage() {
  const { readCount, totalCount, percentage, categoriesVisited, readSlugs } = useProgress();

  const completedTrails = useMemo(() => {
    return trails.filter(trail =>
      trail.entries.every(stop => readSlugs.has(stop.slug))
    );
  }, [readSlugs]);

  const stats = useMemo(() => {
    const years = entries.map(e => parseYear(e.lastKnownYear)).filter(y => y !== 0);
    const oldest = entries.reduce((a, b) => parseYear(a.lastKnownYear) < parseYear(b.lastKnownYear) ? a : b);
    const newest = entries.reduce((a, b) => parseYear(a.lastKnownYear) > parseYear(b.lastKnownYear) ? a : b);

    const byPeriod = TIME_PERIODS.map(p => ({
      ...p,
      count: years.filter(y => y >= p.min && y < p.max).length,
    }));

    const catCounts = (Object.keys(CATEGORY_META) as Category[]).map(key => ({
      key,
      meta: CATEGORY_META[key],
      count: entries.filter(e => e.category === key).length,
    })).sort((a, b) => b.count - a.count);

    const causeMap = new Map<LossCause, number>();
    for (const e of entries) {
      const c = categorizeCause(e);
      causeMap.set(c, (causeMap.get(c) ?? 0) + 1);
    }
    const causeCounts = Array.from(causeMap.entries())
      .map(([key, count]) => ({ key, ...CAUSE_META[key], count }))
      .sort((a, b) => b.count - a.count);

    const regionMap = new Map<string, number>();
    for (const e of entries) {
      regionMap.set(e.region, (regionMap.get(e.region) ?? 0) + 1);
    }
    const regionCounts = Array.from(regionMap.entries())
      .map(([region, count]) => ({ region, count }))
      .sort((a, b) => b.count - a.count);

    return { oldest, newest, byPeriod, catCounts, causeCounts, regionCounts };
  }, []);

  const maxPeriod = Math.max(...stats.byPeriod.map(p => p.count));
  const maxCat = Math.max(...stats.catCounts.map(c => c.count));
  const maxCause = Math.max(...stats.causeCounts.map(c => c.count));
  const maxRegion = Math.max(...stats.regionCounts.map(r => r.count));

  return (
    <>
      <MetaTags
        title="The Scale of Loss"
        description="Visualizing the scope of extinction. How much we've lost, when, where, and why."
        path="/stats"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4">
            The Scale of Loss
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            How much we've lost, when, where, and why.
          </p>
        </motion.div>

        {/* Summary numbers */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: entries.length, label: 'Entries in the archive' },
            { value: Object.keys(CATEGORY_META).length, label: 'Categories of loss' },
            { value: String(stats.oldest.lastKnownYear), label: `Oldest: ${stats.oldest.name}` },
            { value: String(stats.newest.lastKnownYear), label: `Most recent: ${stats.newest.name}` },
          ].map((s, i) => (
            <div key={i} className="bg-bg-card border border-border-subtle rounded-lg p-5 text-center">
              <p className="font-display text-3xl sm:text-4xl font-medium text-accent mb-1">{s.value}</p>
              <p className="text-xs text-text-tertiary leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* The Acceleration */}
        <section className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary mb-2">The Acceleration</h2>
          <p className="text-text-tertiary text-sm mb-8">When things were lost, by time period.</p>

          <div className="space-y-3">
            {stats.byPeriod.map((p, i) => (
              <div key={p.label} className="flex items-center gap-3">
                <span className="text-xs text-text-tertiary w-24 text-right shrink-0 font-mono">{p.label}</span>
                <div className="flex-1 h-7 relative">
                  <svg width="100%" height="100%">
                    <AnimatedBar
                      width={(p.count / maxPeriod) * 100}
                      delay={i * 0.08}
                      color="var(--color-accent)"
                    />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary w-8 text-right font-mono">{p.count}</span>
              </div>
            ))}
          </div>

          <p className="text-text-tertiary text-sm mt-6 italic">
            More was lost in the last 200 years than in the previous 2,000.
          </p>
        </section>

        {/* By Category */}
        <section className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary mb-2">By Category</h2>
          <p className="text-text-tertiary text-sm mb-8">What kinds of things have been lost.</p>

          <div className="space-y-3">
            {stats.catCounts.map((c, i) => (
              <div key={c.key} className="flex items-center gap-3">
                <span className="text-lg w-7 text-center shrink-0">{c.meta.icon}</span>
                <span className="text-sm text-text-secondary w-32 shrink-0">{c.meta.label}</span>
                <div className="flex-1 h-7 relative">
                  <svg width="100%" height="100%">
                    <AnimatedBar
                      width={(c.count / maxCat) * 100}
                      delay={i * 0.06}
                      color={c.meta.color}
                    />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary w-8 text-right font-mono">{c.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* By Cause */}
        <section className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary mb-2">By Cause</h2>
          <p className="text-text-tertiary text-sm mb-8">Why things were lost.</p>

          <div className="space-y-3">
            {stats.causeCounts.map((c, i) => (
              <div key={c.key} className="flex items-center gap-3">
                <span className="text-lg w-7 text-center shrink-0">{c.icon}</span>
                <span className="text-sm text-text-secondary w-40 shrink-0">{c.label}</span>
                <div className="flex-1 h-7 relative">
                  <svg width="100%" height="100%">
                    <AnimatedBar
                      width={(c.count / maxCause) * 100}
                      delay={i * 0.06}
                      color="var(--color-accent-dim)"
                    />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary w-8 text-right font-mono">{c.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* By Region */}
        <section className="mb-20">
          <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary mb-2">By Region</h2>
          <p className="text-text-tertiary text-sm mb-8">Where things were lost.</p>

          <div className="space-y-3">
            {stats.regionCounts.map((r, i) => (
              <div key={r.region} className="flex items-center gap-3">
                <span className="text-sm text-text-secondary w-40 shrink-0">{r.region}</span>
                <div className="flex-1 h-7 relative">
                  <svg width="100%" height="100%">
                    <AnimatedBar
                      width={(r.count / maxRegion) * 100}
                      delay={i * 0.06}
                      color="var(--color-accent)"
                    />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary w-8 text-right font-mono">{r.count}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Your Journey */}
        {readCount > 0 && (
          <section className="mb-20 pt-12 border-t border-border-subtle">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary mb-2">Your Journey</h2>
            <p className="text-text-tertiary text-sm mb-8">Your personal exploration of the archive.</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-bg-card border border-border-subtle rounded-lg p-5 text-center">
                <p className="font-display text-3xl font-medium text-accent mb-1">{readCount}</p>
                <p className="text-xs text-text-tertiary">of {totalCount} explored</p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-lg p-5 text-center">
                <p className="font-display text-3xl font-medium text-accent mb-1">{percentage}%</p>
                <p className="text-xs text-text-tertiary">of the archive</p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-lg p-5 text-center">
                <p className="font-display text-3xl font-medium text-accent mb-1">{categoriesVisited.size}</p>
                <p className="text-xs text-text-tertiary">of {Object.keys(CATEGORY_META).length} categories</p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-lg p-5 text-center">
                <p className="font-display text-3xl font-medium text-accent mb-1">{completedTrails.length}</p>
                <p className="text-xs text-text-tertiary">of {trails.length} trails completed</p>
              </div>
            </div>

            {categoriesVisited.size > 0 && (
              <div className="mb-6">
                <p className="text-sm text-text-secondary mb-2">Categories touched:</p>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(CATEGORY_META) as Category[])
                    .filter(cat => categoriesVisited.has(cat))
                    .map(cat => (
                      <span
                        key={cat}
                        className="text-xs px-2.5 py-1 rounded-full border border-border-subtle"
                        style={{ color: CATEGORY_META[cat].color }}
                      >
                        {CATEGORY_META[cat].icon} {CATEGORY_META[cat].label}
                      </span>
                    ))}
                </div>
              </div>
            )}

            {completedTrails.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-text-secondary mb-2">Trails completed:</p>
                <div className="flex flex-wrap gap-2">
                  {completedTrails.map(trail => (
                    <Link
                      key={trail.slug}
                      to={`/trails/${trail.slug}`}
                      className="no-underline text-xs px-2.5 py-1 rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-colors"
                    >
                      {trail.icon} {trail.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <Link
                to="/explore"
                className="no-underline inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
              >
                Keep exploring
              </Link>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
