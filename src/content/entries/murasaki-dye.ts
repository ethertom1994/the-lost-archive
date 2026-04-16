import type { Entry } from '../../types';

export const murasakiDye: Entry = {
  slug: 'murasaki-dye',
  name: 'Murasaki',
  tagline: 'The purple of Japan, drawn from a stubborn root that took years to master. Synthetic dyes ended centuries of craft in a single generation.',
  category: 'material',
  subcategory: 'Dyes and Pigments',
  lastKnownYear: '~1890',
  lastKnownLocation: 'Kyoto, Japan',
  coordinates: [35.0, 135.8],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Replacement by cheap synthetic aniline dyes during the Meiji era industrialization',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Color of the Court

Murasaki, the Japanese word for purple, referred both to the color and to the dye extracted from the roots of the gromwell plant, Lithospermum erythrorhizon, known in Japanese as murasaki-gusa. For over a thousand years, this root-derived purple was among the most esteemed colors in Japanese culture. In the Heian court, purple ranked at the pinnacle of the color hierarchy, restricted by sumptuary law to the highest aristocratic ranks. The author of the greatest work of Japanese literature took her pen name from it: Murasaki Shikibu, Lady Purple.

The dye was extracted through a laborious process. Gromwell roots had to be cultivated for three to five years before they were mature enough to yield usable pigment. The roots were pounded and soaked, and the dye was fixed to silk using alum mordants and repeated dipping cycles. The precise shade depended on the age of the roots, the mineral content of the local water, the temperature during processing, and the number of immersion cycles. Master dyers in Kyoto could produce a range of purples from pale lavender to deep violet, each shade carrying specific aesthetic and social meaning.

## A Plant That Refused to Cooperate

Part of what made murasaki dye so precious was the difficulty of cultivating its source. Gromwell grew wild in well-drained, sandy soils across Japan, but it resisted transplantation and intensive farming. The plant required specific mycorrhizal relationships in the soil and was sensitive to drainage, sun exposure, and competing vegetation. Fields that produced excellent gromwell one decade could fail the next if soil conditions shifted. The knowledge of which sites produced the best roots, and how to maintain them, was held by farming families in specific regions and passed down as closely guarded expertise.

## The Meiji Extinction

When Japan opened to Western trade and technology during the Meiji Restoration beginning in 1868, synthetic aniline dyes flooded the market. These chemical dyes were cheap, consistent, and easy to apply. They could produce any shade of purple without years of root cultivation or weeks of painstaking dyeing. Within a generation, the traditional murasaki dyeing workshops of Kyoto closed. The farming families who grew gromwell lost their market and abandoned the crop. By the turn of the twentieth century, the living chain of knowledge connecting root to dye to cloth was effectively broken. A few artisan revivals exist today, but they work from fragmentary records rather than unbroken tradition, and the specific soil cultures and regional root varieties used by the old dyers are gone.`,
  quickFacts: {
    'Source Plant': 'Lithospermum erythrorhizon (gromwell)',
    'Active Compound': 'Shikonin and its derivatives',
    'Root Maturation': '3-5 years before harvest',
    'Cultural Peak': 'Heian period (794-1185 CE)',
    'Restricted To': 'Highest court ranks by sumptuary law',
    'Displaced By': 'Synthetic aniline dyes, ~1870s-1890s',
  },
  connections: [
    { slug: 'tyrian-purple', relationship: 'Both were prestigious purple dyes of their respective civilizations, both requiring enormous labor to produce, both rendered obsolete by synthetic chemistry' },
    { slug: 'indian-yellow', relationship: 'Both were traditional pigments dependent on specific biological processes and regional expertise, lost when industrial alternatives made them economically unviable' },
  ],
  sources: [
    { title: 'The Book of Silk', author: 'Philippa Scott', year: 1993 },
    { title: 'Japanese Costume and Textile Arts', author: 'Seiroku Noma', year: 1974 },
    { title: 'A History of Dyed Textiles', author: 'Stuart Robinson', year: 1969 },
    { title: 'The Colors of Japan', author: 'Sadao Hibi', year: 2000 },
  ],
};
