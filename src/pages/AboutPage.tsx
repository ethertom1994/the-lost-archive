import { motion } from 'framer-motion';
import MetaTags from '../components/shared/MetaTags';

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title="About"
        description="About The Lost Archive — an interactive museum of everything humanity has lost."
        path="/about"
      />

      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl font-medium text-text-primary mb-8">
          About The <span className="text-accent">Lost</span> Archive
        </h1>

        <div className="space-y-6 text-text-secondary leading-relaxed">
          <p>
            The Lost Archive is an interactive catalog of everything humanity has lost — extinct
            animals, vanished fruits, dead languages, lost pigments, erased landscapes, forgotten
            technologies, and more.
          </p>

          <p>
            Each entry tells the story of something that once existed and no longer does. Some were
            destroyed by human greed or ignorance. Some fell victim to forces beyond anyone's
            control. All of them left a gap in the world that can never be filled.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Why This Exists
          </h2>

          <p>
            We built this because the stories of what we've lost are as important as the stories
            of what we've created. Every extinct species, every vanished flavor, every silenced
            sound represents a thread cut from the fabric of human and natural history. These
            stories deserve to be told with care, accuracy, and a sense of the weight of their loss.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Content & Sources
          </h2>

          <p>
            Every entry in The Lost Archive is researched using primary and secondary historical
            sources. Citations are provided at the bottom of each entry. We strive for factual
            accuracy while maintaining a narrative tone that honors the emotional reality of
            these losses.
          </p>

          <p>
            This is an educational project. It is not comprehensive — the full catalog of what
            humanity has lost would fill libraries. We focus on entries that have compelling stories,
            reliable documentation, and the power to make people pause and consider what was.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Contribute
          </h2>

          <p>
            Know something the world has permanently lost? We welcome submissions from anyone.{' '}
            <a href="/suggest" className="text-accent hover:underline">Suggest an entry</a> and
            help us document what&rsquo;s gone.
          </p>

          <h2 className="font-display text-2xl font-medium text-text-primary pt-4">
            Technical Credits
          </h2>

          <p className="text-text-tertiary text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion. Content lives in the
            repository — no database, no CMS. Deployed on Vercel.
          </p>
        </div>
      </motion.div>
    </>
  );
}
