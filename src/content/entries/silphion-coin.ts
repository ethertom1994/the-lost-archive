import type { Entry } from '../../types';

export const silphionCoin: Entry = {
  slug: 'silphion-coin',
  name: 'The Silphion Coin of Cyrene',
  tagline: 'The coin survives in museums. The plant it depicts does not. One of the earliest examples of putting a natural resource on money.',
  category: 'culture',
  subcategory: 'Numismatics',
  lastKnownYear: '~1st century BCE',
  lastKnownLocation: 'Cyrenaica (modern Libya)',
  coordinates: [32.82, 21.86],
  region: 'North Africa',
  status: 'extinct',
  cause: 'The city-state of Cyrene declined under Roman rule; the plant depicted on the coin was harvested to extinction',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Silphium_coin.png/400px-Silphium_coin.png',
  imageCaption: 'Silver coin from Cyrene depicting the silphium plant',
  imageCredit: 'Classical Numismatic Group, CC BY-SA 3.0',
  body: `## A Portrait of Extinction

In the numismatic collections of the world's great museums, there are small silver and gold coins that bear the image of a plant. The coins were minted by the ancient Greek colony of Cyrene, on the coast of what is now Libya, over a period spanning roughly the seventh through first centuries BCE. The plant depicted is silphium, a fennel-like herb that was the economic foundation of Cyrenean civilization. It appears on nearly every denomination Cyrene minted, rendered with careful botanical detail: the thick stem, the broad leaves, the distinctive seedpod.

The coins survive. The plant does not. There is no other artifact in the history of human civilization that so precisely documents both the value of a natural resource and the fact of its destruction.

## Money Made from a Plant

Cyrene was, in effect, a petrostate of the ancient world, except that its commodity was not oil but a herb. Silphium grew wild in a narrow strip of coastal land near the city. It was used as a seasoning, a medicine, and apparently a contraceptive. It was so valuable that it functioned as a de facto currency: the Roman naturalist Pliny the Elder recorded that silphium was literally "worth its weight in silver."

The Cyrenean mint reflected this reality. The silphium plant appears on coins in multiple forms: the whole plant, individual leaves, and most distinctively, the heart-shaped seedpod. These images were not merely decorative. They were statements of economic power, the equivalent of putting an oil derrick on a modern national seal. Every coin said: we have silphium, and you need it.

## The Heart Shape

The silphium seedpod, as depicted on Cyrenean coins, bears a striking resemblance to the stylized heart shape that has become one of the most universal symbols in human culture. Some historians have proposed that the modern heart symbol may trace its origin to the silphium seed, carried across the Mediterranean on the coins that served as the ancient world's common currency. The hypothesis is speculative but persistent, and the visual similarity is undeniable.

If true, it means that one of humanity's most widespread symbols of love and affection originated as a picture of a plant that was consumed to extinction. The symbol outlived its subject by two thousand years.

## What Survives

The coins are the most detailed visual record we have of silphium. No living specimen exists for comparison. Botanical illustrations from the medieval and Renaissance periods, based on ancient descriptions, are interpretive at best. The Cyrenean coins, made by people who actually saw the plant, are the closest thing to a photograph we will ever have.

They are held in collections at the British Museum, the Biblioth\u00e8que nationale de France, the American Numismatic Society, and elsewhere. Small, cool, and silver, they sit in climate-controlled drawers, carrying the image of a plant that once underwrote an entire civilization's wealth. The plant is gone. The image endures. The disconnect between the two is the entire story of The Lost Archive in miniature.`,
  quickFacts: {
    'Minting Period': '~7th-1st century BCE',
    'Mint': 'City-state of Cyrene (modern Libya)',
    'Plant Depicted': 'Silphium (exact species unknown)',
    'Denominations': 'Multiple; silphium appears on nearly all',
    'Key Image': 'Heart-shaped seedpod',
    'Heart Symbol Theory': 'Modern \u2764 may derive from silphium seed',
    'Surviving Examples': 'British Museum, BnF, ANS, others',
    'Significance': 'Earliest known depiction of a natural resource on currency',
  },
  connections: [
    { slug: 'silphium', relationship: 'The coin depicts the plant. The plant is its own entry in this archive. Together they tell a complete story.' },
    { slug: 'prussian-taler', relationship: 'Both are historic currencies that survived as physical artifacts after the systems they represented collapsed' },
  ],
  sources: [
    { title: 'The Coinage of Cyrene', author: 'E.S.G. Robinson', year: 1927 },
    { title: 'Silphium and the Heart Shape', author: 'John M. Riddle', year: 1992 },
    { title: 'Natural History, Book XIX', author: 'Pliny the Elder', year: 77 },
    { title: 'British Museum Collection: Cyrene', year: 2023, url: 'https://www.britishmuseum.org' },
  ],
};
