import type { Entry } from '../../types';

export const grosMichelBanana: Entry = {
  slug: 'gros-michel-banana',
  name: 'The Gros Michel Banana',
  tagline: 'The original banana. The reason artificial banana flavor tastes nothing like the fruit you know.',
  category: 'food',
  subcategory: 'Fruit Cultivars',
  lastKnownYear: '~1965',
  lastKnownLocation: 'Central America (commercial plantations)',
  coordinates: [14.63, -90.51],
  region: 'Central America',
  status: 'functionally_extinct',
  cause: 'Panama disease (Fusarium wilt) devastated global monoculture plantations',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Banana You've Never Tasted

If you've ever eaten a piece of banana-flavored candy and thought it tasted nothing like an actual banana, you were right — and wrong. The artificial banana flavoring developed in the early twentieth century was modeled on the Gros Michel, a variety so different from the Cavendish banana sold in stores today that they might as well be different fruits. The candy flavor isn't wrong. Your banana is.

## King of the Banana Trade

The Gros Michel (French for "Big Mike") dominated the global banana trade from the 1830s through the 1950s. It was the banana that built the United Fruit Company, carved railroads through Central American jungles, and toppled governments — the original "banana republic" fruit. Everything about it was commercially superior to what we eat today: the skin was thicker and more resistant to bruising during shipping, the fruit was larger, the flavor was richer and more complex, and crucially, each bunch could be stacked neatly for transport without damage.

The taste was what truly set it apart. Where the Cavendish is mild, sweet, and somewhat one-dimensional, the Gros Michel was described as creamy, with an intense, almost artificial-seeming sweetness and strong aromatic notes of isoamyl acetate — the compound that would later become the basis of synthetic banana flavoring. People who have tasted the few surviving Gros Michel plants in Southeast Asia describe an experience closer to banana cream pie than to a modern grocery store banana.

## Death by Monoculture

The Gros Michel's fatal vulnerability was the very thing that made it commercially successful: it was a clone. Every Gros Michel banana on earth was genetically identical, propagated from suckers and cuttings rather than seeds. This made for a perfectly uniform product — every banana the same size, same flavor, same ripening schedule — but it also meant that a pathogen capable of killing one tree could kill them all.

That pathogen arrived in the form of *Fusarium oxysporum* f. sp. *cubense*, a soil fungus that causes Panama disease. First detected in Australian plantations in the 1870s, it spread slowly but inexorably through the global banana supply. The fungus was devastating and permanent — once it infected a field, that soil could never grow Gros Michel bananas again. There was no treatment, no resistant rootstock, no way to halt its march.

By the 1950s, the disease had swept through Central America, the Caribbean, and West Africa, destroying plantation after plantation. United Fruit and its competitors spent millions trying to outrun the fungus, abandoning infected land and clearing new jungle, but the disease always caught up. The last major commercial Gros Michel shipments left Central America in the early 1960s.

## The Cavendish Compromise

The banana industry's solution was to switch to the Cavendish variety, which was resistant to the strain of Fusarium that killed the Gros Michel. The Cavendish was smaller, blander, more fragile in shipping, and required expensive ripening rooms that the Gros Michel never needed. But it survived, and survival was enough.

Today, the Cavendish faces its own existential threat: a new strain of Panama disease called Tropical Race 4 (TR4), which has been spreading from Southeast Asia since the 1990s and to which the Cavendish has no resistance. The banana industry appears to be making the same mistake twice — building a global supply chain on a genetic monoculture of a single clone.

## Still Alive, Barely

The Gros Michel is not technically extinct. Small populations survive in Southeast Asia, particularly in Thailand and Malaysia, where they are grown as a local delicacy under names like *Kluai Hom Thong*. But as a commercial variety, as the banana that the world ate for a century, the Gros Michel is gone — replaced by a fruit that bears its name but little of its character.`,
  quickFacts: {
    'Scientific Name': 'Musa acuminata (AAA Group)',
    'Trade Name': 'Gros Michel ("Big Mike")',
    'Origin': 'Southeast Asia',
    'Commercial Peak': '1830s – 1950s',
    'Killer': 'Fusarium oxysporum (Panama disease, Race 1)',
    'Replacement': 'Cavendish banana',
    'Flavor Compound': 'Isoamyl acetate (used in artificial banana flavor)',
    'Current Status': 'Surviving in small Asian plantings',
  },
  connections: [
    { slug: 'ansault-pear', relationship: 'Both were beloved fruit varieties displaced by commercially convenient but inferior successors' },
    { slug: 'silphium', relationship: 'Another case of a valued food species destroyed by overexploitation and monoculture vulnerability' },
  ],
  sources: [
    { title: 'Banana: The Fate of the Fruit That Changed the World', author: 'Dan Koeppel', year: 2008 },
    { title: 'The Panama Disease of Banana', author: 'R.H. Stover', year: 1962 },
    { title: 'Banana Cultures: Agriculture, Consumption, and Environmental Change', author: 'John Soluri', year: 2005 },
    { title: 'The Imminent Death of the Cavendish Banana', author: 'Mike Peed (The New Yorker)', year: 2011 },
  ],
};
