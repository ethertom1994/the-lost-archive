import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-void/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="no-underline flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-xl font-medium tracking-tight">
            The <span className="text-accent">Lost</span> Archive
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/explore" className={navLinkClass}>Explore</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

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
              <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
