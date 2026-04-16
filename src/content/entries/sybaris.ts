import type { Entry } from '../../types';

export const sybaris: Entry = {
  slug: 'sybaris',
  name: 'Sybaris',
  tagline: 'A Greek colony so rich its name became a byword for luxury. In 510 BCE its neighbor Croton destroyed it, then diverted a river to bury the ruins. The city stayed lost for 2,500 years. We still do not know where most of it is.',
  category: 'place',
  subcategory: 'Destroyed Cities',
  lastKnownYear: -510,
  lastKnownLocation: 'Gulf of Taranto, Calabria, southern Italy',
  coordinates: [39.719, 16.503],
  region: 'Magna Graecia',
  status: 'extinct',
  cause: 'Conquered by neighboring Croton in 510 BCE; the Crathis river was then diverted to submerge the ruins and bury the site under alluvial sediment',
  body: `## A City Famous for Being Comfortable

Sybaris was founded around 720 BCE on the fertile coastal plain of the Gulf of Taranto, between the Crathis and Sybaris rivers. By the sixth century BCE it was among the richest cities in the Greek world. Its territory ran across southern Italy from sea to sea. Its population may have reached three hundred thousand, extraordinary for an ancient city. Its citizens became so closely associated with soft living that the adjective "sybaritic" entered Greek, and then every later European language, as a synonym for luxurious self-indulgence.

The ancient sources delighted in stories about the Sybarites: that they invented the chamber pot so they would not have to leave the table, that they outlawed roosters within the city walls so no one would be woken early, that they taught their war horses to dance to flutes (and lost a battle when their enemies played the tune). Most of these anecdotes come from hostile sources written well after the city\'s fall. The historical Sybaris was a commercial power that traded with the Etruscans, minted its own distinctive coinage with a bull motif, and established colonies of its own across the region.

## The Year the River Came In

Around 511 BCE an internal revolt led by a populist named Telys overthrew the Sybarite aristocracy and exiled five hundred wealthy citizens. The exiles took refuge at Croton, a rival city to the south associated with Pythagoras. When Telys demanded their return, Croton refused. The resulting war was brief.

In 510 BCE the Crotoniate army defeated the Sybarites in a single battle. According to Strabo, the victors then did something deliberately erasing: they diverted the course of the Crathis river to flow over the ruins of the city. Modern geology confirms something close to the story. The ancient site lies under several meters of alluvial sediment, and for more than two millennia no one could find it.

## The Long Disappearance

Thurii was founded on or near the site in 443 BCE, and later Copia was built there by the Romans. Both in turn decayed. By the medieval period the coast was a malarial swamp, and the location of the original Sybaris was known only from ancient texts. Travelers searched for it in the nineteenth century. American classicists organized expeditions in the 1960s. Only in 1968 did an Italian and American team, using magnetometers and core drilling, confirm that the city lay beneath the fields near Sibari, buried under four to six meters of clay.

Excavation has been slow. The water table is high. Most of the ancient city is still below the modern farmland. What has been recovered includes portions of sixth-century housing, road grids, and pottery, but the heart of classical Sybaris — its agora, its temples, its archives — has never been reached.

## A Parable of Erasure

Sybaris is an unusual kind of loss. The city was not gradually forgotten. It was deliberately, physically, hydraulically erased by a rival that then shaped its memory through anecdote. What we know about the living city is almost entirely polemic from its enemies. What we have recovered physically is a fraction. The name survives as a metaphor for decadence; the city beneath the metaphor remains buried in mud.`,
  quickFacts: {
    'Founded': 'c. 720 BCE by Achaean Greeks',
    'Destroyed': '510 BCE by Croton',
    'Population Estimate': 'Up to 300,000 at peak',
    'Burial Depth': 'Buried under 4-6 meters of alluvial sediment',
    'Rediscovery': '1968, by joint Italian-American expedition using magnetometers',
    'Percentage Excavated': 'Small fraction; most of the ancient city remains unexcavated',
  },
  connections: [
    { slug: 'helike', relationship: 'Both Greek cities catastrophically destroyed by water and buried for millennia, their locations lost until modern rediscovery' },
    { slug: 'carthage-destruction', relationship: 'Both are examples of ancient cities deliberately erased by rival powers rather than left to decay' },
    { slug: 'falernian-wine', relationship: 'Both represent the luxury culture of Magna Graecia and Roman Italy, much of which is known only through later literary references' },
  ],
  sources: [
    { title: 'Sybaris', url: 'https://en.wikipedia.org/wiki/Sybaris' },
    { title: 'The Search For Sybaris', author: 'Froelich Rainey', url: 'https://www.penn.museum/sites/expedition/the-search-for-sybaris/', year: 1969 },
    { title: 'The Greeks in the West', author: 'Giovanni Pugliese Carratelli', year: 1996 },
  ],
};
