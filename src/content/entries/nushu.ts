import type { Entry } from '../../types';

export const nushu: Entry = {
  slug: 'nushu',
  name: 'Nushu',
  tagline: 'The only writing system in history created and used exclusively by women. Texts were burned with their writers at death.',
  category: 'language',
  subcategory: 'Writing Systems',
  lastKnownYear: 2004,
  lastKnownLocation: 'Jiangyong County, Hunan Province, China',
  coordinates: [25.27, 111.34],
  region: 'East Asia',
  status: 'functionally_extinct',
  cause: 'Japanese wartime suppression, Cultural Revolution censorship, modernization, and the death of the last proficient natural user in 2004',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Script Hidden in Plain Sight

In Jiangyong County, in the southern reaches of Hunan Province, women wrote to each other in a script that men could not read. For centuries, possibly as long as a thousand years, the women of this rural region maintained Nushu ("women's writing"), a syllabic script of approximately 700 characters used to transcribe the local dialect of Chinese. It is the only confirmed writing system in human history created by women, used exclusively by women, and transmitted exclusively between women.

Nushu characters are visually distinct from Chinese hanzi: elongated, slanted, and composed of four basic stroke types (dots, horizontals, verticals, and arcs). They were written with a fine brush or embroidered directly into cloth, woven into belts, stitched onto fans, and painted onto paper that was folded into small booklets called "third-day missives," given to brides three days after their wedding by their closest female friends.

## Written, Sung, Burned

Nushu was not merely a writing system; it was the medium of a literary tradition. Women composed autobiographies, poems, songs, letters, and laments in Nushu, documenting their emotional lives with a frankness that the Confucian public sphere did not permit. These texts describe the pain of arranged marriages, the grief of leaving natal families, the loneliness of married life in a stranger's village, and the fierce bonds between sworn sisters.

Much of this literature was deliberately destroyed. It was customary for a woman's Nushu writings to be burned at her funeral or buried with her, a practice that reflected both the deeply personal nature of the texts and the belief that they should accompany the writer into the afterlife. As a result, the oldest surviving Nushu manuscripts date only to the nineteenth century, though linguistic evidence suggests the script is far older.

## Three Destructions

Nushu survived centuries of obscurity only to face three blows in rapid succession. During World War II, the Japanese occupation of Hunan led to the confiscation and destruction of Nushu materials; the occupiers feared the script might be used for coded resistance messages. During the Cultural Revolution of the 1960s and 1970s, Nushu was targeted as a relic of feudal culture, and women were pressured to abandon it. Finally, the modernization and urbanization of rural Hunan broke the close-knit village networks through which Nushu had been transmitted.

## The Last Writer

Yang Huanyi, born in 1909, was the last woman considered fully proficient in Nushu through natural transmission, having learned it as a girl from older women in the traditional way. She became the focus of preservation efforts in her final years, working with scholars to document characters and compose new texts. She died on September 20, 2004, at the age of ninety-eight.

Since her death, academic and government efforts have attempted to preserve and revive Nushu. Younger women in Jiangyong have learned the script from textbooks and workshops. A museum dedicated to Nushu opened in 2002. But the context that gave the script its purpose, a world in which women were denied access to standard literacy and created their own, no longer exists. Modern Nushu practitioners learn a writing system. The women who created it lived one.`,
  keyDate: '2004-09-20',
  keyDateLabel: 'Death of Yang Huanyi, last proficient natural user',
  quickFacts: {
    'Also Known As': "Nu Shu, Women's Script",
    'Character Count': '~700 syllabic characters',
    'Script Type': 'Syllabary (phonetic, not logographic)',
    'Region': 'Jiangyong County, Hunan Province, China',
    'Medium': 'Paper booklets, embroidered cloth, painted fans',
    'Age': 'Possibly 1,000+ years (debated)',
    'Last Proficient User': 'Yang Huanyi (1909-2004)',
    'UNESCO Status': 'Listed as in urgent need of safeguarding',
  },
  connections: [
    { slug: 'mvsl', relationship: 'Both were communication systems sustained by tight-knit communities whose dissolution ended the tradition' },
    { slug: 'mixtec-codices', relationship: 'Both are indigenous writing traditions whose physical texts were systematically destroyed by occupying powers' },
    { slug: 'quipu', relationship: 'Both are non-standard writing systems that challenge Western assumptions about what counts as literacy' },
  ],
  sources: [
    { title: 'A Thousand Miles of Dreams: The Journeys of Two Chinese Sisters', author: 'Sasha Su-Ling Welland', year: 2006 },
    { title: 'Nushu: The Secret Script of Chinese Women', author: 'Orie Endo', year: 2010 },
    { title: 'Snow Falling in Spring: Coming of Age in China During the Cultural Revolution', author: 'Moying Li', year: 2008 },
    { title: "Writing Women's Culture: Nushu Literacy in South-Central China", author: 'Cathy Silber', year: 1994 },
  ],
};
