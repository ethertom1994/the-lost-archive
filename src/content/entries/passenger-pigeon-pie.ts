import type { Entry } from '../../types';

export const passengerPigeonPie: Entry = {
  slug: 'passenger-pigeon-pie',
  name: 'Passenger Pigeon Pie',
  tagline: 'We have the recipes. We have the cookbooks. We can read exactly how to prepare it. We just can\'t make it. The main ingredient is extinct.',
  category: 'food',
  subcategory: 'Extinct Cuisines',
  lastKnownYear: 1900,
  lastKnownLocation: 'Eastern United States',
  coordinates: [40.71, -74.01],
  region: 'North America',
  status: 'extinct',
  cause: 'Extinction of the passenger pigeon through industrialized hunting eliminated the primary ingredient permanently',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Cheaper Than Bread

In the 1830s, a passenger pigeon cost one to two cents at market. A dozen could be had for a dime. They were the cheapest animal protein in North America, more affordable than beef, pork, chicken, or fish. For urban workers in New York, Boston, and Philadelphia, pigeon was dinner. Not a treat, not a Sunday roast. Dinner, Monday through Friday.

The reason was simple mathematics: three to five billion passenger pigeons darkened American skies. Their flocks were so vast that witnesses described them blotting out the sun for hours. When a resource is that abundant, a food culture builds itself around it. And that's exactly what happened.

## The Recipes

Mary Randolph's *The Virginia Housewife* (1824) gives the clearest picture of how central pigeon was to the American kitchen. Her pigeon pie called for lining a dish with pastry, layering in pigeon breasts with butter, salt, pepper, and a dusting of flour, adding a gravy of the cooking juices, then sealing it under a top crust. Simple, practical, designed to feed a family cheaply.

But pie was just the beginning. Cookbooks of the era included pigeon roasted on a spit, pigeon stewed with onions and herbs, pigeon pickled in vinegar and spices for preservation, pigeon potted in butter and sealed in crocks. Eliza Leslie's *Directions for Cookery* (1837) devoted several pages to pigeon preparations. Fannie Farmer's early editions included them. The bird appeared in virtually every comprehensive American cookbook published before 1880.

The flavor was described as dark, rich, and slightly gamy, closer to squab than to chicken. The breast meat was tender and lean. Young birds, called squabs, were prized for their delicacy.

## The Pigeoniers

An entire profession existed to supply this demand. Professional pigeon hunters, called pigeoniers or pigeon netters, followed the vast flocks across the continent. They used massive nets that could capture thousands of birds in a single drop. They baited traps with grain. They knocked nesting birds from trees with long poles.

The scale was industrial. A single hunter might ship 20,000 birds in a week. The telegraph allowed hunters to coordinate, tracking flocks and nesting colonies in real time. Railroads provided the logistics, moving barrels of iced birds from Michigan and Wisconsin to the markets of the East Coast within days.

At the great Petoskey nesting of 1878, an estimated 136 million birds gathered across forty square miles of Michigan forest. Hunters descended from across the country. Over five months, they killed and shipped millions. The birds sold in New York for two cents each, underselling every other protein at market.

## The Market Collapses

By the 1880s, the flocks were visibly shrinking. Prices rose from two cents to five, then ten. Cookbooks from the 1890s began omitting pigeon recipes or noting that "wild pigeons are now scarce." By 1900, you could not buy a passenger pigeon at any price. The last wild bird was shot in Ohio that year.

The transition happened within a single generation. A woman born in 1850 would have eaten pigeon pie as a child, watched it become a luxury in her thirties, and found it impossible by her fiftieth birthday. An entire protein source, an entire cuisine, vanished in the span of one lifetime.

## The Cookbooks Remain

The cruelest detail is how perfectly preserved the knowledge is. We have dozens of recipes, written in precise measurements, with cooking times and temperatures. We know exactly how to make passenger pigeon pie. The pastry, the seasoning, the gravy, the technique. Every step is documented.

We just can't do it. The ingredient went extinct on September 1, 1914, when the last captive passenger pigeon died. The recipes survive as culinary ghosts, instructions for preparing a flavor that no human will ever taste again. They sit in old cookbooks like sheet music for an instrument that no longer exists.`,
  quickFacts: {
    'Dish Type': 'Savory pie, roasted, stewed, potted',
    'Peak Availability': '1800s, sold for 1-2 cents per bird at market',
    'Key Cookbook': 'The Virginia Housewife, Mary Randolph (1824)',
    'Market Scale': 'Millions shipped by rail weekly to NYC, Boston, Philadelphia',
    'Last Commercial Harvest': '~1890s',
    'Why It\'s Gone': 'The main ingredient went extinct in 1914',
  },
  connections: [
    { slug: 'stellers-sea-cow', relationship: 'Both species were hunted as bulk food sources, valued for sheer volume of cheap protein, until the supply collapsed' },
    { slug: 'gros-michel-banana', relationship: 'Both were so abundant they seemed inexhaustible, both vanished within a single generation' },
    { slug: 'taliaferro-apple', relationship: 'Both represent foods we have complete documentation for but cannot recreate because the biological source is gone' },
  ],
  sources: [
    { title: 'A Feathered River Across the Sky: The Passenger Pigeon\'s Flight to Extinction', author: 'Joel Greenberg', year: 2014 },
    { title: 'The Virginia Housewife', author: 'Mary Randolph', year: 1824 },
    { title: 'Directions for Cookery, in its Various Branches', author: 'Eliza Leslie', year: 1837 },
    { title: 'The Passenger Pigeon', author: 'Errol Fuller', year: 2014 },
    { title: 'Ornithological Biography', author: 'John James Audubon', year: 1831 },
  ],
};
