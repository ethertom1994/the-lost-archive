import type { Entry } from '../../types';

export const vinlandBirdsong: Entry = {
  slug: 'vinland-birdsong',
  name: 'Vinland Birdsong',
  tagline: 'When the Norse reached North America, the dawn chorus included billions of birds from species that no longer exist. No one recorded it.',
  category: 'sound',
  subcategory: 'Extinct Soundscapes',
  lastKnownYear: '~1000 CE',
  lastKnownLocation: 'Newfoundland, Canada',
  coordinates: [51.59, -55.53],
  region: 'North America',
  status: 'extinct',
  cause: 'Extinction of multiple North American bird species (Labrador Duck, Eskimo Curlew, Passenger Pigeon) and habitat transformation since European contact',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Sound of an Unbroken Continent

Around the year 1000 CE, Norse sailors from Greenland reached the coast of North America. They called it Vinland. At L'Anse aux Meadows on the northern tip of Newfoundland, they built a small settlement of turf longhouses, stayed for a few seasons, and left. The sagas that record their voyages describe a land of wild grapes, self-sown wheat, and unfamiliar forests. What they do not adequately describe -- because no written language can -- is what that continent sounded like.

The soundscape of pre-Columbian North America was dominated by birds on a scale that has no modern parallel. The passenger pigeon alone numbered between three and five billion individuals. A single flock could darken the sky for hours as it passed overhead, producing a roar of wingbeats audible for miles. John James Audubon, writing in the early 1800s when the species was already declining, described flocks that blotted out the sun from noon until nightfall. In the year 1000, these flocks were at their peak.

## The Chorus

The passenger pigeon was only one voice. The Eskimo curlew migrated in enormous flocks along the Atlantic coast, their high, piping calls filling the air over the tidal flats where the Norse would have landed. The Carolina parakeet -- the only parrot native to eastern North America -- screamed in raucous green flocks through the deciduous forests. The Labrador duck fed in the coastal waters. The ivory-billed woodpecker hammered in the old-growth forests that stretched unbroken from the coast to the Mississippi.

Each of these species is now extinct or functionally so. The passenger pigeon died in 1914 in a Cincinnati zoo. The Carolina parakeet followed in 1918. The Eskimo curlew was last confirmed in 1963. The Labrador duck vanished by 1878. The ivory-billed woodpecker's status remains disputed, but no confirmed sighting has occurred in decades.

## The Dawn Chorus

Ornithologists use the term "dawn chorus" to describe the peak of bird vocalization at sunrise, when hundreds of species sing simultaneously to defend territories and attract mates. The dawn chorus of pre-Columbian North America would have been staggeringly loud and complex. The sheer biomass of birds -- billions of individuals across hundreds of species, in forests that had never been logged, wetlands that had never been drained, prairies that had never been plowed -- produced a wall of sound at daybreak that has no equivalent in the modern world.

Studies of acoustic ecology in old-growth forest remnants suggest that removing even a few species noticeably thins the soundscape. The extinction of dozens of species and the reduction of surviving populations by orders of magnitude has not merely quieted the continent. It has fundamentally altered the acoustic texture of North American mornings. The Norse heard something at L'Anse aux Meadows that no human will hear again.

## No Record

The Norse sagas mention the richness of Vinland's wildlife but offer no detailed acoustic descriptions. No recording technology would exist for another 860 years. The soundscape of pre-Columbian North America -- arguably the richest bird chorus on any temperate landmass in the Holocene -- passed entirely unrecorded. We have bones, feathers, written descriptions from later centuries when the decline was already underway, and silence.`,
  quickFacts: {
    'Norse Settlement': 'L\'Anse aux Meadows, ~1000 CE',
    'Passenger Pigeon Population': '3-5 billion (estimated peak)',
    'Passenger Pigeon Extinct': '1914 (last individual, Martha, Cincinnati Zoo)',
    'Carolina Parakeet Extinct': '1918',
    'Eskimo Curlew Last Confirmed': '1963',
    'Labrador Duck Extinct': '~1878',
    'Audio Record': 'None -- predates sound recording by 860 years',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both represent bird sounds permanently lost to extinction, one documented in a final recording, the other never recorded at all' },
    { slug: 'dodo', relationship: 'Both illustrate the pattern of human expansion driving island and continental species to extinction before they could be documented' },
  ],
  sources: [
    { title: 'A Passenger Pigeon\'s Story: The History of Extinction', author: 'Joel Greenberg', year: 2014 },
    { title: 'The Sagas of Vinland', author: 'Keneva Kunz (translator)', year: 2001 },
    { title: 'Hope Is the Thing with Feathers: A Personal Chronicle of Vanished Birds', author: 'Christopher Cokinos', year: 2000 },
    { title: 'The Great Animal Orchestra: Finding the Origins of Music in the World\'s Wild Places', author: 'Bernie Krause', year: 2012 },
  ],
};
