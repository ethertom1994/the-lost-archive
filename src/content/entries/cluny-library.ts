import type { Entry } from '../../types';

export const clunyLibrary: Entry = {
  slug: 'cluny-library',
  name: 'The Library of Cluny Abbey',
  tagline: 'For five hundred years Cluny was the most powerful monastery in Europe and one of the richest libraries in the world. Huguenots sacked it in 1562, revolutionaries burned most of the rest in 1790, and by 1823 the main church itself was a quarry.',
  category: 'culture',
  subcategory: 'Lost Libraries',
  lastKnownYear: 1500,
  lastKnownLocation: 'Cluny Abbey, Burgundy (modern France)',
  coordinates: [46.43, 4.66],
  region: 'Europe',
  status: 'extinct',
  cause: 'Huguenot sack (1562), French Revolutionary burnings (1790, 1793), and the Napoleonic sale of the abbey for demolition (1798-1823)',
  imageUrl: undefined,
  body: `## The Center of a Monastic Empire

Cluny Abbey was founded in 910 by Duke William I of Aquitaine on an unusual charter that placed it directly under papal protection and gave it absolute freedom from secular interference. Over the next two centuries it grew into the headquarters of a reform movement that spread across France, Italy, England, Germany, and Spain; by the twelfth century, roughly a thousand dependent houses were subordinate to the abbot of Cluny, whose abbey church (Cluny III) was the largest building in Latin Christendom until the sixteenth-century rebuilding of St Peter's in Rome.

A library on the scale of that network required correspondingly large holdings. Cluny's scriptorium produced and acquired manuscripts for five hundred years. A library catalogue prepared around 1158-1161 under the abbot Peter the Venerable lists roughly 570 volumes, a substantial figure by twelfth-century standards and about on par with the largest Benedictine libraries of the period. The collection continued to grow afterwards; late-medieval inventories, though less complete, indicate Cluny held on the order of a thousand manuscripts by around 1500, including unique copies of early Burgundian chronicles, the working papers of the major Cluniac reformers, a body of patristic and classical texts some of which are not known to have survived anywhere else, and the largest single holding of Cluniac liturgical books (the *Liber tramitis*, the customaries, the martyrologies and necrologies on which the whole order depended).

## Three Waves of Destruction

The first major loss came in 1562, during the French Wars of Religion. Huguenot forces captured Cluny and sacked the abbey, looting treasures and destroying or dispersing a substantial portion of the library. Contemporary accounts speak of manuscripts being used as wadding, scattered in the streets, and burned for lack of care. Some volumes were subsequently recovered; many were not. After 1562 the abbey rebuilt, but the collection was permanently diminished.

The second and larger loss came in the French Revolution. On 4 August 1790 a mob attacked the abbey, looted the treasury, and burned a portion of the library. The monastery was formally suppressed in the same year as part of the general dissolution of religious orders. In 1793, amid the wider revolutionary destruction, the remaining library was burned again, and the surviving archives were sent to the Cluny town hall. Some manuscripts from that post-1793 remnant were eventually transferred to the Bibliotheque Nationale in Paris; others disappeared into private hands.

The final loss was the building. Between 1798 and 1823 the abbey church itself was sold as national property, demolished, and its stones sold as a quarry. Cluny III, once the largest church in Europe, survived the Revolution but did not survive the Restoration. The only substantial standing fragment today is the south transept; the nave, choir, and most of the side chapels are gone. The medieval library buildings were demolished along with the rest.

## What Is Known

About 125 Cluniac manuscripts are identifiable today, scattered across the Bibliotheque Nationale, the Bibliotheque Municipale at Cluny itself, the Vatican, the Walters Art Museum in Baltimore, and a handful of other collections. This total represents roughly a tenth of the late-medieval holdings. The twelfth-century catalogue allows us to match some of the surviving manuscripts against their medieval library entries; many entries remain unmatched and probably describe manuscripts that no longer exist. Large portions of the Cluniac internal administrative records, the correspondence of the abbots, the chapter-meeting minutes, the detailed records of the roughly thousand dependent houses, survive only in fragments or summaries. The abbey that coordinated the largest monastic network in medieval Europe kept enormous written documentation of that activity, and most of it was burned at one of three points between 1562 and 1793.

The wider context is sobering: the historian Bernard Guenee estimated that the French Revolution saw the destruction of around 25,000 medieval manuscripts from suppressed religious houses across France. The Cluny fires were part of that larger event, and they fell on what had been, by library size and institutional importance, the single largest monastic collection in the country.`,
  quickFacts: {
    'Founded': '910 CE, by Duke William I of Aquitaine',
    '1158 Catalogue': 'c. 570 volumes',
    'Peak Holdings (c. 1500)': 'c. 1,000+ manuscripts (estimated)',
    'First Sack': '1562, Huguenots',
    'Second Destruction': '1790 and 1793, French Revolution',
    'Surviving Identifiable Manuscripts': 'c. 125',
  },
  connections: [
    { slug: 'bobbio-library', relationship: 'Both were major medieval European monastic libraries gradually dispersed and destroyed over multiple catastrophes rather than a single event' },
    { slug: 'louvain-library', relationship: 'Both lost thousands of medieval manuscripts in a single catastrophic destruction, along with the institutional memory that went with them' },
    { slug: 'cathar-texts', relationship: 'Both were casualties of religious violence in the French kingdom, centuries apart, that targeted the written holdings of specific institutions' },
  ],
  sources: [
    { title: 'Recueil des chartes de l\'abbaye de Cluny (6 vols., 1876-1903)', author: 'A. Bernard and A. Bruel (eds.)', year: 1876 },
    { title: 'The Cluniacs and the Gregorian Reform', author: 'H. E. J. Cowdrey', year: 1970 },
    { title: 'Cluny Abbey - Wikipedia', url: 'https://en.wikipedia.org/wiki/Cluny_Abbey' },
    { title: 'Archives Lost: The French Revolution and the Destruction of Medieval French Manuscripts', url: 'https://ageofrevolutions.com/2019/04/29/archives-lost-the-french-revolution-and-the-destruction-of-medieval-french-manuscripts/' },
  ],
};
