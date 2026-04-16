import type { Entry } from '../../types';

export const splendidPoisonFrog: Entry = {
  slug: 'splendid-poison-frog',
  name: 'Splendid Poison Frog',
  tagline: 'A brilliant red frog the size of a thumbnail, endemic to one mountain range in western Panama. Last seen in 1992. Declared extinct by the IUCN in 2020. The amphibian chytrid fungus reached its cloud forest in 1996, four years too late to be observed wiping it out.',
  category: 'fauna',
  subcategory: 'Extinct Amphibians',
  lastKnownYear: 1992,
  lastKnownLocation: 'Cordillera de Talamanca, western Panama',
  coordinates: [8.8, -82.6],
  region: 'Central America',
  status: 'extinct',
  cause: 'Amphibian chytrid fungus (Batrachochytrium dendrobatidis), which spread through the region around 1996',
  imageUrl: undefined,
  body: `## A Frog the Color of Arterial Blood

The splendid poison frog (Oophaga speciosa) was a small dendrobatid, 28 to 31 millimeters from snout to vent, with a back the saturated red of fresh arterial blood. It lived only along the eastern end of the Cordillera de Talamanca, the cloud-forest mountain range that straddles western Panama. It was diurnal. It was loud. Males called from exposed perches in the morning. Researchers who worked the region in the 1970s and 80s describe it as one of the easiest frogs to find in its habitat, because it advertised itself constantly.

Then, after 1992, no one saw it again.

## The Fungus That Erased a Genus

The disappearance of the splendid poison frog is part of one of the strangest extinction events of modern biology: the amphibian chytrid crisis. Batrachochytrium dendrobatidis is a microscopic fungus that infects amphibian skin and interferes with the absorption of water and electrolytes. Once it arrives in a susceptible population, mortality can approach 100 percent within months. It has been documented moving in a wave through Central American highlands since the 1980s, and it is now considered responsible for the decline or extinction of at least 90 amphibian species.

The wave reached the Cordillera de Talamanca around 1996. By then, the splendid poison frog was already gone. The species collapsed in the years immediately before the fungus was documented in its range, and the most widely accepted interpretation is that chytrid arrived slightly earlier than the first confirmed observations and erased the frog before anyone recognized what was happening. Surveys in the decades since — and the splendid poison frog was a conspicuous, easily detected animal — have turned up nothing.

## Declared Extinct, 2020

The IUCN Red List formally reclassified Oophaga speciosa as Extinct in 2020. The assessment notes that because the species was diurnal, highly visible, and extensively searched for, the complete absence of records since 1992 is unlikely to be a sampling failure. Unlike many cryptic amphibians that may persist unseen for decades, the splendid poison frog should have been found if it still existed.

No living specimen is held in any captive-breeding program. A handful of preserved specimens sit in museum collections. The species had not been studied in enough depth to document its full call, its breeding behavior in the wild, or the specific alkaloids it sequestered from its prey to produce its toxins — a defining feature of poison-dart frogs, each species of which draws from its own local menu of ants, mites, and beetles. That chemistry, and whatever medical compounds it might have held, is gone with the animal.

## A Quiet Pattern

The splendid poison frog is one of dozens of Central and South American amphibians driven extinct by chytrid in the last fifty years. The fungus seems to have spread through the international amphibian trade, possibly carried by African clawed frogs used in pregnancy tests from the 1940s onward. It is now on every continent except Antarctica. For the splendid poison frog, the timing was particularly unlucky: a narrow-range, high-elevation cloud-forest specialist, already restricted to a few hundred square kilometers, caught in the path of a disease it had no evolutionary history with.`,
  quickFacts: {
    'Species': 'Oophaga speciosa',
    'Range': 'Cordillera de Talamanca, western Panama',
    'Last Confirmed Sighting': '1992',
    'IUCN Extinction Declaration': '2020',
    'Size': '28-31 mm snout-to-vent',
    'Primary Cause': 'Amphibian chytrid fungus',
  },
  connections: [
    { slug: 'golden-toad', relationship: 'Another Central American amphibian driven extinct by the chytrid fungus wave in the 1980s-90s' },
    { slug: 'kauai-oo', relationship: 'Both were conspicuous, easily observed species whose sudden disappearance was detected precisely because they had been so visible' },
    { slug: 'tecopa-pupfish', relationship: 'Both were narrow-range endemics whose restricted habitat made them vulnerable to a single disruptive event' },
  ],
  sources: [
    {
      title: 'Oophaga speciosa: IUCN Red List Assessment',
      url: 'https://www.iucnredlist.org/species/55201/54344718',
      year: 2020,
    },
    {
      title: 'Splendid poison frog — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Splendid_poison_frog',
    },
    {
      title: 'AmphibiaWeb: Oophaga speciosa',
      url: 'https://amphibiaweb.org/species/1645',
    },
  ],
  keyDate: '2020',
  keyDateLabel: 'Officially declared extinct',
};
