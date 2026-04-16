import type { Entry } from '../../types';

export const beothuk: Entry = {
  slug: 'beothuk',
  name: 'Beothuk Language',
  tagline: 'Shanawdithit died on June 6, 1829. An entire language family may have died with her.',
  category: 'language',
  subcategory: 'Extinct Language Families',
  lastKnownYear: 1829,
  lastKnownLocation: "St. John's, Newfoundland, Canada",
  coordinates: [49.0, -55.7],
  region: 'North America',
  status: 'extinct',
  cause: 'Genocide, disease, and starvation as European settlers systematically displaced the Beothuk from their territory',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Red People

The Beothuk were the indigenous people of the island of Newfoundland, Canada. They are believed to have lived on the island for at least 2,000 years before European contact, subsisting on caribou, salmon, seals, and seabirds in a seasonal pattern that took them from the coast in summer to the interior in winter. They famously covered their bodies, clothing, and belongings in red ochre, which may have led to the European term "Red Indians," though this etymology is debated.

Their language, known only as Beothuk, was spoken exclusively on Newfoundland. Linguistic analysis of the surviving word lists suggests it may have been an isolate, unrelated to any other known language, including the neighboring Algonquian languages spoken by the Mi'kmaq. If so, the death of Beothuk did not merely end a language. It ended an entire language family, a unique branch on the tree of human linguistic evolution.

## The Closing of a People

European settlement of Newfoundland, accelerating from the 1600s onward, progressively displaced the Beothuk from their coastal resources. Conflicts with English settlers and Mi'kmaq, who had acquired European firearms, pushed the Beothuk deeper into the island's interior. Cut off from the salmon rivers and seal colonies that had sustained them, they starved. Disease, particularly tuberculosis, ravaged the survivors. The colonial government made belated efforts at contact and reconciliation, but by the early 1800s the Beothuk numbered only a handful.

In 1823, three Beothuk women, Demasduit, her mother, and her niece Shanawdithit, were captured by settlers. Demasduit and her mother both died of tuberculosis within a year. Shanawdithit, then a young woman, lived for six more years in the household of explorer William Cormack and later with naturalist William Eppes Cormack, who attempted to record what he could of Beothuk language and culture.

## The Word Lists

Shanawdithit drew detailed maps and sketches documenting Beothuk life, and she provided word lists to her European keepers. Earlier, in 1612, the settler John Guy had recorded a short vocabulary. Combined, these sources preserve roughly 400 Beothuk words and phrases. But no connected speech was ever recorded. No sentence structure, no grammar, no narrative, no song. The words exist as isolated items: nouns for animals and objects, a few verbs, some place names. They are labels without a language.

Shanawdithit died of tuberculosis in St. John's on June 6, 1829. She was approximately 29 years old. With her death, the Beothuk people and the Beothuk language passed out of living existence. Whether other Beothuk had survived in the interior remains a matter of speculation, but no evidence of any has ever been found. The 400 words in colonial notebooks are the entire surviving record of a language spoken on Newfoundland for two millennia.`,
  quickFacts: {
    'Language Family': 'Possibly an isolate (unrelated to Algonquian)',
    'Region': 'Island of Newfoundland, Canada',
    'Last Speaker': 'Shanawdithit (died June 6, 1829)',
    'Surviving Vocabulary': '~400 words and phrases',
    'Sources': 'John Guy (1612), William Cormack, Shanawdithit word lists',
    'Connected Speech Preserved': 'None',
    'Ochre Tradition': 'Bodies and belongings coated in red ochre',
  },
  connections: [
    { slug: 'eyak-language', relationship: 'Both languages died with their last known speaker, both preserved only through word lists and recordings made in their final years' },
    { slug: 'tasmanian-languages', relationship: 'Both represent the extinction of not just a language but possibly an entire language family, a unique branch of human linguistic diversity' },
  ],
  sources: [
    { title: 'A History and Ethnography of the Beothuk', author: 'Ingeborg Marshall', year: 1996 },
    { title: 'The Beothuks or Red Indians: The Aboriginal Inhabitants of Newfoundland', author: 'James P. Howley', year: 1915 },
    { title: 'Shanawdithit: The Last of the Beothuks', author: 'Shawnadithit exhibit, The Rooms Museum, St. John\'s', url: 'https://www.therooms.ca' },
  ],
};
