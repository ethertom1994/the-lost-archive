import type { Entry } from '../../types';

export const tecopaPupfish: Entry = {
  slug: 'tecopa-pupfish',
  name: 'The Tecopa Pupfish',
  tagline: 'A tiny fish that lived in two hot springs in the Mojave Desert. The springs were "improved" into a bathhouse. The first animal officially delisted because it was extinct.',
  category: 'fauna',
  subcategory: 'Freshwater Fish',
  lastKnownYear: 1970,
  lastKnownLocation: 'Tecopa Hot Springs, Inyo County, California',
  coordinates: [35.87, -116.23],
  region: 'North America',
  status: 'extinct',
  cause: 'Modification of its only habitat — two natural hot springs — into a commercial bathhouse, which raised water temperatures beyond the fish\'s tolerance and eliminated its spawning areas',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Two Springs in the Desert

The Tecopa pupfish (*Cyprinodon nevadensis calidae*) existed in precisely two places on Earth: the North and South Tecopa Hot Springs, a pair of natural thermal outflows in the Mojave Desert of southeastern California, near the ghost town of Tecopa. The springs, fed by geothermal heat, maintained water temperatures around 36-40°C (97-104°F) — hot enough to be uncomfortable for humans but perfect for a fish that had evolved over thousands of years to thrive in exactly these conditions.

The pupfish was tiny, rarely exceeding 4 centimeters in length. It had adapted to an environment of extraordinary constraint: extreme heat, high mineral content, and a total habitat spanning perhaps a few hundred square meters of warm, shallow water. It was one of dozens of pupfish subspecies scattered across the desert Southwest, each isolated in its own spring or pool, each a miniature evolutionary experiment in survival.

## The Bathhouse

In the early 1960s, Inyo County decided to "improve" the Tecopa Hot Springs for human recreation. The natural outflow channels were modified, the two springs were channeled together, and a concrete bathhouse was built over the combined flow. The modifications raised water temperatures in key areas above 42°C — past the pupfish's thermal tolerance. The concrete channelization eliminated the shallow, vegetated margins where the fish spawned and fed.

Nobody consulted the fish. In fact, the subspecies was so obscure that its existence was barely known outside a small circle of ichthyologists. By the time anyone thought to check, it was gone. The last confirmed specimen was collected in 1970.

## The Dubious Honor

On January 15, 1982, the Tecopa pupfish became the first animal to be formally removed from the U.S. Endangered Species Act's list of threatened and endangered species due to extinction. It had been listed in 1973 when the Act was passed, but by then the fish was already gone — it had simply taken the bureaucracy a decade to confirm it.

The species that holds the distinction of being the first animal officially acknowledged as failed by America's primary conservation law was killed not by an oil spill, a dam, or industrial pollution. It was killed by a spa.`,
  quickFacts: {
    'Scientific Name': 'Cyprinodon nevadensis calidae',
    'Size': '~4 cm (1.5 inches)',
    'Entire Range': 'Two hot springs in Inyo County, CA',
    'Water Temperature Tolerance': '36-40°C (97-104°F)',
    'Last Confirmed': '1970',
    'Delisted (extinct)': 'January 15, 1982',
    'Distinction': 'First animal removed from ESA as extinct',
    'Cause': 'Bathhouse construction altered spring habitat',
  },
  connections: [
    { slug: 'bramble-cay-melomys', relationship: 'Both tiny, range-restricted animals extinguished by human modification of their entire habitat' },
    { slug: 'golden-toad', relationship: 'Both small animals with extremely limited ranges, wiped out when their micro-habitat changed' },
  ],
  sources: [
    { title: 'Recovery or Extinction of the Tecopa Pupfish', author: 'U.S. Fish and Wildlife Service', year: 1982 },
    { title: 'Fishes of the Death Valley System', author: 'Robert Rush Miller', year: 1948 },
    { title: 'Desert Fishes Council Proceedings', year: 1980 },
    { title: 'Endangered and Threatened Wildlife: Deauthorization of the Tecopa Pupfish', author: 'Federal Register Vol. 47, No. 125', year: 1982 },
  ],
};
