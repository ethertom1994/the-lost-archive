import type { Entry } from '../../types';

export const stradivariusSound: Entry = {
  slug: 'stradivarius-sound',
  name: 'The Original Stradivarius Sound',
  tagline: 'Stradivarius instruments change tone as wood ages and varnish cracks. The sound Stradivari heard when he tested his violins no longer exists.',
  category: 'sound',
  subcategory: 'Musical Instruments',
  lastKnownYear: 1737,
  lastKnownLocation: 'Cremona, Italy',
  coordinates: [45.13, 10.03],
  region: 'Europe',
  status: 'extinct',
  cause: 'The natural aging of wood, degradation of varnish, accumulation of repairs, and changes in string materials over 300+ years have fundamentally altered the acoustic properties of every surviving instrument',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Sound That Changed

When Antonio Stradivari completed a violin in his Cremona workshop and drew the bow across its strings for the first time, he heard something. A specific sound: bright, responsive, with the character of freshly worked spruce and maple, newly applied varnish still curing, gut strings wound with silver wire. That sound — the sound the maker heard, the sound he calibrated and adjusted and approved — no longer exists.

What we call "the Stradivarius sound" today is actually the sound of 300 years of transformation. Wood changes over centuries: it dries, its cellular structure shifts, its resonance properties evolve. Varnish ages, cracks, and is sometimes stripped and reapplied. Instruments are repaired, their bass bars replaced, their necks reset to accommodate modern playing standards. The gut strings Stradivari used have been replaced by synthetic or steel. The tuning pitch has risen nearly a full semitone since the 18th century, putting the instruments under greater tension.

## The Aging Paradox

Here is the paradox: the qualities that musicians and audiences prize in old Italian instruments — the warmth, the complexity, the "singing" quality — may be products of aging, not of original construction. When modern luthiers build instruments using Stradivari's methods and measurements, the new instruments sound different. They are bright, sharp, forward — qualities that mellow over decades. The implication is unsettling: what we celebrate as Stradivari's genius may be partly the genius of time.

Some acoustic researchers argue the opposite — that Stradivari's craftsmanship created instruments that aged particularly well, that the wood selection and varnish formulation were optimized not for how the instrument sounded fresh from the workshop but for how it would sound a century later. If true, this makes Stradivari even more remarkable: he was engineering for a future he would never hear.

## What We Cannot Recover

No recording technology existed in the 18th century. No scientific instruments could capture the acoustic spectrum of a new Stradivarius. We have the objects, but we do not have the sound they were designed to produce. Every performance on a Stradivarius today is a performance on a transformed instrument — still magnificent, still unique, but speaking in a voice that its maker would not recognize as his own.

The original Stradivarius sound — the sound of a violin on the day it was completed, tested by the hands that shaped it, in the room where it was born — is as lost as any extinct birdsong. The instruments survive. The sound does not.`,
  quickFacts: {
    'Maker': 'Antonio Stradivari (1644-1737)',
    'Active Period': '~1666-1737',
    'Instruments Surviving': '~650 of ~1,100 made',
    'Most Valuable': '"Lady Blunt" (1721), sold for $15.9M',
    'Modern Pitch vs. Baroque': 'A4 = 440 Hz vs. ~415 Hz',
    'String Material Change': 'Gut → synthetic/steel',
    'Wood Aging': 'Ongoing molecular changes for 300+ years',
    'Key Question': 'Does the sound reflect the maker or time?',
  },
  connections: [
    { slug: 'stradivarius-secret', relationship: 'The construction mystery (that entry) and the sound mystery (this entry) are two halves of the same loss' },
    { slug: 'pre-equal-temperament', relationship: 'Both represent lost musical soundscapes — tuning systems and timbres from before recording technology' },
    { slug: 'globe-acoustics', relationship: 'Both original acoustic environments altered beyond recovery by time and modification' },
  ],
  sources: [
    { title: 'Stradivari\'s Genius: Five Violins, One Cello, and Three Centuries of Enduring Perfection', author: 'Toby Faber', year: 2004 },
    { title: 'The Secrets of Cremona: Violin Making and the Age of Wood', author: 'Henri Grissino-Mayer', year: 2003 },
    { title: 'Acoustics of Old Italian Violins', author: 'Claudia Fritz et al.', year: 2012 },
    { title: 'The Science of String Instruments', author: 'Thomas Rossing', year: 2010 },
  ],
};
