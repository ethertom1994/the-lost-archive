import type { Entry } from '../../types';

export const heronAutomata: Entry = {
  slug: 'heron-automata',
  name: "Heron's Automata",
  tagline: 'Coin-operated machines, self-opening doors, mechanical theaters. Ancient Alexandria had them all. Then forgot how to build them.',
  category: 'technology',
  subcategory: 'Mechanical Engineering',
  lastKnownYear: '~300 CE',
  lastKnownLocation: 'Alexandria, Roman Egypt',
  coordinates: [31.2, 29.9],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Loss of the Alexandrian engineering tradition as the intellectual infrastructure of the Hellenistic world declined',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Engineer of Alexandria

Heron of Alexandria, active in the first century CE, was among the most prolific engineers of the ancient world. Working in a city that was already the intellectual capital of the Mediterranean, Heron wrote treatises on mechanics, optics, and pneumatics that described dozens of working devices, many of which he built and demonstrated. His surviving texts, preserved through Arabic translations and Byzantine copies, describe machines that would not seem out of place in a Renaissance workshop and in some cases not until the Industrial Revolution.

His coin-operated holy water dispenser is often cited as the first vending machine. A worshiper dropped a coin into a slot; the coin's weight depressed a lever that opened a valve, dispensing a measured amount of water before the coin slid off and the valve closed. His wind-powered organ used air pressure from a windmill to drive sound through pipes. His mechanical theater used a system of ropes, knots, and counterweights to move figures across a miniature stage, change scenery, and produce sound effects, all automatically.

## Principles in Action

Heron's most famous treatise, the Pneumatica, described devices that exploited air pressure, steam, siphons, and hydraulic principles. These were not idle curiosities. The self-opening temple doors used a fire lit on an altar to heat air in a sealed vessel, which expanded and displaced water into a bucket, whose weight pulled ropes that swung the doors open. When the fire died, the air cooled and contracted, drawing the water back and closing the doors. The worshiper saw divine intervention; the priest knew the engineering.

His aeolipile, a steam-driven rotating sphere, demonstrated the principle of jet propulsion. Though Heron treated it as a novelty, the device contained the fundamental concept behind the steam turbine that would not be independently developed for seventeen centuries.

## The Knowledge That Did Not Travel

Heron's texts survived, but the practical craft of building his devices did not. His treatises describe mechanisms in enough detail for a skilled modern engineer to reconstruct them, and many have been rebuilt in museum workshops. But in the centuries after Heron, the Alexandrian tradition of experimental mechanics declined as institutional support for such work eroded. The Musaeum of Alexandria, the research center where Heron likely worked, lost its scholars and funding over the course of the third and fourth centuries. The Arabic scholars who translated Heron's works understood his principles, but the workshop culture of hands-on mechanical experimentation that had produced his innovations did not transfer. For fifteen hundred years, Heron's coin-operated dispensers, programmable theaters, and pneumatic doors existed only on the page.`,
  quickFacts: {
    'Active Period': '~10-70 CE',
    'Location': 'Alexandria, Roman Egypt',
    'Key Works': 'Pneumatica, Automata, Mechanica',
    'Notable Inventions': 'Coin-operated dispenser, self-opening doors, wind organ',
    'Aeolipile': 'First known steam-driven device',
    'Mechanical Theater': 'Automated figures with programmed sequences',
    'Rediscovered': 'Through Arabic and Byzantine manuscript traditions',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'Both represent the astonishing sophistication of Hellenistic mechanical engineering, a tradition that left almost no successors for over a millennium' },
    { slug: 'aeolipile', relationship: "The aeolipile was one of Heron's own inventions, a steam device that demonstrated principles not applied to practical work until the 18th century" },
  ],
  sources: [
    { title: 'The Pneumatics of Hero of Alexandria', author: 'Bennet Woodcroft (translator)', year: 1851 },
    { title: 'Engineering in the Ancient World', author: 'J. G. Landels', year: 1978 },
    { title: 'Ancient Inventions', author: 'Peter James and Nick Thorpe', year: 1994 },
    { title: 'Greek and Roman Technology: A Sourcebook', author: 'John W. Humphrey, John P. Oleson, and Andrew N. Sherwood', year: 1998 },
  ],
};
