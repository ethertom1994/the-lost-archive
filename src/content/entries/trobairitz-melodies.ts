import type { Entry } from '../../types';

export const trobairitzMelodies: Entry = {
  slug: 'trobairitz-melodies',
  name: 'The Trobairitz Melodies',
  tagline: 'In twelfth-century Occitania about twenty noblewomen composed songs of love, rivalry, and courtly argument that circulated under their own names. Around thirty of their texts survive. Exactly one of the melodies does.',
  category: 'sound',
  subcategory: 'Lost Music',
  lastKnownYear: 1270,
  lastKnownLocation: 'Occitania (modern southern France)',
  coordinates: [43.60, 1.44],
  region: 'Europe',
  status: 'extinct',
  cause: 'Manuscript losses during the Albigensian Crusade (1209-1229) and subsequent cultural collapse of Occitania; lyric tradition survived only in later text-only chansonniers',
  imageUrl: undefined,
  body: `## Women Who Signed Their Own Songs

Between roughly 1140 and 1270, in the courts of southern France, a loose network of women composed lyric poetry and music in the Old Occitan language. They were called *trobairitz* (the feminine of *trobador*), and the names of about twenty of them survive: Beatriz de Dia, Castelloza, Tibors, Maria de Ventadorn, Almucs de Castelnau, Azalais de Porcairagues, Iseut de Capio, Clara d'Anduza, Garsenda de Sabran, Lombarda, Alamanda de Castelnau, and others. Around thirty-two poems (the number is disputed because some attributions are contested) circulate under their names in the medieval chansonniers.

What they wrote was not pastiche of male troubadour verse. The trobairitz were aristocratic women writing inside the courtly love system but from a different angle; some pieces are direct exchanges (*tensos*) with male troubadours in which the woman answers back, often wittily; some are cansos (love-songs) addressed by a woman to a man; some, like Lombarda's, are elaborate metrical puzzles. In a cultural system that assumed the poet-lover was male and the object of desire was female, the trobairitz reversed the roles and made them work. They were literate, some were wealthy enough to employ scribes, and their names were openly attached to their work in the surviving manuscripts.

## One Melody

The Occitan lyric tradition was a musical tradition. Troubadour and trobairitz texts were composed to be sung. The rough numbers are striking: the male troubadours wrote perhaps 2,500 surviving texts, of which about 250-300 survive with notated melodies (the numbers vary by catalogue), for a music-to-text survival rate around ten percent. Among the trobairitz, the survival rate for melodies is one out of thirty-two.

The single surviving trobairitz melody is the *canso* *A chantar m'er de so qu'ieu no volria* ("I must sing of what I would rather not") by Beatriz, Comtessa de Dia, preserved with its tune in the chansonnier known as *Le manuscrit du Roi*, now in the Bibliotheque nationale de France as ms. fr. 844. The melody is unusual in surviving at all: most copies of trobairitz texts come from later text-only manuscripts compiled in Italy and Catalonia in the late thirteenth and fourteenth centuries, after the original performance culture had been disrupted.

## The Albigensian Silence

The disruption had a cause. From 1209 to 1229 the Albigensian Crusade, directed by the papacy against the Cathar heresy and executed by northern French nobility, devastated Occitania. The Count of Toulouse was defeated, the viscounty of Beziers and Carcassonne was conquered, and much of the local aristocracy was killed, displaced, or forced to convert. The Cathars were eliminated by the Inquisition over the following century. The courtly culture that had sustained the troubadours and trobairitz disintegrated. Some poets fled to Catalonia and northern Italy, where text-only copies of their work continued to be produced, but the original music-performance context, the patrons, the chapel-trained singers, the notated exemplars kept at the courts of Narbonne, Carcassonne, and Toulouse, was destroyed.

Because women writing in the elite courtly tradition depended even more heavily than men on the continuity of that tradition (they rarely had the option of taking their craft to clerical institutions), the loss fell disproportionately on trobairitz manuscripts. We have the names, many of the texts, and the knowledge that they sang, because later Italian compilers bothered to copy the words. We have almost none of the music. Everything we now play or record under the label of trobairitz melody beyond *A chantar m'er* is modern reconstruction based on metrical patterns, on likely contrafact relationships (setting a trobairitz text to a surviving male troubadour tune), and on educated guess. The actual sound of what Castelloza, Azalais, Lombarda, and the rest composed, in their own melodies, is gone.`,
  quickFacts: {
    'Period': 'c. 1140-1270',
    'Region': 'Occitania, southern France',
    'Named Trobairitz': 'About 20',
    'Surviving Texts': 'c. 32 poems',
    'Surviving Melodies': '1 (A chantar m\'er, Comtessa de Dia)',
    'Principal Catastrophe': 'Albigensian Crusade, 1209-1229',
  },
  connections: [
    { slug: 'cathar-texts', relationship: 'Both were casualties of the Albigensian Crusade and the cultural destruction of Occitania' },
    { slug: 'pre-equal-temperament', relationship: 'Both involve the loss of the actual performed sound of a medieval musical system, with only texts or theoretical descriptions surviving' },
    { slug: 'skaldic-oral-tradition', relationship: 'Both were aristocratic poetic traditions in which words survived into later copies but performance practice did not' },
  ],
  sources: [
    { title: 'The Voice of the Trobairitz: Perspectives on the Women Troubadours', author: 'William D. Paden (ed.)', year: 1989 },
    { title: 'Songs of the Women Troubadours', author: 'Matilda Tomaryn Bruckner, Laurie Shepard, and Sarah White (eds.)', year: 1995 },
    { title: 'Trobairitz - Wikipedia', url: 'https://en.wikipedia.org/wiki/Trobairitz' },
    { title: 'Troubadour - Wikipedia', url: 'https://en.wikipedia.org/wiki/Troubadour' },
  ],
};
