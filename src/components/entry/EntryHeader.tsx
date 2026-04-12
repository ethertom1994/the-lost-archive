import { MapPin } from 'lucide-react';
import type { Entry } from '../../types';
import CategoryBadge from '../shared/CategoryBadge';
import StatusBadge from '../shared/StatusBadge';

interface EntryHeaderProps {
  entry: Entry;
}

export default function EntryHeader({ entry }: EntryHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <CategoryBadge category={entry.category} linked size="md" />
        <StatusBadge status={entry.status} />
      </div>

      <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary leading-tight mb-3">
        {entry.name}
      </h1>

      <p className="font-display text-lg sm:text-xl italic text-text-secondary mb-4">
        {entry.tagline}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-tertiary">
        <span>Last known: {entry.lastKnownYear}</span>
        <span className="hidden sm:inline text-text-muted">·</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="text-text-muted" />
          {entry.lastKnownLocation}
        </span>
      </div>
    </div>
  );
}
