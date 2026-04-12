import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { entries } from '../../content';
import { CATEGORY_META, type Category } from '../../types';
import EntryCard from '../shared/EntryCard';

interface CategoriesViewProps {
  initialCategory?: Category;
}

const categories = Object.entries(CATEGORY_META) as [Category, typeof CATEGORY_META[Category]][];

export default function CategoriesView({ initialCategory }: CategoriesViewProps) {
  const [selected, setSelected] = useState<Category | null>(initialCategory ?? null);
  const [sortBy, setSortBy] = useState<'year-asc' | 'year-desc' | 'name'>('name');

  const filtered = selected ? entries.filter(e => e.category === selected) : entries;

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    const yearA = typeof a.lastKnownYear === 'number' ? a.lastKnownYear : parseInt(String(a.lastKnownYear)) || 0;
    const yearB = typeof b.lastKnownYear === 'number' ? b.lastKnownYear : parseInt(String(b.lastKnownYear)) || 0;
    return sortBy === 'year-asc' ? yearA - yearB : yearB - yearA;
  });

  return (
    <div>
      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
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

      {/* Sort controls */}
      <div className="flex items-center gap-3 mb-6">
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
        {selected && (
          <span className="text-xs text-text-tertiary ml-auto">
            {sorted.length} {sorted.length === 1 ? 'entry' : 'entries'} in {CATEGORY_META[selected].label}
          </span>
        )}
      </div>

      {/* Entry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selected}-${sortBy}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {sorted.map(entry => (
            <EntryCard key={entry.slug} entry={entry} />
          ))}
        </motion.div>
      </AnimatePresence>

      {sorted.length === 0 && (
        <p className="text-center text-text-tertiary py-12">
          No entries in this category yet.
        </p>
      )}
    </div>
  );
}
