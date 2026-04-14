import type { Entry } from '../../types';

export const sundarbansShrinking: Entry = {
  slug: 'sundarbans-shrinking',
  name: 'The Sundarbans',
  tagline: 'The world\'s largest mangrove forest is drowning. Its swimming tigers — the only ones that hunt humans — are running out of islands.',
  category: 'place',
  subcategory: 'Shrinking Ecosystems',
  lastKnownYear: 'Present (actively shrinking)',
  lastKnownLocation: 'Bangladesh/India border',
  coordinates: [21.94, 89.18],
  region: 'South Asia',
  status: 'functionally_extinct',
  cause: 'Rising sea levels from climate change, combined with upstream dam construction reducing freshwater flow and increasing salinity',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Forest That Breathes with the Tide

The Sundarbans is not a single forest but a labyrinth — 10,000 square kilometers of mangrove islands, tidal channels, and mudflats straddling the border between Bangladesh and India at the mouth of the Ganges-Brahmaputra delta. It is the largest contiguous mangrove ecosystem on Earth. The name comes from the Sundari tree (*Heritiera fomes*), whose pneumatophore roots rise from the mud like skeletal fingers, breathing air when the tide retreats and submerging when it returns. The entire landscape exhales and inhales twice a day.

This tidal forest shelters an extraordinary density of life. It is the last significant habitat of the Royal Bengal tiger, with an estimated 100 to 150 individuals in the Bangladesh portion and roughly the same number on the Indian side. These are not ordinary tigers. Sundarbans tigers swim between islands, crossing channels of brackish water that would deter any other big cat. They drink saltwater. They are the only tiger population in the world known to regularly attack and kill humans — an estimated 30 to 50 people per year, mostly honey collectors and fishermen who enter the forest's interior.

## Measured Disappearance

Satellite imagery tells a story that is both slow and relentless. Between 2000 and 2020, the Sundarbans lost approximately 137 square kilometers of land area — not to deforestation but to submersion. Sea levels in the Bay of Bengal are rising at 3 to 8 millimeters per year, roughly twice the global average, driven by thermal expansion and glacial melt. Islands that existed on maps in the 1960s are gone. Lohachara Island, once home to 10,000 people, was fully submerged by 2006, producing some of the world's first confirmed climate refugees.

The Sundari trees themselves are dying. Upstream dams on the Ganges and its tributaries, particularly India's Farakka Barrage completed in 1975, have reduced freshwater flow into the delta by an estimated 40 percent. Less freshwater means higher salinity in the mangrove channels. The Sundari tree, which tolerates brackish conditions but requires periodic freshwater flushing, is succumbing to what researchers call "top-dying disease" — a progressive dieback linked to salinity stress. Surveys indicate that over half of the Sundari trees in the Bangladesh Sundarbans now show symptoms.

## The Tigers and the Water

As islands shrink and salinity kills the forest canopy, the tigers lose territory. The Sundarbans tiger population has no corridor to any other habitat. They are isolated on a sinking archipelago. Conservation efforts face a paradox: the same tigers that make the Sundarbans famous also make fieldwork extraordinarily dangerous. Camera trap surveys require researchers to enter areas where a tiger may be waiting in shoulder-deep water behind the next stand of pneumatophores.

Climate projections suggest that a one-meter sea level rise — within the range of end-of-century estimates — would submerge 75 percent of the Sundarbans. The forest, its tigers, and the four million people who live along its edges are all caught in the same tightening noose. This is not a past loss catalogued from historical records. It is a loss being measured in real time, island by island, tree by tree, tide by tide.`,
  quickFacts: {
    'Total Area': '~10,000 km\u00B2 (Bangladesh and India combined)',
    'Tiger Population': '~200-300 Royal Bengal tigers',
    'Sea Level Rise': '3-8 mm/year (Bay of Bengal, ~2x global average)',
    'Land Lost (2000-2020)': '~137 km\u00B2 to submersion',
    'Freshwater Reduction': '~40% due to upstream dams (Farakka Barrage, 1975)',
    'Human Deaths (Tigers)': '~30-50 per year',
    'Lohachara Island': 'Fully submerged by 2006 (10,000 displaced)',
    'Projected Loss (1m rise)': '~75% of current area',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both ecosystems destroyed by the convergence of human-caused water diversion and climate change' },
    { slug: 'golden-toad', relationship: 'Both species and habitats being erased by climate change — one already gone, the other in the process' },
  ],
  sources: [
    { title: 'Sea Level Rise and the Sundarbans Mangrove', author: 'Sugata Hazra et al.', year: 2016, url: 'https://doi.org/10.1007/978-81-322-2494-5_7' },
    { title: 'The Hungry Tide', author: 'Amitav Ghosh', year: 2004 },
    { title: 'Mangrove forest dynamics in the Sundarbans from satellite imagery', author: 'Anirban Mukhopadhyay et al.', year: 2015, url: 'https://doi.org/10.1016/j.jenvman.2015.02.037' },
    { title: 'Tigers of the Sundarbans', author: 'Pranabes Sanyal', year: 2013 },
  ],
};
