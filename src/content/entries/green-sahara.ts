import type { Entry } from '../../types';

export const greenSahara: Entry = {
  slug: 'green-sahara',
  name: 'The Green Sahara',
  tagline: 'The largest desert on Earth was a lush savanna with hippos and fishing villages. Climate shifted. It turned to sand in two centuries.',
  category: 'place',
  subcategory: 'Lost Ecosystems',
  lastKnownYear: '~3500 BCE',
  lastKnownLocation: 'North Africa (Sahara region)',
  coordinates: [24.0, 10.0],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Gradual shift in Earth orbital parameters reduced monsoon rainfall, triggering rapid desertification amplified by vegetation-climate feedbacks',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Savanna Where the Sand Is Now

Between roughly 11,000 and 5,000 years ago, during a period climatologists call the African Humid Period, the Sahara was green. Not green at its edges, not green in isolated valleys, but profoundly, extensively green across millions of square kilometers that are today among the most arid landscapes on Earth. Lake sediment cores, fossilized pollen, and satellite radar imaging of buried river channels reveal a landscape of interconnected lakes, flowing rivers, and grassland savanna stretching across what is now southern Libya, Chad, Niger, and Algeria.

The mega-lake Chad covered an area of approximately 400,000 square kilometers, larger than the modern Caspian Sea. Rivers flowed through the central Sahara where no surface water exists today. Hippopotamuses, crocodiles, and fish inhabited waters that are now buried under meters of sand. Elephants, giraffes, and rhinoceroses grazed grasslands that receive zero rainfall in the modern era.

## The People of the Green Sahara

Humans thrived in this landscape. Archaeological sites across the Sahara have yielded harpoons, fishhooks, pottery, and the bones of domesticated cattle from the humid period. The rock art of Tassili n'Ajjer in southeastern Algeria, a UNESCO World Heritage Site, preserves thousands of paintings and engravings depicting scenes that are now impossible in their location: people swimming, herding cattle through grassland, and hunting large game animals. The art spans several phases, from an early period showing wild animals to a later pastoral phase depicting domestic herds, recording in pigment the cultural evolution of Saharan peoples over millennia.

The Gobero site in Niger, excavated by Paul Sereno's team beginning in 2000, revealed two distinct populations of lakeside dwellers separated by a thousand years, both living on the shores of a paleolake that no longer exists. The site contained burials, tools, and the remains of fish, turtles, and large mammals, evidence of a rich and settled existence in what is now featureless desert.

## The Collapse

The transition from green Sahara to desert was driven by a gradual change in Earth's orbital parameters that slowly reduced summer monsoon rainfall over North Africa. But the shift, once it reached a tipping point around 5,500 years ago, accelerated dramatically. As vegetation thinned, the land reflected more sunlight, heating the surface and further suppressing rainfall in a feedback loop. Dust increased, lakes shrank, and the remaining vegetation died. Research by Peter deMenocal and others, based on ocean sediment cores off the West African coast, suggests that the final transition from savanna to desert occurred over as little as two hundred years. An entire biome, one of the largest on Earth, collapsed within a timescale that individual human communities could have witnessed across their lifetimes.`,
  quickFacts: {
    'Period': '~11,000-5,000 years ago (African Humid Period)',
    'Area Affected': 'Millions of km\u00B2 across North Africa',
    'Mega-Lake Chad': '~400,000 km\u00B2 at peak',
    'Megafauna': 'Hippos, crocodiles, elephants, giraffes',
    'Human Evidence': 'Rock art, harpoons, pottery, cattle bones',
    'Key Rock Art': 'Tassili n\'Ajjer, Algeria (UNESCO)',
    'Collapse Speed': '~200 years from savanna to desert',
    'Cause': 'Orbital forcing + vegetation-climate feedback',
  },
  connections: [
    { slug: 'beringia', relationship: 'Both are landscapes of continental scale that supported human habitation for millennia before being transformed beyond recognition by natural climate change' },
    { slug: 'aral-sea', relationship: 'Both demonstrate how water systems that seem permanent can vanish, one through natural climate shift, the other through human intervention' },
  ],
  sources: [
    { title: 'Abrupt Onset and Termination of the African Humid Period', author: 'Peter deMenocal et al.', year: 2000, url: 'https://doi.org/10.1016/S0277-3791(99)00081-5' },
    { title: 'Gobero: A Middle Holocene Graveyard in the Sahara', author: 'Paul Sereno et al.', year: 2008 },
    { title: 'The Greening of the Sahara: Past Changes and Future Implications', author: 'Martin Claussen et al.', year: 1999 },
    { title: 'Tassili n\'Ajjer: Art and History in the Saharan Rock Paintings', author: 'Henri Lhote', year: 1959 },
  ],
};
