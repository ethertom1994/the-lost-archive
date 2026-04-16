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
      <div className="bg-bg-card border border-border-subtle rounded-lg p-5 sm:p-5 transition-all duration-300 group-hover:bg-bg-card-hover group-hover:border-border-default active:bg-bg-card-hover active:scale-[0.98]">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="size-2.5 rounded-full shrink-0"
            style={{ backgroundColor: meta.color }}
          />
          <span className="text-xs font-medium" style={{ color: meta.color }}>
            {meta.label}
          </span>
        </div>

        <h4 className="font-display text-lg font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
          {entry.name}
        </h4>

        <p className="text-text-secondary text-sm leading-relaxed mb-3">
          {entry.relationship}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-2.5 transition-all duration-300">
          Read story <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
