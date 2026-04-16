import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-void mb-20 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <p className="font-display text-lg font-medium">
              The <span className="text-accent">Lost</span> Archive
            </p>
            <p className="text-text-tertiary text-sm mt-1">A catalog of what we&rsquo;ve lost.</p>
          </div>

          {/* Mobile: 2-column grid. Desktop: flex row */}
          <nav className="w-full sm:w-auto" aria-label="Footer navigation">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:items-center sm:gap-6">
              <div className="flex flex-col gap-3 sm:contents">
                <FooterLink to="/explore">Explore</FooterLink>
                <FooterLink to="/trails">Trails</FooterLink>
                <FooterLink to="/vanishing">The Vanishing</FooterLink>
                <FooterLink to="/bookmarks">Bookmarks</FooterLink>
              </div>
              <div className="flex flex-col gap-3 sm:contents">
                <FooterLink to="/stats">Stats</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/suggest">Suggest</FooterLink>
                <FooterLink to="/privacy">Privacy</FooterLink>
              </div>
            </div>
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

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm text-text-secondary hover:text-text-primary active:text-accent transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
