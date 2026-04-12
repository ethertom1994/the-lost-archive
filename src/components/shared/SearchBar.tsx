import { useState, useEffect, useRef, useCallback, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';
import type { Entry } from '../../types';

interface SearchBarProps {
  onClose?: () => void;
  expanded?: boolean;
}

function searchEntries(query: string): Entry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return entries
    .filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.tagline.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q) ||
      CATEGORY_META[e.category].label.toLowerCase().includes(q) ||
      e.lastKnownLocation.toLowerCase().includes(q) ||
      e.cause.toLowerCase().includes(q)
    )
    .slice(0, 8);
}

export default function SearchBar({ onClose, expanded }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Entry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setActiveIndex(-1);
    onClose?.();
  }, [onClose]);

  // Debounced search
  useEffect(() => {
    clearTimeout(debounceRef.current);
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    debounceRef.current = setTimeout(() => {
      const r = searchEntries(query);
      setResults(r);
      setIsOpen(true);
      setActiveIndex(-1);
    }, 150);
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [close]);

  // Auto-focus when expanded
  useEffect(() => {
    if (expanded) inputRef.current?.focus();
  }, [expanded]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        navigate(`/archive/${results[activeIndex].slug}`);
        close();
      } else if (query.trim()) {
        navigate(`/explore?search=${encodeURIComponent(query.trim())}&view=categories`);
        close();
      }
    }
  }

  function selectResult(slug: string) {
    navigate(`/archive/${slug}`);
    close();
  }

  const activeDescendant = activeIndex >= 0 ? `search-option-${activeIndex}` : undefined;

  return (
    <div ref={containerRef} className={`relative ${expanded ? 'w-full' : ''}`}>
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => { if (results.length > 0) setIsOpen(true); }}
          placeholder="Search entries..."
          aria-label="Search entries"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={activeDescendant}
          aria-autocomplete="list"
          role="combobox"
          className={`w-full bg-bg-card border border-border-subtle rounded-lg pl-9 pr-8 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors duration-200 ${expanded ? '' : ''}`}
        />
        {query && (
          <button
            onClick={close}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary p-0.5"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {isOpen && results.length > 0 && `${results.length} results found`}
        {isOpen && query.trim() && results.length === 0 && 'No results found'}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div className="fixed inset-0 bg-bg-void/60 z-40 md:hidden" onClick={close} />

          <ul
            id={listboxId}
            role="listbox"
            className="absolute top-full left-0 right-0 mt-2 bg-bg-card border border-border-default rounded-lg shadow-lg overflow-hidden z-50 max-h-[400px] overflow-y-auto"
          >
            {results.length === 0 ? (
              <li className="px-4 py-3 text-sm text-text-tertiary">
                No results for "{query}"
              </li>
            ) : (
              results.map((entry, i) => {
                const meta = CATEGORY_META[entry.category];
                return (
                  <li
                    key={entry.slug}
                    id={`search-option-${i}`}
                    role="option"
                    aria-selected={i === activeIndex}
                    className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors duration-150 ${
                      i === activeIndex ? 'bg-bg-card-hover' : 'hover:bg-bg-card-hover'
                    } ${i > 0 ? 'border-t border-border-subtle' : ''}`}
                    onClick={() => selectResult(entry.slug)}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <span
                      className="size-2 rounded-full shrink-0 mt-1.5"
                      style={{ backgroundColor: meta.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-medium text-text-primary truncate">
                          {entry.name}
                        </span>
                        <span className="text-xs text-text-muted shrink-0">
                          {entry.lastKnownYear}
                        </span>
                      </div>
                      <p className="text-xs text-text-tertiary truncate mt-0.5">
                        {entry.tagline}
                      </p>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </>
      )}
    </div>
  );
}
