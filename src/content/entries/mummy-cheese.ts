import type { Entry } from '../../types';

export const mummyCheese: Entry = {
  slug: 'mummy-cheese',
  name: 'Xinjiang Mummy Cheese',
  tagline: 'The oldest known cheese in the world: 3,600-year-old lumps found on the necks and chests of Bronze Age mummies in the Taklamakan Desert.',
  category: 'food',
  subcategory: 'Ancient Foods',
  lastKnownYear: -1600,
  lastKnownLocation: 'Xiaohe Cemetery, Xinjiang, China',
  coordinates: [40.20, 88.67],
  region: 'East Asia',
  status: 'extinct',
  cause: 'The specific fermentation culture and dairying tradition vanished with the Bronze Age population that made it',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Cheese on the Dead

In the early 2000s, archaeologists excavating the Xiaohe cemetery in the Taklamakan Desert of western China made a discovery that confounded expectations. Scattered across the necks and chests of remarkably well-preserved Bronze Age mummies, dating to approximately 1615 BCE, were small yellowish-white lumps. Analysis confirmed what they appeared to be: cheese. At roughly 3,600 years old, these were the oldest known samples of dairy product ever recovered.

The Xiaohe site, also called the Small River Cemetery No. 5, sits in one of the most arid environments on Earth. The Taklamakan Desert's extreme dryness, combined with the alkaline soil and the burial method, using cowhide-wrapped boat-shaped coffins sealed with epoxy-like adhesive, created conditions of exceptional preservation. The mummies themselves retained hair, skin, and clothing. The cheese survived as desiccated but chemically intact lumps.

## What the Cheese Reveals

In 2024, a team led by researchers from the Chinese Academy of Sciences published a study in the journal Cell analyzing the ancient cheese using advanced proteomic and genomic techniques. The results were striking. The cheese had been produced through kefir-like fermentation, using a combination of bacteria and yeast rather than the rennet-based methods common in Western cheesemaking traditions.

The microbial DNA extracted from the samples revealed fermentation cultures unlike any used in modern dairy production. The bacterial strains represented a lineage of dairy fermentation that appears to have no direct descendants in contemporary cheesemaking anywhere in the world. This was not simply old cheese; it was cheese made by a biological process that no longer exists.

## The People Who Made It

The Xiaohe mummies themselves are enigmatic. Genetic studies have shown they were a genetically isolated population, not closely related to any modern group, with mixed ancestral components from ancient North Eurasian and ancient East Asian populations. They lived in an oasis environment that has since been swallowed by desert, herding cattle in a landscape that can no longer support them.

The placement of cheese on the bodies suggests it held ritual or spiritual significance, perhaps as food for the afterlife or as a marker of cultural identity. The fact that a perishable food was chosen for burial goods, in a culture that clearly understood preservation, implies that cheese was not merely sustenance but something more meaningful.

## A Lost Tradition

The fermentation culture used to make the Xiaohe cheese represents a branch of human dairying knowledge that diverged thousands of years ago from the lineages that would eventually produce European cheese traditions. It is a reminder that the history of food technology is not a single narrative but a branching tree, and that entire branches can vanish, leaving no trace except what the dead carry with them into the ground.

The cheese itself cannot be recreated. The specific microbial community, shaped by thousands of years of interaction with local milk, local conditions, and local human practices, is gone. What remains are desiccated lumps in a Chinese laboratory and the knowledge that 3,600 years ago, someone placed cheese on the body of a person they loved.`,
  quickFacts: {
    'Age': '~3,600 years (circa 1615 BCE)',
    'Location': 'Xiaohe Cemetery, Taklamakan Desert, Xinjiang',
    'Type': 'Kefir-style fermented cheese (not rennet-based)',
    'Preservation': 'Extreme aridity and sealed cowhide coffins',
    'Key Finding': 'Fermentation cultures unrelated to any modern dairy tradition',
    'Analysis': 'Proteomic and genomic study published in Cell (2024)',
    'Burial Context': 'Placed on necks and chests of mummies, likely ritual significance',
  },
  connections: [
    { slug: 'falernian-wine', relationship: 'Both are ancient fermented products whose exact production methods are permanently lost' },
    { slug: 'garum', relationship: 'Both were fermented foods produced by microbial cultures that cannot be reconstructed from ancient descriptions alone' },
    { slug: 'aztec-chocolate', relationship: 'Both were foods with deep cultural and ritual significance whose original preparation methods are lost' },
  ],
  sources: [
    { title: 'Bronze Age cheese found on mummies in the Taklamakan Desert', author: 'Yimin Yang et al.', year: 2014, url: 'https://doi.org/10.1016/j.jas.2013.12.010' },
    { title: 'Proteomic and genomic analyses of Bronze Age cheese from Xinjiang', author: 'Qiaomei Fu et al.', year: 2024, url: 'https://doi.org/10.1016/j.cell.2024.08.013' },
    { title: 'The Tarim Mummies: Ancient China and the Mystery of the Earliest Peoples from the West', author: 'J.P. Mallory and Victor Mair', year: 2000 },
  ],
};
