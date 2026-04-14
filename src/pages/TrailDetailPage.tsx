import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { getTrail } from '../content/trails';
import { getEntry } from '../content';
import EntryCard from '../components/shared/EntryCard';
import MetaTags from '../components/shared/MetaTags';
import { useProgress } from '../hooks/useProgress';

export default function TrailDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const trail = slug ? getTrail(slug) : undefined;
  const { isRead } = useProgress();

  if (!trail) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-3xl text-text-primary mb-4">Trail Not Found</h1>
        <p className="text-text-secondary mb-6">This trail doesn't exist or may have been lost.</p>
        <Link to="/trails" className="text-accent hover:underline">
          Browse all trails
        </Link>
      </div>
    );
  }

  const resolvedEntries = trail.entries.map(stop => ({
    ...stop,
    entry: getEntry(stop.slug),
  }));

  const totalWords = resolvedEntries.reduce((sum, s) => {
    return sum + (s.entry?.body.split(/\s+/).length ?? 0);
  }, 0);
  const readTime = Math.max(1, Math.round(totalWords / 200));

  const readStops = resolvedEntries.filter(s => s.entry && isRead(s.entry.slug)).length;
  const totalStops = resolvedEntries.length;
  const completionPct = totalStops > 0 ? Math.round((readStops / totalStops) * 100) : 0;

  return (
    <>
      <MetaTags
        title={trail.name}
        description={trail.description}
        path={`/trails/${trail.slug}`}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Back link */}
        <Link
          to="/trails"
          className="no-underline inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={14} />
          Back to trails
        </Link>

        {/* Trail header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{trail.icon}</span>
            <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-primary">
              {trail.name}
            </h1>
          </div>
          <p className="text-text-secondary leading-relaxed mb-4">
            {trail.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-text-tertiary">
            <span>{totalStops} entries</span>
            <span>~{readTime} min read</span>
            {readStops > 0 && (
              <span className="text-accent">{completionPct}% explored</span>
            )}
          </div>
        </motion.header>

        {/* Trail progression */}
        <div className="relative">
          {resolvedEntries.map((stop, i) => {
            if (!stop.entry) return null;
            const visited = isRead(stop.entry.slug);

            return (
              <motion.div
                key={stop.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                {/* Transition text */}
                <div className="relative pl-6 mb-4">
                  <div
                    className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full"
                    style={{ backgroundColor: trail.color, opacity: 0.3 }}
                  />
                  <p className="text-text-secondary text-sm italic leading-relaxed">
                    {stop.transitionText}
                  </p>
                </div>

                {/* Entry card with stop label */}
                <div className="relative ml-2 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="flex items-center justify-center size-6 rounded-full text-[10px] font-bold shrink-0"
                      style={{
                        backgroundColor: visited ? trail.color : 'transparent',
                        border: `2px solid ${trail.color}`,
                        color: visited ? 'var(--color-bg-void)' : trail.color,
                      }}
                    >
                      {visited ? <Check size={12} /> : i + 1}
                    </div>
                    <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
                      Stop {i + 1} of {totalStops}
                    </span>
                  </div>
                  <Link
                    to={`/archive/${stop.entry.slug}?trail=${trail.slug}&stop=${i}`}
                    className="no-underline block"
                  >
                    <EntryCard entry={stop.entry} />
                  </Link>
                </div>

                {/* Connecting line between stops */}
                {i < resolvedEntries.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div
                      className="w-[1px] h-8"
                      style={{
                        borderLeft: `2px dashed ${trail.color}`,
                        opacity: 0.25,
                      }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Trail complete message */}
        <motion.div
          className="mt-12 pt-8 border-t border-border-subtle text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {completionPct === 100 ? (
            <div className="mb-6">
              <p className="font-display text-2xl text-accent mb-2">Trail Complete</p>
              <p className="text-text-secondary text-sm">
                You've explored every stop on this trail.
              </p>
            </div>
          ) : readStops > 0 ? (
            <div className="mb-6">
              <p className="font-display text-xl text-text-primary mb-2">
                {readStops} of {totalStops} explored
              </p>
              <p className="text-text-tertiary text-sm">
                Keep going — the trail continues.
              </p>
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/trails"
              className="no-underline inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
            >
              Explore more trails
            </Link>
            <Link
              to="/explore"
              className="no-underline text-sm text-text-tertiary hover:text-text-primary transition-colors"
            >
              or wander the archive
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
