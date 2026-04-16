import type { Entry } from '../../types';

export const rockyMountainLocust: Entry = {
  slug: 'rocky-mountain-locust',
  name: 'Rocky Mountain Locust',
  tagline: 'In 1875 a single swarm covered 198,000 square miles of sky — larger than California — and weighed 27 million tons. Twenty-seven years later, the species was gone, and nobody is entirely sure why.',
  category: 'fauna',
  subcategory: 'Extinct Insects',
  lastKnownYear: 1902,
  lastKnownLocation: 'Aweme, near Brandon, Manitoba, Canada',
  coordinates: [49.7, -99.6],
  region: 'North America',
  status: 'extinct',
  cause: 'Destruction of river valley breeding grounds by settler agriculture, irrigation, and livestock',
  body: `## The Largest Animal Gathering in Recorded History

In late July 1874, farmers across the Great Plains looked up at what appeared to be a snowstorm moving in from the west. It was not snow. It was Melanoplus spretus, the Rocky Mountain locust, in a swarm so dense that daylight dimmed and trains ground to a halt when crushed insects slicked the rails. The swarm of 1875, later measured by the entomologist Albert Lyman Child using telegraph reports, was calculated at 198,000 square miles in extent, containing an estimated 12.5 trillion insects weighing 27.5 million tons. It remains the largest concentration of any animal ever recorded on Earth.

The locusts ate everything. Crops, leather harnesses, wooden tool handles, the wool off living sheep, clothing off laundry lines. Farmers tried fire, trenches, and flamethrowers. The U.S. Congress authorized a federal Entomological Commission, the first in American history, specifically to study the problem.

## The Disappearance

Then the locusts vanished. Between roughly 1880 and 1902, the species that had seemed inexhaustible became progressively harder to find. The last confirmed living specimen of Melanoplus spretus was collected in 1902 at Aweme, Manitoba. A handful of specimens were collected in Colorado in 1904, and then nothing. A species that had recently produced the largest swarm in recorded history was simply not there anymore.

The speed and totality of the collapse was unlike any extinction Americans had seen. There was no hunting campaign, no market for locust products, no deliberate eradication effort that had succeeded where governments had previously failed. The locusts just stopped existing.

## The Plow That Killed a Plague

The most accepted explanation came a century later, from the entomologist Jeffrey Lockwood. Melanoplus spretus was a swarming phase of a grasshopper that normally lived a quieter life in the sandy river valleys of Wyoming, Montana, and the Canadian prairie. During outbreak years, conditions in these breeding grounds produced enormous swarms that erupted outward; in between, the population retreated to small pockets along rivers like the Yellowstone and the Missouri.

Those same river valleys, rich in moisture and soil, were the first land settlers claimed. Within thirty years, the breeding grounds were plowed for wheat, irrigated for alfalfa, grazed by cattle and sheep, and drained of their beaver-dammed wetlands. The locust's tiny underground egg pods, which require specific soil moisture and temperature, were destroyed or trampled faster than the insects could reproduce. A species that could survive anything on the wing could not survive the turning of a single generation of its nursery.

## The Ghost Specimens

A few frozen Rocky Mountain locusts survive in the ice fields of the Rocky Mountains, where swarms that crashed into snowfields centuries ago are sometimes exposed by glacial retreat. Museum collections hold pinned specimens from the great swarm years. Grasshopper Glacier in Montana is named for the visible bodies frozen in the ice. There are no living descendants. DNA studies have confirmed that no other grasshopper species alive today is the Rocky Mountain locust in a different mood.

The extinction is one of the most instructive in entomology, precisely because the cause was mundane. Nobody set out to exterminate the locusts. Settler agriculture simply transformed a specific 40,000 square miles of river valley, and the single most numerous large-animal species that had ever existed in North America disappeared as a byproduct.`,
  quickFacts: {
    'Species': 'Melanoplus spretus',
    'Peak Swarm': '198,000 square miles (1875)',
    'Estimated Individuals': '~12.5 trillion in a single swarm',
    'Last Specimen': '1902, Aweme, Manitoba',
    'Final Collection': '1904, Colorado (Morgan Hebard)',
    'IUCN Status': 'Formally declared extinct in 2014',
  },
  connections: [
    { slug: 'passenger-pigeon', relationship: 'Both North American species that existed in astronomical numbers and were extinct within decades of European settlement of the continental interior' },
    { slug: 'xerces-blue', relationship: 'Both North American insects whose extinction was caused by the transformation of specific landscapes, not by deliberate eradication' },
    { slug: 'american-chestnut', relationship: 'Both dominant species of the pre-industrial North American landscape that collapsed into functional absence within a human lifetime' },
  ],
  sources: [
    { title: 'Locust: The Devastating Rise and Mysterious Disappearance of the Insect That Shaped the American Frontier', author: 'Jeffrey A. Lockwood', year: 2004 },
    { title: 'Rocky Mountain Locust', url: 'https://en.wikipedia.org/wiki/Rocky_Mountain_locust' },
    { title: 'The Death of the Super Hopper', url: 'https://www.hcn.org/issues/issue-243/the-death-of-the-super-hopper/', author: 'High Country News' },
  ],
};
