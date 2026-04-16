import type { Entry } from '../../types';

export const japaneseRiverOtter: Entry = {
  slug: 'japanese-river-otter',
  name: 'The Japanese River Otter',
  tagline: 'Once found in rivers across Japan, beloved in folklore as a shapeshifter. Last seen in 1979. Declared extinct in 2012.',
  category: 'fauna',
  subcategory: 'Mustelids',
  lastKnownYear: 1979,
  lastKnownLocation: 'Shinjo River, Susaki, Kochi Prefecture, Japan',
  coordinates: [33.56, 133.53],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Water pollution, hunting for pelts, habitat destruction from river development',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Shapeshifter in the River

The Japanese river otter (*Lutra nippon*) was once abundant throughout Honshu, Shikoku, and Kyushu, inhabiting rivers, lakes, and coastal waters across the Japanese archipelago. In Japanese folklore, the otter held a special place as the kawauso, a mischievous shapeshifter that could take human form to trick travelers. Stories of otters disguising themselves as beautiful women or old monks to lure unsuspecting people were common in Edo-period literature. The animal was woven into the cultural fabric of Japan in a way few species were.

In reality, the Japanese river otter was a sleek, brown-furred carnivore about 65 to 80 centimeters in body length, with a long, muscular tail. It fed on fish, crabs, and freshwater shrimp, hunting primarily at night in clean, fast-flowing rivers. It was a solitary animal, marking its territory with droppings placed on prominent rocks, a behavior well known to fishermen who shared the same waterways.

## The Postwar Collapse

Japan's rapid industrialization after World War II devastated the otter's habitat. Rivers were dammed, channelized, and lined with concrete for flood control. Industrial and agricultural runoff polluted waterways that had sustained otter populations for centuries. The fish the otters depended on declined or disappeared from contaminated rivers.

Hunting compounded the damage. Otter pelts had been valued since the Meiji era, and commercial trapping continued through the mid-twentieth century even as populations plummeted. By the 1950s, the otter had vanished from most of Honshu. By the 1960s, it was restricted to a few remote rivers in Shikoku and parts of Kyushu.

## The Last Sighting

The last confirmed sighting of a Japanese river otter occurred in 1979, when an individual was spotted in the Shinjo River near the city of Susaki in Kochi Prefecture on the island of Shikoku. Despite extensive surveys in subsequent decades, including camera trap programs and DNA analysis of potential otter spraints, no further evidence of the species was found.

In August 2012, Japan's Ministry of the Environment officially declared the Japanese river otter extinct. The announcement prompted widespread mourning in Japan. Kochi Prefecture adopted the otter as its official mascot, a gesture of remembrance for an animal that had once been so common its absence seemed impossible. The rivers are cleaner now in many places, but the otter that once swam in them is gone.`,
  quickFacts: {
    'Scientific Name': 'Lutra nippon (sometimes Lutra lutra whiteleyi)',
    'Body Length': '65-80 cm',
    'Diet': 'Fish, crabs, freshwater shrimp',
    'Last Confirmed Sighting': '1979, Kochi Prefecture',
    'Declared Extinct': 'August 2012',
    'Folklore Name': 'Kawauso (shapeshifter)',
    'Range': 'Honshu, Shikoku, and Kyushu',
  },
  connections: [
    { slug: 'baiji', relationship: 'Both were freshwater species destroyed by industrial pollution and river development in East Asia' },
    { slug: 'caribbean-monk-seal', relationship: 'Both were charismatic aquatic mammals declared extinct in the 21st century after decades without confirmed sightings' },
  ],
  sources: [
    { title: 'Status and Conservation of Otters in Japan', author: 'Yoshihiro Sasaki', year: 2009 },
    { title: 'Extinct and Endangered Species of Japan', author: 'Ministry of the Environment, Japan', year: 2012 },
    { title: 'Japanese River Otter: A Review', author: 'Masuda Reiko', year: 2015 },
  ],
};
