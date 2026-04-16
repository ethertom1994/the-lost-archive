import type { Entry } from '../../types';

export const bisonCuisine: Entry = {
  slug: 'bison-cuisine',
  name: 'Great Plains Bison Cuisine',
  tagline: 'Sixty million bison. Dozens of preparation methods refined over 10,000 years. Reduced to near-zero in a single decade.',
  category: 'food',
  subcategory: 'Lost Culinary Traditions',
  lastKnownYear: 1889,
  lastKnownLocation: 'Great Plains, North America',
  coordinates: [41.0, -100.0],
  region: 'North America',
  status: 'extinct',
  cause: 'Systematic slaughter of bison herds by US government policy and commercial hunters, destroying the food base of Plains nations',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Animal That Was Everything

For the peoples of the Great Plains, the American bison was not merely a food source. It was the foundation of an entire material and culinary culture refined over at least 10,000 years. An estimated 30 to 60 million bison roamed the grasslands from Canada to Texas before European contact, and Plains nations including the Lakota, Cheyenne, Comanche, Blackfoot, and Crow developed sophisticated systems for hunting, processing, and preserving every part of the animal.

The culinary repertoire was vast. Pemmican, the most famous preparation, combined dried lean meat pounded to powder with rendered fat and sometimes dried berries, creating a calorie-dense food that could last years. Wasna was a similar preparation specific to the Lakota. Dried bison tongue was considered a delicacy. Bone marrow was roasted and eaten directly or rendered into cooking fat. The hump, rich with intramuscular fat, was prized for roasting. Blood soup, intestine preparations, and organ meats each had their own traditions. Every band and nation had variations passed through generations of oral instruction.

## The Deliberate Destruction

The near-extermination of the bison was not accidental. Beginning in the 1860s, the US government explicitly encouraged the slaughter as a strategy to subjugate Plains nations by destroying their food supply. General Philip Sheridan reportedly endorsed the campaign, understanding that without bison there could be no independent Plains culture. Commercial hide hunters killed millions of animals, taking only the skins and leaving carcasses to rot across the prairie.

The numbers are staggering. An estimated 60 million bison in 1800 became fewer than 1,000 by 1889. The collapse happened within a single generation. Elders who had grown up in a world of plenty lived to see their children confined to reservations and dependent on government rations of flour and beef, foods their culinary traditions had no relationship to.

## What Did Not Survive

Bison exist today. Roughly 500,000 live in North America, mostly in commercial herds. Bison meat is available in grocery stores. But the culinary traditions of the Plains nations, the dozens of specific preparation methods, the seasonal processing calendar, the communal labor of women who butchered and preserved after hunts, the knowledge of which cuts were prepared which way and when, largely did not survive the reservation era intact. Some knowledge persists in families and communities. Some has been documented by ethnographers. But the living, daily practice of a cuisine built around an animal that numbered in the tens of millions, processed by communities that moved with the herds, is gone.`,
  quickFacts: {
    'Pre-Contact Bison Population': '30-60 million',
    'By 1889': 'Fewer than 1,000',
    'Key Preparations': 'Pemmican, wasna, dried tongue, bone marrow, hump roast',
    'Nations': 'Lakota, Cheyenne, Comanche, Blackfoot, Crow, and many others',
    'Cause of Collapse': 'Government-backed commercial slaughter',
    'Modern Bison Population': '~500,000 (mostly commercial)',
  },
  connections: [
    { slug: 'passenger-pigeon-pie', relationship: 'Both were once-abundant North American food animals driven to near or total extinction in the 19th century' },
    { slug: 'moa-cuisine', relationship: 'Both represent entire culinary traditions built around a single large animal, lost when the animal was hunted out' },
  ],
  sources: [
    { title: 'The Destruction of the Bison', author: 'Andrew C. Isenberg', year: 2000 },
    { title: 'Pekiskwetan / Talking Amongst Ourselves: A Blackfoot Perspective on Food', author: 'Ramona Big Head', year: 2007 },
    { title: 'American Bison: A Natural History', author: 'Dale F. Lott', year: 2002 },
  ],
};
