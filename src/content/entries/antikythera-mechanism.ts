import type { Entry } from '../../types';

export const antikytheraMechanism: Entry = {
  slug: 'antikythera-mechanism',
  name: 'The Antikythera Mechanism',
  tagline: 'A 2,000-year-old analog computer. It predicted eclipses and tracked the Olympics. Nothing like it appeared again for 1,400 years.',
  category: 'technology',
  subcategory: 'Computing and Astronomy',
  lastKnownYear: '~60 BCE',
  lastKnownLocation: 'Antikythera shipwreck, Greece',
  coordinates: [35.86, 23.31],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The knowledge tradition that produced it was lost with the decline of the Hellenistic world',
  imageUrl: '/images/entries/antikythera-mechanism.jpg',
  imageCaption: 'The Antikythera mechanism, Fragment A, at the National Archaeological Museum, Athens',
  imageCredit: 'Marsyas/Wikimedia Commons, CC BY-SA 2.5',
  body: `## Raised from the Wreck

In 1901, sponge divers working off the coast of the Greek island of Antikythera discovered a Roman-era shipwreck dating to roughly 60 BCE. Among the bronze statues and marble sculptures recovered was a corroded lump of metal about the size of a shoebox. For decades, it sat in the National Archaeological Museum in Athens, its significance unrecognized. It looked like a formless mass of fused bronze gears.

In the 1950s, the historian Derek de Solla Price began studying the object with X-ray imaging. What he found changed our understanding of ancient technology. Inside the corroded shell was a complex mechanism of at least thirty interlocking bronze gears, precisely cut, forming an analog computer of astonishing sophistication.

## What It Could Do

The Antikythera mechanism was designed to model the motions of the sun, moon, and planets as understood by Greek astronomy. By turning a hand crank, the user could advance the mechanism through time, watching the positions of celestial bodies change on inscribed dials. The device could predict solar and lunar eclipses, track the irregular orbit of the moon (accounting for its elliptical path using an ingenious pin-and-slot gear arrangement), display the phases of the moon, and indicate the timing of the Panhellenic games, including the Olympics.

Modern CT scanning, conducted by the Antikythera Mechanism Research Project beginning in 2005, revealed inscriptions on the mechanism describing its functions in detail. The back of the device contained two spiral dials: one tracking the Metonic cycle (a 19-year period after which lunar phases recur on the same calendar dates) and another tracking the Saros cycle (an 18-year eclipse prediction cycle). The level of astronomical knowledge encoded in the device matched or exceeded what would not be achieved again in Europe until the Renaissance.

## The Missing Tradition

The most unsettling aspect of the Antikythera mechanism is not its existence but its isolation. We recovered one. The shipwreck preserved one example. But the mechanism's sophisticated gear trains imply a developed tradition of precision metalworking and mechanical engineering. A device this complex was not the first of its kind. It was the product of an established craft, refined over generations.

Cicero, writing in the first century BCE, described similar astronomical machines built by Archimedes and by the philosopher Posidonius. These references suggest that the mechanism found at Antikythera was not unique but representative of a class of instruments that existed in the Hellenistic world. How many were made? How many have rusted away on the seafloor or been melted down for their bronze?

## Fourteen Centuries of Silence

After the decline of the Hellenistic world, nothing approaching the Antikythera mechanism's complexity appeared in the Western historical record for roughly 1,400 years. The astronomical clocks of medieval Europe, beginning in the fourteenth century, are the next comparable devices, and they are considerably less sophisticated in their astronomical modeling.

The knowledge that produced the mechanism did not vanish in a single catastrophe. It eroded gradually, as the educational institutions, patronage networks, and craft workshops of the Greek-speaking world contracted over centuries. The gears stopped turning not because anyone decided they should, but because the civilization that understood them could no longer sustain itself.`,
  quickFacts: {
    'Date of Construction': '~150-100 BCE',
    'Shipwreck Date': '~60 BCE',
    'Discovered': '1901 by Greek sponge divers',
    'Location': 'Off Antikythera island, Greece',
    'Gear Count': '30+ interlocking bronze gears',
    'Functions': 'Eclipse prediction, lunar/solar tracking, Olympic calendar',
    'Key Mechanism': 'Pin-and-slot gear for lunar anomaly',
    'Next Comparable Device': '~14th century CE astronomical clocks',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent the intellectual achievement of the Hellenistic world, a tradition of knowledge that did not survive antiquity intact' },
    { slug: 'roman-concrete', relationship: 'Both demonstrate that ancient engineering achieved sophistication that would not be matched for over a millennium' },
  ],
  sources: [
    { title: 'Gears from the Greeks: The Antikythera Mechanism', author: 'Derek de Solla Price', year: 1974 },
    { title: 'Decoding the Antikythera Mechanism', author: 'Tony Freeth et al.', year: 2006, url: 'https://doi.org/10.1038/nature05130' },
    { title: 'A Model of the Cosmos in the ancient Greek Antikythera Mechanism', author: 'Freeth & Jones', year: 2012 },
    { title: 'De Re Publica', author: 'Cicero', year: -54 },
  ],
  relatedMedia: [
    { type: 'museum', title: 'National Archaeological Museum, Athens', url: 'https://www.namuseum.gr/en/collection/o-michanismos-ton-antikythiron/', description: 'The mechanism is displayed in the museum\'s permanent collection' },
  ],
};
