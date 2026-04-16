import type { Entry } from '../../types';

export const pictish: Entry = {
  slug: 'pictish',
  name: 'The Pictish Language',
  tagline: 'The Picts carved symbols into stone for centuries. We can see their words. We cannot read a single one.',
  category: 'language',
  subcategory: 'Ancient Languages',
  lastKnownYear: '~900 CE',
  lastKnownLocation: 'Northern and eastern Scotland',
  coordinates: [57.0, -3.0],
  region: 'Europe',
  status: 'extinct',
  cause: 'Gradual replacement by Gaelic following the political unification of the Picts and Scots under Kenneth MacAlpin',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The People Without a Voice

The Picts dominated northern and eastern Scotland from at least the third century CE until the ninth. Roman writers called them "Picti," the painted ones, and reported that they were fierce enough to require a wall. They built a recognizable culture across what is now Scotland north of the Forth-Clyde line, leaving behind hundreds of carved stones decorated with elaborate symbols: crescents, double discs, mirror-and-comb motifs, and animals rendered in a distinctive curvilinear style. These symbol stones are found from Fife to Shetland and represent one of the most visually striking artistic traditions in early medieval Europe. But the language the Picts spoke remains almost entirely unknown.

## What We Know and What We Do Not

The fundamental problem is that the Picts left almost no texts. A handful of inscriptions survive, mostly carved in Ogham script on stone monuments, but they are short, formulaic, and stubbornly resistant to interpretation. The longest Pictish Ogham inscription, from the Lunnasting stone in Shetland, contains perhaps thirty characters. Scholars cannot agree on whether the inscriptions record personal names, tribal affiliations, memorial dedications, or something else entirely. The total corpus of Pictish text would fit on a single page.

Whether Pictish was a Celtic language related to Brythonic Welsh and Cumbric, a pre-Celtic substrate language indigenous to Scotland before Celtic-speaking peoples arrived, or some combination of both, remains one of the most contested questions in insular linguistics. Place-name evidence, particularly the element "pit" found across eastern Scotland in names like Pitlochry and Pittenweem, suggests Celtic roots. But the undecipherable Ogham inscriptions may preserve something older and stranger.

## Death by Merger

The Pictish kingdom merged with the Gaelic-speaking kingdom of Dal Riata under Kenneth MacAlpin around 843 CE. What followed was not a sudden extinction but a generational shift. Gaelic became the language of church, court, and eventually the common people of the former Pictish territories. By the tenth century, Pictish had ceased to be spoken. No grammars were written, no dictionaries compiled, no literature preserved. The symbol stones stand across the Scottish landscape like closed books, their visual language intact, their spoken language gone beyond recovery.`,
  quickFacts: {
    'Language Family': 'Disputed (Celtic or pre-Celtic)',
    'Region': 'Northern and eastern Scotland',
    'Earliest References': '3rd century CE (Roman sources)',
    'Extinction': '~10th century CE',
    'Writing System': 'Ogham script (limited inscriptions)',
    'Surviving Texts': 'Fewer than 40 short inscriptions',
    'Symbol Stones': '~350 known carved monuments',
  },
  connections: [
    { slug: 'dalmatian-language', relationship: 'Both were languages squeezed out by politically dominant neighbors, leaving only fragments for linguists to puzzle over' },
    { slug: 'sumerian', relationship: 'Both are language isolates or near-isolates whose classification remains debated, each representing a linguistic tradition with no clear surviving relatives' },
  ],
  sources: [
    { title: 'The Picts: A History', author: 'Tim Clarkson', year: 2016 },
    { title: 'The Problem of the Picts', author: 'Frederick T. Wainwright', year: 1955 },
    { title: 'Pictish Progress: New Studies on Northern Britain in the Early Middle Ages', author: 'Stephen T. Driscoll, Jane Geddes, and Mark A. Hall', year: 2011 },
    { title: 'A New Look at the Pictish Language', author: 'Katherine Forsyth', year: 1997 },
  ],
};
