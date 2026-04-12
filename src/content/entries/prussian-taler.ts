import type { Entry } from '../../types';

export const prussianTaler: Entry = {
  slug: 'prussian-taler',
  name: 'The Taler',
  tagline: 'A coin so influential it gave us the word "dollar." The currency is gone. Its linguistic ghost haunts every economy on Earth.',
  category: 'culture',
  subcategory: 'Extinct Currencies',
  lastKnownYear: 1907,
  lastKnownLocation: 'German Empire (replaced by the Mark)',
  coordinates: [52.52, 13.41],
  region: 'Europe',
  status: 'extinct',
  cause: 'Replaced by the Mark following German unification; successive currency reforms eliminated it across Europe',
  body: `## The Coin That Named the World

In 1519, the Counts of Schlick in the Kingdom of Bohemia began minting large silver coins from silver mined in Joachimsthal (now J\u00e1chymov in the Czech Republic). The coins were called Joachimsthaler, soon shortened to *Thaler* or *Taler*. They were large, reliable, and made from good silver, and they quickly became the standard trade coin of the Holy Roman Empire and beyond.

The Taler's influence spread along trade routes. In the Netherlands, it became the *daalder*. In Spain's American colonies, the Spanish peso, modeled on the Taler, became known to English speakers as the "Spanish dollar." When the United States needed a name for its new currency in 1792, Alexander Hamilton chose "dollar," derived directly from the Taler via the Dutch and Spanish intermediaries. The word traveled from a Czech silver mine to every cash register on the planet.

## The Standard of Europe

For three centuries, the Taler and its derivatives were the backbone of European trade. The Prussian Taler, introduced by Frederick the Great, became the dominant currency in northern Germany. The Austrian Conventionsthaler circulated across the Habsburg domains. The Maria Theresa Thaler, first minted in 1741, became the standard trade coin of East Africa, the Arabian Peninsula, and the Indian Ocean littoral, remaining in use in some regions into the twentieth century.

The Taler's success rested on its reliability. Unlike many medieval and early modern currencies, which were frequently debased (their precious metal content reduced), the Taler maintained a relatively stable silver content. Merchants across Europe trusted it, and this trust made it the default medium of exchange for international trade.

## Replaced but Not Forgotten

German unification in 1871 brought a new national currency, the Mark, and the Taler was officially demonetized in 1907. Other Taler variants disappeared through the nineteenth and twentieth centuries as European nations modernized their monetary systems. The coin that had unified European commerce for three hundred years was replaced by national currencies that would themselves be replaced, in many cases, by the euro.

But the Taler's linguistic legacy is permanent. The word "dollar" is used today in over thirty countries, from the United States to Australia, from Singapore to Zimbabwe. The Slovenian *tolar*, in use until the euro replaced it in 2007, was a direct descendant. So is the Samoan *t\u0101l\u0101*. The Czech crown still bears the memory of the Joachimsthaler mines. Every time anyone in the world says "dollar," they are, at a linguistic remove of five centuries, naming a coin from a Bohemian mining town.

## The Ghost in the Economy

Currencies are among the most intimate artifacts of daily life. People handle them, count them, argue about them, and build their lives around them. When a currency dies, an entire vocabulary of economic life goes with it. No one haggles in Talers anymore. No one saves Talers, earns Talers, or owes Talers. But the word survives, embedded in language like a fossil in limestone, carrying the memory of a coin that no longer jingles in anyone's pocket.`,
  quickFacts: {
    'Origin': '1519, Joachimsthal (now J\u00e1chymov, Czech Republic)',
    'Full Name': 'Joachimsthaler, shortened to Thaler/Taler',
    'Metal': 'Silver',
    'Derivatives': 'Dollar (English), Daalder (Dutch), T\u0101l\u0101 (Samoan)',
    'Prussian Taler': 'Dominant in northern Germany, 18th-19th century',
    'Maria Theresa Thaler': 'Trade coin in Africa/Arabia until 20th century',
    'Demonetized': '1907 (replaced by the German Mark)',
    'Living Legacy': '"Dollar" used in 30+ countries worldwide',
  },
  connections: [
    { slug: 'silphion-coin', relationship: 'Both are historic currencies that survived as physical artifacts after the systems they represented collapsed' },
    { slug: 'tanganyika', relationship: 'Both represent political entities that dissolved but left linguistic and cultural ghosts in the world they left behind' },
  ],
  sources: [
    { title: 'The Dollar: The Story of the World\'s Most Famous Currency', author: 'John T. Hepburn', year: 1903 },
    { title: 'Money: A History', author: 'Jonathan Williams (British Museum)', year: 1997 },
    { title: 'The Taler and the Dollar', author: 'Numismatic Chronicle', year: 1965 },
    { title: 'Coins of the World: Europe', author: 'Chester L. Krause', year: 2001 },
  ],
};
