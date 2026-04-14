import type { Entry } from '../../types';

export const hanPurple: Entry = {
  slug: 'han-purple',
  name: 'Han Purple',
  tagline: 'A synthetic pigment from 800 BCE China requiring 1,000°C temperatures. Production stopped around 220 CE. At extreme cold, it becomes two-dimensional. A 2,800-year-old pigment has quantum properties we cannot explain.',
  category: 'material',
  subcategory: 'Pigments',
  lastKnownYear: '~220 CE',
  lastKnownLocation: 'Han Dynasty China',
  coordinates: [34.26, 108.94],
  region: 'East Asia',
  status: 'extinct',
  cause: 'The specific production technique — involving precise temperature control, chemical ratios, and likely specific ore sources — was lost after the fall of the Han Dynasty',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Purple Emperor

The Terracotta Army was not always grey. When the clay warriors were first excavated in the 1970s, traces of vivid paint clung to their surfaces — reds, greens, blacks, and a striking purple-blue unlike any natural mineral pigment. Analysis revealed it was barium copper silicate (BaCuSi₂O₆), a synthetic compound that does not exist in nature. It had to be manufactured.

This pigment, now called Han purple (and its sister compound Han blue, BaCuSi₄O₁₀), was produced in China from approximately 800 BCE through the end of the Han Dynasty around 220 CE. Creating it required heating barium minerals, copper compounds, and quartz sand together at temperatures exceeding 1,000°C with precise chemical ratios. The process was sophisticated — comparable in complexity to glass-making or bronze-casting — and represents one of the oldest known examples of synthetic chemistry.

## The Lost Recipe

After the fall of the Han Dynasty, production of the purple pigment ceased. No written records of the manufacturing process survive. Modern chemists have recreated the compound by analyzing ancient samples and experimentally determining the required temperatures, raw materials, and firing conditions, but the specific process used by ancient Chinese artisans — their kilns, their ore sources, their techniques for achieving consistent color — remains unknown.

What is known is that the production required expertise that was not trivial. The temperature window is narrow. The ratio of barium to copper to silica must be precise. Too much of one ingredient produces blue instead of purple. Too little heat produces nothing useful. Whoever made Han purple had a deep working knowledge of high-temperature chemistry a millennium before the concept formally existed.

## The Quantum Surprise

In 2006, physicists at Stanford studying the magnetic properties of Han purple at extremely low temperatures discovered something astonishing. When cooled below 0.5 Kelvin (-272.65°C) in a strong magnetic field, the compound undergoes a phenomenon called Bose-Einstein condensation: its magnetic properties become effectively two-dimensional. The electrons, which normally move in all three spatial dimensions, become confined to flat planes, as if one dimension simply ceases to exist.

This is not a chemical curiosity — it is a fundamental quantum mechanical phenomenon, and Han purple is one of the very few known materials that exhibits it. A pigment invented by Bronze Age artisans to decorate clay soldiers turns out to be a quantum material of interest to modern condensed-matter physicists. The people who made it had no concept of quantum mechanics. They were trying to make purple.`,
  quickFacts: {
    'Chemical Formula': 'BaCuSi₂O₆ (barium copper silicate)',
    'Production Period': '~800 BCE - ~220 CE',
    'Temperature Required': '>1,000°C',
    'Found On': 'Terracotta Army, bronze vessels, lacquerware',
    'Natural Occurrence': 'Does not exist in nature (synthetic)',
    'Quantum Property': 'Bose-Einstein condensation at <0.5K',
    'Discovered At': 'Stanford Linear Accelerator Center (SLAC)',
    'Sister Compound': 'Han blue (BaCuSi₄O₁₀)',
  },
  connections: [
    { slug: 'tyrian-purple', relationship: 'Both ancient purple pigments of extraordinary value — one biological, one synthetic — both with lost production methods' },
    { slug: 'mummy-brown', relationship: 'Both historic pigments with surprising compositions and lost production chains' },
    { slug: 'roman-concrete', relationship: 'Both ancient materials whose exact manufacturing processes were lost and later revealed unexpected scientific properties' },
  ],
  sources: [
    { title: 'Han Purple: A 2,800-year-old synthetic pigment', author: 'Elisabeth FitzHugh & Lynda A. Zycherman', year: 1992 },
    { title: 'Bose-Einstein condensation in BaCuSi₂O₆', author: 'S. E. Sebastian et al., Nature', year: 2006 },
    { title: 'The Chemistry of Chinese Pigments', author: 'Liu et al.', year: 2007 },
    { title: 'Science and Civilisation in China', author: 'Joseph Needham', year: 1962 },
  ],
};
