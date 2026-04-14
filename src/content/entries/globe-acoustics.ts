import type { Entry } from '../../types';

export const globeAcoustics: Entry = {
  slug: 'globe-acoustics',
  name: 'Original Globe Theatre Acoustics',
  tagline: 'Shakespeare wrote for a specific room. That room burned in 1613. Every production since has been a guess.',
  category: 'sound',
  subcategory: 'Architectural Acoustics',
  lastKnownYear: 1613,
  lastKnownLocation: 'London, England',
  coordinates: [51.508, -0.097],
  region: 'Europe',
  status: 'extinct',
  cause: 'Fire in 1613 destroyed the original theatre; the rebuilt Globe and modern reconstruction cannot replicate the original acoustic properties',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Written for the Room

William Shakespeare did not write plays for the ages. He wrote them for a specific building on the south bank of the Thames, a polygonal wooden amphitheatre called the Globe, built in 1599 from the dismantled timbers of an older playhouse called simply The Theatre. The oak frame, the lime-and-horsehair plaster, the thatched roof over the galleries, the open yard exposed to the sky, the three thousand bodies packed into a space roughly 30 meters across -- all of this was the instrument his words were designed to play.

The acoustics of the original Globe were not incidental. They were the medium. An actor standing on the thrust stage could be heard clearly in the highest gallery without raising his voice, because the geometry of the wooden galleries created a series of reflecting surfaces that distributed sound with remarkable evenness. The plaster-and-lath walls absorbed certain frequencies while reinforcing others. The thatch dampened rain noise. The audience themselves -- wool and linen, body heat, breath -- acted as acoustic treatment, absorbing reflections that would otherwise muddy the sound.

## The Fire

On June 29, 1613, during a performance of Henry VIII, a theatrical cannon set the thatched roof alight. The Globe burned to the ground in under two hours. No one was killed, but the building was destroyed completely. A second Globe was rebuilt on the same site within a year, but with a tiled roof instead of thatch, plastered walls of different composition, and timber from different sources. Contemporary accounts noted it was grander, but no one recorded whether it sounded the same. Almost certainly it did not.

## The Modern Approximation

In 1997, Sam Wanamaker's reconstruction of the Globe opened near the original site. It is a remarkable achievement of historical architecture, but it is an approximation. The oak was kiln-dried, not centuries-old reclaimed timber. The plaster uses modern lime. The thatch is water reed from Norfolk, not the long straw that would have been available in 1599. Acoustic measurements of the reconstruction show impressive natural amplification, but researchers at the University of York and other institutions have documented that the resonant frequencies, reverberation times, and frequency absorption profiles differ from what computational models suggest the original would have produced.

## The Sound That Shaped the Words

What makes this loss significant is not nostalgia for old buildings. It is that Shakespeare's dramatic technique -- his use of soliloquy, aside, whisper, and shout -- was calibrated to a specific acoustic environment. The intimacy of the soliloquies in Hamlet, the crowd dynamics of Julius Caesar, the storm scenes in King Lear were all written by a man who knew exactly how sound behaved in his theatre. He knew where an actor could whisper and be heard, where a shout would ring, where silence would land. The words survive. The room they were shaped for does not.`,
  quickFacts: {
    'Original Built': '1599, from timbers of The Theatre (1576)',
    'Destroyed': 'June 29, 1613, by fire during Henry VIII',
    'Capacity': 'Approximately 3,000',
    'Structure': 'Polygonal oak frame, lime plaster, thatched roof',
    'Modern Reconstruction': '1997, near original Bankside site',
    'Key Difference': 'Different timber, plaster, thatch, and audience density',
  },
  connections: [
    { slug: 'stradivarius-secret', relationship: 'Both represent acoustic properties embedded in materials and construction methods that modern science can analyze but not fully replicate' },
    { slug: 'castrato-voice', relationship: 'Both are lost sound experiences from European performance history that shaped the art created for them' },
  ],
  sources: [
    { title: "Shakespeare's Globe: A Theatrical Experiment", author: 'Christie Carson and Farah Karim-Cooper', year: 2008 },
    { title: 'The Acoustics of the Globe Theatre', author: 'Waller, M.D.', year: 2002 },
    { title: "Rebuilding Shakespeare's Globe", author: 'Andrew Gurr and John Orrell', year: 1989 },
    { title: 'Acoustic Measurements in the New Globe Theatre', author: 'Mike Barron', year: 1999 },
  ],
};
