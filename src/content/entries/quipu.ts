import type { Entry } from '../../types';

export const quipu: Entry = {
  slug: 'quipu',
  name: 'The Quipu',
  tagline: 'An entire civilization\'s records encoded in knots we cannot untie.',
  category: 'culture',
  subcategory: 'Lost Recording Systems',
  lastKnownYear: '~16th century',
  lastKnownLocation: 'Cusco, Peru',
  coordinates: [-13.52, -71.97],
  region: 'South America',
  status: 'extinct',
  cause: 'Spanish colonial destruction of quipus as part of systematic erasure of Inca cultural institutions',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Knots as Data

The Inca Empire administered the largest state in pre-Columbian America without what most civilizations would consider writing. Instead, they used quipus: assemblies of colored, spun, and knotted cotton or camelid fiber cords hanging from a main string. A quipu could contain dozens or hundreds of pendant cords, each with clusters of knots at specific positions. Specialist officials called *quipucamayocs* created, maintained, and interpreted them.

The numerical encoding has been substantially decoded. Knot clusters represent digits in a base-ten system, with position along the cord indicating place value. A quipu could record census data, tribute payments, agricultural output, and military inventories with precision. The Inca ran an empire spanning modern Peru, Bolivia, Ecuador, and parts of Colombia, Chile, and Argentina, administering millions of people, using knotted string as their primary data storage medium.

## The Narrative Problem

But quipus appear to have done more than count. Spanish colonial sources describe quipucamayocs reciting histories, genealogies, and legal precedents from their quipus. Some chroniclers explicitly compared them to books. If these accounts are accurate, then at least some quipus encoded narrative content, not just numbers. This is where modern understanding breaks down completely.

Approximately six hundred quipus survive in museum collections worldwide. Researchers have made progress on the numerical system, but the potential narrative encoding remains opaque. Variables like cord color, ply direction, fiber type, and knot spacing may all carry meaning, but without a bilingual key or a surviving tradition of interpretation, the code may be unbreakable.

## The Burning

The Spanish destroyed quipus systematically. The Third Council of Lima in 1583 ordered their destruction as instruments of idolatry. Colonial administrators recognized that quipus were tools of governance and cultural memory, and eliminating them was part of the broader project of dismantling Inca institutions. Of the unknown thousands that once existed, six hundred fragments remain. If narrative quipus did contain something like literature, historical chronicles, or legal codes, the vast majority were burned centuries ago. We may be holding the surviving pages of an unreadable library.`,
  quickFacts: {
    'Material': 'Cotton or camelid fiber (llama, alpaca)',
    'Encoding': 'Base-ten numerical system via knot position and type',
    'Specialists': 'Quipucamayocs (keeper of the knots)',
    'Surviving Examples': '~600 in museum collections',
    'Empire Administered': 'Tawantinsuyu (Inca Empire), ~12 million people',
    'Destruction Order': 'Third Council of Lima, 1583',
    'Narrative Content': 'Described by colonial sources, not yet decoded',
  },
  connections: [
    { slug: 'mixtec-codices', relationship: 'Both indigenous American recording systems systematically destroyed by Spanish colonization' },
    { slug: 'library-of-alexandria', relationship: 'Both represent catastrophic destruction of accumulated recorded knowledge, leaving only fragments' },
  ],
  sources: [
    { title: 'Signs of the Inka Khipu: Binary Coding in the Andean Knotted-String Records', author: 'Gary Urton', year: 2003 },
    { title: 'The Khipu Information String: How and Where Did It Originate?', author: 'Gary Urton', year: 2014 },
    { title: 'Narrative Threads: Accounting and Recounting in Andean Khipu', author: 'Jeffrey Quilter & Gary Urton', year: 2002 },
    { title: 'The Inca Empire: A Multidisciplinary Approach', author: 'Izumi Shimada', year: 2015 },
  ],
  relatedMedia: [
    { type: 'museum', title: 'Quipu Collection - Museo Larco, Lima', url: 'https://www.museolarco.org/en/', description: 'One of the finest collections of Inca quipu in the world' },
  ],
};
