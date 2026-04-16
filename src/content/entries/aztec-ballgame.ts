import type { Entry } from '../../types';

export const aztecBallgame: Entry = {
  slug: 'aztec-ballgame',
  name: 'Mesoamerican Ballgame (Ullamaliztli)',
  tagline: 'Played for over 3,000 years across an entire continent. Part sport, part cosmic ritual, part death sentence. The Spanish ended it in a generation.',
  category: 'culture',
  subcategory: 'Lost Sports',
  lastKnownYear: 1521,
  lastKnownLocation: 'Tenochtitlan, Mexico',
  coordinates: [19.43, -99.13],
  region: 'Mesoamerica',
  status: 'extinct',
  cause: 'Spanish conquest and suppression of indigenous religious practices eliminated organized play after 1521',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Three Thousand Years on the Court

The Mesoamerican ballgame is among the oldest continuously played sports in human history. Archaeological evidence places its origins with the Olmec civilization around 1500 BCE, and it was still being played when Hernan Cortes entered Tenochtitlan in 1519. Over those three millennia, the game was played by the Olmec, Maya, Zapotec, Toltec, and Aztec civilizations, among others. More than 1,300 ballcourts have been identified across Mesoamerica, from Arizona to Honduras, making the ballgame one of the most widespread cultural institutions in the pre-Columbian Americas.

The courts were I-shaped or T-shaped, flanked by sloping stone walls. The ball was made of solid rubber, a material unknown to the Old World, and weighed between six and nine pounds. Players struck the ball primarily with their hips, though some regional variations allowed the use of forearms, knees, or wooden paddles. Stone rings mounted high on the court walls served as goals in some versions, though driving the ball through the ring was so difficult that it apparently resulted in an automatic victory.

## Ritual and Sacrifice

The ballgame was inseparable from Mesoamerican cosmology. The court itself represented a threshold between the worlds of the living and the dead. The Popol Vuh, the K'iche' Maya creation narrative, centers on a ballgame played between the Hero Twins and the lords of the underworld. Ball courts were often built adjacent to temples, and the game was associated with agricultural fertility, solar movement, and the cycle of life and death.

Human sacrifice was connected to the ballgame, though the precise relationship remains debated. Stone reliefs at the great ballcourt of El Tajin and at Chichen Itza depict decapitation of players. Whether the losers or the winners were sacrificed, or whether sacrifice was reserved for captives forced to play ritual games, varies by period and region. The Aztec tlachtli courts in Tenochtitlan hosted games with enormous wagers, and the Spanish chronicler Diego Duran recorded that nobles bet gold, jade, slaves, and even their own freedom.

## Silenced Courts

The Spanish conquest eliminated the ballgame along with the religious framework that sustained it. Missionaries specifically targeted the sport as idolatrous. The courts were demolished or repurposed. A small regional variant called ulama survived in Sinaloa, Mexico, and is still played today, but it represents a fragment of a vastly more complex tradition. The full rules, the regional variations across dozens of cultures and centuries, the ritual protocols, and the cosmological interpretations are largely irrecoverable.`,
  quickFacts: {
    'Duration': '~1500 BCE to 1521 CE (3,000+ years)',
    'Ball Material': 'Solid rubber, 6-9 pounds',
    'Court Shape': 'I-shaped or T-shaped, stone-walled',
    'Primary Striking': 'Hips (some variants: forearms, knees)',
    'Known Courts': 'Over 1,300 identified across Mesoamerica',
    'Aztec Name': 'Ullamaliztli (from ulli, rubber)',
    'Surviving Variant': 'Ulama, still played in Sinaloa, Mexico',
  },
  connections: [
    { slug: 'knattleikr', relationship: 'Both were ancient sports combining athletic competition with social ritual and accepted violence, lost when the cultures sustaining them were disrupted' },
    { slug: 'olmec-rubber', relationship: 'The ballgame depended on Olmec rubber technology; the sport and the material were expressions of the same Mesoamerican knowledge tradition' },
  ],
  sources: [
    { title: 'The Mesoamerican Ballgame', author: 'Vernon L. Scarborough & David R. Wilcox', year: 1991 },
    { title: 'The Sport of Life and Death: The Mesoamerican Ballgame', author: 'E. Michael Whittington', year: 2001 },
    { title: 'Book of the Gods and Rites and The Ancient Calendar', author: 'Diego Duran', year: 1574 },
    { title: 'Popol Vuh: The Mayan Book of the Dawn of Life', author: 'Dennis Tedlock (translator)', year: 1996 },
  ],
};
