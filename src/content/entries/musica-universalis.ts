import type { Entry } from '../../types';

export const musicaUniversalis: Entry = {
  slug: 'musica-universalis',
  name: 'Pythagorean Music of the Spheres',
  tagline: 'Not metaphor but practice. The Pythagoreans used musical intervals to model planetary motion and performed healing rituals based on cosmic harmonics. The tradition died with the school.',
  category: 'sound',
  lastKnownYear: '~4th century BCE',
  lastKnownLocation: 'Croton, Magna Graecia (modern Crotone, Italy)',
  coordinates: [39.63, 16.52],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Violent dispersal of the Pythagorean communities in southern Italy and the subsequent loss of their oral tradition',
  imageUrl: undefined,
  body: `## Harmony as Physics

The Pythagorean concept of musica universalis, the music of the spheres, is usually presented as a poetic metaphor: the idea that the planets produce a celestial harmony as they orbit. But for the Pythagoreans themselves, this was not poetry. It was an empirical claim rooted in their discovery that musical intervals correspond to precise numerical ratios. A string halved produces an octave. A string divided in the ratio 3:2 produces a fifth. If the fundamental laws of sound are mathematical, the Pythagoreans reasoned, then the fundamental motions of the cosmos must follow the same mathematical harmonies.

Pythagoras established his school in Croton around 530 BCE. It was not merely an academy but a way of life, with strict rules of secrecy, communal living, dietary restrictions, and daily musical practice. The school's inner circle, the mathematikoi, studied the relationships between number, music, geometry, and astronomy as aspects of a single unified reality. Their doctrine held that the distances between planetary spheres corresponded to musical intervals, and that the motion of these spheres produced actual sound, inaudible to human ears only because it had been present since birth.

## The Rituals

The musical practices of the Pythagorean school were concrete and daily. Members began each morning with songs designed to sharpen the mind for the day's work and ended each evening with compositions intended to calm and prepare for sleep. At the vernal equinox, they gathered in a circle while one member played the lyre and led communal singing. Pythagoras himself was said to cure illness through specific musical compositions, selecting melodies calculated to affect particular conditions of the body and spirit. These were not casual performances but prescribed therapeutic interventions based on the school's harmonic theory.

The specific melodies, the tuning systems employed, the correspondence between musical intervals and their claimed therapeutic effects, and the full ritual calendar of the school were maintained as oral tradition within the community. They were never written down for outsiders. Pythagorean secrecy was not a social convention but a doctrinal requirement.

## The Dispersal

Around 509 BCE, anti-Pythagorean violence erupted in Croton and spread across the Greek cities of southern Italy. Meeting houses were burned. Members were killed or scattered. The school survived in diminished form for another century, but the unified community that had maintained the oral tradition was broken. Later writers, Plato, Aristotle, and the Neoplatonists, preserved fragments of Pythagorean cosmological theory. The practical tradition, the specific music, the rituals, and the therapeutic protocols, did not survive the dispersal.`,
  quickFacts: {
    'Founder': 'Pythagoras of Samos',
    'School Location': 'Croton, Magna Graecia (~530 BCE)',
    'Core Principle': 'Musical intervals = mathematical ratios = cosmic law',
    'Key Discovery': 'Octave = 2:1, fifth = 3:2, fourth = 4:3',
    'Daily Practice': 'Morning songs (stimulating) and evening songs (calming)',
    'Therapeutic Use': 'Specific compositions prescribed for illness',
    'Anti-Pythagorean Violence': '~509 BCE, school houses burned',
    'Doctrine Transmission': 'Oral only, secrecy required',
  },
  connections: [
    { slug: 'greek-music-modes', relationship: 'Both represent lost Greek musical traditions where the practical performance knowledge was oral and did not survive the cultures that maintained them' },
    { slug: 'pre-equal-temperament', relationship: 'The Pythagorean tuning system based on pure ratios was the ancestor of all pre-equal temperament systems; its practical application was lost first' },
  ],
  sources: [
    { title: 'Lore and Science in Ancient Pythagoreanism', author: 'Walter Burkert', year: 1972 },
    { title: 'The Pythagorean Sourcebook and Library', author: 'Kenneth Sylvan Guthrie', year: 1987 },
    { title: 'Musica universalis', url: 'https://en.wikipedia.org/wiki/Musica_universalis' },
  ],
};
