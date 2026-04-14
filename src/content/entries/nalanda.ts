import type { Entry } from '../../types';

export const nalanda: Entry = {
  slug: 'nalanda',
  name: 'The Library of Nalanda',
  tagline: 'The world\'s first residential university. Its library burned for three months.',
  category: 'culture',
  subcategory: 'Destroyed Institutions',
  lastKnownYear: 1193,
  lastKnownLocation: 'Bihar, India',
  coordinates: [25.14, 85.44],
  region: 'South Asia',
  status: 'extinct',
  cause: 'Sacked and burned by Bakhtiyar Khilji\'s army in 1193; the library burned for three months',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Treasury of Truth

Nalanda was not merely a monastery. It was the world's first great residential university, operating continuously from the fifth to the twelfth century in Bihar, in northeastern India. At its peak, it housed ten thousand students and two thousand teachers drawn from across Asia. Students came from China, Korea, Japan, Tibet, Mongolia, Turkey, Sri Lanka, and Southeast Asia. The curriculum was vast: Buddhist philosophy and theology, but also Hindu scriptures, logic, grammar, medicine, astronomy, mathematics, and what we would now call the natural sciences.

The heart of Nalanda was its library, the Dharmaganja, meaning "Treasury of Truth." It consisted of three multi-story buildings: the Ratnasagara (Ocean of Jewels), the Ratnodadhi (Sea of Jewels), and the Ratnaranjaka (Jewel-Adorned). The Ratnasagara alone was nine stories tall. Together they held hundreds of thousands of manuscripts, the accumulated intellectual output of seven centuries of scholarship at the highest level then existing in Asia.

## 1193

In 1193, the Turkish military commander Bakhtiyar Khilji led a cavalry force into Bihar as part of the broader Ghurid conquest of northern India. His forces reached Nalanda and sacked it. According to the Persian historian Minhaj-i-Siraj, Khilji's soldiers killed the resident monks, many of whom were the only people alive who understood the texts they guarded. Then they set fire to the library.

The Dharmaganja is said to have burned for three months. The scale of the collection was so enormous that the buildings smoldered for weeks after the initial fires, the accumulated paper and palm-leaf manuscripts providing fuel that outlasted the structures that contained them.

## The Incalculable Loss

What burned at Nalanda is incalculable in the literal sense: we cannot calculate it because we do not know what was there. We know that Nalanda's scholars had produced original works in every field the university taught. We know that the library held texts copied from across Asia, many of which existed nowhere else. Tibetan and Chinese scholars who had studied at Nalanda brought copies of some texts home, and those copies are among the only surviving traces of the library's content.

Entire schools of Buddhist philosophy are known only through fragments quoted in surviving works. Medical treatises referenced by later physicians have never been found. Mathematical and astronomical works that influenced traditions across Asia may have originated at Nalanda but can no longer be traced to their source. The three months of fire did not merely destroy a building. They severed a transmission line of knowledge that had been maintained, unbroken, for seven hundred years.`,
  quickFacts: {
    'Operating Period': '5th-12th century CE (~700 years)',
    'Peak Population': '~10,000 students, ~2,000 teachers',
    'Library Name': 'Dharmaganja ("Treasury of Truth")',
    'Library Buildings': 'Three: Ratnasagara, Ratnodadhi, Ratnaranjaka',
    'Tallest Building': 'Ratnasagara (nine stories)',
    'Destroyed By': 'Bakhtiyar Khilji, 1193 CE',
    'Duration of Fire': 'Reportedly three months',
    'Subjects Taught': 'Buddhist philosophy, Hindu texts, medicine, astronomy, logic, mathematics',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent catastrophic destructions of accumulated knowledge that set back human understanding by centuries' },
    { slug: 'great-hedge-india', relationship: 'Both South Asian losses from political upheaval, where conquering powers destroyed indigenous institutions' },
  ],
  sources: [
    { title: 'A History of Nalanda', author: 'Sukumar Dutt', year: 1962 },
    { title: 'Nalanda: From Decline to Destruction', author: 'Saran Kumar Sharma', year: 2004 },
    { title: 'Tabaqat-i-Nasiri', author: 'Minhaj-i-Siraj Juzjani', year: 1260 },
    { title: 'The Rise, Decline, and Destruction of Nalanda', author: 'Hartmut Scharfe', year: 2002 },
  ],
  relatedMedia: [
    { type: 'museum', title: 'Nalanda Archaeological Site - UNESCO', url: 'https://whc.unesco.org/en/list/1502/', description: 'UNESCO World Heritage listing for the ruins of Nalanda Mahavihara' },
  ],
};
