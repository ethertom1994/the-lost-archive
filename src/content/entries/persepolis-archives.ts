import type { Entry } from '../../types';

export const persepolisArchives: Entry = {
  slug: 'persepolis-archives',
  name: 'Persepolis Royal Archives',
  tagline: 'When Alexander burned Persepolis in 330 BCE, he destroyed not just a palace but the central archive of the Achaemenid Empire. Zoroastrian tradition later claimed an entire Avesta, written in gold ink on ox-hides, was lost in that fire.',
  category: 'place',
  subcategory: 'Destroyed Libraries',
  lastKnownYear: -330,
  lastKnownLocation: 'Persepolis, Fars Province, modern Iran',
  coordinates: [29.935, 52.891],
  region: 'Ancient Persia',
  status: 'extinct',
  cause: 'Deliberate burning by Macedonian forces under Alexander the Great, allegedly in retaliation for the Persian burning of Athens in 480 BCE',
  body: `## The Night the Empire\'s Memory Burned

In early 330 BCE, Alexander the Great entered Persepolis, the ceremonial capital of the Achaemenid Empire. The city had no walls; it was a sacred precinct of palaces, audience halls, and royal tombs built by Darius I and Xerxes two centuries earlier. Alexander\'s army looted the treasury — ancient sources report that moving the bullion required three thousand camels and many mules — and then, after months of occupation, burned the Apadana palace complex to the ground.

Plutarch, Diodorus Siculus, and Arrian all describe the fire. The most famous version has the Athenian courtesan Thais proposing the burning during a drunken banquet, as revenge for the Persian destruction of the Athenian acropolis in 480 BCE. Modern scholars debate whether the burning was drunken impulse or deliberate political theater, the closing ceremony of the Achaemenid Empire. What is certain is that the fire was enormous and that the damage to the city\'s archival function was total.

## The Zoroastrian Claim

Zoroastrian tradition preserved a specific memory of what was lost. The Book of Arda Wiraz, a Middle Persian religious text composed in the third or fourth century CE, states that Persepolis\' archives contained the complete Avesta and its Zend commentary, written on twelve thousand prepared cow hides in gold ink, and that Alexander burned them.

The claim that a complete written Avesta existed before Alexander is disputed. Modern scholarship generally holds that the Avesta was transmitted orally for centuries and only partially committed to writing in the Sasanian period. But some form of religious archive almost certainly existed at Persepolis alongside the administrative records, and the Zoroastrian tradition remembers the burning as a foundational cultural catastrophe, the event that broke the chain of religious transmission.

## The Fortification Tablets

Archaeology has recovered a grimly instructive fragment of what the archive once contained. Between 1933 and 1934, the Oriental Institute of Chicago excavated roughly thirty thousand clay tablets and fragments from a small administrative deposit in the northern Fortification wall, an area that happened not to burn completely. These Persepolis Fortification Tablets, written mostly in Elamite, are ordinary administrative documents: ration records, travel permits, disbursements of wine and grain from royal storehouses.

They are a glimpse of the bureaucratic machinery of the empire at a single corner of one palace over a few years. What is extraordinary is what they imply: if one small side-deposit could yield thirty thousand tablets, the central archives that burned in 330 BCE must have held an immense administrative record of an empire that stretched from the Aegean to the Indus.

## What Alexander Ended

Greek sources wrote the history of the Achaemenid Empire from the outside. Our Persian Wars are told by Herodotus, our Cyrus is in Xenophon, our Darius is on a few rock inscriptions. The Achaemenids\' own voice, the internal records of the largest empire the ancient world had yet seen, went up in a single fire. What was lost was not just bullion or even manuscripts but an empire\'s ability to be remembered in its own language.`,
  quickFacts: {
    'Location': 'Persepolis (Takht-e Jamshid), Fars Province, Iran',
    'Destruction': '330 BCE',
    'Perpetrator': 'Alexander the Great',
    'Treasury Reported by Diodorus': '2,500 tons (reckoned in silver)',
    'Surviving Administrative Archive': '~30,000 Elamite Fortification Tablets',
    'Zoroastrian Tradition': 'Avesta written in gold ink on 12,000 ox-hides said to have burned',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both were royal archives whose loss erased the internal records of great empires' },
    { slug: 'carthage-destruction', relationship: 'Both are acts of deliberate archival destruction by conquering Mediterranean powers' },
    { slug: 'hanging-gardens', relationship: 'Both sit at the boundary between historical record and later legend, in the lost imperial landscape of ancient Persia and Mesopotamia' },
  ],
  sources: [
    { title: 'Alexander the Great & the Burning of Persepolis', author: 'Joshua J. Mark', url: 'https://www.worldhistory.org/article/214/alexander-the-great--the-burning-of-persepolis/', year: 2012 },
    { title: 'The Persepolis Fortification Archive', author: 'Institute for the Study of Ancient Cultures, University of Chicago', url: 'https://isac.uchicago.edu/research/projects/persepolis-fortification-archive' },
    { title: 'From Cyrus to Alexander: A History of the Persian Empire', author: 'Pierre Briant', year: 2002 },
  ],
};
