import type { Entry } from '../../types';

export const indianYellow: Entry = {
  slug: 'indian-yellow',
  name: 'Indian Yellow',
  tagline: 'A luminous pigment made from the urine of mango-fed cows, so improbable that chemists refused to believe it for over a century.',
  category: 'material',
  subcategory: 'Pigments',
  lastKnownYear: '~1908',
  lastKnownLocation: 'Monghyr, Bihar, India',
  coordinates: [25.37, 86.47],
  region: 'Asia',
  status: 'extinct',
  cause: 'Banned on animal cruelty grounds; cows fed exclusively mango leaves suffered severe malnutrition',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Color That Glowed

Indian Yellow possessed a quality that no other pigment could replicate. It was warm, translucent, and fluorescent, catching and holding light in a way that made painted surfaces appear to glow from within. J.M.W. Turner used it to render his incandescent sunsets. Vincent van Gogh relied on it for the radiant yellows of his Arles paintings. In the hands of Mughal miniaturists, it gave robes and flowers an inner luminosity that centuries of aging have not dimmed.

The pigment arrived in European markets as dense, foul-smelling balls of dried yellow matter, shipped from India under the trade name "purree" or "piuri." It was ground, washed, and bound into oil or watercolor. Artists prized its unique warmth and transparency. But where it actually came from remained a mystery that painters, chemists, and art historians argued about for generations.

## The Improbable Truth

The origin story was so bizarre that serious scientists dismissed it as myth. The pigment was made by feeding cows nothing but mango leaves. This exclusive diet, nutritionally ruinous to the animals, caused them to produce urine of an intensely deep yellow color. The urine was collected, evaporated in earthen pots, and dried into balls for export. The active compound, a magnesium salt of euxanthic acid, was concentrated by the cows' kidneys as they processed the mango tannins.

In 1883, T.N. Mukharji, a Bengali civil servant, traveled to the village of Monghyr in Bihar and documented the process firsthand for the Journal of the Society of Arts. He described emaciated cows tethered in yards, fed bundles of mango leaves and nothing else, their urine channeled into collection vessels. The animals were visibly malnourished, their ribs protruding.

## The Ban and the Doubt

Around 1908, the practice was prohibited under animal cruelty regulations. The Bengal government banned the trade, and the pigment vanished from the market. Synthetic alternatives appeared, but none possessed the original's distinctive fluorescence and transparency.

What followed was remarkable. Despite Mukharji's detailed eyewitness account, the origin story was widely disbelieved throughout the twentieth century. Art historians and pigment scholars dismissed the cow-urine explanation as folklore, proposing alternatives involving plant extracts or mineral sources. The debate persisted for over a hundred years.

## Confirmed at Last

In 2018, researchers using advanced spectroscopic analysis of historical Indian Yellow samples finally confirmed the presence of euxanthic acid and its magnesium salt, compounds that can only form through bovine metabolism of mango leaf compounds. The chemical fingerprint was unmistakable. The improbable story was true: one of art history's most beloved pigments was, in fact, crystallized cow urine.

No synthetic substitute has replicated Indian Yellow's exact optical properties. Modern "Indian Yellow" paints are mixtures of synthetic dyes that approximate the hue but lack the original's fluorescent warmth. The color that lit Turner's skies and Van Gogh's sunflowers remains, in its authentic form, irreplaceable.`,
  quickFacts: {
    'Chemical Compound': 'Magnesium salt of euxanthic acid',
    'Source': 'Urine of cows fed exclusively mango leaves',
    'Production Center': 'Monghyr (Munger), Bihar, India',
    'Notable Users': 'J.M.W. Turner, Vincent van Gogh, Mughal miniaturists',
    'Banned': '~1908 under Bengal animal cruelty regulations',
    'Origin Confirmed': '2018 spectroscopic analysis',
    'Key Property': 'Natural fluorescence and exceptional translucency',
  },
  connections: [
    { slug: 'mummy-brown', relationship: 'Both were artist pigments derived from ethically troubling organic sources, one from human remains, the other from animal suffering' },
    { slug: 'tyrian-purple', relationship: 'Both were prized pigments extracted from animal sources through labor-intensive processes that modern production cannot replicate' },
    { slug: 'han-purple', relationship: 'Both are lost pigments whose exact chemical composition puzzled researchers for generations before modern analysis revealed their true nature' },
  ],
  sources: [
    { title: 'Piuri or Indian Yellow', author: 'T.N. Mukharji', year: 1883, url: 'https://doi.org/10.1039/CT8834300528' },
    { title: 'Indian Yellow', author: 'Victoria Finlay', year: 2002 },
    { title: 'Artists\' Pigments: A Handbook of Their History and Characteristics, Vol. 4', author: 'Barbara H. Berrie', year: 2007 },
    { title: 'Analytical Chemistry of Indian Yellow', author: 'Ana Claro et al.', year: 2010 },
  ],
  relatedMedia: [
    { type: 'book', title: 'Color: A Natural History of the Palette', url: 'https://www.goodreads.com/book/show/118698.Color', description: 'Victoria Finlay traces the origins of pigments including Indian Yellow across continents' },
  ],
};
