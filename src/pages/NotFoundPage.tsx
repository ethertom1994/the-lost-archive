import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { entries } from '../content';
import EntryCard from '../components/shared/EntryCard';
import MetaTags from '../components/shared/MetaTags';

export default function NotFoundPage() {
  const suggestions = useMemo(() => {
    const shuffled = [...entries].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  return (
    <>
      <MetaTags
        title="Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />

      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4">
          Lost in the Archive
        </h1>
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist — but perhaps it once did.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="no-underline inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-6 py-3 text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
          >
            Return home
          </Link>
          <Link
            to="/explore"
            className="no-underline inline-flex items-center gap-2 bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary rounded-full px-6 py-3 text-sm font-medium hover:bg-bg-card-hover transition-colors duration-300"
          >
            Explore everything
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xl font-medium text-text-secondary mb-6">
            You might be looking for...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {suggestions.map(entry => (
              <EntryCard key={entry.slug} entry={entry} variant="compact" />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
