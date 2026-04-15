import type { Entry } from '../../types';

export const greatAuk: Entry = {
  slug: 'great-auk',
  name: 'The Great Auk',
  tagline: 'The original "penguin." Flightless, a meter tall, hunted to extinction. The last pair was killed by collectors on a rocky island off Iceland in 1844.',
  category: 'fauna',
  subcategory: 'Birds',
  lastKnownYear: 1844,
  lastKnownLocation: 'Eldey Island, Iceland',
  coordinates: [63.73, -22.97],
  region: 'North Atlantic',
  status: 'extinct',
  cause: 'Systematic hunting for feathers, meat, oil, and ultimately museum specimens. The rarer it became, the more valuable each specimen, accelerating its destruction.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  keyDate: '06-03',
  keyDateLabel: 'Last pair of great auks killed on Eldey, 1844',
  body: `## The Original Penguin

The word "penguin" was first used for this bird. When European sailors later encountered the superficially similar flightless birds of the Southern Hemisphere, they borrowed the name. The Great Auk (*Pinguinus impennis*) stood about 75 centimeters tall, weighed around 5 kilograms, and was the only flightless bird in the North Atlantic. It was a powerful swimmer, using its small wings as flippers to hunt fish underwater, and bred in dense colonies on rocky islands from Newfoundland to Norway.

For thousands of years, the Great Auk was a staple resource for coastal and seafaring peoples. Neolithic humans hunted it. Norse settlers harvested its eggs. Basque fishermen used it for bait and oil. The scale was sustainable — or at least the auk's range was vast enough to absorb the losses. That changed in the sixteenth century.

## The Feather Trade

European demand for down feathers — for pillows, mattresses, and quilts — turned the Great Auk from a food source into an industrial commodity. Ships would anchor near breeding colonies, crews would drive hundreds of flightless birds up gangplanks into pens on deck, and the birds would be slaughtered and plucked. On Funk Island off Newfoundland, the slaughter was so intensive that sailors built stone corrals to hold the birds before killing them. Fires were fueled by the oily carcasses of previously killed auks.

By 1800, the Great Auk was rare. By 1830, it was critically endangered. And then a perverse economic logic took hold: as the bird became rarer, its value to museums, private collectors, and taxidermists soared. The last colony accessible to hunters was on Eldey, a volcanic rock rising from the sea off southwestern Iceland.

## The Last Day

On June 3, 1844, a party of Icelandic hunters — Jón Brandsson, Sigurður Ísleifsson, and Ketill Ketilsson — landed on Eldey at the request of a dealer who wanted specimens. They found two adult Great Auks and one egg. Brandsson and Ísleifsson each strangled a bird. Ketilsson stepped on the egg, crushing it underfoot. The men sold the skins to a collector. Neither bird nor egg was ever seen again.

The Great Auk was not killed by an accident of climate or an unforeseen disease. It was killed deliberately, the last individuals hunted specifically because they were the last. The extinction was not a byproduct. It was the product.`,
  quickFacts: {
    'Scientific Name': 'Pinguinus impennis',
    'Height': '~75 cm (30 inches)',
    'Range': 'North Atlantic (Canada to Norway)',
    'Last Pair Killed': 'June 3, 1844',
    'Location of Last Kill': 'Eldey Island, Iceland',
    'Cause': 'Hunting for feathers, then museum specimens',
    'Surviving Specimens': '~80 skins and 75 eggs in museums worldwide',
    'Etymology': 'Original bird called "penguin" — name later transferred',
  },
  connections: [
    { slug: 'dodo', relationship: 'Both flightless birds hunted to extinction on islands, both became cultural symbols of human-caused extinction' },
    { slug: 'stellers-sea-cow', relationship: 'Both large, docile animals whose tameness made them easy targets for hunters who wiped them out within decades of discovery' },
    { slug: 'passenger-pigeon-pie', relationship: 'Both abundant species reduced from millions to zero through industrial-scale exploitation' },
  ],
  sources: [
    { title: 'The Great Auk', author: 'Errol Fuller', year: 1999 },
    { title: 'A Most Remarkable Creature: The Hidden Life and Epic Journey of the World\'s Smartest Birds of Prey', author: 'Jonathan Meiburg', year: 2021 },
    { title: 'The last great auk', author: 'Jeremy Gaskell', year: 2000 },
    { title: 'Funk Island and the Great Auk', author: 'John T. Lambshead', year: 2010 },
  ],
};
