interface QuickFactsProps {
  facts: Record<string, string>;
}

export default function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-lg p-5">
      <h3 className="font-display text-lg font-medium text-text-primary mb-4">Quick Facts</h3>
      <dl className="space-y-3">
        {Object.entries(facts).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-0.5">
            <dt className="text-xs font-medium text-text-tertiary uppercase tracking-wider">{key}</dt>
            <dd className="text-sm text-text-secondary">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
