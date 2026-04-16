import type { Entry } from '../../types';

export const passengerPigeon: Entry = {
  slug: 'passenger-pigeon',
  name: 'The Passenger Pigeon',
  tagline: 'Once the most abundant bird in North America — flocks of billions darkened the sky for hours. The last one, Martha, died alone in a Cincinnati zoo in 1914.',
  category: 'fauna',
  subcategory: 'Birds',
  lastKnownYear: 1914,
  lastKnownLocation: 'Cincinnati Zoo, Ohio, USA',
  coordinates: [39.14, -84.51],
  region: 'North America',
  status: 'extinct',
  cause: 'Industrial-scale hunting for food and sport, combined with massive deforestation that destroyed nesting habitat. The species\' reliance on enormous flocks for breeding meant small populations could not sustain themselves.',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Martha%2C_the_last_Passenger_Pigeon._Natural_History_Museum%2C_June%2C_2015._Digital_photo%2C_cropped_and_brightened.jpg/400px-Martha%2C_the_last_Passenger_Pigeon._Natural_History_Museum%2C_June%2C_2015._Digital_photo%2C_cropped_and_brightened.jpg',
  imageCaption: 'Martha, the last passenger pigeon, mounted specimen at the Smithsonian National Museum of Natural History',
  imageCredit: 'Tim Evanson, CC BY-SA 2.0, via Wikimedia Commons',
  keyDate: '09-01',
  keyDateLabel: 'Last passenger pigeon Martha died at Cincinnati Zoo, 1914',
  body: `## Billions to Zero

The passenger pigeon (*Ectopistes migratorius*) was, by some estimates, the most numerous bird species on Earth. Alexander Wilson, the father of American ornithology, observed a single flock in 1813 that he estimated at over two billion birds. The flock was a mile wide and took four hours to pass overhead, darkening the sky. John James Audubon described a similar flock that blotted out the sun for three days.

These numbers were not exaggerations. Nesting colonies covered hundreds of square kilometers, with trees bending and breaking under the weight of dozens of nests per branch. The birds ate acorns, chestnuts, and beech nuts, moving through the eastern forests of North America in nomadic flocks that tracked mast production across thousands of miles.

## The Slaughter

Commercial hunting of passenger pigeons began in earnest in the 1800s. The birds were cheap protein — shot, netted, and clubbed in quantities that seem impossible. Professional pigeon hunters followed the flocks by telegraph, arriving at nesting sites with nets, guns, and barrels. A single hunter might kill 5,000 birds in a day. The birds were shipped by rail car to markets in New York, Boston, and Chicago.

The scale of killing was staggering, but it was the interaction with habitat loss that proved fatal. As eastern forests were cleared for agriculture, the passenger pigeon lost both food sources and nesting sites. The species had evolved for abundance — its mating and nesting behaviors required massive colonial aggregations to succeed. As the population declined, the remaining birds could not form colonies large enough to breed effectively. The social species became a victim of its own sociology.

## Martha

The last known wild passenger pigeon was shot in 1901 in Ohio. Small captive populations lingered in zoos. On September 1, 1914, at 1:00 PM, the last passenger pigeon — a female named Martha, after Martha Washington — died in her cage at the Cincinnati Zoo. She was 29 years old. Her body was frozen in a block of ice and shipped to the Smithsonian Institution, where she was mounted and displayed.

From billions to one. From one to none. The speed of the collapse — from abundance to extinction in roughly fifty years — remains one of the most dramatic ecological events in recorded history.`,
  quickFacts: {
    'Scientific Name': 'Ectopistes migratorius',
    'Peak Population': 'Estimated 3-5 billion',
    'Flock Size': 'Up to 2+ billion in a single flock',
    'Last Wild Bird': '1901 (shot in Ohio)',
    'Last Individual': 'Martha, died September 1, 1914',
    'Location of Death': 'Cincinnati Zoo, Ohio',
    'Body Held At': 'Smithsonian Institution',
    'Collapse Speed': '~50 years from abundance to extinction',
  },
  connections: [
    { slug: 'passenger-pigeon-pie', relationship: 'The food entry covers the culinary tradition; this entry covers the bird itself and the scale of its destruction' },
    { slug: 'great-auk', relationship: 'Both abundant species reduced to zero through systematic hunting — one in the Atlantic, one across North America' },
    { slug: 'stellers-sea-cow', relationship: 'Both species destroyed within decades of large-scale human exploitation, demonstrating how quickly abundance can become absence' },
  ],
  sources: [
    { title: 'A Feathered River Across the Sky: The Passenger Pigeon\'s Flight to Extinction', author: 'Joel Greenberg', year: 2014 },
    { title: 'The Passenger Pigeon', author: 'Errol Fuller', year: 2014 },
    { title: 'American Ornithology', author: 'Alexander Wilson', year: 1813 },
    { title: 'The Passenger Pigeon in Ontario', author: 'Royal Ontario Museum', year: 2014 },
  ],
};
