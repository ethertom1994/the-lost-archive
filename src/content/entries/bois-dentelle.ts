import type { Entry } from '../../types';

export const boisDentelle: Entry = {
  slug: 'bois-dentelle',
  name: 'Bois Dentelle',
  tagline: 'Two trees. That is the entire wild population of this species. Two trees on a cloud forest ridge in Mauritius.',
  category: 'flora',
  subcategory: 'Critically Endangered Trees',
  lastKnownYear: 'Present (2 known specimens)',
  lastKnownLocation: 'Cloud forest, Mauritius',
  coordinates: [-20.43, 57.55],
  region: 'Indian Ocean',
  status: 'extinct_in_wild',
  cause: 'Habitat destruction and invasive species on the island of Mauritius',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Lace

Bois dentelle means "lace wood" in French, and the name is precise. Elaeocarpus bojeri produces small, delicate white flowers with fringed petals that resemble handmade lace -- intricate, feathery, almost impossibly fine for a tree growing on a windswept volcanic ridge in the Indian Ocean. The flowers hang in clusters from slender branches, each petal divided into threadlike filaments that catch the mist of the cloud forest. It is one of the most beautiful flowering trees in the world, and almost no one has ever seen it in the wild.

Only two known wild specimens of bois dentelle exist. They grow on a narrow ridge in the montane cloud forest of Mauritius, above 600 meters elevation, in a remnant patch of native vegetation surrounded by invasive plants. The trees are small, understory species in the Elaeocarpaceae family, a group found across the tropics but with several species endemic to the Mascarene Islands. Bois dentelle is the rarest of them all.

## The Dodo's Island

Mauritius is famous for one extinction: the dodo, hunted and outcompeted to oblivion by the 1680s. But the dodo was only the most visible casualty of the ecological catastrophe that followed human settlement of the island. Portuguese sailors discovered Mauritius around 1507. Dutch colonists arrived in 1638. The French took over in 1715, followed by the British in 1810. Each wave brought new animals -- rats, pigs, monkeys, deer, mongooses -- and new plants. Sugar cane plantations consumed the lowland forest. Invasive species like Chinese guava and privet choked the remnant upland vegetation.

Mauritius has lost approximately 95 percent of its native forest. The cloud forest fragments that survive on the highest ridges are the last refuges for dozens of endemic species, many of them critically endangered. Bois dentelle is among the most precarious.

## Conservation on a Knife Edge

The Mauritian Wildlife Foundation and the National Parks and Conservation Service have attempted to propagate bois dentelle from seeds and cuttings. The effort is complicated by the species' specific requirements: it grows only in cloud forest conditions, at a particular elevation, in acidic volcanic soil, with near-constant moisture from orographic mist. Reproducing these conditions in a nursery is difficult. Several propagated specimens exist in botanical collections, but establishing new wild populations has proven challenging.

The two surviving wild trees are monitored continuously. Invasive plant species are manually cleared from around them. Fencing protects them from introduced deer. These two individuals carry the entire wild genetic legacy of their species. If a cyclone, disease, or landslide destroys them, the wild population drops from two to zero.

## Two

The number is worth sitting with. Not dozens. Not a handful. Two. Two individual organisms standing on a ridge in the Indian Ocean, producing their lace-like flowers for pollinators that may or may not still visit, dropping seeds into soil that invasive species have colonized, persisting in a fragment of a forest that once covered an island. The distance between two and zero is the width of one bad storm season.`,
  quickFacts: {
    'Species': 'Elaeocarpus bojeri',
    'Common Name': 'Bois dentelle (lace wood)',
    'Family': 'Elaeocarpaceae',
    'Wild Population': '2 known individuals',
    'Habitat': 'Montane cloud forest, above 600m elevation',
    'Endemic To': 'Mauritius',
    'Native Forest Remaining': '~5% of original coverage',
  },
  connections: [
    { slug: 'cafe-marron', relationship: 'Both are critically endangered plants endemic to the Mascarene Islands, surviving as tiny remnant populations on islands devastated by invasive species' },
    { slug: 'dodo', relationship: 'Both are Mauritian species casualties of the same centuries-long pattern of habitat destruction and introduced species on the island' },
  ],
  sources: [
    { title: 'The Ecology of the Flowering Plants of Mauritius', author: 'Wendy Strahm', year: 1993 },
    { title: 'Conservation of Elaeocarpus bojeri in Mauritius', author: 'Mauritian Wildlife Foundation', year: 2015 },
    { title: 'Mauritius: An Environmental History', author: 'Arne Schiller', year: 2014 },
    { title: 'The Dodo and the Solitaire: A Natural History', author: 'Jolyon C. Parish', year: 2013 },
  ],
};
