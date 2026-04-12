import type { Entry } from '../../types';

export const bengalQuince: Entry = {
  slug: 'bengal-quince',
  name: 'Heritage Bengal Quince Cultivars',
  tagline: 'Sacred to Shiva, used in medicine for millennia. The wild species survives. The ancient cultivated forms do not.',
  category: 'food',
  subcategory: 'Heritage Fruit Cultivars',
  lastKnownYear: '~20th century',
  lastKnownLocation: 'Indian subcontinent',
  coordinates: [25.0, 82.0],
  region: 'South Asia',
  status: 'extinct',
  cause: 'Industrial agriculture replaced traditional orchards; heritage cultivars lost as commercial varieties dominated',
  body: `## The Sacred Fruit

The bael tree (*Aegle marmelos*), known as Bengal quince in English, holds a singular place in Indian culture. Its trifoliate leaves are sacred to Shiva and are essential in Hindu worship. The fruit has been used in Ayurvedic medicine for at least three thousand years, prescribed for digestive disorders, dysentery, and a range of other ailments. The *Charaka Samhita*, one of the foundational texts of Ayurvedic medicine compiled around the second century BCE, describes specific preparations using bael fruit.

What makes this a story of loss is not the bael tree itself, which still grows across India and Southeast Asia. It is the heritage cultivars, the specific varieties that temple gardens, Ayurvedic practitioners, and village orchards maintained through centuries of careful selection, that have largely vanished.

## A Thousand Orchards, Each Unique

Traditional Indian horticulture produced a diversity of bael cultivars adapted to local conditions and specific uses. Some varieties were prized for their sweet, aromatic pulp, eaten fresh. Others were valued for their medicinal potency, with higher concentrations of the compounds (marmelosin, aegelin) that give the fruit its therapeutic properties. Still others were selected for the quality of their shell, used to make containers, or for the size and symmetry of their leaves, essential for temple offerings.

This diversity was maintained by grafting and by the social structures that surrounded the trees: temple complexes that maintained orchards for ritual use, Ayurvedic practitioners who cultivated specific medicinal varieties, and village common lands where traditional trees grew.

## The Green Revolution's Shadow

India's agricultural transformation in the mid-twentieth century, the Green Revolution, focused on maximizing yield of staple crops. Traditional orchards, including those growing heritage bael varieties, were often cleared for rice paddies, wheat fields, or commercial fruit crops with better market value. Urbanization consumed the peri-urban orchards that had surrounded Indian cities for centuries.

The knowledge of which cultivar was which, maintained orally by generations of gardeners and vaidyas (Ayurvedic physicians), was not recorded in any systematic way. When the trees were cut down and the old practitioners died, the cultivar names, their specific characteristics, and the grafting knowledge needed to propagate them died too.

## What Remains

The bael tree as a species is not endangered. It grows wild across a vast range and is still cultivated commercially. But the relationship between the tree and the culture that shaped it has been severed. Modern commercial bael cultivation uses a handful of standardized varieties selected for yield and uniformity. The medicinal cultivars, the temple cultivars, the regional specialties that gave each district its own version of this ancient fruit are largely gone, replaced by a generic version of what was once a richly varied tradition.`,
  quickFacts: {
    'Scientific Name': 'Aegle marmelos',
    'Family': 'Rutaceae (citrus family)',
    'Sacred To': 'Shiva (Hinduism)',
    'Medicinal Use': '3,000+ years in Ayurveda',
    'Key Text': 'Charaka Samhita (~2nd century BCE)',
    'What Is Lost': 'Heritage cultivars, not the wild species',
    'Cause': 'Green Revolution, urbanization, loss of oral knowledge',
    'Wild Status': 'Not endangered (species level)',
  },
  connections: [
    { slug: 'ansault-pear', relationship: 'Both represent the loss of specific cultivated varieties within a species that technically survives' },
    { slug: 'aztec-chocolate', relationship: 'Both illustrate how the destruction of a cultural system erases the specific plant varieties that system maintained' },
  ],
  sources: [
    { title: 'Charaka Samhita', year: -200 },
    { title: 'Aegle marmelos: A Review of Its Phytochemistry and Pharmacological Properties', author: 'Maity et al.', year: 2009 },
    { title: 'Lost Crops of Africa: Volume III, Fruits', author: 'National Research Council', year: 2008 },
    { title: 'The Useful Plants of India', author: 'Kirtikar & Basu', year: 1918 },
  ],
};
