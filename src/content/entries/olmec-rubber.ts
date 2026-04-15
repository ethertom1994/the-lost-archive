import type { Entry } from '../../types';

export const olmecRubber: Entry = {
  slug: 'olmec-rubber',
  name: 'Olmec Rubber Vulcanization',
  tagline: 'Mesoamerican peoples engineered polymer chemistry 3,000 years before Goodyear, mixing latex with morning glory juice in deliberate ratios.',
  category: 'technology',
  subcategory: 'Materials Science',
  lastKnownYear: '~16th century',
  lastKnownLocation: 'Mesoamerica (Gulf Coast lowlands)',
  coordinates: [17.98, -94.35],
  region: 'Central America',
  status: 'extinct',
  cause: 'Spanish conquest disrupted indigenous knowledge systems; the specific botanical and procedural knowledge of rubber processing was not transmitted to colonial successors',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Three Thousand Years Early

In 1839, Charles Goodyear accidentally discovered that heating natural rubber with sulfur transformed it from a sticky, temperature-sensitive material into a durable, elastic solid. He called the process vulcanization, and it launched the modern rubber industry. What Goodyear did not know was that Mesoamerican peoples had been performing an analogous chemical process for at least three millennia before him, using entirely different chemistry and no heat.

The key insight, documented by MIT researchers Dorothy Hosler, Sandra Burkett, and Michael Tarkanian in a landmark 1999 study, was that ancient Mesoamerican rubber workers mixed the latex of the Castilla elastica tree with the juice of Ipomoea alba, a species of morning glory vine. The morning glory juice contains sulphur-containing amino acids that cross-link the polyisoprene chains in natural latex, a process chemically analogous to Goodyear's vulcanization but achieved through biological rather than industrial means.

## Deliberate Polymer Engineering

What elevates this from folk craft to engineering is the evidence that Mesoamerican rubber workers systematically varied the ratio of latex to morning glory juice to produce materials with different properties for different applications. The MIT team replicated ancient recipes and found that a roughly equal mixture of latex and morning glory juice produced maximum elasticity, ideal for the rubber balls used in the Mesoamerican ballgame. A higher proportion of latex yielded a more adhesive material, useful for attaching blades to handles or waterproofing. A three-to-one ratio of latex to vine juice produced a stiffer, more durable material suitable for sandal soles.

This is not accidental discovery. This is systematic materials science: understanding that a single raw material can be processed in multiple ways to yield products with distinct physical properties, and controlling the process to achieve specific outcomes. The Olmec, and later the Maya and Aztec, were polymer engineers.

## The Rubber People

The Olmec civilization, which flourished along the Gulf Coast of Mexico from roughly 1500 to 400 BCE, takes its name from the Nahuatl word "Olmecatl," meaning "rubber people." Rubber was central to their culture, most visibly in the ballgame, a ritual sport played with solid rubber balls across a stone court. The balls, some weighing as much as four kilograms, had to be both highly elastic and durable enough to withstand repeated high-speed impacts.

But rubber served far more than sport. Archaeological and ethnohistorical evidence documents rubber used for waterproof capes and containers, adhesives for hafting tools, medicinal applications, and ritual offerings. The Spanish conquistadors, encountering rubber for the first time, were astonished by balls that bounced higher than anything in European experience. They brought samples back to Europe as curiosities, but not the knowledge of how they were made.

## The Knowledge That Did Not Travel

Spanish colonialism disrupted the transmission of Mesoamerican rubber technology in the same way it disrupted so much indigenous knowledge: by destroying the social structures that carried it. The specific botanical knowledge, which morning glory species to use, which latex trees produced the best sap, what ratios to mix for what purpose, was held by specialists within communities that were decimated by disease, displacement, and forced labor. The rubber trees survived. The morning glory vines survived. The knowledge of how to combine them did not.

When Europeans finally developed vulcanized rubber in the nineteenth century, they did so from scratch, through years of trial and error. The Mesoamerican solution, elegant, sustainable, and proven over millennia, had been lost for three centuries.`,
  quickFacts: {
    'Earliest Evidence': '~1600 BCE (Olmec period)',
    'Key Materials': 'Castilla elastica latex + Ipomoea alba (morning glory) juice',
    'Process': 'Chemical cross-linking of polyisoprene chains via plant-derived sulfur compounds',
    'Applications': 'Balls (50/50 mix), adhesives (pure latex), sandals (3:1 ratio)',
    'Goodyear\'s Patent': '1844 (3,000+ years later)',
    'Key Study': 'Hosler, Burkett & Tarkanian, Science, 1999',
    'Name Origin': '"Olmec" = "rubber people" (Nahuatl)',
    'Lost By': 'Spanish colonial disruption of indigenous knowledge transmission',
  },
  connections: [
    { slug: 'roman-concrete', relationship: 'Both are ancient materials technologies that modern science has only recently begun to understand, each achieving results that industrial chemistry rediscovered millennia later' },
    { slug: 'wootz-steel', relationship: 'Both are sophisticated metallurgical and materials processes developed by non-Western civilizations, lost during colonial disruption, and studied by modern researchers as examples of pre-industrial engineering' },
    { slug: 'aztec-chocolate', relationship: 'Both are Mesoamerican technologies involving sophisticated processing of botanical raw materials, lost during the Spanish conquest' },
  ],
  sources: [
    { title: 'Prehistoric Polymers: Rubber Processing in Ancient Mesoamerica', author: 'Dorothy Hosler, Sandra L. Burkett & Michael J. Tarkanian', year: 1999, url: 'https://doi.org/10.1126/science.284.5422.1988' },
    { title: 'The Rubber Tree: The Ecology and Economics of Artificial Rubber', author: 'Joe Jackson', year: 2008 },
    { title: 'The Olmecs: America\'s First Civilization', author: 'Richard A. Diehl', year: 2004 },
    { title: 'The Sport of Life and Death: The Mesoamerican Ballgame', author: 'E. Michael Whittington (ed.)', year: 2001 },
  ],
};
