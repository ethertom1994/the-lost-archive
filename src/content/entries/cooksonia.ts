import type { Entry } from '../../types';

export const cooksonia: Entry = {
  slug: 'cooksonia',
  name: 'Cooksonia',
  tagline: 'No leaves. No roots. Just tiny forking stems. This plant colonized bare rock 430 million years ago and made everything on land possible.',
  category: 'flora',
  subcategory: 'Prehistoric Plants',
  lastKnownYear: '430 million years ago',
  lastKnownLocation: 'Global (fossils found in Wales, Ireland, Bolivia, Australia)',
  coordinates: [51.81, -3.02],
  region: 'Global',
  status: 'extinct',
  cause: 'Natural extinction through evolutionary succession over hundreds of millions of years',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Before the Green

Four hundred and thirty million years ago, dry land was a desert. Not in the sense of sand dunes and cacti, but in the most absolute sense: nothing grew. The continents were bare rock, scoured by wind and rain, uncolonized by any visible life. The only green on Earth was in the ocean.

Then something crept ashore. Cooksonia, one of the earliest known vascular land plants, appeared in the late Silurian period. It was barely a few centimeters tall. It had no leaves, no roots, no flowers, no seeds. Just simple forking stems, each branch splitting into two, topped with tiny spore-bearing capsules called sporangia. It was as minimal as a plant can be and still be a plant.

## The Pioneer

Cooksonia's breakthrough was vascular tissue, a system of internal tubes that could transport water from the base of the plant to its tips. This sounds trivial, but it was revolutionary. Without vascular tissue, land organisms were limited to the thickness of a few cells, dependent on direct contact with moisture. Vascular tissue meant a plant could stand upright, grow taller than a moss, and colonize surfaces beyond the immediate water's edge.

The earliest Cooksonia fossils come from rocks in Wales, Ireland, and Bolivia, suggesting it spread widely and quickly. It grew on bare soil and rock surfaces, probably in moist lowland areas near rivers and coasts. Each plant was tiny, but collectively they were the advance guard of an invasion that would transform the planet.

## The Chain It Started

Cooksonia and its contemporaries didn't just grow on land. They created land, in the ecological sense. Their roots (or root-like structures in later descendants) broke down rock into soil. Their decaying stems added organic matter. They created the conditions for other organisms to follow: arthropods, fungi, and eventually the vast forests of the Devonian and Carboniferous periods.

Every fern, every tree, every grass, every flower traces its lineage back to plants like Cooksonia. Every animal that lives on land exists because plants colonized the terrestrial surface first, creating the food chains and oxygen levels that made animal life possible.

## The Humblest Ancestor

The fossil of Cooksonia is almost comically unimpressive. A tiny forking twig, a few centimeters across, preserved in grey rock. It looks like something you'd brush off your shoe. But this unprepossessing little stem is one of the most important organisms in the history of life. It was the first to solve the problem of living on dry land, and everything that followed, every forest, every meadow, every creature that breathes air, descends from that solution.`,
  quickFacts: {
    'Type': 'Early vascular land plant',
    'Age': '~430-410 million years ago (Late Silurian to Early Devonian)',
    'Size': 'A few centimeters tall',
    'Key Innovation': 'Vascular tissue for water transport',
    'Reproduction': 'Spores, not seeds',
    'First Described': '1937 by William Henry Lang',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both remind us that the world we walk on is built atop vanished predecessors' },
    { slug: 'franklinia', relationship: 'Both are plants known only from extremely limited evidence, one from fossils, the other from a single river bluff' },
  ],
  sources: [
    { title: 'The Emerald Planet: How Plants Changed Earth\'s History', author: 'David Beerling', year: 2007 },
    { title: 'On Cooksonia, the Earliest Known Land Plant', author: 'W. H. Lang', year: 1937 },
    { title: 'Early Land Plants Today: Diversity and Phylogeny', author: 'Dianne Edwards and Patricia Kenrick', year: 2015 },
  ],
};
