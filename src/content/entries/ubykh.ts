import type { Entry } from '../../types';

export const ubykh: Entry = {
  slug: 'ubykh',
  name: 'The Ubykh Language',
  tagline: 'A language with 84 consonants, the most of any known human tongue, fell silent when its last speaker died in Istanbul in 1992.',
  category: 'language',
  subcategory: 'Caucasian Languages',
  lastKnownYear: 1992,
  lastKnownLocation: 'Istanbul, Turkey',
  coordinates: [41.01, 28.98],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Circassian diaspora from Russian conquest, cultural assimilation in Turkey, and community dispersal',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Eighty-Four Consonants

Ubykh holds a distinction no other documented language can claim: it possessed eighty-four distinct consonant sounds, the highest number recorded in any language on Earth. Spoken by the Ubykh people of the northwestern Caucasus, along the eastern shore of the Black Sea, the language packed an extraordinary density of articulation into its phonology. Where English manages with roughly twenty-four consonants, Ubykh speakers distinguished between sounds so subtle that untrained ears could not tell them apart. The language had only two vowel phonemes, yet its speakers could express anything they needed to through that vast consonant inventory, a system shaped by millennia of use in the steep valleys and coastal forests of their homeland.

## Tevfik Esen\u00E7, the Last Voice

Tevfik Esen\u00E7 was born in 1904 in Turkey, into a community of Ubykh descendants who had been expelled from the Caucasus during the Russian conquest of Circassia in 1864. That forced exile scattered the Ubykh people across the Ottoman Empire, and in the decades that followed, Turkish became the dominant language of daily life. Esen\u00E7 grew up bilingual, but as the twentieth century wore on, he watched the circle of Ubykh speakers contract around him. By the 1980s, he was the last person alive who could speak the language fluently. He died on October 7, 1992, in Istanbul. His final words were reportedly spoken in Ubykh.

## A Linguist and a Last Speaker

The French linguist Georges Dum\u00E9zil first encountered Ubykh in the 1930s and recognized its extraordinary phonological richness. He began working with Ubykh speakers in Turkey, recording vocabulary, grammar, and oral traditions. When Esen\u00E7 became the last fluent speaker, the two men formed a working partnership that spanned decades. Esen\u00E7 understood the gravity of what he carried and cooperated extensively with Dum\u00E9zil and other researchers, including the linguist Hans Vogt. Together they produced detailed phonological analyses, texts, and a body of documentation that preserved Ubykh in written form. Esen\u00E7 reportedly said that he wanted his language to be known to the world even after he was gone.

## What Made Ubykh Remarkable

Beyond its record-setting consonant count, Ubykh was phonologically unique in several respects. It featured an elaborate system of secondary articulations, including labialization, palatalization, and pharyngealization, often stacked on a single consonant. Its ergative-absolutive grammar aligned it with other Northwest Caucasian languages like Abkhaz and Adyghe, but its sound system was unmatched. Ubykh also contained a rich oral literature, including myths, historical narratives, and songs that encoded the cultural memory of a displaced people. When Esen\u00E7 died, that living tradition ended. What remains are the recordings, the transcriptions, and the knowledge that a language of astonishing complexity once existed and was spoken, until it wasn't.`,
  quickFacts: {
    'Language Family': 'Northwest Caucasian',
    'Consonants': '84',
    'Last Speaker': 'Tevfik Esen\u00E7, 1992',
    'Origin': 'Ubykh people, Caucasus',
    'Documentation': 'By Georges Dum\u00E9zil and others',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both last speakers devoted their final years to working with linguists to preserve their dying languages' },
    { slug: 'library-of-alexandria', relationship: 'Both represent irreplaceable bodies of knowledge lost, one burned, the other silenced' },
  ],
  sources: [
    { title: 'Northwest Caucasian Languages', author: 'Georges Dum\u00E9zil', year: 1965 },
    { title: 'Ubykh Phonology', author: 'Hans Vogt', year: 1963 },
    { title: 'The Indigenous Languages of the Caucasus, Volume 2', author: 'George Hewitt', year: 1989 },
    { title: 'Endangered Languages of the Caucasus and Beyond', author: 'Ramazan Korkmaz and Gilles Authier', year: 2010 },
  ],
};
