import type { Entry } from '../../types';

export const taliaferroApple: Entry = {
  slug: 'taliaferro-apple',
  name: 'The Taliaferro Apple',
  tagline: 'Thomas Jefferson called it "the best cider apple existing." It was lost after his death. Pomologists have searched for 200 years.',
  category: 'food',
  subcategory: 'Fruit Cultivars',
  lastKnownYear: '~1830s',
  lastKnownLocation: 'Virginia, United States',
  coordinates: [37.75, -78.45],
  region: 'North America',
  status: 'extinct',
  cause: 'Loss of grafting stock after Jefferson\'s death and the decline of his Monticello orchards',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Jefferson's Favorite

Thomas Jefferson was a meticulous observer of everything he grew. In his voluminous garden records, among the hundreds of fruit varieties he cultivated at Monticello, one apple received singular praise. The Taliaferro, which he sometimes spelled "Toliver," was, in his assessment, "the best cyder apple existing." Coming from a man who imported vines from France and corresponded with the finest horticulturists in Europe, this was not a casual judgment.

Jefferson obtained the apple from a neighbor, Major Richard Taliaferro, whose family estate was near Williamsburg, Virginia. The fruit was small, reportedly no larger than a crab apple, with pale skin. What it lacked in appearance it apparently compensated in juice: Jefferson described its cider as matching "the silky Champaign," an extraordinary comparison for an American fruit. He planted it at Monticello and recommended it to friends and fellow farmers.

## Lost with Monticello

After Jefferson's death in 1826, Monticello fell into disrepair. Crushing debts forced the sale of the property, and the orchards he had tended so carefully were neglected and eventually destroyed. The specific trees that bore Taliaferro apples died without being propagated. Because apple varieties must be maintained through grafting (seeds produce genetically distinct offspring), the death of the last grafted Taliaferro tree meant the death of the variety.

By the mid-nineteenth century, pomologists began to notice the gap. Jefferson's letters were widely published, and his praise of the Taliaferro caught the attention of apple historians. But no one could find a living tree. The variety appeared in no nursery catalogs, no orchard inventories, no collections of cider apples anywhere in Virginia or beyond.

## The Search

The search for the Taliaferro has continued, intermittently, for two centuries. In the early 2000s, Tom Burford, a Virginia pomologist and apple historian, spent years investigating old orchards in Albemarle County. He identified several candidate trees growing near sites associated with Jefferson or the Taliaferro family, but none could be conclusively confirmed as the lost variety.

The fundamental problem is documentation. Jefferson described the fruit's size and cider quality but left no detailed botanical description. No herbarium specimen exists. No painting was made. The Taliaferro apple is defined almost entirely by one man's written enthusiasm, which is not enough to identify an unknown tree with certainty. Other searchers have proposed candidates from surviving heritage orchards in Virginia, but the chain of provenance always breaks somewhere.

## A Ghost in the Orchard

The Taliaferro apple may still exist, unrecognized, in some neglected Virginia orchard. Old apple trees can live for centuries. But without a verifiable link to Jefferson's original stock, any rediscovery would remain speculative. What is certain is that the specific combination of genetics that produced the cider Jefferson compared to champagne has not been tasted, or at least not knowingly tasted, since the early nineteenth century.`,
  quickFacts: {
    'Type': 'Cider apple cultivar',
    'Origin': 'Virginia, likely 18th century',
    'Champion': 'Thomas Jefferson',
    'Fruit Size': 'Very small (crab apple-sized)',
    'Cider Quality': '"Equal to the silky Champaign" (Jefferson)',
    'Last Known Trees': 'Monticello orchards, died ~1830s',
    'Modern Searches': 'Ongoing, no confirmed rediscovery',
    'Key Challenge': 'No botanical description exists',
  },
  connections: [
    { slug: 'ansault-pear', relationship: 'Both were fruit cultivars praised as the finest of their kind, lost because grafting stock was not preserved' },
    { slug: 'gros-michel-banana', relationship: 'Both demonstrate how a prized flavor can disappear when a single genetic line fails' },
  ],
  sources: [
    { title: 'Thomas Jefferson\'s Garden Book', author: 'Thomas Jefferson, ed. Edwin Morris Betts', year: 1944 },
    { title: 'Apples of North America', author: 'Tom Burford', year: 2013 },
    { title: 'Thomas Jefferson\'s Monticello: Fruit', year: 2023, url: 'https://www.monticello.org' },
    { title: 'The Southern Fruit Garden', author: 'William N. White', year: 1868 },
  ],
};
