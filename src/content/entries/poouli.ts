import type { Entry } from '../../types';

export const poouli: Entry = {
  slug: 'poouli',
  name: 'Poʻouli',
  tagline: 'A small black-masked honeycreeper endemic to the slopes of Haleakalā on Maui. Discovered by humans in 1973. The last known individual, a captured male, died on November 26, 2004, without ever meeting a mate. Officially declared extinct in 2019.',
  category: 'fauna',
  subcategory: 'Extinct Birds',
  lastKnownYear: 2004,
  lastKnownLocation: 'Hanawī Natural Area Reserve, Maui, Hawaii',
  coordinates: [20.79, -156.13],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Habitat degradation by feral pigs and introduced deer, mosquito-borne avian malaria, and predation by rats, cats, and small Asian mongoose',
  imageUrl: undefined,
  body: `## Discovered in 1973, Gone by 2004

The poʻouli (Melamprosops phaeosoma) was found by a University of Hawaii expedition in 1973, deep in the rainforest on the northeastern slope of Haleakalā volcano on Maui. It was a stocky, short-tailed honeycreeper with a chocolate-brown back, a cream belly, and a broad black mask across its face that looked like a bandit's. Its scientific name means "black-faced small-headed bird."

It had probably been rare for a long time. Subfossil bones found in lava tubes show the species once lived at lower elevations across much of Maui, but by the 20th century it had been pushed up into a single patch of wet forest above 1,500 meters. When researchers first documented it, estimates put the population at around 200 birds. Over the next thirty years, that number fell to zero.

By 1997, biologists could locate only three individuals. Each lived in a separate territory and appeared unable or unwilling to find the others. In 2002, biologists attempted to carry one of the females to the male's territory; she left and returned to her own within a day. By 2004, only one bird remained.

## The Last Poʻouli

On September 9, 2004, biologists captured that last known individual — a male, probably at least nine years old — and brought him to the Maui Bird Conservation Center in Olinda. The plan was to find or breed a mate. No other poʻouli could be found in the wild. The male was examined, photographed, and kept in a quiet flight aviary. He died on November 26, 2004, of avian malaria complicated by old age.

His DNA was preserved. His body was preserved. The species as a living, reproducing population was finished. No confirmed sighting has occurred since.

## The Honeycreeper Extinction Wave

The poʻouli is one chapter of a larger collapse. Hawaii's honeycreepers — a spectacular adaptive radiation from a single finch-like ancestor into more than fifty species of nectar-feeders, seed-crushers, and insect-eaters — have been devastated since European contact. Roughly two-thirds of known honeycreeper species are now extinct. The remaining species are mostly restricted to high elevations above the survival zone of introduced mosquitoes, which carry avian malaria and avian pox to which native birds have no resistance.

Climate change is now pushing that mosquito line upslope at several meters per year. The refuges are closing.

The poʻouli ate native tree snails, which have themselves been largely wiped out by introduced predatory snails, feral pigs, and habitat loss. Even if captive breeding had worked, the bird would have had no food. Its extinction was overdetermined: malaria, predators, habitat damage, and the collapse of its prey base acted simultaneously.

## Officially Extinct, 2019

A 2018 review recommended listing the poʻouli as extinct. The IUCN formally declared it Extinct in 2019. The U.S. Fish and Wildlife Service proposed removing it from the Endangered Species Act in 2021 on grounds of extinction. The species had been scientifically known for forty-six years, from discovery to declared extinction — one of the shortest documented histories of any bird in the world.`,
  quickFacts: {
    'Species': 'Melamprosops phaeosoma',
    'Range': 'Hanawī rainforest, Maui, Hawaii',
    'Discovered': '1973',
    'Last Individual Died': 'November 26, 2004',
    'IUCN Extinction Declaration': '2019',
    'Time From Discovery to Extinction': '46 years',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both were Hawaiian honeycreeper-family endemics driven to extinction by the same combination of mosquito-borne disease and habitat loss' },
    { slug: 'alala-song', relationship: 'Both are Hawaiian endemic birds that lost their wild populations in the modern era, with the last individuals held in captivity' },
    { slug: 'mamo-bird', relationship: 'Both belong to the Hawaiian honeycreeper radiation, two-thirds of which is now extinct' },
  ],
  sources: [
    {
      title: 'Poʻouli — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Po%CA%BBouli',
    },
    {
      title: 'When the quietest of all Hawaiian honeycreepers went silent',
      url: 'https://www.hcn.org/articles/climate-desk-when-the-quietest-of-all-hawaiian-honeycreepers-went-silent/',
      year: 2021,
    },
    {
      title: 'Hawaii Division of Forestry and Wildlife: Poʻouli',
      url: 'https://dlnr.hawaii.gov/wildlife/birds/poouli/',
    },
  ],
  keyDate: '2004-11-26',
  keyDateLabel: 'Death of the last known individual',
};
