import type { Entry } from '../../types';

export const foghornChorus: Entry = {
  slug: 'foghorn-chorus',
  name: 'The Foghorn Chorus',
  tagline: 'Before GPS, every harbor had a unique foghorn with its own pitch and rhythm. Sailors navigated by sound. The sea has gone silent.',
  category: 'sound',
  subcategory: 'Navigation Sounds',
  lastKnownYear: 2013,
  lastKnownLocation: 'Souter Lighthouse, Tyne and Wear, England (among the last decommissioned)',
  coordinates: [54.96, -1.37],
  region: 'Global',
  status: 'functionally_extinct',
  cause: 'GPS navigation made foghorns obsolete. Maritime authorities worldwide have been decommissioning fog signals since the 1990s as electronic navigation systems replaced acoustic aids.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Navigation by Ear

Before electronic navigation, fog was the mariner's greatest enemy. A ship lost in fog could run aground, collide with another vessel, or miss its harbor entirely. The solution was sound. Beginning in the early 19th century, coastal authorities installed fog signals — horns, bells, cannons, sirens, and eventually powerful electric or compressed-air foghorns — at every dangerous headland, harbor entrance, reef, and lightship.

Each foghorn had a unique "character": a specific combination of pitch, blast duration, and silence interval that identified it as surely as a fingerprint. A sailor hearing a two-second blast followed by an eighteen-second silence at a low E-flat knew exactly which headland he was passing. The Admiralty published charts listing every fog signal's characteristics. Experienced mariners could navigate blind, identifying their position by the overlapping sounds of multiple horns.

## The Acoustic Landscape

At its peak, the foghorn network created an extraordinary soundscape. In busy shipping channels like the English Channel, the Strait of Juan de Fuca, or the approach to San Francisco Bay, multiple foghorns would sound simultaneously during thick fog — a dissonant, mournful chorus that carried for miles across the water. Each horn was a voice: some deep and resonant (the diaphone horns, with their characteristic descending "grunt" at the end of each blast), some piercing and sharp (the reed horns), some wailing (the siren types).

The sounds became embedded in coastal culture. People who lived near foghorns complained about them but mourned their silence when they were removed. Writers, composers, and filmmakers used the foghorn as shorthand for isolation, danger, and the unknown. Ray Bradbury's 1951 short story "The Fog Horn" imagined a sea monster answering the call of a lighthouse horn, mistaking it for another of its kind.

## The Silence

GPS navigation, introduced for civilian maritime use in the 1990s, made foghorns technically unnecessary. A ship with GPS, radar, and AIS (Automatic Identification System) can navigate precisely in zero visibility. Maritime authorities — facing the cost of maintaining aging horn installations — began decommissioning fog signals worldwide. Trinity House, which manages aids to navigation around England and Wales, removed its last automated fog signal in 2013.

A few foghorns survive as heritage installations or in locations with exceptionally heavy small-boat traffic. But the working network — the layered, coordinated, continent-spanning system of sound that guided centuries of maritime commerce — is gone. The sea approaches that once announced themselves in bass notes and wailing chords are now silent, navigated by satellite signal instead of sound.`,
  quickFacts: {
    'First Fog Signals': 'Early 19th century (bells and cannons)',
    'Peak Period': '1900s-1980s',
    'Types': 'Diaphone, reed, siren, compressed air',
    'Range': 'Up to 8-10 nautical miles',
    'Made Obsolete By': 'GPS (civilian use from 1990s)',
    'UK Last Automated Signal': '2013 (Trinity House)',
    'Cultural References': 'Bradbury\'s "The Fog Horn" (1951)',
    'Sound Character': 'Unique pitch + blast/silence pattern per location',
  },
  connections: [
    { slug: 'lamplighter', relationship: 'Both human-scale navigation aids made obsolete by technology — light by electricity, sound by GPS' },
    { slug: 'knocker-upper', relationship: 'Both analog systems of waking/alerting people, replaced by technology and now forgotten' },
    { slug: 'concorde', relationship: 'Both transportation-era sounds that defined an era and then went silent' },
  ],
  sources: [
    { title: 'Foghorns', author: 'Jennifer Lucy Allan', year: 2020 },
    { title: 'History of Fog Signals', author: 'Trinity House', year: 2015 },
    { title: 'The Fog Horn (short story)', author: 'Ray Bradbury', year: 1951 },
    { title: 'Aids to Navigation Manual', author: 'U.S. Coast Guard', year: 2005 },
  ],
};
