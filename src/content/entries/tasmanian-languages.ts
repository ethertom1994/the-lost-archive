import type { Entry } from '../../types';

export const tasmanianLanguages: Entry = {
  slug: 'tasmanian-languages',
  name: 'The Tasmanian Languages',
  tagline: 'Not one language but an entire family. 8-12 distinct languages, all gone. The last fluent speaker recorded a few minutes of wax cylinder audio in 1899.',
  category: 'language',
  subcategory: 'Language Families',
  lastKnownYear: 1905,
  lastKnownLocation: 'Tasmania, Australia',
  coordinates: [-42.0, 146.5],
  region: 'Oceania',
  status: 'extinct',
  cause: 'British colonial genocide of the Tasmanian Aboriginal people through the Black War (1820s-1830s), forced removal to Flinders Island, disease, and systematic suppression of language and culture',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## An Entire Family

When people discuss "dying languages," they usually mean a single language — one way of speaking, one grammar, one vocabulary. Tasmania lost not a language but a language family. The Aboriginal Tasmanians, who had been isolated on their island for approximately 8,000 years after rising sea levels severed the land bridge to mainland Australia, spoke between 8 and 12 distinct languages, grouped into at least five language families that may have had no relationship to any languages on the mainland.

Each language was spoken by a nation of a few hundred to a few thousand people. Each had its own vocabulary, grammar, and way of categorizing the world. Linguists can reconstruct only fragments: word lists compiled by early colonists, phrases recorded by missionaries, and a handful of sentences transcribed by George Augustus Robinson, the government official who "conciliated" (forcibly relocated) the Tasmanian nations in the 1830s. The records are spotty, contradictory, and filtered through English-speaking ears that couldn't accurately hear or transcribe the sounds.

## The Black War

British colonists arrived in Tasmania in 1803. Within three decades, the Tasmanian Aboriginal population had been reduced from an estimated 3,000-15,000 people to fewer than 300 through a combination of frontier violence, disease, and the government-organized "Black Line" — a human chain of armed settlers that swept across the island to drive Aboriginal people into containment.

The survivors were relocated to Flinders Island in Bass Strait, where crowded living conditions, European diseases, and despair killed most of them. The children were separated from elders, taught English, and discouraged from speaking their own languages. The colonial administration called this "civilization."

## Fanny Cochrane Smith

Fanny Cochrane Smith, born in 1834, was the daughter of an Aboriginal woman who survived the relocations. She was the last person widely recognized as a fluent speaker of a Tasmanian Aboriginal language. In 1899, at the age of 65, she made wax cylinder recordings of songs and speech in what is believed to be a southern Tasmanian language. The recordings — scratchy, brief, haunting — are held by the Tasmanian Museum and Art Gallery.

They are the only audio record of any Tasmanian language. A few minutes of sound is all that remains of an entire family of languages spoken for thousands of years by people who developed one of the most sophisticated maritime and fire-management cultures in the Southern Hemisphere. Fanny Cochrane Smith died in 1905. The languages died with her.`,
  quickFacts: {
    'Number of Languages': '8-12 distinct languages',
    'Language Families': 'At least 5 (all unrelated to mainland Australian)',
    'Pre-contact Population': '3,000-15,000',
    'Isolation Period': '~8,000 years',
    'Last Fluent Speaker': 'Fanny Cochrane Smith (d. 1905)',
    'Audio Record': 'Wax cylinder recordings, 1899',
    'Held At': 'Tasmanian Museum and Art Gallery',
    'Colonial Period': '1803-1847 (Black War era)',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both languages that died with their last speaker, leaving only fragments recorded by outsiders' },
    { slug: 'yahi', relationship: 'Both represent the linguistic erasure that accompanies the physical destruction of indigenous peoples' },
    { slug: 'thylacine', relationship: 'Both lost in Tasmania through colonial-era destruction — one a language family, the other a species' },
  ],
  sources: [
    { title: 'An Introduction to the Aboriginal Languages of Tasmania', author: 'Terry Crowley & R.M.W. Dixon', year: 1981 },
    { title: 'The Aboriginal Tasmanians', author: 'Lyndall Ryan', year: 2012 },
    { title: 'Fanny Cochrane Smith Recordings', author: 'Tasmanian Museum and Art Gallery', year: 1899 },
    { title: 'Fate of a Free People', author: 'Henry Reynolds', year: 2004 },
  ],
};
