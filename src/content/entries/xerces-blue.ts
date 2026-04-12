import type { Entry } from '../../types';

export const xercesBlue: Entry = {
  slug: 'xerces-blue',
  name: 'The Xerces Blue Butterfly',
  tagline: 'The butterfly that died so San Francisco could have a neighborhood.',
  category: 'fauna',
  subcategory: 'Insects',
  lastKnownYear: 1941,
  lastKnownLocation: 'San Francisco, California',
  coordinates: [37.76, -122.51],
  region: 'North America',
  status: 'extinct',
  cause: 'Urban development destroyed its coastal sand dune habitat',
  body: `## The Last Flight

On a spring day in 1941, an entomologist collected a small blue butterfly from the dwindling sand dunes near Lobos Creek in San Francisco. It was the last Xerces blue anyone would ever see. The species had lived for millennia in the coastal dunes of the San Francisco peninsula, and it disappeared not with a dramatic cataclysm but with the quiet advance of bulldozers and row houses.

## A Butterfly of the Dunes

*Glaucopsyche xerces* was first described by the French entomologist Jean Baptiste Boisduval in 1852, from specimens collected on the San Francisco peninsula. It was a small butterfly, its wings a delicate iridescent blue on top, silvery-white with black spots beneath. Males had a brighter lavender-blue; females were browner. It fed on deervetch (*Lotus* species) and other legumes that grew in the sandy coastal scrub.

The Xerces blue was never widespread. Its entire known range was the sand dune ecosystem stretching along San Francisco's western coast, from the Presidio south through what is now the Sunset and Richmond districts. This habitat was a unique landscape: rolling dunes covered in low scrub, battered by fog and salt wind, home to a web of specialized insects and plants adapted to this narrow strip of coast.

## Paved Over

San Francisco's population exploded after the Gold Rush and again during the early twentieth century. The sand dunes, seen as wasteland ripe for development, were systematically leveled and built over. The Sunset District, now a dense grid of pastel-colored row houses stretching for miles, was constructed almost entirely on former dune habitat during the 1930s and 1940s.

As the dunes vanished, so did the Xerces blue. Entomologists noticed the decline through the 1930s, but there was no mechanism for protecting an insect's habitat and little public interest in doing so. The last verified specimens were collected in 1941 from a patch of remaining dune near Lobos Creek on the Presidio's western edge. By 1943, the species was gone.

## A Name That Endures

In 1971, the biologist Robert Michael Pyle founded the Xerces Society for Invertebrate Conservation, naming it after the lost butterfly. The organization has since become the world's largest invertebrate conservation group, working to protect pollinators, freshwater invertebrates, and endangered species across North America. The Xerces blue, in death, became a symbol that catalyzed a movement.

The butterfly left behind no frozen cells, no viable DNA for cloning, no captive population. It exists only in museum drawers: rows of pinned specimens with faded blue wings, collected in a city that no longer has room for sand dunes. Today, small restoration efforts in the Presidio have brought back some of the native dune plants. The butterflies that once depended on them are not coming back.`,
  quickFacts: {
    'Scientific Name': 'Glaucopsyche xerces',
    'Described': '1852 by Boisduval',
    'Range': 'San Francisco peninsula sand dunes',
    'Wingspan': '~25 mm (1 inch)',
    'Last Confirmed Sighting': 'March 1941',
    'Host Plants': 'Deervetch (Lotus spp.)',
    'Legacy': 'Xerces Society named after it (est. 1971)',
  },
  connections: [
    { slug: 'bramble-cay-melomys', relationship: 'Both were small, obscure species whose extinction illustrates how habitat loss works quietly and completely' },
    { slug: 'cry-violet', relationship: 'Both survive only as preserved specimens, known to us primarily through what collectors happened to save' },
  ],
  sources: [
    { title: 'The Xerces Blue: The "Extinct" Butterfly of San Francisco', author: 'Robert Michael Pyle', year: 1976 },
    { title: 'Butterflies of North America', author: 'James A. Scott', year: 1986 },
    { title: 'The Xerces Society: A History', year: 2021, url: 'https://www.xerces.org' },
    { title: 'Bulletin of the California Insect Survey, Vol. 1', author: 'J.A. Comstock', year: 1927 },
  ],
};
