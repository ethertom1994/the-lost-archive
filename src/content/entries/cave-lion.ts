import type { Entry } from '../../types';

export const caveLion: Entry = {
  slug: 'cave-lion',
  name: 'Cave Lion',
  tagline: 'A lion that stalked the mammoth steppe from France to Alaska, painted on cave walls by people who feared it. A little over 14,000 years ago it vanished, and the genus Panthera retreated south forever.',
  category: 'fauna',
  subcategory: 'Pleistocene Megafauna',
  lastKnownYear: -11900,
  lastKnownLocation: 'Beringia (Yukon and Eastern Siberia)',
  coordinates: [64.0, -140.0],
  region: 'Arctic / Eurasia',
  status: 'extinct',
  cause: 'Collapse of the mammoth steppe ecosystem and decline of large-prey availability at the end of the last glacial period',
  imageUrl: undefined,
  body: `## The Northern Lion

*Panthera spelaea*, the cave lion, was a true Panthera cat closely related to modern lions but genetically distinct, having split from the African-Asian lion lineage around 1.9 million years ago. It was also larger: adult males probably exceeded 300 kilograms, making it roughly the size of the largest recorded Siberian tigers and about ten percent bigger than a modern African lion.

Despite the name, cave lions did not live in caves. The name comes from where their bones are found: denning bears dragged carcasses into caves, or lions perished there during hibernation attempts, and the caves preserved the bones. In life, *Panthera spelaea* ranged across the open mammoth steppe and was one of the apex predators of Pleistocene Eurasia, hunting reindeer, young mammoths, horses, and bison across a territory that stretched from the Iberian Peninsula to the Yukon.

Two frozen cub carcasses pulled from the Siberian permafrost, Uyan and Dina in 2015 and Boris and Sparta in 2017, give us direct views of the animal. The fur is thick and pale, more like a cougar's gold than a modern lion's tawny, with a light undercoat. There is no evidence that males had manes; most cave paintings and mobiliary art from the European Upper Paleolithic show maneless lions with faint spotting, and genetic work on adult specimens is consistent with this.

## A Famous Painting, A Silent Animal

The most haunting human encounter with *Panthera spelaea* is at Chauvet Cave in France, where a panel dated to around 32,000 years ago depicts a pride of maneless lions advancing in hunting formation. The anatomy, posture, and social behavior caught on the stone are so precise that modern lion biologists recognize it as observed behavior. Whoever drew this had spent time watching lions hunt without being eaten by them, which is itself remarkable.

Other Paleolithic artists carved lion figures from mammoth ivory, including the 40,000-year-old Lowenmensch, or "Lion-man," of Hohlenstein-Stadel, a human body with a lion's head. The cave lion was not just a predator. It was a subject.

## Extinction Along a Dying Biome

Radiocarbon dates on the most recent cave lion remains cluster in a narrow window. In Eurasia, the last reliable dates are around 14,000 calibrated years before present, at the end of the Last Glacial Maximum. In Beringia, on the drying Bering land bridge and what is now Alaska and the Yukon, the species survived slightly longer, until around 13,800 to 13,300 years before present, before disappearing there as well.

The cause of extinction was probably not direct human action. Modern humans had shared the mammoth steppe with *Panthera spelaea* for at least 30,000 years. What changed was the mammoth steppe itself: post-glacial warming around 14,700 years ago expanded shrublands and forests, reduced open grazing grounds for bison and horses, fragmented reindeer migrations, and sharply reduced the density of large prey. A predator that needs a landscape full of 500-kilogram herbivores does not survive the landscape becoming trees.

## What the Cave Keeps

There is a strange completeness to the record of this animal. We have its DNA, its frozen cubs, its footprints in permafrost, its artistic portraits, and tens of thousands of bones. What we do not have is the animal. No direct descendants survive: the American lion (*Panthera atrox*), a near relative that ranged further south in North America, went extinct in the same climatic pulse. The African and Asiatic lions of today descend from a separate lineage and never lived in the north. With the end of *Panthera spelaea*, the entire Arctic branch of the lion family tree was pruned away.`,
  quickFacts: {
    'Species': 'Panthera spelaea',
    'Weight (males)': 'Over 300 kg',
    'Range': 'Spain to Yukon',
    'Split from modern lions': 'c. 1.9 million years ago',
    'Last Remains': 'c. 14,000 BP (Eurasia), 13,300 BP (Beringia)',
    'Frozen Specimens': 'Four cubs recovered from Siberian permafrost (2015, 2017)',
  },
  connections: [
    { slug: 'beringia', relationship: 'Cave lions crossed the land bridge and survived there slightly longer than anywhere in Eurasia' },
    { slug: 'caspian-tiger', relationship: 'Both were large Panthera cats at the edge of their genus\'s range, lost to environmental change and human pressure' },
    { slug: 'haasts-eagle', relationship: 'Both were apex predators at the top of isolated Pleistocene food chains, vanishing when those chains collapsed' },
  ],
  sources: [
    { title: 'Extinction chronology of the cave lion Panthera spelaea', author: 'Anthony J. Stuart, Adrian M. Lister', year: 2011 },
    { title: 'Early Pleistocene origin and extensive intra-species diversity of the extinct cave lion', author: 'Ross Barnett et al.', year: 2020 },
    { title: 'Panthera spelaea - Wikipedia', url: 'https://en.wikipedia.org/wiki/Panthera_spelaea' },
  ],
};
