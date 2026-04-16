import type { Entry } from '../../types';

export const cyaneaSuperba: Entry = {
  slug: 'cyanea-superba',
  name: 'Cyanea superba',
  tagline: 'A Hawaiian lobelioid that survived millions of years of island evolution. The last individual died in a botanical garden in 2003.',
  category: 'flora',
  subcategory: 'Hawaiian Lobelioids',
  lastKnownYear: 2003,
  lastKnownLocation: 'National Tropical Botanical Garden, Kauai, Hawai\u02BBi',
  coordinates: [21.5, -158.0],
  region: 'Pacific Islands',
  status: 'extinct',
  cause: 'Invasive species (rats, slugs, pigs), habitat destruction, inability to propagate',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Superb Lobelioid

*Cyanea superba* was a member of one of the most spectacular plant radiations on Earth: the Hawaiian lobelioids. Over millions of years, a single ancestor species that reached the Hawaiian Islands diversified into roughly 130 species across six genera, filling ecological niches from coastal shrublands to high-elevation bogs. The lobelioids are a textbook example of adaptive radiation, rivaling Darwin's finches in their evolutionary significance. *Cyanea superba* was among the most distinctive members of this family.

The plant was a palm-like unbranched or sparsely branched shrub, growing up to five meters tall, with a crown of large, deeply lobed leaves at the top. It produced curved, white to purplish flowers adapted for pollination by native Hawaiian honeycreepers, whose curved beaks matched the flower shape in a relationship refined over millions of years of coevolution. The species was endemic to the Waianae Mountains on the island of Oahu, where it grew in mesic to wet forests at elevations of roughly 400 to 700 meters.

## Squeezed Out

By the twentieth century, the Waianae Mountains were under intense ecological pressure. Feral pigs rooted through the understory, destroying native plants and churning the soil into mud that favored invasive species. Rats gnawed on seeds and fruits. Introduced slugs devoured seedlings. Invasive plants like strawberry guava and Christmasberry formed dense thickets that shaded out native species. The wet forests that *Cyanea superba* required shrank and degraded.

By the 1990s, no wild individuals of *Cyanea superba* could be found. The species survived only in cultivation at the National Tropical Botanical Garden on Kauai, where a small number of plants were maintained under controlled conditions. Botanists attempted to propagate the species, but the surviving plants produced few viable seeds. Cuttings and tissue culture were attempted with limited success.

## The Last One

The final known individual of *Cyanea superba* died at the National Tropical Botanical Garden in 2003. With it ended a lineage that had been evolving on the Hawaiian Islands for millions of years, one thread in the lobelioid radiation that had produced such astonishing diversity. The species is one of dozens of Hawaiian plants that have gone extinct in the past century, a quiet botanical catastrophe largely invisible to the wider world. The honeycreepers that once pollinated its flowers are themselves disappearing, and the forests where it grew continue to degrade, erasing the conditions that would be needed even if the plant could somehow be brought back.`,
  quickFacts: {
    'Scientific Name': 'Cyanea superba',
    'Family': 'Campanulaceae (Hawaiian lobelioids)',
    'Endemic To': 'Waianae Mountains, Oahu, Hawai\u02BBi',
    'Height': 'Up to 5 meters',
    'Pollinators': 'Native Hawaiian honeycreepers',
    'Last Wild Individual': 'None found by 1990s',
    'Last Cultivated Individual': 'Died 2003',
    'Primary Threats': 'Feral pigs, rats, slugs, invasive plants',
  },
  connections: [
    { slug: 'mamo-bird', relationship: 'Both were Hawaiian species lost to the same cascade of invasive species and habitat destruction that is dismantling the islands\' endemic ecosystems' },
    { slug: 'kauai-oo', relationship: 'The honeycreepers that pollinated Cyanea superba are themselves going extinct, representing connected collapses in Hawaiian ecosystems' },
  ],
  sources: [
    { title: 'Hawaiian Lobelioids: Diversity, Ecology, and Conservation', author: 'Thomas Givnish et al.', year: 2009 },
    { title: 'Plant Extinction in the Hawaiian Islands', author: 'Warren Wagner et al.', year: 1999 },
    { title: 'IUCN Red List: Cyanea superba', url: 'https://www.iucnredlist.org/species/44080/10854296', year: 2016 },
  ],
};
