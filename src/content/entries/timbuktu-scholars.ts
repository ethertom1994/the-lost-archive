import type { Entry } from '../../types';

export const timbuktuScholars: Entry = {
  slug: 'timbuktu-scholars',
  name: 'The Scholarly Tradition of Timbuktu',
  tagline: 'A city of scholars and hundreds of thousands of manuscripts, scattered by invasion and buried by sand.',
  category: 'culture',
  subcategory: 'Lost Knowledge Repositories',
  lastKnownYear: 1591,
  lastKnownLocation: 'Timbuktu, Mali',
  coordinates: [16.77, -3.0],
  region: 'West Africa',
  status: 'extinct',
  cause: 'Moroccan invasion of 1591 destroyed institutional framework; scholars exiled, libraries scattered, manuscripts deteriorated',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The City of Books

By the fourteenth century, Timbuktu had become one of the great intellectual centers of the world. Situated at the intersection of trans-Saharan trade routes, the city attracted scholars from across West Africa, North Africa, and the broader Islamic world. The University of Sankore, founded in connection with the Sankore Mosque, operated as a network of scholars and private libraries rather than a single institution. At its height under the Songhai Empire in the fifteenth and sixteenth centuries, Timbuktu may have had twenty-five thousand students studying under leading scholars of theology, jurisprudence, astronomy, mathematics, medicine, and history.

The city's private libraries collectively held hundreds of thousands of manuscripts. These were written in Arabic and in local languages using Arabic script, on subjects ranging from Quranic commentary and Islamic law to astronomical observations, medical treatments, mathematics, and detailed historical chronicles. The scholar Ahmed Baba alone reportedly owned a personal library of over sixteen hundred volumes, and he described his collection as modest compared to others in the city.

## The Moroccan Catastrophe

In 1591, Sultan Ahmad al-Mansur of Morocco sent an army of four thousand soldiers equipped with firearms across the Sahara. The Songhai Empire, despite vastly outnumbering the invaders, fell to the technological advantage of gunpowder weapons at the Battle of Tondibi. The Moroccan forces occupied Timbuktu and dismantled its intellectual infrastructure. Ahmed Baba and other leading scholars were arrested and deported to Marrakesh in chains. Libraries were looted or neglected. The institutional framework that had supported centuries of scholarship was destroyed.

The manuscripts themselves did not all perish immediately. Many were hidden by families who buried them in the desert or sealed them in walls. But without institutional support, manuscripts deteriorated in the harsh Saharan climate. Termites, humidity during the brief rainy season, and simple neglect destroyed countless texts over the following centuries.

## What Survived and What Did Not

Hundreds of thousands of manuscripts are believed to have once existed in Timbuktu. Modern recovery efforts, including the Ahmed Baba Institute and private libraries like the Mamma Haidara collection, have cataloged roughly three hundred thousand surviving manuscripts. But these represent an unknown fraction of what once existed, and many are damaged or fragmentary. The living scholarly tradition, the oral commentaries, teaching methods, and intellectual debates that gave the manuscripts context, did not survive the Moroccan invasion.`,
  quickFacts: {
    'Peak Period': '15th-16th century under Songhai Empire',
    'University': 'Sankore, a network of scholars and private libraries',
    'Students': 'Up to 25,000 at the city\'s height',
    'Subjects': 'Theology, law, astronomy, mathematics, medicine, history',
    'Notable Scholar': 'Ahmed Baba (1556-1627), owned 1,600+ volumes',
    'Destroyed By': 'Moroccan invasion, Battle of Tondibi, 1591',
    'Surviving Manuscripts': '~300,000 cataloged, unknown fraction of original total',
  },
  connections: [
    { slug: 'house-of-wisdom', relationship: 'Both were great Islamic centers of learning destroyed by military invasion, severing centuries-long traditions of scholarship and translation' },
    { slug: 'nalanda', relationship: 'Three of history\'s greatest libraries destroyed by military conquest: Nalanda (1193), Baghdad (1258), Timbuktu (1591), each ending a unique intellectual tradition' },
  ],
  sources: [
    { title: 'Timbuktu: The Sahara\'s Fabled City of Gold', author: 'Marq de Villiers & Sheila Hirtle', year: 2007 },
    { title: 'The Bad-Ass Librarians of Timbuktu', author: 'Joshua Hammer', year: 2016 },
    { title: 'Timbuktu and the Songhay Empire', author: 'John Hunwick', year: 1999 },
  ],
};
