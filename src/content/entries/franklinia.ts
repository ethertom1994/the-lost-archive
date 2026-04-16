import type { Entry } from '../../types';

export const franklinia: Entry = {
  slug: 'franklinia',
  name: 'The Franklin Tree',
  tagline: 'Every specimen alive today exists because two botanists happened to find it before it vanished from the wild.',
  category: 'flora',
  subcategory: 'Flowering Trees',
  lastKnownYear: 1803,
  lastKnownLocation: 'Altamaha River, Georgia, USA',
  coordinates: [31.55, -81.67],
  region: 'North America',
  status: 'extinct_in_wild',
  cause: 'Unknown; possibly a combination of disease, habitat change, and an already tiny population',
  imageUrl: '/images/entries/franklinia.jpg',
  imageCaption: 'Franklinia alatamaha flower',
  imageCredit: 'Wikimedia Commons',
  body: `## The Bartrams' Discovery

In October 1765, the Philadelphia botanist John Bartram and his son William were traveling along the Altamaha River in southeastern Georgia when they came upon a small grove of trees they had never seen before. The trees bore striking white flowers with bright yellow stamens, resembling camellias, with leaves that turned brilliant crimson in autumn. William returned in 1773 and collected seeds and specimens, naming the tree *Franklinia alatamaha* in honor of his father's friend Benjamin Franklin.

The Bartrams had found something extraordinary: a flowering tree that appeared to grow in only one place on Earth, a two-to-three-acre patch along the banks of the Altamaha. They collected seeds and established the tree in their botanical garden in Philadelphia. It was a fortunate impulse.

## Vanished from the Wild

After 1803, no one ever found the Franklin tree growing wild again. Multiple expeditions searched the Altamaha River corridor throughout the nineteenth and twentieth centuries. None succeeded. The species had disappeared from its only known natural habitat within forty years of its discovery by Western science.

The cause remains debated. Some botanists suspect a fungal pathogen, possibly *Phytophthora*, which thrives in the wet bottomland habitat where the tree grew. Others point to cotton agriculture, which transformed Georgia's river valleys in the early 1800s, potentially destroying the exact site. The population may have been so small and isolated that any disruption was fatal.

## Saved by a Garden

The Franklin tree survives today solely because of those seeds the Bartrams collected. Every living *Franklinia alatamaha* on Earth descends from the plants in the Bartram garden. The tree is now cultivated in botanical gardens and private collections across eastern North America. It is a popular ornamental, beloved for its late-summer flowers and spectacular fall color.

It is a peculiar kind of survival. The species exists, but only under human care. No Franklin tree has lived in its natural ecosystem for over two centuries. The insects that pollinated it in the wild, the soil fungi that sustained it, the seasonal flooding of the Altamaha that shaped its habitat are all absent from its current life in cultivated gardens. It is a tree in exile, alive but homeless.

## The Lottery of Discovery

What makes the Franklin tree haunting is the contingency. If the Bartrams had traveled a different route, if they had come twenty years later, if they had not been the kind of naturalists who collected seeds as a matter of course, the species would have vanished without anyone knowing it existed. How many other species disappeared from that same stretch of Georgia river before a botanist happened to walk by?`,
  quickFacts: {
    'Scientific Name': 'Franklinia alatamaha',
    'Family': 'Theaceae (tea family)',
    'Discovered': '1765 by John and William Bartram',
    'Named For': 'Benjamin Franklin',
    'Last Wild Sighting': '1803',
    'Flower': 'White, 3 inches across, fragrant',
    'Fall Color': 'Brilliant crimson',
    'Current Status': 'Extinct in wild; cultivated worldwide',
  },
  connections: [
    { slug: 'st-helena-olive', relationship: 'Both were trees reduced to tiny remnant populations, though only the Franklin tree was saved in time' },
    { slug: 'silphium', relationship: 'Both vanished from their native habitat, but the Franklin tree had the luck of being collected before it disappeared' },
    { slug: 'cry-violet', relationship: 'Both were species known from a single, extremely limited location that was lost' },
  ],
  sources: [
    { title: 'Travels Through North and South Carolina, Georgia, East and West Florida', author: 'William Bartram', year: 1791 },
    { title: 'The Franklinia alatamaha: History and Conservation', author: 'Joel T. Fry', year: 2008 },
    { title: 'Lost Groves: The Franklin Tree', author: 'Bartram\'s Garden Archives', year: 2020, url: 'https://www.bartramsgarden.org' },
  ],
};
