import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { getEntry, getConnectedEntries } from '../content';
import { CATEGORY_META } from '../types';
import EntryHeader from '../components/entry/EntryHeader';
import QuickFacts from '../components/entry/QuickFacts';
import SourcesList from '../components/entry/SourcesList';
import ConnectionCard from '../components/entry/ConnectionCard';
import MetaTags from '../components/shared/MetaTags';

export default function EntryPage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getEntry(slug) : undefined;

  if (!entry) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-3xl text-text-primary mb-4">Entry Not Found</h1>
        <p className="text-text-secondary mb-6">This archive entry doesn't exist or may have been lost to time.</p>
        <Link to="/explore" className="text-accent hover:underline">
          Browse the archive
        </Link>
      </div>
    );
  }

  const connected = getConnectedEntries(entry);
  const meta = CATEGORY_META[entry.category];

  return (
    <>
      <MetaTags
        title={entry.name}
        description={entry.tagline}
        path={`/archive/${entry.slug}`}
        image={entry.imageUrl}
      />

      <motion.article
        className="max-w-6xl mx-auto px-4 sm:px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back link */}
        <Link
          to="/explore"
          className="no-underline inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={14} />
          Back to archive
        </Link>

        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-12">
          {/* Main content */}
          <div className="min-w-0">
            <EntryHeader entry={entry} />

            {/* Image */}
            {entry.imageUrl && (
              <figure className="mb-8 rounded-lg overflow-hidden relative museum-vignette">
                <img
                  src={entry.imageUrl}
                  alt={entry.imageCaption || entry.name}
                  className="w-full object-cover museum-img"
                  loading="lazy"
                />
                {entry.imageCaption && (
                  <figcaption className="text-xs text-text-muted mt-2 px-1">
                    {entry.imageCaption}
                    {entry.imageCredit && <> — {entry.imageCredit}</>}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Quick Facts - mobile only, before body */}
            <div className="lg:hidden mb-8">
              <QuickFacts facts={entry.quickFacts} />
            </div>

            {/* Body */}
            <div className="prose">
              <ReactMarkdown>{entry.body}</ReactMarkdown>
            </div>

            {/* Connected entries */}
            {connected.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border-subtle">
                <h2 className="font-display text-2xl font-medium text-text-primary mb-6">
                  Connected to...
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {connected.map(c => (
                    <ConnectionCard key={c.slug} entry={c} />
                  ))}
                </div>
              </section>
            )}

            {/* Sources */}
            <SourcesList sources={entry.sources} />
          </div>

          {/* Sidebar - desktop only */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <QuickFacts facts={entry.quickFacts} />

              <div className="bg-bg-card border border-border-subtle rounded-lg p-5">
                <h3 className="font-display text-lg font-medium text-text-primary mb-3">Category</h3>
                <Link
                  to={`/explore?category=${entry.category}`}
                  className="no-underline flex items-center gap-3 group"
                >
                  <span className="text-2xl">{meta.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-300">
                      {meta.label}
                    </p>
                    <p className="text-xs text-text-tertiary">{meta.description}</p>
                  </div>
                </Link>
              </div>

              <div className="bg-bg-card border border-border-subtle rounded-lg p-5">
                <h3 className="font-display text-lg font-medium text-text-primary mb-2">Cause of Loss</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{entry.cause}</p>
              </div>
            </div>
          </aside>
        </div>
      </motion.article>
    </>
  );
}
