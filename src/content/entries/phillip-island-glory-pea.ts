import type { Entry } from '../../types';

export const phillipIslandGloryPea: Entry = {
  slug: 'phillip-island-glory-pea',
  name: 'The Phillip Island Glory Pea',
  tagline: 'A flowering legume that once covered a tiny Pacific island. Pigs and goats erased it by the 1830s. It survives only as pressed herbarium sheets.',
  category: 'flora',
  subcategory: 'Legumes',
  lastKnownYear: 1830,
  lastKnownLocation: 'Phillip Island, near Norfolk Island, South Pacific',
  coordinates: [-29.13, 167.95],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Destruction by introduced pigs and goats',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Lost Legume

The Phillip Island glory pea (*Streblorrhiza speciosa*) was a sprawling or climbing leguminous plant endemic to Phillip Island, a small volcanic island lying six kilometers south of Norfolk Island in the South Pacific. The island covers barely 190 hectares. The plant was the sole species in its genus, *Streblorrhiza*, with no close relatives known anywhere in the world. It produced pea-like flowers, reportedly pink to purple, and compound leaves typical of the legume family. Descriptions from the few botanists who saw living specimens suggest it was a vigorous grower that scrambled over rocks and through low vegetation near the coast.

Phillip Island was uninhabited when Europeans first encountered it in the late eighteenth century, shortly after the establishment of the British penal colony on neighboring Norfolk Island in 1788. The island's vegetation was described as lush and diverse, supporting several endemic species. The glory pea was apparently common, growing freely across the island's rocky terrain.

## Destruction by Hoof

The British convict settlement on Norfolk Island treated Phillip Island as a provisioning ground. Pigs and goats were released onto the island to breed freely and provide meat. This was the same strategy that had destroyed endemic vegetation on islands across the Pacific and Atlantic, and the result on Phillip Island was the same.

The introduced animals ate everything. Goats stripped bark and browsed on foliage. Pigs rooted through the soil, tearing up plants and destabilizing the thin volcanic topsoil. Within a few decades, Phillip Island was transformed from a vegetated islet to a barren, eroded landscape. The endemic plants, which had evolved without mammalian herbivores and had no chemical or physical defenses against browsing, were obliterated.

## Only Paper Remains

The Phillip Island glory pea was last collected alive sometime before the 1830s. By the time botanists recognized its significance, it was already gone. The species is known today only from a handful of pressed herbarium specimens, the oldest collected by early naturalists associated with the Norfolk Island settlement. These dried, flattened specimens, stored in institutions in London and Sydney, are all that remain of a genus that existed nowhere else on Earth.

In the twentieth century, feral animals were removed from Phillip Island and native vegetation has partially recovered. Several endemic plant species have regenerated from surviving seed banks or root fragments in the soil. But *Streblorrhiza speciosa* has not returned. Whatever seeds it left in the ground did not survive nearly two centuries of erosion and disturbance. The genus is extinct, known only from paper and ink.`,
  quickFacts: {
    'Scientific Name': 'Streblorrhiza speciosa',
    'Family': 'Fabaceae (legumes)',
    'Genus': 'Streblorrhiza (monotypic, now extinct)',
    'Endemic To': 'Phillip Island, near Norfolk Island',
    'Island Size': '~190 hectares',
    'Last Collected': 'Before 1830s',
    'Surviving Material': 'Pressed herbarium specimens only',
    'Primary Threats': 'Introduced pigs and goats',
  },
  connections: [
    { slug: 'st-helena-olive', relationship: 'Both were endemic island plants destroyed by livestock introduced by European colonists to tiny, isolated islands' },
    { slug: 'saint-helena-ebony', relationship: 'Both were island endemics wiped out by introduced browsing animals within decades of European contact, surviving only as herbarium specimens' },
  ],
  sources: [
    { title: 'The Vegetation of Phillip Island, Norfolk Island Group', author: 'Margaret Hicks', year: 1988 },
    { title: 'Extinct Plants of Norfolk Island and Phillip Island', author: 'Peter Green', year: 1994 },
    { title: 'IUCN Red List: Streblorrhiza speciosa', url: 'https://www.iucnredlist.org/species/61865/12569951', year: 2017 },
  ],
};
