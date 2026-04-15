import type { Entry } from '../../types';

export const teonimanu: Entry = {
  slug: 'teonimanu',
  name: 'Teonimanu Island',
  tagline: 'An inhabited Solomon Islands village that sank beneath the sea, preserved only in oral tradition until a geologist proved the story true.',
  category: 'place',
  subcategory: 'Submerged Islands',
  lastKnownYear: '~1568',
  lastKnownLocation: 'Solomon Islands, Western Pacific',
  coordinates: [-9.1, 160.8],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Earthquake-triggered submarine landslide caused the island to collapse and submerge',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Island That Drowned

In the oral traditions of the people of Lau Lagoon, on the northeastern coast of Malaita in the Solomon Islands, there exists a story about an island called Teonimanu. It was a real place where people lived, grew food, and built homes. Then one day, the island shook, broke apart, and sank into the sea. The people who survived fled in canoes to nearby shores. The island never resurfaced.

For generations, this story was passed from elders to children through the precise oral transmission systems that Pacific Island cultures have refined over millennia. Western anthropologists who encountered the tale categorized it as myth, a creation story or cautionary fable. Islands, after all, do not simply vanish.

## The Geologist Who Listened

Patrick Nunn, a geologist at the University of the Sunshine Coast in Australia, spent decades studying Pacific Island oral traditions about coastal changes. His approach was unusual for a geoscientist: he treated indigenous oral histories not as folklore but as potential geological records. When he examined the Teonimanu accounts, he found them remarkably consistent across multiple independent tellings, a hallmark of reliable oral transmission rather than evolving myth.

Nunn identified a plausible geological mechanism. The Solomon Islands sit on one of the most tectonically active zones on Earth, where the Pacific Plate subducts beneath the Australian Plate. Submarine landslides triggered by earthquakes are well-documented in the region. A 2007 earthquake and tsunami near the western Solomons demonstrated the devastating power of such events, causing coastal villages to disappear in minutes.

Bathymetric surveys of the seafloor near where Teonimanu was said to have existed revealed underwater terrain consistent with a catastrophic slope failure. The geological evidence aligned with the oral account: an earthquake destabilized the island's submarine foundation, triggering a landslide that pulled the island below the waterline.

## Oral History as Science

Nunn's work on Teonimanu became a landmark case in the emerging field of geomythology, the study of geological events preserved in oral traditions. He documented numerous other Pacific Island accounts of coastal submergence that correspond to post-glacial sea level rise and tectonic events dating back thousands of years. The accuracy of these accounts, sometimes preserving details of events from 7,000 years ago, forced a reckoning in Western science about the reliability of non-written knowledge systems.

The people of the Solomons did not need sonar equipment or tectonic models to know what happened to Teonimanu. They had something arguably more remarkable: a cultural technology for preserving factual information across dozens of generations without writing, without recording devices, with nothing but human memory disciplined by tradition.

## What Was Lost

Teonimanu itself is gone, its physical remains scattered across the ocean floor. But the greater loss would have been the story itself, and stories like it across the Pacific. For centuries, colonial scholars dismissed such accounts as primitive superstition. Each dismissal risked severing the chain of transmission. That the Teonimanu tradition survived long enough for modern science to validate it is as extraordinary as the geological event it describes.`,
  quickFacts: {
    'Location': 'Near Lau Lagoon, northeastern coast of Malaita, Solomon Islands',
    'Cause of Disappearance': 'Earthquake-triggered submarine landslide',
    'Preserved By': 'Oral tradition of Lau Lagoon communities',
    'Key Researcher': 'Patrick Nunn, University of the Sunshine Coast',
    'Field': 'Geomythology (geological events in oral traditions)',
    'Tectonic Setting': 'Pacific Plate subducting beneath Australian Plate',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both were inhabited lands lost to geological forces, Doggerland to rising seas, Teonimanu to tectonic collapse' },
    { slug: 'polynesian-wayfinding', relationship: 'Both demonstrate the sophistication of Pacific Island knowledge systems that Western science long underestimated' },
    { slug: 'zealandia', relationship: 'Both are lost Pacific landmasses, though Zealandia submerged millions of years before humans existed' },
  ],
  sources: [
    { title: 'The Edge of Memory: Ancient Stories, Oral Tradition and the Post-Glacial World', author: 'Patrick Nunn', year: 2018 },
    { title: 'Vanished Islands and Hidden Continents of the Pacific', author: 'Patrick Nunn', year: 2009 },
    { title: 'Oral Traditions as a Source of Historical Information about Coastal Changes in the Pacific Islands', author: 'Patrick Nunn', year: 2014, url: 'https://doi.org/10.1080/00291951.2014.929601' },
  ],
  relatedMedia: [
    { type: 'book', title: 'The Edge of Memory', url: 'https://www.goodreads.com/book/show/36373572-the-edge-of-memory', description: 'Patrick Nunn explores how oral traditions preserve geological history across millennia' },
  ],
};
