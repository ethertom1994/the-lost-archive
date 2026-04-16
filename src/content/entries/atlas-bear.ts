import type { Entry } from '../../types';

export const atlasBear: Entry = {
  slug: 'atlas-bear',
  name: 'The Atlas Bear',
  tagline: 'The only bear native to Africa in modern times. Romans threw thousands into the arena. The last survivors hid in the mountains until the 1870s.',
  category: 'fauna',
  subcategory: 'Bears',
  lastKnownYear: 1870,
  lastKnownLocation: 'Atlas Mountains, Morocco',
  coordinates: [33.0, -1.0],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Roman arena captures, hunting, habitat loss, firearms',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Africa's Only Bear

The Atlas bear (*Ursus arctos crowtheri*) was a subspecies of brown bear native to the Atlas Mountains and surrounding regions of North Africa, ranging across what is now Morocco, Algeria, Tunisia, and western Libya. It was the only bear species to inhabit the African continent in recorded history, a relic population left behind when the Sahara dried and severed the connection between North African and European wildlife thousands of years ago.

Descriptions from historical sources suggest it was relatively small for a brown bear, stocky and dark-furred, with a shorter muzzle than its European relatives. Roman writers mentioned its brownish-black coat. The Atlas bear inhabited montane forests of cedar and oak in the Atlas range, along with scrublands and the edges of the Saharan steppe, feeding on roots, acorns, insects, and the occasional livestock animal that brought it into conflict with herders.

## The Roman Arena

The Atlas bear's first encounter with systematic destruction came through Rome. The Roman Empire had an insatiable appetite for exotic animals to use in arena spectacles, the venationes, where wild beasts were pitted against gladiators or each other for public entertainment. North Africa was a primary source. Bears, lions, leopards, and elephants were captured in enormous numbers and shipped across the Mediterranean.

Ancient sources record staggering figures: hundreds of bears killed in single festivals. The poet Martial described bears from Numidia fighting in the Colosseum. This sustained drain over centuries significantly reduced the wild population. After the fall of Rome, the bears persisted but in diminished numbers, confined increasingly to the most remote reaches of the Atlas Mountains.

## The Final Centuries

Through the medieval and early modern periods, the Atlas bear continued to decline as human populations grew and firearms became widespread. Moroccan and Algerian hunters killed bears to protect livestock and for sport. Deforestation reduced the montane habitat. By the eighteenth century, the bear was rare enough to be considered remarkable when encountered.

The last reliable reports of Atlas bears date to the 1840s through 1870s in the Tetouan region of Morocco and in the mountainous Rif and Atlas areas. The final individual is often cited as having been killed by hunters in the 1870s, though the exact date and circumstances are uncertain. By the time zoologists took serious interest, there was nothing left to study but bones, a few skins, and the accounts of Roman poets.`,
  quickFacts: {
    'Scientific Name': 'Ursus arctos crowtheri',
    'Range': 'Atlas Mountains, Morocco to Libya',
    'Distinction': 'Only bear native to Africa in modern history',
    'Roman Use': 'Captured for arena spectacles (venationes)',
    'Last Reports': '1840s-1870s',
    'Size': 'Relatively small for a brown bear',
    'Habitat': 'Montane cedar and oak forests',
  },
  connections: [
    { slug: 'bubal-hartebeest', relationship: 'Both were North African megafauna that survived millennia of coexistence with humans but not the modern era' },
    { slug: 'colossus-of-rhodes', relationship: 'Both are linked to the ancient Mediterranean world. Romans captured Atlas bears for the same arenas that celebrated imperial power' },
  ],
  sources: [
    { title: 'The Atlas Bear: Africa\'s Only Native Bear', author: 'Mikhail Sablin and Gennady Baryshnikov', year: 2009 },
    { title: 'The Beast in the Garden: A History of the Bear in Europe', author: 'Michel Pastoureau', year: 2011 },
    { title: 'IUCN Red List: Ursus arctos', url: 'https://www.iucnredlist.org/species/41688/160770605', year: 2017 },
  ],
};
