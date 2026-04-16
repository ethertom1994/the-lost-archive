import type { Entry } from '../../types';

export const timucuaLanguage: Entry = {
  slug: 'timucua-language',
  name: 'Timucua Language',
  tagline: 'Spoken by some 200,000 people across northern Florida and southern Georgia at first contact. A Franciscan friar named Francisco Pareja printed grammars and catechisms in it in the 1610s — the first indigenous-language books printed in what is now the United States. By about 1770 no one was left to speak it.',
  category: 'language',
  subcategory: 'Indigenous Languages',
  lastKnownYear: 1767,
  lastKnownLocation: 'Spanish Florida (mission communities around St. Augustine and the Apalachee frontier)',
  coordinates: [29.89, -81.31],
  region: 'North America',
  status: 'extinct',
  cause: 'Demographic collapse from European epidemics, 17th-century slave raids by Carolina settlers and their allies, and finally the evacuation of the last mission Timucua to Cuba with the Spanish withdrawal in 1763',
  body: `## A Language the Size of Florida

When the Spanish set up their first lasting settlement at St. Augustine in 1565, the indigenous population of northern Florida and southern Georgia spoke dialects of a single language that later linguists would call Timucua. Modern estimates of the pre-contact Timucua population range from 150,000 to 200,000 people, organised into a patchwork of chiefdoms that were politically independent but linguistically connected. The missionary Francisco Pareja, writing after decades among them, identified ten distinct dialects: Timucua proper, Potano, Itafi, Yufera, Mocama, Agua Salada, Tucururu, Agua Fresca, Acuera, and Oconi.

The language has no demonstrated relatives. It is one of several isolates that occupied the American South at contact, suggesting a linguistic landscape far older and far more diverse than the handful of surviving families would imply.

## Pareja's Press

Francisco Pareja, a Franciscan who arrived in St. Augustine in 1595 and spent 31 years in the Florida missions, did something nearly unparalleled in colonial America: he learned a Native American language well enough to publish books in it, and then he did. Between 1612 and 1628 Mexico City printers produced at least four Timucua titles under his name — a catechism (1612), a confessional manual (1613), a grammar and dictionary (*Arte y pronunciación en lengua timuquana y castellana*, 1614), and a larger catechism (1627). These are the earliest surviving books in any language indigenous to what would become the United States.

Each title used a system Pareja devised for writing Timucua with the Roman alphabet. The books were printed bilingually, Spanish facing Timucua, so that friars and Timucua catechists could teach from them in parallel. Copies survive today in the New York Historical Society, the John Carter Brown Library, and a handful of Spanish archives. They are the single most important source we have on the grammar and lexicon of the language.

## The Long Collapse

Timucua populations were already shrinking when Pareja printed his grammar. The waves of epidemic disease that had swept coastal and interior Florida from the 1520s on — measles, smallpox, influenza — killed in proportions that the missionaries themselves recorded with alarm. Then in the last decades of the seventeenth century, slave raids from English-colonised Carolina, often using Yamasee, Creek, and other allied raiders, tore through the Florida mission belt. By 1700 the Timucua population had been reduced to around 1,000.

The last century of the language was a slow retraction toward St. Augustine. Mission after mission was abandoned as their populations died or were captured. The final Timucua-speaking community, numbering perhaps a few dozen, was evacuated to Cuba in 1763 when Spain ceded Florida to Britain. The last Timucua individual identifiable by name, Juan Alonso Cabale, is recorded in Cuban church registers around 1767.

## A Language in a Library

Because Pareja printed and because his press's output survived, Timucua is unusually well-documented for a language that has no speakers. Modern linguists, led by scholars like Julian Granberry and George Broadwell, have used Pareja's grammar, dictionary, and catechisms, together with a collection of 17th-century Timucua-language letters preserved in Spanish archives, to reconstruct the phonology, verb system, and vocabulary in impressive detail. A Timucua speaker from 1615 could, in theory, read a grammar written in 2015 about her own language.

But no one can speak it back to her. After Juan Alonso Cabale's death in Cuba, the language existed only as printed pages. The 200,000 voices that once spoke it across Florida have not been heard in more than 250 years.`,
  quickFacts: {
    'Family': 'Language isolate',
    'Dialects': '10 (per Pareja, 1614)',
    'Estimated Pre-Contact Speakers': '150,000–200,000',
    'First Printed Books': '1612–1627 (Francisco Pareja)',
    'Last Known Speaker': 'Juan Alonso Cabale, Havana, c. 1767',
    'Primary Documentation': 'Pareja\'s grammar, dictionary, and catechisms; 17th-century Timucua letters',
  },
  connections: [
    { slug: 'natchez-language', relationship: 'Both were indigenous languages of the American South destroyed by colonial warfare and disease within the same era' },
    { slug: 'beothuk', relationship: 'Both indigenous peoples whose language became extinct through colonial contact, with only partial documentation surviving' },
    { slug: 'ayapaneco', relationship: 'Both are indigenous Mesoamerican-region isolates whose speakers were reduced to a handful by a combination of disease and marginalisation' },
    { slug: 'tasmanian-languages', relationship: 'Both were indigenous languages extinguished in the course of colonial expansion and now known only from early observer records' },
  ],
  sources: [
    { title: 'Arte y pronunciación en lengua timuquana y castellana', author: 'Francisco Pareja', year: 1614 },
    { title: 'A Grammar and Dictionary of the Timucua Language', author: 'Julian Granberry', year: 1993 },
    { title: 'Timucua language (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Timucua_language' },
    { title: 'Chi Mobi: Writing Timucua in Seventeenth Century Florida – Library of Congress', url: 'https://blogs.loc.gov/maps/2021/07/chi-mobi-writing-timucua-in-seventeenth-century-florida/' },
  ],
};
