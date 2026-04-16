import type { Entry } from '../../types';

export const irishElk: Entry = {
  slug: 'irish-elk',
  name: 'Irish Elk',
  tagline: 'A deer the size of a moose with antlers twelve feet wide. It was not Irish and not an elk. It survived the Ice Age, then vanished in the quiet forests of western Siberia around 7,700 years ago.',
  category: 'fauna',
  subcategory: 'Pleistocene Megafauna',
  lastKnownYear: -5700,
  lastKnownLocation: 'Western Siberia, Russia',
  coordinates: [60.0, 65.0],
  region: 'Eurasia',
  status: 'extinct',
  cause: 'Holocene reforestation closed the open grasslands the species depended on; possible hunting pressure from early humans',
  imageUrl: undefined,
  body: `## The Deer That Was Not an Elk

The "Irish elk," *Megaloceros giganteus*, is misnamed twice over. It was not a true elk, and while its spectacular antlers emerged famously from Irish bogs, the animal ranged across most of northern Eurasia, from the west coast of Ireland to Lake Baikal. It was the largest deer that ever lived, standing over two meters at the shoulder, with antlers spanning up to 3.6 meters from tip to tip and weighing as much as forty kilograms.

The antlers are the most famous thing about it. They were palmate, like a moose's, but enormously broader, and they were shed and regrown every year. Growing them required calcium and phosphorus in quantities that stressed the skeleton of the animal itself: paleontologists have found bone lesions consistent with osteoporosis in Irish elk remains, caused by the yearly drain of minerals from bones into antler growth. For decades this was cited as the cause of the species' extinction, a classic example of evolution run amok. That theory has not held up.

## Surviving the Ice Age, Not the Forests

The Irish elk disappeared from western Europe and Ireland around 11,000 years ago, at the end of the Pleistocene. For a long time, that was thought to be the end of the story. But in 2004 a team led by Adrian Lister and Anthony Stuart radiocarbon-dated Megaloceros remains from the Ural region of Russia to around 7,700 years ago, extending the species' survival by more than three thousand years. The last known population of Irish elk lived in a mosaic of steppe and forest in western Siberia, well into the Holocene.

What killed them was not their antlers but the trees. Megaloceros was adapted to open, cold steppe and parkland, the kind of mixed grassland that covered much of Eurasia during the glacial periods. As the climate warmed after the last ice age, the open grasslands gave way to dense closed-canopy forest. A deer with twelve-foot antlers does not move easily through thick woodland. The quality of forage declined, calving grounds shrank, and the last populations, already isolated in pockets of surviving steppe, winked out.

## The Bog Deer

Most intact Megaloceros skeletons come from the peat bogs of Ireland, where anoxic conditions preserved them for thousands of years. The Irish Giant Deer became a status symbol for 19th century landowners: whole racks were dragged out of bogs and mounted over the doors of country houses, and some specimens traveled to museums as far away as Dublin, Edinburgh, London, and New York. These bog finds gave the animal its common name, even though Megaloceros had already been extinct in Ireland for more than ten thousand years when the first Celtic settlers arrived.

Human contact with the species was not limited to bog finds. Cave paintings at Lascaux and Cougnac in France, dating to roughly 17,000 years ago, depict what appear to be Megaloceros. The artists who drew them knew the animal alive. By the time the last Irish elk died in the Siberian forest, no humans who lived alongside them in Europe would have remembered they had ever existed.

## What We Lost

The Irish elk was a visual exception even by Pleistocene standards. Nothing else alive today rivals its antlers. Moose are larger-bodied but carry smaller racks. The extinction removed an entire body plan from the deer family, and an entire ecological niche, the giant grazer of the open cold steppe, that no modern species has refilled. The antlers that hang in museums are not trophies. They are evidence of a landscape, the mammoth steppe, that is itself as extinct as the animal that evolved there.`,
  quickFacts: {
    'Species': 'Megaloceros giganteus',
    'Antler Span': 'Up to 3.6 meters (12 feet)',
    'Shoulder Height': 'Over 2 meters',
    'Range': 'Ireland to Lake Baikal',
    'Last Survivors': 'Western Siberia, c. 7,700 years ago',
    'Habitat Required': 'Open cold steppe and parkland',
  },
  connections: [
    { slug: 'beringia', relationship: 'Both lost to the post-glacial warming that replaced the mammoth steppe with forest and tundra' },
    { slug: 'green-sahara', relationship: 'Both vanished as Holocene climate shifts transformed the landscapes that sustained them' },
    { slug: 'haasts-eagle', relationship: 'Both were giant animals evolved for vanished ecosystems, surviving just long enough for humans to witness them' },
  ],
  sources: [
    { title: 'The Irish elk: when and why did this giant deer go extinct and what did it look like?', url: 'https://www.nhm.ac.uk/discover/irish-elk-giant-deer.html' },
    { title: 'The Late Quaternary extinction and the Holocene survival of the giant deer Megaloceros giganteus', author: 'A. J. Stuart, P. A. Kosintsev, T. F. G. Higham, A. M. Lister', year: 2004 },
    { title: 'Irish elk - Wikipedia', url: 'https://en.wikipedia.org/wiki/Irish_elk' },
  ],
};
