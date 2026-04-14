import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trails } from '../content/trails';
import { getEntry } from '../content';
import MetaTags from '../components/shared/MetaTags';

function estimateReadingTime(trail: typeof trails[number]) {
  let totalWords = 0;
  for (const stop of trail.entries) {
    const entry = getEntry(stop.slug);
    if (entry) totalWords += entry.body.split(/\s+/).length;
  }
  return Math.max(1, Math.round(totalWords / 200));
}

export default function TrailsPage() {
  return (
    <>
      <MetaTags
        title="Guided Trails"
        description="Curated paths through the archive. Each trail tells a connected story across multiple entries."
        path="/trails"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4">
            Guided Trails
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Curated paths through the archive. Each trail tells a connected story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {trails.map((trail, i) => {
            const readTime = estimateReadingTime(trail);
            return (
              <motion.div
                key={trail.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/trails/${trail.slug}`}
                  className="no-underline group block h-full"
                >
                  <article className="relative bg-bg-card border border-border-subtle rounded-lg p-6 transition-all duration-500 group-hover:bg-bg-card-hover group-hover:border-border-default h-full overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-accent-glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{trail.icon}</span>
                        <div>
                          <h2 className="font-display text-xl font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                            {trail.name}
                          </h2>
                          <p className="text-text-tertiary text-sm italic">
                            {trail.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {trail.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-text-muted">
                        <span>{trail.entries.length} entries</span>
                        <span>~{readTime} min read</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
