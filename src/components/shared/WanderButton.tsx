import { useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shuffle } from 'lucide-react';
import { entries } from '../../content';

interface WanderButtonProps {
  variant?: 'full' | 'compact';
  label?: string;
  className?: string;
}

export default function WanderButton({ variant = 'full', label, className = '' }: WanderButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const lastSlugRef = useRef<string | null>(null);

  const wander = useCallback(() => {
    const currentSlug = location.pathname.startsWith('/archive/')
      ? location.pathname.split('/archive/')[1]
      : lastSlugRef.current;

    let next = entries[Math.floor(Math.random() * entries.length)];
    let attempts = 0;
    while (next.slug === currentSlug && entries.length > 1 && attempts < 20) {
      next = entries[Math.floor(Math.random() * entries.length)];
      attempts++;
    }

    lastSlugRef.current = next.slug;
    navigate(`/archive/${next.slug}`);
  }, [navigate, location.pathname]);

  if (variant === 'compact') {
    return (
      <button
        onClick={wander}
        className={`flex flex-col items-center gap-1 py-2 px-4 min-w-[64px] transition-colors duration-300 text-text-tertiary active:text-accent ${className}`}
        aria-label="Wander to a random entry"
      >
        <Shuffle size={20} />
        <span className="text-[11px] font-medium">Wander</span>
      </button>
    );
  }

  return (
    <button
      onClick={wander}
      className={`inline-flex items-center gap-2 border border-accent/20 text-accent rounded-full px-4 py-1.5 text-sm font-medium hover:bg-accent/10 transition-colors duration-300 cursor-pointer ${className}`}
      aria-label="Wander to a random entry"
    >
      <Shuffle size={14} />
      {label || 'Wander'}
    </button>
  );
}
