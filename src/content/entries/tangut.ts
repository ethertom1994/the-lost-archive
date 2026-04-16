import type { Entry } from '../../types';

export const tangut: Entry = {
  slug: 'tangut',
  name: 'The Tangut Language',
  tagline: 'An empire invented a writing system of 6,000 characters. Genghis Khan erased the empire. The script outlived its speakers by centuries.',
  category: 'language',
  subcategory: 'Extinct Writing Systems',
  lastKnownYear: '~1600 CE',
  lastKnownLocation: 'Northwestern China (Ningxia, Gansu)',
  coordinates: [38.5, 105.7],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Destruction of the Western Xia empire by the Mongols in 1227 and subsequent centuries of cultural assimilation',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Empire Behind the Script

The Tangut people founded the Western Xia dynasty in 1038 CE, carving out a kingdom in the arid corridor between the Tibetan Plateau and the Mongolian steppe, controlling vital sections of the Silk Road in what is now the Ningxia and Gansu regions of China. At its height, Western Xia was a significant power, holding its own against the Song dynasty to the south and the Liao and Jin dynasties to the east. The Tangut ruler Li Yuanhao commissioned the creation of a national script in 1036, a writing system that would distinguish his people from their Chinese and Tibetan neighbors.

## Six Thousand Characters

The resulting Tangut script is one of the most complex writing systems ever devised. It contains over 6,000 characters, each composed of multiple strokes and components, superficially resembling Chinese but structurally distinct. Where Chinese characters evolved over millennia from pictographic origins, the Tangut script was created in a compressed period by scholarly committee, resulting in characters of formidable intricacy. Some require more than twenty strokes. The script was used for Buddhist texts, legal codes, dictionaries, and military documents throughout the Western Xia period, producing a substantial body of literature.

## Genghis Khan's Fury

In 1227, Genghis Khan besieged and destroyed the Western Xia capital of Zhongxing. The Mongol destruction was among the most thorough in their campaigns. The population was massacred, cities were razed, and the Tangut ruling class was annihilated. The devastation was so complete that Chinese historical sources from the period note the virtual disappearance of the Tangut as a distinct people. Yet the language did not die immediately. Tangut-speaking communities survived in scattered pockets for several centuries. A Tangut dharani pillar dated to 1502 is among the latest known uses of the script. By the seventeenth century, the language had fallen silent entirely.

## Rediscovery in the Desert

In 1908, the Russian explorer Pyotr Kozlov discovered the ruined city of Khara-Khoto in the Gobi Desert, a former Western Xia garrison. Inside a sealed stupa, he found thousands of Tangut manuscripts preserved by the arid climate. This cache, now held primarily in St. Petersburg, became the foundation for modern Tangut studies. Decipherment has progressed steadily since the 1960s, aided by bilingual Tangut-Chinese dictionaries that the Tangut themselves compiled. We can now read Tangut texts, but the spoken language, its pronunciation and rhythm, is reconstructed only through painstaking comparison with Chinese transcriptions.`,
  quickFacts: {
    'Language Family': 'Sino-Tibetan (Qiangic branch)',
    'Script Characters': '6,000+',
    'Script Created': '1036 CE',
    'Empire Duration': '1038-1227 CE',
    'Destroyed By': 'Mongol conquest under Genghis Khan',
    'Last Known Use': '~1502 CE (dharani pillar)',
    'Rediscovered': '1908 at Khara-Khoto by Pyotr Kozlov',
  },
  connections: [
    { slug: 'sumerian', relationship: 'Both are ancient languages whose scripts were deciphered centuries after their extinction through bilingual texts and dictionaries' },
    { slug: 'cypro-minoan', relationship: 'Both are scripts from vanished civilizations, though Tangut has been largely deciphered while Cypro-Minoan remains opaque' },
  ],
  sources: [
    { title: 'Tangut Language and Script', author: 'Nishida Tatsuo', year: 1966 },
    { title: 'The Tanguts: War and Creativity on the Chinese-Tibetan Frontier', author: 'Ruth Dunnell', year: 1996 },
    { title: 'Mongolia and the Mongols: Past and Present', author: 'Pyotr Kozlov', year: 1923 },
    { title: 'A Study of the Tangut Script', author: 'Kychanov, E. I.', year: 2006 },
  ],
};
