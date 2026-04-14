import type { Entry } from '../../types';

export const dalmatianLanguage: Entry = {
  slug: 'dalmatian-language',
  name: 'The Dalmatian Language',
  tagline: 'The last Romance language to go extinct ended with Tuone Udaina, killed by a landmine on the island of Krk in 1898.',
  category: 'language',
  subcategory: 'Romance Languages',
  lastKnownYear: 1898,
  lastKnownLocation: 'Krk island, Croatia',
  coordinates: [45.03, 14.57],
  region: 'Europe',
  status: 'extinct',
  cause: 'Centuries of linguistic pressure from Venetian Italian and Croatian, leading to gradual language shift',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Last Romance Language to Die

Dalmatian was a Romance language spoken along the eastern coast of the Adriatic Sea, from the island of Veglia (now Krk) in the north to Ragusa (now Dubrovnik) in the south. It descended directly from the Vulgar Latin spoken in the Roman province of Dalmatia, making it a sibling of Italian, French, Spanish, and Romanian. But while those languages flourished into the tongues of nations, Dalmatian contracted over centuries, squeezed between Venetian Italian from the sea and Croatian from the interior. By the nineteenth century, it survived only in fragments, spoken by a handful of elderly people on a single island. It holds the somber distinction of being the most recent Romance language to become extinct.

## Tuone Udaina, the Last Speaker

The last known speaker of Dalmatian was Tuone Udaina, also recorded as Antonio Udina, a barber on the island of Krk. Udaina was born around 1823 into a world where Dalmatian was already a relic. His parents had spoken it, but by his adulthood the language had no community of daily use. Udaina himself was more comfortable in Italian and Croatian, and his Dalmatian was imperfect, colored by decades of disuse. He was also deaf in one ear from a childhood illness, which complicated the linguistic work that would define his legacy. On June 10, 1898, Udaina was killed in a landmine explosion on a road near Veglia. He was approximately seventy-five years old. Dalmatian died with him.

## Bartoli's Race Against Time

In 1897, the Italian linguist Matteo Giulio Bartoli traveled to Krk specifically to document what remained of Dalmatian. He found Udaina and conducted extensive interviews, recording vocabulary, phrases, and grammatical structures. The work was painstaking. Udaina's grasp of the language was that of a semi-speaker, someone who remembered words and structures from childhood but had not used them regularly in decades. Bartoli had to coax and cross-reference, working around gaps and uncertainties. He published his findings as "Das Dalmatische" in 1906, a two-volume study that remains the primary record of the language. Without Bartoli's intervention, Dalmatian would have vanished with almost no trace at all.

## A Unique Branch on the Romance Tree

What made Dalmatian linguistically significant was its archaic character. It preserved features of Vulgar Latin that other Romance languages had lost, including certain vowel distinctions and consonant clusters that had been simplified elsewhere. It developed its own innovations too, particularly in how it handled Latin vowels, following patterns distinct from both Italian and Romanian. Dalmatian offers linguists a window into an alternate path that Latin could have taken, a road not traveled by the surviving Romance languages. Its loss closed off one of the few remaining sources of evidence for understanding how Latin fractured into the diverse language family that spans Europe and beyond today.`,
  quickFacts: {
    'Language Family': 'Romance/Italic',
    'Last Speaker': 'Tuone Udaina, 1898',
    'Peak Distribution': 'Dalmatian coast, Adriatic islands',
    'Documented By': 'Matteo Bartoli, 1897',
    'Cause of Death of Last Speaker': 'Landmine explosion',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both were documented by linguists racing against time before the last speakers died' },
    { slug: 'tanganyika', relationship: 'Both cultures were absorbed by surrounding political and linguistic powers' },
  ],
  sources: [
    { title: 'Das Dalmatische: Altromanische Sprachreste von Veglia bis Ragusa', author: 'Matteo Bartoli', year: 1906 },
    { title: 'The Romance Languages', author: 'Martin Harris and Nigel Vincent', year: 1988 },
    { title: 'Dalmatian: A Romance Language in the Balkans', author: 'Žarko Muljačić', year: 2000 },
  ],
};
