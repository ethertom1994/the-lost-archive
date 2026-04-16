import type { Entry } from '../../types';

export const guadalupeCaracara: Entry = {
  slug: 'guadalupe-caracara',
  name: 'Guadalupe Caracara',
  tagline: 'A falcon so fearless that it ignored the humans shooting it. On December 1, 1900, the American collector Rollo Beck found eleven of them and shot nine. He later realized they were almost certainly the last.',
  category: 'fauna',
  subcategory: 'Extinct Birds',
  lastKnownYear: 1900,
  lastKnownLocation: 'Guadalupe Island, Baja California, Mexico',
  coordinates: [29.0333, -118.2833],
  region: 'North America',
  status: 'extinct',
  cause: 'Deliberate poisoning and shooting campaign by goat herders, combined with destruction of island vegetation by introduced goats',
  body: `## The Quelili

The Guadalupe caracara (Caracara lutosa) was a medium-sized falcon endemic to Guadalupe Island, a volcanic Mexican island 240 kilometers off the coast of Baja California. Known to 19th-century inhabitants as the quelili, after its piercing two-note call, it was a generalist predator and scavenger that fed on seabirds, lizards, insects, and whatever the island's ecology happened to provide. Its closest living relatives are the crested caracaras of the Americas, but the Guadalupe form had diverged enough in plumage and behavior to be recognized as a full species.

The bird was common on the island when the American naturalist Edward Palmer visited in 1875. Palmer described quelilis perching openly, allowing approach to within a few feet, and investigating any new object on the ground. This fearlessness was, like the dodo's, a product of evolution on an island without predators. It would turn out to be fatal.

## The Goat Problem

Goats had been introduced to Guadalupe in the early 19th century by passing whalers and sealers, and by the 1870s the population had exploded into the thousands. Goats eat everything. They stripped the island's native cypress, pine, and oak forests to the ground, converted native grasslands to bare soil, and drove at least four endemic plant species to extinction by grazing. A small community of Russian and Mexican goat herders lived on the island to manage and harvest the herd.

The Guadalupe caracara occasionally took newborn goats, a behavior extensively exaggerated by herders. In the 1880s, the herders began a deliberate extermination campaign. They shot the birds on sight, tracked them to their nesting ledges, and laid out strychnine-poisoned goat carcasses specifically to kill them. The fearless quelili made itself an easy target. By 1897, a single bird was observed in March of that year. By 1900, the species was nearly gone.

## Rollo Beck, December 1, 1900

On December 1, 1900, the American ornithological collector Rollo Beck, working for the Museum of Vertebrate Zoology at Berkeley, landed on Guadalupe Island. He encountered a flock of eleven Guadalupe caracaras, the largest group anyone had seen in more than a decade. Beck shot nine of them for museum specimens. In his subsequent writings, he made clear that he had assumed from the bird's abundance in that one encounter that the species was still common. It was not. Beck's nine dead caracaras probably included the majority of the surviving population.

A single unconfirmed sighting was reported in 1903. By 1906, ornithologists concluded the species was extinct. Beck's own collection from that day, along with specimens from earlier expeditions, constitutes roughly 35 preserved skins and skeletons in museums worldwide, the entire material trace of the species.

## The Only Intentionally-Exterminated Bird

The Guadalupe caracara occupies an unusual position in the history of extinction. Most bird extinctions, even deliberate ones, happen as side effects: habitat loss, introduced predators, market hunting for plumage. The Guadalupe caracara is one of the few species that was intentionally exterminated by humans as a goal in itself. Goat herders specifically wanted these birds gone, pursued that objective systematically, and succeeded within a generation.

The island itself is now a biosphere reserve. The goats were finally eliminated in 2003, and native vegetation is returning. The pine forest, the cypress groves, and the oak woodland that the caracara hunted in are all being restored by Mexican conservation authorities. The bird that defined the island's landbird fauna for thousands of years will not come back to enjoy it. Its ecological role, as the only raptorial predator of the island's seabird colonies, is now unfilled, and the ecosystem being reconstructed on Guadalupe is not the one the caracara lived in.`,
  quickFacts: {
    'Species': 'Caracara lutosa',
    'Endemic To': 'Guadalupe Island, Mexico',
    'Also Known As': 'Quelili',
    'Last Large Encounter': 'December 1, 1900 (Rollo Beck, 11 birds, 9 shot)',
    'Last Unconfirmed Sighting': '1903',
    'Museum Specimens': '~35 worldwide',
  },
  connections: [
    { slug: 'dodo', relationship: 'Both were fearless island birds whose evolved lack of fear of humans made them easy to exterminate' },
    { slug: 'caribbean-monk-seal', relationship: 'Both are species of the wider Caribbean and eastern Pacific colonized by Europeans, both killed by direct human persecution without sentiment' },
    { slug: 'mauritius-dodo-ecosystem', relationship: 'Both are cases where an introduced herbivore (goats on Guadalupe, pigs and macaques on Mauritius) transformed an island ecosystem and helped drive an endemic bird extinct' },
  ],
  sources: [
    { title: 'Extinct Birds', author: 'Julian P. Hume', year: 2017 },
    { title: 'Guadalupe Caracara', url: 'https://en.wikipedia.org/wiki/Guadalupe_caracara' },
    { title: 'Guadalupe Island Caracara', url: 'https://www.islapedia.com/index.php?title=GUADALUPE_ISLAND_CARACARA', author: 'Islapedia' },
  ],
  keyDate: '1900-12-01',
  keyDateLabel: 'Rollo Beck expedition',
};
