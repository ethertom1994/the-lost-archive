import type { Entry } from '../../types';

export const americanChestnut: Entry = {
  slug: 'american-chestnut',
  name: 'American Chestnut',
  tagline: 'Four billion trees. One quarter of the eastern forest. Gone in fifty years. The nut that fed Appalachia is a ghost.',
  category: 'food',
  subcategory: 'Lost Staple Foods',
  lastKnownYear: '~1950',
  lastKnownLocation: 'Eastern United States (Appalachia to New England)',
  coordinates: [37.5, -79.5],
  region: 'North America',
  status: 'functionally_extinct',
  cause: 'Chestnut blight (Cryphonectria parasitica), an imported fungal pathogen first detected in 1904',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Tree That Was America

Before 1904, the American chestnut was the most important hardwood tree in eastern North America. An estimated four billion trees grew from Maine to Mississippi, comprising roughly one quarter of the forest canopy. The trees were enormous, commonly reaching 30 meters tall with trunks over 1.5 meters in diameter. They grew fast, produced rot-resistant timber, and every autumn dropped a heavy mast of sweet, starchy nuts that fed people, livestock, and wildlife alike.

For Appalachian communities, the chestnut was an economic pillar. Families gathered nuts by the bushel and sold them on street corners in eastern cities. Chestnuts were roasted, boiled, dried, and ground into flour. Hogs fattened on the mast. The timber built barns, fences, railroad ties, and houses. Tannin extracted from the bark supported a leather industry. No single tree species has ever been more economically central to an American region.

## The Blight

In 1904, a forester at the Bronx Zoo noticed orange cankers killing chestnut trees on the grounds. The culprit was Cryphonectria parasitica, a fungus accidentally imported from East Asia, likely on ornamental Japanese chestnut stock. Asian chestnuts had evolved resistance. American chestnuts had none.

The blight spread at roughly 80 kilometers per year, girdling trunks with lethal cankers that cut off the flow of nutrients. By the 1920s it had reached the southern Appalachians. By the 1950s, virtually every mature American chestnut in the wild was dead. The devastation was total and effectively unstoppable. Nothing in American forestry had prepared anyone for the loss of billions of trees within a single human lifetime.

## The Roots Survive

The American chestnut is not technically extinct. The root systems of many trees survived the blight and continue to send up sprouts that grow for a few years before the fungus finds them again and kills them back. These stump sprouts are scattered throughout Appalachian forests, small trees that rarely reach reproductive maturity before the blight recurs. They are ghosts of a canopy that once blocked the sky.

The American Chestnut Foundation has spent decades breeding blight-resistant hybrids by crossing American trees with resistant Chinese chestnuts, then backcrossing to recover American traits. More recently, genetic engineering has produced transgenic chestnuts carrying a wheat gene that neutralizes the fungal toxin. But restoring four billion trees to a forest that has spent a century filling the gaps with oaks and hickories is a task measured in generations, not years. The flavor of the original nut, sweet and mild, roasted on autumn streets, belongs to a world that moved on.`,
  quickFacts: {
    'Species': 'Castanea dentata',
    'Pre-Blight Population': '~4 billion trees',
    'Forest Coverage': '~25% of eastern US canopy',
    'Blight Detected': '1904, Bronx Zoo, New York',
    'Pathogen': 'Cryphonectria parasitica (fungus)',
    'Spread Rate': '~80 km per year',
    'Current Status': 'Functionally extinct; stump sprouts persist',
  },
  connections: [
    { slug: 'gros-michel-banana', relationship: 'Both were dominant cultivars wiped out by imported fungal pathogens, both replaced by inferior substitutes' },
    { slug: 'ansault-pear', relationship: 'Both were beloved food plants lost from cultivation, their specific flavors now beyond recovery' },
  ],
  sources: [
    { title: 'American Chestnut: The Life, Death, and Rebirth of a Perfect Tree', author: 'Susan Freinkel', year: 2007 },
    { title: 'Mighty Giants: An American Chestnut Anthology', author: 'The American Chestnut Foundation', year: 2007 },
    { title: 'The Chestnut Blight Parasite', author: 'Caroline Roper Murrill', year: 1906 },
  ],
};
