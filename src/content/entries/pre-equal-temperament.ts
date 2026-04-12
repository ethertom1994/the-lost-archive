import type { Entry } from '../../types';

export const preEqualTemperament: Entry = {
  slug: 'pre-equal-temperament',
  name: 'Pre-Equal Temperament Music',
  tagline: 'Before the 1700s, every key had its own emotional character. We standardized them all into sameness. Bach didn\'t write "Well-Tempered" to praise equal temperament. He wrote it to mourn what was coming.',
  category: 'sound',
  subcategory: 'Lost Tuning Systems',
  lastKnownYear: 1850,
  lastKnownLocation: 'Europe (gradually replaced across Western musical traditions)',
  coordinates: [51.34, 12.38],
  region: 'Europe',
  status: 'extinct',
  cause: 'Adoption of equal temperament for practical flexibility in modulation and ensemble playing',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Keys Had Colors

Before approximately 1800, Western music was not tuned the way it is today. Instead of equal temperament, where every semitone is exactly the same size and every key sounds identical, musicians used systems where the intervals were slightly different from key to key. These systems had names: meantone, well temperament, Pythagorean, Kirnberger, Vallotti, Werkmeister.

The practical effect was profound. Each key had a distinctive character. C major was pure and open. D major was bright and festive. B major was harsh and rarely used. F minor was dark and mournful. Composers didn't choose keys arbitrarily. They chose them for their specific emotional coloring, the way a painter chooses a shade of blue.

## What We Lost

Equal temperament divides the octave into twelve perfectly equal semitones. This means every key is identical in its interval structure. C major and D-flat major have exactly the same internal relationships. The "color" of each key is gone. Any piece can be transposed to any key without changing its character, because character no longer varies by key.

This was a trade. We gained the ability to modulate freely between any key, which enabled the complex harmonic language of Romantic and modern music. We gained the ability to have orchestras and ensembles play together without tuning conflicts. But we lost the palette. A harpsichord piece in D major, tuned in meantone temperament, has a warmth and purity that the same notes in equal temperament simply do not possess.

## The Mathematical Reality

The problem that temperament solves is mathematical and inescapable. A perfect fifth (frequency ratio 3:2) and a perfect octave (ratio 2:1) are fundamentally incompatible. Stack twelve perfect fifths and you overshoot seven octaves by a small amount called the Pythagorean comma. This comma must be distributed somewhere. Different temperaments distribute it differently, and each distribution creates a different sonic landscape.

In meantone temperament, the most common system from the 1500s to the 1700s, most fifths were tuned slightly flat to make the major thirds pure and sweet. The result was beautiful thirds in common keys but unusable intervals in remote keys. Playing in A-flat major on a meantone harpsichord sounds genuinely unpleasant, not out of tune by a little, but by enough to make listeners wince.

## Hearing Ghosts

Early music ensembles today sometimes perform in historical temperaments, and the difference is immediately audible. A Bach prelude played on a harpsichord tuned in Kirnberger III sounds different from key to key in a way that modern listeners find strange and then captivating. The architecture of the music reveals itself as having been designed for these specific sonic relationships.

There is a growing scholarly consensus that Bach's *Well-Tempered Clavier*, long assumed to be a celebration of equal temperament, was actually written for a well temperament, a system where all keys are usable but each retains a distinct character. The piece is a tour through twenty-four keys precisely because each key sounds different. In equal temperament, the tour is a circle of identical rooms.`,
  quickFacts: {
    'Dominant System Before 1800': 'Meantone temperament (most thirds pure, some keys unusable)',
    'Transition Period': '~1700-1850',
    'What Changed': 'All 12 semitones made equal, eliminating key color',
    'What We Gained': 'Free modulation, ensemble compatibility, transposition',
    'What We Lost': 'Each key having a unique emotional character',
    'Key Work': 'Bach, Well-Tempered Clavier (1722) -- likely written for well temperament, not equal',
  },
  connections: [
    { slug: 'stradivarius-secret', relationship: 'Both represent aspects of historical music-making whose specific qualities cannot be fully replicated with modern methods' },
    { slug: 'castrato-voice', relationship: 'Both are lost sounds from European musical traditions that recordings and reconstructions can only approximate' },
  ],
  sources: [
    { title: 'Temperament: How Music Became a Battleground for the Great Minds of Western Civilization', author: 'Stuart Isacoff', year: 2001 },
    { title: 'How Equal Temperament Ruined Harmony (and Why You Should Care)', author: 'Ross W. Duffin', year: 2007 },
    { title: 'Bach\'s Extraordinary Temperament', author: 'Bradley Lehman', year: 2005 },
  ],
};
