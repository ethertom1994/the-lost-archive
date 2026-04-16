import type { Entry } from '../../types';

export const ayapaneco: Entry = {
  slug: 'ayapaneco',
  name: 'Ayapaneco',
  tagline: 'A language whose survival once depended entirely on whether two stubborn old men in the same village could set aside a personal grudge.',
  category: 'language',
  subcategory: 'Mesoamerican Languages',
  lastKnownYear: 2011,
  lastKnownLocation: 'Ayapa, Tabasco, Mexico',
  coordinates: [18.26, -93.10],
  region: 'Central America',
  status: 'functionally_extinct',
  cause: 'Spanish language dominance, cultural stigmatization, and the two last fluent speakers refusing to speak to each other',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Two Speakers, Five Hundred Meters Apart

In the small village of Ayapa, in the Gulf coast state of Tabasco, Mexico, two elderly men lived roughly five hundred meters apart. Manuel Segovia and Isidro Velazquez were the last two people on Earth who spoke Ayapaneco fluently. They were also not on speaking terms. The reasons for their falling out varied depending on who told the story — personality differences, a long-simmering personal dispute, the ordinary friction of small-town life — but the result was the same. The only two people who could have a fluent conversation in an ancient Mesoamerican language simply chose not to. A tongue that had survived the Spanish conquest, colonial suppression, and centuries of cultural erosion was being finished off by a grudge.

The story broke internationally around 2011, when linguists and journalists realized the absurd tragedy of the situation. Headlines framed it as a parable: the last two speakers of a dying language refusing to talk. The reality was more complicated — both men had been speaking Ayapaneco less and less for decades, surrounded by a community that had shifted entirely to Spanish — but the image stuck. A language held hostage by two men's stubbornness became a symbol of how fragile the thread of transmission can become.

## A Zoquean Remnant

Ayapaneco belongs to the Mixe-Zoquean language family, one of the oldest in Mesoamerica. Zoquean languages were once spoken across a wide swath of southern Mexico, and some linguists believe the ancient Olmec civilization — the earliest major Mesoamerican culture — may have spoken a Mixe-Zoquean language. Ayapaneco represents one of the terminal branches of this ancient family, carrying grammatical structures and vocabulary that connect it to thousands of years of continuous habitation in the Gulf lowlands.

By the twentieth century, Spanish had become the sole language of commerce, education, and social life in Ayapa. Children grew up speaking Spanish; Ayapaneco became something grandparents muttered among themselves, then something only a few elders remembered, then something two men carried in their heads while refusing to share it with each other.

## After 2011

International media attention produced documentation efforts — a dictionary, teaching materials, workshops. A handful of semi-speakers emerged, people who could understand and produce limited Ayapaneco. But semi-speakers are not fluent speakers. The ability to hold a natural, spontaneous conversation in Ayapaneco — to think in it, argue in it, tell jokes in it — died with the generation that chose not to use it. What was documented is a vocabulary list and a grammar sketch. What was lost is a living language.

## The Parable

Ayapaneco's story resonates beyond linguistics because it compresses the mechanics of language death into a human-scale drama. Languages do not usually die because their last speakers have a feud. They die because communities shift to dominant languages under economic and social pressure, because children are taught that their parents' tongue is backward, because the state rewards one language and ignores another. But at the very end of that long process of erosion, what remains is always personal: specific people who remember, specific people who forget, and the specific relationships between them that determine whether anything gets passed on. In Ayapa, the fate of a language rested on five hundred meters of village road and whatever had gone wrong between two old men years before anyone thought to ask.`,
  quickFacts: {
    'Language Family': 'Mixe-Zoquean',
    'Known Speakers': '~10 semi-speakers, 2 fluent as of 2011',
    'Location': 'Ayapa, Tabasco, Mexico',
    'Unique Situation': 'Last two fluent speakers had personal feud',
    'Media Attention': 'Went viral internationally, ~2011',
    'Teaching Program': 'Started with community workshops',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both languages were reduced to their final speakers, each carrying an entire world of meaning that no one else could fully access' },
    { slug: 'mixtec-codices', relationship: 'Both are Mesoamerican cultural losses — one a visual record system burned by colonizers, the other a spoken tradition erased by linguistic dominance' },
  ],
  sources: [
    { title: 'Language Death and Revitalization in the Zoque Region', author: 'Søren Wichmann', year: 2007 },
    { title: 'The Last Speakers: The Quest to Save the World\'s Most Endangered Languages', author: 'K. David Harrison', year: 2010 },
    { title: 'Dying Languages: The Last Speakers of Ayapaneco', author: 'The Guardian', year: 2011 },
    { title: 'Ayapaneco Language Documentation Project', author: 'Instituto Nacional de Lenguas Indígenas (INALI)', year: 2012 },
  ],
};
