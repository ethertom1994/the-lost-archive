import { useState, useCallback } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const share = useCallback(async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // User cancelled or share failed — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  }, [title, text]);

  return (
    <button
      onClick={share}
      className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-text-primary bg-bg-card border border-border-subtle rounded-lg px-3 py-2.5 min-h-[44px] transition-colors duration-300 cursor-pointer"
      aria-label={copied ? 'Link copied' : 'Share this entry'}
    >
      {copied ? <Check size={14} className="text-accent" /> : <Share2 size={14} />}
      <span>{copied ? 'Copied!' : 'Share'}</span>
    </button>
  );
}
