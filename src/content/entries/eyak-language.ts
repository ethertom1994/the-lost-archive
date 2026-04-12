import type { Entry } from '../../types';

export const eyakLanguage: Entry = {
  slug: 'eyak-language',
  name: 'The Eyak Language',
  tagline: 'Marie Smith Jones spent her final decades trying to get someone to learn Eyak. She died in 2008 as its last fluent speaker.',
  category: 'language',
  subcategory: 'Na-Dene Languages',
  lastKnownYear: 2008,
  lastKnownLocation: 'Cordova, Alaska',
  coordinates: [60.54, -145.76],
  region: 'North America',
  status: 'extinct',
  cause: 'Forced assimilation through boarding schools, language suppression, and cultural displacement',
  body: `## The Last Speaker

Marie Smith Jones was born in 1918 in Cordova, Alaska. She grew up speaking Eyak, the language of her people, a small Na-Dene language isolate spoken along the Copper River delta and the southeastern Alaskan coast. By the time she was an old woman, she was the last person on Earth who could speak it fluently.

Her older sister, Sophie Borodkin, had been the other remaining fluent speaker. When Sophie died in 1992, Marie became sole custodian of an entire language: its grammar, its idioms, its jokes, its ways of naming the world. She spent the last sixteen years of her life working with linguists, recording vocabulary, explaining grammar, and trying to preserve what she could. She also advocated fiercely for indigenous language preservation, speaking at the United Nations Permanent Forum on Indigenous Issues in 2008.

Marie Smith Jones died on January 21, 2008, at the age of eighty-nine. Eyak died with her.

## What Eyak Contained

Eyak was a tonal language, part of the Na-Dene family that also includes Tlingit and the Athabaskan languages. It had a complex verb system with dozens of prefixes that could modify a single root, creating meanings of extraordinary specificity. The linguist Michael Krauss, who began working with Eyak speakers in the 1960s, spent decades documenting the language and ultimately produced a grammar and dictionary.

Among the concepts Eyak encoded were words for specific ecological observations that English handles clumsily or not at all. There were distinct terms for the sound and behavior of different kinds of water: the sound of a river over rocks, the pattern of tidewater against a hull, the particular silence of snow falling on the ocean. These were not poetic inventions but practical vocabulary, developed by a people whose survival depended on precise attention to their environment.

## How a Language Dies

Eyak did not disappear because it was an inferior language. It disappeared because the United States government systematically suppressed it. Beginning in the late nineteenth century, Eyak children were sent to boarding schools where they were forbidden from speaking their language. Students who spoke Eyak were punished. Within a generation, the chain of transmission was broken. Parents who had been beaten for speaking Eyak did not teach it to their children.

The Eyak community was also small, never numbering more than a few hundred people. Intermarriage with speakers of Tlingit and English further reduced the number of Eyak speakers. By the mid-twentieth century, Eyak had receded from daily use to the memories of elders.

## A Language Every Two Weeks

Linguists estimate that a language dies roughly every two weeks. Of the approximately 7,000 languages currently spoken, as many as half may be gone by the end of this century. Each one contains a unique way of organizing experience, a set of distinctions and connections that no other language makes in quite the same way. When Marie Smith Jones died, the specific way that the Eyak people had learned to describe their world over thousands of years fell silent.`,
  quickFacts: {
    'Language Family': 'Na-Dene (isolate within the family)',
    'Region': 'Copper River delta, southeastern Alaska',
    'Last Fluent Speaker': 'Marie Smith Jones (1918-2008)',
    'Peak Speakers': 'A few hundred at most',
    'Primary Cause of Decline': 'Boarding school language suppression',
    'Documentation': 'Grammar and dictionary by Michael Krauss (UAF)',
    'Global Language Loss Rate': '~1 language every 2 weeks',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent irreplaceable systems of knowledge destroyed, one by fire and neglect, the other by policy and time' },
    { slug: 'tanganyika', relationship: 'Both illustrate how political power determines which cultures and identities survive' },
  ],
  sources: [
    { title: 'Eyak Dictionary', author: 'Michael Krauss', year: 1970 },
    { title: 'In the Words of Elders: Aboriginal Cultures in Transition', author: 'Peter Kulchyski', year: 1999 },
    { title: 'Marie Smith Jones obituary', author: 'The New York Times', year: 2008 },
    { title: 'The Vanishing Voices of the Pacific', author: 'UNESCO', year: 2010 },
  ],
};
