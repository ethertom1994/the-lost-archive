import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Entry } from '../../types';
import { CATEGORY_META } from '../../types';

interface EntryCardProps {
  entry: Entry;
  variant?: 'default' | 'compact';
}

export default function EntryCard({ entry, variant = 'default' }: EntryCardProps) {
  const meta = CATEGORY_META[entry.category];

  return (
    <Link to={`/archive/${entry.slug}`} className="no-underline block group">
      <motion.article
        className="relative bg-bg-card rounded-lg border border-border-subtle overflow-hidden transition-colors duration-500 group-hover:bg-bg-card-hover group-hover:border-border-default h-full"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-accent-glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

        {variant === 'default' && (
          <div className="h-40 bg-bg-surface relative overflow-hidden museum-vignette">
            {entry.imageUrl ? (
              <img
                src={entry.imageUrl}
                alt={entry.name}
                className="w-full h-full object-cover museum-img"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-bg-surface via-bg-card to-bg-surface flex items-center justify-center">
                <span className="text-5xl opacity-10">{meta.icon}</span>
              </div>
            )}
          </div>
        )}

        <div className={`relative z-10 ${variant === 'compact' ? 'p-4' : 'p-5'}`}>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="size-2 rounded-full shrink-0"
              style={{ backgroundColor: meta.color }}
            />
            <span className="text-xs font-medium" style={{ color: meta.color }}>
              {meta.label}
            </span>
            <span className="text-text-muted text-xs ml-auto">{entry.lastKnownYear}</span>
          </div>

          <h3 className="font-display text-lg font-medium text-text-primary mb-1.5 leading-snug line-clamp-1">
            {entry.name}
          </h3>

          <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
            {entry.tagline}
          </p>

          {variant === 'default' && (
            <p className="text-text-tertiary text-xs mt-3 truncate">
              {entry.lastKnownLocation}
            </p>
          )}
        </div>
      </motion.article>
    </Link>
  );
}
