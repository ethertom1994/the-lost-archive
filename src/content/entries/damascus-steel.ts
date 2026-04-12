import type { Entry } from '../../types';

export const damascusSteel: Entry = {
  slug: 'damascus-steel',
  name: 'Damascus Steel',
  tagline: 'Legendary blades that could cut through European swords. The technique died when the Indian mines that supplied it ran dry.',
  category: 'technology',
  subcategory: 'Metallurgy',
  lastKnownYear: '~1750',
  lastKnownLocation: 'Middle East and South Asia',
  coordinates: [33.51, 36.29],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Depletion of specific Indian wootz steel ingots; loss of the smelting tradition that produced the raw material',
  body: `## The Blade That Made a Pattern

When Crusaders first encountered swords made from Damascus steel in the twelfth century, the accounts they sent home bordered on the mythological. The blades were said to cut through European swords, slice through rifle barrels, and sever a silk scarf dropped onto the edge. The steel displayed a distinctive watered pattern on its surface, flowing lines that looked like wood grain or flowing water, visible after polishing and etching. No European smith could reproduce either the pattern or the performance.

The name is misleading. Damascus steel was not made in Damascus. The city was a trading center where the finished blades were sold, but the steel itself originated in India, where it was known as *wootz*. Indian smiths produced small crucibles of high-carbon steel using a specific smelting process, and these ingots were then shipped to swordsmiths in Persia and the Middle East who forged and shaped them into weapons.

## The Science of Wootz

Wootz steel was a high-carbon crucible steel, produced by sealing iron ore, charcoal, and specific plant materials in a clay crucible and heating them for extended periods. The resulting ingot contained carbon concentrations of roughly 1.5 to 2 percent, far higher than typical steel, along with trace elements, particularly vanadium and tungsten, that played a critical role in the material's properties.

During the slow forging process used by Middle Eastern swordsmiths, these trace elements formed carbide nanostructures: microscopic tubes and sheets of carbon that aligned along the blade in alternating bands of hard and soft steel. This microstructure gave Damascus steel its remarkable combination of hardness and flexibility, and it created the characteristic surface pattern when the blade was etched with acid.

## Why the Supply Died

The specific combination of trace elements in wootz depended on the particular iron ore deposits in southern India from which the steel was smelted. When these mines were exhausted, or when the ore quality changed, the resulting steel no longer formed the critical carbide nanostructures during forging. Without the right raw material, even smiths who knew the techniques perfectly could not produce true Damascus steel.

By the mid-eighteenth century, the tradition was dying. European colonization disrupted Indian metalworking industries. The specific ore deposits had been depleted or abandoned. The swordsmiths of the Middle East, cut off from their raw material, could no longer produce blades with the characteristic pattern and performance. Within a generation, the living knowledge of how to work the steel faded with the last masters who had handled it.

## Modern "Damascus" Is Not Damascus

Contemporary knifemakers produce what they call Damascus steel through pattern welding: folding and forge-welding layers of different steel alloys to create decorative patterns. The results are visually striking and the knives are excellent. But pattern welding is a fundamentally different process from the crucible steel technique that produced historical Damascus blades. The nanostructures, the specific mechanical properties, and the particular raw material are all absent. Modern metallurgists have produced experimental wootz steel in laboratories using the historical techniques and similar ore compositions, with partial success. Full replication at the quality described in historical accounts remains elusive.`,
  quickFacts: {
    'Also Known As': 'Wootz steel (raw material), Bulat (Russian name)',
    'Origin of Steel': 'Southern India (crucible smelting)',
    'Forging Centers': 'Persia, Syria, Middle East',
    'Carbon Content': '1.5-2% (very high for pre-industrial steel)',
    'Critical Trace Elements': 'Vanadium, tungsten (from specific ore deposits)',
    'Distinctive Feature': 'Watered surface pattern from carbide nanostructures',
    'Lost By': '~mid-18th century',
    'Modern "Damascus"': 'Pattern-welded steel (different process entirely)',
  },
  connections: [
    { slug: 'greek-fire', relationship: 'Both were legendary military technologies whose secrets died with the civilizations that created them' },
    { slug: 'stradivarius-secret', relationship: 'Both owe their extraordinary properties to materials and methods that cannot be precisely replicated today' },
    { slug: 'fordite', relationship: 'Both owe their distinctive appearance to a layered manufacturing process that no longer exists' },
  ],
  sources: [
    { title: 'Carbon Nanotubes in an Ancient Damascus Sabre', author: 'Reibold et al.', year: 2006, url: 'https://doi.org/10.1038/444286a' },
    { title: 'The Key Role of Impurities in Ancient Damascus Steel Blades', author: 'Verhoeven et al.', year: 1998 },
    { title: 'Damascus Steel: Myth, History, Technology, Applications', author: 'Manouchehr Moshtagh Khorasani', year: 2006 },
    { title: 'Wootz Steel: An Advanced Material of the Ancient World', author: 'Sharada Srinivasan', year: 1994 },
  ],
};
