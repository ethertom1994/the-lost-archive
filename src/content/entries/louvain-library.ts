import type { Entry } from '../../types';

export const louvainLibrary: Entry = {
  slug: 'louvain-library',
  name: 'The Library of Louvain',
  tagline: 'One of the great medieval libraries of Europe, housing 230,000 books, 950 manuscripts, and 800 incunabula in a 14th-century cloth hall. On August 25, 1914, German troops set it on fire. The Allies rebuilt it. In 1940, it burned again.',
  category: 'place',
  subcategory: 'Destroyed Libraries',
  lastKnownYear: 1914,
  lastKnownLocation: 'Leuven (Louvain), Belgium',
  coordinates: [50.8798, 4.7005],
  region: 'Western Europe',
  status: 'extinct',
  cause: 'Deliberate burning by German troops during the Sack of Louvain in 1914; rebuilt collection destroyed again in 1940 German bombardment',
  body: `## Five Centuries of Manuscripts

The University of Louvain was founded in 1425 and for almost five centuries its library was one of the most important collections in northern Europe. By 1914 it occupied the Halles Universitaires, a 14th-century cloth hall that had been converted for university use in the 1630s. The building itself was a medieval landmark. The contents were older.

The pre-1914 collection included approximately 230,000 printed volumes, 950 manuscripts, and 800 incunabula (books printed before 1501). Among the manuscripts were substantial holdings in medieval theology, canon law, scholastic philosophy, early humanist Latin, and Flemish regional history. The incunabula collection was one of the most complete in Europe for 15th-century Low Countries printing, including unique copies and important editions of Erasmus, who had taught at Louvain. Beyond the ancient holdings, the library held several centuries of accumulated correspondence, lecture notes, and institutional records that existed in no other collection.

## August 25, 1914

On August 4, 1914, German forces invaded neutral Belgium on their way to France. On August 19, they occupied Louvain. For six days the city was quiet. On the evening of August 25, German troops claimed they had been fired on by civilian snipers (francs-tireurs), a claim later disputed by Belgian and international investigators. In retaliation, soldiers began setting fire to buildings, arresting and shooting residents, and expelling the rest of the population. The library was among the first buildings deliberately torched.

Eyewitnesses described soldiers carrying petroleum pastilles and straw through the cloth hall. The fire burned for roughly ten hours. Everything inside was destroyed. The 230,000 books, the 950 manuscripts, and the 800 incunabula, plus countless undocumented items, were reduced to ash. A portion of the manuscripts had been in the middle of a catalog audit when the fire began, so the full extent of the loss will never be known; some items were destroyed before their existence had been recorded.

The burning of the library became an international scandal. The phrase "rape of Belgium" dates from this incident, and German academics found themselves personally shamed by colleagues abroad. In 1925, an international fundraising appeal closed after collecting around 55,782 replacement volumes. The rebuilt library, financed substantially by American donors and inaugurated in 1928, was meant to be a monument to cultural restoration.

## May 1940

On May 16, 1940, during the German invasion of Belgium at the start of the Second World War, the rebuilt library was hit by artillery shelling and burned. The circumstances were disputed; German sources blamed British incendiary shells, British sources blamed German artillery. The result was not disputed. The replacement collection of approximately 900,000 volumes accumulated over the interwar years was destroyed, along with most of the reconstructed manuscript holdings.

## What Could Not Be Replaced

The 1914 donations and rebuilding could substitute printed editions, but medieval manuscripts are, by definition, unique. The 950 manuscripts lost in 1914 included many items for which no copies or microfilms existed. Work on canonical Flemish regional history, medieval medical texts preserved only at Louvain, and private correspondence of Renaissance humanists who had taught or studied at the university was simply erased.

The twice-destroyed library is frequently cited as a turning point in how Western powers thought about the deliberate targeting of cultural institutions in wartime. The 1954 Hague Convention for the Protection of Cultural Property, which explicitly extended protection to libraries and archives, was drafted with Louvain specifically in mind. It has not always been honored, but the principle existed because of what happened twice at Leuven in the first half of the twentieth century.`,
  quickFacts: {
    'Founded': '1425 (University of Louvain)',
    'Pre-1914 Holdings': '~230,000 books, 950 manuscripts, 800 incunabula',
    'First Destruction': 'August 25, 1914',
    'Rebuilt and Reopened': '1928',
    'Second Destruction': 'May 16, 1940',
    'Second Loss': '~900,000 volumes',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both were destroyed libraries that became archetypes in the European imagination for the cultural cost of war' },
    { slug: 'nalanda', relationship: 'Both were university libraries accumulated over centuries and destroyed by invading armies in deliberate acts' },
    { slug: 'house-of-wisdom', relationship: 'Both were multi-century scholarly collections deliberately destroyed, with losses whose full extent was never catalogued before destruction' },
  ],
  sources: [
    { title: 'Burning the Books: A History of the Deliberate Destruction of Knowledge', author: 'Richard Ovenden', year: 2020 },
    { title: 'Sack of Louvain', url: 'https://en.wikipedia.org/wiki/Sack_of_Louvain' },
    { title: 'Destruction of the University of Leuven Library', url: 'https://www.ww1.manchester.ac.uk/destruction-of-the-university-of-leuven-library/', author: 'University of Manchester, WW1 Centenary' },
    { title: 'One of Europe\'s Great Libraries Didn\'t Stand a Chance in Either of the World Wars', url: 'https://lithub.com/one-of-europes-great-libraries-didnt-stand-a-chance-in-either-of-the-world-wars/', author: 'Literary Hub' },
  ],
  keyDate: '1914-08-25',
  keyDateLabel: 'First destruction',
};
