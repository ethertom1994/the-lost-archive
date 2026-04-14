import type { Entry } from '../../types';

export const javanTiger: Entry = {
  slug: 'javan-tiger',
  name: 'The Javan Tiger',
  tagline: 'Survived alongside humans on the most densely populated island on Earth. It lived in the margins until there were no margins left.',
  category: 'fauna',
  subcategory: 'Big Cats',
  lastKnownYear: 1976,
  lastKnownLocation: 'Mount Betiri, East Java, Indonesia',
  coordinates: [-8.43, 113.88],
  region: 'Southeast Asia',
  status: 'extinct',
  cause: 'Systematic habitat conversion to coffee, rubber, and teak plantations throughout the 19th and 20th centuries, combined with active hunting campaigns by colonial and post-colonial governments',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Island Tiger

Java is the most densely populated island on Earth — over 150 million people live on a landmass smaller than England. That a tiger subspecies survived there into the 1970s is remarkable. That it didn't survive longer is not.

The Javan tiger (*Panthera tigris sondaica*) was the smallest of the three Sunda Island tigers, smaller than its Sumatran cousin and significantly smaller than the Bengal or Siberian subspecies. It was adapted to the dense tropical forests of Java, a solitary hunter of deer, wild boar, and banteng (wild cattle). For centuries, it coexisted with the island's human inhabitants in an uneasy balance — feared, occasionally worshipped, and gradually pushed deeper into shrinking pockets of wilderness.

## The Plantation Century

The Dutch colonial administration transformed Java into a plantation economy. Coffee, rubber, teak, and sugar cane replaced lowland forest on a massive scale throughout the 1800s. The tiger was simultaneously losing its habitat and being actively hunted as a pest. Colonial authorities organized tiger drives and offered bounties. Local communities, facing more frequent encounters as forest disappeared, killed tigers that threatened livestock.

By 1940, the Javan tiger was restricted to remote mountain forests. The Japanese occupation during World War II, followed by Indonesian independence and the resulting population boom, accelerated deforestation. The last substantial forest blocks on Java were carved up for timber and agriculture through the 1950s and 1960s.

## The Last Refuge

By the 1970s, an estimated 4-5 tigers remained in the Mount Betiri region of East Java, a rugged area of remaining forest. In 1976, three tigers were confirmed there. After that, nothing. Despite extensive searches, camera trapping efforts, and persistent local reports of sightings, no verified evidence of the Javan tiger has been produced since.

Meru Betiri National Park, established partly to protect whatever tigers might remain, is now a monument to their absence. The forest is there. The prey species have recovered. But the animal that sat at the top of the food chain for thousands of years is gone. Java still has its forests. It just doesn't have its tiger.`,
  quickFacts: {
    'Scientific Name': 'Panthera tigris sondaica',
    'Weight': '100-140 kg (males)',
    'Last Confirmed Sighting': '1976',
    'Location': 'Mount Betiri, East Java',
    'Java\'s Population (1976)': '~85 million',
    'Java\'s Population (today)': '~156 million',
    'Primary Cause': 'Plantation agriculture + hunting',
    'Status': 'Declared extinct by IUCN, 2003',
  },
  connections: [
    { slug: 'thylacine', relationship: 'Both apex predators driven to extinction by colonial-era hunting and habitat destruction on islands' },
    { slug: 'zanzibar-leopard', relationship: 'Both island big cats exterminated through deliberate campaigns, with unverified sightings persisting long after official extinction' },
  ],
  sources: [
    { title: 'Riding the Tiger: Tiger Conservation in Human-Dominated Landscapes', author: 'John Seidensticker et al.', year: 1999 },
    { title: 'The Javan Tiger and Meru Betiri Reserve', author: 'John Seidensticker', year: 1987 },
    { title: 'Status and conservation of tigers in Indonesia', author: 'IUCN Cat Specialist Group', year: 2010 },
  ],
};
