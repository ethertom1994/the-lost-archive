import type { Entry } from '../../types';

export const lycurgusCup: Entry = {
  slug: 'lycurgus-cup',
  name: 'The Lycurgus Cup',
  tagline: 'A Roman goblet that changes color with light. It contains gold nanoparticles 50 nanometers wide. They had nanotechnology 1,600 years early.',
  category: 'technology',
  subcategory: 'Ancient Nanotechnology',
  lastKnownYear: '~4th century CE',
  lastKnownLocation: 'Rome, Italy',
  coordinates: [41.90, 12.50],
  region: 'Europe',
  status: 'extinct',
  cause: 'The technique for embedding precisely sized metal nanoparticles in glass was never documented and was lost with Roman craftspeople',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Green in Front, Red Behind

Hold the Lycurgus Cup up to reflected light and it appears jade green, an opaque chalice carved with a scene of King Lycurgus entangled in vines. Move a light source behind it and the cup transforms — it glows a deep, translucent wine red, as if filled with blood. No paint, no coating, no trick of surface treatment. The color shift is embedded in the glass itself.

This cage cup, dated to the fourth century CE, sat in collections for centuries as a curiosity. Nobody could explain how Roman glassmakers achieved the effect. In 1990, researchers at the British Museum took a fragment and examined it under a transmission electron microscope. What they found rewrote assumptions about ancient manufacturing: the glass contained particles of gold and silver alloy, each approximately 50 to 100 nanometers in diameter, dispersed throughout the matrix at a ratio of roughly 330 parts per million.

## Accidental Nanotechnology

The color-changing effect is a phenomenon now understood as localized surface plasmon resonance. When light strikes the metal nanoparticles, their free electrons oscillate at frequencies determined by particle size, shape, and the ratio of gold to silver. In reflected light, the oscillation scatters green wavelengths. In transmitted light, it absorbs green and blue, allowing only red to pass through. The precise size of the particles — and their remarkably uniform distribution — is what produces the clean dichroic effect rather than a muddy brown.

Modern nanotechnologists can replicate this phenomenon, but only with electron beam lithography and tightly controlled laboratory conditions. The Roman glassmakers achieved it in a workshop furnace. The prevailing theory is that the nanoparticles were introduced by adding a small amount of colloidal gold and silver — possibly ground-up metal dust or filings — to the glass melt. But controlling particle size to the 50-nanometer range without modern instrumentation suggests either extraordinary empirical skill or a process whose controlling variables the makers themselves may not have fully understood.

## One Survivor

Only one complete Lycurgus Cup is known to exist. It resides in Room 41 of the British Museum, displayed in a case with both front and back lighting so visitors can see the dichroic shift. A few fragments of similarly dichroic Roman glass have been found at other sites, suggesting the technique was not unique to a single object. But the rarity of surviving examples indicates either that the technique was exceptionally difficult, that it was practiced by a very small number of workshops, or both.

No Roman text describes the process. No workshop has been identified. The Lycurgus Cup is a product of a manufacturing tradition that left behind a single masterpiece and no instructions — nanotechnology perfected, demonstrated, and lost, all before anyone had a word for what it was.`,
  quickFacts: {
    'Date': '~4th century CE (Roman)',
    'Location': 'British Museum, Room 41',
    'Effect': 'Dichroic — green in reflected light, red in transmitted light',
    'Mechanism': 'Localized surface plasmon resonance',
    'Nanoparticle Size': '~50-100 nm gold-silver alloy',
    'Metal Concentration': '~330 parts per million',
    'Known Examples': '1 complete cup, scattered fragments',
    'Modern Replication': 'Requires electron beam lithography',
  },
  connections: [
    { slug: 'damascus-steel', relationship: 'Both ancient materials whose nanoscale properties were achieved empirically and have proven difficult to replicate with modern science' },
    { slug: 'tyrian-purple', relationship: 'Both Roman-era manufacturing secrets involving precise chemical processes that vanished with their makers' },
  ],
  sources: [
    { title: 'The Lycurgus Cup — A Roman Nanotechnology', author: 'Ian Freestone et al.', year: 2007, url: 'https://doi.org/10.1007/s00339-007-4070-1' },
    { title: 'Gold Nanoparticles in the Lycurgus Cup', author: 'David J. Barber & Ian C. Freestone', year: 1990 },
    { title: 'The Corning Museum of Glass: Roman Cage Cups', author: 'David Whitehouse', year: 2001 },
    { title: 'Plasmonics: From Lycurgus Cup to Modern Sensors', author: 'Stefan A. Maier', year: 2007 },
  ],
  relatedMedia: [
    { type: 'museum', title: 'Lycurgus Cup - British Museum (Room 41)', url: 'https://www.britishmuseum.org/collection/object/H_1958-1202-1', description: 'The dichroic glass cup displayed in the British Museum\'s Roman gallery' },
  ],
};
