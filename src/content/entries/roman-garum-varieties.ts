import type { Entry } from '../../types';

export const romanGarumVarieties: Entry = {
  slug: 'roman-garum-varieties',
  name: 'The Varieties of Roman Fish Sauce',
  tagline: 'Not one sauce but a family. Garum, liquamen, allec, muria. Each with distinct recipes, regional terroir, and price points. All lost when the trade networks collapsed.',
  category: 'food',
  lastKnownYear: '~5th century CE',
  lastKnownLocation: 'Roman Empire (production centered in Spain, North Africa, Black Sea)',
  coordinates: [36.09, -5.77],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Collapse of Roman trade infrastructure and the specialized production facilities that supported a complex fermented fish sauce industry',
  imageUrl: undefined,
  body: `## A Spectrum, Not a Sauce

Modern accounts of Roman cuisine tend to speak of garum as a single condiment. This is misleading. The Romans produced at least four distinct categories of fermented fish product, each with different ingredients, production methods, culinary uses, and price points. What collapsed with the Roman trade networks was not one recipe but an entire taxonomy of fermented marine flavors.

Garum proper was made from the blood and viscera of select fish, primarily mackerel, fermented with salt. The finished product was a clear, dark liquid of refined flavor. Garum sociorum, produced in the coastal factories of Cartagena and Cadiz in Hispania, was the most prestigious grade, commanding prices comparable to fine perfume. Liquamen was the everyday sauce, made by dissolving whole small fish, typically anchovies, in salt over months. It served the function that soy sauce serves in East Asian cooking: a universal seasoning present in nearly every dish. The terms garum and liquamen eventually blurred, but through the 1st century CE they referred to meaningfully different products.

## The Residues and the Brine

Below these premium and everyday sauces sat two further products. Allec was the paste that remained after the liquid sauces were strained off, a thick residue of partially dissolved fish matter. It was the cheapest product of the process, used by the poor to flavor porridge and bread. Pliny described it as the dregs of garum, but it was a recognized food product with its own market. Muria was the salt brine drawn off during the early stages of fermentation, before the fish fully broke down. It was used as a preservative and seasoning in its own right.

## Regional Terroir

Each production center along the Mediterranean coast, from the factories at Baelo Claudia in southern Spain to the workshops of Leptis Magna in Libya to the Black Sea facilities, produced sauces with distinct character. The fish species available, the local salt, the climate that governed fermentation speed, and the stone or ceramic vessels used all contributed to regional variation. Amphorae from different production sites carried painted labels specifying the grade, the producer, and sometimes the vintage. This was an industry with the complexity and regional pride of modern winemaking.

When the trade networks that connected these production sites to consumers across the empire fractured in the 5th century CE, the industry did not merely decline. It fragmented beyond recovery. The specific combinations of fish species, fermentation conditions, and generational craft knowledge at each site were not transferable. They could only exist within the infrastructure that sustained them.`,
  quickFacts: {
    'Garum': 'Premium sauce from fish blood and viscera',
    'Garum Sociorum': 'Finest grade, from Cartagena/Cadiz',
    'Liquamen': 'Everyday sauce from whole small fish',
    'Allec': 'Fish paste residue, cheapest grade',
    'Muria': 'Early-stage salt brine, used as preservative',
    'Major Production Sites': 'Baelo Claudia, Pompeii, Leptis Magna, Black Sea',
    'Industry Decline': '~5th century CE with Roman trade collapse',
  },
  connections: [
    { slug: 'garum', relationship: 'The parent entry covers garum as a single condiment; this entry details the full family of distinct Roman fish sauce products' },
    { slug: 'silphium-spice', relationship: 'Both represent lost Roman flavor systems whose complexity and regional variation cannot be reconstructed from surviving descriptions' },
  ],
  sources: [
    { title: 'Garum and Liquamen, What\'s in a Name?', author: 'Sally Grainger', year: 2018, url: 'https://link.springer.com/article/10.1007/s11457-018-9211-5' },
    { title: 'Fish Sauce in the Ancient World', url: 'https://www.worldhistory.org/article/1276/fish-sauce-in-the-ancient-world/' },
    { title: 'Natural History, Book 31', author: 'Pliny the Elder', year: 77 },
  ],
};
