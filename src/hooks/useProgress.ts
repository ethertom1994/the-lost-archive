import { useState, useCallback, useMemo } from 'react';
import { entries } from '../content';

const READ_KEY = 'tla-read';
const BOOKMARKS_KEY = 'tla-bookmarks';

function loadSet(key: string): Set<string> {
  try {
    const stored = localStorage.getItem(key);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function saveSet(key: string, set: Set<string>) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

export function useProgress() {
  const [read, setRead] = useState<Set<string>>(() => loadSet(READ_KEY));
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => loadSet(BOOKMARKS_KEY));

  const markRead = useCallback((slug: string) => {
    setRead(prev => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev).add(slug);
      saveSet(READ_KEY, next);
      return next;
    });
  }, []);

  const isRead = useCallback((slug: string) => read.has(slug), [read]);

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      saveSet(BOOKMARKS_KEY, next);
      return next;
    });
  }, []);

  const isBookmarked = useCallback((slug: string) => bookmarks.has(slug), [bookmarks]);

  const stats = useMemo(() => {
    const readCount = read.size;
    const totalCount = entries.length;
    const percentage = totalCount > 0 ? Math.round((readCount / totalCount) * 100) : 0;

    const categoriesVisited = new Set(
      entries.filter(e => read.has(e.slug)).map(e => e.category)
    );

    return { readCount, totalCount, percentage, categoriesVisited };
  }, [read]);

  return {
    markRead,
    isRead,
    toggleBookmark,
    isBookmarked,
    bookmarkedSlugs: bookmarks,
    readCount: stats.readCount,
    totalCount: stats.totalCount,
    percentage: stats.percentage,
    categoriesVisited: stats.categoriesVisited,
    readSlugs: read,
  };
}
