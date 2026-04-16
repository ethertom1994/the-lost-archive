import type { Entry } from '../../types';

export const hanPaperVariants: Entry = {
  slug: 'han-paper-variants',
  name: 'Pre-Standardization Chinese Paper',
  tagline: 'Before Cai Lun\'s famous recipe in 105 CE, Chinese artisans made paper from hemp, bark, silk waste, and fishing nets. When the standard won, the variants vanished.',
  category: 'technology',
  lastKnownYear: '~105 CE',
  lastKnownLocation: 'Chang\'an (modern Xi\'an), Han Dynasty China',
  coordinates: [34.26, 108.94],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Cai Lun\'s standardized mulberry bark and fiber method was adopted empire-wide, displacing earlier experimental techniques',
  imageUrl: undefined,
  body: `## Paper Before the Standard

The conventional history credits Cai Lun, a eunuch official of the Eastern Han court, with inventing paper in 105 CE. The archaeological record tells a more complicated story. Paper existed in China for at least two centuries before Cai Lun's famous report to Emperor He. The earliest known fragment, the Fangmatan paper unearthed in Gansu province, dates to between 179 and 141 BCE. Additional fragments have been found at Dunhuang (65 BCE) and Yumen Pass (8 BCE). Paper was not invented in a single moment. It evolved through generations of experimentation.

These early papers were made from diverse raw materials. Hemp fibers were the most common base, pounded and disintegrated into a coarse, thick sheet. Artisans also worked with the bark of paper mulberry, ramie, various plant basts, silk waste, and fishing nets. Each material produced paper with different properties: different textures, different absorbencies, different strengths, different responses to ink. The hemp papers were rough but durable. Bark papers could be smooth and fine. Silk-waste papers had a distinctive sheen.

## The Standardization

What Cai Lun did in 105 CE was not invent paper but propose a standardized recipe to the imperial court. His method combined mulberry bark, hemp waste, old rags, and fishing nets into a process that was reliable, scalable, and economical. The court adopted it. Imperial bureaucracy, which consumed enormous quantities of writing material, needed consistency above all. A standard was established, and the machinery of state ensured its spread.

The earlier variants did not survive this standardization. Artisans who had developed specialized techniques for hemp-only papers, or for papers incorporating silk waste, or for regional bark varieties, found their products displaced by the new standard. The specific knowledge of how to produce these earlier papers, some of which may have been superior for particular applications, was not recorded and was not maintained once the market for them disappeared.

## The Lost Possibilities

The pre-standardization period represents an era of material experimentation that was cut short by the success of a single recipe. We cannot know what further refinements might have emerged from the hemp tradition, or whether silk-waste papers might have developed into a distinct medium with properties that mulberry paper lacks. The Fangmatan fragment is thick and crude by later standards, but it was also the product of a tradition that was still evolving. Standardization gave China the world's first mass-produced writing surface. It also closed off every other path that papermaking might have taken.`,
  quickFacts: {
    'Earliest Known Fragment': 'Fangmatan paper, 179-141 BCE',
    'Cai Lun\'s Report': '105 CE',
    'Pre-Standard Materials': 'Hemp, bark, silk waste, ramie, fishing nets',
    'Standard Recipe': 'Mulberry bark, hemp waste, old rags, fishing nets',
    'Location of Early Finds': 'Gansu, Dunhuang, Yumen Pass',
    'Dominant Material Until Tang': 'Hemp',
    'What Replaced Variants': 'Cai Lun\'s standardized mulberry method',
  },
  connections: [
    { slug: 'song-celadon', relationship: 'Both represent Chinese craft traditions where an era of diverse experimentation was followed by standardization that eliminated earlier variant techniques' },
    { slug: 'han-purple', relationship: 'Both are Han Dynasty material technologies whose specific production methods were lost, one through standardization, the other through dynastic collapse' },
  ],
  sources: [
    { title: 'Science and Civilisation in China, Volume 5 Part 1', author: 'Tsien Tsuen-Hsuin (Joseph Needham series)', year: 1985 },
    { title: 'Paper in Ancient China', url: 'https://www.worldhistory.org/article/1120/paper-in-ancient-china/' },
    { title: 'History of paper', url: 'https://en.wikipedia.org/wiki/History_of_paper' },
  ],
};
