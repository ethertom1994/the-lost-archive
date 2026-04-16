import type { Entry } from '../../types';

export const songMovableType: Entry = {
  slug: 'song-movable-type',
  name: 'Bi Sheng\'s Ceramic Movable Type',
  tagline: 'The world\'s first movable type printing system, invented four centuries before Gutenberg, lost within a generation.',
  category: 'technology',
  subcategory: 'Lost Manufacturing Techniques',
  lastKnownYear: '~1100',
  lastKnownLocation: 'Hangzhou, China',
  coordinates: [30.25, 120.17],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Specific ceramic compositions and firing techniques were not recorded and died with Bi Sheng\'s immediate successors',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The First Movable Type

Around 1040 CE, during the Northern Song dynasty, a commoner named Bi Sheng invented the world's first known movable type printing system. The polymath Shen Kuo documented the process in his 1088 work *Dream Pool Essays*: individual Chinese characters were carved into pieces of clay, hardened by firing, then arranged in an iron frame coated with a mixture of pine resin, wax, and paper ash. The frame was heated to melt the adhesive, a flat board was pressed across the top to level the type, and when the adhesive cooled the characters were locked in place for printing.

Shen Kuo noted that for commonly used characters, Bi Sheng kept multiple copies, sometimes twenty or more. The system was efficient for large print runs because the same characters could be rearranged endlessly. After printing, the frame was reheated to release the type for reuse. The entire process was, in conception, identical to what Gutenberg would develop in Germany four hundred years later.

## Lost in Transition

Shen Kuo's account is remarkably detailed about the general process but silent on the specifics that mattered most: the exact clay composition, the precise firing temperatures, the specific ratio of the resin-wax-ash adhesive, and the techniques for ensuring consistent character height across thousands of individual pieces. These were the details that made the difference between a working system and a failed one.

After Bi Sheng's death, his type pieces passed to Shen Kuo's nephews. Within a generation or two, the specific knowledge needed to produce new ceramic type of the same quality appears to have been lost. Later Chinese printers experimented with movable type in wood, tin, copper, and bronze, but ceramic movable type as Bi Sheng practiced it did not persist. The reasons likely include the enormous number of characters required for Chinese printing, which made woodblock printing more practical for most purposes, and the absence of any institutional framework to preserve the ceramic technique.

## The Gap in the Record

Modern attempts to reconstruct Bi Sheng's process from Shen Kuo's description have produced functional but imperfect results. The clay composition affects how finely characters can be carved, how they survive repeated heating cycles, and how evenly ink adheres to their surfaces. Without knowing what Bi Sheng knew, modern reconstructions are educated guesses.`,
  quickFacts: {
    'Inventor': 'Bi Sheng, a commoner',
    'Date': '~1040 CE, Northern Song dynasty',
    'Material': 'Fired clay (ceramic) characters in iron frames',
    'Adhesive': 'Pine resin, wax, and paper ash mixture',
    'Documented By': 'Shen Kuo, Dream Pool Essays (1088)',
    'Precedes Gutenberg By': '~400 years',
    'Lost': 'Within one to two generations of Bi Sheng\'s death',
    'Successors': 'Wood, tin, copper, and bronze movable type',
  },
  connections: [
    { slug: 'song-celadon', relationship: 'Both represent Song dynasty mastery of ceramic technology where specific material compositions and firing techniques were lost' },
    { slug: 'damascus-steel', relationship: 'Both are manufacturing techniques where the general process was known but the precise material specifications that made them work were lost' },
  ],
  sources: [
    { title: 'Dream Pool Essays (Mengxi Bitan)', author: 'Shen Kuo', year: 1088 },
    { title: 'Science and Civilisation in China, Vol. 5 Part 1: Paper and Printing', author: 'Tsien Tsuen-hsuin', year: 1985 },
    { title: 'The Printing Press as an Agent of Change', author: 'Elizabeth Eisenstein', year: 1979 },
  ],
};
