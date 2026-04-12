import type { Entry } from '../../types';

export const slenderBilledCurlew: Entry = {
  slug: 'slender-billed-curlew',
  name: 'Slender-billed Curlew Call',
  tagline: 'A shorebird that bred in Siberia and wintered in the Mediterranean. Last confirmed sighting: 2001. We barely knew what it sounded like.',
  category: 'sound',
  subcategory: 'Unrecorded Birdsong',
  lastKnownYear: 2001,
  lastKnownLocation: 'Merja Zerga, Morocco (last confirmed sighting)',
  coordinates: [34.83, -6.28],
  region: 'Eurasia / North Africa',
  status: 'extinct',
  cause: 'Habitat loss in breeding grounds (Siberian peatlands) and wintering grounds (Mediterranean wetlands), hunting',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Bird Nobody Knew

The slender-billed curlew was a medium-sized shorebird with brown streaked plumage, a long, downcurved bill, and a call that almost no one alive has heard. It bred somewhere in the vast peatlands of western Siberia and wintered in wetlands around the Mediterranean, but the details of its life were always vague. No scientist ever found a confirmed nest after 1924. No breeding colony was studied in detail. The bird passed through the world leaving barely a trace.

At its peak, it may have numbered in the hundreds of thousands. Flocks were reported in Hungary, Greece, Morocco, and Tunisia through the nineteenth century. But by the mid-twentieth century, sightings had become rare and scattered. A handful of birds in a wetland here, a single individual on a mudflat there. The species was slipping away while ornithologists were still trying to figure out where it lived.

## Almost No Recordings

For most bird species, even rare ones, we have audio recordings. The slender-billed curlew falls into a different category. Only fragmentary recordings exist, brief clips captured opportunistically during chance encounters. The full repertoire of the species, its territorial calls, its courtship songs, its alarm notes, was never systematically documented.

What we know of the call comes primarily from written descriptions: a melodic, somewhat plaintive whistle, similar to but distinct from the related Eurasian curlew. Ornithologists who heard it described it as softer and more fluting. But verbal descriptions of birdsong are like written descriptions of color. They gesture at the experience without capturing it.

## The Search

The slender-billed curlew became one of the most sought-after birds in the world. Expeditions searched potential breeding grounds across Siberia, using satellite imagery to identify likely peatland habitats. Wintering ground surveys covered wetlands from Morocco to the Caspian Sea. Birdwatchers made pilgrimages to sites of historical sightings.

The last confirmed sighting was in 2001, a few individuals at Merja Zerga, a coastal lagoon in Morocco. There have been unconfirmed reports since, but none verified by photographs or specimens. The species was almost certainly extinct by the 2010s, though it was not formally declared so until later, because you cannot prove the absence of a bird that was always good at not being found.

## A Song Barely Heard

Most entries in the archive of lost sounds describe something that was well known and then silenced. The slender-billed curlew is different. Its song was never properly known. It existed for thousands of years, echoing across Siberian bogs and Mediterranean marshes, and we never got around to recording it. The loss isn't of a familiar sound made silent. It's of a sound that was always, for us, almost silent, and now truly is.`,
  quickFacts: {
    'Species': 'Numenius tenuirostris',
    'Breeding Range': 'Western Siberian peatlands (precise location never confirmed)',
    'Wintering Range': 'Mediterranean wetlands, North Africa',
    'Last Confirmed Sighting': '2001, Merja Zerga, Morocco',
    'Audio Recordings': 'Only brief, fragmentary clips exist',
    'Last Confirmed Nest': '1924',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both are bird species whose songs were lost, though the Kauai O\'o at least has one famous recording' },
    { slug: 'eyak-language', relationship: 'Both represent losses that were happening in plain sight while there was still time to document them' },
  ],
  sources: [
    { title: 'The Slender-billed Curlew: A Global Action Plan', author: 'BirdLife International', year: 2007 },
    { title: 'Status and Distribution of the Slender-billed Curlew', author: 'Adam Gretton', year: 1991 },
    { title: 'Lost Animals: Extinction and the Photographic Record', author: 'Errol Fuller', year: 2013 },
  ],
};
