import type { Entry } from '../../types';

export const anLushanLibraries: Entry = {
  slug: 'an-lushan-libraries',
  name: 'Tang Libraries of the An Lushan Rebellion',
  tagline: 'A general rebelled in 755 and captured the Tang capital. The emperor fled, the rebels looted the imperial collection, and the civil war that followed may have killed a seventh of humanity. The book catalogue afterwards was visibly shorter than the one before.',
  category: 'culture',
  subcategory: 'Lost Libraries',
  lastKnownYear: 763,
  lastKnownLocation: 'Chang\'an and Luoyang, Tang Empire (modern China)',
  coordinates: [34.34, 108.94],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Rebel sack of the Tang capitals 756 and subsequent eight-year civil war',
  imageUrl: undefined,
  body: `## The Empire That Had Almost Everything Written Down

By the early eighth century the Tang state was the largest, most literate, and most bureaucratised polity on earth. The imperial library system, housed mainly in the two capitals of Chang'an and Luoyang, was structured around four bibliographical divisions (classics, histories, philosophers, and literary collections) and was kept current by a corps of librarians, calligraphers, and copyists. An official bibliography compiled under Xuanzong in the 720s listed roughly 53,000 juan (scroll-volumes) held in the palace collections. Independent holdings at the Hanlin Academy, the Imperial University, and the Directorate of Education pushed the combined state total to perhaps 80,000 juan. Private libraries of high officials, many stocked from copies made in the state workshops, added more.

These holdings were not a museum. The Tang state actively used its archives: to train civil service examination candidates, to write official history, to issue calendars, to settle land disputes that sometimes went back generations, and to produce the ritual manuals that regulated court life. Copies of major works circulated in dozens or hundreds of exemplars. The Tang system was, by the standards of the ancient and medieval world, almost suspiciously robust.

## The Rebellion

In December 755 a Sogdian-Turkic general in Tang service, An Lushan, declared a rival empire from his base in Fanyang in the northeast. Within six weeks his army was at Luoyang. In July 756, Chang'an fell. Emperor Xuanzong fled to Sichuan with a small retinue, abandoning the palaces. The rebels occupied both capitals and looted them systematically. Contemporary sources describe the imperial libraries being broken into; some scrolls were burned, some were stolen, some were simply scattered. What is documented more precisely is the administrative chaos: the working archives of several ministries were destroyed, the ongoing official history compilation was suspended for years, and the currency-issuing and land-survey archives, whose continuity depended on uninterrupted access, went into disarray.

The civil war lasted eight years. When it ended in 763 the capitals had been occupied, reoccupied, and fought over repeatedly. The Tang census registered roughly 52 million people in 755 and roughly 16 million in 764. Historians now consider the rebellion to have killed many millions of people rather than 36 million, but even conservative estimates make it one of the deadliest conflicts in pre-modern history. Among the cultural losses, the imperial book catalogues after 763 show missing works, missing fascicles, and titles now known only from bibliographic references.

## What the Catalogues Say

The Song Dynasty bibliographer Ouyang Xiu, working in the eleventh century, compiled the *Xin Tang shu yiwen zhi*, an inventory of books that had existed in the Tang dynasty; he could trace more than 28,000 juan that were verifiably present before An Lushan but no longer available to him. This is not a complete count of the loss, because Ouyang Xiu was working with what survived long enough to be known to him, and further attrition happened later; but it is a floor, not a ceiling.

Specific losses include the larger part of the Tang court music repertoire (the state bureau of music held detailed notations that partly survived in Japan as gagaku but whose Chinese originals are mostly gone), most of the working annals of the pre-rebellion decades, large portions of Tang poetry and prose collections (individual poets' *bieji* known from references but now lost in whole), official commentaries on the classics prepared at the Hanlin, and substantial portions of the Daoist and Buddhist manuscript deposits at the two capitals. The surviving Tang literary canon is vast; but it is the residue, not the body. The *Quan Tang shi* anthology compiled a thousand years later in 1705 contains about 50,000 poems by around 2,200 poets, and even it preserves references to thousands more writers whose works were lost, directly or indirectly, in the wreckage the rebellion left behind.`,
  quickFacts: {
    'Duration': '755-763 CE',
    'Principal Rebel': 'An Lushan (d. 757)',
    'Pre-Rebellion Imperial Catalogue': 'c. 53,000 juan (palace only)',
    'Population Census Drop': '52 million (755) to 16 million (764)',
    'Lost Titles Traceable by Ouyang Xiu (11th c.)': 'c. 28,000 juan',
    'Surviving Tang Poetry Anthology': 'c. 50,000 poems (1705 Qing compilation)',
  },
  connections: [
    { slug: 'qin-book-burning', relationship: 'Both were catastrophic losses to the Chinese textual tradition, one deliberate and one a by-product of civil war' },
    { slug: 'house-of-wisdom', relationship: 'Both were state-sponsored imperial libraries whose holdings were partly destroyed in political collapse and partly dispersed in ways that make precise loss estimation impossible' },
    { slug: 'song-celadon', relationship: 'The Song dynasty that followed inherited the diminished Tang textual record and much of what we know of Tang culture is filtered through Song reconstructions' },
  ],
  sources: [
    { title: 'The Cambridge History of China, Volume 3: Sui and T\'ang China, 589-906 Part 1', author: 'Denis Twitchett (ed.)', year: 1979 },
    { title: 'Xin Tang shu yiwen zhi', author: 'Ouyang Xiu', year: 1060 },
    { title: 'An Lushan rebellion - Wikipedia', url: 'https://en.wikipedia.org/wiki/An_Lushan_rebellion' },
    { title: 'The An Lu-shan Rebellion and the Origins of Chronic Militarism in Late T\'ang China', author: 'Charles A. Peterson', year: 1979 },
  ],
};
