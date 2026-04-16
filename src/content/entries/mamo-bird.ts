import type { Entry } from '../../types';

export const mamoBird: Entry = {
  slug: 'mamo-bird',
  name: 'The Hawaiian Mamo',
  tagline: 'Hawaiians plucked 80,000 birds to make a single royal feather cloak. When the forests fell and disease arrived, the mamo vanished.',
  category: 'fauna',
  subcategory: 'Honeycreepers',
  lastKnownYear: 1898,
  lastKnownLocation: 'Slopes of Mauna Loa, Island of Hawai\u02BBi',
  coordinates: [19.5, -155.5],
  region: 'Pacific Islands',
  status: 'extinct',
  cause: 'Habitat destruction, avian malaria from introduced mosquitoes, overharvesting for feathers',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Gold and Black

The Hawaiian mamo (*Drepanis pacifica*) was among the most striking birds in the Hawaiian Islands. About 20 centimeters long, it was almost entirely glossy black, with vivid golden-yellow feathers on the rump, thighs, and undertail coverts. It possessed a long, strongly decurved beak adapted for probing deep into the flowers of native lobelioids and ohia lehua trees for nectar. The mamo was endemic to the island of Hawai\u02BBi, the largest in the archipelago, where it inhabited the dense montane forests on the slopes of Mauna Loa and Mauna Kea.

The bird held immense cultural significance for Native Hawaiians. Its golden feathers were the most prized material for the magnificent feathered cloaks, or ahu ula, worn by Hawaiian royalty. The most famous of these, the cloak of Kamehameha I, reportedly required the feathers of approximately 80,000 individual mamo. Professional bird catchers, or kia manu, would capture the birds using sticky sap on branches, pluck the small yellow feathers, and release the birds alive. This practice, while intensive, was sustainable for centuries because the forests remained intact and the birds were numerous.

## The Collapse

What destroyed the mamo was not the feather harvest but the cascade of ecological catastrophes that struck Hawai\u02BBi in the nineteenth century. Commercial logging and ranching cleared vast areas of native forest. Sugar plantations carved into the lowland habitats. Most devastatingly, mosquitoes arrived on the islands, likely aboard a whaling ship in 1826, and with them came avian malaria and avian pox.

Hawaiian honeycreepers had evolved in complete isolation from these diseases and had no immune defense whatsoever. Avian malaria swept through the lowland forests like wildfire. Species after species retreated upslope to elevations above roughly 1,500 meters, where cooler temperatures suppressed mosquito populations. But the mamo's habitat was already shrinking from above due to forest clearance, squeezing the species into an ever-narrowing band.

## The Last Mamo

The decline was swift. The mamo was still reasonably common in the 1880s. By the early 1890s, collectors noted it was becoming very difficult to find. The last confirmed specimen was collected in 1898 by a collector named H.W. Henshaw on the slopes of Mauna Loa. After that, silence. Despite occasional searches through the early twentieth century, the mamo was never seen again.

Kamehameha's golden cloak survives in the Bishop Museum in Honolulu, one of the great treasures of Polynesian culture. The bird whose feathers made it possible does not.`,
  quickFacts: {
    'Scientific Name': 'Drepanis pacifica',
    'Family': 'Fringillidae (Hawaiian honeycreepers)',
    'Endemic To': 'Island of Hawai\u02BBi',
    'Last Confirmed': '1898',
    'Feathers per Cloak': '~80,000 birds for Kamehameha I\'s cloak',
    'Beak': 'Long, decurved, adapted for nectar feeding',
    'Primary Threats': 'Avian malaria, deforestation, feather harvesting',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both were Hawaiian honeycreepers destroyed by avian malaria and habitat loss, their golden feathers prized by Hawaiian royalty' },
    { slug: 'huia-call', relationship: 'Both were birds driven extinct partly because humans prized their feathers and body parts as cultural treasures' },
  ],
  sources: [
    { title: 'Hawaiian Featherwork', author: 'Roger Rose', year: 1980 },
    { title: 'The Birds of the Hawaiian Islands', author: 'Scott Wilson and Arthur Evans', year: 1899 },
    { title: 'Conservation Biology of Hawaiian Forest Birds', author: 'T.K. Pratt et al.', year: 2009 },
  ],
};
