import type { Entry } from '../../types';

export const democritusMikrosDiakosmos: Entry = {
  slug: 'democritus-mikros-diakosmos',
  name: 'Democritus\' Mikros Diakosmos',
  tagline: 'The "Little World System" by the philosopher who proposed that all matter is made of atoms. Diogenes Laertius listed dozens of his books on physics, mathematics, ethics, and music. Not one survives whole. We have him only through the summaries of his enemies.',
  category: 'culture',
  subcategory: 'Lost Philosophical Works',
  lastKnownYear: 'c. 370 BCE',
  lastKnownLocation: 'Abdera, Thrace',
  coordinates: [40.94, 24.98],
  region: 'Ancient Greece',
  status: 'extinct',
  cause: 'Later Platonic and Christian disinterest; atomist materialism out of favor; papyri not recopied',
  body: `## The Man Who Guessed the Atom

Democritus of Abdera (c. 460-370 BCE) proposed that all matter is composed of indivisible particles he called atomoi, moving through empty space. He argued that differences in taste, color, and temperature were not real properties of things but the interactions of atoms with our senses. He was roughly correct about the deep structure of matter two thousand years before microscopes.

Diogenes Laertius, writing in the third century CE, preserved a catalogue of Democritus' works compiled by the Alexandrian scholar Thrasyllus. It listed more than seventy titles grouped into tetralogies: works on physics, ethics, mathematics, music, medicine, military strategy, and agriculture. Among the physics works was the Mikros Diakosmos, the "Little World System," apparently a companion to the older Megas Diakosmos attributed by Theophrastus to his teacher Leucippus.

Not one of these books survives as a continuous text. We have roughly three hundred short fragments, most of them from ethical sayings, quoted by later authors who often disagreed with him.

## What the Little World System Was

The Mikros Diakosmos appears to have been Democritus' own cosmological treatise, extending and reworking the framework of the larger Leucippean work. It would have laid out how atoms of different shapes and sizes collide, hook together, and form the heavens, the earth, plants, animals, and minds. Ancient doxographers preserve scraps: atoms moving in a cosmic whirl, worlds coming into being and passing away, souls as especially fine and spherical atoms.

The book's title alone is enough to tell us what has been lost: a detailed, physics-first account of how the universe self-assembles without gods, purposes, or designers, written before Plato, before Aristotle, before Epicurus. The atomist tradition that reached Lucretius was downstream of this treatise. Everyone after Democritus was, in effect, arguing with a book we cannot read.

## Buried by Plato

Diogenes Laertius reports the story that Plato wanted to burn all the books of Democritus he could find, and was dissuaded only by the Pythagoreans Amyclas and Clinias, who told him there was no point since copies were already everywhere. Whether the anecdote is literal or not, it captures what happened. Plato never mentions Democritus by name. Aristotle engaged with him closely, but the Platonic and Neoplatonic traditions that dominated late antiquity had no use for a materialist cosmology with no designer.

The papyrus rolls of the Mikros Diakosmos stopped being recopied. By the time Byzantine scribes began transferring Greek literature to parchment codices in the ninth century, Democritus was represented only by ethical aphorisms, which were short, quotable, and less offensive to Christian readers. The long physics treatises were gone.

## The Shape of the Loss

The atomic theory was reinvented in the seventeenth century by Gassendi, Boyle, and Newton, largely through the filter of Lucretius' Latin poem De Rerum Natura, which itself was a popularization of Epicurus, who was a popularization of Democritus. Every step of transmission narrowed the signal. What Democritus actually argued, in his own voice, at full length, about the structure of the physical world, is a book-shaped hole in the history of science.`,
  quickFacts: {
    'Author': 'Democritus of Abdera (c. 460-370 BCE)',
    'Total Works Catalogued': 'More than 70 titles by Thrasyllus',
    'Surviving Fragments': '~300 short quotations, mostly ethical',
    'Last Direct Quotations': 'Late antiquity (3rd-6th century CE)',
    'Likely Loss Date': 'Not recopied in the transition from papyrus to parchment (c. 500-800 CE)',
    'Key Source': 'Diogenes Laertius, Lives of Eminent Philosophers, Book IX',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'The Alexandrian scholar Thrasyllus catalogued Democritus, and Alexandria almost certainly held the fullest copies of his works' },
    { slug: 'musica-universalis', relationship: 'Both represent lost ancient cosmological frameworks attempting to explain the structure of the universe' },
    { slug: 'ptolemaic-star-catalog', relationship: 'Both are foundational Greek scientific works known only through later excerpts and references' },
  ],
  sources: [
    { title: 'Democritus', author: 'Sylvia Berryman', url: 'https://plato.stanford.edu/entries/democritus/', year: 2023 },
    { title: 'Lives of Eminent Philosophers, Book IX', author: 'Diogenes Laertius', year: 230 },
    { title: 'The Atomists: Leucippus and Democritus, Fragments', author: 'C. C. W. Taylor', year: 1999 },
  ],
};
