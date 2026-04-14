import type { Entry } from '../../types';

export const colossusOfRhodes: Entry = {
  slug: 'colossus-of-rhodes',
  name: 'The Colossus of Rhodes',
  tagline: 'A 33-meter bronze statue of the sun god Helios, one of the Seven Wonders. It stood for only 54 years before an earthquake toppled it. The ruins lay untouched for 800 years.',
  category: 'culture',
  subcategory: 'Ancient Monuments',
  lastKnownYear: '~653 CE',
  lastKnownLocation: 'Rhodes, Greece',
  coordinates: [36.45, 28.23],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Toppled by an earthquake around 226 BCE after standing for just 54 years. The ruins lay in place for ~800 years until Arab forces reportedly sold the bronze for scrap around 653 CE.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Fifty-Four Years of Wonder

The Colossus of Rhodes was built to celebrate a military victory. In 305 BCE, the city of Rhodes successfully resisted a siege by Demetrius I of Macedon, who had brought the largest siege tower ever constructed. After Demetrius withdrew, the Rhodians sold his abandoned equipment and used the proceeds to build the largest statue in the ancient world: a bronze figure of the sun god Helios, approximately 33 meters (108 feet) tall, roughly the same height as the Statue of Liberty from feet to crown.

The sculptor Chares of Lindos spent twelve years on the project (292-280 BCE). The statue was built with an iron and stone internal framework, clad in bronze plates. Exactly where it stood and what pose it struck remain debated — the popular image of the Colossus straddling the harbor entrance is a medieval invention with no ancient support. It more likely stood on a pedestal near the harbor, facing seaward.

It stood for fifty-four years. Around 226 BCE, an earthquake snapped the Colossus at the knees. It fell onto the land, its enormous bronze limbs and torso sprawling across the ground. The Egyptian king Ptolemy III offered to pay for its reconstruction. The Rhodians declined, citing an oracle from the god Helios that the statue should not be rebuilt.

## The Ruins That Stayed

What happened next is almost stranger than the statue itself. The fallen Colossus was not removed. For approximately 800 years, the massive bronze fragments lay where they had fallen, becoming a tourist attraction in their own right. Pliny the Elder, visiting Rhodes in the 1st century CE, wrote that even on the ground, the statue was a marvel — few people could wrap their arms around one of its fallen thumbs.

For eight centuries, people walked among the ruins of a Wonder of the World. The bronze was valuable but sacred — nobody dared melt it down. The ruins became part of the landscape, a permanent monument to both human ambition and natural power.

## The Final Disappearance

Around 653 CE, Arab forces under Muawiya I captured Rhodes. According to the 12th-century chronicler Michael the Syrian, the bronze of the Colossus was broken up and sold to a Jewish merchant, who reportedly carried it away on 900 camels. This account may be exaggerated or partially legendary, but the Colossus did disappear around this time. No fragments have ever been identified.

The Colossus of Rhodes existed as a standing monument for 54 years, as ruins for 800 years, and then vanished entirely. We have ancient descriptions, medieval illustrations (all inaccurate), and no physical remains. One of the Seven Wonders of the Ancient World was, in the end, recycled.`,
  quickFacts: {
    'Height': '~33 meters (108 feet)',
    'Material': 'Bronze plates over iron/stone frame',
    'Built': '292-280 BCE',
    'Sculptor': 'Chares of Lindos',
    'Destroyed': '~226 BCE (earthquake)',
    'Ruins Stood For': '~800 years',
    'Final Disappearance': '~653 CE (bronze sold)',
    'Status': 'One of Seven Wonders — no physical remains',
  },
  connections: [
    { slug: 'hanging-gardens', relationship: 'Both are among the Seven Wonders of the Ancient World — monuments of extraordinary scale now completely vanished' },
    { slug: 'antikythera-mechanism', relationship: 'Both demonstrate the engineering ambition of the ancient Greek world — one in monumental sculpture, the other in mechanical precision' },
    { slug: 'library-of-alexandria', relationship: 'Both icons of the ancient world destroyed in stages — damaged, left in ruins, then finally obliterated' },
  ],
  sources: [
    { title: 'Natural History, Book XXXIV', author: 'Pliny the Elder', year: 77 },
    { title: 'The Seven Wonders of the Ancient World', author: 'Peter A. Clayton & Martin J. Price', year: 1988 },
    { title: 'The Colossus of Rhodes: New Research', author: 'Ursula Vedder', year: 2015 },
    { title: 'Chronicle', author: 'Michael the Syrian', year: 1199 },
  ],
};
