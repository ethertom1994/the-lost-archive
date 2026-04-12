import type { Entry } from '../../types';

export const ansaultPear: Entry = {
  slug: 'ansault-pear',
  name: 'The Ansault Pear',
  tagline: 'Once called the most perfect pear ever cultivated. No living tree exists.',
  category: 'food',
  subcategory: 'Fruit Cultivars',
  lastKnownYear: '~1900',
  lastKnownLocation: 'France / New England, United States',
  coordinates: [47.39, 0.69],
  region: 'Europe',
  status: 'extinct',
  cause: 'Displacement by commercially viable but inferior varieties, loss of grafting stock',
  body: `## The Perfect Pear

Every generation has a food it considers the pinnacle of its kind — a flavor so exquisite that those who tasted it struggled to describe it without resorting to poetry. For nineteenth-century pomologists, that food was the Ansault pear.

Developed in Angers, France, in the early 1800s, the Ansault (sometimes spelled "Anso" or "Ansaut") was a chance seedling that proved to be lightning in a bottle. Its flesh was described in horticultural texts with a reverence usually reserved for fine wine: buttery, melting, with a perfume that filled the room when the fruit was sliced. The *American Pomological Society* placed it in its highest category of recommendation, an honor shared by only a handful of varieties.

## What the Experts Said

Robert Manning, one of America's foremost fruit growers, maintained in his pomological records that the Ansault was the finest pear he had ever encountered. Charles Downing, whose *The Fruits and Fruit Trees of America* served as the definitive reference for American orchardists, described its flesh as "buttery, melting, rich, perfumed" and rated it as "best" — the highest possible designation.

The pear ripened in October, a perfect autumn fruit. It was medium-sized, with a dull greenish-yellow skin flushed with russet, unremarkable in appearance. But cut one open and the experience was transformative. The juice was abundant, the texture impossibly smooth, and the flavor carried notes that tasters compared to honey and roses.

## Why It Disappeared

The Ansault's downfall was not disease or blight but something more insidious: the economics of commercial agriculture. The tree was notoriously difficult to grow. It required specific rootstock, was slow to bear fruit, and produced modest yields even in good years. The fruit itself, while magnificent in flavor, had a short shelf life and bruised easily — qualities that made it worthless for the emerging commercial fruit trade of the late nineteenth century.

As American agriculture industrialized, orchardists replaced their Ansault trees with Bartletts and Boscs — varieties that shipped well, looked pretty on store shelves, and bore fruit reliably even if the flavor was pedestrian by comparison. One by one, the old Ansault trees died or were cut down, and because the variety could only be propagated by grafting (not from seed), each lost tree was an irreplaceable genetic individual.

## The Search for Survivors

By the early twentieth century, the Ansault had vanished from commercial nursery catalogs. Occasional references appeared in pomological literature through the 1920s, suggesting that scattered trees may have survived in private collections or old orchards, but no verified living specimen has been identified since.

Modern fruit explorers — a small but dedicated community of heirloom variety hunters — have searched abandoned orchards across New England and the Loire Valley looking for surviving Ansault trees, so far without success. The variety exists now only in the effusive descriptions left behind by the people who tasted it, a ghost flavor haunting the margins of old gardening books.

## What We Lost

The extinction of the Ansault pear is a quiet tragedy, the kind that passes without headlines. No ecosystem collapsed, no species vanished from the wild. But something genuinely irreplaceable was lost — a specific combination of genes that produced a specific experience of sweetness and perfume that no other pear has replicated. In a world of ten thousand pear varieties, the one that everyone agreed was the best is the one we no longer have.`,
  quickFacts: {
    'Origin': 'Angers, France, early 1800s',
    'Type': 'Chance seedling pear cultivar',
    'Season': 'October (autumn ripening)',
    'Flavor Profile': 'Buttery, melting, honeyed, rose-perfumed',
    'APS Rating': 'Highest recommendation',
    'Propagation': 'Grafting only (not true from seed)',
    'Commercial Weakness': 'Low yield, fragile, short shelf life',
    'Last Catalog Listing': '~1920s',
  },
  connections: [
    { slug: 'gros-michel-banana', relationship: 'Both were beloved fruit varieties displaced by commercially convenient but inferior successors' },
    { slug: 'silphium', relationship: 'Both were prized culinary species that could never be successfully propagated beyond their original habitat' },
  ],
  sources: [
    { title: 'The Fruits and Fruit Trees of America', author: 'Andrew Jackson Downing & Charles Downing', year: 1869 },
    { title: 'The Pears of New York', author: 'U.P. Hedrick', year: 1921 },
    { title: 'Proceedings of the American Pomological Society', year: 1875 },
    { title: 'Lost Feast: Culinary Extinction and the Future of Food', author: 'Lenore Newman', year: 2019 },
  ],
};
