import type { Entry } from '../../types';

export const caspianTiger: Entry = {
  slug: 'caspian-tiger',
  name: 'The Caspian Tiger',
  tagline: 'Hunted through the riverine forests of Central Asia from Turkey to China. The Soviet Union organized systematic extermination campaigns. The last confirmed sighting was in 1970.',
  category: 'fauna',
  subcategory: 'Big Cats',
  lastKnownYear: 1970,
  lastKnownLocation: 'Hakkari Province, southeastern Turkey',
  coordinates: [37.58, 43.74],
  region: 'Central Asia',
  status: 'extinct',
  cause: 'Organized hunting campaigns by the Russian Imperial and Soviet governments to clear land for agriculture, combined with habitat destruction of the tugai (riverine) forests that the tigers depended on',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Tiger of the Silk Road

The Caspian tiger (*Panthera tigris virgata*) once ranged across one of the widest territories of any tiger subspecies — from eastern Turkey through the Caucasus, around the Caspian Sea, across Iran, through the river valleys of Central Asia, and into western China. It was the tiger of the Silk Road, inhabiting the dense tugai forests that lined the great rivers: the Amu Darya, the Syr Darya, the Tigris, and their tributaries.

It was a large animal, comparable in size to the Bengal tiger, with a distinctive dense, long coat adapted to the cold winters of Central Asia. Its stripes were narrower and more closely set than those of other subspecies. Marco Polo reportedly saw Caspian tigers during his travels. They appear in Persian miniature paintings and Central Asian folklore. For centuries, they were a fact of life across a vast landscape.

## Systematic Destruction

The Russian Empire, and later the Soviet Union, viewed the Caspian tiger as an obstacle to agricultural development. Beginning in the 19th century, military units were deployed to clear tigers from areas designated for cotton cultivation and settlement. The Soviet government's "Virgin Lands Campaign" of the 1950s and 1960s converted vast areas of Central Asian steppe and riverine forest to farmland, destroying the tugai habitat that tigers needed.

The Caspian tiger was hunted with rifles, poison, and organized drives. Soviet authorities offered bounties. By the 1950s, the species was effectively gone from the Soviet Union. Remnant populations lingered in Iran, Afghanistan, and Turkey into the 1960s and early 1970s. The last confirmed sighting was of a tiger killed near the Turkish-Iraqi border in 1970.

## Genetic Ghost

In a twist of taxonomic irony, genetic analysis published in 2009 revealed that the Caspian tiger was almost genetically identical to the Siberian (Amur) tiger — they were essentially the same subspecies, separated by geography but not by genetics. This has raised the possibility of "rewilding" Central Asian habitat with Siberian tigers as ecological surrogates. Kazakhstan has begun preparing a reserve in the Ili River delta for a potential reintroduction.

The species that Soviet bureaucrats systematically destroyed may be resurrectable — not through de-extinction, but through the realization that its closest relative is still alive, five thousand kilometers to the east.`,
  quickFacts: {
    'Scientific Name': 'Panthera tigris virgata',
    'Range': 'Turkey to western China',
    'Last Confirmed': '1970 (Turkey)',
    'Weight': '170-240 kg (males)',
    'Habitat': 'Tugai (riverine) forest',
    'Destroyed By': 'Russian/Soviet military campaigns',
    'Genetic Twin': 'Siberian tiger (P. tigris altaica)',
    'Rewilding Prospect': 'Kazakhstan (Ili River delta)',
  },
  connections: [
    { slug: 'javan-tiger', relationship: 'Both tiger subspecies exterminated by deliberate government policy — one by colonial powers on Java, the other by Soviet campaigns in Central Asia' },
    { slug: 'thylacine', relationship: 'Both apex predators whose extinction was the result of organized, state-sponsored hunting campaigns' },
    { slug: 'aral-sea', relationship: 'Both victims of Soviet development programs in Central Asia — the tigers lost their habitat as rivers were diverted' },
  ],
  sources: [
    { title: 'Phylogeography and genetic ancestry of tigers', author: 'Driscoll et al., PLoS Biology', year: 2009 },
    { title: 'Saving the Tiger: The Last Stand', author: 'IUCN Cat Specialist Group', year: 2010 },
    { title: 'Tigers in the Snow', author: 'Peter Matthiessen', year: 2000 },
    { title: 'Return of the Tiger to Central Asia', author: 'WWF / Republic of Kazakhstan', year: 2017 },
  ],
};
