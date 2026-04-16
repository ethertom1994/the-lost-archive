import type { Entry } from '../../types';

export const etruscan: Entry = {
  slug: 'etruscan',
  name: 'Etruscan Language',
  tagline: 'Spoken in Italy for 700 years before Latin swallowed it. 13,000 inscriptions survive. The literature is gone entirely.',
  category: 'language',
  subcategory: 'Ancient Languages',
  lastKnownYear: '~1st century BCE',
  lastKnownLocation: 'Central Italy (Etruria: modern Tuscany, Umbria, Lazio)',
  coordinates: [42.7, 11.8],
  region: 'Europe',
  status: 'extinct',
  cause: 'Gradual absorption by Latin following Roman political and cultural domination of Etruria',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Before Rome

Before Rome became Rome, there was Etruria. From roughly the 8th century BCE, the Etruscan civilization dominated central Italy, building wealthy city-states across what is now Tuscany, Umbria, and northern Lazio. The Etruscans were sophisticated metallurgists, traders, and artists. They gave Rome its early kings (the Tarquin dynasty was Etruscan), taught the Romans the arch, influenced their religious practices, and provided the alphabet that Latin adapted from Etruscan, which the Etruscans had themselves adapted from Greek.

Their language was spoken across this region for at least 700 years, from before 700 BCE until the last speakers were absorbed into Latin-speaking Roman culture by roughly the 1st century BCE. The emperor Claudius, who ruled in the 1st century CE, was famously interested in Etruscan and reportedly wrote a 20-volume history of the Etruscans in their own language. That work, like virtually all Etruscan literature, is entirely lost.

## What Survives

Approximately 13,000 Etruscan inscriptions have been found, scratched on pottery, carved on tomb walls, stamped on coins, and painted on funerary objects. But the vast majority are extremely short: names, dedications, ownership marks, and brief epitaphs. The longest surviving text, the Liber Linteus (a linen book preserved by being cut into strips and reused as Egyptian mummy wrappings), contains roughly 1,200 words but is a religious calendar, repetitive and formulaic.

Scholars can read Etruscan script easily because the alphabet is derived from Greek. The problem is understanding the language behind the letters. Etruscan is a language isolate, unrelated to any known language family. It is not Indo-European. Without bilingual texts of significant length or a related living language to compare it against, translation depends on context, statistical analysis, and the handful of Etruscan-Latin glosses left by Roman authors.

## The Grammar Without the Meaning

Modern Etruscologists have reconstructed much of Etruscan grammar. We know the language was agglutinative, adding suffixes to modify meaning. We know basic vocabulary: numerals, kinship terms, some religious words, many personal names. We can parse sentence structure in the inscriptions. But the deeper layers of the language, its idioms, its poetry, its humor, its way of expressing abstract thought, are irrecoverable from a corpus of short formulaic texts. The Etruscans had a rich literary tradition according to Roman sources. Varro, Cicero, and Livy all reference Etruscan books on religion, divination, and history. Not a single one survives. An entire civilization's written thought, produced over centuries, exists now only as references in the language that replaced it.`,
  quickFacts: {
    'Language Family': 'Isolate (no known relatives)',
    'Region': 'Etruria (modern Tuscany, Umbria, Lazio)',
    'Spoken': '~8th century BCE to ~1st century BCE',
    'Surviving Inscriptions': '~13,000',
    'Longest Text': 'Liber Linteus (~1,200 words)',
    'Script': 'Adapted from Greek alphabet',
    'Literature Surviving': 'None (all referenced by Roman authors only)',
  },
  connections: [
    { slug: 'sumerian', relationship: 'Both are language isolates with no known relatives, both eventually replaced by dominant successor languages' },
    { slug: 'dalmatian-language', relationship: 'Both were languages absorbed by a more politically powerful neighbor, leaving behind fragments insufficient to reconstruct the whole' },
  ],
  sources: [
    { title: 'Etruscan Civilization: A Cultural History', author: 'Sybille Haynes', year: 2000 },
    { title: 'The Etruscan Language: An Introduction', author: 'Giuliano Bonfante and Larissa Bonfante', year: 2002 },
    { title: 'Etruscan Texts Project', author: 'Rex Wallace, University of Massachusetts', url: 'https://www.umass.edu/etruscan' },
  ],
};
