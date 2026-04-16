import type { Entry } from '../../types';

export const lakeAgassiz: Entry = {
  slug: 'lake-agassiz',
  name: 'Lake Agassiz',
  tagline: 'The largest lake that ever existed in North America. Fed by the melting Laurentide Ice Sheet, it covered a region larger than all the modern Great Lakes combined. When its ice dam finally gave way around 8,200 years ago, the world\'s climate lurched.',
  category: 'place',
  subcategory: 'Ice Age Lakes',
  lastKnownYear: -6200,
  lastKnownLocation: 'Central Canada and northern United States',
  coordinates: [52.0, -97.0],
  region: 'North America',
  status: 'extinct',
  cause: 'Retreat of the Laurentide Ice Sheet removed the ice dams holding back the lake, leading to a catastrophic drainage into the Hudson Bay and the Arctic Ocean',
  imageUrl: undefined,
  body: `## A Lake the Size of a Sea

At its maximum, around 13,000 years ago, Lake Agassiz covered an area of roughly 440,000 square kilometers, stretching across parts of what are now Minnesota, North Dakota, Manitoba, Saskatchewan, and Ontario. That is larger than all five modern Great Lakes combined, and larger than the modern Black Sea. At a lesser, still vast extent, it persisted for several thousand years. Its water volume at peak has been estimated at more than 160,000 cubic kilometers. It was the largest body of freshwater known to have existed anywhere on Earth in the Quaternary period.

Lake Agassiz formed at the southern margin of the retreating Laurentide Ice Sheet. As glacial ice melted, the meltwater collected in a basin whose natural drainage to the north was blocked by the still-remaining ice. The lake ballooned outward to the south and west, finding outlets variously southward into the Mississippi, eastward through what would become the Great Lakes, and northwestward along the Mackenzie River.

The lake was named in 1879 by the geologist Warren Upham after the Swiss-American naturalist Louis Agassiz, who was one of the first scientists to argue that the Northern Hemisphere had once been covered by vast ice sheets. Its existence is preserved today in the flat floor of the Red River Valley, which was the lake bed, and in a series of massive wave-cut beaches running through Manitoba and Minnesota tens of meters above the modern ground surface.

## The Dam Breaks

Lake Agassiz's outlets shifted repeatedly as the ice sheet advanced and retreated. Each shift rerouted enormous volumes of freshwater into different ocean basins, and each such redirection had consequences. The best-known case is the drainage event that occurred around 12,900 years ago, at the onset of the Younger Dryas, a rapid cold snap that gripped the Northern Hemisphere for more than a thousand years and reversed the warming trend that had been in progress since the Last Glacial Maximum. A leading hypothesis, developed by Wallace Broecker and refined by many later researchers, is that a sudden outflow of Lake Agassiz water down the Mackenzie River into the Arctic Ocean disrupted North Atlantic ocean circulation, shutting down the overturning current that warms northern Europe and triggering the Younger Dryas cooling.

A second, final drainage occurred around 8,200 years ago. By that time the Laurentide Ice Sheet had retreated further, and the lake had merged with a successor body, Lake Ojibway. The ice dam across Hudson Bay failed, perhaps in two rapid stages, and the combined Agassiz-Ojibway lake emptied catastrophically into Hudson Bay and out through the Labrador Sea. Sediment records from the Mississippi Delta document a sea-level jump within the 8.18 to 8.31 thousand-year window that is indistinguishable in age from the drainage. The released freshwater again disrupted Atlantic circulation and is implicated in the "8.2 kiloyear event," a sharp, shorter cold anomaly that shows up in Greenland ice cores, European lake sediments, and cave deposits from the Near East.

## Human Consequences

The 8.2 kiloyear event is not prehistoric abstraction. It affected people who were already farming, keeping animals, and building villages in the Near East, in Europe, and in China. Climate reconstructions suggest that the event triggered drought conditions in the eastern Mediterranean and Anatolia that may have destabilized the Pre-Pottery Neolithic agricultural communities of the Levant. Abandonment signals at sites in Cyprus and mainland Anatolia roughly coincide with the event. Atlit Yam, off the coast of modern Israel, sank beneath the sea not long afterwards.

The Red River Valley and the Canadian prairies, once the lake floor, became some of the most agriculturally productive land on the continent, their soils built up from lake-bottom silt. Lake Winnipeg, Lake of the Woods, and Rainy Lake are modern remnants. So, more distantly, is the landscape of scoured bedrock and post-glacial lakes across the Canadian Shield.

## The Dead Giant

Lake Agassiz is classified as "extinct" because its water, its shoreline, its ecosystem, and its hydrological regime are gone. Most of the lake drained, and what remained split into smaller bodies that bear different names. But its influence outlasted it. The freshwater it discharged into the oceans altered global climate at least twice, and the silt it deposited still defines the wheat country of Manitoba and North Dakota. A continent's worth of fresh water can spend ten thousand years being born, drain in a matter of weeks, and leave changes that are still legible on the map and in the climate record ten millennia later.`,
  quickFacts: {
    'Peak Area': 'Approximately 440,000 square kilometers',
    'Peak Volume': 'Over 160,000 cubic kilometers',
    'Duration': 'c. 13,000 to 8,200 years ago',
    'Named For': 'Louis Agassiz, glaciologist (named 1879 by Warren Upham)',
    'Final Drainage': 'c. 8,200 years ago, into Hudson Bay',
    'Climate Legacy': 'Implicated in the Younger Dryas and 8.2 ky cooling events',
  },
  connections: [
    { slug: 'beringia', relationship: 'Both were shaped and then erased by the retreat of the Laurentide Ice Sheet at the end of the Pleistocene' },
    { slug: 'aral-sea', relationship: 'Both are giant inland water bodies that vanished, though Agassiz drained naturally and the Aral was drained by humans' },
    { slug: 'owens-lake', relationship: 'Both are former great lakes whose traces remain in sediment, old shorelines, and the contours of the land' },
  ],
  sources: [
    { title: 'Identification of Younger Dryas outburst flood path from Lake Agassiz to the Arctic Ocean', author: 'Julie Brigham-Grette, Lloyd D. Keigwin, and colleagues (Murton et al.)', year: 2010 },
    { title: 'Catastrophic Drainage From the Northwestern Outlet of Glacial Lake Agassiz During the Younger Dryas', author: 'Sophie L. Norris et al.', year: 2021 },
    { title: 'Lake Agassiz - Wikipedia', url: 'https://en.wikipedia.org/wiki/Lake_Agassiz' },
  ],
};
