import type { Entry } from '../../types';

export const wootzSteel: Entry = {
  slug: 'wootz-steel',
  name: 'Indian Wootz Steel',
  tagline: 'The crucible steel from South India that supplied Damascus swords and Viking blades. The finest steel in the world for over a millennium. The exact technique has never been replicated.',
  category: 'material',
  subcategory: 'Metallurgy',
  lastKnownYear: '~1800s',
  lastKnownLocation: 'Southern India (Tamil Nadu, Karnataka, Telangana)',
  coordinates: [13.08, 80.27],
  region: 'South Asia',
  status: 'extinct',
  cause: 'The decline of traditional smelting communities, exhaustion of specific iron ore deposits, colonial disruption of trade networks, and the replacement of crucible steel by industrial Bessemer process steel',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Steel of Legends

For over a thousand years, the finest steel in the world came from a specific process practiced in southern India. Small crucibles of iron, carbon-rich plant material, and glass were sealed and heated in charcoal-fired furnaces to temperatures exceeding 1,500°C. The result was a high-carbon steel ingot — called "wootz" by the British (likely from the Kannada word *ukku*, meaning steel) — with a carbon content of 1-2%, far higher than anything European smiths could achieve.

These ingots were the raw material for the legendary Damascus steel blades. Forged by smiths in Syria, Persia, and Central Asia, the swords displayed a distinctive watered or moire pattern on their surface — the visual signature of a microstructure containing cementite nanowires and carbon nanotube structures that modern metallurgists did not fully understand until 2006.

## The Supply Chain

The wootz trade connected South Indian smelters to Middle Eastern sword-makers across thousands of miles. Tamil and Kannada-speaking communities in what is now Tamil Nadu, Karnataka, and Telangana produced the raw ingots. These were shipped to workshops in Damascus, Isfahan, Bukhara, and beyond, where skilled smiths forged them into weapons prized from Scandinavia to Japan.

The Viking Ulfberht swords, forged between 800 and 1100 CE, used crucible steel that likely originated in the same South Indian furnaces. The global reach of wootz steel predated the industrial revolution by a millennium.

## The Disappearance

By the 1800s, wootz production had effectively ceased. The reasons were multiple and interconnected: British colonial policies disrupted traditional Indian industries, the specific iron ore deposits that provided the right chemical composition were depleted, the charcoal and plant materials used in the crucible charges changed as forests were cleared, and the smelting communities that held the knowledge dispersed under economic pressure.

Modern metallurgists — notably John Verhoeven and Alfred Pendray in the 1990s — conducted extensive experiments to recreate wootz steel. They came remarkably close, identifying the critical role of trace elements like vanadium and molybdenum in the original Indian ores. But they could never precisely replicate the original microstructure using historically authentic methods. The specific combination of ore, fuel, flux, temperature profile, and forging technique that produced the best wootz blades remains partially unknown.`,
  quickFacts: {
    'Origin': 'Southern India (Tamil Nadu, Karnataka)',
    'Production Period': '~300 BCE - ~1800s CE',
    'Carbon Content': '1-2% (high-carbon steel)',
    'Temperature Required': '>1,500°C in sealed crucible',
    'Famous Products': 'Damascus swords, Ulfberht blades',
    'Microstructure': 'Cementite nanowires + carbon nanotubes',
    'Trade Route': 'South India → Middle East → Europe/Asia',
    'Modern Research': 'Verhoeven & Pendray experiments (1990s)',
  },
  connections: [
    { slug: 'damascus-steel', relationship: 'Damascus steel blades were forged FROM wootz steel ingots — this is the source material, that is the finished product' },
    { slug: 'ulfberht-swords', relationship: 'Viking Ulfberht swords used crucible steel likely sourced from the same South Indian production' },
    { slug: 'roman-concrete', relationship: 'Both ancient materials with nanostructural properties that modern science only recently identified' },
  ],
  sources: [
    { title: 'The Mystery of Damascus Blades', author: 'John D. Verhoeven', year: 2001 },
    { title: 'Carbon Nanotubes in an Ancient Damascus Sword', author: 'M. Reibold et al., Nature', year: 2006 },
    { title: 'Wootz Steel: An Advanced Material of the Ancient World', author: 'Sharada Srinivasan & Srinivasa Ranganathan', year: 2004 },
    { title: 'Iron and Steel in Ancient India', author: 'Vibha Tripathi', year: 2001 },
  ],
};
