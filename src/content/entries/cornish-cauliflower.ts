import type { Entry } from '../../types';

export const cornishCauliflower: Entry = {
  slug: 'cornish-cauliflower',
  name: 'Old Cornish Cauliflower',
  tagline: 'A naturally virus-resistant cauliflower abandoned for a prettier French variety. When ringspot arrived, Britain had already thrown away its best defense.',
  category: 'food',
  subcategory: 'Heritage Vegetables',
  lastKnownYear: '~1950',
  lastKnownLocation: 'Cornwall, England',
  coordinates: [50.27, -5.05],
  region: 'Europe',
  status: 'extinct',
  cause: 'Replaced by visually uniform French cauliflower cultivars; original landrace varieties lost from cultivation',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Unglamorous Survivor

Cornwall's cauliflower industry was, for centuries, built on local landrace varieties that had adapted over generations to the mild, damp climate of the southwestern English peninsula. These Old Cornish cauliflowers were not beautiful by modern retail standards. The curds were sometimes uneven, the heads smaller than continental varieties, the color occasionally off-white rather than the pure snow expected by grocers. But they had something no French or Dutch cultivar could match: natural resistance to cauliflower mosaic virus, particularly the ringspot strain that would later devastate British brassica crops.

Ringspot virus is a persistent and damaging pathogen. It causes concentric rings of dead tissue on leaves, stunts growth, and can reduce yields catastrophically. The Old Cornish varieties had co-evolved with this virus over centuries, developing robust genetic resistance that allowed them to shrug off infections that would cripple other cultivars.

## The Great Replacement

In the 1940s and 1950s, British agriculture underwent a transformation driven by postwar demand for uniformity, reliability, and visual appeal. Supermarkets were beginning to set the aesthetic standards for produce, and the Old Cornish cauliflowers, with their variable appearance, could not compete on the shelf against the pristine white heads of French cultivars like Roscoff types. Cornish growers, pressured by market demand and encouraged by agricultural advisors, progressively replaced their local landraces with imported varieties.

The transition was rapid. Within a single generation, the old varieties disappeared from fields across Cornwall. No seed banks preserved them. No botanical gardens maintained backup populations. The genetic material that encoded centuries of natural virus resistance was plowed under and forgotten.

## The Bill Comes Due

When ringspot virus swept through British cauliflower fields in subsequent decades, the newly planted French varieties had no defense. Crop losses mounted. Growers turned to chemical controls and resistant breeding programs, investing enormous resources to engineer the very trait that the Old Cornish cauliflowers had carried for free. The irony was bitter: the protection had existed, grown in Cornish soil for generations, and had been discarded because the heads were not white enough.

## A Pattern Repeated

The story of the Old Cornish cauliflower is not unique. It belongs to a broader pattern of agricultural loss in which locally adapted crop varieties, carrying irreplaceable genetic diversity, are replaced by high-performing but genetically narrow commercial cultivars. The Gros Michel banana, the Ansault pear, the Taliaferro apple, each represents a node in the same web of genetic erosion. The difference with the Cornish cauliflower is that the loss was not just of a flavor or a texture but of a functional trait, a natural vaccine, discarded in exchange for aesthetics.

Modern plant breeders now recognize the critical importance of landrace varieties as reservoirs of genetic resilience. But recognition came too late for the Old Cornish cauliflower. Its genes are gone, and with them a defense that took centuries to evolve.`,
  quickFacts: {
    'Origin': 'Cornwall, England, centuries-old landrace',
    'Key Trait': 'Natural resistance to cauliflower ringspot virus',
    'Replaced By': 'French Roscoff-type cultivars in 1940s-1950s',
    'Reason for Replacement': 'Market demand for uniform white curds',
    'Consequence': 'Ringspot virus devastated British cauliflower crops',
    'Seed Bank Status': 'No preserved specimens known',
  },
  connections: [
    { slug: 'gros-michel-banana', relationship: 'Both were crop varieties with natural disease resistance replaced by commercially preferred but vulnerable successors' },
    { slug: 'ansault-pear', relationship: 'Both lost to the economics of agricultural uniformity over flavor and resilience' },
    { slug: 'taliaferro-apple', relationship: 'Both were heritage cultivars whose irreplaceable genetics vanished when commercial agriculture stopped growing them' },
  ],
  sources: [
    { title: 'Lost Feast: Culinary Extinction and the Future of Food', author: 'Lenore Newman', year: 2019 },
    { title: 'The Vegetable Garden Displayed', author: 'Royal Horticultural Society', year: 1941 },
    { title: 'Genetic Resources of Brassica Vegetables', author: 'G. Kalloo and B.O. Bergh', year: 1993 },
  ],
};
