import type { Entry } from '../../types';

export const originalKabuki: Entry = {
  slug: 'original-kabuki',
  name: 'Early Kabuki Theater',
  tagline: 'Founded by a woman in 1603. Women were banned in 1629. Young men were banned in 1652. Each ban erased an entire art form.',
  category: 'culture',
  subcategory: 'Performing Arts',
  lastKnownYear: 1652,
  lastKnownLocation: 'Kyoto, Japan',
  coordinates: [35.0, 135.77],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Successive shogunate bans eliminated women (1629) and young male performers (1652), destroying two distinct performance traditions',
  imageUrl: undefined,
  body: `## The Woman Who Invented Kabuki

In 1603, a woman named Izumo no Okuni began performing a new style of dance-drama on the dry riverbed of the Kamo River in Kyoto. Okuni was likely a former shrine maiden from Izumo Grand Shrine, and her performances blended Buddhist prayer dances, popular songs, and comic sketches into something entirely original. She played male roles, including that of a samurai visiting the pleasure quarters, wearing a cross and a sword in deliberate provocation. The performances were wildly popular, and within a few years, troupes of women across Japan were performing in what became known as onna kabuki, or women's kabuki.

Onna kabuki was characterized by sensuality, improvisation, and direct engagement with audiences. The women performed dances, skits, and musical numbers that drew from folk traditions, Shinto ritual, and the emerging urban culture of early Edo-period Japan. The performances were provocative and transgressive: women playing men, commoners mocking samurai, sacred gestures repurposed for entertainment.

## The First Extinction

In 1629, the Tokugawa shogunate banned women from performing on stage, citing concerns about public morality and the disruption caused by rivalries over popular performers. The ban was total and enforced. Every female performer was removed from the stage. An entire art form, onna kabuki, with its specific movement vocabulary, musical traditions, and performance conventions, ceased to exist overnight.

What replaced it was wakashu kabuki, performed by adolescent and young adult males. These performers developed their own distinct style, emphasizing beauty, acrobatic skill, and a different kind of audience relationship. Wakashu kabuki was not a continuation of onna kabuki but a separate tradition that evolved its own conventions over two decades.

## The Second Extinction

In 1652, the shogunate banned wakashu kabuki for the same morality concerns. Another complete performance tradition was destroyed by decree. What emerged afterward, yaro kabuki performed by adult men, is the ancestor of modern kabuki. But it was a third iteration, shaped by restrictions rather than creative freedom. The adult male performers were required to shave their forelocks and adopt a more restrained style.

Modern kabuki is a magnificent art form, recognized by UNESCO as an Intangible Cultural Heritage. But it descends from the third version, not the first or second. Okuni's original vision, the female-led performances that gave kabuki its name and its founding energy, survives only in a handful of painted screens and secondhand written descriptions. The movement, the music, the improvisational spirit of onna kabuki are permanently lost.`,
  quickFacts: {
    'Founder': 'Izumo no Okuni (~1572-~1613)',
    'First Performance': '1603, Kamo River, Kyoto',
    'Onna Kabuki': 'Women\'s kabuki, 1603-1629',
    'Wakashu Kabuki': 'Youth kabuki, 1629-1652',
    'Yaro Kabuki': 'Adult male kabuki, 1652-present',
    'Women Banned': '1629, by Tokugawa shogunate',
    'Youth Banned': '1652, by Tokugawa shogunate',
    'What Survives': 'Painted screens, written accounts; no performance recordings',
  },
  connections: [
    { slug: 'castrato-voice', relationship: 'Both are performing arts traditions destroyed or transformed by authorities banning specific categories of performers from the stage' },
    { slug: 'feast-of-fools', relationship: 'Both were transgressive performance traditions suppressed by authorities who feared their social disruption' },
  ],
  sources: [
    { title: 'Kabuki: Five Classic Plays', author: 'James R. Brandon', year: 1975 },
    { title: 'Women Playing Men: Yue Opera and Social Change in Twentieth-Century Shanghai', author: 'Jin Jiang', year: 2009 },
    { title: 'A History of Japanese Theatre', author: 'Jonah Salz', year: 2016 },
  ],
};
