import type { Entry } from '../../types';

export const yahi: Entry = {
  slug: 'yahi',
  name: 'The Yahi Language',
  tagline: 'When Ishi walked out of the California wilderness in 1911, he carried the last living words of a language whose people had been hunted to extinction.',
  category: 'language',
  subcategory: 'North American Languages',
  lastKnownYear: 1916,
  lastKnownLocation: 'San Francisco, California',
  coordinates: [37.87, -122.26],
  region: 'North America',
  status: 'extinct',
  cause: 'Genocide of the Yahi people through settler violence and forced displacement in 19th century California',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Last of the Yahi

On August 29, 1911, a starving man was found crouching near a slaughterhouse outside Oroville, California. He spoke no English and no one could understand him. He was Ishi, the sole surviving member of the Yahi, a small group within the Yana people who had lived for thousands of years in the foothills of Mount Lassen in northern California. The Yahi had been systematically hunted during the California Gold Rush era. Settlers organized killing parties, the state government paid bounties, and by the 1870s the Yahi were believed to be completely annihilated. A tiny remnant, including Ishi, had survived for decades in hiding, living in absolute concealment in the rugged canyons of Deer Creek. When the last of his companions died, Ishi walked out alone, the final speaker of a language that had existed for millennia.

## Life at the Museum

Ishi was taken to the University of California's Museum of Anthropology in San Francisco, where he lived for the remaining four and a half years of his life. The anthropologist Alfred Kroeber and linguist Thomas Talbot Waterman became his primary contacts and caretakers. Ishi demonstrated toolmaking techniques, sang songs, and told stories, providing researchers with an extraordinary window into Yahi culture and language. He was not a specimen to be studied against his will; by most accounts, he adapted to his new circumstances with patience and humor, forming genuine relationships with the museum staff. He gave public demonstrations of arrow-making and fire-starting that drew large crowds.

## An Incomplete Record

Kroeber and Waterman recorded Yahi vocabulary, grammar, and oral narratives, but the documentation remained incomplete. Ishi was the only speaker, and there was no one to cross-reference his usage against. Certain concepts could not be easily elicited through translation. Some grammatical structures were recorded only partially. Waterman produced word lists and Kroeber compiled ethnographic notes, but a full grammar of Yahi was never written. The linguist Edward Sapir later analyzed some of the recordings and connected Yahi to the broader Yana language family within the proposed Hokan stock. Ishi died of tuberculosis on March 25, 1916. Much of what he knew died with him, preserved only in fragments on wax cylinder recordings and in handwritten notebooks.

## What Was Lost

The Yahi language belonged to the Yana family, itself a language isolate or a member of the hypothetical Hokan grouping. It had a distinctive feature rare among the world's languages: a fully developed system of male and female speech, where men and women used different word forms in everyday conversation. This was not merely a matter of vocabulary but a structural feature woven through the grammar. The loss of Yahi meant the loss of one of the clearest examples of this phenomenon in North America. More broadly, Yahi encoded a people's entire relationship with a specific landscape, names for plants, animals, water sources, and seasonal patterns that had been refined over countless generations in the Deer Creek watershed. That knowledge system, inseparable from the language that expressed it, is gone.`,
  quickFacts: {
    'Language Family': 'Yana/Hokan',
    'Last Speaker': 'Ishi, died 1916',
    'Documentation': 'Partial, by Alfred Kroeber and T.T. Waterman',
    'Peak Population': '~400 Yahi people',
    'Region': 'Northern California foothills',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both were the last speakers of their languages, each carrying an entire world of knowledge alone' },
    { slug: 'tanganyika', relationship: 'Both illustrate how political power and violence determine which cultures survive and which are erased' },
  ],
  sources: [
    { title: 'Ishi in Two Worlds: A Biography of the Last Wild Indian in North America', author: 'Theodora Kroeber', year: 1961 },
    { title: 'Ishi, the Last Yahi: A Documentary History', author: 'Robert Heizer and Theodora Kroeber', year: 1979 },
    { title: 'The Yana Languages', author: 'Edward Sapir', year: 1918 },
    { title: 'Wild Men: Ishi and Kroeber in the Wilderness of Modern America', author: 'Douglas Cazaux Sackman', year: 2010 },
  ],
};
