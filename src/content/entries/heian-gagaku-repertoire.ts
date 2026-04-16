import type { Entry } from '../../types';

export const heianGagakuRepertoire: Entry = {
  slug: 'heian-gagaku-repertoire',
  name: 'Heian Gagaku Solo Repertoire',
  tagline: 'The court music of Heian Japan catalogued hundreds of pieces by title, composer, and mode. Modern gagaku preserves a narrow ensemble repertoire. The solo music for most of the instruments is listed, described, and silent.',
  category: 'sound',
  subcategory: 'Lost Music',
  lastKnownYear: 1185,
  lastKnownLocation: 'Heian-kyo (Kyoto), Japan',
  coordinates: [35.01, 135.77],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Genpei War (1180-1185) disruption of court patronage; subsequent medieval reorganization of gagaku around ensemble pieces; attrition of solo-player lineages',
  imageUrl: undefined,
  body: `## The Imperial Court as a Conservatory

Gagaku, literally "elegant music," was the formal music of the Japanese imperial court, imported from Tang China and Korea in the seventh and eighth centuries and institutionalised under the Gagakuryo, the state Bureau of Music, in 701. For nearly five centuries, through the Nara and Heian periods, gagaku was a working musical establishment, employing hundreds of musicians organised by instrument family (strings, winds, percussion) and by the repertoire division between *togaku* (music in the Tang Chinese style), *komagaku* (Korean style), *kagura* (indigenous Shinto music), *saibara* (Japanese folk songs adapted for the court), and *roei* (sung Chinese poetry).

The Heian court tracked this music in detail. Treatises such as the *Taigensho* (compiled later, in 1512, by Toyohara Sumiaki, but drawing on earlier materials) catalogue gagaku pieces with notes on their origin, composer (often a specific named Tang or Korean master), mode, tempo category, dance affiliation, and circumstances of performance. Manuscript notations for individual instruments, particularly the *biwa* (lute) and *ryuteki* (flute) parts, were kept in family libraries of the hereditary music lineages (the Toyohara and Oga among others), with some fascicles copied into the imperial collection.

## Ensemble Music and Solo Music

Modern gagaku, still performed by the Imperial Household Agency's Music Department, preserves an ensemble repertoire of perhaps 100-150 active pieces, with considerable attrition even inside that. What is much more conspicuously gone is the solo literature. Each instrument in a Heian-period gagaku ensemble, the biwa, the *koto* (zither), the *sho* (mouth organ), the *hichiriki* (double-reed pipe), the *ryuteki*, the *shakubyoshi* (clappers), also had its own soloist's repertoire of unaccompanied pieces, often with dedicated treatises of fingerings, modal preludes (*choshi*), and meditative pieces that were not performed with the ensemble but as accompaniment to private imperial ceremonies or as transmitted teaching material.

These solo repertoires are recorded by title in Heian-period sources. Many pieces are described, some at length, in contemporary diaries and music treatises. The *Genji monogatari* (c. 1008) refers to specific koto and biwa solos by name in scenes where characters play them. The thirteenth-century *Kyokunsho* (1233, by Koma no Chikazane) and the later *Taigensho* preserve dozens of titles with modal and rhythmic notes. But the actual notation of the solos, preserved in manuscripts in the private collections of the musical lineages, was almost entirely lost over the ensuing centuries. Some fascicles burned in fires at the Toyohara and Oga family compounds. Some were dispersed during the Genpei War of 1180-1185 and the subsequent Kamakura period collapse of imperial patronage. Some were transmitted orally until the lineage simply died out, most catastrophically during the Onin War of 1467-1477 when much of Kyoto burned. The post-Heian reorganisations of gagaku, particularly in the Edo period, focused on the ensemble pieces and did not revive the solo literature.

## Names Without Sound

The result is peculiar. Scholars working on Heian music have titles and descriptions for solo pieces whose sound is irretrievable: the *biwa* piece *Ryusen* ("Flowing Spring"), supposedly Tang in origin; the *ryuteki* introductions to specific dance-suites that are listed in the *choshi* sequences but no longer played; the sho pieces that Heian sources single out as Japanese compositions distinct from the imported Chinese repertoire; the koto solos that Heian women wrote for each other in a musical practice that ran parallel to, but was not identical with, the court-sponsored tradition. Of the saibara songs (originally reportedly around sixty), only six are actively performed today. The original melodies of most Heian *imayo* are lost; later texts were fitted to surviving ensemble tunes.

What survives of gagaku is remarkable: it is the oldest continuously-performed court music in the world, and the ensemble works preserve a thousand-year-old sound. What does not survive is the solo and chamber music that filled in the edges of Heian court life, the quieter music that Heian aristocrats actually played to each other, for which the titles and descriptions now point at silence.`,
  quickFacts: {
    'Period': 'Nara and Heian, 710-1185',
    'Institutional Home': 'Gagakuryo, founded 701',
    'Surviving Active Ensemble Repertoire': 'c. 100-150 pieces',
    'Saibara Songs Surviving': '6 of c. 60',
    'Lost Category': 'Solo literature for biwa, koto, sho, and other instruments',
    'Key Disruption': 'Genpei War (1180-1185), Onin War (1467-1477)',
  },
  connections: [
    { slug: 'pre-equal-temperament', relationship: 'Both involve the loss of a distinct tuning-and-performance tradition surviving mainly in later reorganized forms' },
    { slug: 'greek-music-modes', relationship: 'Both are ancient musical systems for which titles and modal descriptions survive but most of the actual notated sound does not' },
    { slug: 'skaldic-oral-tradition', relationship: 'Both were courtly performance traditions where the performance practice died with the patronage system even when titles and texts were recorded' },
  ],
  sources: [
    { title: 'Music from the Tang Court (7 vols., 1981-2000)', author: 'Laurence Picken et al.', year: 1981 },
    { title: 'Early Japanese Music: A Guide', author: 'Steven G. Nelson', year: 2008 },
    { title: 'Gagaku - Wikipedia', url: 'https://en.wikipedia.org/wiki/Gagaku' },
    { title: 'Gagaku (Japanese Imperial Court Music and Dance) - The Imperial Household Agency', url: 'https://www.kunaicho.go.jp/e-culture/gagaku.html' },
  ],
};
