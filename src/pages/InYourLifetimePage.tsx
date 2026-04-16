import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { entries } from '../content';
import { CATEGORY_META } from '../types';
import MetaTags from '../components/shared/MetaTags';

/**
 * In Your Lifetime — user enters a birth year and sees everything
 * the archive recorded as lost from that year onward, with their age at
 * each loss. Birth year persists in localStorage.
 */

const STORAGE_KEY = 'tla:birthYear';
const MIN_YEAR = 1900;
const MAX_YEAR = new Date().getFullYear();

/** Parse `lastKnownYear` into a numeric CE year when possible. */
function parseYear(val: number | string): number | null {
  if (typeof val === 'number') return val;
  const s = String(val).toLowerCase().trim();
  if (s.includes('million') || s.includes('billion')) return null;
  if (s.includes('ongoing') || s.includes('present')) return MAX_YEAR;
  const bce = s.match(/(\d+)\s*(?:bce|bc)/);
  if (bce) return -parseInt(bce[1], 10);
  const cent = s.match(/(\d+)(?:st|nd|rd|th)\s*century/);
  if (cent) {
    const c = parseInt(cent[1], 10);
    const mid = (c - 1) * 100 + 50;
    return s.includes('bce') || s.includes('bc') ? -mid : mid;
  }
  const yr = s.match(/(\d{3,4})/);
  if (yr) return parseInt(yr[1], 10);
  return null;
}

export default function InYourLifetimePage() {
  const [birthYear, setBirthYear] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Load persisted birth year once
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed) && parsed >= MIN_YEAR && parsed <= MAX_YEAR) {
        setBirthYear(parsed);
        setInputValue(String(parsed));
      }
    }
  }, []);

  const losses = useMemo(() => {
    if (birthYear === null) return [];
    return entries
      .map((e) => ({ entry: e, year: parseYear(e.lastKnownYear) }))
      .filter((x): x is { entry: typeof entries[number]; year: number } =>
        x.year !== null && x.year >= birthYear,
      )
      .sort((a, b) => a.year - b.year);
  }, [birthYear]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed)) return;
    const clamped = Math.min(Math.max(parsed, MIN_YEAR), MAX_YEAR);
    setBirthYear(clamped);
    setInputValue(String(clamped));
    localStorage.setItem(STORAGE_KEY, String(clamped));
  };

  const handleReset = () => {
    setBirthYear(null);
    setInputValue('');
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      <MetaTags
        title="In Your Lifetime"
        description="Enter your birth year and see everything humanity has lost since. A personal reckoning with extinction, silence, and disappearance."
        path="/in-your-lifetime"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4">
            In Your Lifetime
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            Enter the year you were born. The archive will show you what has gone silent since.
          </p>
        </motion.div>

        {/* Input */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto mb-10"
        >
          <label htmlFor="birth-year" className="sr-only">Birth year</label>
          <input
            id="birth-year"
            type="number"
            inputMode="numeric"
            pattern="\d*"
            min={MIN_YEAR}
            max={MAX_YEAR}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. 1985"
            className="flex-1 bg-bg-card border border-border-subtle rounded-lg px-4 py-3 text-text-primary font-display text-xl tabular-nums focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            aria-label="Birth year"
          />
          <button
            type="submit"
            className="bg-accent/10 border border-accent/30 text-accent rounded-lg px-6 py-3 font-medium hover:bg-accent/20 transition-colors cursor-pointer"
          >
            Show me
          </button>
        </motion.form>

        {/* Results */}
        <AnimatePresence mode="wait">
          {birthYear === null ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-text-muted py-10"
            >
              <p className="italic">
                Nothing is loaded yet. The numbers will appear above.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`results-${birthYear}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Headline count */}
              <div className="text-center mb-10 border-y border-border-subtle py-8">
                <p className="font-display text-5xl sm:text-6xl font-medium text-accent tabular-nums mb-2">
                  {losses.length}
                </p>
                <p className="text-text-secondary">
                  {losses.length === 1 ? 'thing is gone that existed when you were born.' : 'things are gone that existed when you were born.'}
                </p>
                <p className="text-text-muted text-xs mt-3">
                  Born {birthYear}. <button onClick={handleReset} className="underline hover:text-text-secondary cursor-pointer">change</button>
                </p>
              </div>

              {/* Timeline list */}
              {losses.length > 0 ? (
                <div className="flex flex-col gap-3 mb-12">
                  {losses.map(({ entry, year }, i) => {
                    const age = year - birthYear;
                    return (
                      <motion.div
                        key={entry.slug}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.8) }}
                      >
                        <Link
                          to={`/archive/${entry.slug}`}
                          className="no-underline group block bg-bg-card border border-border-subtle rounded-lg p-4 sm:p-5 hover:bg-bg-card-hover hover:border-border-default transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="shrink-0 text-right w-20 sm:w-24">
                              <div className="font-display text-lg sm:text-xl text-accent tabular-nums">
                                {year}
                              </div>
                              <div className="text-text-muted text-xs mt-0.5">
                                {age === 0 ? 'born that year' : `age ${age}`}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span
                                  className="size-2 rounded-full shrink-0"
                                  style={{ backgroundColor: `var(--color-cat-${entry.category})` }}
                                />
                                <h3 className="text-text-primary font-medium group-hover:text-accent transition-colors">
                                  {entry.name}
                                </h3>
                                <span className="text-text-muted text-xs">
                                  {CATEGORY_META[entry.category].label}
                                </span>
                              </div>
                              <p className="text-text-tertiary text-sm leading-snug line-clamp-2">
                                {entry.tagline}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10 text-text-muted italic">
                  The archive has no recorded losses on file after {birthYear}. That is almost certainly not true of the world.
                </div>
              )}

              {/* Footer note */}
              <div className="text-center border-t border-border-subtle pt-8 pb-6">
                <p className="text-text-secondary text-sm mb-3 italic">
                  And the archive only records what we know about.
                </p>
                <Link
                  to="/suggest"
                  className="no-underline inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent rounded-full px-5 py-2 text-sm font-medium hover:bg-accent/20 transition-colors"
                >
                  Suggest something we're missing
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
