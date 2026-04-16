import type { Entry } from '../../types';

export const chinesePaddlefish: Entry = {
  slug: 'chinese-paddlefish',
  name: 'Chinese Paddlefish',
  tagline: 'A freshwater giant up to seven meters long, with a snout shaped like a sword. It lived in the Yangtze River for 200 million years. Functionally extinct by 1993, extinct by 2005, officially declared extinct by the IUCN in July 2022.',
  category: 'fauna',
  subcategory: 'Extinct Fish',
  lastKnownYear: 2003,
  lastKnownLocation: 'Yangtze River, China',
  coordinates: [30.6, 114.3],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Dam construction (especially the Gezhouba and Three Gorges dams) blocking spawning migration, combined with overfishing',
  imageUrl: undefined,
  body: `## A Living Fossil With a Sword for a Face

The Chinese paddlefish (Psephurus gladius) was one of only two species of paddlefish on Earth, the other being the American paddlefish of the Mississippi basin. The lineage is ancient — paddlefish fossils are known from the Cretaceous, and the group has persisted, largely unchanged, for at least 100 million years. The Chinese species was the larger of the two. Credible historical records describe specimens up to seven meters long and weighing several hundred kilograms. It was China's largest freshwater fish, and among the largest freshwater fish in the world.

Its defining feature was the rostrum: a long, flattened snout covered in electroreceptive cells that let it detect the minute electrical signals of prey fish in the murky water. Chinese fishermen called it the "elephant fish" for the resemblance of its snout to a trunk. It was a predator. It migrated up the Yangtze each spring to spawn in gravel beds above the Three Gorges.

## The Wall Across the River

In 1981, the Gezhouba Dam was completed across the Yangtze. It was the first major dam on the river's main stem, and it cut the paddlefish's spawning migration in half. The animals that needed to swim upstream to reproduce could no longer reach their breeding grounds. The Three Gorges Dam, whose reservoir began filling in 2003 and whose main structure was completed in 2006, sealed the fragmentation. A 2019 peer-reviewed analysis by the Yangtze River Fisheries Research Institute concluded that the Chinese paddlefish had become functionally extinct by 1993 — meaning no viable breeding population remained — and that the species itself was extinct somewhere between 2005 and 2010.

The last confirmed capture of a living Chinese paddlefish was on January 24, 2003, near Yibin in Sichuan. Researchers tagged the animal and released it. Its transmitter stopped pinging within a day. No individual has been confirmed since.

## The 2022 Declaration

On July 21, 2022, the IUCN Red List formally updated the status of Psephurus gladius to Extinct. In the same announcement, the Yangtze sturgeon — another ancient lineage that once shared the river — was declared Extinct in the Wild. The paddlefish declaration was the first formal extinction of a species that had been deemed functionally extinct for nearly thirty years, and it closed a genus that had existed since the age of dinosaurs.

## What Is Left

There is no living Chinese paddlefish in any aquarium or captive-breeding program. Unlike the American paddlefish, which is farmed and studied extensively, no viable captive population of Psephurus gladius was ever established. A handful of preserved specimens sit in Chinese museums. The best-documented living example is a short stretch of film footage of the 2003 specimen before its release.

The Yangtze itself is a different river than the one the paddlefish lived in. The dams remain. The baiji, a freshwater dolphin that also lived in the Yangtze, was declared functionally extinct in 2006. The finless porpoise of the river is critically endangered. The extinction of the Chinese paddlefish is a specific event, but it is also a marker: a 200-million-year lineage could not survive fifty years of industrial engineering of a single river.`,
  quickFacts: {
    'Species': 'Psephurus gladius',
    'Maximum Length': 'Up to 7 meters',
    'Functional Extinction': '1993',
    'Last Confirmed Sighting': 'January 24, 2003 (released alive, never recaptured)',
    'IUCN Declaration': 'July 21, 2022',
    'Lineage Age': '~100-200 million years',
  },
  connections: [
    { slug: 'baiji', relationship: 'Both were large animals of the Yangtze River driven extinct by industrial development of the same waterway within two decades of each other' },
    { slug: 'yangtze-softshell-turtle', relationship: 'Both are critically endangered Yangtze species collapsing under dam construction, pollution, and overfishing' },
    { slug: 'aral-sea', relationship: 'Both are cases of a single ecosystem transformed by large-scale water engineering, with species loss as a direct consequence' },
  ],
  sources: [
    {
      title: 'Extinction of Chinese paddlefish and wild Yangtze sturgeon announced by IUCN',
      url: 'https://www.globaltimes.cn/page/202207/1271156.shtml',
      year: 2022,
    },
    {
      title: 'Chinese paddlefish — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Chinese_paddlefish',
    },
    {
      title: 'Psephurus gladius: IUCN Red List Assessment',
      url: 'https://www.iucnredlist.org/species/18428/146104283',
      year: 2022,
    },
  ],
  keyDate: '2022-07-21',
  keyDateLabel: 'IUCN formally declares the species extinct',
};
