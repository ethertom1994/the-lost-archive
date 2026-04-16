import type { Entry } from '../../types';

export const lomekwiToolmakers: Entry = {
  slug: 'lomekwi-toolmakers',
  name: 'Lomekwi Toolmakers',
  tagline: 'Someone living in woodland beside an ancient lake in northern Kenya, 3.3 million years ago, struck one stone against another and made the oldest known tools in the world. They were not yet Homo. We do not know what species they were.',
  category: 'technology',
  subcategory: 'Paleolithic Technology',
  lastKnownYear: -3300000,
  lastKnownLocation: 'West Turkana, Kenya',
  coordinates: [3.3, 35.9],
  region: 'East Africa',
  status: 'extinct',
  cause: 'The toolmaking tradition predates the genus Homo and has no known material descendants; the population that made it is unidentified',
  imageUrl: undefined,
  body: `## Older Than Homo

Until 2011, the oldest recognized stone tools in the world came from Gona, in Ethiopia, and were about 2.6 million years old. They were plausibly associated with early members of the genus *Homo*, and they fit a long-established story: the hand, the brain, and the tool had all evolved together in the first true humans.

Then a team led by Sonia Harmand and Jason Lewis, working at the site of Lomekwi 3 on the western shore of Lake Turkana in northern Kenya, found something that did not fit. Buried in dated sediments that were 3.3 million years old, they recovered 149 stone artifacts: cores, flakes, anvils, and hammers. The tools were unambiguously made by intentional, repeated percussion. They were sitting in situ, at the depth they had been dropped. And they predated the earliest known fossils of *Homo* by at least 500,000 years.

## A New Technology

The Lomekwi tools do not fit the classic Oldowan tradition of the earliest *Homo*. They are larger, heavier, and struck with different techniques. Some weigh more than fifteen kilograms. The cores appear to have been held stationary or rested on anvils, while the toolmaker struck them downward with a hammerstone: a technique called passive hammer or bipolar-on-anvil knapping. This is a different way of making a tool than the handheld freehand flaking of the Oldowan, and it is cognitively simpler: it does not require the toolmaker to predict how a flake will come off the core before it does.

Because of this, the excavators proposed that Lomekwi represents a distinct earlier tradition, which they named the Lomekwian. It is the oldest known lithic industry in the world, and the first one that we can confidently call "made on purpose" rather than "used opportunistically." Chimpanzees today modify stones to crack nuts, but they do not systematically remove flakes to produce cutting edges. The Lomekwians did.

## Who Were They?

The identity of the toolmakers is the loose thread. At 3.3 million years ago, the East African hominin record includes *Australopithecus afarensis* (Lucy's species) and *Kenyanthropus platyops*, both of which lived in the Lake Turkana region during that window. *Homo* had not yet appeared. Either or both of these earlier hominins is a candidate, and the Lomekwi 3 area has produced *Kenyanthropus* remains from strata of roughly the right age.

If *Australopithecus* or *Kenyanthropus* made the Lomekwi tools, then the story of stone technology starts not with our genus but with upright, small-brained ancestors whose brain size was barely larger than a chimpanzee's. That would push back the origin of cultural transmission, at least in this basic form, by half a million years. It would also mean that the oldest known tradition of human toolmaking was practiced by a species that we have no direct lineal descent from. *Kenyanthropus* and *Australopithecus* both went extinct.

## What Was Lost

We do not know what the Lomekwi toolmakers used their tools for. Cut marks on fossil bones from the broader region, including a 3.4-million-year-old bovid bone from Dikika with what may be stone-tool cut marks, suggest butchery was already happening, though that site's marks are disputed. We do not know who taught whom. We do not know if the technique was passed from one generation to the next for a thousand years before dying out, or ten thousand, or a hundred thousand. We do not know the sound of the stones striking each other at Lomekwi, or whether the toolmaker hummed while working.

What we have are the flakes themselves, frozen at the moment they came off the core, sitting in 3.3 million years of sediment. Whatever tradition carried them has left no clear descendants. The Oldowan industry that arose 700,000 years later in the Homo lineage may or may not be a direct continuation of Lomekwian knowledge; most researchers now think it is a separate, later development. The earliest known invention in human prehistory, in other words, was probably not the beginning of a continuous tradition. It was the first of many.`,
  quickFacts: {
    'Site': 'Lomekwi 3, West Turkana, Kenya',
    'Age': 'c. 3.3 million years ago',
    'Excavator': 'Sonia Harmand and team, 2011-2015',
    'Artifacts': '149 cores, flakes, anvils, and hammerstones',
    'Industry Named': 'Lomekwian',
    'Toolmaker Candidates': 'Kenyanthropus platyops or Australopithecus afarensis',
  },
  connections: [
    { slug: 'green-sahara', relationship: 'Both are evidence that Africa hosted complex human stories long before our own species began recording them' },
    { slug: 'damascus-steel', relationship: 'Both are lost knowledge traditions for working with stone and metal, separated by three million years' },
    { slug: 'wootz-steel', relationship: 'Both are techniques invented, practiced for centuries or millennia, and then lost before modern science could fully document them' },
  ],
  sources: [
    { title: '3.3-million-year-old stone tools from Lomekwi 3, West Turkana, Kenya', author: 'Sonia Harmand et al.', year: 2015 },
    { title: 'The Oldest Stone Tools Yet Discovered Are Unearthed in Kenya', url: 'https://www.smithsonianmag.com/science-nature/oldest-known-stone-tools-unearthed-kenya-180955341/' },
    { title: 'Lomekwi - Wikipedia', url: 'https://en.wikipedia.org/wiki/Lomekwi' },
  ],
};
