interface StatusBadgeProps {
  status: 'extinct' | 'functionally_extinct' | 'extinct_in_wild';
}

const STATUS_CONFIG = {
  extinct: { label: 'Extinct', bg: 'bg-extinct-bg', text: 'text-extinct' },
  functionally_extinct: { label: 'Functionally Extinct', bg: 'bg-endangered-bg', text: 'text-endangered' },
  extinct_in_wild: { label: 'Extinct in Wild', bg: 'bg-endangered-bg', text: 'text-endangered' },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}
