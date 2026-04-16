import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { getEntry, entries } from '../content';
import MetaTags from '../components/shared/MetaTags';

/* ───── Story data ───── */

interface StoryEntry {
  slug: string;
  text: string;
}

const ACT_1: StoryEntry[] = [
  {
    slug: 'silphium',
    text: 'A plant so valuable the Romans stamped it on their coins. It flavored food, served as medicine, and may have prevented conception. They harvested every last stalk.',
  },
  {
    slug: 'library-of-alexandria',
    text: 'Not destroyed in a single fire \u2014 that\u2019s the comfortable version. It was starved of funding, looted by emperors, and abandoned by scholars over centuries. The catalog of what it held is itself lost.',
  },
  {
    slug: 'antikythera-mechanism',
    text: 'A bronze device from 60 BCE that tracked the moon, predicted eclipses, and modeled the cosmos with thirty interlocking gears. Nothing approaching its complexity appeared again for fourteen hundred years.',
  },
  {
    slug: 'roman-concrete',
    text: 'The Pantheon\u2019s dome has stood for two thousand years without rebar. Modern concrete crumbles within decades. The recipe \u2014 volcanic ash, seawater, and something else \u2014 died with Rome.',
  },
  {
    slug: 'garum',
    text: 'The ketchup of the ancient world. A fermented fish sauce so central to Roman cuisine that factories lined the Mediterranean coast. The exact technique vanished when the empire did.',
  },
];

const ACT_2: StoryEntry[] = [
  {
    slug: 'damascus-steel',
    text: 'Blades that could split a silk scarf in midair, forged from crucible steel with a distinctive watered pattern. By the 1800s, the ore ran out and the smiths were gone. Modern metallurgists can approximate it. They cannot replicate it.',
  },
  {
    slug: 'stellers-sea-cow',
    text: 'Georg Steller discovered this gentle, eight-ton marine mammal in 1741. By 1768 \u2014 twenty-seven years later \u2014 fur hunters had eaten every single one.',
  },
  {
    slug: 'stradivarius-secret',
    text: 'His violins still sing after three centuries. Every analysis has been tried: wood density, varnish chemistry, fungal treatment, climate patterns. We can describe the sound. We cannot make it.',
  },
  {
    slug: 'mixtec-codices',
    text: 'Before the Spanish arrived, Mesoamerican scribes kept hundreds of folding-screen books recording history, astronomy, and ceremony. Eight pre-Columbian codices survived the bonfires. The rest is ash.',
  },
  {
    slug: 'castrato-voice',
    text: 'For three centuries, boys were castrated before puberty to preserve their soprano range into adulthood. Moreschi\u2019s 1902 recording \u2014 scratchy, ghostly, utterly alien \u2014 is the only surviving echo of an entire vocal tradition.',
  },
  {
    slug: 'tyrian-purple',
    text: 'Worth more than gold. Twelve thousand sea snails to dye one robe. The Phoenicians guarded the process for a thousand years. It died with the fall of Constantinople.',
  },
];

const ACT_3: StoryEntry[] = [
  {
    slug: 'passenger-pigeon',
    text: 'Flocks darkened the sky for hours. Three to five billion birds. Within fifty years, commercial hunters had killed them all. Martha, the last, died alone in a Cincinnati zoo on September 1, 1914.',
  },
  {
    slug: 'thylacine',
    text: 'The Tasmanian government placed a bounty on thylacines for decades. On September 7, 1936, it officially declared them a protected species. That same day, the last thylacine died of exposure in a Hobart zoo.',
  },
  {
    slug: 'great-auk',
    text: 'The last breeding pair was found on Eldey island off Iceland in 1844. Collectors killed them \u2014 specimens were valuable precisely because the species was almost gone.',
  },
  {
    slug: 'huia-call',
    text: 'The M\u0101ori mourned the huia as sacred. Its call was mimicked in chants, its tail feathers worn by chiefs. The last confirmed sighting was 1907. The call lives only in oral imitation \u2014 increasingly distant echoes of an echo.',
  },
  {
    slug: 'fordite',
    text: 'Not made but accreted. Layers of automotive paint built up in spray booths over decades, hardening into stone-like strata of color. When factories switched to powder coating, the conditions that created it vanished.',
  },
  {
    slug: 'aral-sea',
    text: 'Once the fourth-largest lake on Earth, feeding an entire fishing industry. Soviet irrigation diverted its rivers. By 2014, the eastern basin was a salt flat. Rusting ships sit in desert sand a hundred kilometers from water.',
  },
  {
    slug: 'kodachrome',
    text: 'Seventy-four years of perfect color. The K-14 chemistry that developed it was so complex that by 2010, only one lab on Earth could still process it. When that lab closed, thousands of exposed rolls became permanently unviewable.',
  },
  {
    slug: 'eyak-language',
    text: 'Marie Smith Jones spent the last twenty years of her life as the only fluent Eyak speaker on Earth. She died in 2008. A language disappears roughly every two weeks; most leave no recording at all.',
  },
];

const ACT_4: StoryEntry[] = [
  {
    slug: 'baiji',
    text: 'The Yangtze river dolphin was called the \u201CGoddess of the Yangtze.\u201D Chinese civilization grew up alongside it for twenty million years. A 2006 expedition found none. The goddess had slipped away without anyone noticing.',
  },
  {
    slug: 'concorde',
    text: 'For twenty-seven years, you could fly from London to New York in three and a half hours. After its retirement in 2003, commercial flight became slower. For the first time in aviation history, the next generation went backward.',
  },
  {
    slug: 'arecibo-telescope',
    text: 'In 1974, we transmitted a message toward the stars. In 2020, the telescope that sent it collapsed into its own dish. If anyone ever replies, the ear we were listening with is rubble.',
  },
];

/* ───── Component ───── */

export default function StoryPage() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll-triggered fade-ins
  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (observed) => {
        for (const e of observed) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const totalEntries = entries.length;

  return (
    <>
      <MetaTags
        title="Everything On This Page Once Existed"
        description="The story of everything we've lost, told through the archive's most powerful entries."
        path="/story"
        image="https://the-lost-archive.vercel.app/og/story.png"
      />

      <div ref={containerRef} className="bg-bg-void text-text-primary">
        {/* ═══ OPENING ═══ */}
        <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center relative">
          <div className="max-w-2xl mx-auto space-y-6">
            <p
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight transition-all duration-[1500ms] ease-out"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '300ms' }}
            >
              Everything on this page once existed.
            </p>
            <p
              className="font-display text-xl sm:text-2xl text-text-secondary italic leading-relaxed transition-all duration-[1500ms] ease-out"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '1800ms' }}
            >
              Every sound was heard. Every flavor was tasted.<br className="hidden sm:block" /> Every creature breathed.
            </p>
          </div>

          <div
            className="absolute bottom-10 text-text-muted transition-opacity duration-1000"
            style={{ opacity: mounted ? 1 : 0, transitionDelay: '3500ms' }}
          >
            <ChevronDown size={24} className="animate-bounce" />
          </div>
        </section>

        {/* ═══ ACT I ═══ */}
        <ActHeading title="The Ancient World Was Full" />
        <div className="max-w-3xl mx-auto px-6 pb-24 space-y-24">
          {ACT_1.map(item => <StoryCard key={item.slug} item={item} size="large" />)}
        </div>

        {/* ═══ ACT II ═══ */}
        <ActHeading title="Then We Started Forgetting" />
        <div className="max-w-3xl mx-auto px-6 pb-24 space-y-24">
          {ACT_2.map(item => <StoryCard key={item.slug} item={item} size="large" />)}
        </div>

        {/* ═══ ACT III ═══ */}
        <ActHeading title="The Acceleration" />
        <div className="max-w-4xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACT_3.map(item => <StoryCard key={item.slug} item={item} size="compact" />)}
          </div>
        </div>

        {/* ═══ ACT IV ═══ */}
        <ActHeading title="What We Lost Yesterday" />
        <div className="max-w-3xl mx-auto px-6 pb-32 space-y-32">
          {ACT_4.map(item => <StoryCard key={item.slug} item={item} size="full" />)}
        </div>

        {/* ═══ CLOSING ═══ */}
        <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 text-center">
          <div
            data-reveal=""
            className="max-w-2xl mx-auto space-y-8"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 1.5s ease, transform 1.5s ease' }}
          >
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              This is what&rsquo;s already gone.
            </p>
            <p className="font-display text-xl sm:text-2xl text-text-secondary italic">
              The archive contains {totalEntries} entries.<br />
              The real number is incalculable.
            </p>
            <Link
              to="/explore"
              className="no-underline inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-8 py-3.5 text-sm font-medium hover:bg-accent/20 transition-colors duration-300 mt-4"
            >
              Enter the Archive <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Minimal footer */}
        <div className="border-t border-border-subtle py-8 text-center">
          <Link to="/" className="no-underline font-display text-sm text-text-muted hover:text-text-primary transition-colors">
            The <span className="text-accent">Lost</span> Archive
          </Link>
        </div>
      </div>
    </>
  );
}

/* ───── Sub-components ───── */

function ActHeading({ title }: { title: string }) {
  return (
    <div
      data-reveal=""
      className="max-w-3xl mx-auto px-6 py-20 sm:py-28"
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 1s ease, transform 1s ease' }}
    >
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-text-primary leading-tight">
        {title}
      </h2>
    </div>
  );
}

function StoryCard({ item, size }: { item: StoryEntry; size: 'large' | 'compact' | 'full' }) {
  const entry = getEntry(item.slug);
  if (!entry) return null;

  const hasImage = !!entry.imageUrl;

  if (size === 'compact') {
    return (
      <div
        data-reveal=""
        className="space-y-4"
        style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
      >
        {hasImage && (
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-bg-surface">
            <img
              src={entry.imageUrl}
              alt={entry.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover museum-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-void/60 to-transparent" />
          </div>
        )}
        <h3 className="font-display text-xl sm:text-2xl font-medium text-text-primary">{entry.name}</h3>
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{item.text}</p>
        <Link
          to={`/archive/${entry.slug}`}
          className="no-underline text-accent text-sm hover:underline inline-flex items-center gap-1"
        >
          Read the full story <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  // Large or full
  return (
    <div
      data-reveal=""
      className="space-y-6"
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 1s ease, transform 1s ease' }}
    >
      {hasImage && (
        <div className={`relative ${size === 'full' ? 'aspect-[16/9]' : 'aspect-[16/10]'} rounded-lg overflow-hidden bg-bg-surface -mx-6 sm:mx-0`}>
          <img
            src={entry.imageUrl}
            alt={entry.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover museum-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-void/50 to-transparent" />
        </div>
      )}
      <h3 className={`font-display font-medium text-text-primary ${size === 'full' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
        {entry.name}
      </h3>
      <p className={`text-text-secondary leading-relaxed ${size === 'full' ? 'text-base sm:text-lg' : 'text-base'}`}>
        {item.text}
      </p>
      <Link
        to={`/archive/${entry.slug}`}
        className="no-underline text-accent text-sm hover:underline inline-flex items-center gap-1"
      >
        Read the full story <ArrowRight size={14} />
      </Link>
    </div>
  );
}
