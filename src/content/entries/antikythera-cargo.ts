import type { Entry } from '../../types';

export const antikytheraCargo: Entry = {
  slug: 'antikythera-cargo',
  name: 'The Antikythera Shipwreck Cargo',
  tagline: 'We recovered the mechanism, but the ship carried far more. Bronze statues, glass, and potentially other mechanisms lie at 60 meters depth. The most important shipwreck in history, barely excavated.',
  category: 'culture',
  subcategory: 'Underwater Archaeology',
  lastKnownYear: '~60 BCE',
  lastKnownLocation: 'Off the coast of Antikythera, Greece',
  coordinates: [35.88, 23.31],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The ship sank in approximately 60 meters of water around 60 BCE. Recovery has been limited by depth, technology, and the fragility of waterlogged artifacts. Much remains unexcavated on the sea floor.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Richest Wreck

In 1900, Greek sponge divers sheltering from a storm near the small island of Antikythera discovered the most important shipwreck in archaeological history. The vessel, dating to around 60 BCE, was a large Roman-era cargo ship — probably sailing from the eastern Mediterranean toward Italy, carrying a staggering collection of luxury goods for wealthy Roman buyers.

The initial recovery, conducted between 1900 and 1901 using helmeted divers in brass diving suits, brought up bronze and marble statues, coins, pottery, jewelry, glassware, and one corroded lump of bronze that would later be identified as the Antikythera Mechanism — the world's oldest known analog computer. The statues alone would have made it the richest underwater archaeological find in history. The mechanism made it something more.

## What We Haven't Recovered

But the 1901 expedition was crude by modern standards. Divers worked at the limits of their depth tolerance (around 60 meters), with limited bottom time and primitive equipment. One diver died and two were permanently disabled by decompression sickness. The expedition recovered what it could reach and abandoned the rest.

Modern surveys using submersibles, remotely operated vehicles, and advanced diving technology (notably the Exosuit, a 1-atmosphere diving suit that eliminates decompression risk) have revealed that significant cargo remains on the seafloor. In expeditions between 2012 and 2022, researchers recovered additional artifacts: a bronze arm from a statue, the remnants of a skeleton, ceramic vessels, and fragments of bronze objects that may be parts of other mechanisms.

The tantalizing possibility is that the Antikythera Mechanism was not unique. If this ship was carrying one sophisticated mechanical device, it may have carried others. The sea floor around the wreck site may contain pieces of technology that would reshape our understanding of ancient engineering. But the artifacts are fragile, the water is deep, and the site is vast. Recovery is painstakingly slow.

## The Cargo Manifest We'll Never Complete

The ship's full cargo will likely never be known. Ancient wooden vessels do not survive intact at these depths — the hull has largely disintegrated, scattering artifacts across the seafloor. Organic materials (textiles, food, documents) are gone. Smaller metal objects may have corroded beyond recognition or been buried under centuries of sediment.

What we have is extraordinary. What we're missing may be more so. The Antikythera wreck is not just a snapshot of ancient trade — it is a reminder that for every artifact in a museum, there are hundreds on the ocean floor that we have not found, cannot reach, or do not yet know how to preserve.`,
  quickFacts: {
    'Sinking Date': '~60 BCE',
    'Depth': '~60 meters',
    'Discovered': '1900 (sponge divers)',
    'First Excavation': '1900-1901',
    'Modern Expeditions': '2012-2022 (ongoing)',
    'Key Recovery': 'Antikythera Mechanism',
    'Other Artifacts': '36+ bronze/marble statues, coins, glass',
    'Unrecovered': 'Unknown — potentially other mechanisms',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'The mechanism was the most famous artifact from this shipwreck, but it was only one piece of the cargo' },
    { slug: 'library-of-alexandria', relationship: 'Both represent the scale of ancient knowledge that was lost — one a library, the other a ship carrying the products of that civilization' },
    { slug: 'lycurgus-cup', relationship: 'Both ancient artifacts demonstrating technological sophistication that surprised modern scientists' },
  ],
  sources: [
    { title: 'The Antikythera Shipwreck: The Ship, the Treasures, the Mechanism', author: 'Theotokis Theodoulou et al.', year: 2012 },
    { title: 'Return to Antikythera', author: 'Woods Hole Oceanographic Institution', year: 2014 },
    { title: 'A Portable Cosmos: Revealing the Antikythera Mechanism', author: 'Alexander Jones', year: 2017 },
    { title: 'New Discoveries from the Antikythera Wreck', author: 'Brendan Foley et al.', year: 2018 },
  ],
};
