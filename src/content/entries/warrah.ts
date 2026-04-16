import type { Entry } from '../../types';

export const warrah: Entry = {
  slug: 'warrah',
  name: 'The Warrah',
  tagline: 'The only native land mammal of the Falkland Islands. So trusting it walked up to armed men. Darwin predicted its doom, and was right.',
  category: 'fauna',
  subcategory: 'Canids',
  lastKnownYear: 1876,
  lastKnownLocation: 'Falkland Islands, South Atlantic',
  coordinates: [-51.75, -59.0],
  region: 'South Atlantic',
  status: 'extinct',
  cause: 'Hunting by settlers and poisoning by farmers protecting livestock',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Fearless Fox

The Falkland Islands wolf, known as the warrah (*Dusicyon australis*), holds a singular distinction in the history of extinction: it was the only native land mammal of the Falkland Islands, and it was so tame that it would approach humans without hesitation. Early European visitors described warrahs trotting up to landing parties, sniffing at their boots, tugging at clothing. This was not stupidity. It was the behavior of an animal that had evolved for thousands of years on islands with no terrestrial predators. The warrah had never learned fear because fear had never been necessary.

When Captain John Strong first described the animal in 1690, he noted how easily it could be lured close with a piece of meat held in one hand while the other hand held a knife. This technique became standard practice. Sailors, sealers, and settlers killed warrahs for their fur, for sport, and eventually because the animals were perceived as threats to the sheep that colonists introduced to the islands in the early nineteenth century.

## Darwin's Prophecy

In 1833, a young Charles Darwin visited the Falklands aboard HMS Beagle and observed the warrah firsthand. He noted its extraordinary tameness and wrote in his journal that the species would soon be extinct, as settlers were already poisoning and clubbing them in large numbers. Darwin collected specimens and recognized the animal's scientific significance, but the trajectory was already set.

The warrah was the only member of its genus, *Dusicyon*, with no close relatives anywhere in the world. Genetic studies conducted centuries later revealed that its nearest relatives were the maned wolves of South America, from which it diverged roughly 16,000 years ago. The warrah likely reached the Falklands via a land bridge or ice connection during the last glacial period.

## The Last Warrah

As sheep farming expanded across the Falklands in the 1860s and 1870s, the campaign against the warrah intensified. Farmers offered bounties. Poisoned carcasses were laid out across the grasslands. The animals' trusting nature, once merely remarkable, became their death sentence. They could be approached and killed with minimal effort.

The last known warrah was killed at Shallow Bay on West Falkland in 1876, less than fifty years after Darwin's warning. No serious attempt at conservation was ever made. Today, the warrah exists only as taxidermy specimens in a handful of museums and as a cautionary lesson about what happens when an animal's evolutionary innocence meets human indifference.`,
  quickFacts: {
    'Scientific Name': 'Dusicyon australis',
    'Family': 'Canidae (only canid native to Falklands)',
    'Nearest Relative': 'Maned wolf (Chrysocyon brachyurus)',
    'First European Record': '1690, Captain John Strong',
    'Last Individual': 'Killed 1876, West Falkland',
    'Range': 'East and West Falkland Islands only',
    'Primary Threats': 'Hunting, poisoning by sheep farmers',
  },
  connections: [
    { slug: 'dodo', relationship: 'Both were island species with no fear of humans, and both were destroyed by that trust within decades of sustained contact' },
    { slug: 'stellers-sea-cow', relationship: 'Both were fearless island animals wiped out by hunters who exploited their docility' },
  ],
  sources: [
    { title: 'The Voyage of the Beagle', author: 'Charles Darwin', year: 1839 },
    { title: 'The Origin and Evolution of the Falkland Islands Wolf', author: 'Graham Slater et al.', year: 2009 },
    { title: 'Dusicyon australis', url: 'https://www.iucnredlist.org/species/6923/12815952', year: 2015 },
  ],
};
