import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Globe, Network, LayoutGrid } from 'lucide-react';
import MetaTags from '../components/shared/MetaTags';
import TimelineView from '../components/explorer/TimelineView';
import MapView from '../components/explorer/MapView';
import WebView from '../components/explorer/WebView';
import CategoriesView from '../components/explorer/CategoriesView';
import type { Category } from '../types';

type ViewTab = 'timeline' | 'map' | 'web' | 'categories';

const TABS: { key: ViewTab; label: string; icon: typeof Clock }[] = [
  { key: 'timeline', label: 'Timeline', icon: Clock },
  { key: 'map', label: 'Map', icon: Globe },
  { key: 'web', label: 'Web', icon: Network },
  { key: 'categories', label: 'Categories', icon: LayoutGrid },
];

export default function ExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;
  const tabParam = searchParams.get('view') as ViewTab | null;

  const [activeTab, setActiveTab] = useState<ViewTab>(
    tabParam || (categoryParam ? 'categories' : 'timeline')
  );

  // If category param is set, switch to categories view
  useEffect(() => {
    if (categoryParam && activeTab !== 'categories') {
      setActiveTab('categories');
    }
  }, [categoryParam]);

  function switchTab(tab: ViewTab) {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams);
    params.set('view', tab);
    if (tab !== 'categories') {
      params.delete('category');
    }
    setSearchParams(params, { replace: true });
  }

  return (
    <>
      <MetaTags
        title="Explore"
        description="Explore the archive through timeline, map, connection web, and category views."
        path="/explore"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-primary mb-2">
            Explore the Archive
          </h1>
          <p className="text-text-secondary mb-8">
            Navigate through what we've lost — by time, place, connection, or category.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="sticky top-16 z-40 bg-bg-void/80 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6 mb-8 border-b border-border-subtle">
          <nav className="flex gap-1 overflow-x-auto scrollbar-none py-2 snap-x" role="tablist" aria-label="Explorer views">
            {TABS.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => switchTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors duration-200 cursor-pointer active:opacity-80 snap-start ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-text-tertiary hover:text-text-secondary hover:bg-bg-card active:bg-bg-card'
                  }`}
                  aria-selected={isActive}
                  aria-controls="explorer-panel"
                  role="tab"
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* View content */}
        <motion.div
          key={activeTab}
          id="explorer-panel"
          role="tabpanel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'timeline' && <TimelineView />}
          {activeTab === 'map' && <MapView />}
          {activeTab === 'web' && <WebView />}
          {activeTab === 'categories' && <CategoriesView initialCategory={categoryParam ?? undefined} />}
        </motion.div>
      </div>
    </>
  );
}
