import type { Entry } from '../../types';

export const natchezLanguage: Entry = {
  slug: 'natchez-language',
  name: 'Natchez Language',
  tagline: 'The Natchez once ruled a Mississippi-valley chiefdom of sun-priests and mound temples. After a failed revolt against French Louisiana in 1729, their survivors were dispersed or sold into Caribbean slavery. By 1957, with the death of Nancy Raven, the last fluent speaker was gone.',
  category: 'language',
  subcategory: 'Indigenous Languages',
  lastKnownYear: 1729,
  lastKnownLocation: 'Natchez Bluffs, Lower Mississippi Valley',
  coordinates: [31.56, -91.40],
  region: 'North America',
  status: 'extinct',
  cause: 'French military reprisals after the 1729 Natchez revolt killed much of the nation and sold hundreds into Caribbean slavery; the remnant was absorbed into Creek, Cherokee, and Chickasaw communities, and English replaced Natchez across three centuries',
  body: `## Sun Kings on the Mississippi

When the first French colonists reached the Natchez Bluffs around 1682, they found a society that seemed older than any of their other North American encounters. The Natchez were ruled by the Great Sun, a hereditary sovereign whose body was carried on a litter, whose mound-top temple held a perpetual fire tended by priests, and whose wives and retainers were expected to follow him into death. Below the Great Sun was a hierarchy of Suns, Nobles, Honoured People, and commoners known as Stinkards, with complex marriage rules that forced each rank to marry down, producing a distinctive matrilineal system of rank inheritance.

The French missionary Mathurin le Petit and the military officer Antoine-Simon Le Page du Pratz both lived among the Natchez in the 1720s and left detailed descriptions. Le Page du Pratz in particular produced one of the most extensive ethnographic accounts of any Mississippian-era people, documenting temple architecture, funerary practice, agricultural calendar, war rituals, and, in fragments, the language itself.

## The Revolt of 1729

On 28 November 1729, the Natchez attacked the French settlement of Fort Rosalie, killing some 230 colonists in a single morning. The grievance was the French commandant's demand for a village site over a sacred Natchez burial ground. The retaliation was catastrophic. French military expeditions, reinforced by Choctaw allies, pursued the Natchez over the following two years, killing hundreds, burning the mound villages, and capturing survivors. In 1731 a mass shipment of perhaps 400 Natchez captives was sent from New Orleans to the French colony of Saint-Domingue to be sold as slaves. They never came back.

The remnant of the Natchez scattered. Some took refuge among the Chickasaw, others among the Creek, still others eventually ending up with the Cherokee. After removal west of the Mississippi in the 1830s, the surviving Natchez families settled in Indian Territory, in what is now Oklahoma, intermarrying into the larger nations that had given them shelter.

## The Last Fluent Speakers

Because the Natchez survived as a community within other nations, their language continued to be spoken long after the 1729 catastrophe, though with ever fewer speakers. In the 1930s the linguist Mary R. Haas worked with two elderly fluent speakers in Oklahoma, Watt Sam and Nancy Raven, recording wax cylinders and notebooks full of grammar, vocabulary, and traditional narrative.

Watt Sam died in 1944. Nancy Raven, born in the early 1870s and a citizen of the Cherokee Nation, was the last person to speak Natchez from childhood. She died in 1957. With her death, an isolate language — one whose genealogical relationship to any other language on Earth has never been conclusively established — passed out of living use.

## What Was Lost With the Speech

Natchez is not only grammatically distinctive but is also the only surviving descendant of an entire language family — in classification terms, an isolate. Every feature of its phonology and grammar that was not captured in Haas's notebooks or in the earlier French colonial vocabularies was lost with Nancy Raven. So were the oral narratives she knew: cosmological accounts of the Sun lineage, the temple fire, the stories behind the rank system that Le Page du Pratz only partly described.

The Natchez Nation today, based in Oklahoma, sustains cultural programmes and a small revitalisation effort working from Haas's materials. But spoken Natchez, as a living mother tongue with native intuitions, died in 1957. The chiefdom that once commanded the Lower Mississippi survives only as transliterated notes in linguists' archives.`,
  quickFacts: {
    'Family': 'Language isolate (possibly linked to Muskogean)',
    'Homeland': 'Natchez Bluffs, Lower Mississippi Valley',
    'Estimated Speakers at Contact': 'Several thousand (pre-1729)',
    'Catastrophic Event': 'Natchez Revolt, 1729',
    'Last Fluent Speaker': 'Nancy Raven (d. 1957)',
    'Primary Documentation': 'Le Page du Pratz (1758); Mary R. Haas fieldnotes (1930s–40s)',
  },
  connections: [
    { slug: 'beothuk', relationship: 'Both indigenous North American nations destroyed by colonial warfare and disease, leaving only fragmentary linguistic records' },
    { slug: 'ayapaneco', relationship: 'Both are cases where an indigenous language survived centuries of colonial pressure only to die in the 20th century with the last speakers' },
    { slug: 'tasmanian-languages', relationship: 'Both represent language families or isolates that were wiped out by colonial violence within a few generations of sustained contact' },
    { slug: 'eyak-language', relationship: 'Both languages lived on in a handful of elderly speakers into the era of modern linguistics, then fell silent within living memory' },
  ],
  sources: [
    { title: 'Histoire de la Louisiane', author: 'Antoine-Simon Le Page du Pratz', year: 1758 },
    { title: 'Tunica-Biloxi and Natchez in the Mississippi Valley', author: 'Mary R. Haas', year: 1939 },
    { title: 'Natchez language (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Natchez_language' },
    { title: 'Natchez Language – Sam Noble Museum', url: 'https://samnoblemuseum.ou.edu/collections-and-research/native-american-languages/map-of-oklahoma-languages/natchez-language/' },
  ],
};
