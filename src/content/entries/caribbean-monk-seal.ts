import type { Entry } from '../../types';

export const caribbeanMonkSeal: Entry = {
  slug: 'caribbean-monk-seal',
  name: 'Caribbean Monk Seal',
  tagline: 'The first New World animal Columbus described. His crew killed eight for food that same day.',
  category: 'fauna',
  subcategory: 'Extinct Marine Mammals',
  lastKnownYear: 1952,
  lastKnownLocation: 'Serranilla Bank, between Jamaica and Honduras',
  coordinates: [15.79, -79.83],
  region: 'Caribbean',
  status: 'extinct',
  cause: 'Hunting for oil and skin, overfishing of prey species, and habitat disturbance',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Sea Wolves

On August 9, 1494, during his second voyage to the New World, Christopher Columbus anchored near a small island off the southern coast of Hispaniola. His crew spotted a group of large animals resting on the beach. Columbus described them as "sea wolves" in his log and ordered eight killed for provisions. These were Caribbean monk seals, and this was the first written record of a New World mammal by a European.

The seals were about eight feet long and weighed up to 600 pounds. They had brown fur that faded to yellowish-white on the belly. Their most notable characteristic was an almost total lack of fear of humans. Unlike the wary harbor seals of northern waters, Caribbean monk seals would lie on beaches and barely stir when approached. Sailors could walk up and club them.

This docility, so striking and so fatal, was consistent across every account for the next four centuries.

## Rendered for Oil

Caribbean monk seals ranged across the entire Caribbean basin, from the Yucatan Peninsula to the Bahamas to the Lesser Antilles. They hauled out on sandy beaches and low-lying coral islands. Spanish colonists hunted them from the 1500s onward, primarily for their blubber, which was rendered into oil for lamps and lubricants.

During the 1700s, organized hunting expeditions targeted seal colonies on remote cays. A single expedition could kill hundreds. The seals had no land predators and no instinct to flee, which made the slaughter efficient. By the mid-1800s, sightings were becoming rare across most of their former range.

## The Last Colony

Small groups persisted on isolated banks and atolls through the early twentieth century. Scientists documented a colony at the Triangle Keys off the Yucatan in 1911. By the 1930s and 1940s, sightings dwindled to lone individuals or pairs. The last confirmed sighting was a small group at Serranilla Bank in 1952.

NOAA conducted extensive surveys of potential habitat throughout the 1970s and 1980s. They found nothing. In 2008, the Caribbean monk seal was officially declared extinct, the only seal species driven to extinction entirely by human activity.

## The Quietest Extinction

No photographs of a living Caribbean monk seal exist. No recordings. No film. We have sketches, a handful of museum specimens, and centuries of written accounts all describing the same thing: a large, gentle animal that did not run. The Caribbean monk seal was not hunted because it was aggressive or dangerous. It was hunted because it was trusting.`,
  quickFacts: {
    'Species': 'Neomonachus tropicalis',
    'First European Record': 'Columbus, August 9, 1494',
    'Size': 'Up to 8 feet long, ~600 pounds',
    'Last Confirmed Sighting': '1952, Serranilla Bank',
    'Officially Declared Extinct': '2008 by NOAA',
    'Distinction': 'Only seal species driven to extinction by humans',
  },
  connections: [
    { slug: 'stellers-sea-cow', relationship: 'Both were large marine mammals whose tameness made them easy targets for hunters' },
    { slug: 'baiji', relationship: 'Both were the sole species in their ecological niche, leaving a permanent gap in their ecosystem' },
  ],
  sources: [
    { title: 'Historical Ecology of the Caribbean Monk Seal', author: 'Deborah Mcclenachan and Andrew Cooper', year: 2008 },
    { title: 'The Journal of Christopher Columbus', author: 'Christopher Columbus (trans. Cecil Jane)', year: 1930 },
    { title: 'Status and Distribution of the Caribbean Monk Seal', author: 'NOAA Technical Memorandum', year: 2008 },
  ],
};
