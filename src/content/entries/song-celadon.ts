import type { Entry } from '../../types';

export const songCeladon: Entry = {
  slug: 'song-celadon',
  name: 'Song Dynasty Celadon Glaze',
  tagline: 'A jade-green glaze so perfect it was made for only twenty years. Ninety pieces survive. The kilns fell with the empire.',
  category: 'material',
  subcategory: 'Ceramics',
  lastKnownYear: 1127,
  lastKnownLocation: 'Ruzhou, Henan Province, China',
  coordinates: [34.0, 113.0],
  region: 'East Asia',
  status: 'extinct',
  cause: 'The fall of the Northern Song dynasty to Jurchen invaders in 1127 destroyed the imperial kilns and dispersed the craftsmen',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Color of Jade in Clay

Among the most prized ceramics ever produced, Ru ware represents the pinnacle of Song dynasty celadon. For approximately twenty years during the Northern Song period, roughly 1086 to 1106 CE, imperial kilns at Qingliangsi near Ruzhou in Henan Province produced a jade-like green-blue glaze of extraordinary subtlety. The color, described by Chinese connoisseurs as the blue of the sky after rain, was achieved through a precise combination of iron oxide content, kiln temperature, and a reducing atmosphere maintained by controlling airflow during firing.

Fewer than one hundred pieces of authentic Ru ware are known to survive worldwide. A single Ru ware brush washer sold at auction in 2017 for over 37 million dollars, making Song celadon among the most valuable ceramics in existence.

## The Science of the Impossible

What made the Ru ware glaze remarkable was not any single variable but the interaction of many. The clay body was prepared from local materials with specific mineral compositions. The glaze itself contained iron, titanium, and calcium in proportions that modern analysis has measured precisely. But the firing process required maintaining kiln temperatures between 1,200 and 1,250 degrees Celsius while simultaneously controlling the atmosphere to be reducing rather than oxidizing, a condition achieved by starving the kiln of oxygen at critical moments.

The timing of each phase, the specific wood fuel used, the rate of cooling, and the moment of transition between oxidizing and reducing conditions were all critical. Small variations produced dramatically different results. The potters who achieved consistent Ru ware quality did so through generations of accumulated experience, reading subtle cues in flame color, smoke behavior, and the sound of the kiln.

## Lost with the Northern Song

In 1127, Jurchen armies from Manchuria captured the Northern Song capital of Kaifeng and overran Henan Province. The imperial court fled south, eventually establishing the Southern Song dynasty at Hangzhou. The Ru kilns at Qingliangsi ceased production. The craftsmen were scattered, killed, or absorbed into other pottery traditions. Southern Song potters attempted to recreate the Ru glaze, and later dynasties venerated the surviving pieces, but the specific combination of local materials, kiln design, and accumulated technique was never successfully reproduced. Modern Chinese ceramicists have come close, but their best efforts, produced with the benefit of chemical analysis and temperature-controlled electric kilns, still lack the particular luminosity that makes original Ru ware unmistakable.`,
  quickFacts: {
    'Production Period': '~1086-1106 CE',
    'Location': 'Qingliangsi, Ruzhou, Henan Province',
    'Surviving Pieces': '~90 worldwide',
    'Glaze Type': 'Iron-oxide celadon, reducing atmosphere',
    'Key Temperature': '1,200-1,250\u00B0C',
    'Auction Record': '~$37 million (2017, brush washer)',
    'Lost Because': 'Jurchen conquest of Northern Song (1127)',
  },
  connections: [
    { slug: 'han-purple', relationship: 'Both are Chinese materials whose precise production required conditions so specific that even knowing the ingredients does not allow reliable reproduction' },
    { slug: 'samian-ware', relationship: 'Both are ancient ceramics produced at industrial scale with standardized quality, whose specific glaze recipes and firing techniques were lost when their supporting civilizations collapsed' },
  ],
  sources: [
    { title: 'Chinese Ceramics: From the Paleolithic Period through the Qing Dynasty', author: 'Zhiyan Li and Wen Cheng', year: 2010 },
    { title: 'Ru Ware of the Northern Song Dynasty', author: 'Regina Krahl', year: 2017 },
    { title: 'The Art of the Chinese Potter', author: 'W. B. Honey', year: 1944 },
    { title: 'Song Dynasty Celadon Wares', author: 'National Palace Museum, Taipei', year: 2016 },
  ],
};
