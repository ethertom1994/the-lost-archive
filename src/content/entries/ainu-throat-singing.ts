import type { Entry } from '../../types';

export const ainuThroatSinging: Entry = {
  slug: 'ainu-throat-singing',
  name: 'Ainu Rekuhkara',
  tagline: 'A throat-singing tradition distinct from all others, lost alongside the language that gave it meaning.',
  category: 'sound',
  subcategory: 'Vocal Traditions',
  lastKnownYear: '~mid-20th century',
  lastKnownLocation: 'Hokkaido, Japan',
  coordinates: [43.06, 141.35],
  region: 'East Asia',
  status: 'functionally_extinct',
  cause: 'Japanese colonial assimilation policies suppressed Ainu culture and language simultaneously, breaking the transmission of both',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Double Silence

The Ainu people of Hokkaido, Sakhalin, and the Kuril Islands practiced a form of throat singing called rekuhkara that was fundamentally unlike the better-known throat-singing traditions of Tuva, Mongolia, or the Inuit. Where Tuvan khoomei produces multiple simultaneous pitches through overtone manipulation, and Inuit katajjaq is a rhythmic breathing game between two women, Ainu rekuhkara was something else entirely: a solo vocal technique used primarily by women, producing rhythmic pulsations and guttural tones that accompanied oral narrative and dance.

The tradition is functionally extinct. A handful of fragmentary recordings exist from the mid-twentieth century, mostly captured by Japanese ethnomusicologists who arrived late in the process of cultural destruction. By the time serious documentation efforts began, the number of practitioners who had learned rekuhkara through natural transmission, rather than from recordings, had dwindled to nearly zero.

## Language and Music as One

What makes the loss of rekuhkara particularly devastating is that it cannot be separated from the Ainu language itself. Rekuhkara was not merely performed in Ainu; it was structurally embedded in the language's phonology, its rhythmic patterns tied to the prosody and stress patterns of spoken Ainu. The sounds, breathing techniques, and vocal textures drew directly from the phonetic inventory of a language that is a true isolate, unrelated to Japanese, Korean, or any other known language family.

The Ainu language was itself driven to the edge of extinction by the same forces that destroyed rekuhkara. The Meiji government's Hokkaido Former Aborigines Protection Act of 1899 forced Ainu children into Japanese-language schools and prohibited traditional cultural practices. Ainu people were pressured to adopt Japanese names, speak Japanese, and abandon their customs. By the early twenty-first century, UNESCO classified Ainu as critically endangered, with fewer than ten native speakers remaining.

## The Ethnomusicological Gap

Rekuhkara occupies a frustrating position in the ethnomusicological record. Enough material exists to confirm that it was a distinct tradition, not derivative of Central Asian or Inuit throat singing, but not enough to reconstruct it fully. The recordings that survive are often of elderly practitioners performing in artificial settings, removed from the ceremonial and social contexts that gave the sounds their meaning.

Scholars have noted that rekuhkara was closely associated with the Ainu yukar, the long oral epics that constituted the core of Ainu literary tradition. The throat singing served as a form of rhythmic punctuation, a sonic scaffolding for narratives that could last hours. Without the yukar tradition, rekuhkara loses its functional context. Without rekuhkara, the yukar loses its sonic texture. Each loss amplifies the other.

## Revival and Its Limits

Since the passage of Japan's 2019 Ainu Promotion Act, there have been efforts to revive Ainu cultural practices, including music. Some younger Ainu performers have studied the surviving recordings and attempted to learn rekuhkara. But revival from recordings is fundamentally different from transmission through practice. The tacit knowledge, the muscle memory, the breathing control, the contextual judgment of when and how to deploy specific techniques, these were never captured on tape. What can be recovered is an approximation. What was lost is the living tradition.`,
  quickFacts: {
    'Tradition': 'Rekuhkara (Ainu throat singing)',
    'Region': 'Hokkaido, Sakhalin, Kuril Islands',
    'Practitioners': 'Primarily women',
    'Language': 'Ainu (language isolate, critically endangered)',
    'Key Legislation': 'Hokkaido Former Aborigines Protection Act (1899)',
    'UNESCO Status': 'Ainu language: critically endangered',
    'Related Art Form': 'Yukar (oral epic narrative)',
    'Revival Efforts': 'Post-2019 Ainu Promotion Act',
  },
  connections: [
    { slug: 'castrato-voice', relationship: 'Both are vocal traditions that cannot be fully reconstructed because the technique was transmitted through embodied practice, not written instruction' },
    { slug: 'eyak-language', relationship: 'Both represent the simultaneous extinction of a language and the cultural practices inseparable from it' },
    { slug: 'tasmanian-languages', relationship: 'Both indigenous vocal traditions destroyed by colonial assimilation policies that targeted language as the first casualty' },
  ],
  sources: [
    { title: 'The Ainu and Their Culture', author: 'Shigeru Kayano', year: 1994 },
    { title: 'Music of the Ainu', author: 'Fumio Koizumi', year: 1977 },
    { title: 'Our Land Was a Forest: An Ainu Memoir', author: 'Kayano Shigeru (trans. Kyoko Selden)', year: 1994 },
    { title: 'Ainu: Spirit of a Northern People', author: 'Smithsonian Institution', year: 1999 },
  ],
};
