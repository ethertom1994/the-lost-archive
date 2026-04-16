import type { Entry } from '../../types';

export const samarqandObservatory: Entry = {
  slug: 'samarqand-observatory',
  name: 'Ulugh Beg\'s Samarqand Observatory',
  tagline: 'A Timurid prince built the most precise astronomical instrument in the world, catalogued over a thousand stars without a telescope, and was assassinated by his own son. A mob then levelled his observatory and its library of fifteen thousand books.',
  category: 'place',
  subcategory: 'Lost Observatories',
  lastKnownYear: 1449,
  lastKnownLocation: 'Samarqand, Timurid Empire (modern Uzbekistan)',
  coordinates: [39.67, 67.01],
  region: 'Central Asia',
  status: 'extinct',
  cause: 'Religious backlash after Ulugh Beg\'s 1449 assassination; observatory levelled, library looted',
  imageUrl: undefined,
  body: `## A Grandson of Timur Who Preferred Astronomy

Ulugh Beg was a grandson of the conqueror Timur and governor of Samarqand from 1409 until, briefly, his accession as Timurid sultan in 1447. Where his grandfather stacked skulls outside cities he had conquered, Ulugh Beg built a madrasa and an observatory. He was a working astronomer in his own right, not merely a patron, and he wrote in Persian about trigonometric tables and planetary models. Around 1424 he began construction on a three-story observatory on a hill outside Samarqand.

At the centre of the building was a colossal meridian sextant, with a radius of more than forty metres, sunk partly into the bedrock so that the instrument was stable against wind and temperature shifts. It was the largest such instrument ever built. With it, Ulugh Beg and a team of astronomers that included Jamshid al-Kashi, Qadi Zada al-Rumi, and Ali Qushji measured the length of the sidereal year to within about a minute of the modern value and compiled a new star catalog containing the positions of 1,018 stars, most of them re-observed rather than copied from the older catalog of Ptolemy. The resulting *Zij-i Sultani*, completed in 1437, was the most accurate star catalog produced before the telescope.

## The 1449 Catastrophe

Politics ended it. In 1449, after only two years as sultan, Ulugh Beg was assassinated on the orders of his own son Abd al-Latif, who had him beheaded by one of his slaves. The religiously conservative faction that backed the parricide regarded the observatory as at best suspect and at worst impious. Within a few years the staff had been scattered. By the time the Persian traveller and chronicler Mirkhwand described the site later in the fifteenth century, the building had been stripped and levelled; the madrasa library attached to the project, said to have held fifteen thousand volumes of astronomical, mathematical, and philosophical works, was looted.

The observatory was so thoroughly destroyed that for more than four centuries its location was uncertain. It was rediscovered only in 1908, when the Russian-Uzbek archaeologist Vasily Vyatkin traced it to a small rise outside Samarqand and excavated the lower portion of the giant sextant, still intact below ground level. The upper structure, the library, and almost all the working papers are gone.

## What Survived and What Didn't

The *Zij-i Sultani* survived because Ali Qushji carried a copy westward to Ottoman Tabriz and then Istanbul after 1449, and because it was popular enough to be copied, in whole or in part, more than a hundred times over the following two centuries. Portions were translated into Arabic and Turkish, and Thomas Hyde printed an edition at Oxford in 1665. That text, then, was rescued.

What was not rescued were the working records: the logs of individual observations, the daily and nightly notes, the in-progress refinements of planetary theory that Ulugh Beg and al-Kashi had been developing, the library's manuscripts on earlier Islamic astronomy (including copies of otherwise lost texts), the treatises on instrument-making, and the collected trigonometric tables of al-Kashi beyond those that circulated independently. None of this material is known to exist today. The one catalog that survived gives us the output; everything else that would let us reconstruct how a pre-telescopic observatory actually worked day to day, as a living scientific institution, was destroyed in the months after 1449.`,
  quickFacts: {
    'Founder': 'Ulugh Beg, Timurid prince and astronomer',
    'Built': 'c. 1424',
    'Destroyed': 'After 1449, date uncertain',
    'Central Instrument': 'Meridian sextant, radius over 40 metres',
    'Star Catalog': 'Zij-i Sultani, 1,018 stars, completed 1437',
    'Library Lost': 'c. 15,000 volumes, reportedly looted',
  },
  connections: [
    { slug: 'ptolemaic-star-catalog', relationship: 'Ulugh Beg\'s catalog was the first major re-observation of star positions since Ptolemy, and deliberately superseded much of it' },
    { slug: 'uraniborg-instruments', relationship: 'Both were state-sponsored observatories that produced breakthrough pre-telescopic data and were abandoned or destroyed shortly after their founder\'s death' },
    { slug: 'house-of-wisdom', relationship: 'Both were Islamic-world scientific institutions whose working libraries vanished, leaving only the most widely-copied output texts' },
  ],
  sources: [
    { title: 'Ulugh Beg\'s Zij', author: 'E. S. Kennedy', year: 1998 },
    { title: 'Ulugh Beg Observatory - Wikipedia', url: 'https://en.wikipedia.org/wiki/Ulugh_Beg_Observatory' },
    { title: 'The Significance of Ulugh Beg\'s Zij-i Sultani', url: 'https://web.stanford.edu/~fparviz/introduction.html' },
    { title: 'Islamic Science and the Making of the European Renaissance', author: 'George Saliba', year: 2007 },
  ],
};
