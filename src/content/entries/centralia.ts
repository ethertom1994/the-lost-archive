import type { Entry } from '../../types';

export const centralia: Entry = {
  slug: 'centralia',
  name: 'Centralia, Pennsylvania',
  tagline: 'A coal fire has burned beneath this town since 1962. Population dropped from 1,000 to 5. The fire could burn for 250 more years.',
  category: 'place',
  subcategory: 'Abandoned Places',
  lastKnownYear: 1981,
  lastKnownLocation: 'Columbia County, Pennsylvania, United States',
  coordinates: [40.80, -76.34],
  region: 'North America',
  status: 'extinct',
  cause: 'Underground coal mine fire ignited in 1962, rendering the town uninhabitable through toxic gas emissions and ground subsidence',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Fire Below

In May 1962, the Centralia borough council hired five members of the volunteer fire company to clean up the town landfill, located in an abandoned strip mine pit at the edge of town. The standard method was to set the trash on fire and let it burn down. They lit the fire, let it burn for a day, and doused the surface with water.

But the pit connected to exposed coal seams underground. The fire found the coal and followed it downward. Within weeks, residents near the landfill site noticed heat coming from their basement floors. By the end of the summer, gas station owners found that the fuel in their underground tanks was registering at 172 degrees Fahrenheit.

The fire had entered the vast labyrinth of abandoned coal mines beneath the town. Centralia sits on top of the Buck Mountain coal vein, part of a coal deposit that extends for miles in every direction. The fire now had virtually unlimited fuel.

## The Slow Evacuation

For twenty years, the federal and state governments attempted to contain the fire. They dug trenches to cut off its advance. They drilled boreholes to vent gases. They filled passages with non-combustible material. Nothing worked. The mine complex was too extensive, too interconnected, and too poorly mapped. The fire found routes around every barrier.

In 1981, twelve-year-old Todd Domboski fell into a sinkhole that opened beneath his feet in his grandmother's backyard. The hole was four feet wide and 150 feet deep, filled with carbon monoxide and steam. He survived only because his cousin grabbed his arm. The incident made national news and forced the government to act.

In 1984, Congress allocated $42 million to relocate Centralia's residents. Most accepted buyouts. By 1990, the population had dropped from over 1,000 to fewer than 100. In 1992, the state of Pennsylvania claimed eminent domain over all remaining properties. In 2002, the U.S. Postal Service revoked Centralia's ZIP code (17927).

## What Remains

As of the 2020 census, five people still live in Centralia. The town's streets are cracked and buckled, with steam and sulfurous smoke rising from fissures in the asphalt. Vegetation grows strangely, lush in some spots where the ground is warm, dead in others where toxic gases seep upward. A stretch of Route 61, once the main road through town, was permanently closed and rerouted after the pavement split open; it is now a graffiti-covered ghost road popular with tourists.

The fire burns on. Engineers estimate it has access to enough coal to continue for 250 years or more. The underground temperature in some areas exceeds 1,000 degrees Fahrenheit. Carbon monoxide, sulfur dioxide, and other toxic gases vent continuously through cracks in the surface.

## The Inspiration

Centralia's atmosphere of slow-motion apocalypse, a town consumed from below by invisible fire, with smoke seeping from the ground and streets cracking open over nothing, reportedly inspired the setting of the video game *Silent Hill* and its film adaptation. The parallel is obvious: an abandoned town shrouded in fog and toxic haze, concealing a fire that cannot be extinguished. But Centralia's version is worse. Silent Hill is fiction. Centralia is on fire right now, and it will be for another two centuries.`,
  quickFacts: {
    'Fire Start': 'May 1962 (landfill fire reached coal seams)',
    'Peak Population': '~1,000 (pre-fire)',
    'Current Population': '5 (2020 census)',
    'Federal Relocation': '$42 million allocated in 1984',
    'ZIP Code Revoked': '2002',
    'Estimated Remaining Burn Time': '250+ years',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both are places destroyed by human decisions, one by water diversion, the other by a trash fire that went wrong' },
    { slug: 'lop-nur', relationship: 'Both are places rendered uninhabitable, one by nuclear testing, the other by underground fire' },
  ],
  sources: [
    { title: 'Fire Underground: The Ongoing Tragedy of the Centralia Mine Fire', author: 'David DeKok', year: 2009 },
    { title: 'Unseen Danger: A Tragedy of People, Government, and the Centralia Mine Fire', author: 'David DeKok', year: 1986 },
    { title: 'Centralia Mine Fire: The History of the Coal Seam Fire Beneath Centralia, Pennsylvania', author: 'Pennsylvania Department of Environmental Resources', year: 1991 },
  ],
};
