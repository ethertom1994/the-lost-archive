import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { getEntry, getConnectedEntries } from '../content';
import { getTrail } from '../content/trails';
import { CATEGORY_META } from '../types';
import EntryHeader from '../components/entry/EntryHeader';
import QuickFacts from '../components/entry/QuickFacts';
import SourcesList from '../components/entry/SourcesList';
import ConnectionCard from '../components/entry/ConnectionCard';
import RelatedMedia from '../components/entry/RelatedMedia';
import MetaTags from '../components/shared/MetaTags';
import ShareButton from '../components/shared/ShareButton';
import WanderButton from '../components/shared/WanderButton';
import { useProgress } from '../hooks/useProgress';

export default function EntryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const entry = slug ? getEntry(slug) : undefined;
  const { markRead, toggleBookmark, isBookmarked } = useProgress();

  // Mark as read on mount
  useEffect(() => {
    if (slug) markRead(slug);
  }, [slug, markRead]);

  // Trail context from URL params
  const trailSlug = searchParams.get('trail');
  const stopIndex = searchParams.get('stop') ? parseInt(searchParams.get('stop')!, 10) : -1;
  const trail = trailSlug ? getTrail(trailSlug) : undefined;

  const prevStop = trail && stopIndex > 0 ? trail.entries[stopIndex - 1] : null;
  const nextStop = trail && stopIndex >= 0 && stopIndex < trail.entries.length - 1 ? trail.entries[stopIndex + 1] : null;

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
  const wordCount = entry.body.split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <>
      <MetaTags
        title={entry.name}
        description={entry.tagline}
        path={`/archive/${entry.slug}`}
        entrySlug={entry.slug}
      />

      {/* Trail navigation bar */}
      {trail && stopIndex >= 0 && (
        <div className="bg-bg-card/80 backdrop-blur-sm border-b border-border-subtle">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
            <Link
              to={`/trails/${trail.slug}`}
              className="no-underline text-sm text-text-tertiary hover:text-accent transition-colors truncate"
            >
              <span className="mr-1">{trail.icon}</span>
              <span className="hidden sm:inline">{trail.name} — </span>
              Stop {stopIndex + 1} of {trail.entries.length}
            </Link>
            <div className="flex items-center gap-2 shrink-0">
              {prevStop ? (
                <Link
                  to={`/archive/${prevStop.slug}?trail=${trail.slug}&stop=${stopIndex - 1}`}
                  className="no-underline inline-flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors px-2 py-1 rounded border border-border-subtle hover:border-border-default"
                >
                  <ChevronLeft size={12} /> Prev
                </Link>
              ) : (
                <span className="text-xs text-text-muted px-2 py-1 opacity-40">
                  <ChevronLeft size={12} className="inline" /> Prev
                </span>
              )}
              {nextStop ? (
                <Link
                  to={`/archive/${nextStop.slug}?trail=${trail.slug}&stop=${stopIndex + 1}`}
                  className="no-underline inline-flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors px-2 py-1 rounded border border-border-subtle hover:border-border-default"
                >
                  Next <ChevronRight size={12} />
                </Link>
              ) : (
                <span className="text-xs text-text-muted px-2 py-1 opacity-40">
                  Next <ChevronRight size={12} className="inline" />
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      <motion.article
        className="max-w-6xl mx-auto px-4 sm:px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back link + share */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to={trail ? `/trails/${trail.slug}` : '/explore'}
            className="no-underline inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            {trail ? `Back to ${trail.name}` : 'Back to archive'}
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmark(entry.slug)}
              className="p-2 rounded-lg border border-border-subtle hover:border-border-default transition-colors duration-300"
              aria-label={isBookmarked(entry.slug) ? 'Remove bookmark' : 'Bookmark this entry'}
            >
              <Heart
                size={16}
                className={isBookmarked(entry.slug) ? 'fill-amber-500 text-amber-500' : 'text-text-tertiary'}
              />
            </button>
            <ShareButton title={entry.name} text={entry.tagline} />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:gap-12">
          {/* Main content */}
          <div className="min-w-0">
            <EntryHeader entry={entry} />

            <p className="text-text-tertiary text-sm -mt-5 mb-6">{readingTime} min read</p>

            {/* Image */}
            {entry.imageUrl && (
              <figure className="mb-8 rounded-lg overflow-hidden relative museum-vignette">
                <img
                  src={entry.imageUrl}
                  alt={entry.imageCaption || entry.name}
                  className="w-full object-cover museum-img"
                  loading="lazy"
                />
                {(entry.imageCaption || entry.imageCredit) && (
                  <figcaption className="text-xs text-text-muted mt-2 px-1">
                    {entry.imageCaption}
                    {entry.imageCaption && entry.imageCredit && ' — '}
                    {entry.imageCredit}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Audio player (only when an audioUrl is provided) */}
            {entry.audioUrl && (
              <figure className="mb-8 bg-bg-card border border-border-subtle rounded-lg p-4">
                <audio controls preload="none" className="w-full" src={entry.audioUrl}>
                  Your browser does not support the audio element.
                </audio>
                {(entry.audioCaption || entry.audioCredit) && (
                  <figcaption className="text-xs text-text-muted mt-2">
                    {entry.audioCaption && <>Listen: {entry.audioCaption}. </>}
                    {entry.audioCredit && <>Source: {entry.audioCredit}.</>}
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

            {/* Related Media */}
            {entry.relatedMedia && entry.relatedMedia.length > 0 && (
              <RelatedMedia media={entry.relatedMedia} />
            )}

            {/* Sources */}
            <SourcesList sources={entry.sources} />

            {/* Trail navigation at bottom */}
            {trail && (prevStop || nextStop) && (
              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
                {prevStop ? (
                  <Link
                    to={`/archive/${prevStop.slug}?trail=${trail.slug}&stop=${stopIndex - 1}`}
                    className="no-underline inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <ArrowLeft size={14} />
                    <span className="hidden sm:inline">Previous in trail</span>
                    <span className="sm:hidden">Prev</span>
                  </Link>
                ) : <div />}
                {nextStop ? (
                  <Link
                    to={`/archive/${nextStop.slug}?trail=${trail.slug}&stop=${stopIndex + 1}`}
                    className="no-underline inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <span className="hidden sm:inline">Next in trail</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight size={14} />
                  </Link>
                ) : <div />}
              </div>
            )}

            {/* Read another */}
            <div className="mt-12 pt-8 border-t border-border-subtle text-center">
              <WanderButton variant="full" label="Read another story" className="text-base px-6 py-2.5" />
            </div>
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

              {/* Trail badge in sidebar */}
              {trail && (
                <Link
                  to={`/trails/${trail.slug}`}
                  className="no-underline block bg-bg-card border border-border-subtle rounded-lg p-4 hover:border-border-default transition-colors"
                >
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Part of</p>
                  <p className="text-sm font-medium text-text-primary">
                    {trail.icon} {trail.name}
                  </p>
                </Link>
              )}
            </div>
          </aside>
        </div>
      </motion.article>
    </>
  );
}
