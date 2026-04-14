import type { Entry } from '../../types';

export const woodsCycad: Entry = {
  slug: 'woods-cycad',
  name: "Wood's Cycad",
  tagline: 'A single male plant collected in 1895. No female has ever been found. Every specimen alive today is a clone of that one individual. The loneliest plant in the world.',
  category: 'flora',
  subcategory: 'Cycads',
  lastKnownYear: 1916,
  lastKnownLocation: 'Ngoye Forest, KwaZulu-Natal, South Africa',
  coordinates: [-28.88, 31.68],
  region: 'Southern Africa',
  status: 'extinct_in_wild',
  cause: 'The wild population was reduced to a single male plant, which was collected for botanical gardens. Extensive searches have never located a female specimen.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Kingdom of One

*Encephalartos woodii* is a cycad — a group of plants that predates the dinosaurs, with fossil records stretching back 280 million years. Cycads survived the Permian extinction, the Triassic-Jurassic extinction, and the asteroid that killed the dinosaurs. They outlasted continents. And now one of their kind is the loneliest organism on Earth.

In 1895, the botanist John Medley Wood discovered a single cycad growing on the edge of the Ngoye Forest in what is now KwaZulu-Natal, South Africa. He recognized it as an undescribed species. The plant was a male, producing pollen cones but no seeds. Wood collected offsets (vegetative offshoots) and sent them to the Durban Botanic Gardens. Over the following decades, additional offsets were removed from the wild plant. By 1916, the original specimen and its last remaining offsets were taken for cultivation. Nothing was left in the forest.

## The Missing Half

Cycads are dioecious: each plant is either male or female. Reproduction requires pollen from a male cone to reach a female cone, typically transferred by specialized beetles. Wood's Cycad produces healthy, viable pollen. But no female *Encephalartos woodii* has ever been found — not in the Ngoye Forest, not in any adjacent forest, not anywhere in the world.

Botanists have searched repeatedly. The Ngoye Forest has been surveyed multiple times. Related cycad species grow in the region, but the specific characteristics of *E. woodii* — its distinctive leaf shape and cone structure — have never been matched in a female plant. Some researchers speculate that the species was always rare and that females may have been lost to habitat clearing before they were ever documented. Others wonder if the species was naturally declining before Wood found it.

## The Clones

Every *Encephalartos woodii* alive today — in the Durban Botanic Gardens, Kew Gardens, the US National Arboretum, and private collections worldwide — is a clone. They are all genetically identical copies of that single male plant from 1895. They grow. They produce cones. They are beautiful, ancient-looking plants. But they cannot reproduce sexually. They are living fossils in the most literal sense: organisms that exist but cannot create a next generation.

Biotechnologists have attempted to induce sex change in cycads (some related species can occasionally switch) and to hybridize *E. woodii* with closely related species. None of these efforts have produced a true *E. woodii* offspring. The plant waits, as it has waited for over a century, for a mate that may never have existed within human memory.`,
  quickFacts: {
    'Scientific Name': 'Encephalartos woodii',
    'Family': 'Zamiaceae (Cycads)',
    'Age of Genus': '~280 million years',
    'Discovered': '1895 by John Medley Wood',
    'Sex': 'Male (all known specimens)',
    'Female Found': 'Never',
    'Living Specimens': 'All clones of one individual',
    'Notable Locations': 'Durban Botanic Gardens, Kew Gardens',
  },
  connections: [
    { slug: 'cafe-marron', relationship: 'Both reduced to a single known plant, with entire species survival resting on one individual' },
    { slug: 'franklinia', relationship: 'Both plants that survive only in cultivation, extinct in the wild since their original discovery' },
  ],
  sources: [
    { title: 'The Cycads', author: 'Loran M. Whitelock', year: 2002 },
    { title: 'Encephalartos woodii: A Case Study in Conservation', author: 'South African National Biodiversity Institute', year: 2015 },
    { title: 'The Loneliest Plant in the World', author: 'BBC Earth', year: 2018 },
    { title: 'Cycad classification and conservation', author: 'IUCN SSC Cycad Specialist Group', year: 2010 },
  ],
};
