import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article';
  onClick?: () => void;
}

export default function SpotlightCard({ children, className = '', as = 'div', onClick }: SpotlightCardProps) {
  const Component = motion.create(as);

  return (
    <Component
      className={`relative bg-bg-card rounded-lg border border-border-subtle overflow-hidden transition-colors duration-500 hover:bg-bg-card-hover hover:border-border-default ${onClick ? 'cursor-pointer' : ''} ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--color-accent-glow),transparent_70%)] opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
