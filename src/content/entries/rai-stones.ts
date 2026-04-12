import type { Entry } from '../../types';

export const raiStones: Entry = {
  slug: 'rai-stones',
  name: 'The Rai Stone Economy',
  tagline: 'On the island of Yap, enormous limestone discs served as currency. Some sank in the ocean during transport and still retained their value. Everyone just remembered who owned the stone at the bottom of the sea.',
  category: 'culture',
  subcategory: 'Lost Economic Systems',
  lastKnownYear: 1929,
  lastKnownLocation: 'Yap, Federated States of Micronesia',
  coordinates: [9.54, 138.13],
  region: 'Oceania',
  status: 'functionally_extinct',
  cause: 'Introduction of modern currency during German and Japanese colonial periods, disrupting the traditional exchange system',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Money You Can't Move

The rai stones of Yap are limestone discs with a hole in the center, ranging from a few inches to twelve feet in diameter. The largest weigh several tons. They were quarried not on Yap itself but on the island of Palau, roughly 250 miles to the southwest, and transported across open ocean on bamboo rafts and outrigger canoes.

They were money. Not decorations, not ritual objects (though they had ritual significance). Money. They were exchanged in transactions for land, food, labor, and political agreements. Their value depended not on size alone but on a combination of factors: the difficulty of the journey that brought them to Yap, the history of who had owned them, and the circumstances of their creation.

## The Ledger in Everyone's Head

The remarkable feature of the rai economy was that ownership transfer did not require physical transfer. When a rai stone changed hands, the stone itself often stayed exactly where it was. What changed was the community's shared knowledge of who owned it. A stone could sit in front of one family's house for generations while its ownership passed through a dozen transactions. Everyone on the island knew the current owner. The stone was the currency. The community's memory was the ledger.

The most famous illustration: a large rai stone sank to the bottom of the ocean during transport from Palau to Yap. The stone was lost, but everyone agreed that it still existed, and everyone remembered who owned it. It continued to function as currency for generations, changing hands in transactions despite being invisible on the ocean floor. Money that no one could see, touch, or move, accepted by everyone because everyone agreed it was real.

## Value and Effort

A rai stone's value was partly determined by its provenance. Stones quarried and transported using traditional methods, at great personal risk on small canoes across open ocean, were worth more than stones produced later using metal tools (introduced by European traders in the 1800s) or transported on larger Western ships. When an Irish-American trader named David O'Keefe began shipping stones from Palau to Yap on his own vessel in the 1870s, the O'Keefe stones were accepted but valued lower than traditionally transported ones.

The Yapese understood perfectly well that the physical material was the same. The value difference was in the effort and risk that the stone represented. This is not primitive or irrational. It is a sophisticated understanding that the worth of money is social, not material.

## What the Economists Found

Milton Friedman, the Nobel laureate economist, wrote about rai stones in a 1991 paper, using them to illustrate that all money, including modern fiat currency, is essentially a shared belief system. The rai economy is now a standard teaching example in monetary economics. The irony is sharp: an economic system that Western colonizers dismissed as primitive anticipated concepts (consensus-based ledgers, value based on provenance and effort) that modern economists now recognize as foundational.

The rai stones still exist on Yap. Some remain in front of houses, along paths, and in meeting houses. They are culturally treasured but no longer function as active currency. The economy that ran on memory, trust, and enormous discs of limestone has been replaced by the U.S. dollar.`,
  quickFacts: {
    'Material': 'Limestone (aragonite), quarried on Palau',
    'Size Range': 'A few inches to 12 feet in diameter',
    'Transport Distance': '~250 miles by canoe across open ocean',
    'Value Determined By': 'Difficulty of transport, history of ownership, size',
    'Key Feature': 'Ownership transferred by communal agreement, not physical movement',
    'Modern Parallel': 'Often compared to blockchain and distributed ledgers',
  },
  connections: [
    { slug: 'prussian-taler', relationship: 'Both are extinct currencies, though one was physical metal and the other was a social agreement made of stone' },
    { slug: 'tanganyika', relationship: 'Both represent systems that functioned effectively but were swept away by colonial imposition of Western alternatives' },
  ],
  sources: [
    { title: 'The Island of Stone Money', author: 'Milton Friedman', year: 1991 },
    { title: 'His Majesty O\'Keefe', author: 'Lawrence Klingman and Gerald Green', year: 1950 },
    { title: 'The Ethnography of Micronesia', author: 'William Henry Furness III', year: 1910 },
  ],
};
