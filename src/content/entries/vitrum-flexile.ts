import type { Entry } from '../../types';

export const vitrumFlexile: Entry = {
  slug: 'vitrum-flexile',
  name: 'Vitrum Flexile',
  tagline: 'A Roman glassmaker invented unbreakable glass. The emperor had him killed to protect the gold standard. The formula died on the spot.',
  category: 'material',
  subcategory: 'Lost Formulas',
  lastKnownYear: '~30 CE',
  lastKnownLocation: 'Rome, Roman Empire',
  coordinates: [41.9, 12.5],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The inventor was allegedly executed by Emperor Tiberius, and the formula was never recorded',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Glass That Bounced

The story appears in multiple ancient sources, each telling it with slight variations but the same core: during the reign of Emperor Tiberius (14-37 CE), a craftsman presented the emperor with a drinking vessel made of glass that could not be broken. In some versions, the craftsman threw the vessel to the floor and it merely dented, like metal. He then hammered the dent out, restoring the vessel to its original shape. The glass was flexible, resilient, and unlike anything the Roman world had seen.

Pliny the Elder recorded the account in his Natural History, and Petronius included a version in the Satyricon. Cassius Dio and Isidore of Seville repeated variants. The consistency across sources spanning centuries suggests a kernel of real events behind the tale, even if the details were embellished over time.

## The Emperor's Logic

Tiberius, according to the sources, asked the craftsman whether anyone else knew the formula. When the man said no, Tiberius had him executed and his workshop destroyed. The emperor's reasoning, as Pliny reported it, was economic: if unbreakable glass could be mass-produced, it would collapse the value of gold and silver, destabilizing the currency that held the Roman economy together. The emperor chose monetary stability over technological progress. Whether this reasoning was wise or paranoid depends on your view of innovation, but the outcome was absolute. The formula, if it existed, died with its inventor.

## Could It Have Been Real?

Modern materials scientists have debated whether vitrum flexile could have existed. Several candidates have been proposed. Prince Rupert's drops, created by dripping molten glass into cold water, produce glass objects of extraordinary strength that can withstand hammer blows on their bulbous end. Metallic glass alloys, which have an amorphous atomic structure rather than crystalline, exhibit flexibility and resilience. Some scholars have proposed that the craftsman may have stumbled upon a form of devitrified or partially crystallized glass with unusual mechanical properties.

None of these candidates perfectly matches the ancient descriptions, but none of them would have been impossible with Roman glassmaking technology, which was among the most advanced in the ancient world. The Romans invented glassblowing, produced optically clear glass, and manufactured glass on an industrial scale. A skilled experimentalist working at the edges of the craft could plausibly have produced something remarkable and unreproducible.`,
  quickFacts: {
    'Period': 'Reign of Tiberius (14-37 CE)',
    'Location': 'Rome',
    'Described By': 'Pliny the Elder, Petronius, Cassius Dio',
    'Property': 'Flexible, unbreakable glass',
    'Cause of Loss': 'Inventor allegedly executed by Tiberius',
    'Modern Candidates': "Prince Rupert's drops, metallic glass",
    'Status': 'Unverified but plausible',
  },
  connections: [
    { slug: 'roman-concrete', relationship: 'Both represent Roman material innovations lost to history, one through imperial suppression, the other through the slow erosion of craft knowledge' },
    { slug: 'lycurgus-cup', relationship: 'Both demonstrate that Roman glassmakers achieved feats of material science that would not be understood for nearly two millennia' },
  ],
  sources: [
    { title: 'Natural History, Book XXXVI', author: 'Pliny the Elder', year: 77 },
    { title: 'Satyricon', author: 'Petronius', year: 60 },
    { title: 'Roman Glass: Reflections on Cultural Change', author: 'Stuart J. Fleming', year: 1999 },
    { title: 'Ancient Glass and Glassmaking', author: 'E. Marianne Stern', year: 2008 },
  ],
};
