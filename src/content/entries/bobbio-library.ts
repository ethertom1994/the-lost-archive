import type { Entry } from '../../types';

export const bobbioLibrary: Entry = {
  slug: 'bobbio-library',
  name: 'The Bobbio Library',
  tagline: 'An Irish monk founded an Italian monastery in 614 and filled its library with books from both sides of the Alps. A ninth-century catalogue listed over six hundred volumes, some of them the only surviving copies of Roman works. By 1803 it had been auctioned off in pieces.',
  category: 'culture',
  subcategory: 'Lost Libraries',
  lastKnownYear: 1492,
  lastKnownLocation: 'Bobbio Abbey, Lombardy (modern Italy)',
  coordinates: [44.77, 9.39],
  region: 'Europe',
  status: 'extinct',
  cause: 'Gradual dispersal by transfer (1606 to the Ambrosiana, 1618 to the Vatican) and by auction following Napoleon\'s 1803 suppression of the monastery',
  imageUrl: undefined,
  body: `## A Meeting Point of Two Traditions

Saint Columbanus, an Irish monk who had spent the previous two decades founding monasteries across Gaul and getting expelled from them, arrived in the northern Italian foothills of the Apennines around 614 and established a new house at Bobbio under the patronage of the Lombard king Agilulf. He brought with him a small number of books from the Irish tradition and a ferocious intellectual discipline. His successors built the library up. By the ninth century Bobbio held one of the strangest and most valuable collections in Europe: a mix of Irish, Anglo-Saxon, Visigothic, Gothic, and Late Roman manuscripts that existed nowhere else in that combination. A catalogue drawn up at the end of the ninth century lists more than six hundred volumes.

The Bobbio collection became famous for its palimpsests. A palimpsest is a parchment that has been scraped clean and overwritten. Because parchment was expensive, early medieval scribes routinely erased older books and wrote new ones on top. At Bobbio the older, undertexts have repeatedly turned out to be unique: the only surviving sizeable texts of the fourth-century Gothic Bible translated by the bishop Wulfila; lost orations of Cicero including the *Pro Scauro* and *De Re Publica*; fragments of Plautus and of Fronto; a copy of the Latin grammarian Marcus Valerius Probus preserved nowhere else. Starting in the eighteenth century scholars learned to read these under-texts with chemical reagents and later with ultraviolet light, and Bobbio palimpsests have produced a steady stream of otherwise lost classical and late-antique material for two centuries.

## The Long Dispersal

Bobbio's library was not destroyed in a single catastrophe. It was sold off over four hundred years, and the over-text layer of what was sold is often less interesting than what the parchment once held underneath.

A 1461 inventory of the monastic library records the collection at Bobbio still substantially intact. In the early seventeenth century the major dispersals began: in 1606, Cardinal Federico Borromeo, the archbishop of Milan, obtained some seventy-seven manuscripts from Bobbio — including the *Bobbio Orosius*, the *Antiphonary of Bangor* (an Irish liturgical book of exceptional importance), and the Gothic Bible palimpsest — for his newly founded Biblioteca Ambrosiana. In 1618, at the request of Pope Paul V, the monastery transferred a further twenty-nine manuscripts to the Vatican Library. In 1803 the monastery was dissolved by Napoleonic decree, and the remaining books were sold at auction to, among others, an Irish-born physician named Odoardo Raymond Butler. After Butler\'s death many of those manuscripts entered the Biblioteca Nazionale Universitaria in Turin, where a number of them burned in the catastrophic 1904 library fire.

Today the identifiable Bobbio manuscripts, those whose medieval history can be traced back to the abbey, are scattered across the Ambrosiana, the Vatican, Turin, the Austrian National Library, Paris, Naples, and various smaller collections. Many more are untraceable. Some were lost at Turin in 1904, some in the earlier fires and thefts, some into unknown private collections. The 1492 inventory, the most detailed medieval list of the collection's contents, references volumes that modern scholars cannot match to any surviving manuscript anywhere.

## The Under-Layer

What was lost at Bobbio was not only the physical manuscripts but the particular conjunction they represented, the meeting of an Irish Hiberno-Latin tradition with a surviving fragment of the Late Roman classical inheritance in one small northern Italian abbey. That conjunction had already partly eaten itself alive, since many of the classical texts were palimpsested under medieval liturgical ones as parchment ran short. The dispersal from the fifteenth century onward finished the job. The books that remain are invaluable; the books whose titles we know only from the 1492 catalogue, or that survive only in a under-text now too eroded to read, are gone.`,
  quickFacts: {
    'Founded': '614, by Saint Columbanus',
    'Ninth-Century Catalogue': '600+ volumes',
    '1492 Catalogue': 'Most detailed medieval list; many items not identifiable today',
    'Notable Palimpsests': 'Gothic Bible (Wulfila), Cicero orations, Fronto, Plautus',
    'Major Dispersals': 'Ambrosiana 1606, Vatican 1618, auction 1803, Turin (post-auction)',
    'Lost in 1904 Turin Fire': 'Multiple Bobbio volumes, extent incompletely known',
  },
  connections: [
    { slug: 'louvain-library', relationship: 'Both were libraries where unique medieval and classical texts were destroyed or dispersed, and both lost material scholars had been counting on for centuries' },
    { slug: 'house-of-wisdom', relationship: 'Both were cross-cultural libraries that uniquely held the meeting of two traditions and whose holdings cannot be reconstructed from elsewhere' },
    { slug: 'cathar-texts', relationship: 'Both involved the erasure of one kind of text so another could be written in its place, literally at Bobbio and through suppression in Languedoc' },
  ],
  sources: [
    { title: 'Bobbio in the Early Middle Ages: The Abiding Legacy of Columbanus', author: 'Michael Richter', year: 2008 },
    { title: 'Palimpsests and the Literary Canon of English Literature', author: 'Sarah Dillon', year: 2007 },
    { title: 'Bobbio Abbey - Wikipedia', url: 'https://en.wikipedia.org/wiki/Bobbio_Abbey' },
    { title: 'Saint Columbanus Founds the Monastery and Library at Bobbio', url: 'https://www.historyofinformation.com/detail.php?id=1398' },
  ],
};
