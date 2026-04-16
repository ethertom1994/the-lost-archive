import type { Entry } from '../../types';

export const sundaland: Entry = {
  slug: 'sundaland',
  name: 'Sundaland',
  tagline: 'When sea levels were low, Southeast Asia was not an archipelago but a continent. The Indonesian islands were peaks on a vast subtropical plain the size of India, with river systems, forests, and human populations. Then the ice melted, and most of it drowned.',
  category: 'place',
  subcategory: 'Submerged Continental Shelf',
  lastKnownYear: -5000,
  lastKnownLocation: 'Sunda Shelf, Southeast Asia',
  coordinates: [3.0, 108.0],
  region: 'Southeast Asia',
  status: 'extinct',
  cause: 'Post-glacial sea level rise; meltwater pulses around 14,500 and 11,500 years ago submerged more than half of the exposed shelf',
  imageUrl: undefined,
  body: `## A Continent That Was

During the Last Glacial Maximum, about 21,000 years ago, global sea level was around 120 meters lower than today. So much water was locked up in the northern ice sheets that continental shelves everywhere were exposed as dry land. The Sunda Shelf, the underwater ledge that today lies beneath the Java Sea, the Gulf of Thailand, and the South China Sea, was one of the largest exposed shelves on Earth. At roughly 1.8 million square kilometers, it was about the size of the Indian subcontinent.

The modern Indonesian islands of Java, Sumatra, Borneo, and Bali, together with the Malay Peninsula and much of Indochina, sat on that shelf as the high ground of a single Southeast Asian landmass. Geographers and geneticists call it Sundaland. Great river systems ran across it. The paleo-Sunda River drained what is now much of the South China Sea basin; a separate paleo-drainage crossed the present-day Java Sea. The climate was cooler and drier than today, with savanna corridors alternating with rainforest refugia. Tigers, elephants, orangutans, rhinos, and humans all moved across it.

## The People on the Plain

Sundaland was inhabited. Modern humans reached the region at least 65,000 years ago, and genetic evidence indicates substantial populations on the exposed shelf during the last glacial period. At Niah Cave in Sarawak, the 40,000-year-old remains of a modern human known as Deep Skull were recovered in 1958 from what would then have been the interior of the Sundaland landmass, far from any coast.

The genetic signal of Sundaland is still readable in the modern world. A 2023 study led by Kim Hie Lim and colleagues combined population genomics with paleogeographic modeling to trace prehistoric human migrations out of Sundaland into South Asia, driven by sea-level rise that progressively drowned habitable land. The study identified two rapid rises of global sea level, around 14,500 and 11,500 years ago, known as Meltwater Pulse 1A and Meltwater Pulse 1B, that reduced Sundaland's land area by more than half within a few generations. Those pulses appear to correspond to population splits and dispersals detected in modern genomes.

## Underwater Rivers and Silent Coasts

Marine geophysical surveys have mapped the drowned river valleys of Sundaland in striking detail. The North Sunda River paleovalley, buried under shallow water in the South China Sea, shows meander bends and tributary confluences exactly as if it were still flowing. Submerged coastlines trace out at depth intervals that correspond to the standstills in the sea-level record. If you could drain the Java Sea you would see the drowned geography of a continent: forested upland peaks (the modern islands), lowland plains with river deltas, and estuaries where Neolithic fishing villages might well have stood.

Because Sundaland's coast was actively being drowned for thousands of years during a period of known human occupation, archaeological sites on the old shelf almost certainly exist. A few have been proposed: stone tools dredged up by fishing trawlers, possible shell middens in shallow water. But systematic underwater archaeology of the Sunda Shelf is only just beginning. Unlike the North Sea, where the drowned landscape of Doggerland has been mapped in detail, most of Sundaland's submerged archaeology remains hidden beneath sediment and murky tropical water.

## What Was Erased

Sundaland is probably the largest single habitable area on Earth that humans inhabited and then lost to the sea. Its drowning was a geographically specific event, driven by physical ice-sheet collapse in distant Canada and Antarctica, but its consequences shaped everything that happened afterwards in Southeast Asia: the distribution of languages, the fragmentation of once-connected populations into the Negrito, Austroasiatic, and Austronesian groups, and the maritime orientation of surviving coastal cultures.

The shelf is still there, the river valleys are still there, the bones of forests are still there. You just can no longer walk across them.`,
  quickFacts: {
    'Area (at LGM)': 'Approximately 1.8 million square kilometers',
    'Modern Remnants': 'Sumatra, Java, Borneo, Bali, Malay Peninsula',
    'Peak Exposure': 'Last Glacial Maximum, c. 21,000 years ago',
    'Key Drowning Events': 'Meltwater Pulse 1A (c. 14,500 BP), Pulse 1B (c. 11,500 BP)',
    'Final Submergence': 'c. 7,000 years ago',
    'Earliest Human Evidence': 'Niah Cave Deep Skull, c. 40,000 BP',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both are drowned Pleistocene continents, lost to the same post-glacial sea level rise' },
    { slug: 'beringia', relationship: 'All three were exposed continental shelves inhabited by humans, now entirely submerged' },
    { slug: 'zealandia', relationship: 'Both are vast submerged landmasses, though Sundaland\'s drowning was witnessed by the humans who lived there' },
  ],
  sources: [
    { title: 'Prehistoric human migration between Sundaland and South Asia was driven by sea-level rise', author: 'Hie Lim Kim et al.', year: 2023 },
    { title: 'Sundaland - Wikipedia', url: 'https://en.wikipedia.org/wiki/Sundaland' },
    { title: 'Sunda Shelf - Wikipedia', url: 'https://en.wikipedia.org/wiki/Sunda_Shelf' },
  ],
};
