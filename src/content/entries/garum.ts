import type { Entry } from '../../types';

export const garum: Entry = {
  slug: 'garum',
  name: 'Garum',
  tagline: 'Ancient Rome\'s ketchup. A fermented fish sauce used in virtually every recipe, the best grades worth more than perfume. We can approximate it. We can\'t replicate it.',
  category: 'food',
  subcategory: 'Lost Condiments',
  lastKnownYear: 500,
  lastKnownLocation: 'Roman Empire (production centered in Pompeii, Leptis Magna, southern Spain)',
  coordinates: [40.75, 14.49],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Collapse of the Roman trade networks and infrastructure that supported large-scale production',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Sauce of Empire

Open any Roman cookbook and you will find garum. Apicius, the most famous collection of Roman recipes, mentions it in nearly every dish. Meat, fish, vegetables, eggs, even some desserts received a splash. It was the universal flavor enhancer of the Roman world, as fundamental to their cooking as soy sauce is to East Asian cuisine or as salt is to ours.

Garum was a fermented fish sauce, made by layering whole small fish (anchovies, sardines, mackerel) with salt in stone vats and leaving them to break down in the sun for weeks or months. The liquid that collected, amber and intensely savory, was strained and bottled. The best garum was clear, complexly flavored, and extraordinarily expensive.

## Grades and Prices

Like wine, garum came in grades. The finest quality, called garum sociorum, was produced in specific locations, most famously the factories of Pompeii and the coast of southern Spain. A single liter of top-grade garum could cost 500 sesterces, comparable to fine perfume. The Roman writer Pliny, who found the smell objectionable, was nonetheless fascinated by the price.

Lesser grades were affordable to ordinary Romans. The cheapest, called allec, was the residue left after the good garum was strained off, a fish paste used by the poor. Between the extremes, a range of grades served different kitchens and different budgets. Garum was not a luxury. It was a spectrum, from everyday condiment to prestige product.

## The Factories

Garum production was industrial. Archaeological excavations at Pompeii revealed entire factories with rows of stone vats, each large enough to hold hundreds of pounds of fish. The smell must have been extraordinary. Roman cities zoned garum factories to the outskirts for this reason.

Production sites dotted the entire Mediterranean coast: Spain, North Africa, the Black Sea, the Adriatic. An extensive shipping network moved garum in distinctive narrow-necked amphorae. Shards of these amphorae have been found from Britain to Egypt, evidence of a trade network as vast as any modern condiment supply chain.

## Why We Can't Go Back

Modern fish sauce, particularly the nuoc mam of Vietnam and the nam pla of Thailand, is a distant descendant of the same idea. But Roman garum was different in ways we can only partially reconstruct. The specific species of fish, the ratios, the fermentation conditions, the Mediterranean climate, the stone and clay vessels, and above all the time, weeks and months of careful aging, produced flavors that modern attempts can only approximate.

Several researchers and chefs have tried to recreate garum from ancient recipes. The results are interesting but not definitive. The fish species available in the ancient Mediterranean included varieties now rare or commercially unavailable. The bacterial cultures in the stone vats, built up over generations of continuous use, cannot be replicated from scratch. We can make fish sauce. We cannot make garum.`,
  quickFacts: {
    'Type': 'Fermented fish sauce',
    'Peak Use': 'Roman Republic and Empire, 3rd century BCE to 5th century CE',
    'Best Production Sites': 'Pompeii, southern Spain, Leptis Magna',
    'Top-Grade Price': '500 sesterces per liter (comparable to fine perfume)',
    'Key Source': 'Apicius cookbook, mentions garum in nearly every recipe',
    'Modern Relative': 'Vietnamese nuoc mam, Thai nam pla (approximate only)',
  },
  connections: [
    { slug: 'aztec-chocolate', relationship: 'Both were foundational flavors of their civilizations, central to cuisine at every level of society' },
    { slug: 'tyrian-purple', relationship: 'Both were products of marine organisms, both industrial-scale operations in the ancient Mediterranean' },
    { slug: 'silphium', relationship: 'Both were essential Roman ingredients that can no longer be produced in their original form' },
  ],
  sources: [
    { title: 'Cooking Apicius: Roman Recipes for Today', author: 'Sally Grainger', year: 2006 },
    { title: 'The Classical Cookbook', author: 'Andrew Dalby and Sally Grainger', year: 1996 },
    { title: 'Natural History (Book 31)', author: 'Pliny the Elder', year: 77 },
  ],
};
