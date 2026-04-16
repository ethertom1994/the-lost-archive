import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Home, Compass, Route, Flame, MoreHorizontal, BarChart3, Bookmark, Info, MessageSquarePlus, Clock, X } from 'lucide-react';
import WanderButton from '../shared/WanderButton';

export default function MobileNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();

  // Close drawer on navigation
  useEffect(() => { setMoreOpen(false); }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center gap-0.5 py-2 px-3 min-w-[56px] transition-colors duration-200 active:text-accent ${isActive ? 'text-accent' : 'text-text-tertiary'}`;

  return (
    <>
      {/* Backdrop */}
      {moreOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More drawer */}
      <div
        className={`fixed bottom-16 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-out pb-[env(safe-area-inset-bottom,0px)] ${
          moreOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-bg-void/95 backdrop-blur-md border-t border-border-subtle rounded-t-2xl px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-muted text-xs uppercase tracking-wider font-medium">More</span>
            <button
              onClick={() => setMoreOpen(false)}
              className="p-1 text-text-tertiary active:text-text-primary cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <DrawerLink to="/in-your-lifetime" icon={Clock} label="In Your Lifetime" />
            <DrawerLink to="/stats" icon={BarChart3} label="Stats" />
            <DrawerLink to="/bookmarks" icon={Bookmark} label="Bookmarks" />
            <DrawerLink to="/about" icon={Info} label="About" />
            <DrawerLink to="/suggest" icon={MessageSquarePlus} label="Suggest" />
          </div>
          <div className="mt-4 pt-4 border-t border-border-subtle flex justify-center">
            <WanderButton variant="full" label="Wander the Archive" />
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg-void/95 backdrop-blur-md border-t border-border-subtle pb-[env(safe-area-inset-bottom,0px)]"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
          <NavLink to="/" end className={linkClass} aria-label="Home">
            <Home size={20} />
            <span className="text-[10px] font-medium">Home</span>
          </NavLink>
          <NavLink to="/explore" className={linkClass} aria-label="Explore">
            <Compass size={20} />
            <span className="text-[10px] font-medium">Explore</span>
          </NavLink>
          <NavLink to="/vanishing" className={linkClass} aria-label="The Vanishing">
            <Flame size={20} />
            <span className="text-[10px] font-medium">Vanishing</span>
          </NavLink>
          <NavLink to="/trails" className={linkClass} aria-label="Trails">
            <Route size={20} />
            <span className="text-[10px] font-medium">Trails</span>
          </NavLink>
          <button
            onClick={() => setMoreOpen(o => !o)}
            className={`flex flex-col items-center gap-0.5 py-2 px-3 min-w-[56px] transition-colors duration-200 cursor-pointer active:text-accent ${
              moreOpen ? 'text-accent' : 'text-text-tertiary'
            }`}
            aria-label="More options"
            aria-expanded={moreOpen}
          >
            <MoreHorizontal size={20} />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>
    </>
  );
}

function DrawerLink({ to, icon: Icon, label }: { to: string; icon: typeof Home; label: string }) {
  return (
    <Link
      to={to}
      className="no-underline flex items-center gap-3 px-4 py-3 rounded-lg bg-bg-surface text-text-secondary hover:text-text-primary active:bg-bg-card-hover transition-colors"
    >
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
