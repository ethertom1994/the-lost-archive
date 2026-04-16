import type { Entry } from '../../types';

export const denisovanCulture: Entry = {
  slug: 'denisovan-culture',
  name: 'Denisovan Culture',
  tagline: 'A sister species to Neanderthals, known almost entirely from a few teeth, a finger bone, and a fragment of jaw. Their DNA still lives in modern humans across Asia and Oceania. Their language, beliefs, songs, and daily lives left almost no trace at all.',
  category: 'culture',
  subcategory: 'Archaic Human Cultures',
  lastKnownYear: -48000,
  lastKnownLocation: 'Denisova Cave, Altai Mountains, Russia',
  coordinates: [51.4, 84.7],
  region: 'Central Asia',
  status: 'extinct',
  cause: 'Extinction as a distinct population; partial absorption through interbreeding with ancestors of modern humans in Asia and Oceania',
  imageUrl: undefined,
  body: `## A Species Almost Entirely Invisible

The Denisovans are one of the stranger discoveries in the history of human evolution. In 2008, a Russian archaeologist digging in a small cave in the Altai Mountains of southern Siberia pulled a child's finger bone fragment from a Pleistocene layer dated to around 50,000 years ago. When the bone was sent to Svante Pääbo's ancient-DNA lab in Leipzig, the sequencing returned a genome that belonged to neither modern humans nor Neanderthals. It was a previously unknown population of archaic humans. They were named Denisovans after the cave in which the first bone was found.

The physical remains of Denisovans are almost laughably sparse. After more than a decade of intensive excavation, the confirmed Denisovan fossil record still consists of just a handful of elements: the original finger bone, several molars, a toe bone, a fragment of skull cap, and a partial mandible found in a cave on the Tibetan Plateau in 1980 and identified as Denisovan through ancient protein analysis in 2019. You could fit the entire Denisovan fossil assemblage into a shoebox.

## The Evidence in Our Own Genomes

And yet Denisovans were far from a fringe population. Their DNA contributed significantly to modern humans living east of the Wallace Line. Present-day populations in Papua New Guinea and Aboriginal Australia carry roughly 3 to 6 percent Denisovan ancestry. Tibetans inherited a critical high-altitude adaptation, a variant of the EPAS1 gene, directly from Denisovan ancestors. Philippine Negritos, such as the Ayta Magbukon, carry the highest known Denisovan admixture of any living population.

This means Denisovans must have ranged across a much larger area than their known fossil sites suggest. Based on the geographic distribution of their genetic legacy, they probably inhabited much of East Asia, Southeast Asia, and the islands of Wallacea for tens or hundreds of thousands of years. They were a continent-spanning population, and we know almost nothing about them.

## What the Cave Gave Us

Denisova Cave has produced a stream of cultural artifacts from Pleistocene layers, but sorting which were made by Denisovans, which by Neanderthals (who also occupied the cave), and which by early modern humans is an ongoing puzzle. The cave's upper Pleistocene deposits include bone needles, pendants made from animal teeth, and a polished stone bracelet of green chloritolite dated to roughly 45,000 to 50,000 years ago, among the oldest known personal ornaments from northern Eurasia. If these were made by Denisovans, they show sophisticated lapidary and bone-working skill. If they were made by modern humans moving through the region, they still existed alongside Denisovans.

What we cannot recover is everything that did not fossilize: their language, their songs, their stories about the animals they hunted, the names they used for the mountains they lived in, the structure of their families, the games their children played. Denisovans were a fully human population with 250,000 or more years of cultural history, developed in parallel with and likely as rich as our own. That entire archive is gone. We have sequenced their genome and we still cannot tell you what they believed.

## The Edge of Knowledge

Genetic data suggests that Denisovans interbred with the ancestors of modern Papuans as recently as 30,000 years ago, possibly even later in some regions. This is long after the classical "extinction" of the species, and it suggests that Denisovans persisted in parts of Southeast Asia well into the time of modern humans. They were not a single lineage, either: the genomes of modern Papuans record at least two distinct Denisovan source populations, one closer to the Altai Denisovans and one considerably more divergent. There may have been a Denisovan diversity roughly comparable to the differences among living human populations today.

Every year or two, a new tooth or a new scrap of DNA comes out of Siberia, Tibet, or Laos and sharpens the picture a little. But the picture is being built from the outside inward, from the genetic echoes we still carry in our cells. The Denisovans themselves, their speech, their faces, their rituals, left the most minimal possible trace of a branch of humanity that was here for a very long time.`,
  quickFacts: {
    'Discovery': '2008, Denisova Cave, Altai Mountains',
    'Genome Published': '2010',
    'Confirmed Fossils': 'Roughly a dozen bone and tooth fragments',
    'Geographic Range (inferred)': 'East, Southeast Asia, and Wallacea',
    'Modern Genetic Legacy': '3-6% ancestry in Melanesians; high-altitude adaptation in Tibetans',
    'Latest Interbreeding': 'As recent as c. 30,000 years ago',
  },
  connections: [
    { slug: 'beringia', relationship: 'Both are reminders that human prehistory played out in landscapes and among populations that no longer exist' },
    { slug: 'indus-valley-script', relationship: 'Both are archaic cultural systems whose creators we can document but whose thoughts we cannot read' },
    { slug: 'ubykh', relationship: 'Both are human cultural traditions whose voices are effectively lost, though their traces persist in living populations' },
  ],
  sources: [
    { title: 'Genetic history of an archaic hominin group from Denisova Cave in Siberia', author: 'David Reich et al.', year: 2010 },
    { title: 'A late Middle Pleistocene Denisovan mandible from the Tibetan Plateau', author: 'Fahu Chen et al.', year: 2019 },
    { title: 'Denisova Cave - Wikipedia', url: 'https://en.wikipedia.org/wiki/Denisova_Cave' },
  ],
};
