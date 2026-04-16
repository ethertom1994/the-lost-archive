import type { Entry } from '../../types';

export const ivoryBilledCall: Entry = {
  slug: 'ivory-billed-call',
  name: 'Ivory-Billed Woodpecker Call',
  tagline: 'The "kent-kent" of the Lord God Bird went silent in the swamps. In 2023, the US government made it official.',
  category: 'sound',
  subcategory: 'Bird Vocalizations',
  lastKnownYear: 1944,
  lastKnownLocation: 'Singer Tract, Madison Parish, Louisiana',
  coordinates: [30.0, -90.5],
  region: 'North America',
  status: 'extinct',
  cause: 'Logging of old-growth bottomland hardwood forests, the only habitat that sustained the species',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Lord God Bird

The ivory-billed woodpecker was the largest woodpecker in North America, roughly 50 centimeters long with a wingspan approaching 80 centimeters. Its plumage was striking: glossy blue-black with bold white stripes and, in males, a brilliant red crest. It was so impressive that people who saw one reportedly exclaimed "Lord God, what a bird," giving it its folk name. But it was the sound that defined the species. The ivory-bill's contact call was a distinctive nasal "kent" note, often given in pairs, audible at considerable distance through the swamp forest. Its drumming pattern, a characteristic double-knock on resonant dead wood, was unique among North American woodpeckers.

The species required vast tracts of old-growth bottomland hardwood forest. Each pair needed an estimated 25 square kilometers of mature timber, because they fed primarily on beetle larvae found under the bark of recently dead large trees. This extreme habitat specialization made them vulnerable to logging from the moment industrial timber operations reached the southern swamps.

## The Last Recordings

In 1935, a Cornell University team led by Arthur Allen traveled to the Singer Tract in northeastern Louisiana, one of the last patches of virgin bottomland forest in the South. They recorded the ivory-bill's calls and drumming using equipment mounted on a truck, producing the only known audio recordings of the species. The recordings capture the nasal kent call, the double-knock drum, and background sounds of the swamp forest the birds required.

By 1944, the Singer Tract had been logged by the Chicago Mill and Lumber Company despite pleas from conservationists. The last confirmed sighting of an ivory-billed woodpecker, a lone female, was made there by artist Don Eckelberry in April 1944. He sketched her as the trees fell around her.

## Declared Gone

For decades afterward, sporadic reports emerged from swamps in Louisiana, Florida, Arkansas, and Cuba (which had its own subspecies, last confirmed in 1987). A controversial 2004 sighting in Arkansas generated global headlines but was never conclusively verified. In October 2023, the US Fish and Wildlife Service officially declared the ivory-billed woodpecker extinct, along with 22 other species.

The 1935 Cornell recordings survive in the Macaulay Library. They are roughly two minutes of crackling, wind-affected audio in which you can hear the kent calls, spaced and deliberate, echoing through a forest that no longer exists. The double-knock, a sound that once carried across the southern swamps like a slow heartbeat, is now just a waveform in a digital archive.`,
  quickFacts: {
    'Species': 'Campephilus principalis',
    'Length': '~50 cm (largest North American woodpecker)',
    'Distinctive Call': 'Nasal "kent-kent" contact call',
    'Distinctive Drum': 'Double-knock pattern',
    'Last Confirmed Sighting': '1944, Singer Tract, Louisiana',
    'Only Audio Recording': '1935, Cornell University expedition',
    'Declared Extinct': 'October 2023 (USFWS)',
    'Territory Requirement': '~25 sq km of old-growth forest per pair',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both are birds whose final sounds were captured on recording, preserving the acoustic signature of a species at the moment of its ending' },
    { slug: 'alala-song', relationship: 'Both represent irreversible losses of unique bird vocalizations from the Americas' },
  ],
  sources: [
    { title: 'The Grail Bird: Hot on the Trail of the Ivory-Billed Woodpecker', author: 'Tim Gallagher', year: 2005 },
    { title: 'The Race to Save the Lord God Bird', author: 'Phillip Hoose', year: 2004 },
    { title: 'Ivory-Billed Woodpecker Recordings', author: 'Cornell Lab of Ornithology, Macaulay Library', year: 1935 },
  ],
};
