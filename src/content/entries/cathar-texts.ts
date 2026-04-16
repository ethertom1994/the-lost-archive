import type { Entry } from '../../types';

export const catharTexts: Entry = {
  slug: 'cathar-texts',
  name: 'Cathar Religious Texts',
  tagline: 'An entire faith\'s scripture erased so thoroughly that we know it mainly from the words of its destroyers.',
  category: 'culture',
  subcategory: 'Destroyed Religious Traditions',
  lastKnownYear: 1321,
  lastKnownLocation: 'Languedoc, France',
  coordinates: [42.88, 1.83],
  region: 'Western Europe',
  status: 'extinct',
  cause: 'Albigensian Crusade (1209-1229) and subsequent Inquisition systematically burned all Cathar texts and executed adherents',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Faith Erased

The Cathars were a dualist Christian movement that flourished in the Languedoc region of southern France and parts of northern Italy from the eleventh through the thirteenth centuries. They believed in two opposing principles: a good God who created the spiritual world and an evil force responsible for the material world. They rejected the Catholic sacraments, the authority of the Pope, and much of the Old Testament. They had their own clergy, the perfecti, who lived in extreme asceticism, and their own rituals, most importantly the consolamentum, a laying-on of hands that served as their sole sacrament.

The Cathars possessed their own religious texts. These included translations of the New Testament into Occitan, theological treatises explaining their dualist cosmology, ritual manuals, and prayer books. The exact scope of their literature is unknown because almost none of it survived. We know specific texts existed because Inquisition records reference them, sometimes quoting passages in order to refute them.

## The Albigensian Crusade

In 1209, Pope Innocent III launched the Albigensian Crusade against the Cathars and their protectors in the Languedoc. The military campaign lasted twenty years and devastated the region. The massacre at Beziers in 1209, where thousands of citizens were killed regardless of faith, set the tone. The siege of Montsegur in 1244 ended with over two hundred Cathars burned alive in a single mass execution after refusing to renounce their beliefs.

The Inquisition that followed the military campaign was methodical. Inquisitors identified Cathar texts and burned them. They interrogated believers to discover hidden copies. They tracked the movement of books across borders. The destruction was so systematic that only a handful of Cathar documents survive: fragments of a Cathar New Testament in Occitan, the *Book of the Two Principles* preserved in a single manuscript, and the *Cathar Ritual* found in a thirteenth-century codex in Lyon.

## Known Only Through Enemies

The result is that almost everything we know about Cathar belief comes from the people who destroyed it. Catholic polemicists described Cathar theology in order to attack it, but their accounts are hostile, selective, and likely distorted. Scholars have spent centuries attempting to reconstruct what the Cathars actually believed from these adversarial sources, but the exercise is inherently unreliable. The last known Cathar perfectus, Guillaume Belibaste, was burned at the stake in 1321. With him died the last living link to an oral tradition that might have filled the gaps left by the bonfires.`,
  quickFacts: {
    'Active Period': '11th-14th century CE',
    'Region': 'Languedoc (southern France) and northern Italy',
    'Core Belief': 'Dualism: good spiritual world vs. evil material world',
    'Key Ritual': 'Consolamentum, laying-on of hands',
    'Albigensian Crusade': '1209-1229',
    'Montsegur Massacre': '1244, ~200 Cathars burned alive',
    'Last Known Cathar': 'Guillaume Belibaste, burned 1321',
    'Surviving Texts': 'Book of the Two Principles, Cathar Ritual (fragments only)',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent deliberate destruction of entire bodies of knowledge, erasing not just texts but the intellectual traditions that produced them' },
    { slug: 'mixtec-codices', relationship: 'Both are cases where conquering powers systematically burned the written heritage of a people, leaving scholars dependent on hostile sources' },
  ],
  sources: [
    { title: 'The Perfect Heresy: The Revolutionary Life and Death of the Medieval Cathars', author: 'Stephen O\'Shea', year: 2000 },
    { title: 'The Cathars: Dualist Heretics in Languedoc in the High Middle Ages', author: 'Malcolm Barber', year: 2000 },
    { title: 'Montaillou: The Promised Land of Error', author: 'Emmanuel Le Roy Ladurie', year: 1975 },
  ],
};
