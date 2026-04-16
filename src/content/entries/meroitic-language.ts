import type { Entry } from '../../types';

export const meroiticLanguage: Entry = {
  slug: 'meroitic-language',
  name: 'Meroitic Language',
  tagline: 'The language of the Kingdom of Kush, written in two scripts derived from Egyptian, used for royal inscriptions and daily administration for 700 years. We can read the letters. We still cannot read the words.',
  category: 'language',
  subcategory: 'Partially Deciphered Languages',
  lastKnownYear: 'c. 450 CE',
  lastKnownLocation: 'Kingdom of Kush, upper Nile (modern Sudan)',
  coordinates: [16.937, 33.727],
  region: 'Nubia / Sudan',
  status: 'extinct',
  cause: 'Collapse of the Meroitic kingdom c. 350-450 CE; superseded by Old Nubian; bilingual texts too scarce to enable full decipherment',
  body: `## A Script Without a Key

The Kingdom of Kush, centered on the city of Meroe on the upper Nile, controlled a powerful Nubian state from roughly 800 BCE to 350 CE. For the first half of that history Kush wrote in Egyptian. Around the third century BCE its scribes invented an alphasyllabic writing system for their own language, in two parallel forms: Meroitic Hieroglyphic, derived from Egyptian hieroglyphs, for monumental inscriptions, and Meroitic Cursive, derived from Egyptian Demotic, for administrative and everyday use.

The British Egyptologist Francis Llewellyn Griffith deciphered the script in 1909 by identifying Egyptian royal names in Meroitic transliteration. We have known for more than a century how to sound out Meroitic words. The trouble is that we do not, for the most part, know what the words mean.

## The Decipherment That Stalled

For a dead writing system to be read, you need either a bilingual text (like the Rosetta Stone that cracked Egyptian) or a known related language (as Old Persian helped with Elamite). Meroitic has neither in sufficient quantity. A handful of short bilingual inscriptions in Egyptian and Meroitic exist, enough to identify names and a few royal titles but not enough to build a working grammar or vocabulary.

Meroitic is not clearly related to any well-documented language. For decades it was treated as a linguistic isolate. Recent work by the French linguist Claude Rilly has made a strong case that Meroitic belongs to the North Eastern Sudanic branch of the Nilo-Saharan language family, related to modern Nubian and Nara. This has allowed scholars to propose meanings for a small but growing set of words by comparison with living languages. But the reconstructions remain speculative, and most of the roughly two thousand surviving Meroitic inscriptions are still, in effect, pronounceable gibberish.

## What We Can and Cannot Read

Because of the structural decipherment, Meroiticists can identify grammatical particles, royal names, titles, place names, and some formulaic funerary phrases. A typical offering inscription can be partly parsed: the deceased\'s name, the filiation (parent names), and the invocation of Isis and Osiris.

Beyond these formulas, whole classes of text are opaque. Royal chronicles from the later Meroitic kings contain narratives of campaigns, building projects, and religious events that no one can read. Temple graffiti, pilgrim inscriptions, and daily administrative documents are in the same condition. We have seven hundred years of a major African civilization\'s own writing about itself, and the content of almost all of it is lost not because the documents are missing but because the key that would open them is not yet known.

## The Kingdom\'s End

The Meroitic kingdom collapsed sometime around the middle of the fourth century CE, weakened by pressure from the rising Kingdom of Aksum to the east. A famous Aksumite royal inscription from Ezana, king of Aksum, records a campaign into Nubia around 350 CE, but does not clearly describe a conquest. By the sixth century the upper Nile had been reorganized into Christian Nubian kingdoms writing in Old Nubian, a different language using a Coptic-derived script. Meroitic was no longer spoken. Its script was forgotten. Its texts waited in the sand.`,
  quickFacts: {
    'Language Family': 'North Eastern Sudanic (Nilo-Saharan), per recent consensus',
    'Script Forms': 'Meroitic Hieroglyphic and Meroitic Cursive',
    'Script Deciphered By': 'F. L. Griffith, 1909',
    'Language Decipherment': 'Incomplete; most inscriptions still untranslated',
    'Surviving Inscriptions': 'Approximately 2,000',
    'Last Use': 'c. 450 CE',
  },
  connections: [
    { slug: 'indus-valley-script', relationship: 'Both are ancient scripts whose language remains partly or wholly undeciphered despite extensive surviving text' },
    { slug: 'aksumite-obelisks', relationship: 'The Kingdom of Aksum pressured and eventually contributed to the fall of Meroitic Kush around the 4th century CE' },
    { slug: 'cypro-minoan', relationship: 'Both are scripts we can partially recognize but whose underlying language resists full reading' },
  ],
  sources: [
    { title: 'The Linguistic Position of Meroitic', author: 'Claude Rilly', year: 2010 },
    { title: 'Meroitic script', url: 'https://en.wikipedia.org/wiki/Meroitic_script' },
    { title: 'The Meroitic Mystery: From Nubia—the land of Kush—a language lost in history', author: 'John Lawton', url: 'https://archive.aramcoworld.com/issue/198304/the.meroitic.mystery-from.nubia.the.land.of.kush.a.language.lost.in.history.htm', year: 1983 },
  ],
};
