import type { Entry } from '../../types';

export const doronaGrape: Entry = {
  slug: 'dorona-grape',
  name: 'Dorona di Venezia',
  tagline: 'The golden grape of the Venetian Doges, believed drowned by the 1966 flood. Eighty-eight surviving vines were found in 2002, and now each bottle wears gold leaf from Murano.',
  category: 'food',
  subcategory: 'Heritage Grapes',
  lastKnownYear: 1966,
  lastKnownLocation: 'Venetian Lagoon, Italy',
  coordinates: [45.49, 12.42],
  region: 'Europe',
  status: 'extinct_in_wild',
  cause: 'Saltwater inundation from the 1966 Venice flood destroyed nearly all surviving vines',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Gold on the Lagoon

For centuries, the islands of the Venetian lagoon grew a grape variety unlike anything found on the Italian mainland. The Dorona, whose name derives from the Venetian dialect word for "golden," produced thick-skinned berries of deep amber that thrived in the saline, sandy soils of the lagoon islands. It was the grape of the Venetian Republic, grown on Torcello, Mazzorbo, Sant'Erasmo, and the smaller islands that dotted the shallow waters north of Venice proper.

The wine it produced was prized by the Doges and the merchant aristocracy. Venetian trade records reference lagoon wines shipped alongside silk and spice. The Dorona's thick skin, an adaptation to the salt-laden winds of the lagoon, gave the wine an unusual structure: golden in color, with a faint mineral salinity and the capacity to age in ways that most white wines cannot.

## The Flood

On November 4, 1966, an exceptional acqua alta flooded Venice to a depth not recorded since 1872. The saltwater surge did not merely fill piazzas and ground floors. It inundated the agricultural islands of the lagoon, soaking the root systems of vines that had endured centuries of incremental flooding. The salt concentration in the soil after the floodwaters receded was devastating. Across the lagoon islands, ancient vineyards died.

The Dorona was believed to have perished entirely. It disappeared from viticultural registries. No nurseries carried it. The grape joined a long list of Venetian things assumed lost to the waters.

## Eighty-Eight Vines

In 2002, businessman and wine enthusiast Gianluca Bisol began searching the lagoon islands for surviving Dorona vines. On the island of Mazzorbo, in an overgrown plot tended by an elderly islander, he found them: eighty-eight ancient vines, gnarled and neglected but alive. They had survived the 1966 flood through a combination of slightly higher elevation, established root depth, and sheer biological tenacity.

Bisol acquired the site and, working with the Venissa estate, began propagating the survivors. The vineyard on Mazzorbo was restored and enclosed within the medieval walls of a former convent. New vines were grafted from the originals and planted in the sandy lagoon soil.

## Venissa

The wine produced from these vines is bottled under the Venissa label. Production is minuscule: roughly 3,500 bottles per year from the small walled vineyard. Each bottle is hand-labeled with a thin sheet of gold leaf produced on the neighboring island of Murano by the same artisans who make Venetian glass. The wine itself is deep gold, almost amber, with a pronounced salinity and a richness that reflects both the grape's character and the unique terroir of a vineyard sitting at sea level in a saltwater lagoon.

## What Nearly Vanished

The Dorona di Venezia is a rare case in which a lost variety was found just in time. Had Bisol's search come a decade later, the elderly caretaker and the vines might both have been gone. The eighty-eight survivors on Mazzorbo represent the entire genetic foundation of a grape variety that once covered the Venetian lagoon. Every bottle of Venissa is, in a sense, a message from a drowned vineyard.`,
  quickFacts: {
    'Origin': 'Venetian lagoon islands, centuries old',
    'Name Meaning': '"Golden" in Venetian dialect',
    'Near-Extinction Event': '1966 Venice flood',
    'Survivors Found': '88 vines on Mazzorbo island (2002)',
    'Current Production': '~3,500 bottles/year (Venissa estate)',
    'Distinctive Feature': 'Gold leaf label from Murano glassmakers',
    'Wine Character': 'Deep gold, saline minerality, age-worthy white',
  },
  connections: [
    { slug: 'malagousia-grape', relationship: 'Both were grape varieties rescued from extinction by a single discoverer who found the last surviving vines' },
    { slug: 'falernian-wine', relationship: 'Both were wines of prestige civilizations: the Doges and the Caesars, respectively' },
    { slug: 'ansault-pear', relationship: 'Both were prized cultivars nearly lost to agricultural economics, though the Dorona was rescued in time' },
  ],
  sources: [
    { title: 'Venissa Wine Journal', url: 'https://www.venissa.it', year: 2015 },
    { title: 'The Oxford Companion to Wine', author: 'Jancis Robinson and Julia Harding', year: 2015 },
    { title: 'Italian Wine Unplugged', author: 'Stevie Kim', year: 2017 },
  ],
};
