import type { Entry } from '../../types';

export const greekMusicModes: Entry = {
  slug: 'greek-music-modes',
  name: 'Ancient Greek Musical Modes',
  tagline: 'The Greeks believed different musical modes had different emotional and moral effects. We have the theory. We have a few fragments of notation. We cannot hear what they heard.',
  category: 'sound',
  subcategory: 'Musical Systems',
  lastKnownYear: '~4th century CE',
  lastKnownLocation: 'Greco-Roman world',
  coordinates: [37.97, 23.73],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The oral tradition of Greek music performance died with the transition to Christianity and the collapse of classical pagan culture. Written notation is fragmentary and the performance practice is unrecoverable.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Music as Moral Force

Plato argued that certain musical modes should be banned from his ideal republic. The Mixolydian mode, he said, made people sorrowful and slack. The Ionian and Lydian modes were "soft" and "convivial" — unsuitable for warriors. Only the Dorian (manly, courageous) and Phrygian (temperate, persuasive) modes should be permitted. Aristotle largely agreed, devoting significant portions of his *Politics* to the moral effects of different modes.

This wasn't aesthetic preference — the Greeks genuinely believed that musical modes had direct psychological and ethical effects on listeners. The concept was called *ethos*: each mode had a specific emotional and moral character that shaped the soul of anyone who heard it. This belief was so deeply held that cities regulated which modes could be performed in public.

## The Fragments

Approximately 60 fragments of ancient Greek musical notation survive — scratched into stone, written on papyrus, or preserved in manuscripts. The most complete is the Seikilos epitaph, a short melody inscribed on a tombstone from the 1st or 2nd century CE, with lyrics that translate roughly to: "While you live, shine. Let nothing grieve you beyond measure. Life is short, and time demands its toll."

We can transcribe these notations into modern pitch. We can play the intervals on modern instruments. What we cannot recover is the *performance practice*: the specific timbres of the aulos (double-reed pipe) and kithara (lyre), the vocal technique, the rhythmic conventions, the tuning system (which was not equal temperament), the improvisational traditions, the acoustic context of ancient theaters, and — most fundamentally — the cultural listening habits that gave these modes their emotional power.

## The Unbridgeable Gap

Medieval European music theorists borrowed the Greek mode names — Dorian, Phrygian, Lydian, Mixolydian — but applied them to a completely different system. The medieval modes that bear Greek names have no direct relationship to the ancient Greek modes. The names were reassigned through a series of historical misunderstandings. When a modern musician plays "in the Dorian mode," they are not playing anything Plato would have recognized.

The ancient Greek musical experience — the sound that made Plato want to ban certain melodies from his republic, the sound that Aristotle believed could shape character — is beyond recovery. We have the theory. We have fragments of notation. We have the instruments (reconstructed). But we cannot hear what they heard, because hearing is cultural, and the culture that gave those sounds their meaning is gone.`,
  quickFacts: {
    'Major Modes': 'Dorian, Phrygian, Lydian, Mixolydian, + others',
    'Key Philosophers': 'Plato (Republic), Aristotle (Politics)',
    'Concept': 'Ethos — modes have moral/emotional effects',
    'Surviving Fragments': '~60 pieces of notation',
    'Most Complete': 'Seikilos epitaph (1st-2nd c. CE)',
    'Instruments': 'Aulos (reed pipe), kithara (lyre)',
    'Medieval Confusion': 'Mode names reused for different system',
    'Tuning': 'Non-equal temperament (Pythagorean ratios)',
  },
  connections: [
    { slug: 'pre-equal-temperament', relationship: 'Both lost tuning systems — Greek modes and pre-equal temperament both represent ways of hearing music that modern ears cannot fully access' },
    { slug: 'globe-acoustics', relationship: 'Both ancient performance contexts whose acoustics shaped the art performed within them' },
    { slug: 'castrato-voice', relationship: 'Both lost vocal/musical traditions from periods before recording — one ancient Greek, the other Baroque European' },
  ],
  sources: [
    { title: 'Music in Ancient Greece and Rome', author: 'John G. Landels', year: 1999 },
    { title: 'The Republic, Book III', author: 'Plato (trans. Robin Waterfield)', year: 1993 },
    { title: 'Ancient Greek Music: A New Technical History', author: 'Stefan Hagel', year: 2009 },
    { title: 'Documents of Ancient Greek Music', author: 'Egert Pöhlmann & Martin West', year: 2001 },
  ],
};
