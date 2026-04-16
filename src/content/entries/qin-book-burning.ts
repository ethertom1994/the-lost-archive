import type { Entry } from '../../types';

export const qinBookBurning: Entry = {
  slug: 'qin-book-burning',
  name: 'Qin Dynasty Book Burning',
  tagline: 'In 213 BCE, China\'s first emperor ordered the destruction of all books on poetry, history, and philosophy from the conquered states. Medicine, agriculture, and divination survived. Poetry and philosophy survived only in hiding, mostly as memorized texts.',
  category: 'culture',
  subcategory: 'Lost Literary Corpus',
  lastKnownYear: -213,
  lastKnownLocation: 'Xianyang, capital of the Qin Empire',
  coordinates: [34.333, 108.708],
  region: 'Ancient China',
  status: 'extinct',
  cause: 'Imperial edict of Qin Shi Huang, on the advice of chancellor Li Si, ordering the burning of poetry, historical records, and philosophical texts outside Legalist orthodoxy',
  body: `## The Edict

In 213 BCE, on the advice of his chancellor Li Si, the first emperor of unified China issued an edict. All copies of the Classic of Poetry (Shi Jing), the Classic of History (Shu Jing), and the writings of the "hundred schools" of philosophy were to be surrendered to the provincial governors and burned. The only exceptions were copies held by the imperial academicians, and texts on three categories of practical knowledge: medicine, agriculture, and divination. Anyone who discussed the banned texts in public would be executed. Officials who failed to enforce the edict would be branded and sentenced to forced labor on the Great Wall. Historical records of all pre-Qin states other than Qin itself were to be destroyed in full.

A year later, according to the historian Sima Qian, the emperor had 460 scholars buried alive for criticizing him. The twin events, the fen shu (burning of books) and the keng ru (burying of scholars), became the defining cultural catastrophe of Chinese antiquity.

## What Was Destroyed

The edict was aimed at political memory. Pre-Qin China had been a patchwork of competing states, each with its own historical chronicle, its own court philosophers, its own literary traditions. Li Si\'s argument to the emperor, preserved in Sima Qian\'s Records of the Grand Historian, was explicit: scholars studying the past were using it to criticize the present. Eliminate the past and you eliminate the critique.

The chronicles of the conquered states (Chu, Qi, Yan, Zhao, Wei, Han) were the main casualty. These were full narrative histories stretching back centuries. Not one survives in anything like its original form. Everything we know of pre-Qin political history comes through later reconstructions, chiefly the Zuo Zhuan and Sima Qian\'s own work, both composed after the burning and based on scattered fragments that survived it.

Many philosophical works from the pre-Qin "hundred schools" also vanished. The Mohists, a major rival school to Confucianism before the Qin, are represented today only by a single incomplete text and scattered quotations. The Legalist, Yangist, Logician, and Agriculturalist schools left even less.

## What Escaped

Modern historians note that the actual enforcement of the ban may have been patchier than Sima Qian implies. Sima Qian himself was writing more than a century later under a Han dynasty that had political reasons to paint its Qin predecessor as monstrous. Some banned books survived by being hidden in walls and private houses. Others survived as memorized oral texts, retransmitted during the Han when the bans were lifted. The Confucian classics were partly reconstructed from the memories of old scholars who had studied them before 213.

But the gap is real. The archaeological recovery of pre-Qin bamboo-slip manuscripts in tombs since the 1970s (including the Guodian and Shanghai Museum corpora) has repeatedly turned up philosophical texts unknown to any later tradition. Each new tomb shows how much was circulating before 213 BCE and how little made it through. The Qin destruction was the first great filter of the Chinese textual tradition, and almost everything downstream was shaped by what it let through.`,
  quickFacts: {
    'Date of Edict': '213 BCE',
    'Ordered by': 'Qin Shi Huang, on advice of Li Si',
    'Texts Spared': 'Medicine, agriculture, divination, Qin state records',
    'Texts Targeted': 'Poetry, history of other states, philosophy of the "hundred schools"',
    'Scholars Buried Alive (212 BCE)': '460, according to Sima Qian',
    'Principal Source': 'Sima Qian, Records of the Grand Historian (c. 94 BCE)',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both are landmark ancient losses of political and philosophical literature to state or accidental destruction' },
    { slug: 'han-paper-variants', relationship: 'The Han dynasty that followed Qin invested heavily in writing technology partly to replace what the Qin had destroyed' },
    { slug: 'nalanda', relationship: 'Both are catastrophic losses of East or South Asian textual traditions that shaped what later centuries could study' },
  ],
  sources: [
    { title: 'Burning of books and burying of scholars', url: 'https://en.wikipedia.org/wiki/Burning_of_books_and_burying_of_scholars' },
    { title: 'Records of the Grand Historian', author: 'Sima Qian', year: -94 },
    { title: 'The Cambridge History of Ancient China', author: 'Michael Loewe and Edward L. Shaughnessy, eds.', year: 1999 },
  ],
};
