import type { Entry } from '../../types';

export const zealandia: Entry = {
  slug: 'zealandia',
  name: 'Zealandia',
  tagline: 'Earth\'s eighth continent. 94% underwater. Not recognized until 2017. Most people have never heard of it.',
  category: 'place',
  subcategory: 'Submerged Continents',
  lastKnownYear: '23 million BCE',
  lastKnownLocation: 'Southwest Pacific Ocean (New Zealand and New Caledonia are its peaks)',
  coordinates: [-42.0, 174.0],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Tectonic subsidence after separation from Antarctica and Australia 85-130 million years ago',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Hidden Continent

In 2017, a team of geologists published a paper in GSA Today, the journal of the Geological Society of America, arguing that a large mass of continental crust in the southwest Pacific should be classified as a continent. They called it Zealandia. It met all four criteria for continental status: elevated above the surrounding ocean floor, composed of a distinct variety of rocks (igneous, metamorphic, and sedimentary), thicker crust than oceanic plates, and a well-defined area.

The area is 4.9 million square kilometers, about two-thirds the size of Australia. Roughly 94% of it is underwater. The parts that stick above the surface are New Zealand, New Caledonia, and a scattering of small islands. Everything else is submerged beneath the Tasman Sea and the Pacific, between one and three kilometers below the surface.

## The Drowning

Zealandia was once part of the supercontinent Gondwana, connected to what is now Australia and Antarctica. It began to separate about 130 million years ago and was largely isolated by 85 million years ago. At first, much of its surface was above sea level. Fossils from this period show it supported forests, rivers, and diverse animal life.

Then it began to sink. Thinned by the tectonic stretching that pulled it away from its neighbors, Zealandia's crust was thinner than other continents and more susceptible to subsidence. By about 23 million years ago, roughly 93% of the landmass was underwater. Some geologists believe it may have been almost entirely submerged at one point, with only tiny slivers remaining above the waves.

## What Lives There

The submerged portions of Zealandia are not empty seabed. Drilling and dredging expeditions have found fossils of land plants and freshwater organisms in rocks now far below sea level, confirming that these areas were once terrestrial. The International Ocean Discovery Program's Expedition 371, in 2017, drilled into Zealandia's submerged plateaus and recovered sediment cores showing dramatic shifts from shallow-water to deep-water environments over millions of years.

The parts of Zealandia that remain above water, New Zealand and New Caledonia, have biodiversity patterns that make more sense as fragments of a continent than as isolated islands. New Zealand's kiwi, tuatara, and ancient forests are remnants of a Gondwanan heritage that a true oceanic island would not possess.

## A Continent We Walk On Without Knowing

Zealandia's recognition as a continent is still debated in some quarters, but the geological evidence is strong. The question is less "Is it a continent?" and more "How did we not notice for so long?" The answer is that 94% of it is invisible. We mapped the surface of Mars before we mapped the seafloor well enough to recognize a continent the size of India sitting beneath our own ocean. Zealandia is a reminder that the world has more geography than we have bothered to learn.`,
  quickFacts: {
    'Area': '4.9 million km\u00B2 (two-thirds the size of Australia)',
    'Percent Submerged': '~94%',
    'Visible Portions': 'New Zealand, New Caledonia',
    'Separated From Gondwana': '~85-130 million years ago',
    'Officially Proposed as Continent': '2017, GSA Today',
    'Why It Sank': 'Thinned crust from tectonic stretching',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both are large landmasses now beneath the sea, one submerged by rising seas, the other by tectonic subsidence' },
    { slug: 'lake-pedder', relationship: 'Both are landscapes now underwater, though one was drowned by nature over millions of years and the other by a dam in one' },
  ],
  sources: [
    { title: 'Zealandia: Earth\'s Hidden Continent', author: 'Nick Mortimer et al.', year: 2017 },
    { title: 'Tectonic History of Zealandia', author: 'Nick Mortimer and Hamish Campbell', year: 2014 },
    { title: 'IODP Expedition 371: Tasman Frontier Subduction Initiation and Paleogene Climate', author: 'International Ocean Discovery Program', year: 2017 },
  ],
};
