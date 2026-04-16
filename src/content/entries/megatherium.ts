import type { Entry } from '../../types';

export const megatherium: Entry = {
  slug: 'megatherium',
  name: 'Megatherium',
  tagline: 'A ground sloth the size of an African elephant, walking upright on its hind legs to reach tree canopies. South America\'s largest land mammal of the last three million years disappeared just as Clovis-era hunters arrived on its doorstep.',
  category: 'fauna',
  subcategory: 'Pleistocene Megafauna',
  lastKnownYear: -10600,
  lastKnownLocation: 'Pampas region, Argentina',
  coordinates: [-37.0, -61.0],
  region: 'South America',
  status: 'extinct',
  cause: 'Late Pleistocene climate change and human hunting, with butchery sites confirming contact between humans and the species',
  imageUrl: undefined,
  body: `## A Sloth the Size of an Elephant

*Megatherium americanum* was the largest ground sloth that ever lived, and one of the largest land mammals in the history of South America. Adults weighed around four tonnes and stood over three and a half meters tall on their hind legs. Their forelimbs ended in massive curved claws, and their jaws carried peg-like teeth adapted for tough vegetation. They walked on the outer edges of their feet, a gait shared with their smaller living cousins, the tree sloths, but scaled up to the size of a modern bull elephant.

Georges Cuvier named and described *Megatherium* in 1796 from bones shipped to Madrid from what is now Argentina, making it one of the first extinct species recognized by science. For much of the 19th century, Megatherium was cited alongside mammoths and mastodons as the primary evidence that extinction was real, that whole kinds of animals could simply be gone. Darwin collected *Megatherium* bones in Patagonia during the voyage of the Beagle, and the discovery unsettled him in productive ways.

## A Landscape of Giants

Megatherium was not alone. Late Pleistocene South America was one of the richest megafaunal ecosystems that has ever existed. Alongside Megatherium roamed glyptodonts (armored mammals the size of small cars), Macrauchenia (a llama-shaped ungulate with a short trunk), Doedicurus (a glyptodont with a spiked tail club), Toxodon (a rhino-sized hoofed grazer), sabertooth cats, and at least two other genera of giant ground sloths. Of the mammals over a tonne that lived in South America at the Last Glacial Maximum, every single one went extinct.

The timing is precise enough to be uncomfortable. Humans entered South America by at least 14,500 years ago. By 12,600 years ago there is direct evidence of Megatherium butchery at the Campo Laborde site in Argentina, where stone tool cut marks on a partial skeleton show humans were processing a freshly killed or recently dead animal. Within perhaps a thousand years of confirmed human contact, Megatherium was gone.

## Fishtail Points and Final Kills

The Paleoindian cultures of South America are characterized by distinctive stone projectile points known as "Fishtail points," which appear in the archaeological record around 13,000 years ago and drop out of use shortly after the megafauna vanish. These points are found in direct association with burned and butchered bones of Megatherium, glyptodonts, and other giants. Whether humans were the primary driver of extinction or an accelerant on already declining populations is still debated, but the association is not accidental.

The climate was changing at the same time. The end of the Antarctic Cold Reversal brought warmer, wetter conditions across much of South America. C3 grasses gave way to C4 grasses, southern beech forests expanded, and open parkland shrank. A specialized large-bodied browser that needs vast tracts of forage does poorly in such a transition, even without spears. The best current models describe a double squeeze: shrinking habitat, rising predation, and a species too slow-breeding to recover.

## What the Landscape Forgot

South America lost more megafauna proportionally than any other continent. Roughly 83% of species over 44 kilograms disappeared by the end of the Pleistocene. The ecosystems that depend on large animals, seed dispersal by giant herbivores, trampling that opens grasslands, nutrient cycling through dung, are still running on the fumes of that vanished fauna. Many large South American fruits, the avocado among them, evolved to be eaten and dispersed by animals that no longer exist. The orphan fruits still fall where Megatherium once reached up to pluck them, and nothing comes to collect them.`,
  quickFacts: {
    'Species': 'Megatherium americanum',
    'Weight': 'Approximately 4 tonnes',
    'Height Upright': 'Over 3.5 meters',
    'Named By': 'Georges Cuvier, 1796',
    'Last Dated Remains': 'c. 10,600 years ago, Pampas, Argentina',
    'Human Contact': 'Confirmed butchery at Campo Laborde, 12,600 BP',
  },
  connections: [
    { slug: 'terra-preta', relationship: 'Both are traces of a pre-Columbian South America whose ecology and peoples are only partly recoverable' },
    { slug: 'amazonian-cities', relationship: 'Both reshaped the South American landscape in ways modern visitors rarely recognize' },
    { slug: 'beringia', relationship: 'The land bridge that first allowed humans into the Americas, triggering the encounter that would end the Megatherium' },
  ],
  sources: [
    { title: 'Campo Laborde: A Late Pleistocene giant ground sloth kill and butchering site in the Pampas', author: 'Gustavo G. Politis et al.', year: 2019 },
    { title: 'Extinct megafauna dominated human subsistence in southern South America before 11,600 years ago', author: 'Luciano Prates et al.', year: 2024 },
    { title: 'Megatherium - Wikipedia', url: 'https://en.wikipedia.org/wiki/Megatherium' },
  ],
};
