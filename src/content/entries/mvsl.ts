import type { Entry } from '../../types';

export const mvsl: Entry = {
  slug: 'mvsl',
  name: "Martha's Vineyard Sign Language",
  tagline: 'For 250 years, nearly everyone on the island signed — deaf and hearing alike. When asked about deaf neighbors: "They were just deaf."',
  category: 'language',
  subcategory: 'Sign Languages',
  lastKnownYear: 1952,
  lastKnownLocation: "Martha's Vineyard, Massachusetts",
  coordinates: [41.40, -70.60],
  region: 'North America',
  status: 'extinct',
  cause: 'The founding of centralized deaf schools drew deaf residents off-island, breaking the community transmission chain; genetic mixing reduced hereditary deafness rates',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## An Island Where Everyone Signed

From roughly the late seventeenth century to the mid-twentieth century, the island of Martha's Vineyard off the coast of Massachusetts had an extraordinarily high rate of hereditary deafness. In some villages, particularly in Chilmark and the area called Up-Island, as many as one in four people were deaf, compared to roughly one in 5,700 on the mainland. The cause was genetic: the island's founding population carried a recessive gene for deafness, and centuries of intermarriage in a small, isolated community amplified its frequency.

The islanders' response was not to treat deafness as a disability. It was to sign. Nearly everyone on the island, hearing and deaf alike, learned Martha's Vineyard Sign Language, a system unrelated to American Sign Language that had developed organically within the community. MVSL was not a "deaf language" used by a minority. It was a community language used by the majority, a shared medium in which hearing fishermen discussed the weather, hearing farmers negotiated prices, and hearing grandmothers gossiped, whether or not any deaf person was present.

## "They Were Just Deaf"

The anthropologist Nora Ellen Groce documented MVSL in her landmark 1985 study *Everyone Here Spoke Sign Language*. When she interviewed elderly hearing residents who had grown up alongside deaf neighbors, they often struggled to remember which of their childhood companions had been deaf. The deafness was so unremarkable, so fully accommodated by the bilingual environment, that it left no particular impression. One informant, asked to identify deaf people in the community, replied with the phrase that became the study's most quoted line: "Oh, those people weren't handicapped. They were just deaf."

This was not a utopia. The island was poor, isolated, and subject to all the ordinary frictions of a small community. But in the specific domain of communication, it had achieved something that no other documented community replicated at scale: a society in which deafness imposed no communicative barrier because everyone, hearing and deaf, shared a language.

## The End of Isolation

MVSL began to decline in the mid-nineteenth century for two related reasons. First, the founding of the American School for the Deaf in Hartford, Connecticut, in 1817, and later the establishment of other mainland deaf schools, drew deaf Vineyard residents off the island for education. There they learned ASL, intermarried with deaf people from other communities, and often did not return. The gene pool diversified, and the incidence of hereditary deafness dropped.

Second, improved transportation and communication broke the island's isolation. New residents arrived who did not sign. Tourism grew. The tight-knit Up-Island communities dispersed and diluted. MVSL, which had no written form, no formal instruction, and no institutional support, relied entirely on community transmission. When the community changed, the language died.

## The Last Signer

The last known person who could communicate in MVSL, Katie West, died in 1952. By then, the language had already been functionally dead for a generation, with West one of a handful of elderly hearing residents who remembered it from their youth. No comprehensive recording or documentation of MVSL was made before it disappeared. Groce's study, published in 1985, relied on the memories of hearing informants who had known the language decades earlier. The signs themselves are largely gone.`,
  quickFacts: {
    'Active Period': '~1700-1900 (peak usage)',
    'Location': "Martha's Vineyard, Massachusetts (especially Chilmark)",
    'Deafness Rate': 'Up to 1 in 4 in some villages',
    'Mainland Rate': '~1 in 5,700',
    'Cause of Deafness': 'Hereditary recessive gene (DFNB1-related)',
    'Relationship to ASL': 'Unrelated; independent development',
    'Last User': 'Katie West (died 1952)',
    'Key Study': 'Everyone Here Spoke Sign Language (Nora Ellen Groce, 1985)',
  },
  connections: [
    { slug: 'nushu', relationship: 'Both were communication systems created by communities whose shared identity and isolation sustained a unique linguistic tradition' },
    { slug: 'shuadit', relationship: 'Both were community languages killed not by persecution but by the dissolution of the isolated communities that sustained them' },
    { slug: 'ayapaneco', relationship: 'Both illustrate how a language can die when its community disperses, even without active suppression' },
  ],
  sources: [
    { title: 'Everyone Here Spoke Sign Language: Hereditary Deafness on Martha\'s Vineyard', author: 'Nora Ellen Groce', year: 1985 },
    { title: 'A Place of Their Own: Creating the Deaf Community in America', author: 'John Vickrey Van Cleve & Barry A. Crouch', year: 1989 },
    { title: 'Deaf in America: Voices from a Culture', author: 'Carol Padden & Tom Humphries', year: 1988 },
    { title: 'Seeing Voices: A Journey into the World of the Deaf', author: 'Oliver Sacks', year: 1989 },
  ],
};
