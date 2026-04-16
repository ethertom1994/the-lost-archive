import type { Entry } from '../../types';

export const greekTheatricalMasks: Entry = {
  slug: 'greek-theatrical-masks',
  name: 'Greek Theatrical Masks',
  tagline: 'Not just costumes. Greek dramatic masks were acoustic instruments, engineered to project a single voice across 15,000 seats. The craft died with the theaters.',
  category: 'sound',
  lastKnownYear: '~5th century CE',
  lastKnownLocation: 'Greco-Roman world (centered on Athens)',
  coordinates: [37.97, 23.73],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The decline of Roman theatrical traditions and the closure of pagan performance spaces under Christian rule ended the mask-making craft',
  imageUrl: undefined,
  body: `## More Than a Face

The masks of Greek drama, called personae, were not simple coverings. They enclosed the entire head, creating a sealed resonance chamber between the actor's face and the mask's interior. Modern acoustic analysis has demonstrated that this chamber amplified vocal frequencies in the range most critical for speech intelligibility, boosting output by 3 to 5 decibels in the frequency range below 1,000 Hz. In the vast open-air theaters of the Greek world, where audiences of 14,000 to 17,000 sat in tiered stone seating, this amplification was not decorative. It was functional engineering.

The mask maker's art, practiced by specialists whose craft was passed down within workshops, involved shaping materials including linen, cork, and wood into forms that balanced visual expression with acoustic performance. The wide-open mouths of tragic and comic masks were not merely expressive. Their shape and size affected how sound projected outward. Thanos Vovolis, a contemporary Greek mask maker and researcher, has demonstrated through experimental reconstruction that the mask acts as a resonator for the entire head, altering vocal quality and projection in ways that a bare face cannot achieve.

## The Bronze Vases

The acoustic engineering extended beyond the masks themselves. The Roman architect Vitruvius, writing in the 1st century BCE, described how Greek theaters incorporated bronze resonating vessels placed in niches throughout the seating area. These vessels were tuned to specific musical intervals, a fourth, a fifth, and up through the octave, and were calculated mathematically according to the theater's size. They functioned as acoustic amplifiers for the space itself, reinforcing the frequencies projected by the masked performers below.

The combination of mask acoustics, theater geometry, and tuned bronze resonators created an integrated sound system designed from first principles. Each element was calibrated to the others. The masks projected. The theater's curved stone seating focused. The bronze vessels reinforced.

## The Craft That Vanished

No original Greek theatrical mask survives. The materials, linen and organic adhesives, wood and cork, were perishable. We have terracotta miniatures, vase paintings, and written descriptions. We have the theaters themselves, their stone geometry intact. But the masks, and the specialized knowledge of how to build them for both dramatic expression and acoustic function, disappeared as live theatrical performance declined under late Roman and early Christian rule. Modern reconstructions can approximate the shapes. Replicating the acoustic craft, refined over centuries of continuous practice in active performance spaces, requires knowledge that was never written down.`,
  quickFacts: {
    'Greek Name': 'Personae (masks)',
    'Theater Capacity': '14,000-17,000 seats (Epidaurus, Athens)',
    'Acoustic Boost': '3-5 dB in speech-critical frequencies',
    'Materials': 'Linen, cork, wood, organic adhesives',
    'Bronze Vessels': 'Tuned resonators placed in theater seating (Vitruvius)',
    'Surviving Examples': 'None (only terracotta miniatures and vase paintings)',
    'Key Source': 'Vitruvius, De Architectura (1st century BCE)',
  },
  connections: [
    { slug: 'greek-music-modes', relationship: 'Both represent lost acoustic arts of the ancient Greek performance tradition, designed for spaces and audiences that no longer exist' },
    { slug: 'stonehenge-acoustics', relationship: 'Both are ancient acoustic environments where the built space was engineered to shape sound in ways we can measure but not fully reconstruct' },
  ],
  sources: [
    { title: 'The Sound Effect of Ancient Greek Theatrical Masks', author: 'Fotios Kontomichos et al.', year: 2014, url: 'https://quod.lib.umich.edu/i/icmc/bbp2372.2014.220' },
    { title: 'De Architectura, Book V', author: 'Vitruvius', year: -25 },
    { title: 'The Acoustics and Acoustics Design of the Greek Theatre', author: 'Nico Declercq & Cindy Dekeyser', year: 2007 },
  ],
};
