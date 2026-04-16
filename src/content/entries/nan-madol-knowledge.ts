import type { Entry } from '../../types';

export const nanMadolKnowledge: Entry = {
  slug: 'nan-madol-knowledge',
  name: 'Nan Madol Construction Knowledge',
  tagline: 'Ninety-two artificial islands built from basalt columns, each weighing tons, moved across open ocean by a civilization that left no written record of how.',
  category: 'place',
  subcategory: 'Lost Engineering',
  lastKnownYear: '~1500',
  lastKnownLocation: 'Pohnpei, Federated States of Micronesia',
  coordinates: [6.84, 158.33],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Decline of the Saudeleur dynasty and subsequent depopulation; oral traditions fragmentary, no written records',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Venice of the Pacific

Off the southeastern coast of the island of Pohnpei, in the western Pacific, lies one of the most enigmatic archaeological sites on Earth. Nan Madol is a complex of 92 artificial islands spread across a shallow reef flat, connected by a network of canals and covering an area of roughly 200 acres. The islands are constructed from massive columns of prismatic basalt, stacked in alternating courses like a log cabin, forming walls up to 25 feet high and enclosing tombs, ceremonial centers, and elite residences.

The site was the ceremonial and political capital of the Saudeleur dynasty, which ruled Pohnpei from approximately 1100 CE until the dynasty was overthrown around 1500 CE. At its peak, Nan Madol may have housed a thousand or more people, all of them members of the ruling elite and the priestly class that administered the complex rituals centered on the site.

## The Engineering Mystery

The basalt columns used to build Nan Madol were quarried from volcanic formations elsewhere on Pohnpei, primarily from the island's opposite side. Individual columns weigh between 5 and 50 tons. The cornerstone of the main tomb complex, Nandauwas, is a single basalt block estimated to weigh 50 tons. The total weight of basalt used in the construction has been estimated at 750,000 metric tons.

How these stones were transported remains genuinely unknown. The columns had to be moved from inland quarry sites to the coast and then across open water to the reef flat where Nan Madol sits. Pohnpei had no draft animals, no metal tools, and no pulleys or wheels. The Saudeleur left no written language. Oral traditions on Pohnpei attribute the construction to twin sorcerers who used magic to make the stones fly through the air, a narrative that, whatever its cultural meaning, has not yielded practical engineering insights.

## What Was Lost

Modern experimental archaeology has proposed rafts, log rollers, and coral fill ramps as possible transport methods, but none have been convincingly demonstrated at the scale required. The coordination alone is staggering: building Nan Madol required quarrying, shaping, transporting, and precisely stacking hundreds of thousands of tons of stone over several generations, all managed by a small island society with no writing system. The engineering knowledge was transmitted orally within the Saudeleur ruling class and died with the dynasty's overthrow. When the Nahnmwarki chieftains who replaced the Saudeleur took power, they abandoned Nan Madol as a residential site. The canals silted, the jungle encroached, and the knowledge of how to build a city on the sea passed out of human memory.`,
  quickFacts: {
    'Number of Islands': '92 artificial islets',
    'Area': '~200 acres (80 hectares)',
    'Construction Period': '~1180-1200 CE (major building phase)',
    'Material': 'Prismatic basalt columns, 5-50 tons each',
    'Total Stone Weight': '~750,000 metric tons estimated',
    'Builders': 'Saudeleur dynasty of Pohnpei',
    'UNESCO Status': 'World Heritage Site (2016)',
    'Transport Method': 'Unknown',
  },
  connections: [
    { slug: 'rai-stones', relationship: 'Both are monumental stone constructions from Pacific island cultures that required moving enormous weights across water using methods that are poorly understood' },
    { slug: 'inca-roads', relationship: 'Both represent massive infrastructure projects built by pre-industrial civilizations without written engineering manuals, relying on transmitted oral knowledge' },
  ],
  sources: [
    { title: 'Nan Madol: The City of the Dead', author: 'Gene Ashby', year: 1983 },
    { title: 'Archaeology of Nan Madol, Pohnpei', author: 'J. Stephen Athens', year: 1980 },
    { title: 'Nan Madol: Spaces of Transformation', author: 'Mark D. McCoy', year: 2016, url: 'https://doi.org/10.1080/00293652.2016.1151833' },
    { title: 'The Prehistory of Pohnpei', author: 'William Ayres', year: 1990 },
  ],
};
