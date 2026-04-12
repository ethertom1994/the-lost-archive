import type { Entry } from '../../types';

export const passengerPigeonPie: Entry = {
  slug: 'passenger-pigeon-pie',
  name: 'Passenger Pigeon Pie',
  tagline: 'Not just a bird, but an entire cuisine. Cookbooks had dozens of pigeon recipes. Then the bird darkened its last sky.',
  category: 'food',
  subcategory: 'Extinct Cuisines',
  lastKnownYear: 1914,
  lastKnownLocation: 'Cincinnati Zoo, Ohio (last individual)',
  coordinates: [39.14, -84.51],
  region: 'North America',
  status: 'extinct',
  cause: 'Industrialized hunting, habitat destruction, and the collapse of a species that required vast flocks to survive',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Martha_last_passenger_pigeon_1912.jpg/400px-Martha_last_passenger_pigeon_1912.jpg',
  imageCaption: 'Martha, the last passenger pigeon, photographed alive at the Cincinnati Zoo',
  imageCredit: 'Enno Meyer, 1912',
  body: `## A Sky Made of Birds

In the early nineteenth century, the passenger pigeon was the most abundant bird in North America and possibly the world. Migrating flocks were described as blocking out the sun for hours, darkening the sky in columns a mile wide and hundreds of miles long. John James Audubon, witnessing a flock along the Ohio River in 1813, estimated it contained over a billion birds. The ornithologist Alexander Wilson described a flock he calculated at 2.2 billion. The total North American population may have reached five billion.

This abundance created a food culture. Passenger pigeon was not a novelty or a delicacy; it was a staple protein, as central to nineteenth-century American cooking as chicken is today. Cookbooks of the era reflected this. *The Virginia Housewife* (1824) by Mary Randolph included recipes for pigeon in multiple preparations. Pigeon pie was ubiquitous, made by filling a pastry crust with the small, tender breasts, seasoned with butter, pepper, and herbs. The birds were also roasted, stewed, pickled, and potted for preservation.

## Industrial-Scale Slaughter

The same abundance that made pigeon a staple also made it seem inexhaustible. Professional hunters, called "pigeon netters," followed the flocks, capturing thousands in single net drops. The development of the telegraph allowed hunters to coordinate, tracking the location of nesting colonies across multiple states and descending on them with devastating efficiency.

The numbers killed were staggering. A single nesting site at Petoskey, Michigan, in 1878 was estimated to contain 136 million birds spread over forty square miles. Hunters killed millions over five months. Barrels of dead pigeons were shipped by rail to cities across the East Coast, where they sold for pennies.

## The Collapse

The passenger pigeon's biology made it uniquely vulnerable. It was a colonial species that required enormous flocks for successful breeding. When the population dropped below a critical threshold, the birds could not form colonies large enough to reproduce effectively. The decline, once it began, was shockingly fast. From billions in the 1860s to thousands by the 1890s to zero in the wild by the early 1900s.

The last known wild passenger pigeon was shot in Pike County, Ohio, in 1900. A small captive flock survived at the Cincinnati Zoo. On September 1, 1914, the last passenger pigeon, a female named Martha, died in her cage. She was twenty-nine years old.

## What Vanished with Martha

When Martha died, she took with her not just a species but a food tradition. An entire category of American cooking, built on a protein source that had seemed as permanent as the sky itself, became impossible overnight. The recipes survive in old cookbooks, instructions for preparing a bird that no longer exists, culinary ghosts describing flavors no one will taste again. The passenger pigeon pie is not a historical recipe. It is an extinct one.`,
  quickFacts: {
    'Species': 'Ectopistes migratorius (Passenger Pigeon)',
    'Peak Population': 'Estimated 3-5 billion',
    'Culinary Role': 'Staple protein, not a delicacy',
    'Preparations': 'Pie, roasted, stewed, pickled, potted',
    'Last Wild Individual': 'Shot 1900, Pike County, Ohio',
    'Last Living Individual': 'Martha, died Sept. 1, 1914, Cincinnati Zoo',
    'Key Cookbook': 'The Virginia Housewife (1824)',
  },
  connections: [
    { slug: 'stellers-sea-cow', relationship: 'Both species were hunted primarily as a food source, valued for meat and fat, until none remained' },
    { slug: 'library-of-alexandria', relationship: 'Both represent cultural loss beyond the physical: an entire cuisine died with the bird, just as entire literatures died with the library' },
    { slug: 'gros-michel-banana', relationship: 'Both seemed inexhaustible until suddenly they were not' },
  ],
  sources: [
    { title: 'A Feathered River Across the Sky', author: 'Joel Greenberg', year: 2014 },
    { title: 'Ornithological Biography', author: 'John James Audubon', year: 1831 },
    { title: 'The Virginia Housewife', author: 'Mary Randolph', year: 1824 },
    { title: 'The Passenger Pigeon', author: 'Errol Fuller', year: 2014 },
  ],
};
