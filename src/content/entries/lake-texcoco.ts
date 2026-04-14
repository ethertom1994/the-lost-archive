import type { Entry } from '../../types';

export const lakeTexcoco: Entry = {
  slug: 'lake-texcoco',
  name: 'Lake Texcoco',
  tagline: 'The Aztecs built one of the world\'s greatest cities on a lake. The Spanish drained the lake. Now Mexico City sinks into its ghost.',
  category: 'place',
  subcategory: 'Drained Lakes',
  lastKnownYear: '~17th century',
  lastKnownLocation: 'Valley of Mexico, Mexico',
  coordinates: [19.43, -99.13],
  region: 'Central America',
  status: 'extinct',
  cause: 'Systematic draining by Spanish colonizers beginning in the 1600s to prevent flooding and expand agricultural land',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The City on the Water

When Hernán Cortés and his soldiers first saw Tenochtitlan in November 1519, they thought they were hallucinating. A city of 200,000 people — larger than any city in Spain — rose from the center of a vast lake, connected to the mainland by three great causeways. White temples and palaces gleamed above the water. Floating gardens called chinampas produced food in quantities that fed the entire metropolis. Aqueducts carried fresh water from mountain springs. A system of dikes separated the brackish waters of the lake's eastern portion from the freshwater western section, an engineering solution that European hydraulic engineers would not match for centuries.

Lake Texcoco was the heart of a system of five interconnected lakes filling the Valley of Mexico. Tenochtitlan sat on an island near the western shore, surrounded by water that served simultaneously as transportation network, food source, waste disposal system, and military defense. The Aztec relationship with the lake was not mere proximity — it was integration. The city was the lake and the lake was the city.

## The Draining

The Spanish, after destroying Tenochtitlan in 1521 and building Mexico City on its ruins, inherited the lake's flooding problem without inheriting the Aztec engineering that managed it. The dike system fell into disrepair. Catastrophic floods struck the colonial city in 1555, 1580, 1604, and 1629 — the last inundation lasting five years and killing 30,000 people. The colonial response was not to rebuild the Aztec flood management system but to eliminate the lake entirely.

Beginning in 1607, Spanish engineer Enrico Martínez directed the construction of the Desagüe — a massive drainage tunnel and canal system designed to carry water out of the Valley of Mexico entirely. The project continued in various forms for over 300 years. By the late nineteenth century, Lake Texcoco was effectively gone, reduced to seasonal marshland and salt flats.

## The City That Sinks

Mexico City today sits on the dried clay bed of Lake Texcoco, and the lakebed is taking its revenge. The clay, deprived of the water that once saturated it, compresses under the weight of the city above. Mexico City sinks at a rate of up to 50 centimeters per year in some districts — roughly twenty inches. The Palacio de Bellas Artes, built in 1934, has sunk more than four meters. The Metropolitan Cathedral tilts visibly. Water and sewer lines fracture as the ground beneath them deforms.

The irony compounds itself: the city pumps groundwater from the ancient lakebed aquifer to supply its 21 million residents, accelerating the very subsidence that threatens to destroy its infrastructure. A civilization that built its capital in harmony with a lake was replaced by one that destroyed the lake, and now the successor city is being slowly swallowed by the void the lake left behind.`,
  quickFacts: {
    'Original Lake System': 'Five interconnected lakes filling the Valley of Mexico',
    'Tenochtitlan Population': '~200,000 in 1519 (among world\'s largest cities)',
    'Draining Began': '1607 (Desagüe project under Enrico Martínez)',
    'Flooding Events': '1555, 1580, 1604, 1629 (five-year inundation)',
    'Current Subsidence': 'Up to 50 cm/year in worst-affected areas',
    'Mexico City Population': '~21 million (metro area)',
    'Bellas Artes Sinking': '4+ meters since construction in 1934',
    'UNESCO Concern': 'Historic center at risk from differential subsidence',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both vast bodies of water deliberately destroyed by human engineering decisions with devastating long-term consequences' },
    { slug: 'hanging-gardens', relationship: 'Both ancient wonders of water engineering — one mythologized, one drained and buried' },
  ],
  sources: [
    { title: 'The Broken Spears: The Aztec Account of the Conquest of Mexico', author: 'Miguel León-Portilla', year: 1962 },
    { title: 'Subsidence in the Mexico City Area', author: 'Dora Carreón-Freyre et al.', year: 2006, url: 'https://doi.org/10.1007/978-1-4020-5179-7_9' },
    { title: 'The Great Flood: The Drowning of Mexico City', author: 'Vera S. Candiani', year: 2014 },
    { title: 'Dreaming of Dry Land: Environmental Transformation in Colonial Mexico City', author: 'Vera S. Candiani', year: 2014 },
  ],
};
