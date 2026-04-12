import { motion } from 'framer-motion';
import MetaTags from '../components/shared/MetaTags';

export default function PrivacyPage() {
  return (
    <>
      <MetaTags
        title="Privacy"
        description="Privacy information for The Lost Archive."
        path="/privacy"
      />

      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-8">
          Privacy
        </h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            The Lost Archive is a static, read-only website. We do not use cookies, and we do not
            collect, store, or sell any personal data. There are no accounts, no logins, and no
            user data storage of any kind.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Analytics
          </h2>

          <p>
            We use Vercel Web Analytics to understand how people use the site. This service collects
            anonymized, non-personally-identifiable page view data — specifically page URL, referrer,
            browser type, device type, and country. It uses a daily-rotating hash to count unique
            visitors without cookies and without cross-site tracking. No personal information is
            ever collected or stored.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Images
          </h2>

          <p>
            Images used throughout the archive are sourced from Wikimedia Commons and other public
            domain or Creative Commons-licensed archives. Credits and sources are provided on each
            entry page.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Content
          </h2>

          <p>
            All content is researched for educational purposes using primary and secondary historical
            sources. Citations are provided at the bottom of each entry.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Contact
          </h2>

          <p>
            This is an open-source project. If you have questions or concerns, you can reach us
            through the{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              project repository on GitHub
            </a>.
          </p>
        </div>
      </motion.div>
    </>
  );
}
