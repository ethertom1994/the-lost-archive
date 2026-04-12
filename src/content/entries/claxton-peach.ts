import type { Entry } from '../../types';

export const claxtonPeach: Entry = {
  slug: 'claxton-peach',
  name: 'Claxton Seedling Peach',
  tagline: 'The finest eating peach in the American South, replaced because it bruised on the truck. Flavor lost to logistics.',
  category: 'food',
  subcategory: 'Lost Cultivars',
  lastKnownYear: 1970,
  lastKnownLocation: 'Georgia and South Carolina, United States',
  coordinates: [32.16, -81.91],
  region: 'North America',
  status: 'functionally_extinct',
  cause: 'Replaced by firmer, less flavorful varieties bred to survive mechanical harvesting and long-distance shipping',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Peach That Couldn't Travel

In the Georgia and South Carolina peach country of the early twentieth century, growers and locals agreed: the Claxton Seedling was the best eating peach you could find. A freestone variety with white-fleshed, intensely aromatic fruit, it was known for a flavor that combined sweetness with a floral complexity that other varieties couldn't match.

The Claxton had one fatal flaw. It was soft. The flesh bruised at a touch. You could pick one from a tree, carry it inside, and find a bruise where your fingers had been. This softness was inseparable from its flavor. The same cellular structure that made it melt on the tongue made it impossible to stack in a crate, load on a truck, and ship to a grocery store 300 miles away.

## The Logistics Revolution

The transformation of American agriculture in the mid-twentieth century was, in many ways, a triumph of logistics over flavor. Refrigerated trucks, mechanical harvesters, and centralized distribution systems allowed peaches grown in Georgia to appear in stores in Michigan two days later. But the system had requirements: the fruit had to survive picking machines, conveyor belts, cardboard boxes, and a multi-day journey without turning to mush.

Breeders responded by developing varieties optimized for what the industry calls "shippability." The peaches that replaced heritage varieties like the Claxton were firmer, more uniform, and redder (because consumers had been trained to associate red skin with ripeness). They were also blander. The mealy, cottony supermarket peach that most Americans now consider normal is the end product of decades of breeding for durability rather than taste.

## What Was Lost

The Claxton Seedling and dozens of similar heritage varieties survived in a few backyard trees and small orchards through the late twentieth century. Most have since died or been removed. A few specimens may persist in USDA germplasm collections or the orchards of dedicated preservationists, but the variety has effectively vanished from commerce and from the lived experience of eating.

The irony is precise: we developed a system to bring peaches to more people, and in doing so, we ensured that the peaches we brought them weren't worth eating. The Claxton Seedling couldn't survive a truck ride. So we replaced it with fruit that could survive anything except being tasted.`,
  quickFacts: {
    'Variety': 'Claxton Seedling (freestone, white-fleshed)',
    'Region': 'Georgia and South Carolina',
    'Known For': 'Exceptional flavor and floral aroma',
    'Why It Disappeared': 'Too soft for mechanical harvesting and long-distance shipping',
    'Replaced By': 'Firmer, redder, blander commercial varieties',
    'Status': 'Functionally extinct in commerce, possible specimens in germplasm banks',
  },
  connections: [
    { slug: 'ansault-pear', relationship: 'Both were fruits celebrated for extraordinary flavor and lost because they couldn\'t survive the modern supply chain' },
    { slug: 'gros-michel-banana', relationship: 'Both were replaced by inferior-tasting varieties that better served industrial agriculture' },
    { slug: 'taliaferro-apple', relationship: 'Both are American heritage fruit varieties that vanished as commercial agriculture prioritized other traits over flavor' },
  ],
  sources: [
    { title: 'The Peach: Botany, Production and Uses', author: 'Desmond Layne and Daniele Bassi', year: 2008 },
    { title: 'Heirloom Fruits and Vegetables in America', author: 'William Woys Weaver', year: 1997 },
    { title: 'The Fruit Hunters: A Story of Nature, Adventure, Commerce and Obsession', author: 'Adam Leith Gollner', year: 2008 },
  ],
};
