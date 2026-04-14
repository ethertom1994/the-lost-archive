import type { Entry } from '../../types';

export const thylacine: Entry = {
  slug: 'thylacine',
  name: 'Thylacine',
  tagline: 'The Tasmanian government granted it protected status the same day the last one died. The paperwork arrived at an empty cage.',
  category: 'fauna',
  subcategory: 'Extinct Marsupials',
  lastKnownYear: 1936,
  lastKnownLocation: 'Hobart Zoo, Tasmania, Australia',
  coordinates: [-42.88, 147.33],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Government bounty hunting, habitat loss, disease, and competition with introduced dogs',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Tiger That Wasn't

The thylacine looked like a dog designed by someone who'd only had a wolf described to them. It was a marsupial, more closely related to a kangaroo than to any canine, yet it had evolved the body of a predator so convincingly that early European settlers called it the Tasmanian tiger. It had dark stripes across its lower back and a stiff, almost reptilian tail. Its jaw could open to an improbable 80 degrees, wider than any living mammal.

Once found across mainland Australia and New Guinea, the thylacine had been pushed to Tasmania by the arrival of the dingo thousands of years earlier. When European settlers arrived in the early 1800s, roughly 5,000 thylacines still roamed the island. The settlers, who brought sheep, saw the thylacine as a threat to their flocks.

## A Bounty on Every Head

In 1888, the Tasmanian government placed a formal bounty on the thylacine. One pound per adult, ten shillings per pup. Between 1888 and 1909, the government paid out bounties on 2,184 animals. Private bounties from sheep farming companies pushed the actual kill count higher. Farmers, trappers, and hunters killed them with guns, traps, poison, and dogs.

The bounty was devastatingly effective. By the 1920s, sightings had become rare. A disease, possibly distemper, swept through the remaining population and accelerated the decline. The last wild thylacine was shot in 1930 by a farmer named Wilf Batty, who found it in his henhouse.

## Benjamin

The last known thylacine lived in the Beaumaris Zoo in Hobart. The animal, often called Benjamin (though this name was applied decades later), was captured in 1933. Footage from 1933 shows it pacing its enclosure, yawning to display that extraordinary gape, and huddling against the wall for warmth.

On September 7, 1936, Benjamin died of exposure. The zoo had locked it out of its sleeping quarters on a night of freezing temperatures. The animal froze to death because someone forgot to open a door.

On that same day, September 7, 1936, the Tasmanian government had officially declared the thylacine a protected species. The protection order and the death of the last individual occurred on the same date. The timing is almost too symmetrical to be true, but the records confirm it.

## The Afterlife

The thylacine refuses to stay dead in the public imagination. Thousands of unconfirmed sightings have been reported across Tasmania since 1936, with blurry photographs and trail camera footage appearing every few years. None has been confirmed. In 2022, Colossal Biosciences, the same company working on woolly mammoth de-extinction, announced a project to bring back the thylacine using gene editing and marsupial surrogates. The effort is controversial, expensive, and may take decades, but it represents the first serious scientific attempt to undo an extinction that never should have happened.

The 80-degree jaw gape. The stripes. The stiff tail. Everything about the thylacine suggests a creature that evolution spent millions of years perfecting, and that humans erased in about fifty.`,
  quickFacts: {
    'Species': 'Thylacinus cynocephalus',
    'Common Names': 'Tasmanian tiger, Tasmanian wolf',
    'Last Individual': 'Died Sept. 7, 1936, Hobart Zoo',
    'Bounty Period': '1888-1909, 2,184 bounties paid',
    'Jaw Gape': '80 degrees, widest of any known mammal',
    'De-extinction Status': 'Active project by Colossal Biosciences (announced 2022)',
  },
  connections: [
    { slug: 'pyrenean-ibex', relationship: 'Both were targeted for extermination by governments that later tried too late to save them' },
    { slug: 'baiji', relationship: 'Both species vanished despite being iconic and well-documented, proving that awareness alone cannot prevent extinction' },
  ],
  sources: [
    { title: 'Carnivorous Nights: On the Trail of the Tasmanian Tiger', author: 'Margaret Mittelbach and Michael Crewdson', year: 2005 },
    { title: 'The Last Tasmanian Tiger: The History and Extinction of the Thylacine', author: 'Robert Paddle', year: 2000 },
    { title: 'Tasmanian Tiger: The Tragic Tale of How the World Lost Its Most Mysterious Predator', author: 'David Owen', year: 2003 },
  ],
  relatedMedia: [
    { type: 'video', title: 'Last Known Thylacine Footage (1933)', url: 'https://www.youtube.com/watch?v=6vqCCI1ZF7o', description: 'Film of the last captive thylacine at the Hobart Zoo' },
    { type: 'book', title: 'The Last Tasmanian Tiger', url: 'https://www.cambridge.org/core/books/last-tasmanian-tiger/0E2F0E71F2DBB0DB2A9C6C64506FC208', description: 'Robert Paddle\'s definitive account of the thylacine\'s extinction' },
  ],
};
