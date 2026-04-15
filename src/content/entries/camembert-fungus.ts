import type { Entry } from '../../types';

export const camembertFungus: Entry = {
  slug: 'camembert-fungus',
  name: 'The Camembert Fungus',
  tagline: 'Every wheel of industrial Camembert relies on a single albino clone that has forgotten how to reproduce. The cheese itself is going extinct.',
  category: 'food',
  subcategory: 'Fermentation Cultures',
  lastKnownYear: 'ongoing',
  lastKnownLocation: 'France (global industrial use)',
  coordinates: [48.88, 0.17],
  region: 'Europe',
  status: 'functionally_extinct',
  cause: 'Monoculture selection of a single albino mutant strain that has lost the ability to reproduce sexually',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The White Lie

The snowy white rind of a Camembert wheel is so familiar that most people assume it is simply what cheese mold looks like. It is not. Wild Penicillium molds come in a riot of colors: grey-green, blue, olive, dusty rose. The pure white of commercial Camembert is the product of a single mutation in a single organism, selected and propagated so aggressively that it has crowded out virtually all genetic diversity in the species used to make soft-ripened cheese.

The story begins in the early twentieth century. Cheesemakers had long inoculated their Camembert with Penicillium camemberti, a domesticated relative of the common blue-green mold Penicillium commune. The natural color of P. camemberti ranged from off-white to grey-green, and traditional Camembert had a mottled, irregular rind that would horrify modern supermarket shoppers. Then someone found a mutant: a pure white strain that produced a perfectly uniform, aesthetically flawless rind. The cheese industry adopted it universally.

## A Clone Without a Future

The problem, identified by researchers at France's CNRS and Paris-Saclay University, is that this single white strain has been propagated exclusively through asexual reproduction for over a century. It is cloned, never bred. Over generations of cloning, it has accumulated mutations that have degraded its ability to produce spores, the fungal equivalent of seeds. Without spores, the fungus cannot reproduce sexually, cannot exchange genetic material, and cannot adapt to changing conditions.

In 2024, CNRS researchers published findings warning that Penicillium camemberti is, in their words, in danger of extinction. The fungus that makes Camembert is itself a threatened species, though it exists in refrigerators and cheese caves worldwide. The problem is not scarcity but genetic collapse. Every culture is essentially the same organism, and that organism is slowly losing the biological machinery it needs to survive.

## The Deeper Problem

The Camembert fungus is a case study in what happens when industrial agriculture optimizes for a single trait, in this case, visual uniformity, at the expense of everything else. The same pattern has played out with the Gros Michel banana, the Cornish cauliflower, and countless crop varieties. Genetic monoculture produces reliable, attractive products right up until the moment it produces catastrophic failure.

Traditional French cheesemakers who still use diverse, wild-type Penicillium strains produce Camembert with grey, blue, and green mottled rinds. These cheeses are considered more complex in flavor by many fromagers but are rejected by industrial buyers and most consumers, who have been trained to expect pure white.

## What Happens Next

If the industrial strain of P. camemberti continues its genetic decline, the cheese industry will face a choice: engineer a new strain through genetic modification, return to the diverse wild-type molds that traditional cheesemakers never abandoned, or accept that the Camembert we know is a product with an expiration date. The irony is acute. Cheese is itself a preservation technology, a way of making milk last. Now the organism that makes the cheese cannot make itself last.`,
  quickFacts: {
    'Species': 'Penicillium camemberti (domesticated variant)',
    'Issue': 'Single albino clone losing ability to produce spores',
    'Reproduction': 'Asexual cloning only; sexual reproduction lost',
    'Warning': 'CNRS declared species "on the verge of extinction" (2024)',
    'Industry Scale': 'Used in virtually all commercial Camembert worldwide',
    'Wild Alternative': 'Traditional grey-green P. camemberti strains still exist',
    'Root Cause': 'Over a century of monoculture selection for white rind',
  },
  connections: [
    { slug: 'gros-michel-banana', relationship: 'Both are monocultures facing collapse because genetic diversity was sacrificed for commercial uniformity' },
    { slug: 'cornish-cauliflower', relationship: 'Both lost genetic resilience when industry selected for visual appearance over biological fitness' },
    { slug: 'okinawan-awamori', relationship: 'Both involve irreplaceable fermentation cultures shaped by centuries of human selection' },
  ],
  sources: [
    { title: 'Cheese microbiomes in a changing world', author: 'Tatiana Giraud et al.', year: 2024, url: 'https://doi.org/10.1016/j.cub.2023.12.062' },
    { title: 'Domestication and Divergence of the Fungi Used in Camembert and Blue Cheese Production', author: 'Jeanne Ropars et al.', year: 2020 },
    { title: 'Population Genomics of Domesticated Penicillium Fungi', author: 'Antoine Branca et al.', year: 2020 },
  ],
};
