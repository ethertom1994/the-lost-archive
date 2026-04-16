import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileNav from './components/layout/MobileNav';

const HomePage = lazy(() => import('./pages/HomePage'));
const ExplorerPage = lazy(() => import('./pages/ExplorerPage'));
const EntryPage = lazy(() => import('./pages/EntryPage'));
const StatsPage = lazy(() => import('./pages/StatsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TrailsPage = lazy(() => import('./pages/TrailsPage'));
const TrailDetailPage = lazy(() => import('./pages/TrailDetailPage'));
const BookmarksPage = lazy(() => import('./pages/BookmarksPage'));
const VanishingPage = lazy(() => import('./pages/VanishingPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const main = document.getElementById('main-content');
    if (main) main.focus({ preventScroll: true });
  }, [pathname]);
  return null;
}

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="size-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-bg-void focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Header />

      <main id="main-content" tabIndex={-1} className="pt-16 pb-20 md:pb-0 min-h-screen outline-none">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorerPage />} />
            <Route path="/archive/:slug" element={<EntryPage />} />
            <Route path="/trails" element={<TrailsPage />} />
            <Route path="/trails/:slug" element={<TrailDetailPage />} />
            <Route path="/vanishing" element={<VanishingPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <MobileNav />
      <Analytics />
    </>
  );
}
