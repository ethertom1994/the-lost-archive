import type { Entry } from '../../types';

export const romanGladiators: Entry = {
  slug: 'roman-gladiators',
  name: 'Roman Gladiatorial Combat',
  tagline: 'Not mindless slaughter but a codified martial art with weapon styles, weight classes, medical care, and vegetarian diets. The techniques were never written down.',
  category: 'culture',
  subcategory: 'Lost Martial Arts',
  lastKnownYear: 404,
  lastKnownLocation: 'Rome, Roman Empire',
  coordinates: [41.89, 12.49],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Banned by Emperor Honorius in 404 CE following the martyrdom of the monk Telemachus; Christian opposition ended the institution',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Astyanax_vs_Kalendio_mosaic.jpg/400px-Astyanax_vs_Kalendio_mosaic.jpg',
  imageCaption: 'Roman mosaic depicting a combat between the retiarius Kalendio and the secutor Astyanax, from the National Archaeological Museum, Madrid',
  imageCredit: 'Public domain, via Wikimedia Commons',
  body: `## A Martial Art, Not a Massacre

Modern popular culture depicts gladiatorial combat as chaotic butchery, but the historical reality was far more structured. Gladiators were trained in specific fighting styles, each with designated weapons, armor, and tactical doctrines. The retiarius fought with a net and trident, wearing almost no armor, relying on speed and distance. The secutor, his designated opponent, carried a sword and heavy shield and wore an enclosed helmet designed to resist the trident's prongs. The murmillo fought in a style adapted from Gallic warriors. The thraex used a curved blade modeled on Thracian weapons. Each style had specific rules about which opponents it could face, creating a system of asymmetric matchups that tested different skills against each other.

Training took place in specialized schools called ludi, the most famous being the Ludus Magnus adjacent to the Colosseum in Rome. Gladiators trained under a lanista, a professional instructor, and followed strict regimens. Archaeological analysis of gladiator bones from a cemetery in Ephesus reveals that they ate a largely vegetarian diet heavy in barley and beans, supplemented with a calcium-rich drink made from bone ash. This diet was not deprivation but deliberate: the grain-heavy regimen built a layer of subcutaneous fat that protected against superficial cuts while cushioning vital organs.

## Rules of the Arena

Fights were refereed. Mosaics and relief carvings show referees standing between combatants, intervening to enforce rules. A gladiator could surrender by raising a finger, at which point the editor of the games decided whether to grant mercy or condemn the loser. Contrary to popular belief, most fights did not end in death. A trained gladiator represented a significant financial investment, and killing one was expensive. Analysis of fight records from Pompeii suggests that perhaps one in five to one in ten bouts ended fatally.

Medical treatment was sophisticated. The physician Galen began his career treating gladiators in Pergamum, and his writings reference the wound care and surgical techniques used in the ludi. Gladiators received treatment that most Roman citizens could not access.

## The Knowledge That Died

When Emperor Honorius banned gladiatorial combat in 404 CE, an entire martial tradition disappeared. The specific fighting techniques of each gladiator class, the tactical doctrines for fighting asymmetric matchups, the training methodologies refined over six centuries of professional combat, none of these were preserved in writing. Roman authors described gladiatorial combat from the perspective of spectators and moralists, not practitioners. The technical knowledge belonged to the gladiators and their trainers, transmitted orally and through physical practice in the ludi. When the schools closed, that knowledge went with them.`,
  quickFacts: {
    'Duration': '~264 BCE to 404 CE (~668 years)',
    'Fighting Styles': 'Retiarius, secutor, murmillo, thraex, hoplomachus, and more',
    'Training Schools': 'Ludi (e.g., Ludus Magnus in Rome)',
    'Diet': 'Vegetarian-heavy: barley, beans, bone-ash drink',
    'Fatality Rate': 'Estimated 10-20% of bouts ended in death',
    'Ended By': 'Emperor Honorius, 404 CE',
    'Key Medical Figure': 'Galen of Pergamum',
  },
  connections: [
    { slug: 'colossus-of-rhodes', relationship: 'Both represent monumental Roman-era cultural achievements that survive only in description, not in physical or practical form' },
    { slug: 'knattleikr', relationship: 'Both were codified combat sports with complex rules, designated opponents, and accepted violence that vanished when the cultures sustaining them declined' },
  ],
  sources: [
    { title: 'The Gladiators: History\'s Most Deadly Sport', author: 'Fik Meijer', year: 2005 },
    { title: 'Gladiators at Ephesus', author: 'Fabian Kanz & Karl Grossschmidt', year: 2006 },
    { title: 'The Gladiator: The Secret History of Rome\'s Warrior Slaves', author: 'Alan Baker', year: 2000 },
    { title: 'On the Therapeutic Method', author: 'Galen of Pergamum', year: 170 },
  ],
};
