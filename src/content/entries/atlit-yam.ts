import type { Entry } from '../../types';

export const atlitYam: Entry = {
  slug: 'atlit-yam',
  name: 'Atlit Yam',
  tagline: 'A 9,000-year-old Neolithic village now resting twelve meters beneath the Mediterranean, its houses and wells and megalithic stone circle preserved under sand. One of the earliest farming-and-fishing communities humans ever built, and one of the first drowned by rising seas.',
  category: 'place',
  subcategory: 'Submerged Prehistoric Settlements',
  lastKnownYear: -5000,
  lastKnownLocation: 'Bay of Atlit, off the Carmel coast, Israel',
  coordinates: [32.7, 34.9],
  region: 'Levant',
  status: 'extinct',
  cause: 'Post-glacial sea level rise submerged the village in the early Holocene, around 7,000 years before present',
  imageUrl: undefined,
  body: `## A Village Under the Sea

Three hundred meters off the coast of Atlit, south of Haifa, the Mediterranean Sea is only about eight to twelve meters deep. On the seabed, preserved beneath a layer of marine sand, is a village. Its stone foundations are intact. Its wells still contain water. Its stone circle of seven upright megaliths still stands where it was built around a freshwater spring. Ninety human skeletons lie in their original graves, most within or alongside the houses.

Atlit Yam was first identified in 1984 by the marine archaeologist Ehud Galili after winter storms shifted the seabed sand and briefly exposed wooden posts. Since then, repeated excavation campaigns have mapped a settlement that occupied an area of at least 40,000 square meters along what was once a dry river valley and a coastal plain. Radiocarbon dates place its occupation in the Pre-Pottery Neolithic C period, roughly 7,200 to 6,300 BCE.

## A Hinge of Human History

Atlit Yam was inhabited at a pivotal moment. The people who lived there kept cattle, sheep, and goats; they grew wheat, barley, lentils, and flax; and they fished, which we know because their houses are full of fish bones and fishing equipment, including hooks, nets, and what may be the earliest evidence of organized deep-sea fishing. They are one of the first archaeologically documented communities to combine all three modes of food production at a large scale: pastoralism, agriculture, and marine exploitation.

Their houses had rectangular stone foundations with plastered floors, a departure from earlier round huts of the region. They built a dry-stone well 5.5 meters deep into the bedrock, lined with precision-fit stones; it eventually filled with animal bones and trash when the spring water became salty from the rising sea, a slow-motion snapshot of the moment the village began to die. Paleopathological studies of the buried dead have found the world's earliest documented cases of tuberculosis in a human skeleton and in a cow bone, pushing the evolutionary history of that disease back by thousands of years.

## The Stone Circle and the Spring

At the center of the village, seven basalt megaliths, each weighing up to 600 kilograms, stand in a semicircle around what was once a freshwater spring. Some have shallow cup-shaped depressions carved into them. The arrangement is clearly ritual, and it is unique among Neolithic sites of the Levant. The spring itself was probably the organizing feature of the entire settlement: fresh water in a coastal plain would have been the village's most precious resource, and the stones mark and celebrate it.

Which makes the end of Atlit Yam particularly poignant. As global sea level continued its post-glacial rise, salt water infiltrated the spring, and the well began producing brackish water. The villagers backfilled the well with refuse, a common Neolithic signal that a feature was going out of use. Then, within a generation or so, they left.

## A Tsunami, or the Ocean?

In 2007 a research team led by Maria Pareschi proposed that the end of Atlit Yam came not gradually but violently, in a tsunami triggered by the collapse of Mount Etna around 6,300 BCE. That hypothesis is contested. Other researchers argue that the site shows no clear tsunami signature and that a slow retreat as the coast moved inland is sufficient to explain what we see. Either way, within a few centuries of abandonment the village was under water. The sand that drowned it also saved it.

## What It Preserves

There are no pyramids here, no walls of Jericho, no sensational architecture. Atlit Yam is valuable because it is a village. Pre-Pottery Neolithic settlements on dry land were almost all disturbed by millennia of reoccupation, farming, and modern construction. Under the sea, with no one digging, Atlit Yam kept its wooden posts, its intact hearths, its textile impressions, and the bones of people whose lives are otherwise almost entirely theoretical. It is a sample of a world in which humans had just committed to agriculture and were still figuring out what that was going to mean. And it is gone, or at least submerged, because the same Holocene warming that enabled the agricultural revolution also erased its coastlines.`,
  quickFacts: {
    'Period': 'Pre-Pottery Neolithic C',
    'Occupation': 'c. 7,200-6,300 BCE',
    'Area': 'At least 40,000 square meters',
    'Depth Today': '8-12 meters below sea level',
    'Burials Recovered': 'Approximately 90 human skeletons',
    'Notable Discovery': 'Earliest known human tuberculosis case',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both are fully submerged prehistoric human landscapes drowned by post-glacial sea level rise' },
    { slug: 'beringia', relationship: 'All three vanished under the same global sea level rise at the end of the Pleistocene and early Holocene' },
    { slug: 'helike', relationship: 'Both are human settlements permanently claimed by the sea, preserving moments of daily life underwater' },
  ],
  sources: [
    { title: 'Atlit-Yam: a prehistoric site on the sea floor off the Israeli coast', author: 'Ehud Galili, Mina Weinstein-Evron, Israel Hershkovitz et al.', year: 1993 },
    { title: 'Excavations at the Submerged Neolithic site of Atlit Yam, off the Carmel Coast of Israel', url: 'https://whitelevy.fas.harvard.edu/excavations-submerged-neolithic-site-atlit-yam-carmel-coast-israel' },
    { title: 'Atlit Yam - Wikipedia', url: 'https://en.wikipedia.org/wiki/Atlit_Yam' },
  ],
};
