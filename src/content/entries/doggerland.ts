import type { Entry } from '../../types';

export const doggerland: Entry = {
  slug: 'doggerland',
  name: 'Doggerland',
  tagline: 'A vast landmass once connected Britain to Europe. People lived there. It is now the floor of the North Sea.',
  category: 'place',
  subcategory: 'Submerged Landscapes',
  lastKnownYear: '~6500 BCE',
  lastKnownLocation: 'North Sea, between Britain and continental Europe',
  coordinates: [55.0, 3.0],
  region: 'Europe',
  status: 'extinct',
  cause: 'Sea level rise at the end of the last Ice Age, accelerated by the Storegga Slide tsunami (~6200 BCE)',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Country Under the Sea

Between 20,000 and 8,000 years ago, much of what is now the North Sea was dry land. A vast, low-lying plain stretched from eastern England to the Netherlands, Denmark, and beyond, connecting the British Isles to continental Europe. This land, which geologists have named Doggerland (after the Dogger Bank, a large sandbank in the North Sea), was not a barren ice-age waste. It was prime real estate: a rich landscape of marshes, rivers, forests, and coastline teeming with game.

Mesolithic hunter-gatherers lived on Doggerland for thousands of years. They hunted deer and aurochs in its forests, fished its rivers and estuaries, and gathered shellfish along its shifting coastline. The archaeological evidence, dredged from the seafloor by fishing trawlers, is remarkable: worked flint tools, harpoon points made of antler, fragments of wooden structures, and even a piece of a Mesolithic log boat.

## The Slow Drowning

As the last Ice Age ended and global temperatures rose, the ice sheets that covered Scandinavia and northern Britain began to melt. Sea levels rose, slowly but inexorably. Around 10,000 BCE, Doggerland was still a broad landmass hundreds of miles across. By 8,000 BCE, it had narrowed to a fraction of its former size. By 6,500 BCE, only isolated islands and shoals remained above water.

The final inundation may have been hastened by a catastrophic event. Around 6200 BCE, the Storegga Slide, a massive underwater landslide off the coast of Norway, triggered a tsunami that swept across the remaining lowlands of Doggerland. Modeling suggests wave heights of several meters struck the coast of what was left. For any communities still living on the shrinking remnants of Doggerland, this would have been an apocalyptic event.

## What the Trawlers Find

North Sea fishing crews have been hauling up Mesolithic artifacts for over a century. The finds are scattered but persistent: barbed antler points, flint blades, animal bones bearing butchery marks, and chunks of peat containing preserved plant material from a long-drowned landscape. In 1931, a fishing vessel called the Colinda brought up a lump of peat that contained a barbed antler harpoon point dated to roughly 11,740 BCE, one of the oldest artifacts ever recovered from British waters.

Modern seismic surveys and core samples have mapped Doggerland's drowned topography in detail. Researchers at the University of Birmingham and elsewhere have identified river channels, lake beds, and coastlines beneath the sediment of the North Sea floor. The picture that emerges is of a densely inhabited landscape, not a marginal frontier but a heartland, connecting the cultural worlds of Mesolithic Britain and Europe.

## An Entire Country, Erased

Doggerland is the largest known example of a populated landscape destroyed by sea level rise. The people who lived there did not record their experience. They left only their tools and their bones, now buried under meters of marine sediment. Their story is a reminder that the land we stand on is not permanent, that the geography we take for granted is a snapshot of a moment in geological time.`,
  quickFacts: {
    'Peak Extent': '~18,000 BCE (during last glacial maximum)',
    'Area': 'Roughly the size of modern France at its peak',
    'Inhabitants': 'Mesolithic hunter-gatherers',
    'Began Flooding': '~10,000 BCE (post-glacial sea level rise)',
    'Final Inundation': '~6500 BCE',
    'Storegga Slide': '~6200 BCE tsunami may have accelerated the end',
    'Named After': 'Dogger Bank (North Sea sandbank)',
    'Evidence': 'Trawled artifacts, seismic surveys, core samples',
  },
  connections: [
    { slug: 'bramble-cay-melomys', relationship: 'Both represent land and life swallowed by rising seas, separated by eight thousand years of history' },
    { slug: 'aral-sea', relationship: 'Both are landscapes transformed beyond recognition by changes in water level' },
  ],
  sources: [
    { title: 'Europe\'s Lost World: The Rediscovery of Doggerland', author: 'Vince Gaffney, Simon Fitch, David Smith', year: 2009 },
    { title: 'The Storegga Slide tsunami', author: 'Bondevik et al.', year: 2005, url: 'https://doi.org/10.1016/j.margeo.2004.10.002' },
    { title: 'Mapping Doggerland', author: 'University of Birmingham / Europe\'s Lost Frontiers Project', year: 2019 },
  ],
  relatedMedia: [
    { type: 'book', title: 'Europe\'s Lost World: The Rediscovery of Doggerland', url: 'https://www.goodreads.com/book/show/6644446', description: 'Vincent Gaffney\'s archaeological study of the submerged landscape' },
  ],
};
