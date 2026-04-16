import type { Entry } from '../../types';

export const spixMacaw: Entry = {
  slug: 'spix-macaw',
  name: "Spix's Macaw",
  tagline: 'The inspiration for the movie "Rio." Last seen in the wild in 2000. A captive breeding program exists, but the sky that knew them is empty.',
  category: 'fauna',
  subcategory: 'Birds',
  lastKnownYear: 2000,
  lastKnownLocation: 'Curaçá, Bahia, Brazil',
  coordinates: [-8.99, -39.91],
  region: 'South America',
  status: 'extinct_in_wild',
  cause: 'Habitat destruction from overgrazing and dam construction, illegal trapping for the exotic pet trade, and invasion of Africanized bees competing for nest sites',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cyanopsitta_spixii_-Vogelpark_Walsrode%2C_Walsrode%2C_Germany-1980.jpg/400px-Cyanopsitta_spixii_-Vogelpark_Walsrode%2C_Walsrode%2C_Germany-1980.jpg',
  imageCaption: 'Spix\'s macaw (Cyanopsitta spixii) at Vogelpark Walsrode, Germany, circa 1980',
  imageCredit: 'Rüdiger Stehn, CC BY-SA 2.0, via Wikimedia Commons',
  body: `## The Rarest Bird in the World

By the time the animated film *Rio* introduced millions of children to a cartoon version of a Spix's Macaw in 2011, the real bird had already been gone from the wild for over a decade. The last known wild individual, a lone male, was spotted near Curaçá in the dry caatinga scrubland of northeastern Brazil in October 2000. Then he vanished.

Cyanopsitta spixii was never common. Named after the German naturalist Johann Baptist von Spix, who collected the type specimen in 1819, the species was restricted to a narrow strip of gallery forest along seasonal creeks in Bahia state. Its habitat was dominated by caraibeira trees (*Tabebuia aurea*), which provided nesting cavities and the seeds that formed the bulk of its diet. It was a specialist in a landscape that was being systematically converted to cattle pasture.

## The Trapping

What habitat destruction started, the illegal pet trade finished. Spix's Macaws, with their stunning blue-grey plumage and rarity, became the most coveted birds in the world for private collectors. Trappers working for wealthy buyers in Europe and the Middle East captured bird after bird from the dwindling wild population. By the 1980s, fewer than five remained in the wild. By 1990, one.

That lone male survived for a decade, observed at a distance by researchers who debated how to help him. In a desperate move, a captive female was released near him in 1995. The two were seen together briefly, but the female, unaccustomed to the wild, disappeared — likely killed by power lines. The male continued alone until he, too, was gone.

## Captive Hope

Roughly 160 Spix's Macaws exist today, all in captivity, descended from a handful of birds held by private breeders and zoos. A reintroduction program led by the Brazilian government and the Association for the Conservation of Threatened Parrots (ACTP) released the first birds back into the caatinga in 2022. Some have survived. Some have not. The birds face a landscape altered since their ancestors last flew it — fewer caraibeira trees, new predators, a climate shifting toward longer droughts.

The wild is ready for them, but they have forgotten how to live in it. They must relearn flight paths, food sources, predator avoidance, and nesting habits that were once passed from parent to chick over millennia. Whether a population can be rebuilt from captive stock is one of the great open questions in conservation biology.`,
  quickFacts: {
    'Scientific Name': 'Cyanopsitta spixii',
    'Family': 'Psittacidae (True parrots)',
    'Endemic To': 'Bahia, northeastern Brazil',
    'Last Wild Sighting': 'October 2000',
    'Captive Population': '~160 individuals (as of 2023)',
    'Primary Threats': 'Trapping, habitat loss, Africanized bees',
    'Reintroduction Began': '2022',
    'Pop Culture': 'Inspired the 2011 film "Rio"',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both reduced to a single individual singing or searching alone — the last of a species waiting for a response' },
    { slug: 'thylacine', relationship: 'Both became icons of extinction, their images more famous than their living selves ever were' },
  ],
  sources: [
    { title: 'Spix\'s Macaw: The Race to Save the World\'s Rarest Bird', author: 'Tony Juniper', year: 2002 },
    { title: 'The Last Wild Spix\'s Macaw', author: 'BirdLife International', year: 2000 },
    { title: 'Recovery plan for Cyanopsitta spixii', author: 'ICMBio / Brazilian Ministry of Environment', year: 2012 },
    { title: 'Reintroduction of Spix\'s Macaw in Brazil', author: 'ACTP', year: 2022 },
  ],
};
