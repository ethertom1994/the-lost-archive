import type { Entry } from '../../types';

export const baiji: Entry = {
  slug: 'baiji',
  name: 'The Baiji',
  tagline: 'The Goddess of the Yangtze. Survived 20 million years of evolution. Could not survive 50 years of Chinese industrialization.',
  category: 'fauna',
  subcategory: 'Marine Mammals',
  lastKnownYear: 2006,
  lastKnownLocation: 'Yangtze River, China',
  coordinates: [30.58, 114.27],
  region: 'East Asia',
  status: 'functionally_extinct',
  cause: 'Industrial pollution, ship traffic, dam construction, and bycatch in the Yangtze River',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Baiji.png/400px-Baiji.png',
  imageCaption: 'The baiji, or Yangtze River dolphin',
  imageCredit: 'Institute of Hydrobiology, Chinese Academy of Sciences',
  body: `## The Six-Week Search

In November 2006, an international team of thirty scientists aboard two research vessels began the most thorough survey ever conducted of the Yangtze River. For six weeks, they traveled 3,400 kilometers of the river using visual observation and acoustic monitoring, systematically scanning every stretch where the baiji had once been found. They found nothing. Not a single individual of *Lipotes vexillifer*, the Yangtze River dolphin, the creature that Chinese fishermen had revered for centuries as the Goddess of the Yangtze.

The expedition's conclusion was stark: the baiji was functionally extinct. It was the first large mammal to be driven to extinction in over fifty years, and the first cetacean lost to human activity in modern history.

## Twenty Million Years, Gone

The baiji's lineage stretched back some twenty million years, making it one of the oldest dolphin species on Earth. It had evolved in the Yangtze long before humans arrived in the region, navigating the murky river with sophisticated echolocation rather than sight. In Chinese folklore, the baiji was considered a river goddess, the reincarnation of a princess who had drowned. Fishermen considered it deeply unlucky to harm one.

For most of Chinese history, the baiji coexisted with the dense human populations along the Yangtze. Estimates suggest the population was still in the thousands as recently as the 1950s. Then came the industrialization of China's interior.

## Death by a Thousand Wounds

No single cause killed the baiji. It was a cascade. Industrial runoff poisoned the river. Fishing nets and illegal electrofishing electrocuted and entangled them. Ship propellers slashed them. The construction of dams fragmented their habitat and disrupted the fish populations they depended on. The Three Gorges Dam, completed in 2006, was the most dramatic intervention, but the damage had been accumulating for decades.

A captive male named Qi Qi lived at the Institute of Hydrobiology in Wuhan from 1980 until his death in 2002. Researchers had hoped to find him a mate and start a captive breeding program, but despite years of searching, no suitable female could be captured. Qi Qi died alone.

## The Silence After

An unconfirmed sighting was reported in 2007, but the 2006 expedition remains the definitive survey. The Yangtze still flows, still carries a billion tons of commerce, still supports millions of people. But the creature that swam it for twenty million years, the one the fishermen called a goddess, is gone. The river's other endemic cetacean, the Yangtze finless porpoise, now numbers fewer than a thousand and is declining.`,
  quickFacts: {
    'Scientific Name': 'Lipotes vexillifer',
    'Common Names': 'Baiji, Yangtze River Dolphin, Chinese River Dolphin',
    'Evolutionary Age': '~20 million years',
    'Population in 1950s': 'Estimated thousands',
    'Population in 1997': '~13 individuals',
    'Declared Functionally Extinct': '2006',
    'Last Captive Individual': 'Qi Qi (died 2002, Wuhan)',
  },
  connections: [
    { slug: 'stellers-sea-cow', relationship: 'Both were large, gentle aquatic animals that could not survive contact with industrial-scale human activity' },
    { slug: 'aral-sea', relationship: 'Both represent ecosystems destroyed by the same force: centrally planned industrial transformation of waterways' },
  ],
  sources: [
    { title: 'Farewell to the Baiji', author: 'Samuel T. Turvey', year: 2008 },
    { title: 'Loss of the Baiji', author: 'Turvey et al.', year: 2007, url: 'https://doi.org/10.1098/rsbl.2007.0292' },
    { title: 'The Yangtze River Dolphin', author: 'Zhou Kaiya', year: 2002 },
    { title: 'Witness to Extinction: How We Failed to Save the Yangtze River Dolphin', author: 'Samuel T. Turvey', year: 2009 },
  ],
};
