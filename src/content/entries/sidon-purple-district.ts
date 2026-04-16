import type { Entry } from '../../types';

export const sidonPurpleDistrict: Entry = {
  slug: 'sidon-purple-district',
  name: 'Sidon\'s Purple Dye Quarter',
  tagline: 'A 50-metre mountain of crushed shells still stands in Sidon. The industrial knowledge that created it, turning sea snails into the ancient world\'s most valuable dye, does not.',
  category: 'place',
  lastKnownYear: '~4th century CE',
  lastKnownLocation: 'Sidon, Phoenicia (modern Saida, Lebanon)',
  coordinates: [33.56, 35.37],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Decline of Phoenician commercial networks and later disruption under Roman and Byzantine rule ended the industrial-scale production tradition',
  imageUrl: undefined,
  body: `## The Shell Mountain

On the outskirts of modern Saida, Lebanon, the ancient city of Sidon, there stands an artificial hill roughly 50 metres high. It is composed almost entirely of crushed murex shells, the industrial waste of centuries of purple dye production. This mound is the physical residue of one of the ancient world's most important and most secretive industries. The shells are still there. The knowledge of exactly what was done with them is not.

Sidon, along with its sister city Tyre, was the center of Phoenician purple dye production, an industry that began no later than the 2nd millennium BCE and continued in various forms for over a thousand years. The dye, extracted from the hypobranchial glands of murex sea snails, principally Bolinus brandaris and Hexaplex trunculus, produced colors ranging from violet to a deep reddish-purple. At its peak, Tyrian purple was worth more by weight than gold. It was the color of kings, and Phoenicia held a near-monopoly on its production.

## The Industrial Process

The scale of production was enormous. An estimated 10,000 snails were required to produce a single gram of dye. The processing involved cracking shells, extracting a small gland, mixing the secretion with salt, and exposing the mixture to sunlight over days, during which photochemical reactions transformed a pale mucus into a deep, permanent dye. The stench was so overpowering that Sidon's primary processing facility was located 14 kilometres south of the city at Sarepta.

But the published facts describe only the crude outline. The Phoenician dyers understood variables that modern chemistry has not fully replicated: which species harvested in which season produced which shade, how fermentation temperature affected color fastness, what additives or vessel materials influenced the final result, and how to achieve the specific quality that made Phoenician purple superior to all imitations. This was empirical chemistry refined over generations within a guild tradition that guarded its methods.

## The District That Disappeared

Sidon's purple quarter was a defined industrial zone, with workshops, storage facilities, vat complexes, and access to the harbor for shipping. Archaeological excavation has uncovered the physical infrastructure: stone basins, drainage channels, and the ubiquitous shell debris. But no written manual of Phoenician dyeing survives. The Punic language texts that might have documented the process were lost with Carthage in 146 BCE and with the broader decline of Phoenician literary culture. The craft persisted into the Byzantine period in diminished form, but the full Phoenician production system, industrial in scale and artisanal in precision, did not survive the collapse of the commercial networks that sustained it.`,
  quickFacts: {
    'Shell Mound Height': '~50 metres',
    'Primary Species': 'Bolinus brandaris, Hexaplex trunculus',
    'Snails Per Gram of Dye': '~10,000',
    'Processing Site': 'Sarepta (14 km south of Sidon)',
    'Industry Duration': '2nd millennium BCE through late antiquity',
    'Sister Production City': 'Tyre',
    'Dye Value': 'Worth more than gold by weight',
  },
  connections: [
    { slug: 'tyrian-purple', relationship: 'Sidon was one of the two great production centers for Tyrian purple; this entry covers the industrial district itself' },
    { slug: 'carthage-destruction', relationship: 'Carthage was a Phoenician colony that also produced purple dye; its destruction in 146 BCE eliminated Punic-language records of the craft' },
  ],
  sources: [
    { title: 'The Purple Dye That Powered the Ancient Phoenician Empire', url: 'https://www.history.com/articles/purple-ancient-phoenicians' },
    { title: 'Purple Dye in Antiquity', author: 'Zvi C. Koren', year: 2005, url: 'https://doi.org/10.1021/bk-2005-0912.ch010' },
    { title: 'Natural History, Book IX', author: 'Pliny the Elder', year: 77 },
  ],
};
