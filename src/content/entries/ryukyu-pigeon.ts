import type { Entry } from '../../types';

export const ryukyuPigeon: Entry = {
  slug: 'ryukyu-pigeon',
  name: 'Ryukyu Wood Pigeon',
  tagline: 'A silver-banded black pigeon of the Okinawan forests, known to science from perhaps a dozen specimens. When Japanese settlers cut down the forests of the Daitō Islands in the 1930s, the last population had nowhere else to go.',
  category: 'fauna',
  subcategory: 'Extinct Birds',
  lastKnownYear: 1936,
  lastKnownLocation: 'Daitō Islands, Ryukyu archipelago, Japan',
  coordinates: [25.8278, 131.2339],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Complete deforestation of the Daitō Islands for sugarcane plantations and pre-war construction',
  body: `## The Silver-Banded Pigeon

The Ryukyu wood pigeon (Columba jouyi), also called the silver-banded black pigeon or silver-crescented pigeon, was a handsome medium-sized dove found only on the outer islands of the Ryukyu archipelago, the chain of subtropical islands running south-west from mainland Japan toward Taiwan. Its plumage was a dark glossy black with a distinctive silvery-white crescent across the back of the neck, a field mark that made identifying the species straightforward even in poor light.

The pigeon lived in the dense evergreen broadleaf forests of Okinawa, Zamami, Kerama, and the small isolated Daitō group, almost 400 kilometers east of the main Ryukyu chain. It was a forest-interior bird, foraging for fruit and nesting in the canopy of old-growth trees. Historical observers described flocks of forty or fifty birds in the Daitō forests in the early 20th century.

## A Species Seen Twice in Two Places

The Ryukyu wood pigeon was known to Western science almost entirely through specimens. The species was formally described by Leonhard Stejneger in 1887 and named in honor of the American naturalist Pierre Louis Jouy. The bird was last recorded on the main island of Okinawa in 1904. After that, all subsequent records came from the Daitō Islands alone, especially North Daitō (Kita-daitō-jima) and South Daitō (Minami-daitō-jima), the remote volcanic pair that had been only lightly inhabited before Japanese settlement in 1900.

Japanese settlement of the Daitō Islands began as a private colonization effort led by the entrepreneur Tamaoki Han'emon, who obtained rights to develop the uninhabited islands and began cutting the forest for sugarcane plantations in 1900. Within a generation, most of the original forest had been cleared. The species' last confirmed sighting was in 1936. By the 1940s, the forest was effectively gone and no pigeons were reported from any of its former range.

## Why There Is Almost No Record

Fewer than fifteen specimens of Columba jouyi exist in scientific collections worldwide, held primarily at the American Museum of Natural History, the British Museum of Natural History, Yamashina Institute for Ornithology in Chiba, and the National Museum of Nature and Science in Tokyo. There are no audio recordings of the bird's call, no photographs of a living individual, and no field descriptions of its breeding behavior. What is known about its biology, habitat preferences, diet, and appearance comes from skins shot between 1887 and the 1920s and from a handful of accounts by Japanese and Western collectors.

The Daitō Islands today hold a heavily modified landscape of sugarcane fields, airstrips, and small villages. No mature forest remains. The endemic wildlife of the islands, which included the pigeon and at least one distinct bat subspecies, was largely eliminated during the forest clearance. The BirdLife International species factsheet lists the extinction cause straightforwardly as deforestation.

## The Cost of an Invisible Extinction

The Ryukyu wood pigeon is an example of what conservation biologists sometimes call a silent extinction. No campaign ever tried to save it. No newspaper reported its final sighting. The species went from described to extinct in less than forty years, on a pair of islands whose transformation into plantations was not considered controversial or remarkable. The birds' disappearance was essentially contemporary with the pigeon's formal recognition by science, and the field research needed to understand its ecology was never done, because by the time anyone thought to do it there was nothing left to study.

The extinction is a reminder that many 20th-century losses occurred not through dramatic persecution but through the quiet, routine conversion of forest to farmland, carried out by people who would not have recognized the animal they were displacing.`,
  quickFacts: {
    'Species': 'Columba jouyi',
    'Range': 'Ryukyu Islands, southern Japan',
    'Described': '1887 (Stejneger)',
    'Last Okinawa Record': '1904',
    'Last Daitō Record': '1936',
    'Surviving Specimens': 'Fewer than 15 worldwide',
  },
  connections: [
    { slug: 'japanese-river-otter', relationship: 'Both Japanese endemic species driven extinct in the 20th century by habitat alteration, with minimal scientific documentation of living behavior' },
    { slug: 'huia-call', relationship: 'Both Pacific island birds lost with no preserved audio recordings, leaving their vocalizations permanently unknown' },
    { slug: 'passenger-pigeon', relationship: 'Both were pigeon species whose populations depended on specific old-growth forests, and both vanished when those forests were converted for agriculture' },
  ],
  sources: [
    { title: 'Extinct Birds', author: 'Julian P. Hume', year: 2017 },
    { title: 'Ryukyu Wood Pigeon', url: 'https://en.wikipedia.org/wiki/Ryukyu_wood_pigeon' },
    { title: 'Ryukyu Woodpigeon Columba jouyi Species Factsheet', url: 'https://datazone.birdlife.org/species/factsheet/ryukyu-woodpigeon-columba-jouyi', author: 'BirdLife International' },
  ],
};
