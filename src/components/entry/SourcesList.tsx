import type { Source } from '../../types';

interface SourcesListProps {
  sources: Source[];
}

export default function SourcesList({ sources }: SourcesListProps) {
  return (
    <div className="mt-10 pt-8 border-t border-border-subtle">
      <h3 className="font-display text-lg font-medium text-text-primary mb-4">Sources</h3>
      <ol className="list-decimal list-inside space-y-2">
        {sources.map((source, i) => (
          <li key={i} className="text-sm text-text-tertiary">
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
              >
                {source.title}
              </a>
            ) : (
              <span className="text-text-secondary">{source.title}</span>
            )}
            {source.author && <span className="text-text-tertiary"> — {source.author}</span>}
            {source.year && (
              <span className="text-text-muted">
                {' '}({source.year < 0 ? `${Math.abs(source.year)} BCE` : source.year})
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
