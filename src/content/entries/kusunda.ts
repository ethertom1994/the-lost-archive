import type { Entry } from '../../types';

export const kusunda: Entry = {
  slug: 'kusunda',
  name: 'The Kusunda Language',
  tagline: 'A language with no known relatives on Earth, reduced to a single fluent speaker — the last echo of a possibly pre-Neolithic world.',
  category: 'language',
  subcategory: 'Language Isolates',
  lastKnownYear: 2012,
  lastKnownLocation: 'Dang District, Nepal',
  coordinates: [28.0, 82.3],
  region: 'South Asia',
  status: 'functionally_extinct',
  cause: 'Assimilation into dominant Nepali-speaking culture and loss of traditional forest-dwelling lifestyle',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Kings of the Forest

The Kusunda people called themselves Ban Raja — kings of the forest. For centuries, perhaps millennia, they lived as nomadic hunter-gatherers in the subtropical forests of western Nepal, moving through the lowland Terai and the foothills of the Himalayas. They built temporary shelters, hunted small game, and gathered wild tubers and fruit. They also spoke a language that, as far as any linguist has been able to determine, is connected to nothing else on the planet.

Kusunda is a language isolate — a term that sounds clinical but means something extraordinary. Every other language in Nepal belongs to one of two major families: Indo-European (like Nepali) or Sino-Tibetan (like Tamang or Newari). Kusunda belongs to neither. It has no demonstrated genetic relationship to any language family anywhere in the world. It sits alone, an orphan in the human linguistic tree, possibly the last surviving fragment of a language family that predates the great migrations that populated South Asia.

## The Search for Relatives

Linguists have tried repeatedly to connect Kusunda to something. In the 1960s and 70s, researchers proposed links to the Indo-Pacific hypothesis — a speculative grouping that tried to connect Andamanese, Papuan, and Tasmanian languages. Others suggested ties to Nihali, another isolate in central India, or to the Munda languages of eastern India. None of these proposals survived scrutiny. The vocabulary, grammar, and phonology of Kusunda stubbornly refuse to pattern with any known family.

The language has an unusual phonological inventory, including retroflex sounds and a set of distinctions that do not map neatly onto the categories of its neighbors. Its verb morphology is agglutinative but follows its own internal logic. Every attempt at classification has ended the same way: Kusunda remains Kusunda, alone.

## Gyani Maiya Sen

By the early 2000s, the Kusunda people had largely abandoned their forest-dwelling life. Government resettlement programs, deforestation, and economic pressure pushed them into villages where Nepali was the dominant language. Most younger Kusunda spoke only Nepali. The language retreated to the memories of elders, and one by one those elders died.

In 2004, the linguist Madhav Pokharel located a woman named Gyani Maiya Sen in Dang District who still spoke Kusunda fluently. By 2012, she was the only fully fluent speaker remaining. A handful of semi-speakers — perhaps a hundred people who remembered words and phrases — were scattered across western Nepal, but Gyani Maiya Sen alone could produce and understand extended natural speech in the language. She worked with researchers to record vocabulary, grammar, and narratives, becoming the sole bridge between an ancient linguistic tradition and the future.

## What Vanishes With an Isolate

When a language from a large family dies, its relatives preserve some of the structural and conceptual patterns it carried. When an isolate dies, everything it contained that was unique — every grammatical structure, every semantic distinction, every way of carving up experience that no other language shares — disappears completely. With Kusunda, what may be lost is not merely a language but the last window into a way of organizing human thought that existed before the Indo-European and Sino-Tibetan expansions reshaped the linguistic map of Asia. The forest kingdom has no heir.`,
  quickFacts: {
    'Classification': 'Language isolate — no known relatives',
    'Last Fluent Speaker': 'Gyani Maiya Sen, as of 2012',
    'Speakers': '1 fluent, ~100 semi-speakers',
    'Location': 'Western Nepal',
    'Self-Name': 'Ban Raja: "kings of the forest"',
    'Attempts to Classify': 'All failed — remains unconnected',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both languages were reduced to a single fluent speaker carrying an entire linguistic world alone' },
    { slug: 'library-of-alexandria', relationship: 'Both represent vast, irreplaceable stores of ancient knowledge that the modern world failed to preserve in time' },
  ],
  sources: [
    { title: 'Kusunda: A Typological Study', author: 'Madhav Pokharel', year: 2009 },
    { title: 'Language Isolates and Their History', author: 'Lyle Campbell', year: 2013 },
    { title: 'The Last Speaker of Kusunda', author: 'Mark Turin', year: 2012 },
    { title: 'Endangered Languages of Nepal', author: 'Ethnologue / SIL International', year: 2016 },
  ],
};
