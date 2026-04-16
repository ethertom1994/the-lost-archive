import type { Entry } from '../../types';

export const epicurusOnNature: Entry = {
  slug: 'epicurus-on-nature',
  name: 'Epicurus\' On Nature (Peri Physeos)',
  tagline: 'A 37-book magnum opus by Epicurus, the most ambitious treatise on physics written in antiquity. Buried under volcanic ash at Herculaneum, carbonized, and slowly being read again with X-ray tomography — but most of it is still just charcoal.',
  category: 'culture',
  subcategory: 'Lost Philosophical Works',
  lastKnownYear: 'c. 270 BCE',
  lastKnownLocation: 'Athens (composition); Villa of the Papyri, Herculaneum (last copies)',
  coordinates: [40.806, 14.348],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Vesuvius eruption 79 CE carbonized the only known copies; subsequent disinterest in Epicurean physics meant no intact copies survived elsewhere',
  body: `## The Longest Book in Greek Philosophy

Epicurus of Samos wrote a treatise called Peri Physeos, On Nature, in thirty-seven books. It was his physics, his cosmology, his theory of perception, and his account of the soul all in one. It was longer than Aristotle's entire surviving corpus on natural philosophy. It was the foundational text of Epicurean materialism, the tradition that Lucretius later versified in Latin as De Rerum Natura.

We have essentially none of it.

What survives of Epicurus in direct transmission fits in a thin book: three philosophical letters and forty brief sayings called the Principal Doctrines, all preserved because Diogenes Laertius copied them into Book X of his Lives of Eminent Philosophers. The monumental thirty-seven-book treatise was not among the works that medieval scribes chose to recopy. It was already a rare text by late antiquity, and Christian hostility to Epicurean atheism ensured it would stay rare.

## Buried in Herculaneum

In 79 CE, Mount Vesuvius erupted and buried the coastal town of Herculaneum under twenty meters of volcanic mud and ash. Among the buildings entombed was the Villa of the Papyri, a luxurious country house that contained the personal library of an Epicurean philosopher, probably Philodemus of Gadara. The heat carbonized roughly 1,800 papyrus scrolls instead of destroying them entirely.

When the villa was discovered in the 1750s, early excavators tried to unroll the blackened, brittle scrolls, and most attempts destroyed the text. Over subsequent centuries, slow and careful mechanical unrolling, followed by multispectral imaging and most recently X-ray computed tomography, has allowed scholars to read portions of the library without further damage. Among the identified texts are significant fragments of books from On Nature: parts of Book II, Book XI, Book XIV, Book XV, Book XXV, Book XXVIII, and Book XXXIV. Some books have a few lines legible, others a few pages, none the whole.

## What We Are Missing

The fragments that have been read show a philosopher working at a very high level on problems that remained unsolved until the nineteenth century. Book XXV argues against strict determinism, defending a limited form of free will grounded in atomic motion, centuries before the physics that would make the argument rigorous. Other books treated perception, the psychology of emotion, and the physics of the heavens.

Epicurus appears to have composed the thirty-seven books in sequence over his long life, with each book a focused monograph on a particular problem. The order, the logical connections between the books, and the grand structural argument that united them are things we can only infer from the scraps we have.

## The Slow Recovery

The Herculaneum project continues. In 2023 and 2024, the Vesuvius Challenge used machine learning on X-ray scans to read passages from scrolls still physically rolled shut, including text from a Philodemus work on pleasure. Each new reading offers the possibility that some of the missing books of On Nature still lie carbonized in the unexcavated lower floor of the Villa of the Papyri. Most of the library has never been touched. Epicurus' masterpiece is the most recoverable lost book in classical antiquity, and also the most stubbornly inaccessible.`,
  quickFacts: {
    'Author': 'Epicurus (341-270 BCE)',
    'Original Length': '37 books',
    'Surviving Direct Text': 'Fragments from roughly 10 books, recovered from carbonized scrolls',
    'Source of Fragments': 'Villa of the Papyri, Herculaneum',
    'Buried': '79 CE, eruption of Vesuvius',
    'Recovery Technology': 'X-ray computed tomography, machine learning (Vesuvius Challenge, 2023-)',
  },
  connections: [
    { slug: 'democritus-mikros-diakosmos', relationship: 'Epicurus\' atomist physics was a direct continuation of Democritus\' lost cosmological works' },
    { slug: 'library-of-alexandria', relationship: 'Both represent the catastrophic loss of ancient Greek scientific literature, through different mechanisms' },
    { slug: 'aristotle-on-poets', relationship: 'Both are major philosophical works of the Hellenistic era that survived only as fragments into the medieval period' },
  ],
  sources: [
    { title: 'Epicureanism', author: 'Oxford Bibliographies', url: 'https://www.oxfordbibliographies.com/display/document/obo-9780195389661/obo-9780195389661-0202.xml' },
    { title: 'Philodemus and the New Testament World', author: 'John T. Fitzgerald et al.', year: 2004 },
    { title: 'The Vesuvius Challenge', url: 'https://scrollprize.org/' },
  ],
};
