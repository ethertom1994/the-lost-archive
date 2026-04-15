import type { Entry } from '../../types';

export const shuadit: Entry = {
  slug: 'shuadit',
  name: 'Shuadit',
  tagline: 'The French Revolution freed the Jews of Provence and killed their language. The last speaker was recorded singing in it in 1977.',
  category: 'language',
  subcategory: 'Jewish Languages',
  lastKnownYear: 1977,
  lastKnownLocation: 'Carpentras, Provence, France',
  coordinates: [44.055, 5.049],
  region: 'Europe',
  status: 'extinct',
  cause: 'Emancipation following the French Revolution dispersed the closed Jewish communities of the Comtat Venaissin, ending the conditions that sustained the language',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Freed to Death

Shuadit, also called Judeo-Provencal or Judeo-Comtadin, was a Jewish language spoken in the communities of the Comtat Venaissin, the small papal territory in southeastern France that included the towns of Carpentras, Avignon, Cavaillon, and L'Isle-sur-la-Sorgue. It had been spoken there since at least the eleventh century, one of the oldest Jewish languages in Western Europe.

Its death was caused by liberation. When the French Revolution emancipated the Jews of France in 1791, it dissolved the legal and social boundaries that had kept the Comtat Venaissin communities intact. Jews who had been confined to specific quarters and towns were suddenly free to move, to work in any profession, to assimilate into broader French society. Within a few generations, they did exactly that. Shuadit, which had survived centuries of persecution, could not survive freedom.

## A Language Between Languages

Shuadit was structurally a variety of Occitan, the Romance language of southern France, but heavily influenced by Hebrew, Aramaic, and to a lesser extent early French. It used Hebrew script for written texts, though the underlying grammar and most vocabulary were Provencal. This made it part of a global pattern of Jewish linguistic adaptation: communities adopted the local language, infused it with Hebrew and Aramaic elements, wrote it in Hebrew characters, and transmitted it internally. Yiddish, Ladino, Judeo-Arabic, and Judeo-Persian all followed the same pattern.

What made Shuadit distinctive was its age and its isolation. The Jewish communities of the Comtat Venaissin had been relatively stable for centuries, protected by papal authority even as Jews elsewhere in France faced periodic expulsion. This stability allowed Shuadit to develop independently, accumulating layers of archaic Provencal vocabulary that had disappeared from the surrounding language.

## The Last Speaker Sings

The last known speaker of Shuadit was Armand Lunel, a novelist, playwright, and professor born in Aix-en-Provence in 1892. Lunel grew up hearing Shuadit from elderly relatives and community members in Carpentras. He was not a native speaker in the usual sense; by his generation, the language had already receded to the memories of the old. But he retained enough to speak, and notably to sing, in it.

In 1977, Lunel was recorded performing Shuadit songs, liturgical and folk melodies that preserved the sound of a language that had otherwise gone silent. The recordings, made near the end of his life (he died in 1977), capture a voice singing in a language whose last living community had dispersed nearly two centuries earlier. The songs survived longer than the conversations.

## The Paradox of Emancipation

Shuadit presents an uncomfortable case study in language death. Most languages die under pressure: colonization, forced assimilation, economic marginalization. Shuadit died because its speakers got what they wanted. Emancipation was unambiguously good for the Jews of Provence. It ended centuries of legal discrimination and social confinement. But the same walls that imprisoned the community also incubated its language. When the walls came down, the language walked out and dissolved into French.

No one chose to kill Shuadit. No policy targeted it. No school punished children for speaking it. It simply became unnecessary, and then forgotten, and then lost.`,
  quickFacts: {
    'Also Known As': 'Judeo-Provencal, Judeo-Comtadin',
    'Language Family': 'Romance (Occitan-based with Hebrew/Aramaic elements)',
    'Script': 'Hebrew',
    'Region': 'Comtat Venaissin (Carpentras, Avignon, Cavaillon, L\'Isle-sur-la-Sorgue)',
    'Spoken Since': 'At least the 11th century',
    'Cause of Death': 'Jewish emancipation during the French Revolution (1791)',
    'Last Speaker': 'Armand Lunel (1892-1977)',
    'Last Recording': '1977 (Lunel singing Shuadit songs)',
  },
  connections: [
    { slug: 'dalmatian-language', relationship: 'Both were Romance languages that died in the modern era, each the last of its kind in its region' },
    { slug: 'eyak-language', relationship: 'Both died with a single last speaker who spent their final years trying to preserve what they carried' },
    { slug: 'mvsl', relationship: 'Both were community languages sustained by the very isolation that defined their speakers\' lives' },
  ],
  sources: [
    { title: 'The Languages of the Jews: A Sociolinguistic History', author: 'Bernard Spolsky', year: 2014 },
    { title: 'Judeo-Provencal', author: 'Cyril Aslanov', year: 2001 },
    { title: 'Les Juifs du Pape en Provence', author: 'Armand Lunel', year: 1975 },
    { title: 'Endangered Languages of Europe', author: 'Matthias Brenzinger (ed.)', year: 2007 },
  ],
};
