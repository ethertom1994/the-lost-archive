import type { Entry } from '../../types';

export const hangingGardens: Entry = {
  slug: 'hanging-gardens',
  name: 'The Hanging Gardens of Babylon',
  tagline: 'One of the Seven Wonders. No archaeological evidence has ever been found. Some scholars now believe they were in a completely different city. We may have been looking in the wrong place for 2,500 years.',
  category: 'place',
  subcategory: 'Unverified Wonders',
  lastKnownYear: '600 BCE',
  lastKnownLocation: 'Traditionally Babylon (modern Iraq); possibly Nineveh (modern Mosul, Iraq)',
  coordinates: [32.54, 44.42],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Destruction through neglect, earthquake, or deliberate demolition, compounded by possible misidentification of location',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Wonder Nobody Can Find

The Hanging Gardens of Babylon are the only one of the Seven Wonders of the Ancient World whose existence has never been confirmed by archaeology. The Pyramid of Giza stands. The ruins of the Temple of Artemis at Ephesus have been excavated. The base of the Colossus of Rhodes has been identified. But decades of excavation at the site of ancient Babylon, near modern Hillah in Iraq, have found no trace of the gardens.

Ancient descriptions are vivid but secondhand. Berossus, a Babylonian priest writing around 290 BCE, described them as terraced gardens built by King Nebuchadnezzar II for his wife, who missed the green hills of her homeland in Media. Diodorus Siculus described them as rising in tiers like a theater, irrigated by screws that pumped water from the Euphrates to the top. Strabo described them as four acres of gardens elevated on stone arches.

None of these writers saw the gardens personally. They were all writing centuries after the gardens supposedly existed.

## The Nineveh Theory

In 2013, Oxford Assyriologist Stephanie Dalley published a provocative argument: the Hanging Gardens were real, but they weren't in Babylon. They were in Nineveh, the Assyrian capital about 300 miles to the north, and they were built not by Nebuchadnezzar but by King Sennacherib around 700 BCE, a century earlier.

Dalley's evidence is intriguing. Sennacherib's own inscriptions describe elaborate gardens at Nineveh, built on terraces and irrigated by a sophisticated aqueduct system. Archaeological remains of this aqueduct, with its precisely cut stones and advanced engineering, have been found at Jerwan, north of Nineveh. Sennacherib used Archimedes-type water screws, matching the ancient descriptions. And Nineveh was sometimes called "Old Babylon" in ancient texts, a name confusion that could explain how the gardens were attributed to the wrong city.

## The Empty Dig

German archaeologist Robert Koldewey excavated Babylon extensively from 1899 to 1917. He found the Ishtar Gate, the Processional Way, the ziggurat foundations, and the palace of Nebuchadnezzar. He found no gardens. He identified a vaulted stone structure in the northeast corner of the palace as a possible garden foundation, but the identification is disputed. The structure has no water supply system and is far too small to match the ancient descriptions.

Later excavations by Iraqi and international teams found nothing further. If the Hanging Gardens existed at Babylon, they left no archaeological trace, which is difficult to explain for a structure described as one of the largest and most impressive in the ancient world.

## A Wonder Made of Words

The Hanging Gardens may be the most famous structure that never existed, or the most famous structure that existed somewhere else under someone else's name, or a real place that has simply not been found yet. All three possibilities remain open. What is certain is that for 2,500 years, the Hanging Gardens have been listed among humanity's greatest achievements, and no one has been able to point to where they stood. They are a wonder built entirely of descriptions, a garden that grows only in text.`,
  quickFacts: {
    'Traditional Attribution': 'Nebuchadnezzar II, Babylon, ~600 BCE',
    'Alternative Theory': 'Sennacherib, Nineveh, ~700 BCE (Stephanie Dalley, 2013)',
    'Archaeological Evidence': 'None found at Babylon despite extensive excavation',
    'Key Descriptions': 'Berossus, Diodorus Siculus, Strabo (all secondhand)',
    'Status Among Seven Wonders': 'The only one never archaeologically confirmed',
    'Most Extensive Excavation': 'Robert Koldewey, 1899-1917',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both are legendary structures of the ancient world whose full scope may never be known' },
    { slug: 'doggerland', relationship: 'Both are places that exist primarily in evidence and reconstruction, their physical reality now invisible' },
  ],
  sources: [
    { title: 'The Mystery of the Hanging Garden of Babylon', author: 'Stephanie Dalley', year: 2013 },
    { title: 'The Excavations at Babylon', author: 'Robert Koldewey', year: 1914 },
    { title: 'The Seven Wonders of the Ancient World', author: 'Peter Clayton and Martin Price', year: 1988 },
  ],
};
