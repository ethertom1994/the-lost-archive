import type { Entry } from '../../types';

export const kilwaChronicle: Entry = {
  slug: 'kilwa-chronicle',
  name: 'The Kilwa Chronicle',
  tagline: 'For six centuries a Swahili sultanate on the East African coast ran the medieval gold trade and kept court chronicles in Arabic. In 1505 a Portuguese fleet sacked the city. What survives of the local written record is a single mangled later copy.',
  category: 'culture',
  subcategory: 'Lost Chronicles',
  lastKnownYear: 1505,
  lastKnownLocation: 'Kilwa Kisiwani, Kilwa Sultanate (modern Tanzania)',
  coordinates: [-8.96, 39.50],
  region: 'East Africa',
  status: 'extinct',
  cause: 'Portuguese sack of Kilwa in July 1505; records burned, palace looted',
  imageUrl: undefined,
  body: `## The City on the Coral

For most of the Middle Ages the Indian Ocean's richest gold trade did not run through Cairo or Hormuz but through a small coral-stone island near the southern coast of what is now Tanzania. Kilwa Kisiwani sat at the mouth of the best trade winds reaching south to the gold fields of the Zimbabwe plateau, and from the eleventh century onwards Swahili merchants there intermediated between Great Zimbabwe's miners in the interior and Arab, Persian, Indian, and eventually Chinese buyers. The Moroccan traveller Ibn Battuta visited Kilwa in 1331 and called it one of the most beautiful and well-built cities in the world. The Great Mosque of Kilwa, whose coral-and-lime roof is the largest pre-modern dome south of the Sahara, still stands in ruins.

Kilwa had a court, a chancery, and, by all indications, a tradition of literate record-keeping in Arabic going back to the eleventh century. Sultans there dated their reigns, stamped their coins, issued decrees, and commissioned genealogies linking themselves to Persia. A royal chronicle kept at the palace recorded successions, disputes, and the history of the Mahdali dynasty from its arrival in the mid-fourteenth century. Portuguese captains who saw these records in 1505 referred to them as books, plural.

## July 1505

Vasco da Gama had stopped at Kilwa in 1502 and extracted a tribute treaty from the sultan Ibrahim Sulaiman. When the tribute was not paid, a fleet under Dom Francisco de Almeida arrived on 24 July 1505. The Portuguese stormed the island with two hundred soldiers, deposed the sultan, installed a puppet, and began a systematic looting of the palace. They built a fort from Kilwa's own stones, held it for about seven years, and destroyed the fort when they left in 1512. Between 1505 and 1512 the court archive disappeared.

Two reconstructions of the Kilwa court history survive. One is the *Kitab al-Sulwa fi Akhbar Kilwa* (The Book of Consolation on the History of Kilwa), an Arabic chronicle that survives in a single incomplete nineteenth-century copy held in the British Library, made in 1877 on the order of the Zanzibari sultan Barghash ibn Said; the manuscript breaks off in the mid-sixteenth century and its earlier sections compress long reigns into a line or two. The other is a Portuguese paraphrase included in Joao de Barros's *Decadas da Asia* (c. 1552), apparently based on a version of the chronicle that was read to Portuguese officials during the occupation and then lost. The two texts disagree on dates, lineages, and even on the identity of some sultans. They preserve enough to show that a serious court chronicle once existed; they are not themselves that chronicle.

## The Shape of the Loss

Swahili civilisation was literate in Arabic across the whole coast, from Mogadishu to Sofala, for at least five centuries before the Portuguese arrived. Kilwa was one of its largest centres. The 1505 sack destroyed the palace records there; other Swahili cities lost their records separately to Portuguese and later Omani raids over the next two hundred years. The cumulative result is that for an urban, Islamic, commercial society that kept formal written archives, the documentary record we have today consists almost entirely of coins, inscriptions on buildings, and a handful of later reconstructed chronicles.

What we do not have is the diplomatic correspondence between Kilwa and the sultans of Oman, Yemen, Mamluk Egypt, and Vijayanagara in India, despite references in external sources confirming it existed. We do not have the accounts books for a trade that moved between a ton and several tons of gold per year at peak. We do not have the legal rulings, the land records, the Arabic poetry composed at the Kilwa court, or the lists of the pilgrim caravans the sultans sent to Mecca. A medieval African state with a functioning archive was erased as an archive, not as a state; its buildings still stand, and the coins keep turning up in the sand.`,
  quickFacts: {
    'Location': 'Kilwa Kisiwani, modern Tanzania',
    'Height of Power': 'c. 1300-1500 CE',
    'Trade Controlled': 'Gold from the Zimbabwe plateau',
    'Sack': '24 July 1505, by Francisco de Almeida',
    'Archive Status': 'Original court records destroyed 1505-1512',
    'Surviving Chronicle': 'Kitab al-Sulwa, single 1877 copy, incomplete',
  },
  connections: [
    { slug: 'great-zimbabwe-masonry', relationship: 'Kilwa was the coastal outlet for the gold trade that funded Great Zimbabwe; the two economies rose and declined in tandem' },
    { slug: 'timbuktu-scholars', relationship: 'Both were Islamic African cities whose Arabic manuscript traditions were largely destroyed in a single destructive episode' },
    { slug: 'benin-bronzes', relationship: 'Both had sophisticated African court records that were scattered or destroyed by early European military expeditions' },
  ],
  sources: [
    { title: 'Kilwa: A History', author: 'Mark Horton and John Middleton', year: 2000 },
    { title: 'Sack of Kilwa - Wikipedia', url: 'https://en.wikipedia.org/wiki/Sack_of_Kilwa' },
    { title: 'Writing in Africa: The Kilwa Chronicle and other Sixteenth-Century Portuguese Testimonies', author: 'Adrien Delmas', year: 2017, url: 'https://www.researchgate.net/publication/319648520' },
    { title: 'Kilwa Sultanate - Wikipedia', url: 'https://en.wikipedia.org/wiki/Kilwa_Sultanate' },
  ],
};
