import type { Entry } from '../../types';

export const bubalHartebeest: Entry = {
  slug: 'bubal-hartebeest',
  name: 'The Bubal Hartebeest',
  tagline: 'Painted on the walls of Egyptian tombs 4,000 years ago. The last one died in a Paris zoo in 1923.',
  category: 'fauna',
  subcategory: 'Antelope',
  lastKnownYear: 1923,
  lastKnownLocation: 'Jardin des Plantes, Paris, France',
  coordinates: [33.9, 2.5],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Overhunting by European colonists, habitat loss, competition with livestock',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Antelope of the Pharaohs

The bubal hartebeest (*Alcelaphus buselaphus buselaphus*) was once one of the most common large mammals of North Africa. It ranged from Morocco and Algeria eastward through Libya and Egypt, grazing in open grasslands and semi-arid scrublands along the Mediterranean coast and the fringes of the Sahara. Ancient Egyptians knew it well. Tomb paintings dating to 2000 BCE and earlier depict hartebeest being hunted, herded, and apparently kept in captivity. Some Egyptologists believe the bubal hartebeest was semi-domesticated, maintained in temple enclosures and used as a sacrificial animal, much as cattle were used in other cultures.

The animal was distinctive: tall, with a long narrow face, lyre-shaped horns, and a reddish-brown coat that lightened on the underside. It stood about 120 centimeters at the shoulder and could run at sustained speeds that made it difficult to hunt on foot. For millennia, it coexisted with human civilizations across North Africa.

## Colonial Collapse

The bubal hartebeest survived the rise and fall of Egypt, Carthage, Rome, and the Arab conquests. What it did not survive was the arrival of European colonial hunters armed with rifles in the nineteenth century. French colonists in Algeria and Morocco hunted the hartebeest relentlessly for sport and for meat. At the same time, expanding agriculture and livestock grazing consumed its habitat. The grasslands that had supported vast herds were converted to farmland or overgrazed by cattle, sheep, and goats.

By the mid-nineteenth century, the bubal hartebeest had vanished from Egypt and Libya. By 1900, it was gone from most of Algeria. Small populations lingered in the Atlas Mountain foothills of Morocco, but these were hunted to fragments. The last wild bubal hartebeests were reportedly seen in Algeria around 1902 and in Morocco around 1925.

## The Last in Paris

A small number of bubal hartebeests had been kept in European zoos since the late nineteenth century. The final known individual was a female held at the Jardin des Plantes in Paris, the oldest public zoo in France. She died there in 1923. No breeding program had been attempted. The subspecies that had been painted on pharaohs' walls and may have been among the first large mammals semi-domesticated by humans simply ceased to exist, ending a relationship between this animal and human civilization that had lasted over four thousand years.`,
  quickFacts: {
    'Scientific Name': 'Alcelaphus buselaphus buselaphus',
    'Range': 'Morocco to Egypt across North Africa',
    'First Depictions': 'Egyptian tomb paintings, ~2000 BCE',
    'Last Wild Sighting': '~1902 (Algeria)',
    'Last Individual': 'Died 1923, Paris Zoo',
    'Shoulder Height': '~120 cm',
    'Possible Domestication': 'Ancient Egyptians may have semi-domesticated them',
  },
  connections: [
    { slug: 'quagga', relationship: 'Both were abundant African grazers driven to extinction by European colonial hunting in the 19th century' },
    { slug: 'caspian-tiger', relationship: 'Both were large mammals that survived millennia of human coexistence only to be wiped out by modern firearms and habitat destruction' },
  ],
  sources: [
    { title: 'Extinction of the Bubal Hartebeest', author: 'Rod East', year: 1999 },
    { title: 'Antelopes: Global Survey and Regional Action Plans', author: 'IUCN/SSC Antelope Specialist Group', year: 2008 },
    { title: 'The Mammals of Egypt', author: 'Dale Osborn and Ibrahim Helmy', year: 1980 },
  ],
};
