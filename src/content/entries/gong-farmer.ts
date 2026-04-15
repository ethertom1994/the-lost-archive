import type { Entry } from '../../types';

export const gongFarmer: Entry = {
  slug: 'gong-farmer',
  name: 'The Gong Farmer',
  tagline: 'Medieval workers who dug human excrement from cesspits by hand, permitted to work only between 9 PM and 5 AM, in a job so foul that one practitioner drowned in it.',
  category: 'culture',
  subcategory: 'Extinct Professions',
  lastKnownYear: '~1850s',
  lastKnownLocation: 'London, England',
  coordinates: [51.51, -0.13],
  region: 'Europe',
  status: 'extinct',
  cause: 'Construction of modern sewer systems, particularly Joseph Bazalgette\'s London sewerage network completed in the 1860s',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Necessary Men

Before municipal sewer systems, every household, tavern, monastery, and palace in medieval and early modern England relied on cesspits: brick-lined holes in the ground that collected human waste. These pits filled up. When they did, someone had to empty them. That someone was the gong farmer.

The word "gong" derived from the Old English "gang," meaning "to go," a euphemism for the privy itself. Gong farmers, also called nightmen or rakers, descended into cesspits with shovels and buckets to dig out the accumulated filth by hand. The work was physically grueling, the stench beyond description, and the health risks extreme. Cesspits could produce lethal concentrations of methane and hydrogen sulfide gas. The walls, often poorly maintained, could collapse without warning.

## The Hours of Darkness

Municipal regulations confined gong farmers to working between nine at night and five in the morning. The restriction was not for the workers' benefit but for the public's comfort. No one wanted to see or smell the work being done. The gong farmers arrived after dark with their carts, lowered themselves into the pits by lantern light, and hauled out the contents bucket by bucket. By dawn, they and their cargo had to be gone.

The waste was carted to designated laystalls, dumping grounds typically located at the edges of cities. In some periods, the "night soil" had commercial value as agricultural fertilizer, and gong farmers could sell their hauls to farmers. In others, they paid for the privilege of dumping. The economics of the trade were as unstable as the ground they dug.

## Richard the Raker

The most famous gong farmer is remembered only for how he died. In 1326, a man recorded in London coroner's reports as Richard the Raker fell through the rotted planks of his own privy into the cesspit below and drowned in the contents. The coroner's report, preserved in the City of London records, notes the cause of death with bureaucratic precision. The incident illustrates both the physical dangers of the cesspit system and the grim irony that someone whose profession was digging through human waste could be killed by it in his own home.

## A Hierarchy of Filth

Gong farmers occupied the lowest rung of medieval urban society, but they were not alone there. They existed within a broader ecosystem of waste-related occupations. Rakers swept streets. Scavengers collected household refuse. Night-soil men, a later evolution of the gong farmer, operated with carts and more organized routes. Each profession was essential to urban survival and each was stigmatized.

The gong farmers lived in designated areas, often near the laystalls where they dumped their loads. They were restricted in where they could eat and drink. They carried the smell of their work permanently, a social brand as indelible as any formal mark of caste.

## The Flush and the End

The profession survived in various forms into the nineteenth century. Joseph Bazalgette's construction of London's comprehensive sewer system in the 1850s and 1860s, spurred by the Great Stink of 1858, finally made the cesspit system obsolete. Underground pipes replaced underground pits. Gravity and water replaced men with buckets. The gong farmer vanished not because the work was too terrible but because engineering provided an alternative. For five hundred years, no alternative had existed, and so someone had to climb down into the dark.`,
  quickFacts: {
    'Also Known As': 'Nightmen, rakers, jakes-farmers',
    'Working Hours': '9 PM to 5 AM (legally restricted)',
    'Task': 'Emptying cesspits of human waste by hand',
    'Notable Death': 'Richard the Raker, drowned in cesspit, 1326',
    'Waste Destination': 'Laystalls (dumping grounds) at city edges',
    'Eliminated By': 'Bazalgette\'s London sewer system (1858-1865)',
    'Social Status': 'Lowest rung; restricted in where they could live and eat',
  },
  connections: [
    { slug: 'night-soil', relationship: 'Night-soil collection was the direct successor profession to gong farming, both involving manual removal of human waste before modern sewers' },
    { slug: 'sin-eater', relationship: 'Both were despised occupations filled by society\'s poorest, performing essential services that others refused to do' },
    { slug: 'tosher', relationship: 'Both worked underground in London\'s waste systems, gong farmers in cesspits, toshers in the sewers that replaced them' },
    { slug: 'knocker-upper', relationship: 'Both were working-class professions rendered obsolete by industrial-age technology, one by sewers, the other by alarm clocks' },
  ],
  sources: [
    { title: 'The Time Traveler\'s Guide to Medieval England', author: 'Ian Mortimer', year: 2008 },
    { title: 'The Ghost Map: The Story of London\'s Most Terrifying Epidemic', author: 'Steven Johnson', year: 2006 },
    { title: 'Calendar of Coroners Rolls of the City of London, 1300-1378', author: 'Reginald R. Sharpe', year: 1913 },
    { title: 'Clean and Decent: The Fascinating History of the Bathroom and the Water Closet', author: 'Lawrence Wright', year: 1960 },
  ],
};
