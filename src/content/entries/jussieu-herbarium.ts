import type { Entry } from '../../types';

export const jussieuHerbarium: Entry = {
  slug: 'jussieu-herbarium',
  name: 'Joseph de Jussieu\'s South American Herbarium',
  tagline: 'A French botanist who spent 36 years walking the Andes and the Amazon headwaters collecting plants. His notes, drawings, and much of his herbarium were stolen in Buenos Aires or destroyed in Lima. He returned to Paris in 1771 with his mind broken and almost nothing to show for a lifetime in the field.',
  category: 'flora',
  subcategory: 'Botanical Manuscripts and Specimens',
  lastKnownYear: 1771,
  lastKnownLocation: 'Lima, Viceroyalty of Peru',
  coordinates: [-12.05, -77.04],
  region: 'South America',
  status: 'extinct',
  cause: 'Shipwreck loss of specimens in transit, theft of Jussieu\'s baggage in Buenos Aires in 1770, and the destruction of the manuscripts he had left in Lima for safekeeping after the death of the friend to whom he had entrusted them',
  body: `## A Very Long Expedition

Joseph de Jussieu was the youngest of the three Jussieu botanist brothers who dominated French plant science in the eighteenth century. In 1735 he accepted a post as naturalist and physician on the French Geodesic Mission, a joint Franco-Spanish expedition sent by the Académie des Sciences to the Viceroyalty of Peru to measure an arc of the meridian near the equator. The survey was supposed to take three or four years. For Jussieu it took thirty-six.

When the geodesic work was completed in 1743, most of the expedition went home. Jussieu stayed. He had fallen into debt, his health was already poor, and he had started botanising across the Andes and down the eastern slope into the Amazon basin. Over the following decades he collected in the province of Quito, in what is now Ecuador; in Peru from the coast to the cordillera; and in Bolivia as far as the mining city of Potosí. He worked largely alone, supporting himself by practising medicine among the mining towns and religious missions.

## What Was Collected

Jussieu's extant letters and the scattered specimens that survive in European herbaria hint at the scale of what he gathered. He sent home seeds and descriptions of *Heliotropium peruvianum*, the Peruvian heliotrope that became a European garden favourite under the name "cherry pie." He documented several species of the cinchona tree, source of the quinine bark on which 19th-century antimalarial medicine would depend, along with indigenous Quechua knowledge of its uses. He drew specimens of orchids including the genus *Gongora*, and collected nasturtiums, lupins, and hundreds of Andean endemics.

The plan was that this material would eventually be written up as a French flora of Peru that would rival anything Linnaeus was producing in Europe. But Jussieu never finished a manuscript for publication. His method was accumulation rather than synthesis, and as the years ran long, the writing up was put off again and again.

## The Losses

The losses came in a sequence of separate disasters. Early in his time in South America, a trunk of dried specimens he had prepared for shipment to Paris was loaded onto a ship and lost at sea. Later specimens sent via the Atlantic trade reached Paris in fragmentary condition, often without the labels that matched them to his notes. A larger portion of his herbarium and manuscripts was held back in Lima, intended to travel with him when he finally returned.

Then in 1770, as Jussieu was preparing to leave for Spain, the bulk of his personal baggage — containing, according to family tradition, many of his drawings and a substantial share of his manuscript notes — was stolen in Buenos Aires. What remained in Lima was entrusted to a friend. That friend died not long after, and the surviving notes were, according to the 19th-century catholic encyclopaedia's account derived from his nephew Antoine-Laurent, destroyed in Lima shortly afterwards.

Jussieu reached Paris in July 1771. He was 67, broken in health, and confused in mind. He published nothing in the years before his death in 1779. His nephew Antoine-Laurent, who inherited the surviving fragments, later tried to reconstruct his uncle's work by cross-referencing the surviving specimens against the collections of Joseph Dombey, Ruiz, and Pavón. The reconstruction was partial. Of Jussieu's own writings, only letters and a handful of botanical memoranda are reliably known to survive.

## The Shape of a Negative

The loss of Jussieu's herbarium is a catalogue of absences rather than of objects. We know roughly where he walked, what mountains he crossed, what provinces he surveyed, and for some plants we have his descriptions at second hand in letters. What we do not have is the 36-year record itself: the drawings at the bedside of sick miners, the notes on Quechua plant names, the descriptions of Andean endemics that no European botanist would see again for fifty or a hundred years. A significant slice of what it was possible to learn about Andean botany in the mid-eighteenth century passed through Joseph de Jussieu's notebooks and is now nowhere.`,
  quickFacts: {
    'Botanist': 'Joseph de Jussieu (1704–1779)',
    'Years in South America': '36 (1735–1771)',
    'Areas Collected': 'Quito, coastal and Andean Peru, Bolivia',
    'Main Loss Events': 'Shipwreck; 1770 theft in Buenos Aires; loss of Lima manuscripts after death of custodian',
    'Recovery Attempt': 'Antoine-Laurent de Jussieu (nephew), 1770s–1780s',
    'Publications by Jussieu Himself': 'None complete',
  },
  connections: [
    { slug: 'saint-helena-ebony', relationship: 'Both represent 18th-century botanical knowledge about endemic plants that was partly or wholly lost before it reached European publication' },
    { slug: 'amazonian-cities', relationship: 'Both are cases where European observers in South America recorded information that was later lost, leaving only fragmentary traces' },
    { slug: 'silphium', relationship: 'Both are examples of medicinal-plant knowledge associated with a specific region whose full botanical record did not survive' },
    { slug: 'franklinia', relationship: 'Both are 18th-century stories of botanists racing to collect plants from landscapes under pressure, with much of the work never fully preserved' },
  ],
  sources: [
    { title: 'Joseph de Jussieu (1704-1779), Global Plants on JSTOR', url: 'https://plants.jstor.org/stable/10.5555/al.ap.person.bm000004178' },
    { title: 'Botanical Expedition to the Viceroyalty of Peru (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Botanical_Expedition_to_the_Viceroyalty_of_Peru' },
    { title: 'A silent herbarium? Joseph de Jussieu\'s botanical collections from South America (1735–1770)', url: 'https://www.euppublishing.com/doi/10.3366/anh.2025.0968' },
    { title: 'Catholic Encyclopedia: De Jussieu', url: 'https://www.newadvent.org/cathen/08569a.htm' },
  ],
};
