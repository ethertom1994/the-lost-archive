import type { Entry } from '../../types';

export const voyagerGoldenRecord: Entry = {
  slug: 'voyager-golden-record',
  name: 'The Voyager Golden Record',
  tagline: 'In 1977, we sent a portrait of Earth into space. Several of its languages and sounds have since gone extinct. The record outlived what it recorded.',
  category: 'culture',
  subcategory: 'Time Capsules',
  lastKnownYear: 1977,
  lastKnownLocation: 'Cape Canaveral, Florida, USA',
  coordinates: [28.39, -80.60],
  region: 'North America',
  status: 'functionally_extinct',
  cause: 'Several of the 55 languages, music traditions, and natural sounds recorded on the disc have since become extinct or critically endangered',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Message in a Bottle, Thrown Into an Ocean Without Shores

On August 20 and September 5, 1977, NASA launched Voyager 2 and Voyager 1 from Cape Canaveral. Each spacecraft carried an identical gold-plated copper phonograph record — 12 inches in diameter, designed to last a billion years in the vacuum of interstellar space. The records were curated by a committee chaired by Carl Sagan, with the explicit purpose of representing the entirety of human civilization and the natural world to any extraterrestrial intelligence that might encounter them.

The records contain 115 images encoded as audio signals, greetings spoken in 55 human languages, a 12-minute montage of sounds from Earth — including wind, thunder, birds, whales, a mother kissing her child, footsteps, heartbeats, and laughter — and 90 minutes of music ranging from Bach's Brandenburg Concerto No. 2 to Chuck Berry's "Johnny B. Goode," from a Navajo night chant to a Pygmy girls' initiation song from Zaire. Each record also carries an hour-long recording of the brainwaves of Ann Druyan, Sagan's future wife, as she meditated on the history of Earth and the experience of falling in love.

## The Languages That Went Quiet

Of the 55 languages recorded in the greeting sequence, several are now extinct or critically endangered. The Amoy dialect greeting represents a linguistic tradition under severe pressure from Mandarin standardization. The Hittite greeting — included as a gesture toward the deep past — was already a dead language when recorded, but its inclusion alongside living tongues now seems prescient. Languages that were endangered in 1977 have continued their decline. The committee's instinct to preserve these voices was, it turns out, more urgent than they knew.

The natural sounds fare no better. The song of the humpback whale, recorded by Roger Payne, represents a population that was near collapse in 1977 and has only partially recovered. The specific bird calls, insect sounds, and environmental audio captured for the record come from ecosystems that have been measurably degraded in the five decades since. The record preserves a sonic portrait of a planet that no longer sounds quite like that.

## Interstellar Archaeology

Both Voyager spacecraft have now left the solar system. Voyager 1, the faster of the two, crossed the heliopause in 2012 and is currently more than 24 billion kilometers from Earth, traveling at 17 kilometers per second. At this speed, it will pass within 1.6 light-years of the star Gliese 445 in approximately 40,000 years. The golden record will remain physically intact for at least a billion years, and potentially much longer.

This means the record has already outlasted some of what it contains. It is a time capsule that was obsolete before it left the solar system — not because the technology is outdated, but because the world it described has changed. Languages have died. Ecosystems have contracted. Musical traditions have been transformed or forgotten. The golden record is no longer a portrait of Earth. It is a portrait of Earth as it was on a specific set of days in 1977, preserved more faithfully in interstellar space than anywhere on the planet that created it.

The Voyager record is simultaneously humanity's most ambitious act of optimism — the belief that we are worth introducing to the cosmos — and an inadvertent memorial to the things we lost while the spacecraft was still within radio range.`,
  quickFacts: {
    'Launch Dates': 'August 20 and September 5, 1977',
    'Record Material': 'Gold-plated copper, 12-inch diameter',
    'Languages': '55 spoken greetings',
    'Music Tracks': '27 selections, 90 minutes',
    'Sound Montage': '12 minutes of Earth sounds',
    'Images': '115 encoded as audio signals',
    'Voyager 1 Distance': '24+ billion km from Earth (as of 2024)',
    'Expected Lifespan': '1+ billion years in interstellar vacuum',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Endangered languages like Eyak represent the kind of linguistic loss the record was unconsciously preserving against' },
    { slug: 'kauai-oo', relationship: 'Natural sounds on the record — birdsong, whale song — come from species and soundscapes that have since diminished or gone silent' },
  ],
  sources: [
    { title: 'Murmurs of Earth: The Voyager Interstellar Record', author: 'Carl Sagan et al.', year: 1978 },
    { title: 'The Voyager Record: A Transmission', author: 'Anthony Michael Morena', year: 2016 },
    { title: 'NASA Voyager: The Golden Record', year: 2024, url: 'https://voyager.jpl.nasa.gov/golden-record/' },
    { title: 'Songs of the Humpback Whale', author: 'Roger Payne', year: 1970 },
  ],
};
