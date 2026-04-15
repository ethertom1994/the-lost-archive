import type { Entry } from '../../types';

export const bachsLituus: Entry = {
  slug: 'bachs-lituus',
  name: 'Bach\'s Lituus',
  tagline: 'An eight-foot war trumpet Bach scored for in 1736. No instrument survived. In 2009, scientists rebuilt it from acoustic equations and performed the piece for the first time in 270 years.',
  category: 'sound',
  subcategory: 'Lost Instruments',
  lastKnownYear: '~1750',
  lastKnownLocation: 'Leipzig, Germany',
  coordinates: [51.34, 12.37],
  region: 'Europe',
  status: 'extinct',
  cause: 'Instrument fell out of use; no surviving examples, no detailed construction plans',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Score Without a Voice

In 1736, Johann Sebastian Bach composed Cantata BWV 118, "O Jesu Christ, meins Lebens Licht," a motet for a funeral. The score called for an unusual ensemble: two litui, two cornetti, three trombones, and voices. The cornetti and trombones posed no problem. The lituus was another matter entirely.

The word "lituus" appears in Roman texts as a term for a long, curved military trumpet used in cavalry signals. By the time Bach wrote his cantata, the instrument was already archaic. What exactly Bach meant by the term, and what instrument his performers actually played, has been debated by musicologists for centuries. No physical example of a Baroque-era lituus survives. No contemporary illustration clearly depicts it. No construction manual describes its dimensions. Bach's score, with its specific written range and tonal demands, was the most detailed description of the instrument in existence.

## The Puzzle

For nearly three centuries, performers who wished to play BWV 118 as written faced an impossible problem: the lituus parts were too high for a natural trumpet and too low for a horn, written in a range that fit no surviving brass instrument comfortably. Performances typically substituted modern trumpets or horns, acknowledging that the sound was an approximation at best.

The mystery attracted the attention of musicologists and acousticians alike. If the instrument could not be found, perhaps it could be reverse-engineered from the music itself.

## Reconstruction

In 2009, a team at the University of Edinburgh, led by Murray Campbell and Jonathan Sherlock with instrument maker Helmut Becker, attempted precisely that. Using the range, dynamics, and tonal characteristics demanded by Bach's score as specifications, they employed acoustic modeling software to calculate the bore profile, length, and bell dimensions of an instrument that would produce the required sound.

The result was a reconstruction approximately eight feet long, with a narrow cylindrical bore expanding to a moderate bell, curved back on itself in a J-shape. The instrument produced a sound distinct from both trumpet and horn: brighter and more penetrating than a horn, but mellower and less brilliant than a Baroque trumpet, with a carrying quality suited to outdoor performance.

## The Performance

With two reconstructed litui built to the computed specifications, the Edinburgh team performed Bach's Cantata BWV 118 as close to the composer's intention as modern scholarship could manage. The performance, held at the Galpin Society conference, was the first time the piece had been heard with its intended instrumentation in approximately 270 years.

The sound was revelatory. The litui provided a timbral color that neither trumpet nor horn could replicate, a voice that sat between the two, supporting the vocal lines with a solemn brightness that illuminated why Bach had specified this particular instrument for a funeral motet. The music made sense in a way it had not with substitute instruments.

## What Remains Unknown

The Edinburgh reconstruction is a hypothesis, not a certainty. Without a surviving original to compare against, there is no way to verify that their instrument matches what Bach's performers played in 1736. The reconstruction is the best answer acoustic science can provide to a question that history left unanswered. It is a sound plausibly retrieved from silence, but the silence itself remains the more honest record.`,
  quickFacts: {
    'Composition': 'BWV 118, "O Jesu Christ, meins Lebens Licht" (1736)',
    'Composer': 'Johann Sebastian Bach',
    'Instrument Type': 'Long curved brass instrument (~8 feet)',
    'Historical Origin': 'Roman military trumpet (adapted for Baroque use)',
    'Surviving Examples': 'None',
    'Reconstruction': '2009, University of Edinburgh',
    'Team': 'Murray Campbell, Jonathan Sherlock, Helmut Becker',
    'Sound Character': 'Between trumpet and horn: solemn, bright, penetrating',
  },
  connections: [
    { slug: 'gue-of-shetland', relationship: 'Both are instruments that vanished so completely that not a single physical example survives' },
    { slug: 'castrato-voice', relationship: 'Both represent sounds from the Baroque era that required extraordinary measures to approximate in the modern world' },
    { slug: 'greek-music-modes', relationship: 'Both involve ancient musical systems whose exact sound required modern scholarship to reconstruct' },
  ],
  sources: [
    { title: 'Zur Frage des Lituus: Bach\'s Cantata BWV 118', author: 'Murray Campbell and Jonathan Sherlock', year: 2009 },
    { title: 'The Galpin Society Journal', year: 2009 },
    { title: 'Bach\'s Orchestra', author: 'C.S. Terry', year: 1932 },
  ],
  relatedMedia: [
    { type: 'video', title: 'BWV 118 with Reconstructed Litui', url: 'https://www.youtube.com/watch?v=F5XgNaYp2Ow', description: 'Performance using the Edinburgh reconstructed litui' },
  ],
};
