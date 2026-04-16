import type { Entry } from '../../types';

export const laughingOwl: Entry = {
  slug: 'laughing-owl',
  name: 'The Laughing Owl',
  tagline: 'Its eerie cackling call once echoed across New Zealand at night. The last confirmed bird was found dead in 1914.',
  category: 'fauna',
  subcategory: 'Owls',
  lastKnownYear: 1914,
  lastKnownLocation: 'Canterbury, South Island, New Zealand',
  coordinates: [-43.5, 172.5],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Introduced predators (cats, stoats, rats), egg collecting, habitat conversion',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Owl That Laughed

The laughing owl (*Sceloglaux albifacies*) was one of the most distinctive birds in New Zealand's endemic avifauna. Named for its extraordinary call, a series of loud, maniacal cackling shrieks that echoed through the rocky valleys and tussock grasslands of both the North and South Islands, the bird was unmistakable to those who heard it. Early settlers described the call as somewhere between a human laugh and a scream, startling enough to unsettle anyone hearing it for the first time in the dark. Maori knew the bird as whekau and associated its call with foreboding.

The laughing owl was a medium-sized owl, roughly 35 to 40 centimeters in length, with dark brown plumage streaked with yellowish-white. Unlike most owls, it was partly terrestrial, often hunting on the ground among rocky outcrops and scree slopes. Its diet included lizards, beetles, and small birds. It nested in rock crevices and occasionally in burrows, laying two eggs per clutch.

## A Cascade of Threats

New Zealand's native birds evolved without mammalian predators and were catastrophically vulnerable to the animals that Europeans introduced in the nineteenth century. Cats, stoats, ferrets, and rats spread across the islands, devastating ground-nesting and ground-feeding birds. The laughing owl, which nested on the ground and hunted on foot, was particularly exposed.

Simultaneously, settlers were converting the owl's tussock grassland and rocky habitat to pastureland for sheep. The prey base shifted as native lizards and insects declined. Egg collectors, attracted by the bird's rarity, took specimens from known nesting sites, further reducing the already declining population. The laughing owl had been common on both islands into the 1850s. By the 1880s, it was rare. By 1900, it was effectively gone from the North Island.

## The Last Record

The last confirmed laughing owl was found dead at the Blue Cliffs station near Timaru in Canterbury on July 5, 1914. The specimen was collected and is now held in the Canterbury Museum. There were scattered unconfirmed reports through the 1920s and 1930s, and periodic claims of sightings have surfaced as recently as the 1960s, but none have been substantiated.

No recording of the laughing owl's call exists. The eerie, cackling cry that gave the species its name survives only in written descriptions from settlers who heard it and tried to capture in words a sound that no human will hear again.`,
  quickFacts: {
    'Scientific Name': 'Sceloglaux albifacies',
    'Maori Name': 'Whekau',
    'Size': '35-40 cm',
    'Diet': 'Lizards, beetles, small birds',
    'Last Confirmed': 'July 5, 1914, Canterbury, NZ',
    'Nesting': 'Ground-nesting in rock crevices',
    'Primary Threats': 'Cats, stoats, rats, egg collectors',
  },
  connections: [
    { slug: 'huia-call', relationship: 'Both were New Zealand endemic birds whose unique calls are lost forever, surviving only in written descriptions' },
    { slug: 'dodo', relationship: 'Both were island species that evolved without mammalian predators and were destroyed when those predators arrived' },
  ],
  sources: [
    { title: 'Extinct Birds of New Zealand', author: 'Alan Tennyson and Paul Martinson', year: 2006 },
    { title: 'The Laughing Owl: Ecology and Extinction', author: 'Trevor Worthy', year: 1997 },
    { title: 'Birds of New Zealand: A Complete Guide', author: 'Hugh Robertson and Barrie Heather', year: 2015 },
  ],
};
