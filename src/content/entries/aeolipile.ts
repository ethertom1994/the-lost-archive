import type { Entry } from '../../types';

export const aeolipile: Entry = {
  slug: 'aeolipile',
  name: "Heron's Aeolipile",
  tagline: 'A steam-powered spinning ball built in Alexandria around 50 CE — 1,700 years before the Industrial Revolution. It was treated as a novelty.',
  category: 'technology',
  subcategory: 'Steam Power',
  lastKnownYear: '~1st century CE',
  lastKnownLocation: 'Alexandria, Roman Egypt',
  coordinates: [31.2, 29.92],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Never developed beyond a demonstration device. The Roman economy relied on slave labor, removing the economic incentive to develop labor-saving machinery. The knowledge survived in manuscripts but the practical engineering tradition died.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Machine That Was Too Early

Around 50 CE, the Greek-Egyptian engineer Heron of Alexandria described a device in his treatise *Pneumatica*: a sealed cauldron of water was heated over a fire, and the steam was channeled through pipes into a hollow sphere mounted on an axle. Two bent nozzles on opposite sides of the sphere released the steam in opposite directions, causing the sphere to spin rapidly. Heron called it an aeolipile — "the ball of Aeolus," the Greek god of wind.

It is the first known device to convert steam pressure into rotary motion. It is, in principle, a steam engine — or at least the essential mechanism of one. The gap between Heron's spinning ball and James Watt's industrial engine is not conceptual but engineering: pistons, condensers, governors, and the metallurgy to build pressure vessels. The fundamental insight — that steam can be harnessed to do work — was there in Alexandria seventeen centuries before it was "invented" in Britain.

## Why It Stayed a Toy

The aeolipile is often cited as the great "what if" of technological history. Had the Romans developed it further, could they have launched an industrial revolution? The consensus among historians is probably not, for several reinforcing reasons.

First, the Roman economy was built on slave labor. The economic incentive to develop labor-saving machinery — the driver of the Industrial Revolution in 18th-century Britain — was absent. Why build an engine to pump water when you could buy a slave to turn a crank?

Second, Roman metallurgy, while sophisticated, could not produce the tight-fitting cylinders and high-pressure vessels needed for practical steam engines. The materials science simply wasn't there yet.

Third, Heron himself seems to have viewed the aeolipile as a demonstration piece — an illustration of pneumatic principles, not a prototype for a power source. His writings describe it alongside other automata and theatrical devices: temple doors that opened when a fire was lit, coin-operated holy water dispensers, and wind-powered organs.

## The Lost Tradition

Heron's manuscripts survived through Arabic transmission — translated and copied in the medieval Islamic world, then re-translated into Latin during the Renaissance. His descriptions of the aeolipile were known to European engineers centuries before anyone built a practical steam engine. But the practical engineering knowledge — how to actually construct the device, what materials worked best, what modifications improved performance — died with the Alexandrian workshop tradition.

The aeolipile was reinvented, independently, multiple times. But each reinvention started from scratch, without the benefit of whatever iterative improvements Heron and his successors might have made. We have his text. We have lost his tools, his materials, and his engineering intuition.`,
  quickFacts: {
    'Inventor': 'Heron of Alexandria',
    'Date': '~50 CE',
    'Location': 'Alexandria, Roman Egypt',
    'Principle': 'Steam-powered rotary motion',
    'Fuel': 'Wood or charcoal (to boil water)',
    'Gap to Industrial Engine': '~1,700 years',
    'Preserved In': 'Pneumatica (Heron\'s treatise)',
    'Transmission': 'Greek → Arabic → Latin → Modern',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'Both demonstrate that ancient engineering was far more sophisticated than commonly assumed — precision mechanics and steam power in the classical world' },
    { slug: 'roman-hydraulics', relationship: 'Both Roman-era engineering achievements that hint at an industrial capacity never fully realized' },
    { slug: 'library-of-alexandria', relationship: 'Both connected to Alexandria\'s intellectual tradition — the aeolipile was born in the same city that housed the great library' },
  ],
  sources: [
    { title: 'The Pneumatics of Hero of Alexandria', author: 'Bennet Woodcroft (translator)', year: 1851 },
    { title: 'Engineering in the Ancient World', author: 'J.G. Landels', year: 2000 },
    { title: 'Greek and Roman Technology: A Sourcebook', author: 'John W. Humphrey et al.', year: 2006 },
    { title: 'Ancient Inventions', author: 'Peter James & Nick Thorpe', year: 1994 },
  ],
};
