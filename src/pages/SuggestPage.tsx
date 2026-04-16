import { useState, type FormEvent } from 'react';
import { CATEGORY_META, type Category } from '../types';
import MetaTags from '../components/shared/MetaTags';

// Replace with your Formspree form ID
const FORMSPREE_URL = 'https://formspree.io/f/FORMSPREE_FORM_ID';

const categories = Object.entries(CATEGORY_META) as [Category, { label: string }][];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function SuggestPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not connect. Please check your internet and try again.');
    }
  };

  return (
    <>
      <MetaTags
        title="Suggest an Entry"
        description="Know something that's been permanently lost? Suggest it for The Lost Archive."
        path="/suggest"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-4">
          Know Something That<br />Should Be Here?
        </h1>

        <p className="text-text-secondary leading-relaxed mb-2">
          The Lost Archive is always growing. If you know of something the world has permanently
          lost &mdash; a species, a language, a recipe, a technology, a place &mdash; we want to hear about it.
        </p>

        <p className="text-text-tertiary text-sm mb-10">
          Submissions must be <em className="text-text-primary">permanently lost</em>, not endangered,
          rare, or declining. If it still exists in any meaningful form, it doesn&rsquo;t belong here.
        </p>

        {status === 'success' ? (
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <p className="font-display text-2xl text-text-primary font-medium mb-2">Thank you.</p>
            <p className="text-text-secondary text-sm">
              Your suggestion has been received. We review every submission and will add it to the archive if it meets our criteria.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-accent text-sm hover:underline cursor-pointer bg-transparent border-0"
            >
              Submit another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <Field label="What was lost?" required>
              <input
                type="text"
                name="what"
                required
                placeholder="e.g., The Ansault pear, the Ubykh language"
                className="form-input"
              />
            </Field>

            <Field label="When was it lost?">
              <input
                type="text"
                name="when"
                placeholder="e.g., 1914, 3rd century BCE, sometime in the 1800s"
                className="form-input"
              />
            </Field>

            <Field label="Why does it matter?" required hint="What makes this story worth telling?">
              <textarea
                name="why"
                required
                rows={4}
                placeholder="What's compelling, surprising, or heartbreaking about this loss?"
                className="form-input resize-y min-h-[100px]"
              />
            </Field>

            <Field label="Category">
              <select name="category" className="form-input" defaultValue="">
                <option value="" disabled>Select a category (optional)</option>
                {categories.map(([key, meta]) => (
                  <option key={key} value={key}>{meta.label}</option>
                ))}
              </select>
            </Field>

            <Field label="Sources or links?" hint="Articles, Wikipedia pages, books, etc.">
              <textarea
                name="sources"
                rows={2}
                placeholder="https://..."
                className="form-input resize-y min-h-[60px]"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Your name or handle">
                <input type="text" name="name" placeholder="Optional" className="form-input" />
              </Field>
              <Field label="Email">
                <input type="email" name="email" placeholder="Optional" className="form-input" />
              </Field>
            </div>

            {status === 'error' && (
              <p className="text-extinct text-sm">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto bg-accent/10 text-accent border border-accent/20 rounded-full px-8 py-3 text-sm font-medium hover:bg-accent/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === 'submitting' ? 'Submitting\u2026' : 'Submit Suggestion'}
            </button>
          </form>
        )}
      </div>
    </>
  );
}

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-text-primary text-sm font-medium">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {hint && <span className="block text-text-muted text-xs mt-0.5">{hint}</span>}
      <div className="mt-2">{children}</div>
    </label>
  );
}
