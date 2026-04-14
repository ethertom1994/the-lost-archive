import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { entries } from '../../content';
import { CATEGORY_META, type Category } from '../../types';
import { categorizeCause, CAUSE_META, type LossCause } from '../../utils/causes';
import EntryCard from '../shared/EntryCard';

interface CategoriesViewProps {
  initialCategory?: Category;
}

const categories = Object.entries(CATEGORY_META) as [Category, typeof CATEGORY_META[Category]][];
const causeKeys = Object.keys(CAUSE_META) as LossCause[];
const PAGE_SIZE = 12;

export default function CategoriesView({ initialCategory }: CategoriesViewProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';
  const [selected, setSelected] = useState<Category | null>(initialCategory ?? null);
  const [selectedCause, setSelectedCause] = useState<LossCause | null>(null);
  const [sortBy, setSortBy] = useState<'year-asc' | 'year-desc' | 'name'>('name');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selected, selectedCause, sortBy, searchQuery]);

  function clearSearch() {
    const params = new URLSearchParams(searchParams);
    params.delete('search');
    setSearchParams(params, { replace: true });
  }

  function clearAllFilters() {
    setSelected(null);
    setSelectedCause(null);
    if (searchQuery.trim()) clearSearch();
  }

  // Apply filters
  let filtered = [...entries];

  if (selected) {
    filtered = filtered.filter(e => e.category === selected);
  }

  if (selectedCause) {
    filtered = filtered.filter(e => categorizeCause(e) === selectedCause);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.tagline.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      CATEGORY_META[e.category].label.toLowerCase().includes(q) ||
      e.lastKnownLocation.toLowerCase().includes(q) ||
      e.cause.toLowerCase().includes(q)
    );
  }

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    const yearA = typeof a.lastKnownYear === 'number' ? a.lastKnownYear : parseInt(String(a.lastKnownYear)) || 0;
    const yearB = typeof b.lastKnownYear === 'number' ? b.lastKnownYear : parseInt(String(b.lastKnownYear)) || 0;
    return sortBy === 'year-asc' ? yearA - yearB : yearB - yearA;
  });

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;
  const hasActiveFilters = selected || selectedCause || searchQuery.trim();

  return (
    <div>
      {/* Search results banner */}
      {searchQuery.trim() && (
        <div className="flex items-center gap-3 mb-6 px-4 py-3 bg-bg-card border border-border-subtle rounded-lg">
          <span className="text-sm text-text-secondary">
            Showing results for "<span className="text-text-primary">{searchQuery}</span>"
          </span>
          <button
            onClick={clearSearch}
            className="ml-auto flex items-center gap-1 text-xs text-text-tertiary hover:text-text-primary transition-colors cursor-pointer"
          >
            <X size={14} />
            Clear
          </button>
        </div>
      )}

      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {categories.map(([key, meta]) => {
          const count = entries.filter(e => e.category === key).length;
          const isActive = selected === key;
          return (
            <button
              key={key}
              onClick={() => setSelected(isActive ? null : key)}
              className={`text-left p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-bg-card-hover border-border-default'
                  : 'bg-bg-card border-border-subtle hover:bg-bg-card-hover'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{meta.icon}</span>
                <span className="font-display text-sm font-medium text-text-primary">{meta.label}</span>
              </div>
              <span className="text-xs text-text-muted">{count} {count === 1 ? 'entry' : 'entries'}</span>
            </button>
          );
        })}
      </div>

      {/* Cause filter row */}
      <div className="mb-8">
        <p className="text-xs text-text-tertiary mb-2">Filter by cause:</p>
        <div className="flex flex-wrap gap-2">
          {causeKeys.map(key => {
            const meta = CAUSE_META[key];
            const isActive = selectedCause === key;
            const count = entries.filter(e => categorizeCause(e) === key).length;
            if (count === 0) return null;
            return (
              <button
                key={key}
                onClick={() => setSelectedCause(isActive ? null : key)}
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-accent/10 border-accent/20 text-accent'
                    : 'bg-bg-card border-border-subtle text-text-tertiary hover:text-text-secondary'
                }`}
              >
                <span>{meta.icon}</span>
                <span>{meta.label}</span>
                <span className="text-text-muted">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active filter state + sort controls */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <span className="text-xs text-text-tertiary">Sort:</span>
        {([['name', 'Name'], ['year-asc', 'Oldest'], ['year-desc', 'Newest']] as const).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setSortBy(value)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-300 cursor-pointer ${
              sortBy === value
                ? 'bg-accent/10 border-accent/20 text-accent'
                : 'bg-bg-card border-border-subtle text-text-tertiary hover:text-text-secondary'
            }`}
          >
            {label}
          </button>
        ))}
        <span className="text-xs text-text-tertiary ml-auto">
          {sorted.length} {sorted.length === 1 ? 'entry' : 'entries'}
          {selected && <> in {CATEGORY_META[selected].label}</>}
          {selectedCause && <> lost to {CAUSE_META[selectedCause].label}</>}
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-accent hover:text-accent-dim transition-colors cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Entry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selected}-${selectedCause}-${sortBy}-${searchQuery}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visible.map(entry => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </motion.div>
      </AnimatePresence>

      {sorted.length === 0 && (
        <p className="text-center text-text-tertiary py-12">
          {searchQuery.trim() ? `No entries match "${searchQuery}".` : 'No entries match these filters.'}
        </p>
      )}

      {/* Show more button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount(prev => prev + PAGE_SIZE)}
            className="text-sm px-6 py-2.5 rounded-full border border-border-subtle bg-bg-card text-text-secondary hover:bg-bg-card-hover hover:border-border-default transition-colors duration-300 cursor-pointer"
          >
            Show more ({sorted.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
