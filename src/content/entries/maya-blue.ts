import type { Entry } from '../../types';

export const mayaBlue: Entry = {
  slug: 'maya-blue',
  name: 'Maya Blue',
  tagline: 'A vivid turquoise that survived a thousand years in tropical jungle without fading — because the Maya invented nanoencapsulation technology eight centuries before modern science.',
  category: 'material',
  subcategory: 'Pigment',
  lastKnownYear: '~1580',
  lastKnownLocation: 'Yucatan Peninsula, Mexico',
  coordinates: [20.68, -88.57],
  region: 'Central America',
  status: 'extinct',
  cause: 'Spanish colonial suppression of indigenous ritual practices and workshop traditions; knowledge of precise preparation process lost',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Color That Would Not Die

In the jungles of the Yucatan Peninsula, where tropical heat, humidity, and acidic soils destroy almost every human artifact within decades, one material has survived for over a millennium in vivid, undiminished color. Maya blue — a brilliant turquoise pigment found on murals, pottery, sculpture, and codices across the ancient Maya world — resists acids, alkalis, organic solvents, oxidation, and biological degradation with a stubbornness that baffled materials scientists for decades.

The murals at Bonampak, painted around 800 CE, still glow with Maya blue. Pottery vessels recovered from the Sacred Cenote at Chichen Itza, submerged in mineral-rich water for centuries, retain their turquoise surfaces intact. No other ancient pigment demonstrates this level of environmental resistance. Egyptian blue fades. Ultramarine degrades. Even modern synthetic pigments struggle in tropical conditions. Maya blue endures.

## A Nanocomposite in Clay

The secret, finally unraveled through decades of analytical chemistry, is that Maya blue is not a simple pigment but a nanocomposite — a material engineered at the molecular level. It consists of indigo dye molecules encapsulated within the nanoscale channels of palygorskite, a fibrous clay mineral. The indigo molecules fit precisely into the clay's tubular structure, where they are physically trapped and chemically protected from the environment.

This encapsulation is what gives Maya blue its extraordinary durability. Indigo alone is a fugitive dye that fades rapidly in sunlight. Palygorskite alone is a gray-white clay with no particular color. But when indigo is heated with palygorskite at precisely the right temperature — around 150 to 200 degrees Celsius — the dye molecules migrate into the clay channels and become locked in place. The result is a pigment that combines brilliant color with near-indestructibility.

## The Precision Problem

The temperature window is critical and narrow. Too little heat, and the indigo does not fully enter the clay channels, producing a weak, impermanent color. Too much heat, and the indigo molecules decompose. The Maya achieved the precise conditions required using copal incense fires during ritual ceremonies — a detail that long seemed like an irrelevant cultural footnote but proved to be technically essential.

Modern materials scientists did not develop comparable nanoencapsulation technology until the late twentieth century. The concept of trapping functional molecules within nanoporous host materials is now a significant field of research with applications in drug delivery, catalysis, and sensor technology. The Maya arrived at the same principle through empirical experimentation, centuries before the concept of a nanometer existed.

## Ritual and Chemistry

Maya blue was not an everyday pigment. It was sacred, associated with sacrifice, rain, and the god Chaak. Human sacrificial victims at Chichen Itza were painted with Maya blue before being cast into the Sacred Cenote. Ritual contexts required the pigment to be prepared in specific ceremonial conditions — conditions that, it now appears, coincided with the precise thermal parameters needed for successful nanoencapsulation.

When the Spanish conquered the Maya world in the sixteenth century, they suppressed indigenous religious practices, dismantled workshop traditions, and destroyed codices that might have contained preparation instructions. The ritual context in which Maya blue was produced was precisely the context the colonizers targeted for elimination. The pigment survived in the jungle. The knowledge of making it did not.`,
  quickFacts: {
    'Composition': 'Indigo dye nanoencapsulated in palygorskite clay',
    'Heating Temperature': '~150-200 degrees Celsius (narrow critical window)',
    'Durability': 'Resists acids, alkalis, solvents, biological degradation',
    'Age of Surviving Examples': '1,200+ years in tropical conditions',
    'Notable Sites': 'Bonampak murals, Chichen Itza Sacred Cenote',
    'Modern Parallel': 'Nanoencapsulation technology (developed late 20th century)',
    'Ritual Association': 'Sacred to rain god Chaak, used in sacrificial ceremonies',
  },
  connections: [
    { slug: 'egyptian-blue', relationship: 'Both are ancient synthetic pigments with extraordinary physical properties that prefigured modern materials science by millennia' },
    { slug: 'folium', relationship: 'Both are ancient pigments whose chemical secrets resisted modern analysis for decades before finally yielding to advanced techniques' },
    { slug: 'roman-concrete', relationship: 'Both are ancient materials with self-protecting properties that modern science struggles to replicate precisely' },
    { slug: 'aztec-chocolate', relationship: 'Both are Mesoamerican technologies whose production knowledge was disrupted by Spanish colonial suppression' },
  ],
  sources: [
    { title: 'The Maya Blue Pigment', author: 'Constantinos Doehne et al.', year: 2009 },
    { title: 'Maya Blue: An Updated Review', author: 'Antonio Domenech-Carbo et al.', year: 2013, url: 'https://doi.org/10.1016/j.jas.2013.08.003' },
    { title: 'Thermal and spectroscopic analysis of Maya Blue and its precursors', author: 'M. Sanchez del Rio et al.', year: 2006 },
  ],
  relatedMedia: [
    { type: 'article', title: 'Unravelling the Mystery of Maya Blue', url: 'https://www.science.org/content/article/unraveling-mystery-maya-blue', description: 'Science coverage of the nanocomposite discovery' },
  ],
};
