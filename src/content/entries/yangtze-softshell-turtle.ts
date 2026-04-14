import type { Entry } from '../../types';

export const yangtzeSoftshellTurtle: Entry = {
  slug: 'yangtze-softshell-turtle',
  name: 'The Yangtze Giant Softshell Turtle',
  tagline: 'The world\'s rarest turtle. Its last known female died on an operating table during a final attempt to save the species.',
  category: 'fauna',
  subcategory: 'Critically Endangered Reptiles',
  lastKnownYear: 2019,
  lastKnownLocation: 'Suzhou, China',
  coordinates: [31.30, 120.59],
  region: 'East Asia',
  status: 'functionally_extinct',
  cause: 'Habitat destruction along the Yangtze River, hunting, and the death of the last known female during an artificial insemination attempt in 2019',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Last Female

On April 13, 2019, at the Suzhou Zoo in eastern China, a female Yangtze giant softshell turtle died. She was approximately ninety years old. She had just undergone her fifth artificial insemination procedure, a last-ditch attempt by Chinese and international scientists to produce fertile eggs. The procedure appeared to go well. She died within twenty-four hours of complications. With her death, the species *Rafetus swinhoei* lost its last known female.

She had been paired with a male at Suzhou Zoo since 2008, after being transferred from the Changsha Zoo. Natural mating had failed repeatedly. The male, estimated at over one hundred years old, had a damaged shell and seemed unable to mate naturally. Artificial insemination was the only option. It had been attempted four times before without success. The fifth attempt killed her.

## A Species That Fills a Lake

*Rafetus swinhoei* is the world's largest freshwater turtle, with individuals exceeding one hundred kilograms. They once inhabited the Yangtze River system and wetlands across southern China and northern Vietnam. The species was never abundant in modern times, but hunting for food and traditional medicine, combined with the systematic destruction of Yangtze wetlands during China's industrial expansion, reduced the population to a handful by the late twentieth century.

By 2019, only three individuals were confirmed alive: the male at Suzhou Zoo, and two wild individuals believed to inhabit Dong Mo Lake and Xuan Khanh Lake in Vietnam. In 2020, a wild individual was detected in Dong Mo Lake using environmental DNA sampling, and another was photographed in Xuan Khanh Lake in 2023. Both are believed to be male, though their sex has not been confirmed.

## The Mathematics of Extinction

The species now exists in an almost impossible situation. The Suzhou male remains alive but is elderly. The Vietnamese individuals are unconfirmed in sex and cannot be easily captured for breeding. Even if a female were found, the logistics of capture, transport, and successful breeding at this scale are daunting. The species may persist biologically for decades as its last members age out, but reproductively it is already over.

The Yangtze giant softshell turtle may be the clearest case in modern conservation of a species that ended not with a bang but on an operating table, under anesthesia, surrounded by people desperately trying to save it.`,
  quickFacts: {
    'Scientific Name': 'Rafetus swinhoei',
    'Common Names': 'Yangtze Giant Softshell Turtle, Hoan Kiem Turtle',
    'Maximum Size': 'Over 100 kg, carapace up to 100 cm',
    'Known Individuals (2024)': '~3 (1 captive male, 2 wild in Vietnam)',
    'Last Known Female': 'Died April 13, 2019, Suzhou Zoo',
    'Cause of Female Death': 'Post-procedural complications from artificial insemination',
    'Historical Range': 'Yangtze River basin, Red River basin (Vietnam)',
  },
  connections: [
    { slug: 'baiji', relationship: 'Both Yangtze River species lost to China\'s rapid industrialization and waterway development' },
    { slug: 'bramble-cay-melomys', relationship: 'Both species reduced to final countable individuals, with extinction playing out in real time' },
  ],
  sources: [
    { title: 'The last known female Rafetus swinhoei dies at Suzhou Zoo', author: 'Turtle Survival Alliance', year: 2019 },
    { title: 'Rafetus swinhoei: IUCN Red List Assessment', author: 'Asian Turtle Trade Working Group', year: 2021 },
    { title: 'Detection of Rafetus swinhoei in Dong Mo Lake using environmental DNA', author: 'Le et al.', year: 2020 },
    { title: 'In Search of the Hoan Kiem Turtle', author: 'Timothy McCormack', year: 2015 },
  ],
};
