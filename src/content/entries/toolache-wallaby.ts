import type { Entry } from '../../types';

export const toolacheWallaby: Entry = {
  slug: 'toolache-wallaby',
  name: 'Toolache Wallaby',
  tagline: 'Called the most graceful of all kangaroos. The last rescue attempt in 1924 accidentally killed 10 of the 14 animals they were trying to save.',
  category: 'fauna',
  subcategory: 'Extinct Marsupials',
  lastKnownYear: 1939,
  lastKnownLocation: 'Robe district, South Australia',
  coordinates: [-37.16, 139.76],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Sport hunting for its speed and beauty, habitat destruction from pastoral farming, and predation by foxes',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Most Beautiful Wallaby

Naturalists who saw the toolache wallaby in life struggled to describe it without resorting to superlatives. John Gould, the great illustrator of Australian mammals, called it the most elegant and graceful of all the kangaroos. It had soft, grizzled grey fur with a distinct yellowish hip stripe and pale underparts. It was medium-sized, about the weight of a large hare, with long, slender limbs built for speed.

And it was fast. Accounts consistently describe the toolache as the swiftest of all wallabies, capable of extraordinary bursts of speed across the open grasslands and scrubby woodlands of southeastern South Australia. It ran with a distinctive alternating gait, switching between bipedal hopping and a quadrupedal bounding that witnesses found mesmerizing.

That speed and beauty made it a target.

## Hunted for Sport

European settlers in the Robe and Penola districts of South Australia hunted the toolache wallaby not for food or pest control, but for the thrill of the chase. Its speed made it a prized quarry for greyhound coursing, a sport in which dogs pursued the wallaby across open ground. Hunters considered it the finest sporting animal in Australia.

By the late 1800s, the combination of greyhound coursing, shooting, and habitat conversion to sheep pasture had severely reduced the population. The introduction of the red fox in the 1870s added a new predator to the already mounting pressure. By the early 1900s, the toolache wallaby was rare.

## The Disastrous Rescue

In 1923, the South Australian government belatedly declared the toolache wallaby a protected species. A year later, in 1924, a capture expedition was organized to round up surviving animals for a captive breeding program. It was the first serious attempt to save the species.

The plan was to use beaters to drive wallabies into nets. Fourteen animals were captured. Ten died during the roundup, either from the stress of the chase or from injuries sustained in the nets. The remaining four were placed in a fenced enclosure, where they also died within months.

The rescue attempt killed most of the animals it was designed to save. The species was functionally extinct after this point. A few individuals may have survived in the wild through the 1930s. The last confirmed sighting was in 1939.

## A Speed That Couldn't Save It

The toolache wallaby evolved to outrun everything in its environment. It was faster than dingoes, faster than wedge-tailed eagles. But it could not outrun greyhounds bred for centuries to chase. It could not outrun foxes imported from England. And it could not outrun the nets of the people who, too late, realized what they were losing.`,
  quickFacts: {
    'Species': 'Macropus greyi',
    'Reputation': 'Considered the most elegant and graceful of all kangaroos',
    'Range': 'Southeastern South Australia, near Robe and Penola',
    'Primary Threat': 'Greyhound coursing and sport hunting',
    'The Rescue Disaster': '1924: 14 captured, 10 died in the attempt',
    'Last Confirmed Sighting': '1939',
  },
  connections: [
    { slug: 'thylacine', relationship: 'Both were Australian marsupials hunted to extinction, both subjects of belated and failed protection efforts' },
    { slug: 'pyrenean-ibex', relationship: 'Both were declared protected only after their populations had already collapsed beyond recovery' },
  ],
  sources: [
    { title: 'The Mammals of Australia', author: 'John Gould', year: 1863 },
    { title: 'Extinct and Endangered Mammals of Australia', author: 'Ellis Troughton', year: 1941 },
    { title: 'A Gap in Nature: Discovering the World\'s Extinct Animals', author: 'Tim Flannery and Peter Schouten', year: 2001 },
  ],
};
