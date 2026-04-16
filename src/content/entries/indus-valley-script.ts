import type { Entry } from '../../types';

export const indusValleyScript: Entry = {
  slug: 'indus-valley-script',
  name: 'The Indus Valley Script',
  tagline: 'Over 400 symbols on 5,000 artifacts. No bilingual text. No Rosetta Stone. The writing of one of humanity\'s first great civilizations remains unread.',
  category: 'language',
  lastKnownYear: '~1900 BCE',
  lastKnownLocation: 'Mohenjo-daro, Indus Valley (modern Pakistan)',
  coordinates: [27.3, 68.0],
  region: 'South Asia',
  status: 'extinct',
  cause: 'The collapse of the Indus Valley Civilization around 1900 BCE ended the script\'s use, and no bilingual key has ever been found',
  imageUrl: undefined,
  body: `## Written in Stone, Read by No One

The Indus Valley Civilization, which flourished from roughly 2600 to 1900 BCE across what is now Pakistan and northwestern India, was one of the ancient world's largest urban cultures. Its cities, Mohenjo-daro, Harappa, Dholavira, and hundreds more, featured advanced drainage systems, standardized weights, and planned street grids. And on thousands of small objects found across these sites, its people left writing that no one alive can read.

The script appears primarily on stamp seals, small square or rectangular objects made of steatite, carved with symbols and often an animal figure. Over 400 distinct signs have been cataloged across approximately 5,000 inscribed objects excavated since 1924. The inscriptions are short, averaging fewer than five symbols each. The longest known inscription contains only 26 symbols. No text longer than a single line has been found, and no document resembling a letter, a story, or a record of any length survives.

## Why It Resists Decipherment

The obstacles to reading the Indus script are fundamental. There is no bilingual inscription, no equivalent of the Rosetta Stone that might allow translators to map Indus symbols onto a known language. The underlying language is unknown. Scholars have proposed Dravidian, early Indo-Aryan, a language isolate, and various other candidates, but none can be confirmed without reading the script itself. The inscriptions are too short for statistical analysis to reliably determine whether the symbols represent a full language, a proto-writing system, or something else entirely.

Over a hundred decipherment attempts have been published since the 1920s. None has achieved scholarly consensus. In 2025, Tamil Nadu Chief Minister M.K. Stalin announced a one-million-dollar prize for successful decipherment, a measure of both the script's cultural importance and the depth of the impasse.

## What Silence Means

The Indus script's illegibility does not merely obscure the details of a dead civilization. It removes from history the voice of a society that spanned over a million square kilometers and sustained some of the ancient world's most sophisticated urban planning. We can excavate their bricks, measure their streets, and weigh their standardized stones. But we cannot read a single word they chose to write down. Their priorities, their laws, their names for themselves and their cities, all remain locked behind symbols that look deceptively simple and have resisted every key we have tried.`,
  quickFacts: {
    'Civilization Period': '~2600-1900 BCE',
    'Number of Signs': '~400+ distinct symbols',
    'Inscribed Objects Found': '~5,000',
    'Average Inscription Length': 'Fewer than 5 symbols',
    'Longest Known Text': '26 symbols',
    'Primary Medium': 'Steatite stamp seals',
    'Major Sites': 'Mohenjo-daro, Harappa, Dholavira',
    'Decipherment Status': 'Undeciphered',
  },
  connections: [
    { slug: 'proto-elamite', relationship: 'Both are undeciphered scripts from Bronze Age civilizations whose writing systems died with their cultures' },
    { slug: 'cypro-minoan', relationship: 'Another undeciphered ancient script, similarly lacking a bilingual key or sufficient text length for statistical decipherment' },
  ],
  sources: [
    { title: 'The Indus Script: A Challenging Puzzle', author: 'Asko Parpola', year: 1994 },
    { title: 'The Ancient Indus Valley: New Perspectives', author: 'Jane McIntosh', year: 2008 },
    { title: 'Indus Script', url: 'https://en.wikipedia.org/wiki/Indus_script' },
  ],
};
