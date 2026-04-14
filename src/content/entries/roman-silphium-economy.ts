import type { Entry } from '../../types';

export const romanSilphiumEconomy: Entry = {
  slug: 'roman-silphium-economy',
  name: 'The Silphium Economy of Cyrene',
  tagline: 'An entire city-state built its wealth on a single plant. When the plant went extinct, the economy collapsed. The first resource curse.',
  category: 'culture',
  subcategory: 'Economic History',
  lastKnownYear: '~1st century CE',
  lastKnownLocation: 'Cyrene (modern Shahhat, Libya)',
  coordinates: [32.82, 21.86],
  region: 'North Africa',
  status: 'extinct',
  cause: 'The extinction of the silphium plant — the sole basis of Cyrene\'s export economy — combined with Roman imperial expansion that shifted trade patterns away from the city',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The One-Crop Kingdom

The ancient Greek colony of Cyrene, founded around 630 BCE on the coast of what is now eastern Libya, built one of the wealthiest city-states in the Mediterranean on the back of a single plant. Silphium — a giant fennel relative that grew wild in the hills behind the city but stubbornly resisted all attempts at cultivation — was Cyrene's oil, its gold, its Bitcoin. The city literally put silphium on its coins.

Silphium resin was used across the ancient Mediterranean as a spice, a medicine, a contraceptive, and a perfume. Demand was constant and high. Cyrene had a natural monopoly: the plant grew nowhere else (or at least, the Cyrenean variety was considered vastly superior to anything found elsewhere). For nearly six hundred years, the silphium trade made Cyrene rich.

## The Death of a Resource

The problem with a monopoly on a wild plant that cannot be cultivated is that the resource is finite. Ancient writers documented the decline: overharvesting, overgrazing by livestock, and expansion of farmland into silphium's habitat all contributed. Attempts to transplant the plant to other regions failed. Attempts to farm it in Cyrenaica also failed — silphium apparently required specific wild conditions that cultivation couldn't replicate.

By the 1st century CE, Pliny the Elder recorded that silphium had effectively disappeared. The last known stalk, he wrote, was sent to Emperor Nero as a curiosity. Whether this is precisely true or a literary flourish is debated, but the trajectory is clear: by the imperial period, silphium was gone.

## The First Resource Crash

Cyrene's economy never recovered. Without silphium, the city had little to export that couldn't be obtained cheaper elsewhere. It declined from a major Mediterranean power to a provincial backwater under Roman rule, eventually fading into ruins that are now a UNESCO World Heritage Site.

The pattern — a community building its economy on a single extractable resource, exploiting it to exhaustion, and collapsing — is so common in modern economic history that it has a name: the resource curse, or the Dutch disease. Cyrene got there first, two thousand years before oil-dependent states would repeat the same mistake with fossil fuels.`,
  quickFacts: {
    'City': 'Cyrene (founded ~630 BCE)',
    'Location': 'Modern Shahhat, Libya',
    'Export': 'Silphium (wild-harvested resin)',
    'Currency': 'Silphium depicted on coins',
    'Trade Monopoly': '~600 years',
    'Extinction': '~1st century CE',
    'Last Stalk': 'Reportedly sent to Emperor Nero',
    'UNESCO Status': 'World Heritage Site (1982)',
  },
  connections: [
    { slug: 'silphium', relationship: 'The plant itself — this entry covers the economic system built around it and the crash when it disappeared' },
    { slug: 'silphion-coin', relationship: 'The coins of Cyrene depicted silphium — numismatic evidence of the one-crop economy' },
    { slug: 'aral-sea', relationship: 'Both represent the collapse of an economy built on unsustainable resource extraction' },
  ],
  sources: [
    { title: 'Cyrene and Silphium', author: 'Andrew Dalby', year: 2003 },
    { title: 'Natural History, Book XIX', author: 'Pliny the Elder', year: 77 },
    { title: 'The Economy of the Greek Cities', author: 'Leopold Migeotte', year: 2009 },
    { title: 'Cyrenaica in Antiquity', author: 'UNESCO World Heritage nomination', year: 1982 },
  ],
};
