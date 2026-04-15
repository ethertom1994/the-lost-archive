import type { Entry } from '../../types';

export const keralaCalculus: Entry = {
  slug: 'kerala-calculus',
  name: 'Kerala School Calculus',
  tagline: 'An Indian mathematician discovered infinite series 250 years before Newton — and there is circumstantial evidence Europe may have learned from his work.',
  category: 'technology',
  subcategory: 'Mathematics',
  lastKnownYear: '~1600',
  lastKnownLocation: 'Kerala, India',
  coordinates: [10.85, 76.27],
  region: 'South Asia',
  status: 'extinct',
  cause: 'Portuguese colonial disruption of Kerala scholarly networks; manuscripts remained untranslated and unknown to Western historians until the 20th century',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Mathematician History Forgot

Around 1350, in the village of Sangamagrama near modern-day Cochin, a mathematician named Madhava made a series of discoveries that should have changed the world. He derived infinite series expansions for sine, cosine, and arctangent. He developed methods for computing pi to arbitrary precision. He formulated the mathematical foundations of what would later be called calculus — the representation of smooth curves as infinite sums of infinitesimal quantities.

He did this roughly 250 years before Isaac Newton and Gottfried Wilhelm Leibniz, the two Europeans traditionally credited with inventing calculus.

## The Kerala School

Madhava was not working in isolation. He founded what historians now call the Kerala School of Astronomy and Mathematics, a lineage of scholars that continued productive work for over two centuries. His students and intellectual descendants — Parameshvara, Nilakantha Somayaji, Jyesthadeva, and others — extended his results, proved his conjectures, and compiled comprehensive treatises. Jyesthadeva's Yuktibhasa, written around 1530, is considered the first calculus textbook in any language, presenting rigorous derivations of infinite series, integration techniques, and convergence tests.

The Kerala School's work was not approximate or intuitive. These were formal mathematical results with proofs. Nilakantha's Tantrasamgraha presented a heliocentric model of the solar system and used infinite series to compute planetary positions with remarkable accuracy. The mathematical sophistication matched or exceeded anything produced in Europe before the seventeenth century.

## The Transmission Question

The most contentious aspect of the Kerala School's legacy is whether its results reached Europe. When the Portuguese established a colonial presence in Kerala beginning in 1498, Jesuit missionaries arrived shortly after. These Jesuits were known to collect and transmit scientific knowledge from Asia to European scholars. Kerala's mathematical manuscripts existed in the same region, during the same period, as an active Jesuit intellectual network with direct connections to European centers of learning.

Historians George Gheverghese Joseph and Dennis Almeida have documented what they call "strong circumstantial evidence" of transmission. They identified specific Jesuit figures in Kerala who had access to mathematical manuscripts and connections to European mathematicians. However, no definitive "smoking gun" document proving direct transmission has been found, and the question remains hotly debated.

## Rediscovery

The Kerala School's work was first brought to Western scholarly attention by Charles Matthew Whish in 1834, but his paper was largely ignored. Serious study did not begin until the mid-twentieth century, when Indian historians of mathematics began systematic investigations of surviving manuscripts. By then, the narrative of calculus as a purely European invention was so entrenched that integration of the Kerala School's contributions into mainstream history proved slow and contentious.

Whether or not transmission occurred, the Kerala School demonstrates that calculus was not an inevitable product of European intellectual culture. It emerged independently in southern India, flourished for two centuries, and was then forgotten — its manuscripts unread, its priority unclaimed, its mathematicians written out of a history they helped create.`,
  quickFacts: {
    'Founder': 'Madhava of Sangamagrama (~1340-1425)',
    'Key Text': 'Yuktibhasa by Jyesthadeva (~1530)',
    'Duration': 'Active ~1350-1600',
    'Key Discoveries': 'Infinite series for sine, cosine, pi, arctangent',
    'Priority Over Europe': '~250 years before Newton/Leibniz',
    'Transmission Debate': 'Jesuit missionaries present in Kerala during same period',
    'Western Recognition': 'Charles Matthew Whish, 1834 (largely ignored)',
  },
  connections: [
    { slug: 'babylonian-calculus', relationship: 'Both demonstrate independent invention of calculus concepts centuries before European credit, revealing a pattern of mathematical knowledge invented and lost' },
    { slug: 'nalanda', relationship: 'Both represent major Indian intellectual traditions whose contributions were disrupted by external forces and overlooked by Western scholarship' },
    { slug: 'library-of-alexandria', relationship: 'Both are examples of advanced mathematical knowledge that was lost or ignored, requiring centuries of rediscovery' },
  ],
  sources: [
    { title: 'The Crest of the Peacock: Non-European Roots of Mathematics', author: 'George Gheverghese Joseph', year: 2011 },
    { title: 'A Passage to Infinity: Medieval Indian Mathematics from Kerala and Its Impact', author: 'George Gheverghese Joseph', year: 2009 },
    { title: 'The Mathematics of Egypt, Mesopotamia, China, India, and Islam', author: 'Victor J. Katz', year: 2007 },
  ],
  relatedMedia: [
    { type: 'book', title: 'The Crest of the Peacock: Non-European Roots of Mathematics', url: 'https://press.princeton.edu/books/paperback/9780691135267/the-crest-of-the-peacock', description: 'Comprehensive account of non-European mathematical traditions including the Kerala School' },
  ],
};
