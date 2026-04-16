import type { Entry } from '../../types';

export const pyreneanIbex: Entry = {
  slug: 'pyrenean-ibex',
  name: 'The Pyrenean Ibex',
  tagline: 'The only species to go extinct twice. Cloned in 2003. The clone lived for seven minutes.',
  category: 'fauna',
  subcategory: 'Ungulates',
  lastKnownYear: 2000,
  lastKnownLocation: 'Ordesa National Park, Spanish Pyrenees',
  coordinates: [42.65, 0.05],
  region: 'Europe',
  status: 'extinct',
  cause: 'Centuries of hunting reduced the population beyond recovery, compounded by disease and competition',
  imageUrl: '/images/entries/pyrenean-ibex.jpg',
  imageCaption: 'Mounted specimen of the Pyrenean ibex (bucardo)',
  imageCredit: 'Gobierno de Aragon',
  keyDate: '01-06',
  keyDateLabel: 'Last Pyrenean ibex Celia died, 2000',
  body: `## Celia

Her name was Celia. She was the last Pyrenean ibex, a subspecies of Spanish ibex called the *bucardo*, and she had been tracked by researchers in Spain's Ordesa National Park for years. On January 6, 2000, a fallen tree crushed her. The subspecies, which had once numbered tens of thousands across the Pyrenees mountains, was extinct.

But Celia's death was not the end of the story. Researchers had taken tissue samples from her ear in 1999, preserving living cells in liquid nitrogen. Those cells contained the complete genetic blueprint of *Capra pyrenaica pyrenaica*. The bucardo was gone, but its DNA survived in a freezer in Zaragoza.

## Seven Minutes of Life

In 2003, a team led by José Folch at the Aragonese Center of Technologies for Livestock used Celia's preserved cells to attempt the first de-extinction. They implanted cloned embryos into 57 surrogate goats. Of those, seven became pregnant. Of those, one pregnancy reached full term. On July 30, 2003, a kid was born alive. It was a genetic copy of Celia, a Pyrenean ibex breathing air for the first time in over three years.

The kid lived for seven minutes. It died gasping, unable to breathe properly. A necropsy revealed a severe lung defect: an extra lobe had grown solid, incapable of exchanging oxygen. The first de-extinction was also the second extinction. The Pyrenean ibex became the only species in history to go extinct twice.

## The Long Decline

The bucardo had been declining for centuries. It was a large, impressive mountain goat with curving horns, and it had been hunted since at least the medieval period. By the early twentieth century, the population was in the hundreds. By the 1980s, it was in the dozens. The Spanish government established protections, but the population was already too small and too isolated to sustain itself. Disease, competition with domestic livestock, and possibly inbreeding depression all contributed to the final collapse.

Celia had been alone for years before her death. The last male bucardo had died in 1999 or early 2000, possibly before Celia herself. When the tree fell on her, she was not just the last of her subspecies but the last for whom anyone was still looking.

## The Promise and the Limit

The 2003 cloning experiment demonstrated that de-extinction was technically possible: cells from a dead animal could produce a living offspring. It also demonstrated how far the science had to go. A single cloned individual with a fatal birth defect was not a resurrected species. It was a seven-minute reminder that extinction, once it arrives, resists reversal.

The preserved cells from Celia remain in storage. Advances in cloning technology continue. But the Pyrenean ibex remains extinct, its brief resurrection the most poignant failure in the history of conservation biology.`,
  quickFacts: {
    'Scientific Name': 'Capra pyrenaica pyrenaica',
    'Common Name': 'Bucardo (Pyrenean ibex)',
    'Last Individual': 'Celia, died January 6, 2000',
    'Cause of Death': 'Crushed by a fallen tree',
    'Clone Born': 'July 30, 2003',
    'Clone Lifespan': '7 minutes',
    'Clone Cause of Death': 'Fatal lung defect',
    'Historical Range': 'French and Spanish Pyrenees',
  },
  connections: [
    { slug: 'alala-song', relationship: 'Both illustrate the paradox of species preservation: saving the body does not mean saving the life' },
    { slug: 'stellers-sea-cow', relationship: 'Both were large, once-abundant animals reduced to a single last individual through centuries of hunting' },
  ],
  sources: [
    { title: 'First birth of an animal from an extinct subspecies (Capra pyrenaica pyrenaica) by cloning', author: 'Folch et al.', year: 2009, url: 'https://doi.org/10.1016/j.theriogenology.2008.11.005' },
    { title: 'The Bucardo Is Gone: Is There Hope for De-Extinction?', author: 'Alberto Fernández-Arias', year: 2016 },
    { title: 'Rise of the Necrofauna: The Science, Ethics, and Risks of De-Extinction', author: 'Britt Wray', year: 2017 },
  ],
};
