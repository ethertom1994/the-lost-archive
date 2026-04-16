import type { Entry } from '../../types';

export const houseOfWisdom: Entry = {
  slug: 'house-of-wisdom',
  name: 'The House of Wisdom',
  tagline: 'When the Mongols sacked Baghdad, the Tigris ran black with ink for days.',
  category: 'culture',
  subcategory: 'Lost Knowledge Repositories',
  lastKnownYear: 1258,
  lastKnownLocation: 'Baghdad, Iraq',
  coordinates: [33.34, 44.38],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Destroyed during the Mongol siege of Baghdad in 1258; manuscripts dumped into the Tigris River',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Center of the World's Knowledge

The Bayt al-Hikma, the House of Wisdom, was established in Baghdad during the early Abbasid Caliphate, most likely under Caliph Harun al-Rashid around 786 CE, and greatly expanded by his son al-Ma'mun in the 830s. It was not merely a library. It was the institutional engine of the Translation Movement, one of the most consequential intellectual projects in human history: the systematic translation of Greek, Persian, Indian, and Syriac scientific and philosophical texts into Arabic.

Scholars at the House of Wisdom translated and preserved works by Aristotle, Plato, Hippocrates, Euclid, Ptolemy, and Galen, among many others. But they did not simply translate. They expanded on what they found. Al-Khwarizmi developed algebra there. The Banu Musa brothers wrote treatises on mechanics and geometry. Hunayn ibn Ishaq translated over a hundred medical texts and added his own commentaries. The institution attracted scholars from across the Islamic world and beyond, including Christians, Jews, Zoroastrians, and Hindus.

## The Fall of Baghdad

On February 10, 1258, the Mongol army under Hulagu Khan breached the walls of Baghdad after a siege. What followed was one of history's most devastating cultural destructions. The city was sacked for weeks. Contemporary accounts describe the Tigris River running black with the ink of countless manuscripts hurled into the water. Some sources claim the river also ran red with the blood of scholars.

The scale of what was lost is difficult to comprehend. The House of Wisdom and Baghdad's other libraries held hundreds of thousands of manuscripts. These included not only the Arabic translations that had preserved Greek knowledge through Europe's Dark Ages, but also original works of Islamic science, mathematics, astronomy, medicine, and philosophy that existed nowhere else. Works referenced by later scholars have never been found.

## The Broken Transmission

The destruction of Baghdad severed a transmission line of knowledge that had connected the ancient world to the medieval. Many Greek texts survive today only because the House of Wisdom had translated them into Arabic, and those Arabic versions were later translated into Latin in Iberia and Sicily. But for every work that completed that chain of translation, others were lost at Baghdad. We know of them only through citations in surviving texts, brief mentions of treatises and discoveries that can no longer be read. The House of Wisdom did not just store knowledge. It was actively creating it. The Mongol invasion did not merely burn a library. It killed the scholars, scattered the students, and ended the institutional culture that had made Baghdad the intellectual capital of the world.`,
  quickFacts: {
    'Founded': '~786 CE under Harun al-Rashid, expanded ~830s by al-Ma\'mun',
    'Purpose': 'Translation, scholarship, and original scientific research',
    'Key Scholars': 'Al-Khwarizmi, Hunayn ibn Ishaq, the Banu Musa brothers',
    'Translation Movement': 'Greek, Persian, Indian, and Syriac texts into Arabic',
    'Destroyed': 'February 1258, Mongol siege under Hulagu Khan',
    'Reported Losses': 'Hundreds of thousands of manuscripts',
    'Legacy': 'Many Greek texts survive only through Arabic translations made here',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent catastrophic losses of accumulated knowledge that severed intellectual transmission lines spanning centuries' },
    { slug: 'nalanda', relationship: 'Sister institutions destroyed by military conquest within decades of each other, both ending centuries-long scholarly traditions' },
  ],
  sources: [
    { title: 'The House of Wisdom: How Arabic Science Saved Ancient Knowledge and Gave Us the Renaissance', author: 'Jim Al-Khalili', year: 2011 },
    { title: 'The House of Wisdom: How the Arabs Transformed Western Civilization', author: 'Jonathan Lyons', year: 2009 },
    { title: 'Lost Enlightenment: Central Asia\'s Golden Age from the Arab Conquest to Tamerlane', author: 'S. Frederick Starr', year: 2013 },
  ],
};
