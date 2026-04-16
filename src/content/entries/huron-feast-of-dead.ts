import type { Entry } from '../../types';

export const huronFeastOfDead: Entry = {
  slug: 'huron-feast-of-dead',
  name: 'Huron-Wendat Feast of the Dead',
  tagline: 'Every ten to fifteen years, Wendat villages disinterred their dead, cleaned and wrapped the bones of hundreds of relatives, and reburied them together in a single communal ossuary pit. Jean de Brébeuf attended the last great one in 1636. By 1650 the Wendake confederacy had been shattered and the ceremony never happened in its old form again.',
  category: 'culture',
  subcategory: 'Indigenous Mortuary Tradition',
  lastKnownYear: 1650,
  lastKnownLocation: 'Wendake (Huronia), south of Georgian Bay, Ontario',
  coordinates: [44.74, -79.82],
  region: 'North America',
  status: 'extinct',
  cause: 'The Beaver Wars of 1648–1650, in which the Haudenosaunee (Iroquois) Confederacy destroyed the Wendat towns, combined with smallpox epidemics and Jesuit pressure against traditional mortuary rites, broke the political and demographic conditions the ceremony required',
  body: `## A Ceremony Held Once a Decade

Among the Wendat — known to the French as the Huron — the Feast of the Dead, or *Yandatsa*, was the central communal ritual. Every ten to fifteen years, depending on the lifespan of a village's bark-longhouses, an entire town would prepare to move to new ground, and before it did, the community gathered up its dead. The bones of everyone who had died since the last feast — sometimes hundreds of bodies — were disinterred from their platform burials, scraped clean by relatives, wrapped in fresh beaver robes, and carried in procession to a central ossuary pit near the new village site.

The feast lasted roughly ten days. The first eight were spent on the long journey in, during which villagers moved through the country with their bundled dead, meeting, exchanging gifts, and renewing alliances. On the final two days the bones were laid together in a large pit along with goods, tools, wampum, and the household items the dead would need. Soil was filled in over them. The souls, the Wendat held, now travelled together to the country of the dead in the west.

## Brébeuf's Invitation

The most detailed surviving account comes from the French Jesuit Jean de Brébeuf, who was invited to the 1636 Feast of the Dead held at Ossossané, the principal town of the Attignawantan Wendat. His report, included in the *Jesuit Relations* of 1636, describes the protocol in unusual depth: the preparation of the corpses, the oratory, the pit construction, the distribution of presents, and the cosmological rationale. Brébeuf, who would be killed by the Haudenosaunee in 1649 and later canonised, wrote with a mixture of horror, fascination, and grudging respect, and he transcribed fragments of speech and ritual vocabulary that have given later historians and archaeologists their primary reference points.

In 1947 and 1948 a Royal Ontario Museum team led by Kenneth Kidd excavated the ossuary pit at Ossossané, finding the bones of roughly 700 individuals laid down in exactly the pattern Brébeuf described. The site confirmed his account in startling detail.

## The End of the Conditions

The Feast of the Dead required a stable confederacy of villages, a shared territory, and a governing assumption that the community would persist long enough to perform the rite again. All three collapsed in the decade after Brébeuf's visit. Smallpox and other European diseases swept Wendake in the later 1630s, killing perhaps half the population. Jesuit missionaries campaigned against the ceremony, pressing converts to bury their dead individually in Christian cemeteries. And in 1648–1650, a sustained offensive by the Haudenosaunee Confederacy destroyed the Wendat towns, burned Ossossané and the other mission villages, and scattered the survivors to Quebec, to the Great Lakes, and to adoption among their attackers.

A few scattered feasts were attempted in the decades that followed, but in much reduced form, and never again with the ten-year rhythm or the communal ossuary scale of the pre-1650 ceremony. The Wendat nation survived, today centred in Wendake near Quebec City and in Oklahoma among the descendants of the Wyandot, but the Feast of the Dead as Brébeuf witnessed it — the disinterment, the procession, the single great pit — did not survive the century.

## What an Ossuary Holds

The Feast of the Dead was more than a funeral. It was a political ceremony, a diplomatic occasion that bound villages and nations through the commingled bones of their dead, a re-performance of kinship. Gabriel Sagard, a Récollet friar who observed an earlier version of the ceremony in the 1620s, quoted Wendat speakers explaining that the gathering of the bones was a lesson in living unity: as the bones of deceased relatives came together, so ought the living to live together. When the communal ossuary pits stopped being dug after 1650, a political technology for making and renewing a confederacy stopped with them.`,
  quickFacts: {
    'Nation': 'Wendat (Huron) Confederacy',
    'Interval': 'Once every 10–15 years per village',
    'Pit Size': '~700 individuals at Ossossané (1636)',
    'Primary Observer': 'Jean de Brébeuf, S.J. (1636)',
    'Ethnographic Record': 'Jesuit Relations, vols. 10 and 13',
    'Archaeological Confirmation': 'Ossossané ossuary, Ontario (excavated 1947–48)',
  },
  connections: [
    { slug: 'egyptian-mummification', relationship: 'Both are communal mortuary traditions that required ongoing social and institutional infrastructure to persist, and both were destroyed along with that infrastructure' },
    { slug: 'natchez-language', relationship: 'Both are cases where a specific communal ritual life was shattered within a generation of sustained European contact' },
    { slug: 'beothuk', relationship: 'Both belong to the broader catastrophe of northeastern indigenous societies destroyed by colonial violence and disease in the 17th century' },
    { slug: 'sin-eater', relationship: 'Both are mortuary practices tied to specific social roles and cosmologies that did not survive the upheavals of their era' },
  ],
  sources: [
    { title: 'The Jesuit Relations and Allied Documents, vol. 10', author: 'Jean de Brébeuf (ed. Reuben Gold Thwaites)', year: 1897 },
    { title: 'The Huron-Wendat Feast of the Dead: Indian-European Encounters in Early North America', author: 'Erik R. Seeman', year: 2011 },
    { title: 'Huron Feast of the Dead (Wikipedia)', url: 'https://en.wikipedia.org/wiki/The_Huron_Feast_of_the_Dead' },
    { title: 'The Huron-Wendat Feast of the Dead: Death, Religion, and Euro-Native Encounters', url: 'https://digpodcast.org/2017/11/12/death-huron-wendat-feast-dead/' },
  ],
};
