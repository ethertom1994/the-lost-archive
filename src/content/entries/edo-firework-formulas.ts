import type { Entry } from '../../types';

export const edoFireworkFormulas: Entry = {
  slug: 'edo-firework-formulas',
  name: 'Edo-Period Firework Formulas',
  tagline: 'The kagiya and tamaya houses guarded their formulas like state secrets. When the houses fell, the recipes burned with them.',
  category: 'technology',
  subcategory: 'Pyrotechnics',
  lastKnownYear: '~1843',
  lastKnownLocation: 'Edo (modern Tokyo), Japan',
  coordinates: [35.69, 139.69],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Closely guarded trade secrets were lost when firework houses closed or were destroyed by fire; no written formulas survived',
  imageUrl: undefined,
  body: `## The Flower of Fire

Japanese fireworks, hanabi, literally meaning fire flowers, reached their artistic peak during the Edo period (1603-1868). Two rival houses dominated the craft in Edo: the Kagiya, founded in 1659, and the Tamaya, established in 1810 as a branch of the Kagiya. Their annual competition on the Sumida River became one of the great cultural events of Edo-period Japan, drawing crowds of hundreds of thousands and inspiring ukiyo-e woodblock prints, poetry, and festival traditions that persist to this day.

The chemical compositions that produced the colors, effects, and distinctive characteristics of Edo-period hanabi were closely guarded trade secrets. Unlike European fireworks of the same era, which relied primarily on charcoal, sulfur, and potassium nitrate with metallic salts for color, Japanese pyrotechnicians developed formulas that emphasized the aesthetic qualities valued in Japanese culture: the slow, spherical bloom of a chrysanthemum burst, the delicate trailing sparks of a willow effect, the precise symmetry of a peony shell.

## What Was Lost

The Tamaya house was dissolved in 1843 after a catastrophic fire, attributed to their operations, destroyed a large section of Edo. Their formulas, held only by the master pyrotechnicians of the house, were never transmitted to another lineage. The Kagiya survived into the modern era but the transition from traditional to industrial chemistry in the Meiji period (1868-1912) rendered many of the old formulas obsolete or incomprehensible without their original context.

Edo-period fireworks used a different chemical palette than modern pyrotechnics. The specific metal compounds, mineral additives, and binding agents available in pre-industrial Japan produced colors and effects that cannot be precisely replicated with modern materials. Historical accounts describe colors that witnesses called uniquely Japanese: specific shades of orange, pale green, and silver-white produced by combinations of ingredients sourced from particular mines and processed through proprietary methods.

## Modern Hanabi

Contemporary Japanese fireworks are widely considered the finest in the world, and the annual Sumida River display continues the tradition begun by the Kagiya and Tamaya. But modern hanabi use strontium, barium, and copper compounds developed through nineteenth and twentieth century chemistry. The color palette is broader and brighter than anything available to Edo-period artisans, but it is a different palette. The specific hues and effects that spectators along the Sumida River saw in the eighteenth century, the particular oranges and silvers that ukiyo-e artists attempted to capture in woodblock prints, are no longer producible. The formulas that created them were secrets, and they were kept perfectly: so perfectly that no one alive possesses them.`,
  quickFacts: {
    'Term': 'Hanabi (fire flowers)',
    'Key Houses': 'Kagiya (est. 1659), Tamaya (est. 1810)',
    'Rivalry Venue': 'Sumida River, Edo (Tokyo)',
    'Tamaya Dissolved': '1843, after a devastating fire',
    'Chemical Basis': 'Pre-industrial mineral compounds, now obsolete',
    'Transmission': 'Oral, master to apprentice, within houses',
    'Modern Chemistry': 'Different compounds produce different colors',
    'Legacy': 'Sumida River Fireworks Festival continues annually',
  },
  connections: [
    { slug: 'han-purple', relationship: 'Both are lost chemical formulations from East Asian traditions whose exact compositions died with their makers' },
    { slug: 'egyptian-blue', relationship: 'Both are lost color-production techniques requiring precise chemical knowledge that was transmitted orally and lost when transmission chains broke' },
  ],
  sources: [
    { title: 'Hanabi: The Art of the Japanese Firework', author: 'Takeo Shimizu', year: 1981 },
    { title: 'Fireworks: The Art, Science, and Technique', author: 'Takeo Shimizu', year: 1996 },
    { title: 'The Culture of Japan as Seen through Its Leisure', author: 'Sabine Fruhstuck and Wolfram Manzenreiter', year: 2007 },
  ],
};
