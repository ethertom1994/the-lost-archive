import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from '../shared/SearchBar';
import WanderButton from '../shared/WanderButton';
import { useProgress } from '../../hooks/useProgress';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { readCount } = useProgress();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-void/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="no-underline flex items-center gap-2 shrink-0" onClick={() => { setMenuOpen(false); setSearchOpen(false); }}>
          <span className="font-display text-xl font-medium tracking-tight">
            The <span className="text-accent">Lost</span> Archive
          </span>
          {readCount > 0 && (
            <span className="hidden md:inline text-xs text-text-muted ml-1">
              {readCount} explored
            </span>
          )}
        </Link>

        {/* Desktop nav + search */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/explore" className={navLinkClass}>Explore</NavLink>
          <NavLink to="/trails" className={navLinkClass}>Trails</NavLink>
          <NavLink to="/stats" className={navLinkClass}>Stats</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <WanderButton variant="full" />
        </nav>

        <div className="hidden md:block w-60 focus-within:w-[360px] transition-all duration-300">
          <SearchBar />
        </div>

        {/* Mobile search + menu buttons */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <button
            className="-mr-2 p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border-subtle bg-bg-void/95 backdrop-blur-md overflow-visible px-4 py-3"
          >
            <SearchBar expanded onClose={() => setSearchOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border-subtle bg-bg-void/95 backdrop-blur-md overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <NavLink to="/" end className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/explore" className={navLinkClass} onClick={() => setMenuOpen(false)}>Explore</NavLink>
              <NavLink to="/trails" className={navLinkClass} onClick={() => setMenuOpen(false)}>Trails</NavLink>
              <NavLink to="/stats" className={navLinkClass} onClick={() => setMenuOpen(false)}>Stats</NavLink>
              <NavLink to="/bookmarks" className={navLinkClass} onClick={() => setMenuOpen(false)}>Bookmarks</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
              {readCount > 0 && (
                <span className="text-xs text-text-muted pt-2 border-t border-border-subtle">
                  {readCount} entries explored
                </span>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
