import type { Entry } from '../../types';

export const crystalPalace: Entry = {
  slug: 'crystal-palace',
  name: 'The Crystal Palace',
  tagline: 'The largest glass building ever constructed, a cast-iron and plate-glass cathedral that introduced Victorians to the idea of indoor weather. On the night of November 30, 1936, Londoners saw the sky glow red in ten counties as it burned.',
  category: 'place',
  subcategory: 'Demolished Landmarks',
  lastKnownYear: 1936,
  lastKnownLocation: 'Sydenham Hill, London, England',
  coordinates: [51.4216, -0.0736],
  region: 'Western Europe',
  status: 'extinct',
  cause: 'Fire of 30 November 1936, probable electrical fault in a women\'s cloakroom, spread through old dry timber flooring',
  body: `## A Building Like No Other

Joseph Paxton's Crystal Palace was built in just nine months to house the Great Exhibition of 1851 in Hyde Park. It was 1,851 feet long, 408 feet wide, and enclosed an area of almost nineteen acres under a single roof of prefabricated cast iron and 293,000 panes of plate glass. Nothing like it had ever been built. It was the first major building in the world to use modular industrial components on an architectural scale, and it predicted virtually every train station, exhibition hall, and shopping arcade that followed.

When the Great Exhibition closed, the Palace was dismantled, moved six miles south to Sydenham Hill, and enlarged. It reopened in 1854 as a permanent attraction, a combined concert hall, museum, aquarium, zoo, and theme park. The grounds held the world's first prehistoric sculpture park: life-sized Victorian reconstructions of dinosaurs, some of which still survive. The interior held full-scale recreations of Egyptian, Greek, Roman, Assyrian, Alhambran, and Byzantine architecture. Visitors could walk from a sphinx to a Pompeian villa to a stuffed elephant without stepping outside.

## The Fire

On the evening of November 30, 1936, the Palace manager Sir Henry Buckland was walking his dog, named Crystal, on the grounds with his daughter, also named Crystal, when they noticed a red glow inside the building. Two employees were already inside fighting a small fire in a women's cloakroom. It had started with an explosion, probably from an electrical fault.

Eighty-nine fire engines and more than four hundred firefighters arrived. The fire had already found the old oily timber flooring, installed decades earlier when the Palace had housed a circus. A strong south-west wind carried the flames through galleries lined with dried-out plaster casts, wooden display cases, and varnished exhibits. Within thirty minutes the entire building was a single unstoppable furnace. The glow was visible from Brighton, over forty miles away, and reported by pilots at cruising altitude over the Channel. Winston Churchill, passing by, said simply: "This is the end of an age."

By morning, twenty-five acres of cast iron and glass had become a field of twisted metal and melted slag. No one died. Nothing survived above the foundations except the two water towers, which were themselves demolished in the early 1940s because they made a convenient landmark for German bombers.

## What the Fire Took

The Palace had become, by 1936, the closest thing Britain had to a national museum of world civilizations. It held thousands of original artworks, musical instruments, industrial prototypes, plaster casts of classical sculptures no longer accessible in their countries of origin, pre-cinema optical devices, and enormous natural-history displays including reconstructed dinosaurs and preserved specimens. Almost all of it burned. The casts of the Ghiberti doors, the Alhambra courts, the reproduction of the Khorsabad palace, and the only complete surviving set of Handel Festival performance materials were all destroyed.

More abstractly, the fire ended a particular idea of what a public building could be. The Crystal Palace had been a prototype for mass education through spectacle, a structure designed to show an entire civilization to itself. Nothing built since has attempted the same. The hilltop site is now a park. The dinosaur statues from 1854 are still there. Fenced into a lake below the empty terraces, they are the oldest surviving life-size dinosaur reconstructions in the world, and the only thing left on site that was built for the Palace and outlived it.`,
  quickFacts: {
    'Architect': 'Sir Joseph Paxton',
    'Original Build': '1850–1851, Hyde Park',
    'Relocation': '1852–1854, Sydenham Hill',
    'Dimensions': '1,851 ft long, 408 ft wide, 19 acres under one roof',
    'Glass Panes': '~293,000',
    'Destroyed': 'November 30, 1936',
    'Casualties': 'None',
  },
  connections: [
    { slug: 'concorde', relationship: 'Both were icons of British technological spectacle whose loss was treated as the end of a particular era of ambition' },
    { slug: 'lost-raphael-paintings', relationship: 'Both are examples of cultural artifacts lost to fire in buildings believed to be permanent' },
    { slug: 'library-of-alexandria', relationship: 'Both were meant to display a single place representing the sum of human civilization, and both were destroyed by fire' },
  ],
  sources: [
    { title: 'The Crystal Palace: A Portrait of Victorian Enterprise', author: 'Patrick Beaver', year: 1970 },
    { title: 'The Crystal Palace', url: 'https://en.wikipedia.org/wiki/The_Crystal_Palace' },
    { title: 'When London\'s Iconic Crystal Palace Burned to the Ground', url: 'https://www.smithsonianmag.com/smart-news/when-londons-iconic-crystal-palace-burned-to-the-ground-in-a-devastating-fire-180985408/', author: 'Smithsonian Magazine' },
    { title: 'The Crystal Palace Fire', url: 'https://www.london-fire.gov.uk/museum/london-fire-brigade-history-and-stories/fires-and-incidents-that-changed-history/the-crystal-palace-fire/', author: 'London Fire Brigade' },
  ],
  keyDate: '1936-11-30',
  keyDateLabel: 'Destroyed by fire',
};
