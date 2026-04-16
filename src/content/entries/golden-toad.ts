import type { Entry } from '../../types';

export const goldenToad: Entry = {
  slug: 'golden-toad',
  name: 'Golden Toad',
  tagline: 'Brilliant orange, found in a single square mile of cloud forest. Discovered in 1966, gone by 1989. The amphibian crisis has a poster child.',
  category: 'fauna',
  subcategory: 'Extinct Amphibians',
  lastKnownYear: 1989,
  lastKnownLocation: 'Monteverde Cloud Forest Reserve, Costa Rica',
  coordinates: [10.31, -84.79],
  region: 'Central America',
  status: 'extinct',
  cause: 'Climate change driving chytrid fungus proliferation, combined with extreme habitat restriction',
  imageUrl: '/images/entries/golden-toad.jpg',
  imageCaption: 'Male golden toad (Incilius periglenes) in its characteristic brilliant orange coloration',
  imageCredit: 'Charles H. Smith, U.S. Fish and Wildlife Service, Public domain, via Wikimedia Commons',
  keyDate: '05-15',
  keyDateLabel: 'Last confirmed golden toad sighting, 1989',
  body: `## A Color That Shouldn't Exist

In 1966, herpetologist Jay Savage was exploring the elfin cloud forest above Monteverde, Costa Rica, when he found something that stopped him in his tracks. Sitting on the mossy forest floor was a toad the color of a traffic cone. Not brownish-orange, not amber. Fluorescent, blazing, unmistakable orange. Savage later wrote that it was as if the animal had been dipped in enamel paint.

He named it Bufo periglenes, the golden toad. It lived in a patch of cloud forest roughly four square miles in extent, centered on a ridge at about 1,500 meters elevation. This was its entire world. No population existed anywhere else on Earth.

## Breeding in Puddles

The golden toad's life cycle was tied to the brief rainy season. Males, with their shocking orange skin, would gather in pools of rainwater on the forest floor in April and May. Females, which were darker with red and yellow blotches, would arrive to breed. The gatherings were spectacular. Hundreds of bright orange toads crowding into temporary pools in the misty forest, a scene that looked like something from another planet.

For the rest of the year, they vanished underground, living in burrows and root systems, invisible. Scientists could only study them during the few weeks of breeding season.

## The Disappearance

In 1987, ecologist Martha Crump counted 1,500 golden toads at their breeding pools, a healthy population. In 1988, she returned and found only ten. In 1989, a single male was spotted sitting on a mossy log. It was the last golden toad anyone has ever seen.

The speed of the collapse was staggering. From 1,500 to zero in two years. Extensive searches of the Monteverde cloud forest throughout the 1990s and 2000s turned up nothing. The species was declared extinct in 2004.

## The First Climate Casualty

The golden toad became the first well-documented species whose extinction was directly linked to climate change. Rising temperatures in the Monteverde region shifted cloud patterns upward, drying out the ridgetop habitat that the toad depended on. The warmer, drier conditions also created ideal conditions for Batrachochytrium dendrobatidis, the chytrid fungus that has devastated amphibian populations worldwide.

The golden toad was a victim of the interaction between the two forces. Its tiny range meant there was nowhere to retreat. Its dependence on ephemeral pools meant that even small changes in rainfall were catastrophic. It was, in the cruelest sense, a perfect test case for how climate change kills a species. The poster child of the global amphibian crisis lived on a single mountaintop and died when the clouds moved.`,
  quickFacts: {
    'Species': 'Incilius periglenes',
    'Discovered': '1966 by Jay Savage',
    'Range': '~4 square miles of Monteverde cloud forest',
    'Last Sighting': 'May 15, 1989, single male',
    'Population in 1987': '~1,500 observed at breeding pools',
    'Significance': 'First species extinction directly attributed to climate change',
  },
  connections: [
    { slug: 'bramble-cay-melomys', relationship: 'Both were confined to tiny habitats and both are considered early casualties of climate change' },
    { slug: 'xerces-blue', relationship: 'Both existed in extremely limited ranges, making them vulnerable to even small environmental changes' },
  ],
  sources: [
    { title: 'In Search of the Golden Frog', author: 'Martha L. Crump', year: 2000 },
    { title: 'Disappearance of the Golden Toad of Costa Rica', author: 'J. Alan Pounds and Martha Crump', year: 1994 },
    { title: 'Widespread Amphibian Extinctions from Epidemic Disease Driven by Global Warming', author: 'J. Alan Pounds et al.', year: 2006 },
  ],
  relatedMedia: [
    { type: 'documentary', title: 'David Attenborough\'s Extinction: The Facts', url: 'https://www.bbc.co.uk/programmes/m000mn4n', description: 'Features the golden toad as a case study in climate-driven extinction' },
  ],
};
