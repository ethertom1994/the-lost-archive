import type { Entry } from '../../types';

export const originalFishChips: Entry = {
  slug: 'original-fish-chips',
  name: 'The Original Fish and Chips Fish',
  tagline: 'British fish and chips relied on cod from the Grand Banks of Newfoundland. That fishery collapsed in 1992 after centuries of overfishing. The "original" no longer exists at commercial scale.',
  category: 'food',
  subcategory: 'Lost Fisheries',
  lastKnownYear: 1992,
  lastKnownLocation: 'Grand Banks, Newfoundland, Canada',
  coordinates: [44.0, -51.0],
  region: 'North Atlantic',
  status: 'functionally_extinct',
  cause: 'Industrial overfishing using factory trawlers, sonar technology, and freezer ships depleted cod stocks below recovery thresholds. The Canadian government imposed a moratorium in 1992 that still largely stands.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Bottomless Sea

For five hundred years, the Grand Banks of Newfoundland were the richest fishing grounds on Earth. When John Cabot arrived in 1497, his crew reported that cod were so thick you could almost walk across the water on their backs. European fishing fleets — Portuguese, Basque, English, French — crossed the Atlantic annually to harvest a supply that seemed inexhaustible. Cod was salted, dried, and shipped back to feed Europe. It sustained navies, fed Catholic Friday-fish-days across the continent, and helped build the economies of maritime nations.

British fish and chips, which became a working-class staple in the mid-19th century, ran on this supply. The original fish shops used cod or skate, battered and fried alongside chipped potatoes. The cod came overwhelmingly from the North Atlantic — the Grand Banks, the North Sea, the waters around Iceland. It was cheap because it was abundant, and it was abundant because the ocean seemed to have no bottom.

## The Factory Ships

The industrialization of fishing in the 1950s and 1960s changed the equation. Factory trawlers — floating processing plants that could catch, clean, freeze, and store fish without returning to port — began operating on the Grand Banks. They used sonar to locate schools, bottom trawls that scraped the seafloor clean, and nets with openings large enough to swallow a 747. They caught everything.

Catches peaked in the late 1960s at around 800,000 tonnes per year. By the 1980s, despite increasingly sophisticated technology, catches were plummeting. The fish weren't there anymore. Scientists warned that stocks were collapsing. The fishing industry insisted the scientists were wrong. The Canadian government, caught between economic pressure and ecological reality, delayed action for years.

## The Moratorium

On July 2, 1992, Canadian Fisheries Minister John Crosbie announced a moratorium on cod fishing on the Grand Banks. It was supposed to last two years. Over thirty years later, cod stocks have not recovered sufficiently for the moratorium to be fully lifted. An estimated 40,000 people lost their jobs. Entire communities in Newfoundland and Labrador were devastated.

The fish and chips shops didn't close — they adapted. Haddock, pollock, hake, and imported Pacific cod replaced Grand Banks Atlantic cod. The dish survives, but the specific fish it was built on — wild North Atlantic cod from the richest fishing ground in history — is no longer available at the scale that made it a cheap, everyday food.`,
  quickFacts: {
    'Species': 'Atlantic Cod (Gadus morhua)',
    'Peak Catch': '~800,000 tonnes/year (late 1960s)',
    'Moratorium Declared': 'July 2, 1992',
    'Jobs Lost': '~40,000 in Newfoundland',
    'Stock Recovery': 'Still incomplete as of 2024',
    'Original Chip Shop Fish': 'Cod or skate',
    'Modern Substitutes': 'Haddock, pollock, hake, Pacific cod',
    'Fish & Chips Origin': 'Mid-1800s, northern England',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both represent the collapse of a seemingly inexhaustible natural resource through industrial-scale extraction' },
    { slug: 'passenger-pigeon-pie', relationship: 'Both foods that relied on a resource so abundant it seemed permanent — until it wasn\'t' },
    { slug: 'gros-michel-banana', relationship: 'Both staple foods forced to switch to substitutes when the original became unavailable' },
  ],
  sources: [
    { title: 'Cod: A Biography of the Fish That Changed the World', author: 'Mark Kurlansky', year: 1997 },
    { title: 'The Unnatural History of the Sea', author: 'Callum Roberts', year: 2007 },
    { title: 'Northern Cod: A History of the Newfoundland Fishery', author: 'W.H. Lear', year: 1998 },
    { title: 'Collapse of the Northern Cod Stock', author: 'Ransom A. Myers et al.', year: 1997 },
  ],
};
