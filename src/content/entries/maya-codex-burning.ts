import type { Entry } from '../../types';

export const mayaCodexBurning: Entry = {
  slug: 'maya-codex-burning',
  name: 'The Mani Codex Burning',
  tagline: 'In July 1562 a Franciscan bishop in the Yucatan assembled every Maya book he could find and burned them in a single afternoon. He wrote afterwards that he had destroyed twenty-seven volumes. Three and a half complete Maya codices survive in the world.',
  category: 'culture',
  subcategory: 'Lost Writing',
  lastKnownYear: 1562,
  lastKnownLocation: 'Mani, Yucatan (modern Mexico)',
  coordinates: [20.38, -89.39],
  region: 'Mesoamerica',
  status: 'extinct',
  cause: 'Auto-da-fe ordered by Franciscan bishop Diego de Landa, 12 July 1562',
  imageUrl: undefined,
  body: `## A Living Literature

By the early sixteenth century the Maya had been using a fully developed logosyllabic script for more than a thousand years. It was not a pictographic code but a real writing system, with around 800 signs representing phonetic syllables and full words, capable of recording any sentence in Classic and Postclassic Maya languages. The earliest inscriptions date to the third century BCE. By 1500 literacy was concentrated in a priestly and scribal class, but the class itself was substantial, and each large Maya centre maintained a library of *amatl* bark-paper codices bound in folded-screen format.

These were not only religious books. The surviving pre-Conquest codices and the accounts given by Spanish chroniclers before the main burnings (including Diego de Landa himself, who interrogated Maya lords about the content of their books) indicate that Maya libraries held astronomical tables extending forward and backward centuries, dynastic genealogies reaching into the Classic period, divinatory almanacs, medical and botanical formularies, land records, ritual manuals, mythological narratives, and, in the case of the larger cities, chronicles of reigns. The sixteenth-century Spanish accounts agree that these books were everywhere, that scribes were trained from childhood, and that every lord of any standing maintained a personal collection.

## July 12, 1562

Diego de Landa arrived in the Yucatan in 1549 as a young Franciscan. He taught himself Yucatec Maya, developed the closest relationships with indigenous nobles of any Spanish cleric of his generation, and became the provincial head of the Franciscan mission in 1561. In June 1562, reports reached him that Maya converts in the town of Mani were continuing to perform traditional rituals in caves, including some with human sacrifice. Landa convened an *auto-da-fe*. Over the following weeks he interrogated thousands of Maya, had many tortured under the water-rope and the hoist, and collected every book and cult image he could find. On 12 July 1562 he had the collected material burned in a public ceremony in Mani. He wrote in his own *Relacion de las cosas de Yucatan* that twenty-seven books were burned that afternoon, along with some five thousand cult images.

Other burnings followed in other towns over the next several years, conducted both by Landa (before he was recalled to Spain to answer for his use of torture) and by other Franciscans. It is impossible to produce a total. The destruction was systematic in the Yucatan, less so in highland Guatemala and the Peten, but by 1600 almost no pre-Conquest Maya books remained in Maya hands. The class of trained scribes, deprived of its libraries and patronage, dwindled over two generations.

## What Remains

Three complete pre-Conquest Maya codices survive today: the Dresden Codex, the Madrid Codex, and the Paris Codex, each a divinatory-astronomical text named for the city where it is now held. A fourth, the Grolier Codex (more recently the Maya Codex of Mexico), survives as a partial fragment. All four appear to have left the Yucatan as curiosities or as looted objects in the sixteenth or seventeenth centuries. A handful of post-Conquest colonial books in Yucatec Maya written in Latin script, most famously the Books of Chilam Balam and the *Popol Vuh* (for highland Quiche), preserve fragments of the older tradition filtered through Christian editing.

What was destroyed was everything else. No Maya dynastic chronicles in their original form. No pre-Conquest astronomical tables apart from the Dresden Codex\'s Venus and eclipse tables. No comprehensive legal or land records. The Classic-period inscriptions carved in stone are in a slightly different script-register and are often heavily formulaic; they are not substitutes for the continuous running prose that the bark-paper codices reportedly held. The decipherment of the Maya script since the 1960s has restored the ability to read what remains. What remains is between three and four books, out of a literature that had been accumulating for fifteen centuries.`,
  quickFacts: {
    'Date of Mani Burning': '12 July 1562',
    'Ordered By': 'Diego de Landa, Franciscan Provincial',
    'Codices Burned at Mani': '27 (by Landa\'s own count)',
    'Surviving Pre-Conquest Codices': '3 complete, 1 partial',
    'Script': 'Maya logosyllabic writing, c. 800 signs',
    'Continuous Use of Script': 'c. 3rd century BCE to 17th century CE',
  },
  connections: [
    { slug: 'mixtec-codices', relationship: 'Both were Mesoamerican codex traditions reduced to a handful of surviving books by Spanish colonial suppression' },
    { slug: 'qin-book-burning', relationship: 'Both were deliberate state-backed destructions of the existing written literature of a civilisation' },
    { slug: 'cathar-texts', relationship: 'Both involved the systematic destruction of a tradition\'s texts by an ecclesiastical authority that saw them as heresy' },
  ],
  sources: [
    { title: 'Relacion de las cosas de Yucatan', author: 'Diego de Landa', year: 1566 },
    { title: 'The Ancient Maya', author: 'Robert J. Sharer and Loa P. Traxler', year: 2006 },
    { title: 'Burning the Maya Books: The 1562 Tragedy at Mani', author: 'Inga Clendinnen', year: 1987 },
    { title: 'Maya codices - Wikipedia', url: 'https://en.wikipedia.org/wiki/Maya_codices' },
  ],
};
