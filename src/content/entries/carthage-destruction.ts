import type { Entry } from '../../types';

export const carthageDestruction: Entry = {
  slug: 'carthage-destruction',
  name: 'The Destruction of Carthage',
  tagline: 'Rome didn\'t just defeat Carthage in 146 BCE. It erased a civilization\'s written knowledge, including a 28-volume masterwork on agriculture.',
  category: 'place',
  lastKnownYear: '146 BCE',
  lastKnownLocation: 'Carthage, modern-day Tunisia',
  coordinates: [36.85, 10.32],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Roman military destruction in the Third Punic War; the city was razed, burned, and its population killed or enslaved',
  imageUrl: undefined,
  body: `## A Civilization Unmade

In the spring of 146 BCE, Roman forces under Scipio Aemilianus breached the walls of Carthage after a three-year siege. What followed was not merely a military conquest but a systematic annihilation. The Romans spent seventeen days burning the city. Buildings were demolished. The population, perhaps 50,000 remaining from the siege, was killed or sold into slavery. The site was cursed and, according to Roman sources, the earth was symbolically salted to ensure nothing would grow there again, though modern historians debate whether the salting literally occurred.

Carthage had been a major Mediterranean power for over five centuries. Founded by Phoenician settlers in the 9th century BCE, it grew into a trading empire that rivaled and then fought Rome in three devastating wars. It had its own literature, its own legal traditions, its own religious practices, and its own libraries.

## Mago's Twenty-Eight Volumes

Of everything lost in the destruction, one work stands out. Mago of Carthage, writing between the 6th and 4th centuries BCE, composed a 28-volume treatise on agriculture in the Punic language. It was the most comprehensive farming manual of the ancient world, covering crop cultivation, animal husbandry, viticulture, beekeeping, and estate management. It synthesized centuries of Phoenician and North African agricultural knowledge.

The Roman Senate, recognizing its value, ordered Mago's treatise translated into Latin after the conquest. Decimus Junius Silanus produced the translation, and a Greek abridgment was made by Diophanes of Nicaea. But neither the Punic original nor any complete copy of the translations survived. We know Mago's work only through fragments quoted by later Roman writers: Varro, Columella, and Pliny the Elder, who cited him with respect as an authority on Mediterranean farming.

## The Weight of What Burned

The libraries of Carthage were distributed to the kings of Numidia as a reward for their alliance with Rome. Mago's treatise was the single exception, kept back by order of the Senate. What the Numidian kings received and what became of those volumes is unknown. An entire literary tradition in the Punic language, the administrative records, the histories, the religious texts, the legal codes of a civilization that had endured for half a millennium, scattered to allies who had no reason to preserve them and who left no record of their fate.`,
  quickFacts: {
    'Date of Destruction': '146 BCE',
    'Siege Duration': '3 years (149-146 BCE)',
    'Roman Commander': 'Scipio Aemilianus',
    'Lost Work': 'Mago\'s 28-volume agricultural treatise',
    'Translator': 'Decimus Junius Silanus (Latin)',
    'Surviving Fragments': 'Quoted by Varro, Columella, Pliny the Elder',
    'Libraries': 'Given to Numidian kings; fate unknown',
    'Civilization Duration': '~700 years (founded ~814 BCE)',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent catastrophic losses of entire literary traditions, one through Roman conquest, the other through gradual decline' },
    { slug: 'garum', relationship: 'Carthage was a major garum production center; its destruction disrupted Mediterranean food trade networks' },
  ],
  sources: [
    { title: 'Carthage Must Be Destroyed: The Rise and Fall of an Ancient Civilization', author: 'Richard Miles', year: 2010 },
    { title: 'Mago (agricultural writer)', url: 'https://en.wikipedia.org/wiki/Mago_(agricultural_writer)' },
    { title: 'Natural History', author: 'Pliny the Elder', year: 77 },
  ],
};
