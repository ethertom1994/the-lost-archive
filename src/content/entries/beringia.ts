import type { Entry } from '../../types';

export const beringia: Entry = {
  slug: 'beringia',
  name: 'Beringia',
  tagline: 'A grassland the size of a subcontinent connected two worlds for millennia. Humans crossed it. Mammoths roamed it. The ocean swallowed it.',
  category: 'place',
  subcategory: 'Submerged Landscapes',
  lastKnownYear: '-9000',
  lastKnownLocation: 'Between modern Alaska and Siberia',
  coordinates: [65.0, -169.0],
  region: 'Arctic',
  status: 'extinct',
  cause: 'Rising sea levels at the end of the last glacial period submerged the land bridge',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Bridge Between Worlds

During the last glacial period, so much of Earth's water was locked in continental ice sheets that global sea levels dropped by as much as 120 meters. The shallow Bering Strait, which today separates Alaska from Siberia by only 85 kilometers of water averaging 50 meters deep, was entirely above sea level. In its place stood Beringia: not a narrow bridge but a vast landmass up to 1,600 kilometers wide from north to south, connecting northeast Asia to northwest North America in an unbroken expanse of grassland steppe.

Beringia was not a frozen wasteland. Pollen cores and fossil evidence reveal a productive ecosystem: a cold, dry grassland dominated by grasses, sedges, and sage, supporting populations of woolly mammoths, steppe bison, horses, caribou, saiga antelope, and lions. The climate was cold but arid, with less snowfall than the interior of either continent, which kept vegetation accessible to grazers year-round.

## The Human Crossing

The question of when and how humans first entered the Americas remains one of the most debated topics in archaeology. The traditional model holds that people crossed Beringia on foot during the Last Glacial Maximum, roughly 20,000 to 15,000 years ago, following herds of large mammals across the grassland. More recent evidence, including pre-Clovis archaeological sites in the Americas and genetic analysis of indigenous populations, suggests that the crossing may have occurred earlier and possibly by multiple routes, including a coastal route along the southern edge of Beringia by boat.

What is clear is that Beringia was habitable. Archaeological sites on both the Siberian and Alaskan sides of the former land bridge contain tools, hearths, and butchered animal remains dating back tens of thousands of years. People did not merely sprint across Beringia. Some likely lived there for generations, part of a population known to geneticists as the Beringian standstill, a group that appears to have been genetically isolated in the region for thousands of years before dispersing into the Americas.

## Swallowed by the Sea

As the last ice age ended, beginning roughly 14,000 years ago, the great ice sheets melted and sea levels rose. The flooding of Beringia was not instantaneous but occurred over several thousand years as the Bering Strait gradually filled. By approximately 11,000 years ago, the connection was severed. Asia and North America became separate continents again. The grassland steppe, its mammoths and horses, and whatever human settlements existed on it disappeared beneath the Bering and Chukchi Seas, where they remain, largely inaccessible to archaeology, on the shallow continental shelf.`,
  quickFacts: {
    'Width': 'Up to 1,600 km north to south',
    'Exposed Period': '~30,000-11,000 years ago',
    'Sea Level Drop': '~120 meters below present',
    'Ecosystem': 'Mammoth steppe (grassland)',
    'Megafauna': 'Mammoths, bison, horses, lions, caribou',
    'Human Occupation': 'Possibly 25,000+ years ago',
    'Submerged': '~11,000 years ago',
    'Current Depth': '~50 meters average (Bering Strait)',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both were inhabited landscapes submerged by rising seas at the end of the last ice age, Doggerland between Britain and Europe, Beringia between Asia and America' },
    { slug: 'green-sahara', relationship: 'Both are landscapes that once supported abundant life and human habitation, transformed beyond recognition by climate change on a scale that dwarfs anything in recorded history' },
  ],
  sources: [
    { title: 'The Last Americans: The Ice Age Origins of American Peoples', author: 'Steve Oppenheimer', year: 2004 },
    { title: 'Paleoecology of Beringia', author: 'David M. Hopkins et al.', year: 1982 },
    { title: 'Beringian Standstill and the Spread of Native American Founders', author: 'Tamm et al.', year: 2007, url: 'https://doi.org/10.1371/journal.pone.0000829' },
    { title: 'The Bering Land Bridge', author: 'David M. Hopkins', year: 1967 },
  ],
};
