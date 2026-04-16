import type { Entry } from '../../types';

export const vikingSunstone: Entry = {
  slug: 'viking-sunstone',
  name: 'Viking Sunstone Navigation',
  tagline: 'Norse sailors found the sun through fog and cloud using crystals of light. The technique worked. Then the compass made it unnecessary.',
  category: 'technology',
  subcategory: 'Navigation',
  lastKnownYear: '~1200 CE',
  lastKnownLocation: 'Scandinavia and the North Atlantic',
  coordinates: [64.15, -21.95],
  region: 'Northern Europe',
  status: 'extinct',
  cause: 'Introduction of the magnetic compass and decline of traditional Norse seafaring culture',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Finding the Sun in the Fog

The Norse sagas mention a mysterious object called a "sunstone" (solarssteinn) that could locate the sun even when it was hidden behind clouds or fog. For centuries, scholars treated these references as mythological embellishment. Viking navigation of the North Atlantic, from Norway to Iceland to Greenland to Vinland, was already remarkable. The idea that they possessed a crystal that could see through overcast skies seemed too convenient to be real.

Then in 1967, the Danish archaeologist Thorkild Ramskou proposed that the sunstones were calcite crystals, specifically Iceland spar, a transparent form of calcite that exhibits a property called birefringence. When you look through a calcite crystal at the sky, it splits incoming light into two beams. By rotating the crystal until the two beams are equal in brightness, you can determine the direction of polarization of the skylight, which points back toward the sun, even when the sun itself is invisible.

## The Science Holds Up

Modern experimental research has confirmed that the technique works. Studies published in the Proceedings of the Royal Society and other journals have demonstrated that calcite, and also cordierite and tourmaline, can be used to locate the sun to within a few degrees of accuracy under overcast and twilight conditions common in the North Atlantic. A 2011 study by Ropars and colleagues showed that a calcite crystal could determine solar position with remarkable precision even under heavy cloud cover.

An Elizabethan-era shipwreck off the Channel Islands, the Alderney wreck dating to around 1592, yielded a calcite crystal found near navigation instruments, suggesting that the practice may have persisted in some form well beyond the Viking Age. But the specific Norse tradition of sunstone navigation, including which minerals to select, how to prepare them, and how to integrate their readings with other navigational cues like wave patterns and bird flight, was never codified in writing.

## Lost by Obsolescence

The magnetic compass reached Northern Europe by the late twelfth century, and its advantages were obvious: it worked in any weather, required no skill in crystal optics, and gave consistent directional readings. The sunstone was not suppressed or forgotten through catastrophe. It was simply replaced by a superior technology. The knowledge of how to use it, which crystals were best, and how to read the polarization patterns in different sky conditions was practical knowledge held by pilots and passed through apprenticeship. When the compass made the skill unnecessary, the apprenticeship ended, and the knowledge dissipated within a generation or two.`,
  quickFacts: {
    'Mineral Used': 'Iceland spar (calcite), possibly cordierite or tourmaline',
    'Optical Principle': 'Birefringence (light polarization)',
    'Accuracy': 'Within a few degrees of solar position',
    'Saga References': 'Multiple, including the saga of King Olaf',
    'Scientific Confirmation': 'Ropars et al., 2011',
    'Archaeological Evidence': 'Calcite crystal from Alderney wreck (~1592)',
    'Replaced By': 'Magnetic compass, ~12th-13th century',
  },
  connections: [
    { slug: 'marshallese-navigation', relationship: 'Both are traditional navigation systems that used natural phenomena invisible to the untrained eye, each validated by modern science long after the practice declined' },
    { slug: 'polynesian-wayfinding', relationship: 'Both are non-instrumental navigation traditions of seafaring peoples, relying on environmental observation rather than mechanical devices' },
  ],
  sources: [
    { title: 'Solstenen', author: 'Thorkild Ramskou', year: 1967 },
    { title: 'A depolarizer as a possible precise sunstone for Viking navigation by polarized skylight', author: 'Guy Ropars et al.', year: 2011, url: 'https://doi.org/10.1098/rspa.2011.0369' },
    { title: 'Vikings, Sunstones, and Medieval Navigation', author: 'Curt Roslund and Claes Beckman', year: 1994 },
    { title: 'The Viking Art of War', author: 'Paddy Griffith', year: 1995 },
  ],
};
