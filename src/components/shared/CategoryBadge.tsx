import { Link } from 'react-router-dom';
import { CATEGORY_META, type Category } from '../../types';

interface CategoryBadgeProps {
  category: Category;
  linked?: boolean;
  size?: 'sm' | 'md';
}

export default function CategoryBadge({ category, linked = false, size = 'sm' }: CategoryBadgeProps) {
  const meta = CATEGORY_META[category];
  const sizeClasses = size === 'sm'
    ? 'text-xs px-2.5 py-1 gap-1.5'
    : 'text-sm px-3 py-1.5 gap-2';

  const badge = (
    <span
      className={`inline-flex items-center rounded-full bg-bg-card font-medium ${sizeClasses}`}
      style={{ color: meta.color }}
    >
      <span
        className="size-2 rounded-full shrink-0"
        style={{ backgroundColor: meta.color }}
      />
      {meta.label}
    </span>
  );

  if (linked) {
    return (
      <Link
        to={`/explore?category=${category}`}
        className="no-underline hover:opacity-80 transition-opacity duration-300"
      >
        {badge}
      </Link>
    );
  }

  return badge;
}
