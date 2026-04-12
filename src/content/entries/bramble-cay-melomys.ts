import type { Entry } from '../../types';

export const brambleCayMelomys: Entry = {
  slug: 'bramble-cay-melomys',
  name: 'The Bramble Cay Melomys',
  tagline: 'The first mammal officially killed by human-caused climate change. No one noticed until it was too late.',
  category: 'fauna',
  subcategory: 'Rodents',
  lastKnownYear: 2009,
  lastKnownLocation: 'Bramble Cay, Torres Strait, Australia',
  coordinates: [-9.14, 143.88],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Sea level rise and increased storm surges destroyed its island habitat',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Speck in the Ocean

Bramble Cay is a vegetated coral cay in the Torres Strait, the narrow waterway between Australia and Papua New Guinea. It measures roughly 340 by 150 meters at its largest, rising barely three meters above sea level. On this tiny scrap of land lived the entire world population of the Bramble Cay melomys, a small brown rodent about the size of a rat, found nowhere else on Earth.

The species was first collected by European scientists in 1845 and formally described in 1924. For most of its documented history, it attracted little attention. It was a small, unremarkable-looking rodent on a remote island. But *Melomys rubicola* would eventually become the most significant mammal extinction of the twenty-first century, not because of what it was but because of why it died.

## Rising Waters

The melomys depended on the low vegetation that grew on Bramble Cay. Beginning in the late twentieth century, rising sea levels and increasingly severe storm surges began washing over the island with greater frequency. Seawater inundation killed the vegetation the melomys needed for food and shelter. Between 2004 and 2014, satellite imagery showed the island's vegetated area declined by 97 percent.

Researchers from the Queensland government recorded several hundred melomys during surveys in the 1970s and 1980s. By 2002, the population had dropped to an estimated dozen. A 2011 survey found none. A final, intensive trapping effort in 2014 set 150 traps across the island over several nights. Not a single melomys was caught.

## The Distinction Nobody Wanted

In 2016, a research report by Ian Gynther, Natalie Waller, and Luke Leung officially recommended that *Melomys rubicola* be listed as extinct. Their report stated plainly that the primary cause was "ocean inundation of the low-lying cay, very likely on multiple occasions, during the last decade, destroying habitat and perhaps drowning some individuals." The Queensland government formally recognized the extinction in 2019.

This made the Bramble Cay melomys the first mammal species whose extinction was officially attributed to human-caused climate change. There was no dramatic last stand, no hunter with a gun, no corporation to blame directly. Just a quiet, relentless rise in the level of the sea, measured in centimeters, that erased an entire species from a place too small for most people to find on a map.

## What It Means

Climate scientists had long warned that sea level rise would eventually cause extinctions. The Bramble Cay melomys was the proof. It demonstrated that the abstract projections of climate models translate into real, irreversible biological loss. The species that goes first is rarely the one anyone was watching.`,
  quickFacts: {
    'Scientific Name': 'Melomys rubicola',
    'Island Size': '~340 x 150 meters',
    'Island Elevation': '~3 meters above sea level',
    'Peak Population': 'Several hundred (1970s-80s)',
    'Last Confirmed Sighting': '2009',
    'Declared Extinct': '2019 (Queensland Government)',
    'Cause': 'Sea level rise and storm surge inundation',
    'Significance': 'First mammal extinction attributed to climate change',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both represent land and life swallowed by rising seas, separated by eight thousand years of history' },
    { slug: 'xerces-blue', relationship: 'Both were small, obscure species whose extinction illustrates how habitat loss works quietly and completely' },
    { slug: 'lake-pedder', relationship: 'Both were unique ecosystems destroyed by water, one by intent and one by negligence' },
  ],
  sources: [
    { title: 'Confirmation of the extinction of the Bramble Cay melomys', author: 'Ian Gynther, Natalie Waller, Luke Leung', year: 2016 },
    { title: 'The Bramble Cay melomys: the first mammalian extinction due to climate change', author: 'John Woinarski', year: 2019, url: 'https://doi.org/10.1071/PC19012' },
    { title: 'Queensland Government Species Listing', year: 2019 },
  ],
};
