import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';

export default function OnThisDay() {
  const today = new Date();
  const todayKey = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const match = useMemo(() => {
    const dated = entries.filter(e => e.keyDate === todayKey);
    if (dated.length > 0) return dated[0];
    // Fallback: random featured-quality entry
    const featured = entries.filter(e => e.featured);
    if (featured.length > 0) return featured[Math.floor(Math.random() * featured.length)];
    return entries[Math.floor(Math.random() * entries.length)];
  }, [todayKey]);

  if (!match) return null;

  const isToday = match.keyDate === todayKey;
  const meta = CATEGORY_META[match.category];

  return (
    <motion.section
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link
        to={`/archive/${match.slug}`}
        className="no-underline group block bg-bg-card border border-border-subtle rounded-lg p-6 transition-all duration-500 hover:bg-bg-card-hover hover:border-border-default overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-accent-glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={14} className="text-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              {isToday ? 'On This Day' : 'From the Archive'}
            </span>
          </div>

          <h3 className="font-display text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300 mb-2">
            {match.name}
          </h3>

          {isToday && match.keyDateLabel && (
            <p className="text-text-secondary text-sm italic mb-2">
              {match.keyDateLabel}
            </p>
          )}

          <p className="text-text-tertiary text-sm leading-relaxed line-clamp-2 mb-3">
            {match.tagline}
          </p>

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full" style={{ backgroundColor: meta.color }} />
            <span className="text-xs text-text-muted">{meta.label}</span>
            <span className="text-text-muted text-xs ml-auto">{match.lastKnownYear}</span>
          </div>
        </div>
      </Link>
    </motion.section>
  );
}
