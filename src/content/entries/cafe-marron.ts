import type { Entry } from '../../types';

export const cafeMarron: Entry = {
  slug: 'cafe-marron',
  name: 'Cafe Marron',
  tagline: 'A schoolboy on a tiny Indian Ocean island found the last wild specimen in 1980. There was one plant left. One.',
  category: 'flora',
  subcategory: 'Critically Endangered Plants',
  lastKnownYear: 1980,
  lastKnownLocation: 'Rodrigues Island, Mauritius',
  coordinates: [-19.72, 63.43],
  region: 'Indian Ocean',
  status: 'extinct_in_wild',
  cause: 'Deforestation of Rodrigues Island for agriculture, grazing by introduced livestock',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## One

Rodrigues Island is a speck of volcanic rock in the Indian Ocean, 650 kilometers east of Mauritius. It is 18 kilometers long and 8 kilometers wide. When humans arrived in the 1600s, it was densely forested. Within two centuries, the forest was almost entirely cleared for farming and grazing.

In 1980, a schoolboy named Hedley Manan was hiking through a remnant patch of scrub when he noticed an unfamiliar plant. He brought a cutting to a teacher, who sent it to botanists. They identified it as Ramosmania rodriguesii, a species of coffee relative known only from a few nineteenth-century herbarium specimens and presumed extinct.

The plant Hedley found was the only one. A single individual, growing in degraded scrub on a tiny island. The loneliest plant in the world.

## The Rescue

Cuttings were taken and sent to the Royal Botanic Gardens at Kew in London. The horticulturalists at Kew faced an unusual challenge: the plant was self-incompatible, meaning a single individual couldn't pollinate itself to produce seeds. Without a second plant, sexual reproduction was impossible.

Kew propagated the cafe marron through cuttings, producing genetically identical clones. They experimented with hand pollination techniques and hormone treatments. In 2003, after more than two decades of effort, they succeeded in producing seeds for the first time, a breakthrough that suggested the species might not be strictly self-incompatible after all.

Today, several cafe marron plants grow at Kew and a few other botanical gardens. Small numbers have been replanted on Rodrigues. But every living cafe marron is a clone or descendant of that single wild plant. The entire genetic diversity of the species passed through a bottleneck of one.

## The Problem of One

The cafe marron illustrates a concept conservation biologists call "functional extinction." A species can be technically alive while being effectively dead. With only one individual, there is no genetic variation, no adaptation, no evolution. The cafe marron that grows at Kew is frozen in time, genetically identical to the plant Hedley Manan found forty years ago.

If a disease targets this specific genetic makeup, every cafe marron on Earth dies. If climate change makes the original habitat unsuitable, the plant cannot adapt. It survives in the most fragile sense imaginable: as copies of a single template, maintained by human effort, in glass houses six thousand miles from home.

## What One Means

The cafe marron is often called the loneliest plant on Earth, and the phrase is precise. It didn't have a small population or a declining population. It had a population of one. Everything it is, everything it can be, was contained in one organism found by a schoolboy on an afternoon walk. The distance between one and zero is the shortest distance in conservation, and the cafe marron has been standing on that line for over forty years.`,
  quickFacts: {
    'Species': 'Ramosmania rodriguesii',
    'Common Name': 'Cafe marron',
    'Wild Population': '1 individual found in 1980',
    'Discovered By': 'Schoolboy Hedley Manan',
    'Conservation Home': 'Royal Botanic Gardens, Kew',
    'First Seeds Produced': '2003, after 23 years of propagation efforts',
  },
  connections: [
    { slug: 'st-helena-olive', relationship: 'Both are island plants driven to the edge by deforestation, both from remote volcanic islands in the tropics' },
    { slug: 'franklinia', relationship: 'Both survive only because someone happened to collect specimens before the wild population vanished' },
  ],
  sources: [
    { title: 'The Last Survivors: Conservation Stories from Kew', author: 'Royal Botanic Gardens, Kew', year: 2010 },
    { title: 'Ramosmania rodriguesii: Can We Save the Cafe Marron?', author: 'Carlos Magdalena', year: 2018 },
    { title: 'The Plant Messiah: Adventures in Search of the World\'s Rarest Species', author: 'Carlos Magdalena', year: 2017 },
  ],
};
