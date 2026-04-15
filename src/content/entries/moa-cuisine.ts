import type { Entry } from '../../types';

export const moaCuisine: Entry = {
  slug: 'moa-cuisine',
  name: 'Moa Cuisine',
  tagline: 'Nine species of giant flightless birds, some twelve feet tall, hunted to extinction within a century of human contact. An entire megafaunal protein source erased in four generations.',
  category: 'food',
  subcategory: 'Megafaunal Foods',
  lastKnownYear: '~1400',
  lastKnownLocation: 'New Zealand',
  coordinates: [-43.53, 172.64],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Overhunting by early Polynesian settlers (Maori) within approximately 100 years of arrival',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Giants of Aotearoa

Before human arrival, New Zealand was a land of birds. With no native land mammals except bats, birds had evolved to fill ecological niches occupied by mammals elsewhere. The largest were the moa: nine species of flightless birds in the order Dinornithiformes, ranging from turkey-sized species to the enormous South Island giant moa, Dinornis robustus, which stood up to twelve feet tall and weighed over 500 pounds. They were the dominant herbivores of New Zealand's forests and grasslands, the ecological equivalent of deer, elk, and cattle combined.

When Polynesian settlers, ancestors of the Maori, arrived in New Zealand around 1280 CE, they found an island teeming with birds that had never seen a terrestrial predator and had no instinct to flee from one. The moa were large, slow-reproducing, and fearless. They were also, as archaeological evidence makes abundantly clear, a primary food source.

## The Butchering Camps

Archaeological sites across New Zealand tell the story of intensive moa hunting. At Wairau Bar on the South Island, excavations have revealed enormous middens, refuse heaps containing the bones of thousands of moa alongside the stone tools used to butcher them. Bones show cut marks consistent with systematic defleshing. Fire-cracked stones indicate earth-oven cooking, a technique still used in Maori hangi cooking today.

The scale of the kill sites suggests organized communal hunts rather than opportunistic individual hunting. Entire moa populations in a given area appear to have been harvested in concentrated campaigns. Analysis of bone assemblages shows that hunters initially targeted the largest species and gradually shifted to smaller ones as the giants disappeared, a classic pattern of sequential megafaunal depletion.

## How Fast It Happened

Mathematical models based on moa population dynamics, reproductive rates, and archaeological kill-site data suggest that all nine species were functionally extinct within approximately one hundred years of sustained hunting. Some models suggest even faster collapse, perhaps sixty to eighty years. For context, this means a child born in the first generation of Maori settlement could have eaten moa as a daily staple and lived to see a grandchild who had never tasted it.

The speed of the extinction reflects a brutal arithmetic. Moa reproduced slowly, likely laying only one or two eggs per season, and took years to reach maturity. Even moderate hunting pressure would have exceeded their replacement rate. The arrival of the Pacific rat, or kiore, which preyed on moa eggs, accelerated the decline.

## What Was Lost

The extinction of the moa was not merely a loss of biodiversity. It was a loss of a food system. The moa represented a massive, renewable protein source that, with sustainable management, could theoretically have fed generations. Instead, the resource was exhausted within a century. The ecological and dietary consequences were profound. Post-moa Maori culture shifted dramatically toward marine resources, root crops like kumara, and smaller birds, a dietary transformation forced by the disappearance of the largest food source on the islands.

The moa also took with them an entire ecosystem of dependent species. Haast's eagle, the largest eagle ever known, preyed on moa and went extinct shortly after them. Forest composition shifted as the moa's role as seed disperser and vegetation manager vanished.`,
  quickFacts: {
    'Species': '9 species in order Dinornithiformes',
    'Largest': 'Dinornis robustus, up to 12 feet tall, 500+ lbs',
    'Human Arrival': '~1280 CE (Polynesian settlers)',
    'Extinction Timeline': '~100 years after human contact',
    'Key Evidence': 'Massive butchering camps (e.g., Wairau Bar)',
    'Cooking Method': 'Earth-oven roasting (precursor to hangi)',
    'Cascade Effect': 'Haast\'s eagle also went extinct',
    'Post-Moa Diet': 'Shift to marine resources and root crops',
  },
  connections: [
    { slug: 'dodo', relationship: 'Both were large flightless birds driven to extinction by humans who encountered them for the first time' },
    { slug: 'stellers-sea-cow', relationship: 'Both were megafaunal food sources hunted to extinction within decades of discovery' },
    { slug: 'passenger-pigeon-pie', relationship: 'Both represent the extinction of a food resource once so abundant it seemed inexhaustible' },
  ],
  sources: [
    { title: 'Extinct New Zealand Megafauna Were Not in Decline Before Human Colonization', author: 'Morten Erik Allentoft et al.', year: 2014, url: 'https://doi.org/10.1073/pnas.1314972111' },
    { title: 'Rapid Extinction of the Moas: Model, Test, and Implications', author: 'Richard Holdaway and Chris Jacomb', year: 2000 },
    { title: 'The Lost World of the Moa', author: 'Trevor Worthy and Richard Holdaway', year: 2002 },
  ],
};
