import type { Entry } from '../../types';

export const nokCulture: Entry = {
  slug: 'nok-culture',
  name: 'Nok Culture',
  tagline: 'Iron Age Nigeria, 900 BCE to 400 CE. They smelted iron centuries before their neighbors and sculpted extraordinary terracotta figures with pierced eyes and elaborate hair. Then they disappeared, leaving no written records, no known descendants, and no accepted explanation.',
  category: 'culture',
  subcategory: 'Vanished Civilizations',
  lastKnownYear: 'c. 400 CE',
  lastKnownLocation: 'Benue Plateau, central Nigeria',
  coordinates: [10.3, 8.0],
  region: 'West Africa',
  status: 'extinct',
  cause: 'Unknown; proposed causes include environmental degradation, soil exhaustion from intensive iron smelting, climate shift, or displacement by later populations',
  body: `## The Terracotta Heads

In 1928, tin miners working near the village of Nok in central Nigeria unearthed a clay head from a depth of about twenty-four feet. Over the following decades more heads and figures emerged across an area roughly the size of Portugal: life-sized and small, male and female, sometimes animal, all sharing a distinctive style. Almond-shaped eyes with pierced pupils. Elaborately coiffured hair. Triangular or D-shaped eye sockets. Parted lips. A restrained, almost geometric stylization unlike anything else in Africa at the time.

The British archaeologist Bernard Fagg formally identified the culture in the 1940s and gave it the name of the village where the first piece was found. Radiocarbon and thermoluminescence dating placed the figures between roughly the eighth century BCE and the fifth century CE, making them among the oldest figurative sculptures anywhere in sub-Saharan Africa.

## The Iron That Came First

Excavations since the 2000s, led by Peter Breunig and a German-Nigerian team, have substantially revised the chronology. Iron smelting furnaces at Nok sites have been carbon-dated to as early as the fifth or sixth century BCE, and some Nok settlements may go back to 900 BCE. This makes Nok one of the earliest known iron-using cultures in sub-Saharan Africa, predating by centuries the better-known Bantu expansion that would spread metallurgy southward.

The furnaces are technically sophisticated: bellows-fed shaft furnaces producing bloom iron from local ores. The Nok smiths were making iron hoes, axes, and arrowheads at a time when most of Europe was still working bronze. They were not a marginal frontier of iron technology; they may have been one of its birthplaces.

## The Vanishing

Around 400 CE, or possibly earlier, Nok settlements disappear from the archaeological record. Pottery production drops sharply. The distinctive terracotta figurines stop being made. Iron smelting at the known sites ceases. The disappearance is not gradual; it is effectively a cutoff.

No written sources mention the Nok. There is no trace of them in the later oral histories of the Hausa, Nupe, or other peoples of the Nigerian plateau. Archaeologists have proposed several explanations: exhaustion of the iron-bearing soils, deforestation driven by the charcoal demands of smelting, climate change, epidemic disease, or simple displacement by incoming populations. The evidence is not yet strong enough to settle between these.

## What Was Lost

The Nok figures themselves are now the most-trafficked African antiquities on the black market. Sites have been systematically looted for decades. The pieces end up in private European and American collections, often with fabricated provenance, stripped of their archaeological context. A terracotta head without the ground it came from is a beautiful object without a story.

The deeper loss is a civilization without a voice. The Nok made art of the human face for a thousand years. They smelted iron before most of their continent. They built a society complex enough to sustain large-scale artistic production and technological innovation. What they believed, what they called themselves, how they organized their settlements, why their figures had pierced eyes: these are things we may never know, because a culture that left no writing left only objects, and most of the objects are gone.`,
  quickFacts: {
    'Location': 'Benue Plateau, central Nigeria',
    'Dating': 'c. 900 BCE to c. 400 CE',
    'Discovery': '1928, by tin miners near the village of Nok',
    'Named by': 'Bernard Fagg, 1940s',
    'Key Technology': 'Early sub-Saharan African iron smelting',
    'Principal Threat Today': 'Site looting for the international antiquities market',
  },
  connections: [
    { slug: 'benin-bronzes', relationship: 'Both are West African artistic traditions displaced by European collection and the international antiquities market' },
    { slug: 'aksumite-obelisks', relationship: 'Both are sub-Saharan African civilizations whose internal histories are largely lost to later written records' },
    { slug: 'green-sahara', relationship: 'Both sit at the edges of African prehistory where environmental change and vanished populations overlap' },
  ],
  sources: [
    { title: 'Nok culture', url: 'https://en.wikipedia.org/wiki/Nok_culture' },
    { title: 'Nok: African Sculpture in Archaeological Context', author: 'Peter Breunig, ed.', year: 2014 },
    { title: 'The Nok of Nigeria', author: 'Roger Atwood', url: 'https://archaeology.org/issues/online/features/the-nok-of-nigeria/', year: 2011 },
  ],
};
