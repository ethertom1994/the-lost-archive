import type { Entry } from '../../types';

export const mixtecCodices: Entry = {
  slug: 'mixtec-codices',
  name: 'Mixtec Script',
  tagline: 'An elaborate pictographic writing system used for 500 years. The Spanish burned nearly every codex. Eight pre-Columbian manuscripts survive. An entire literary tradition, incinerated.',
  category: 'culture',
  subcategory: 'Destroyed Writing Systems',
  lastKnownYear: 1521,
  lastKnownLocation: 'Oaxaca region, Mexico',
  coordinates: [17.07, -96.72],
  region: 'Central America',
  status: 'extinct',
  cause: 'Systematic destruction by Spanish missionaries who burned codices as instruments of idolatry',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Painted Books

The Mixtec people of Oaxaca, Mexico, maintained a writing system for at least five centuries before the Spanish conquest. Their books, called codices, were made from long strips of prepared deerskin or bark paper, folded like an accordion into pages. They were painted in vivid colors by specialist scribes using mineral and vegetable pigments.

Mixtec writing was pictographic and logographic: it used standardized pictures to represent people, places, dates, events, and concepts. Human figures were shown in profile with specific postures indicating actions. Mountains represented places, with glyphs identifying specific towns. A complex calendrical system tracked dates using two interlocking cycles. The writing could record genealogies spanning centuries, land boundaries, tribute payments, conquests, rituals, and myths.

This was not primitive picture-drawing. It was a fully functional writing system capable of recording detailed historical narratives, administrative records, and religious texts. The Mixtec codices represent one of the most sophisticated pre-Columbian literary traditions in the Americas.

## The Burning

When Spanish missionaries arrived in the Mixtec region in the early 1500s, they encountered the codices and recognized them as central to Mixtec religious and political life. The missionaries classified them as instruments of idolatry and ordered their destruction. Bonfires consumed libraries of codices across Oaxaca and the broader Mesoamerican world. Friar Diego de Landa's burning of Maya books in 1562 is the most famous instance, but similar destructions occurred throughout the region.

The scale of the loss is unknowable. We don't know how many codices existed before the conquest. Estimates based on the number of Mixtec communities and the known rates of codex production suggest hundreds at minimum, possibly thousands. The scribes who could read and write the system were also targeted, as their literacy was intertwined with the religious practices the missionaries sought to eradicate.

## What Survived

Eight pre-Columbian Mixtec codices are known to survive. The most famous, the Codex Zouche-Nuttall, is a 47-page narrative recording the genealogy and conquests of the Mixtec lord Eight Deer Jaguar Claw. It is housed in the British Museum. The Codex Vindobonensis, in Vienna, records Mixtec creation mythology. The others are scattered across European institutions.

A few more codices were produced in the early colonial period, when some Mixtec scribes continued working under Spanish supervision, producing documents in a hybrid style that combined traditional pictographic elements with European conventions. These are valuable but represent a tradition already in collapse.

## The Sentences We Can't Read

Scholars have made significant progress in deciphering the surviving codices. The genealogies can be traced, the conquests dated, the rituals identified. But the system was designed for a context that no longer exists: a world of thousands of manuscripts cross-referencing each other, with trained readers who understood the conventions from years of apprenticeship.

Reading eight codices is like reading eight pages torn at random from a library. You can understand the individual pages. You cannot reconstruct the library. The Mixtec scribes who painted those pages belonged to a literary tradition as rich and complex as any medieval European tradition, and we have access to roughly the same fraction of it as if every book in Europe had been burned except eight.`,
  quickFacts: {
    'Medium': 'Deerskin or bark paper, folded accordion-style',
    'Writing Type': 'Pictographic and logographic',
    'Surviving Pre-Columbian Codices': '8 known',
    'Most Famous': 'Codex Zouche-Nuttall (British Museum)',
    'Destroyed By': 'Spanish missionaries, classified as idolatrous',
    'Key Figure': 'Eight Deer Jaguar Claw (recorded in multiple codices)',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent the deliberate destruction of vast collections of knowledge, leaving only fragments' },
    { slug: 'eyak-language', relationship: 'Both are communication systems destroyed by colonial contact, one spoken, the other written' },
  ],
  sources: [
    { title: 'The Mixtecs of Colonial Oaxaca', author: 'Kevin Terraciano', year: 2001 },
    { title: 'Mixtec Writing and Society', author: 'Maarten Jansen and Gabina Aurora Pérez Jiménez', year: 2011 },
    { title: 'The Codex Zouche-Nuttall', author: 'Zelia Nuttall', year: 1902 },
  ],
};
