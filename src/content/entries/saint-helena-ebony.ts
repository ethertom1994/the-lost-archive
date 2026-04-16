import type { Entry } from '../../types';

export const saintHelenaEbony: Entry = {
  slug: 'saint-helena-ebony',
  name: 'The Saint Helena Ebony',
  tagline: 'An endemic tree that once covered a remote Atlantic island. Portuguese goats ate it all. Gone by the 1700s.',
  category: 'flora',
  subcategory: 'Endemic Island Trees',
  lastKnownYear: 1700,
  lastKnownLocation: 'Saint Helena Island, South Atlantic',
  coordinates: [-15.97, -5.71],
  region: 'South Atlantic',
  status: 'extinct',
  cause: 'Habitat destruction by introduced goats and livestock, logging',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Dark Wood of Saint Helena

The Saint Helena ebony (*Trochetiopsis melanoxylon*) was an endemic tree found only on the island of Saint Helena, a volcanic speck in the South Atlantic Ocean some 1,900 kilometers from the coast of Africa. The tree was a member of the mallow family (Malvaceae), not a true ebony despite its common name, which derived from the dark, dense heartwood that gave it commercial value. It grew as a small to medium-sized tree, typically five to seven meters tall, with dark bark and simple, elliptical leaves.

When the Portuguese first arrived at Saint Helena in 1502, they found an island covered in dense endemic forest unlike anything on the nearest continents. The Saint Helena ebony was a dominant species in this forest, forming thick groves across the island's interior valleys and slopes. The island had evolved in complete isolation for millions of years, producing a flora found nowhere else on Earth.

## Death by Goat

The Portuguese did not settle Saint Helena immediately, but they did something that would prove far more destructive than any settlement: they released goats. The strategy was common among Portuguese and Spanish navigators. Goats were left on uninhabited islands as a future food source for passing ships. The animals, hardy and indiscriminate in their feeding, would multiply and provide fresh meat to sailors on subsequent voyages.

On Saint Helena, the goats found an island where no plant had evolved defenses against browsing mammals, because no browsing mammals had ever existed there. The goats ate everything. Seedlings, saplings, bark, leaves. The endemic forest, millions of years in the making, began to collapse within decades. The ebony, with its slow growth and limited reproductive rate, was particularly vulnerable.

## Erasure

By the time the English East India Company established a permanent settlement on Saint Helena in 1659, the endemic forest was already devastated. Early settlers noted the rapid disappearance of native trees and began cutting what remained for timber and fuel. The ebony's dark, hard wood made it a target for carpentry. Between the goats below and the axes above, the tree had no chance.

The last wild Saint Helena ebony trees are believed to have died by the early 1700s. Unlike its relative, the Saint Helena olive, which lingered until 2003, the ebony vanished before anyone thought to save it. No living specimens, seeds, or viable propagation material survived. It exists today only in pressed herbarium specimens and in the written accounts of early visitors who described an island forest that is now almost entirely gone.`,
  quickFacts: {
    'Scientific Name': 'Trochetiopsis melanoxylon',
    'Family': 'Malvaceae (mallows), not a true ebony',
    'Endemic To': 'Saint Helena Island, South Atlantic',
    'Height': '5-7 meters',
    'Island Discovered': '1502 by Portuguese',
    'Cause of Extinction': 'Introduced goats, logging',
    'Last Wild Trees': 'Gone by early 1700s',
    'Surviving Material': 'Pressed herbarium specimens only',
  },
  connections: [
    { slug: 'st-helena-olive', relationship: 'Both were endemic trees of Saint Helena destroyed by introduced goats and colonial exploitation of the island' },
    { slug: 'dodo', relationship: 'Both were island species wiped out by animals introduced by European sailors to islands with no native mammals' },
  ],
  sources: [
    { title: 'The Endemic Flora of St Helena', author: 'Q.C.B. Cronk', year: 2000 },
    { title: 'Saint Helena: A Physical, Historical and Topographical Description', author: 'John Charles Melliss', year: 1875 },
    { title: 'Plants of the World Online: Trochetiopsis melanoxylon', url: 'https://powo.science.kew.org', year: 2023 },
  ],
};
