import type { Entry } from '../../types';

export const lakePedder: Entry = {
  slug: 'lake-pedder',
  name: 'Lake Pedder',
  tagline: 'A uniquely beautiful glacial lake in Tasmania, drowned by a dam in 1972. The campaign to save it launched the modern environmental movement.',
  category: 'place',
  subcategory: 'Drowned Ecosystems',
  lastKnownYear: 1972,
  lastKnownLocation: 'Southwest Tasmania, Australia',
  coordinates: [-42.95, 146.02],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Flooded by the Huon-Serpentine impoundment for the Gordon River hydroelectric scheme',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Beach at the End of the World

Lake Pedder was a small glacial lake in the remote southwest wilderness of Tasmania. What made it extraordinary was its beach: a broad crescent of quartzite sand, uniquely pinkish-white, stretching along the lake's eastern shore. In certain light, the sand shimmered with a faint iridescence. The lake itself was shallow and clear, reflecting the surrounding button grass plains and the ridgeline of the Frankland Range. Bushwalkers who made the difficult trek to reach it described it as the most beautiful place they had ever seen.

The lake had been shaped by glacial processes over tens of thousands of years. Its unique ecology included species found nowhere else, most notably the Lake Pedder planarian, a tiny flatworm, and a species of freshwater crayfish. The quartzite beach was a geological rarity, and the combination of beach, lake, and surrounding wilderness formed an ecosystem without parallel.

## The Dam

In 1967, the Tasmanian government's Hydro-Electric Commission announced plans to impound the Gordon and Serpentine rivers for a hydroelectric scheme. The impoundment would create a reservoir that would flood Lake Pedder under approximately twenty meters of water, drowning the beach, the lake, and everything that lived in it.

The announcement triggered one of the earliest environmental campaigns in Australian history. The Save Lake Pedder campaign, coordinated by the newly formed Lake Pedder Action Committee, mobilized scientists, bushwalkers, and the public in opposition. It drew international attention. Scientists documented the lake's unique species. Photographers published images of the quartzite beach. Petitions circulated. Protests were held.

## It Was Not Enough

The Tasmanian government proceeded. In 1972, the dam was completed and the waters rose. Lake Pedder disappeared beneath the expanding reservoir. The quartzite beach, the planarian, the unique crayfish, and the singular visual beauty of the place were gone.

The loss of Lake Pedder is considered a foundational event in the Australian environmental movement. The outrage it generated helped drive the formation of the world's first green political party, the United Tasmania Group, in 1972. It also contributed directly to the successful campaign to prevent the damming of the nearby Franklin River a decade later, a campaign that established the precedent of federal government intervention to protect wilderness.

## Under the Water, Still

The original Lake Pedder lies beneath the Huon-Serpentine impoundment, which is now also confusingly called Lake Pedder. Proposals to restore the original lake by draining the reservoir have been made repeatedly since the 1990s, most formally by the Lake Pedder Restoration Committee. Feasibility studies suggest that the quartzite beach might still be intact beneath the sediment, and that some endemic species might have survived in modified forms. But restoration would require decommissioning a functioning dam, at significant economic cost, in a state that depends heavily on hydroelectric power.

The original Lake Pedder has never been seen again. It exists in photographs, in the memories of the people who walked its beach, and in the political movement its destruction created.`,
  quickFacts: {
    'Type': 'Glacial lake',
    'Location': 'Southwest Tasmania, Australia',
    'Unique Feature': 'Quartzite sand beach with iridescent properties',
    'Endemic Species': 'Lake Pedder planarian, unique crayfish species',
    'Flooded': '1972 (Gordon River hydroelectric scheme)',
    'Depth Underwater': '~20 meters beneath impoundment',
    'Political Legacy': 'United Tasmania Group (first green party, 1972)',
    'Restoration Proposals': 'Ongoing since 1990s, unfunded',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both were bodies of water destroyed by deliberate human engineering decisions despite public opposition' },
    { slug: 'bramble-cay-melomys', relationship: 'Both were unique ecosystems destroyed by water, one by intent and one by negligence' },
  ],
  sources: [
    { title: 'Lake Pedder: Values and Restoration', author: 'Tyler Pedder et al. (Lake Pedder Study)', year: 2001 },
    { title: 'The Lake Pedder Restoration Committee Report', year: 1995 },
    { title: 'Pedder Dreaming: Olegas Truchanas and the Battle for Lake Pedder', author: 'Bob Brown & Vica Bayley', year: 2017 },
    { title: 'Tasmania\'s Wilderness Battles', author: 'Greg Buckman', year: 2008 },
  ],
};
