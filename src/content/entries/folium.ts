import type { Entry } from '../../types';

export const folium: Entry = {
  slug: 'folium',
  name: 'Folium',
  tagline: 'A medieval blue pigment whose chemistry baffled scientists for a millennium — until 2020 revealed an entirely new class of blue compound.',
  category: 'material',
  subcategory: 'Pigment',
  lastKnownYear: '~1500',
  lastKnownLocation: 'Portugal',
  coordinates: [39.4, -8.22],
  region: 'Europe',
  status: 'extinct',
  cause: 'The printing press eliminated demand for illuminated manuscripts; extraction process forgotten even though source plant survives as a common weed',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Blue That Defied Chemistry

Medieval illuminated manuscripts glow with colors that have survived centuries: vermilion reds, gold leaf, deep ultramarine blues. Among these pigments was one that occupied a peculiar position — widely used, clearly documented in medieval recipe books, and yet completely mysterious to modern chemistry. Folium, sometimes called turnsole, produced a blue-violet hue that appeared in manuscripts across Europe from at least the eighth century. Medieval scribes described its preparation in detail. And for over a thousand years after its use ceased, no scientist could determine what the coloring compound actually was.

The source was never in doubt. Folium came from Chrozophora tinctoria, a small, unremarkable plant in the spurge family that still grows as a weed across southern Portugal, Spain, and the Mediterranean basin. Medieval instructions described harvesting the plant's small fruits, extracting their juice, and applying it to cloth pieces that were then dried and stored. When a scribe needed blue, a cloth fragment was soaked in water or gum arabic to release the color.

## A Millennium of Chemical Mystery

The problem was chemical identification. Modern analytical techniques — spectroscopy, chromatography, mass spectrometry — struggled with folium. The compound did not match any known class of natural dye. It was not an anthocyanin, not a flavonoid, not an indigo derivative, not any other recognized category of plant pigment. Researchers suspected it might be a specialized organic molecule, but its precise structure remained elusive.

## The 2020 Breakthrough

In 2020, a team led by Maria Joao Melo at the Universidade Nova de Lisboa finally cracked folium's secret. Using advanced analytical chemistry techniques, they identified the blue chromophore as a compound they named chrozophoridin — a hermidin-type molecule belonging to an entirely novel class of blue compounds never before described in chemistry. The discovery was published in Science Advances and represented not just the solution to a historical puzzle but the identification of a genuinely new type of blue.

Blue is famously rare in nature. The physics and chemistry of producing blue color are demanding, which is why natural blue pigments are so few and so prized. Chrozophoridin achieved its blue through a molecular mechanism distinct from every other known blue compound, natural or synthetic.

## The Irony of Abundance

The deepest irony of folium's story is that its source plant never went extinct. Chrozophora tinctoria grows abundantly as an agricultural weed across Portugal and the Mediterranean. The plant is there. The blue compound is in its fruits. What vanished was the human knowledge of how to extract and prepare it.

The printing press killed folium. When Gutenberg's invention spread across Europe in the fifteenth and sixteenth centuries, demand for hand-illuminated manuscripts collapsed. The scribes who knew how to prepare folium lost their livelihoods. The craft knowledge, passed from master to apprentice, broke its chain of transmission. Within a few generations, the extraction process was forgotten entirely, even as the plant continued to flower in Portuguese fields, its blue-staining fruits falling ungathered to the ground.`,
  quickFacts: {
    'Source Plant': 'Chrozophora tinctoria (still grows as weed in Portugal)',
    'Chemical Identity': 'Chrozophoridin, a novel class of blue compound',
    'Identified In': '2020 by Maria Joao Melo et al.',
    'Published In': 'Science Advances',
    'Used From': '8th century through ~1500',
    'Application': 'Illuminated manuscripts, cloth dye',
    'Why Lost': 'Printing press ended demand for manuscript illumination',
  },
  connections: [
    { slug: 'egyptian-blue', relationship: 'Both are ancient blue pigments with remarkable properties rediscovered by modern science after centuries of obscurity' },
    { slug: 'maya-blue', relationship: 'Both are blue pigments whose chemical secrets took modern researchers decades or centuries to unravel' },
    { slug: 'tyrian-purple', relationship: 'Both are ancient pigments derived from natural sources whose production processes were lost when demand collapsed' },
    { slug: 'han-purple', relationship: 'Both are ancient pigments with unique chemical properties not replicated by any other known compound' },
  ],
  sources: [
    { title: 'Unveiling the chemistry behind the medieval blue from Chrozophora tinctoria', author: 'Paula Nabais, Maria Joao Melo et al.', year: 2020, url: 'https://doi.org/10.1126/sciadv.aaz7772' },
    { title: 'The medieval colour palette: Developing a methodology for illuminated manuscripts', author: 'Mark Clarke', year: 2001 },
    { title: 'Artists\' Pigments: A Handbook of Their History and Characteristics, Vol. 3', author: 'Elisabeth West FitzHugh', year: 1997 },
  ],
  relatedMedia: [
    { type: 'article', title: 'Scientists unlock the secret of a high-prized high-pure high-yield blue', url: 'https://www.science.org/content/article/scientists-unlock-secret-high-prized-high-pure-high-yield-blue', description: 'Science magazine coverage of the 2020 chrozophoridin discovery' },
  ],
};
