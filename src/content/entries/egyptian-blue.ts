import type { Entry } from '../../types';

export const egyptianBlue: Entry = {
  slug: 'egyptian-blue',
  name: 'Egyptian Blue',
  tagline: 'The oldest synthetic pigment on Earth glows invisibly in the infrared — a 5,000-year-old material with properties modern technology is only now learning to exploit.',
  category: 'material',
  subcategory: 'Pigment',
  lastKnownYear: '~800',
  lastKnownLocation: 'Mediterranean Basin',
  coordinates: [29.98, 31.13],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Production knowledge gradually lost after the fall of the Roman Empire; replaced by cheaper and more widely available alternatives',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The First Synthetic Color

Five thousand years ago, Egyptian artisans accomplished something unprecedented: they created a color that did not exist in nature. By heating a precise mixture of silica, lime, copper, and an alkali flux to temperatures between 850 and 1,000 degrees Celsius, they produced calcium copper silicate — a vivid blue compound now known as Egyptian blue, or cuprorivaite. It was the world's first synthetic pigment, and it would dominate the ancient Mediterranean for three millennia.

Egyptian blue appeared on tomb walls, coffins, statues, and pottery from the Old Kingdom through the Roman Empire. The Greeks adopted it and called it kyanos. Romans manufactured it at scale in factories at Pozzuoli near Naples, where Vitruvius documented the production process. It was traded across the ancient world, a luxury good that marked status and sacred significance.

## The Invisible Glow

In 2009, researchers at the British Museum discovered something startling. When Egyptian blue is illuminated with red light, it emits powerful near-infrared fluorescence at a wavelength of approximately 910 nanometers — invisible to the human eye but easily detected by cameras. This fluorescence is remarkably strong, far exceeding that of most synthetic fluorescent compounds. The ancient pigment, it turned out, had physical properties that no one had observed for five thousand years because no one had the instruments to see them.

This near-infrared emission has immediate practical applications. It is useful for telecommunications signal amplification, biomedical imaging, anti-counterfeiting technology, and remote sensing. Egyptian blue nanosheets — the pigment exfoliated to atomic-scale thickness — fluoresce even more intensely, opening possibilities in quantum sensing and fingerprint detection.

## The Lost Precision

Despite knowing the ingredients, modern recreation of Egyptian blue has proven surprisingly difficult. In 2024, a comprehensive study reproduced twelve historical variants of the pigment and found that small differences in firing temperature, duration, and raw material composition produced dramatically different results. Some batches yielded brilliant blue; others produced dull greenish compounds or failed entirely. The ancient Egyptians and Romans had clearly developed precise empirical knowledge of the production parameters — knowledge transmitted through workshop traditions that left little written record.

The pigment gradually disappeared from use after the fall of the Roman Empire. The workshop traditions that encoded the critical production parameters — the exact firing temperatures, the specific mineral sources, the timing — broke down as Roman industrial infrastructure collapsed. By the ninth century, Egyptian blue had vanished from the artisan's palette, replaced by ultramarine from lapis lazuli and later by smalt and synthetic blues.

## Ancient Nanotechnology

The fluorescence of Egyptian blue was not designed by its ancient makers — they had no concept of infrared radiation. But the crystalline structure they created through empirical refinement happened to produce a material with properties that align precisely with twenty-first-century technological needs. A five-thousand-year-old pigment, mixed by hand and fired in ancient kilns, turns out to be a nanomaterial of genuine modern utility. The ancient artisans were, without knowing it, among humanity's first nanotechnologists.`,
  quickFacts: {
    'Age': '~5,000 years, oldest known synthetic pigment',
    'Chemical Name': 'Calcium copper silicate (cuprorivaite)',
    'Ingredients': 'Silica, lime, copper, alkali flux',
    'Firing Temperature': '850-1,000 degrees Celsius',
    'NIR Fluorescence': '~910 nm wavelength, discovered 2009',
    'Modern Applications': 'Biomedical imaging, anti-counterfeiting, telecommunications',
    '2024 Finding': '12 variants recreated; small process changes yield dramatically different results',
  },
  connections: [
    { slug: 'folium', relationship: 'Both are ancient pigments with remarkable chemical properties that modern science took centuries to understand' },
    { slug: 'maya-blue', relationship: 'Both are ancient blue pigments with exceptional durability and chemical sophistication that prefigured modern materials science' },
    { slug: 'han-purple', relationship: 'Both are ancient synthetic pigments with extraordinary physical properties — Han purple exhibits quantum effects, Egyptian blue fluoresces in infrared' },
    { slug: 'roman-concrete', relationship: 'Both are Roman-era materials whose precise production parameters, transmitted through workshop tradition, were lost with the empire' },
  ],
  sources: [
    { title: 'Egyptian Blue: The Colour of Technology', author: 'Heinz Berke', year: 2007, url: 'https://doi.org/10.1002/chem.200700811' },
    { title: 'Photoluminescence of Egyptian Blue: A New Spectroscopic Tool for Monitoring Environmental Changes', author: 'Giovanni Verri', year: 2009 },
    { title: 'Egyptian blue: A thousand years of practice and knowledge transmission', author: 'Marine Cotte et al.', year: 2024 },
  ],
  relatedMedia: [
    { type: 'video', title: 'Egyptian Blue: The Colour Lost and Found', url: 'https://www.youtube.com/watch?v=GCbLIU8mPGQ', description: 'British Museum demonstration of Egyptian blue near-infrared fluorescence' },
  ],
};
