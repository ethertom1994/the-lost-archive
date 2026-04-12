import type { Entry } from '../../types';

export const lopNur: Entry = {
  slug: 'lop-nur',
  name: 'Lop Nur',
  tagline: 'A wandering lake that sustained the Silk Road for centuries. Then the rivers shifted. Then China tested nuclear weapons there. It\'s now a radioactive salt flat.',
  category: 'place',
  subcategory: 'Vanished Bodies of Water',
  lastKnownYear: 1972,
  lastKnownLocation: 'Taklamakan Desert, Xinjiang, China',
  coordinates: [40.17, 90.58],
  region: 'Central Asia',
  status: 'extinct',
  cause: 'Diversion of feeder rivers for irrigation and natural hydrological shifts, compounded by use as a nuclear test site',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Wandering Lake

Lop Nur was never an ordinary lake. It moved. Over centuries, as the rivers that fed it, primarily the Tarim and the Kongque, shifted their courses through the flat desert terrain, the lake migrated across the landscape. Swedish explorer Sven Hedin, who visited in the early 1900s, was fascinated by the phenomenon and proposed his "wandering lake" theory: the lake oscillated between a northern and southern position on a cycle of roughly 1,500 years, as one river channel silted up and another opened.

At various points in history, Lop Nur covered thousands of square kilometers. It was a critical water source along the Silk Road, sustaining the oasis kingdom of Loulan and supporting trade caravans crossing the Taklamakan Desert. Marco Polo mentioned the region in his travels. The lake was a landmark, a lifeline, and a destination.

## The Drying

In the twentieth century, Lop Nur's feeder rivers were increasingly diverted for agricultural irrigation upstream. The Tarim River, the longest inland river in China, was dammed and channeled to water cotton fields. By the 1960s, the flow reaching Lop Nur had dwindled to almost nothing. The lake shrank rapidly.

By 1972, Lop Nur was completely dry. Satellite imagery from the era shows the distinctive "ear" shape of the desiccated lake bed, a pattern of concentric rings formed as the water retreated, visible from space. The ear of Lop Nur became one of the most recognizable features in satellite photography of Central Asia.

## The Test Site

In 1964, China detonated its first nuclear weapon at the Lop Nur Nuclear Weapons Test Base, located on and around the dried lake bed. Between 1964 and 1996, China conducted 45 nuclear tests at Lop Nur, including both atmospheric and underground detonations. The site was chosen for its remoteness and sparse population, though the Uyghur communities in the broader region bore consequences that are still debated.

The nuclear testing left the already-dead lake bed contaminated with radioactive fallout. The combination of extreme aridity, salt crust, and residual radiation makes the area one of the most inhospitable places on Earth.

## From Oasis to Wasteland

The trajectory of Lop Nur compresses several kinds of loss into one place. It was a natural wonder, a lake that walked across the desert. It was a crossroads of civilizations, where Silk Road merchants rested and traded. It was an ecosystem, supporting fish, waterfowl, and the poplar forests that lined its shores. And then it was a target, dried up by irrigation and poisoned by nuclear weapons.

Satellite imagery now shows nothing but a flat white salt crust stretching to the horizon, punctuated by the ruins of ancient fortifications and the concrete bunkers of a nuclear test range. The wandering lake has nowhere left to go.`,
  quickFacts: {
    'Historic Size': 'Up to 3,000+ km\u00B2 at various points',
    'Key Feature': '"Wandering lake" that migrated with shifting river channels',
    'Silk Road Role': 'Critical water source, supported the kingdom of Loulan',
    'Dried Completely': '1972',
    'Nuclear Tests': '45 Chinese nuclear tests, 1964-1996',
    'Current State': 'Radioactive salt flat, visible as "ear" shape from space',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both were vast inland water bodies destroyed by irrigation diversion, both in Central Asia' },
    { slug: 'centralia', relationship: 'Both are places rendered permanently uninhabitable by human activity' },
    { slug: 'doggerland', relationship: 'Both are lost landscapes that once supported human communities and trade' },
  ],
  sources: [
    { title: 'The Wandering Lake: Into the Heart of Asia', author: 'Sven Hedin', year: 1938 },
    { title: 'The Tarim Mummies', author: 'J.P. Mallory and Victor Mair', year: 2000 },
    { title: 'China\'s Nuclear Weapons Program: A Net Assessment', author: 'Robert Norris et al.', year: 1999 },
  ],
};
