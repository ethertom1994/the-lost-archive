import type { Entry } from '../../types';

export const sumerian: Entry = {
  slug: 'sumerian',
  name: 'Sumerian',
  tagline: 'The oldest known written language, spoken in Mesopotamia from at least 3100 BCE. It has no known relatives. The language that invented writing was itself written out of existence.',
  category: 'language',
  subcategory: 'Ancient Languages',
  lastKnownYear: '~100 CE',
  lastKnownLocation: 'Southern Mesopotamia (modern Iraq)',
  coordinates: [31.32, 45.64],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Gradual replacement by Akkadian as a spoken language around 2000 BCE, then slow decline as a scholarly and liturgical language over the following two millennia',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The First Writer

Sometime around 3400-3100 BCE, in the cities of southern Mesopotamia — Uruk, Ur, Eridu — someone pressed a reed stylus into a tablet of wet clay and made a mark that represented not just a picture but an idea, a word, a sound. This was the beginning of writing. And the language being written was Sumerian.

Sumerian is a language isolate: it has no known relatives, living or dead. It doesn't belong to any language family. It is not Semitic, not Indo-European, not Turkic, not related to anything else we have ever found. Where the Sumerians came from and how their language developed are among the deepest unsolved questions in linguistics and archaeology.

## A Language of Firsts

The Sumerians didn't just invent writing. They wrote the first known literature (*The Epic of Gilgamesh*), the first known legal codes (Ur-Nammu's laws, predating Hammurabi by three centuries), the first known mathematical texts, the first known astronomical observations, the first known schools, and the first known dictionaries. Sumerian cuneiform became the writing system of the ancient Near East, adapted for Akkadian, Babylonian, Assyrian, Hittite, and Elamite. It was the technology that made civilization recordable.

## Death by Replacement

As a spoken language, Sumerian began declining around 2000 BCE, gradually replaced by Akkadian, a Semitic language spoken by the peoples who came to dominate Mesopotamia politically. But Sumerian didn't simply disappear. It became what Latin would later become in medieval Europe: a dead language of scholarship, religion, and prestige. Scribes learned Sumerian in school, priests recited Sumerian prayers, and Sumerian-Akkadian bilingual dictionaries were compiled for centuries.

This scholarly afterlife sustained Sumerian for nearly two thousand years after it ceased to be anyone's native tongue. The last datable cuneiform texts — including some in Sumerian — are from the 1st century CE, after which the cuneiform tradition itself died out, replaced by alphabetic scripts. Sumerian was then truly dead: unspoken, unread, unknown.

## Resurrection

When European archaeologists began excavating Mesopotamian sites in the 19th century, they encountered thousands of cuneiform tablets. Akkadian, as a Semitic language, could be deciphered using its relationship to known languages. But the older Sumerian texts resisted interpretation for decades. It was the bilingual tablets — those scribal dictionaries — that finally unlocked Sumerian. The language that had been dead for 1,800 years could be read again.

Today, Sumerologists number perhaps a few hundred worldwide. They can read Sumerian texts, debate Sumerian grammar, and translate Sumerian poetry. But no one knows how Sumerian sounded. The pronunciation is reconstructed from clues, but the music of the language — its rhythm, intonation, the way it felt in the mouth — is beyond recovery.`,
  quickFacts: {
    'Type': 'Language isolate (no known relatives)',
    'Writing System': 'Cuneiform',
    'Earliest Texts': '~3400-3100 BCE',
    'Ceased as Spoken Language': '~2000 BCE',
    'Last Cuneiform Texts': '~1st century CE',
    'Key Works': 'Epic of Gilgamesh, Laws of Ur-Nammu',
    'Rediscovered': '19th century, via bilingual tablets',
    'Surviving Tablets': 'Hundreds of thousands',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent vast stores of ancient knowledge — one a physical library destroyed, the other an entire linguistic framework lost' },
    { slug: 'quipu', relationship: 'Both recording systems from ancient civilizations whose full meaning remains partially undeciphered' },
    { slug: 'nalanda', relationship: 'Both centers of learning where knowledge was accumulated over millennia, then lost through civilizational change' },
  ],
  sources: [
    { title: 'The Sumerians: Their History, Culture, and Character', author: 'Samuel Noah Kramer', year: 1963 },
    { title: 'Sumerian Grammar', author: 'Dietz Otto Edzard', year: 2003 },
    { title: 'The Literature of Ancient Sumer', author: 'Jeremy Black et al.', year: 2004 },
    { title: 'The Electronic Text Corpus of Sumerian Literature', author: 'University of Oxford', year: 2006 },
  ],
};
