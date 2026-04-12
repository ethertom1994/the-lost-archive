import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Entry } from '../../types';
import { CATEGORY_META } from '../../types';

interface ConnectionCardProps {
  entry: Entry & { relationship: string };
}

export default function ConnectionCard({ entry }: ConnectionCardProps) {
  const meta = CATEGORY_META[entry.category];

  return (
    <Link
      to={`/archive/${entry.slug}`}
      className="no-underline group block"
    >
      <div className="bg-bg-card border border-border-subtle rounded-lg p-5 transition-all duration-500 group-hover:bg-bg-card-hover group-hover:border-border-default">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="size-2 rounded-full shrink-0"
            style={{ backgroundColor: meta.color }}
          />
          <span className="text-xs font-medium" style={{ color: meta.color }}>
            {meta.label}
          </span>
        </div>

        <h4 className="font-display text-base font-medium text-text-primary mb-2">
          {entry.name}
        </h4>

        <p className="text-text-tertiary text-sm leading-relaxed mb-3">
          {entry.relationship}
        </p>

        <span className="inline-flex items-center gap-1.5 text-xs text-accent font-medium group-hover:gap-2.5 transition-all duration-300">
          Read story <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
