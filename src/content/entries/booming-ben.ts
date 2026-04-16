import type { Entry } from '../../types';

export const boomingBen: Entry = {
  slug: 'booming-ben',
  name: 'Booming Ben',
  tagline: 'The last heath hen on Earth. For four years he returned every spring to a patch of scrub oak on Martha\'s Vineyard, calling for a mate that no longer existed. In 1932 he stopped coming back.',
  category: 'fauna',
  subcategory: 'Extinct Birds',
  lastKnownYear: 1932,
  lastKnownLocation: 'Martha\'s Vineyard, Massachusetts, USA',
  coordinates: [41.3805, -70.6456],
  region: 'North America',
  status: 'extinct',
  cause: 'Hunting, habitat loss, fire, inbreeding, and disease from introduced domestic turkeys',
  body: `## A Bird That Fed the Pilgrims

The heath hen (Tympanuchus cupido cupido) was a prairie grouse of the sandy heathlands of the eastern seaboard. It was so common in colonial New England that servants in Boston reportedly complained of being fed heath hen too often. Some historians argue it was heath hen, not wild turkey, that the Pilgrims ate at the first Thanksgiving. By the time of the American Revolution, the bird still ranged from Maine to Virginia.

By 1870, every heath hen left on Earth lived on a single island: Martha's Vineyard, off the coast of Massachusetts. Hunting, farming, and the destruction of the coastal scrub plain had erased the species from the mainland in less than a century.

## The Reserve and the Fire

In 1908, ornithologists persuaded Massachusetts to create a reserve on the island. The population, down to fewer than fifty birds, climbed back to around 2,000 by 1916. It looked like one of the great conservation successes of the age. Then the reserve burned. A fast grass fire in May 1916 tore through the heathlands during breeding season and killed most of the surviving birds. The next winter was the worst in decades. The winter after that, an outbreak of blackhead disease, introduced by domestic turkeys, swept through what was left.

By 1927 only thirteen heath hens remained. By 1929 there were two. By 1930 there was one.

## One Male, Four Springs

The last heath hen was a male, banded and monitored by the biologist Alfred Otto Gross of Bowdoin College. Local residents called him Booming Ben, after the hollow resonant call male prairie grouse make at dawn to attract females. Every spring from 1929 to 1932, Ben returned to the same booming ground at James Green's farm in West Tisbury and performed the ancient courtship display to an empty field. Observers came from around the country to watch him. He was the first wild animal ever documented by scientists through the entire arc of a species' final disappearance.

On March 11, 1932, Ben was seen for the last time. He did not return the following spring. Gross offered a $100 reward for his body. It was never found.

## What Booming Ben Took With Him

Heath hens were a subspecies of the greater prairie chicken, but they had adapted to coastal heathlands for thousands of years. Their specific genetic lineage, their particular booming call pitched slightly differently from their western cousins, and their role in the coastal scrub ecosystem all vanished with Ben. The heathlands of Martha's Vineyard still exist, managed now with prescribed burns, but the bird that evolved with them does not.

Booming Ben is often cited as the first extinction observed in real time by modern science. The pattern he revealed, small isolated population leading to genetic bottleneck leading to collapse through a single catastrophic event, became the template by which conservationists now understand how species actually die. Not in some distant wilderness, but on a specific farm, in a specific field, with one last bird calling for company that would never arrive.`,
  quickFacts: {
    'Species': 'Tympanuchus cupido cupido (subspecies of greater prairie chicken)',
    'Original Range': 'Atlantic seaboard from Maine to Virginia',
    'Last Habitat': 'Martha\'s Vineyard heathlands',
    'Last Seen': 'March 11, 1932',
    'Population Crash': '2,000 birds (1916) to 1 bird (1930)',
    'Scientific Legacy': 'First extinction observed in real time by modern biology',
  },
  connections: [
    { slug: 'passenger-pigeon', relationship: 'Both North American birds that were once staggeringly abundant and both driven extinct within a single human lifetime' },
    { slug: 'great-auk', relationship: 'Both Atlantic seaboard birds whose colonial-era abundance collapsed into a documented final individual' },
    { slug: 'american-chestnut', relationship: 'Both eastern North American species that vanished from the coastal ecosystem within a few decades of each other' },
  ],
  sources: [
    { title: 'The Heath Hen: Its History and Extinction', author: 'Alfred O. Gross', year: 1928 },
    { title: 'Booming Ben', url: 'https://en.wikipedia.org/wiki/Booming_Ben' },
    { title: 'The Sad Story of Booming Ben, Last of the Heath Hens', url: 'https://daily.jstor.org/last-heath-hen/', author: 'JSTOR Daily' },
    { title: 'Discover the Story of Booming Ben', url: 'https://www.fws.gov/story/2025-05/discover-story-booming-ben-last-heath-hen', author: 'U.S. Fish & Wildlife Service' },
  ],
  keyDate: '1932-03-11',
  keyDateLabel: 'Last sighting',
};
