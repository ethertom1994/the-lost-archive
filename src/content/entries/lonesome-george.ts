import type { Entry } from '../../types';

export const lonesomeGeorge: Entry = {
  slug: 'lonesome-george',
  name: 'Lonesome George',
  tagline: 'The last Pinta Island tortoise. He lived for a century, refused to mate, and became the loneliest animal on Earth.',
  category: 'fauna',
  subcategory: 'Reptiles',
  lastKnownYear: 2012,
  lastKnownLocation: 'Charles Darwin Research Station, Santa Cruz Island, Galapagos',
  coordinates: [0.58, -90.75],
  region: 'South America',
  status: 'extinct',
  cause: 'Hunting by whalers and sailors, habitat destruction by introduced goats',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lonesome_George_in_profile.png/400px-Lonesome_George_in_profile.png',
  imageCaption: 'Lonesome George, the last Pinta Island tortoise, at the Charles Darwin Research Station, 2006',
  imageCredit: 'Puente Arturo, CC BY-SA 2.0, via Wikimedia Commons',
  body: `## The Last of Pinta

On December 1, 1971, a Hungarian malacologist named Jozsef Vagvolgyi was conducting a survey on Pinta Island in the Galapagos archipelago when he found something that should not have existed: a single adult male Pinta Island tortoise (*Chelonoidis abingdonii*). The subspecies had been considered extinct. Whalers and fur sealers in the eighteenth and nineteenth centuries had taken thousands of Galapagos tortoises for food, rolling them onto their backs in ship holds where the animals could survive for months without food or water, providing fresh meat on long voyages. Pinta's population had been devastated, and feral goats introduced to the island in 1959 had consumed what remained of the tortoise habitat.

Yet here was one, a lone male estimated to be around sixty years old. He was brought to the Charles Darwin Research Station on Santa Cruz Island and given the name Lonesome George.

## Forty Years Alone

For the next four decades, George became the most famous tortoise in the world and an international symbol of conservation. Repeated efforts were made to breed him. Females from closely related subspecies were placed in his enclosure, but George showed little interest. On two occasions in the 2000s, females did lay eggs, but none were viable. Scientists tried hormone treatments and behavioral conditioning. Nothing worked. Some researchers speculated that George had simply been alone too long to remember or respond to mating behavior.

Meanwhile, George became a pilgrimage site. Tourists traveled from around the world to see the last of his kind. His enclosure at the research station drew hundreds of thousands of visitors. He was calm, indifferent to the attention, and spent his days eating cactus pads and soaking in shallow pools.

## June 24, 2012

On the morning of June 24, 2012, George's longtime keeper, Fausto Llerena, found him dead in his enclosure. He was estimated to be over 100 years old. No cause of death was determined beyond advanced age. With him died the Pinta Island tortoise subspecies. The Galapagos National Park Service announced the death with a statement that acknowledged what everyone already understood: an evolutionary lineage millions of years old had ended.

George's preserved body was sent to the American Museum of Natural History in New York, where taxidermists spent over a year preparing a lifelike mount. He was returned to the Galapagos in 2017 and is now displayed at a dedicated exhibit on Santa Cruz. Visitors still come to see him, though now they are visiting a monument rather than a living animal.`,
  quickFacts: {
    'Scientific Name': 'Chelonoidis abingdonii',
    'Discovered': '1971 by Jozsef Vagvolgyi',
    'Died': 'June 24, 2012',
    'Estimated Age at Death': '~100 years',
    'Breeding Attempts': 'Multiple, all unsuccessful',
    'Current Location': 'Preserved at exhibit, Santa Cruz, Galapagos',
    'Subspecies Status': 'Extinct (last individual)',
  },
  connections: [
    { slug: 'thylacine', relationship: 'Both became iconic symbols of extinction, their final individuals watched by the world' },
    { slug: 'baiji', relationship: 'Both species were lost despite international awareness and active conservation campaigns' },
  ],
  sources: [
    { title: 'Lonesome George: The Life and Loves of a Conservation Icon', author: 'Henry Nicholls', year: 2006 },
    { title: 'The Galapagos Giant Tortoises', author: 'James Gibbs et al.', year: 2014 },
    { title: 'Giant Tortoises of the Galapagos Islands', url: 'https://www.galapagos.org/conservation/conservation/project-areas/ecosystem-restoration/tortoise-restoration/', year: 2020 },
  ],
};
