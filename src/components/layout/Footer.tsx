import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-void">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-medium">
              The <span className="text-accent">Lost</span> Archive
            </p>
            <p className="text-text-tertiary text-sm mt-1">A catalog of what we've lost.</p>
          </div>

          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            <Link to="/explore" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">
              Explore
            </Link>
            <Link to="/trails" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">
              Trails
            </Link>
            <Link to="/stats" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">
              Stats
            </Link>
            <Link to="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">
              About
            </Link>
            <Link to="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border-subtle text-center">
          <p className="text-text-muted text-xs">
            Content is researched and cited for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
