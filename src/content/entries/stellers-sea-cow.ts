import type { Entry } from '../../types';

export const stellersSeaCow: Entry = {
  slug: 'stellers-sea-cow',
  name: "Steller's Sea Cow",
  tagline: 'Discovered in 1741. Extinct by 1768. Twenty-seven years from first contact to annihilation.',
  category: 'fauna',
  subcategory: 'Marine Mammals',
  lastKnownYear: 1768,
  lastKnownLocation: 'Commander Islands, Bering Sea',
  coordinates: [55.0, 166.5],
  region: 'North Pacific',
  status: 'extinct',
  cause: 'Hunted to extinction by fur traders and sailors within 27 years of Western discovery',
  body: `## Shipwrecked Among Giants

In November 1741, the German naturalist Georg Wilhelm Steller found himself shipwrecked on a barren island in the Bering Sea. He was part of Vitus Bering's second Kamchatka expedition, a Russian-sponsored voyage to chart the North Pacific. Bering himself would die on that island. But Steller, observing with the obsessive precision of a trained naturalist, spent his months of survival documenting the island's wildlife. Among the animals he described was one that defied belief.

In the shallows around what are now called the Commander Islands, Steller encountered enormous creatures feeding on kelp. They were sea cows, relatives of the manatee and dugong, but vastly larger. Adults measured up to thirty feet long and weighed as much as ten tons, making them among the largest mammals of the Holocene after whales. They were docile, slow, and so buoyant with fat that they could not fully submerge. They floated at the surface, grazing on kelp with their massive, toothless mouths.

## Gentle Beyond Survival

Steller's detailed account, *De Bestiis Marinis*, described animals of extraordinary gentleness. When one sea cow was harpooned, others in the group would gather around it, trying to help, pressing against the wounded animal and attempting to pull out the harpoon. Mated pairs reportedly stayed together, and when one was killed, the surviving partner would return to the body for days.

This behavior made them devastatingly easy to hunt. They could not escape into deep water. They were enormous targets. Their meat was described as tasting like fine beef, and their fat could be rendered into oil that didn't go rancid. For the fur traders, whalers, and explorers who began visiting the Commander Islands after Steller's return, the sea cows were an irresistible provision.

## The Fastest Large-Animal Extinction

By the time Steller discovered them, the population was likely already small, perhaps 1,500 individuals. Fossil evidence suggests they once ranged across the North Pacific, from Japan to Baja California, but had been hunted to this last remnant by indigenous peoples over thousands of years. What the Russian fur trade accomplished was merely the final act.

Within a decade of systematic hunting, the sea cows were scarce. The last known individual was killed in 1768, just twenty-seven years after Steller first described the species. Georg Steller himself died in 1746, during the return journey across Siberia, at the age of thirty-seven. He never learned that the extraordinary animal he had documented would outlive him by only twenty-two years.

## What Remains

A few bones and fragments of skin survive in museum collections. Steller's written account, painstaking in its detail, remains the only firsthand description of the living animal. No other European naturalist ever saw one alive. The speed of the sea cow's extinction has become a benchmark, the shortest interval between Western scientific discovery and total annihilation of a large species.`,
  quickFacts: {
    'Scientific Name': 'Hydrodamalis gigas',
    'Order': 'Sirenia (sea cows, manatees, dugongs)',
    'Length': 'Up to 30 feet (9 meters)',
    'Weight': 'Up to 10 tons',
    'Diet': 'Kelp and other marine algae',
    'Discovered': '1741 by Georg Wilhelm Steller',
    'Extinct': '1768 (27 years after discovery)',
    'Surviving Relatives': 'Manatees and dugongs',
  },
  connections: [
    { slug: 'baiji', relationship: 'Both were large, gentle aquatic mammals whose docility made them fatally vulnerable to human activity' },
    { slug: 'passenger-pigeon-pie', relationship: 'Both species were hunted primarily as a food source, valued for meat and fat, until none remained' },
    { slug: 'silphium', relationship: 'Both represent resources that were consumed faster than anyone realized they were finite' },
  ],
  sources: [
    { title: 'De Bestiis Marinis (On the Beasts of the Sea)', author: 'Georg Wilhelm Steller', year: 1751 },
    { title: "Steller's Sea Cow: The Discovery and Extinction of an Astonishing Animal", author: 'Leonard Stejneger', year: 1887 },
    { title: 'The Hunt for the Last Steller\'s Sea Cow', author: 'Turvey & Risley', year: 2006, url: 'https://doi.org/10.1098/rsbl.2006.0507' },
  ],
};
