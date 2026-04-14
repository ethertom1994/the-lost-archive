import { Play, Headphones, BookOpen, Film, Building2, FileText } from 'lucide-react';
import type { RelatedMedia as RelatedMediaType } from '../../types';

const TYPE_CONFIG: Record<RelatedMediaType['type'], { icon: typeof Play; label: string }> = {
  video: { icon: Play, label: 'Video' },
  audio: { icon: Headphones, label: 'Audio' },
  podcast: { icon: Headphones, label: 'Podcast' },
  book: { icon: BookOpen, label: 'Book' },
  documentary: { icon: Film, label: 'Documentary' },
  museum: { icon: Building2, label: 'Museum' },
  article: { icon: FileText, label: 'Article' },
};

interface RelatedMediaProps {
  media: RelatedMediaType[];
}

export default function RelatedMedia({ media }: RelatedMediaProps) {
  if (!media.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border-subtle">
      <h2 className="font-display text-2xl font-medium text-text-primary mb-6">
        Go Deeper
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {media.map((item, i) => {
          const config = TYPE_CONFIG[item.type];
          const Icon = config.icon;
          return (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline group block bg-bg-card border border-border-subtle rounded-lg p-4 transition-colors duration-300 hover:bg-bg-card-hover hover:border-border-default"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-1.5 rounded bg-bg-surface text-text-tertiary group-hover:text-accent transition-colors">
                  <Icon size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs text-text-tertiary mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  )}
                  <span className="inline-block mt-2 text-[10px] font-medium uppercase tracking-wider text-text-muted bg-bg-surface px-2 py-0.5 rounded">
                    {config.label}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
