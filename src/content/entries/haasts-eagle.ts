import type { Entry } from '../../types';

export const haastsEagle: Entry = {
  slug: 'haasts-eagle',
  name: "Haast's Eagle",
  tagline: 'The largest eagle that ever lived. It hunted giant flightless birds. When humans ate its prey, the sky emptied.',
  category: 'fauna',
  subcategory: 'Raptors',
  lastKnownYear: 1400,
  lastKnownLocation: 'South Island, New Zealand',
  coordinates: [-43.53, 172.63],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Loss of prey species (moa) following Maori hunting, habitat destruction',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Apex of the Sky

Haast's eagle (*Hieraaetus moorei*) was the largest known true eagle in recorded natural history. Females weighed up to 15 kilograms, with a wingspan reaching three meters. For comparison, the largest living eagle, the harpy eagle, weighs about half as much. Haast's eagle was not merely large. It was an apex predator built to kill prey far heavier than itself, striking from above at speeds estimated at 80 kilometers per hour, using talons comparable in size to a tiger's claws.

Its prey were the moa, a family of giant flightless birds endemic to New Zealand, some of which stood over three meters tall and weighed more than 200 kilograms. New Zealand had no native land mammals. The ecological roles filled elsewhere by wolves, big cats, and bears were occupied here entirely by birds. Haast's eagle sat at the top of this avian food chain, the supreme predator of an island world unlike any other.

## The Arrival of Humans

Polynesian settlers, the ancestors of the Maori, arrived in New Zealand around 1280 CE. They found a land teeming with moa and began hunting them intensively. Moa had no experience with terrestrial predators and were easy targets. Archaeological evidence shows that within roughly 100 to 150 years, all nine species of moa were driven to extinction. The hunting was extraordinarily efficient. Moa kill sites contain the bones of thousands of individuals, many butchered and cooked.

Haast's eagle depended entirely on moa and other large birds for food. When the moa vanished, the eagle had nothing to sustain it. There was no alternative prey of sufficient size in New Zealand. The eagle could not adapt fast enough, and the species collapsed alongside its food source. Subfossil remains suggest Haast's eagle was gone by approximately 1400 CE, only a century or so after human arrival.

## Pouakai

Maori oral traditions preserve memories of a great bird of prey called Te Hokioi or Pouakai, described as an enormous eagle capable of attacking humans. These accounts were long dismissed as mythology until the discovery of Haast's eagle bones in the nineteenth century confirmed their basis in reality. At 15 kilograms with massive talons, the eagle was certainly capable of attacking a human child or a crouching adult. The Maori remembered what science later rediscovered: there had once been a monster in the sky, and it was real.`,
  quickFacts: {
    'Scientific Name': 'Hieraaetus moorei',
    'Weight': 'Up to 15 kg (females)',
    'Wingspan': 'Up to 3 meters',
    'Prey': 'Moa (giant flightless birds)',
    'Extinct': '~1400 CE',
    'Location': 'South Island, New Zealand',
    'Maori Name': 'Pouakai / Te Hokioi',
  },
  connections: [
    { slug: 'dodo', relationship: 'Both were island species destroyed by the ecological disruption that followed human arrival' },
    { slug: 'moa-cuisine', relationship: 'Haast\'s eagle went extinct because humans hunted the moa to extinction, removing its only food source' },
  ],
  sources: [
    { title: 'Ancient DNA Tells Story of Giant Eagle Evolution', author: 'Michael Bunce et al.', year: 2005 },
    { title: 'New Zealand\'s Giant Eagle', author: 'Paul Scofield and Ken Ashwell', year: 2009 },
    { title: 'Rapid Extinction of the Moas', author: 'Richard Holdaway and Chris Jacomb', year: 2000 },
  ],
};
