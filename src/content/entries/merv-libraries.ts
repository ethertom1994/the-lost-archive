import type { Entry } from '../../types';

export const mervLibraries: Entry = {
  slug: 'merv-libraries',
  name: 'The Libraries of Merv',
  tagline: 'In 1221, the Mongol army drained the Murghab River around a Central Asian city and then methodically killed its people. Merv had ten great libraries, one with twelve thousand volumes. Almost nothing from them survives.',
  category: 'culture',
  subcategory: 'Lost Libraries',
  lastKnownYear: 1221,
  lastKnownLocation: 'Merv, Khwarezmian Empire (modern Turkmenistan)',
  coordinates: [37.66, 62.19],
  region: 'Central Asia',
  status: 'extinct',
  cause: 'Mongol siege and sack in February 1221; libraries burned, scholars killed',
  imageUrl: undefined,
  body: `## A City of Books on the Silk Road

Before the Mongols arrived, Merv was one of the largest cities in the world. It sat in the oasis of the Murghab River at the intersection of the overland trade routes between China, Persia, and the Mediterranean, and it had grown rich on silk, cotton, metalwork, and the traffic of scholars. The Arab geographer Yaqut al-Hamawi lived there for three years shortly before the Mongol conquest and left the most detailed account we have of its libraries. He counted ten major libraries in the city, including one housed inside the congregational mosque that held, by his reckoning, twelve thousand volumes. He borrowed manuscripts freely and described the city, with the nostalgic overstatement of an exile, as a place where he had known perfect happiness.

Merv's collections reflected the city's intellectual geography. Since the fifth century CE it had been a seat of the Nestorian (Church of the East) archbishopric, and Syriac Christian theology was studied alongside Zoroastrian texts, Manichaean writings, Buddhist treatises translated into Sogdian and Persian, and the Arabic scientific and philosophical literature that had poured eastward out of Abbasid Baghdad. Scholars travelled to Merv specifically for works they could not find elsewhere. The city had observatories, hospitals, and a madrasa culture deeply integrated into the eastern wing of the Islamic Golden Age.

## February 1221

In February 1221 Tolui, the youngest son of Genghis Khan, arrived at the walls with a Mongol army. After a brief siege Merv surrendered on promises of mercy. The promises were not kept. The Persian historian Ata-Malik Juvayni, writing a generation later from inside the Mongol administration itself, described the population being marched out onto the plain in groups and systematically killed. Contemporary Arabic and Persian sources put the death toll in figures that cannot be believed literally but that convey the scale: hundreds of thousands, perhaps more, over several days. The irrigation system that sustained the oasis was destroyed. The libraries were burned.

A handful of scholars escaped before the sack. A few manuscripts made it out with them. But no catalog survives of what was in Yaqut's twelve-thousand-volume mosque library, and no independent copies exist of the texts it uniquely held. Entire branches of learning that were documented in Merv, particularly the Syriac Christian literature of Central Asia and the Sogdian-language scholarship of the eastern Silk Road, are now known only through citations and fragments preserved in more fortunate libraries far away.

## The Shape of the Loss

The destruction of Merv is often folded into the larger story of the Mongol conquests and the 1258 sack of Baghdad. But Merv was its own distinct catastrophe. Baghdad's House of Wisdom was the showpiece of one tradition. Merv was a hinge between traditions: the only place where Christian Syriac, Zoroastrian Middle Persian, Buddhist Sanskrit, Manichaean, and Islamic Arabic learning were all actively collected, copied, and read in the same city. When the libraries burned, the hinge broke. The eastern Syriac literary tradition in particular, which had produced centuries of theology, philosophy, and medicine in Central Asia, never recovered its prior depth; most of what we know of it today comes from the western Syriac communities in Mesopotamia and from later copies preserved far to the west.

The Mongol archaeological layer at Merv shows a thick horizon of ash. Later settlements rebuilt on a much smaller scale. Today the site is mostly empty mounds and the ruined outlines of walls. The city that for a few decades had been perhaps the largest and best-read in the world was, after 1221, a field.`,
  quickFacts: {
    'City': 'Merv (Marw), modern Turkmenistan',
    'Destroyed': 'February 1221, by Tolui son of Genghis Khan',
    'Libraries Reported': 'Ten major libraries, per Yaqut al-Hamawi',
    'Largest Collection': 'c. 12,000 volumes (congregational mosque)',
    'Languages Collected': 'Arabic, Persian, Syriac, Sogdian, Middle Persian',
    'Surviving Manuscripts': 'None traceable to the Merv collections as such',
  },
  connections: [
    { slug: 'house-of-wisdom', relationship: 'Both were major centres of the Islamic Golden Age destroyed by Mongol conquest within four decades of each other' },
    { slug: 'nalanda', relationship: 'Both were multi-tradition learning centres in Asia destroyed by invading armies, leaving comparable gaps in the record' },
    { slug: 'timbuktu-scholars', relationship: 'Both held large manuscript libraries in a trading city that served as a crossroads between civilisations' },
  ],
  sources: [
    { title: 'Mu\u2018jam al-Buldan (Dictionary of Countries)', author: 'Yaqut al-Hamawi', year: 1229 },
    { title: 'Tarikh-i Jahangushay (The History of the World Conqueror)', author: 'Ata-Malik Juvayni', year: 1260 },
    { title: 'Merv - New World Encyclopedia', url: 'https://www.newworldencyclopedia.org/entry/Merv' },
    { title: 'Siege of Merv (1221) - Wikipedia', url: 'https://en.wikipedia.org/wiki/Siege_of_Merv_(1221)' },
  ],
};
