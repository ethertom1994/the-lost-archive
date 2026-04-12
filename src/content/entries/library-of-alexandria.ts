import type { Entry } from '../../types';

export const libraryOfAlexandria: Entry = {
  slug: 'library-of-alexandria',
  name: 'The Library of Alexandria',
  tagline: 'Not destroyed in a single fire but slowly bled to death over centuries. What was lost is incalculable.',
  category: 'culture',
  subcategory: 'Lost Knowledge Repositories',
  lastKnownYear: '~642 CE',
  lastKnownLocation: 'Alexandria, Egypt',
  coordinates: [31.20, 29.92],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Gradual decline through political instability, funding cuts, religious conflict, and successive destructions over centuries',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ancientlibraryalex.jpg/400px-Ancientlibraryalex.jpg',
  imageCaption: 'Artistic rendering of the Library of Alexandria',
  imageCredit: 'O. Von Corven, 19th century',
  body: `## Not One Fire but Many

The popular narrative has the Library of Alexandria destroyed in a single dramatic conflagration, usually attributed to Julius Caesar in 48 BCE. The reality is more painful. The library died not in a blaze of glory but through a prolonged, undramatic decline spanning centuries, killed by budget cuts, political indifference, and repeated partial destructions, none of which individually destroyed it and all of which collectively bled it dry.

The library was founded around 283 BCE under Ptolemy II Philadelphus, who envisioned a repository of all human knowledge. At its peak, it may have held between 100,000 and 400,000 scrolls, though estimates vary widely. It was the largest collection of written knowledge in the ancient world, attracting scholars from across the Mediterranean.

## What We Know Was Lost

We know of specific works that were held in the library and are now gone because other surviving texts reference them. The losses are staggering. Entire plays by Sophocles, Euripides, and Aeschylus: of the hundreds they wrote, fewer than forty survive. Historical works by authors like Berossus, Manetho, and Hecataeus, who wrote comprehensive histories of Babylonia, Egypt, and Greece, survive only in fragments quoted by later writers. Mathematical treatises referenced by Archimedes and Euclid. Medical texts by Herophilus, who performed the first systematic human dissections.

The philosopher Callimachus compiled the *Pinakes*, a 120-volume catalog of the library's holdings. It was essentially the first library catalog, a systematic index of Greek literature and learning. The *Pinakes* itself is lost. We know what it attempted to organize but cannot read the organization.

## The Slow Death

Caesar's fire in 48 BCE likely destroyed a warehouse of scrolls near the harbor, not the main library. The institution continued to function for centuries afterward. But it suffered repeated blows. Emperor Aurelian's reconquest of Alexandria in 272 CE damaged the Bruchion district where the main library stood. The decree of Theophilus, Patriarch of Alexandria, in 391 CE led to the destruction of the Serapeum, the library's daughter institution. The Arab conquest in 642 CE may have scattered what remained, though the details are debated.

Between these events, the library suffered from something less dramatic but equally lethal: declining patronage. The Ptolemaic dynasty that founded it fell to Rome. The Romans maintained it intermittently but without the same commitment. As political power shifted away from Alexandria, funding dwindled, scholars relocated, and the collection was not maintained.

## The Weight of What We Don't Know

The most troubling aspect of the library's loss is not the works we know are missing but the ones we don't know about at all. The catalog is gone. We cannot compile a list of what was lost because the list itself was lost. For every work we know existed because someone else mentioned it, there may be dozens that vanished without a single surviving reference. The library's destruction did not just take books from the world. It took the knowledge of which books had existed.`,
  quickFacts: {
    'Founded': '~283 BCE under Ptolemy II Philadelphus',
    'Peak Holdings': 'Estimated 100,000-400,000 scrolls',
    'First Librarian': 'Zenodotus of Ephesus',
    'Catalog': 'The Pinakes by Callimachus (120 volumes, lost)',
    'Caesar\'s Fire': '48 BCE (likely a warehouse, not the main library)',
    'Serapeum Destroyed': '391 CE (decree of Patriarch Theophilus)',
    'Final Fate': 'Uncertain; gradual decline through 3rd-7th century CE',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'Both represent the intellectual achievement of the Hellenistic world, a tradition of knowledge that did not survive antiquity intact' },
    { slug: 'eyak-language', relationship: 'Both represent irreplaceable systems of knowledge destroyed, one by fire and neglect, the other by policy and time' },
    { slug: 'passenger-pigeon-pie', relationship: 'Both represent cultural loss beyond the physical: entire literatures died with the library, just as an entire cuisine died with the bird' },
  ],
  sources: [
    { title: 'The Rise and Fall of Alexandria', author: 'Justin Pollard & Howard Reid', year: 2006 },
    { title: 'The Library of Alexandria: Centre of Learning in the Ancient World', author: 'Roy MacLeod', year: 2000 },
    { title: 'The Vanished Library', author: 'Luciano Canfora', year: 1990 },
    { title: 'Too Great a Good: A History of the Royal Library of Alexandria', author: 'James Hannam', year: 2003 },
  ],
};
