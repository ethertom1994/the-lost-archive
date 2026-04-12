import type { Entry } from '../../types';

export const greekFire: Entry = {
  slug: 'greek-fire',
  name: 'Greek Fire',
  tagline: 'A weapon that burned on water and saved an empire. Its formula was so secret it died with Constantinople.',
  category: 'technology',
  subcategory: 'Military Technology',
  lastKnownYear: '~13th century',
  lastKnownLocation: 'Constantinople, Byzantine Empire',
  coordinates: [41.01, 28.98],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Extreme secrecy restricted knowledge to a small group; the fall of the Byzantine state eliminated the last keepers',
  body: `## Fire on the Water

In 678 CE, an Arab fleet sailed against Constantinople, intent on capturing the capital of the Byzantine Empire. The city's survival seemed unlikely. But the Byzantine navy deployed a new weapon: a liquid substance projected from bronze tubes mounted on the prows of warships that ignited on contact and continued to burn even on the surface of the sea. Water did not extinguish it. It reportedly burned through wood, flesh, and metal with equal ferocity.

The Arab fleet was devastated. The siege was broken. Greek fire, as it came to be known, had saved Constantinople for the first time. It would do so again and again over the following centuries, becoming the Byzantine Empire's most feared military technology.

## The Most Dangerous Secret

The Byzantines understood the strategic value of their weapon and guarded its composition with extraordinary care. The formula was known only to the emperor and a small circle of specialists, the *Kallinikos* family, who were reportedly the original inventors. Emperor Constantine VII Porphyrogennetos, writing in the tenth century, instructed his son that three things must never be shared with foreign powers: the imperial regalia, the secret of Greek fire, and the technique of making silk.

This secrecy was effective. Despite centuries of use, no enemy ever replicated Greek fire. The Crusaders encountered it and were terrified by it. Arab chroniclers described it in vivid terms but could not explain its composition. The formula was compartmentalized so thoroughly that even many Byzantine officials did not know it.

## What Was It?

The exact composition of Greek fire remains unknown, which is what makes its loss significant. Modern historians and chemists have proposed numerous candidates. The leading theory involves a mixture of naphtha (crude petroleum), quicklime, and possibly sulfur or resin. The quicklime would have generated intense heat on contact with water, which could explain the weapon's ability to burn on the sea surface.

But the delivery system was as important as the formula. Greek fire was deployed through pressurized siphons, essentially early flamethrowers, that could project the burning liquid at range. The engineering of these devices, the pump mechanisms, the ignition system, the handling procedures for a volatile incendiary aboard a wooden ship, represented a complete weapons system, not merely a chemical recipe.

## The Silence After the Fall

References to Greek fire become increasingly rare after the thirteenth century, suggesting that even within the Byzantine Empire, the knowledge was being lost as the state weakened. By the time Constantinople fell to the Ottoman Turks in 1453, the weapon had likely already been out of use for generations. The Ottomans, despite capturing the city and its archives, never produced Greek fire.

What was lost was not just a formula but the institutional knowledge system that maintained it: the specialized workshops, the trained operators, the supply chains for specific ingredients, and the engineering tradition that kept the delivery systems functional. Greek fire was a technology that could only exist within the specific state apparatus that created it. When the state died, the weapon died with it.`,
  quickFacts: {
    'Byzantine Name': 'Liquid fire (\u03C5\u03B3\u03C1\u03CC\u03BD \u03C0\u03C5\u03C1)',
    'First Known Use': '678 CE, Siege of Constantinople',
    'Attributed Inventor': 'Kallinikos of Heliopolis',
    'Delivery Method': 'Pressurized bronze siphons (early flamethrowers)',
    'Key Property': 'Burned on water; not extinguished by it',
    'Secrecy Level': 'Imperial state secret, death penalty for disclosure',
    'Last Known Use': '~13th century',
    'Modern Best Guess': 'Naphtha + quicklime + sulfur/resin',
  },
  connections: [
    { slug: 'damascus-steel', relationship: 'Both were legendary military technologies whose secrets died with the civilizations that created them' },
    { slug: 'roman-concrete', relationship: 'Both were critical technologies of the Roman/Byzantine world, lost when the empire that maintained them collapsed' },
  ],
  sources: [
    { title: 'De Administrando Imperio', author: 'Constantine VII Porphyrogennetos', year: 950 },
    { title: 'Greek Fire, Poison Arrows, and Scorpion Bombs', author: 'Adrienne Mayor', year: 2003 },
    { title: 'A History of Greek Fire and Gunpowder', author: 'J.R. Partington', year: 1960 },
    { title: 'Incendiary Weapons', author: 'Alex Roland', year: 1978 },
  ],
};
