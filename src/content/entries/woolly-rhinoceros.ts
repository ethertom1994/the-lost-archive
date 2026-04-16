import type { Entry } from '../../types';

export const woollyRhinoceros: Entry = {
  slug: 'woolly-rhinoceros',
  name: 'Woolly Rhinoceros',
  tagline: 'A two-ton grazer with a coat of shaggy fur and a horn over a meter long, sweeping aside snow to reach the grasses beneath. It ranged from Europe to the Arctic edge of Beringia, and then the mammoth steppe collapsed beneath it.',
  category: 'fauna',
  subcategory: 'Pleistocene Megafauna',
  lastKnownYear: -11900,
  lastKnownLocation: 'Northeastern Siberia, Russia',
  coordinates: [68.0, 150.0],
  region: 'Eurasia',
  status: 'extinct',
  cause: 'Rapid Late Pleistocene warming collapsed the mammoth steppe; possible contribution from human hunting',
  imageUrl: undefined,
  body: `## The Ice Age Survivor

The woolly rhinoceros, *Coelodonta antiquitatis*, was built for a world that no longer exists. It was covered head to toe in dense reddish-brown fur. Its ears were small and furred to resist frostbite. It had two horns, the front one often more than a meter long and worn flat on one side from decades of sweeping aside snow to reach the frozen grasses beneath. Adult animals could weigh two tonnes.

For most of the last 300,000 years the woolly rhino was one of the most widespread large mammals on Earth, roaming across a vast band of cold steppe that stretched from the Atlantic coast of Spain, across northern Europe, and deep into Siberia, reaching the Chukotka Peninsula at the edge of the former Bering land bridge. Woolly rhino bones are so common at Pleistocene sites that they are among the most abundant mammalian fossils recovered from European caves.

We also have more than bones. Frozen carcasses have been pulled from the Siberian permafrost, including a mummified baby woolly rhino, nicknamed Sasha, that was found in Yakutia in 2014 with hair, skin, and parts of internal organs still intact. Stone Age artists painted them on the walls of caves at Chauvet and Rouffignac in France with the accuracy of people who had watched them up close.

## The Collapse of the Mammoth Steppe

Woolly rhinos did not die out from cold. They died from the end of the cold. The ecosystem they depended on, often called the mammoth steppe, was a peculiar cold-arid grassland that covered much of northern Eurasia during the last glacial period. It was dry, dusty, and surprisingly productive, supporting a rich fauna of mammoths, horses, bison, reindeer, and rhinos.

Around 14,700 years ago, at the onset of the Bolling-Allerod warm interval, the climate shifted abruptly. Warmer, wetter conditions let mosses, shrubs, and eventually trees colonize the formerly grassy plains. The mammoth steppe fragmented and then largely disappeared, replaced in the north by waterlogged tundra and in the south by forest. Grazers that specialized on steppe grasses could no longer find enough food.

Genetic and radiocarbon studies of woolly rhino remains from northeastern Siberia place the last known survivors around 14,000 years ago in the Arctic regions of Yakutia. (There are a handful of disputed dates suggesting possible survival into the early Holocene, but these have not been reliably replicated.) Unlike woolly mammoths, which survived in a last refuge on Wrangel Island until roughly 4,000 years ago, no island population of woolly rhinos is known.

## Humans and Horns

Human hunters certainly killed woolly rhinos. Ancient DNA analysis of wolf coprolites, butchery marks on bones, and occasional rhino remains in archaeological middens all attest to it. But a 2021 ancient-DNA study of 14 woolly rhino genomes found no clear population decline linked to the arrival of modern humans in Siberia; the population seems to have remained stable until very close to extinction. The best current evidence points to climate-driven habitat collapse as the dominant cause, with human hunting perhaps finishing off already diminished herds.

What they left behind is a landscape depopulated of giants. The modern tundra and taiga are quiet by comparison to the Pleistocene steppe. The woolly rhino's horns, composed of keratin rather than true bone, have almost all rotted away over the millennia, though a few survive frozen in permafrost. They are curved, flattened weapons, the tool of an animal that pushed snow off grass for a living in a world that has melted.`,
  quickFacts: {
    'Species': 'Coelodonta antiquitatis',
    'Weight': 'Up to 2 tonnes',
    'Front Horn Length': 'Over 1 meter',
    'Range': 'Spain to Chukotka, northern Eurasia',
    'Last Known Date': 'c. 14,000 years ago, northeastern Siberia',
    'Habitat Required': 'Cold, dry mammoth steppe',
  },
  connections: [
    { slug: 'beringia', relationship: 'Both were part of the vanished Pleistocene mammoth steppe ecosystem that reached from Europe to Alaska' },
    { slug: 'green-sahara', relationship: 'Both lost to Holocene climate change that transformed whole biomes within a few thousand years' },
    { slug: 'haasts-eagle', relationship: 'Both were oversized Pleistocene animals whose habitat could not survive the warming world' },
  ],
  sources: [
    { title: 'Extinction chronology of the woolly rhinoceros Coelodonta antiquitatis in the context of late Quaternary megafaunal extinctions in northern Eurasia', author: 'Anthony J. Stuart, Adrian M. Lister', year: 2012 },
    { title: 'Pre-extinction demographic stability and genomic signatures of adaptation in the woolly rhinoceros', author: 'Edana Lord et al.', year: 2020 },
    { title: 'Woolly rhinoceros - Wikipedia', url: 'https://en.wikipedia.org/wiki/Woolly_rhinoceros' },
  ],
};
