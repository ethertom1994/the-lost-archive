import { useState, useCallback, useMemo } from 'react';
import { entries } from '../content';

const STORAGE_KEY = 'tla-read';

function loadRead(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

export function useProgress() {
  const [read, setRead] = useState<Set<string>>(loadRead);

  const markRead = useCallback((slug: string) => {
    setRead(prev => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev).add(slug);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isRead = useCallback((slug: string) => read.has(slug), [read]);

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
    readCount: stats.readCount,
    totalCount: stats.totalCount,
    percentage: stats.percentage,
    categoriesVisited: stats.categoriesVisited,
    readSlugs: read,
  };
}
