import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { getFeaturedEntry, entries } from '../content';
import { CATEGORY_META, type Category } from '../types';
import EntryCard from '../components/shared/EntryCard';
import MetaTags from '../components/shared/MetaTags';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const categories = Object.entries(CATEGORY_META) as [Category, typeof CATEGORY_META[Category]][];

export default function HomePage() {
  const featured = getFeaturedEntry();

  return (
    <>
      <MetaTags
        title="The Lost Archive"
        description="An interactive museum of everything humanity has lost. Extinct animals, vanished fruits, dead languages, lost pigments, erased landscapes, and more."
        path="/"
      />

      {/* Featured Story Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(200,150,90,0.06),transparent_70%)]" />

        {featured && (
          <motion.div
            className="relative max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Link
              to={`/explore?category=${featured.category}`}
              className="no-underline inline-flex items-center gap-2 text-sm font-medium mb-6"
              style={{ color: CATEGORY_META[featured.category].color }}
            >
              <span
                className="size-2 rounded-full"
                style={{ backgroundColor: CATEGORY_META[featured.category].color }}
              />
              {CATEGORY_META[featured.category].label}
            </Link>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-text-primary leading-[1.1] mb-6">
              {featured.name}
            </h1>

            <p className="font-display text-xl sm:text-2xl italic text-text-secondary mb-4 max-w-2xl mx-auto">
              {featured.tagline}
            </p>

            <p className="text-text-tertiary text-sm mb-8">
              Last known: {featured.lastKnownYear} · {featured.lastKnownLocation}
            </p>

            <Link
              to={`/archive/${featured.slug}`}
              className="no-underline inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-6 py-3 text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
            >
              Read this story <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Category Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div className="text-center mb-12" {...fadeIn}>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-text-primary mb-3">
            Explore the Archive
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From vanished species to forgotten flavors, lost sounds to erased landscapes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([key, meta], i) => {
            const count = entries.filter(e => e.category === key).length;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/explore?category=${key}`}
                  className="no-underline group block"
                >
                  <div className="relative bg-bg-card border border-border-subtle rounded-lg p-5 transition-all duration-500 group-hover:bg-bg-card-hover group-hover:border-border-default overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-accent-glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{meta.icon}</span>
                        <h3 className="font-display text-lg font-medium text-text-primary">
                          {meta.label}
                        </h3>
                      </div>
                      <p className="text-text-tertiary text-sm mb-3">{meta.description}</p>
                      <span className="text-xs text-text-muted">
                        {count} {count === 1 ? 'entry' : 'entries'}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Recent Entries */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div className="mb-8" {...fadeIn}>
          <h2 className="font-display text-3xl font-medium text-text-primary mb-2">
            Recently Added
          </h2>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
          {entries.slice(0, 8).map((entry, i) => (
            <motion.div
              key={entry.slug}
              className="min-w-[280px] max-w-[320px] snap-start shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
            >
              <EntryCard entry={entry} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
