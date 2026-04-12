import type { Entry } from '../../types';

export const stHelenaOlive: Entry = {
  slug: 'st-helena-olive',
  name: 'The St. Helena Olive',
  tagline: 'Endemic to Napoleon\'s prison island. The last tree died in 2003, despite a decade of desperate conservation effort.',
  category: 'flora',
  subcategory: 'Endemic Island Trees',
  lastKnownYear: 2003,
  lastKnownLocation: 'St. Helena, South Atlantic Ocean',
  coordinates: [-15.97, -5.71],
  region: 'South Atlantic',
  status: 'extinct',
  cause: 'Habitat destruction by introduced goats and invasive plants, combined with an inability to propagate',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Island at the End of the World

St. Helena is a volcanic island in the South Atlantic, 1,200 miles from the nearest continent. It is famous as the place where Napoleon Bonaparte spent his final exile, dying there in 1821. But long before Napoleon arrived, the island harbored an ecosystem found nowhere else, shaped by millions of years of isolation. Among its endemic species was a small tree called the St. Helena olive, *Nesiota elliptica*, which was not actually an olive at all. Genetic analysis eventually revealed it belonged to the family Rhamnaceae, the buckthorns, with no close living relatives.

## Centuries of Decline

When the Portuguese discovered St. Helena in 1502, the island was covered in dense endemic forest. Within decades, settlers introduced goats, which devastated the native vegetation. Over the following centuries, logging, agriculture, and invasive plant species reduced the endemic forest to fragments. By the twentieth century, the St. Helena olive was known from only a handful of wild individuals clinging to rocky slopes.

Conservation efforts began in the 1980s, when the severity of the situation became clear. Botanists attempted to propagate the surviving trees through cuttings and seeds, but the St. Helena olive proved agonizingly difficult to grow. Seeds germinated poorly. Cuttings rarely rooted. The few plants that did establish often succumbed to disease or failed to thrive.

## The Last Tree

By the mid-1990s, only one mature wild tree remained, growing on a cliff face called Peak Dale. Conservationists cared for it intensively, protecting it from goats and invasive plants. They managed to produce a few rooted cuttings, which were planted at a nursery site. But the cuttings, genetically identical to the parent, shared its vulnerabilities.

In 2003, the last wild tree died. The nursery plants, already weakened, followed. The final individual perished in December 2003, making *Nesiota elliptica* officially extinct. A decade of dedicated conservation effort had failed to overcome the species' apparent inability to reproduce vigorously, perhaps a consequence of the genetic bottleneck caused by centuries of decline.

## The Lesson of Islands

St. Helena's endemic flora has suffered catastrophically since human contact. The island has lost dozens of unique plant species. The St. Helena olive was simply the most recent and best-documented casualty, a reminder that island species, evolved in isolation without mammalian herbivores, are devastatingly fragile when the world comes to visit.`,
  quickFacts: {
    'Scientific Name': 'Nesiota elliptica',
    'Family': 'Rhamnaceae (buckthorns), not a true olive',
    'Endemic To': 'St. Helena Island, South Atlantic',
    'Island Discovery': '1502 by Portuguese sailors',
    'Last Wild Individual': 'Died 2003',
    'Propagation Attempts': 'Cuttings and seeds, largely unsuccessful',
    'Primary Threats': 'Introduced goats, invasive plants, habitat loss',
    'Related Species': 'No close living relatives identified',
  },
  connections: [
    { slug: 'franklinia', relationship: 'Both were trees reduced to tiny remnant populations, but only the Franklin tree was saved by early collection' },
    { slug: 'cry-violet', relationship: 'Both were endemic species destroyed by habitat change in their only known location' },
  ],
  sources: [
    { title: 'The Endemic Flora of St Helena', author: 'Q.C.B. Cronk', year: 2000 },
    { title: 'Extinction of the St Helena Olive', author: 'Rebecca Cairns-Wicks', year: 2004 },
    { title: 'Plants of the World Online: Nesiota elliptica', year: 2023, url: 'https://powo.science.kew.org' },
  ],
};
