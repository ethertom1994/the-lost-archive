import { NavLink } from 'react-router-dom';
import { Home, Compass, Info } from 'lucide-react';

export default function MobileNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center gap-1 py-2 px-4 min-w-[64px] transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text-tertiary'}`;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg-void/95 backdrop-blur-md border-t border-border-subtle"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        <NavLink to="/" end className={linkClass} aria-label="Home">
          <Home size={20} />
          <span className="text-[11px] font-medium">Home</span>
        </NavLink>
        <NavLink to="/explore" className={linkClass} aria-label="Explore">
          <Compass size={20} />
          <span className="text-[11px] font-medium">Explore</span>
        </NavLink>
        <NavLink to="/about" className={linkClass} aria-label="About">
          <Info size={20} />
          <span className="text-[11px] font-medium">About</span>
        </NavLink>
      </div>
    </nav>
  );
}
