import type { Entry } from '../../types';

export const tyrianPurple: Entry = {
  slug: 'tyrian-purple',
  name: 'Tyrian Purple',
  tagline: 'Worth more than gold, made from thousands of crushed sea snails. The exact Phoenician process died with Constantinople.',
  category: 'material',
  subcategory: 'Dyes and Pigments',
  lastKnownYear: 1453,
  lastKnownLocation: 'Constantinople (Istanbul), Byzantine Empire',
  coordinates: [41.01, 28.98],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The fall of Constantinople ended the last workshops maintaining the traditional production method',
  body: `## The Color of Power

For more than two thousand years, a single color defined supreme authority in the Western world. Tyrian purple, also called royal purple or imperial purple, was the most expensive dye in the ancient Mediterranean. It was extracted from the hypobranchial glands of predatory sea snails, principally *Bolinus brandaris* and *Hexaplex trunculus*, found along the coasts of modern Lebanon, where the Phoenician city of Tyre perfected its production.

The color was extraordinary. Unlike plant-based dyes, which faded in sunlight, Tyrian purple actually grew more vibrant with exposure and washing. Pliny the Elder described its hue as "the color of clotted blood, dark by reflected light but brilliant by transmitted light." Roman sumptuary laws restricted its use to senators and emperors. A toga dyed entirely in Tyrian purple, the *toga picta*, was reserved for triumphant generals and the emperor himself.

## Ten Thousand Snails per Gram

The production process was legendarily laborious and foul-smelling. Workers cracked open the shells, extracted the small mucus gland, and placed the secretions in stone vats with salt. The mixture was left to steep in sunlight for days, during which a photochemical reaction transformed the pale secretion into the deep purple dye. The stench was so overpowering that Phoenician dye works were located downwind of cities.

The quantities required were staggering. Estimates vary, but producing a single gram of dye required roughly ten thousand snails. Dyeing a single garment might consume hundreds of thousands. Archaeological sites at Sidon and Tyre contain shell middens meters deep, the industrial waste of centuries of production.

## The Secret in the Process

Modern chemistry has identified the primary molecule responsible for Tyrian purple's color: 6,6'-dibromoindigo. Chemists can synthesize this compound. But the Phoenician process was not simply about extracting a single molecule. The traditional method involved a controlled biological fermentation, careful temperature regulation, specific timing of sun exposure, and an understanding of which snail species and which season produced the best results. The depth and character of the color varied with these variables in ways that the Phoenicians understood empirically but never recorded in a form that survived.

The Byzantine Empire maintained Tyrian purple production in imperial workshops, where the dye continued to symbolize sovereign power. The phrase "born to the purple" (*porphyrogennetos*) referred to children of reigning emperors, born in the purple-draped imperial chamber. When Constantinople fell to the Ottoman Turks on May 29, 1453, the last workshops that maintained the continuous tradition of production were destroyed or disbanded.

## The Color Persists, the Method Does Not

Synthetic dibromoindigo is available today and approximates the hue. But the material that Pliny described, the color that improved with age and sunlight, the dye that embedded itself so deeply in cloth that it outlasted the fabric, is not something modern chemistry has fully replicated. The Phoenician dyemakers understood something about the interaction between the biological source material and the treatment process that three thousand years of accumulated craft knowledge had refined. That knowledge is gone.`,
  quickFacts: {
    'Chemical Compound': '6,6\'-dibromoindigo',
    'Source Organisms': 'Bolinus brandaris, Hexaplex trunculus',
    'Origin': 'Phoenicia (modern Lebanon), ~1500 BCE',
    'Snails per Gram': '~10,000',
    'Cost in Roman Times': 'Worth 10-20x its weight in gold',
    'Last Traditional Production': '1453 (fall of Constantinople)',
    'Unique Property': 'Color intensified with washing and sunlight',
  },
  connections: [
    { slug: 'mummy-brown', relationship: 'Both were pigments derived from biological sources so rare or repugnant that their supply was inherently finite' },
    { slug: 'aztec-chocolate', relationship: 'Both were luxury products of ancient civilizations whose precise production methods died with their makers' },
    { slug: 'roman-concrete', relationship: 'Both represent ancient manufacturing processes whose full replication has eluded modern science' },
  ],
  sources: [
    { title: 'Natural History, Book IX', author: 'Pliny the Elder', year: 77 },
    { title: 'Purple Dye in Antiquity', author: 'Zvi C. Koren', year: 2005, url: 'https://doi.org/10.1021/bk-2005-0912.ch010' },
    { title: 'The Purple Workshops of Sidon', author: 'Rub\u00e9n G. Moreno', year: 2018 },
    { title: 'Archaeomalacology: The Study of Molluscs from Archaeological Sites', author: 'Daniella E. Bar-Yosef Mayer', year: 2005 },
  ],
};
