import type { Entry } from '../../types';

export const judeanDatePalm: Entry = {
  slug: 'judean-date-palm',
  name: 'Judean Date Palm',
  tagline: 'Praised by Pliny, destroyed by Rome. In 2005, a 2,000-year-old seed from Masada germinated. They named it Methuselah.',
  category: 'flora',
  subcategory: 'Ancient Cultivars',
  lastKnownYear: '~500 CE',
  lastKnownLocation: 'Judea (modern Israel/Palestine)',
  coordinates: [31.32, 35.35],
  region: 'Middle East',
  status: 'extinct_in_wild',
  cause: 'Systematic destruction of groves during Roman conquest and subsequent centuries of neglect',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  keyDate: '01-25',
  keyDateLabel: 'Methuselah seed successfully germinated at Arava Institute, 2005',
  body: `## The Pride of Judea

The dates of ancient Judea were famous across the Mediterranean world. Pliny the Elder, writing in the first century CE, devoted considerable attention to them in his Natural History, noting their exceptional size, sweetness, and the prosperity they brought to the region. The groves that lined the Jordan Valley from the Sea of Galilee to the Dead Sea were a defining feature of the Judean landscape, depicted on Roman coins struck after the conquest as a symbol of the subjugated province.

Judean dates were not merely agricultural products. They were central to the economy, the cuisine, and the identity of the region. Josephus described groves stretching for miles, and the date honey they produced was one of the "seven species" that defined the biblical Land of Israel. Archaeological evidence suggests a sophisticated cultivation system supporting multiple varieties adapted to the extreme heat and low rainfall of the Jordan Rift Valley.

## Destruction and Disappearance

The Roman destruction of Judea following the revolts of 66-73 CE and 132-135 CE devastated the date palm groves along with everything else. Trees were cut, irrigation systems destroyed, and populations displaced. Over the following centuries, the remaining groves declined through neglect, warfare, and changing land use. By the medieval period, the famed Judean date palm was effectively extinct, replaced in the regional economy by varieties imported from Iraq and North Africa.

## Seeds from Masada

In the 1960s, archaeologist Yigael Yadin's excavation of Masada, the mountaintop fortress where Jewish rebels made their last stand against Rome in 73 CE, uncovered a cache of date seeds preserved in the arid climate. The seeds sat in storage for decades, considered curiosities rather than viable biological material.

In 2005, Dr. Sarah Sallon of the Louis L. Borick Natural Medicine Research Center and Dr. Elaine Solowey of the Arava Institute for Environmental Studies planted several of these seeds, not expecting germination. One sprouted. They named it Methuselah, after the longest-lived figure in the Hebrew Bible. Radiocarbon dating confirmed the seed was approximately 2,000 years old, making it the oldest known seed to successfully germinate at that time.

## Hannah and Her Fruit

Methuselah was male and could not produce fruit alone. Subsequent germinations from Masada and other Judean Desert archaeological sites yielded female plants. One, named Hannah, was cross-pollinated and in 2021 produced over 800 dates. Researchers who tasted them described the fruit as having a distinctive flavor unlike modern commercial varieties: drier, less cloying, with a subtle honey-like quality.

Genetic analysis revealed that the ancient Judean palms were genetically distinct from all modern cultivated date varieties, representing a lost lineage. The resurrected trees are not identical to what Pliny praised, they are the offspring of seeds that survived two millennia in a cave, but they are the closest thing to a genuine resurrection that botany has achieved.

## What Resurrection Means

The Judean date palm story is unique in the archive of lost things. Most entries here document permanent loss. This one documents something rarer: a partial return from extinction, made possible by the extraordinary preservative power of the Dead Sea climate and the patience of scientists willing to plant seeds everyone assumed were dead.`,
  quickFacts: {
    'Historical Range': 'Jordan Valley, Sea of Galilee to Dead Sea',
    'Famous Praise': 'Pliny the Elder, Natural History (77 CE)',
    'Cause of Loss': 'Roman destruction of Judea (66-135 CE)',
    'Seed Age': '~2,000 years (radiocarbon dated)',
    'Germination': 'January 2005, Arava Institute',
    'First Fruit': '2021, from female plant "Hannah"',
    'Fruit Count': '800+ dates from Hannah',
    'Genetic Status': 'Distinct from all modern cultivated varieties',
  },
  connections: [
    { slug: 'cedars-of-lebanon', relationship: 'Both ancient trees of the biblical landscape systematically destroyed and nearly lost forever' },
    { slug: 'silphium', relationship: 'Both were prized plants of the ancient Mediterranean world driven to extinction, though only the date palm has been partially resurrected' },
    { slug: 'cafe-marron', relationship: 'Both species brought back from the edge of total extinction through extraordinary botanical intervention' },
  ],
  sources: [
    { title: 'Natural History', author: 'Pliny the Elder', year: 77 },
    { title: 'Germination, Genetics, and Growth of an Ancient Date Seed', author: 'Sarah Sallon et al.', year: 2008, url: 'https://doi.org/10.1126/science.1153600' },
    { title: 'Origins and Insights into the Historic Judean Date Palm', author: 'Sarah Sallon et al.', year: 2020, url: 'https://doi.org/10.1126/sciadv.aax0384' },
  ],
  relatedMedia: [
    { type: 'article', title: 'Seeds of the Past Grow New Trees', url: 'https://www.science.org/doi/10.1126/science.1153600', description: 'The original Science paper on Methuselah\'s germination' },
  ],
};
