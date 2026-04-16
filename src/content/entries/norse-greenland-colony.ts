import type { Entry } from '../../types';

export const norseGreenlandColony: Entry = {
  slug: 'norse-greenland-colony',
  name: 'Norse Greenland Colony',
  tagline: 'Five thousand Europeans thrived on the edge of the Arctic for four centuries, then vanished without a word.',
  category: 'place',
  subcategory: 'Vanished Settlements',
  lastKnownYear: '~1450',
  lastKnownLocation: 'Southern Greenland',
  coordinates: [61.0, -45.0],
  region: 'North Atlantic',
  status: 'extinct',
  cause: 'Gradual abandonment due to climate cooling (Little Ice Age), economic isolation, possible Inuit conflict, and collapse of trade routes',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Edge of the Known World

In approximately 985 CE, Erik the Red led a fleet of settlers from Iceland to the southwestern coast of Greenland. The colony grew into two main settlements: the Eastern Settlement near modern Qaqortoq and the smaller Western Settlement further up the coast. At their peak in the late twelfth and early thirteenth centuries, the Norse Greenland colonies supported an estimated three to five thousand people across roughly three hundred farms, with a cathedral at Gardar, a monastery, a nunnery, and at least sixteen parish churches.

The colonists adapted European pastoral agriculture to conditions no European farmer had ever faced. They raised cattle, sheep, and goats on narrow coastal grasslands between the ice cap and the sea. They supplemented their diet with seal, caribou, and fish. They traded walrus ivory, polar bear skins, narwhal tusks, and live falcons to Europe in exchange for iron, timber, grain, and the communion wine their churches required. For over four hundred years, this worked.

## The Silence

The Western Settlement was abandoned sometime around 1350. A Norwegian clergyman named Ivar Bardarson sailed there and reported finding no people, only livestock wandering freely. The Eastern Settlement persisted longer. The last written record is a 1408 letter documenting a marriage at Hvalsey Church. After that, nothing. No letter, no chronicle, no distress signal. When Europeans next visited in the eighteenth century, they found only ruins.

What ended the colony remains debated. The Little Ice Age lowered temperatures and extended sea ice, making agriculture more difficult and blocking the sailing routes to Norway. The Black Death devastated Norway and may have severed trade connections. The market for walrus ivory collapsed as cheaper elephant ivory became available through West African trade. The Inuit, expanding southward, may have competed for resources or engaged in conflict, though archaeological evidence for warfare is sparse.

## What Vanished With Them

The Norse Greenlanders developed four centuries of accumulated knowledge about surviving at the edge of the habitable world: which grasses fed cattle through Arctic winters, how to insulate stone buildings against permafrost, where to hunt seals on the ice. None of it was written down. The colony left behind stone ruins, a few runic inscriptions, and silence. No survivor ever recorded what happened in the final decades.`,
  quickFacts: {
    'Founded': '~985 CE by Erik the Red',
    'Settlements': 'Eastern Settlement and Western Settlement',
    'Peak Population': '~3,000-5,000 people',
    'Churches': 'Cathedral at Gardar, 16+ parish churches',
    'Western Settlement Abandoned': '~1350 CE',
    'Last Written Record': '1408, marriage at Hvalsey Church',
    'Probable Causes': 'Little Ice Age, trade collapse, Black Death, possible Inuit pressure',
  },
  connections: [
    { slug: 'vinland-birdsong', relationship: 'Both represent lost Norse North Atlantic experiences; Vinland was explored from Greenland, and both vanished from European knowledge for centuries' },
    { slug: 'viking-sunstone', relationship: 'The Greenland colonists relied on Norse navigation techniques, possibly including sunstone use, for the dangerous sea crossings to and from Europe' },
  ],
  sources: [
    { title: 'The Frozen Echo: Greenland and the Exploration of North America', author: 'Kirsten Seaver', year: 1996 },
    { title: 'The Last Vikings: The Epic Story of the Great Norse Voyagers', author: 'Thomas Laquer', year: 2014 },
    { title: 'Norse Greenland: Selected Papers from the Hvalsey Conference 2008', author: 'Jette Arneborg et al.', year: 2012 },
  ],
};
