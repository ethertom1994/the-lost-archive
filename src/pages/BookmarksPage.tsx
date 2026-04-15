import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { entries } from '../content';
import EntryCard from '../components/shared/EntryCard';
import MetaTags from '../components/shared/MetaTags';
import { useProgress } from '../hooks/useProgress';

export default function BookmarksPage() {
  const { bookmarkedSlugs } = useProgress();

  const bookmarked = entries.filter(e => bookmarkedSlugs.has(e.slug));

  return (
    <>
      <MetaTags
        title="Your Collection"
        description="Entries you've saved from The Lost Archive."
        path="/bookmarks"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4">
            Your Collection
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Entries you've saved for later.
          </p>
        </motion.div>

        {bookmarked.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookmarked.map((entry, i) => (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <EntryCard entry={entry} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary text-lg mb-2">
              You haven't saved anything yet.
            </p>
            <p className="text-text-tertiary mb-6">
              Tap the heart icon on any entry to add it here.
            </p>
            <Link
              to="/explore"
              className="no-underline inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
            >
              Start exploring
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}
