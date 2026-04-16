import type { Entry } from '../../types';

export const helike: Entry = {
  slug: 'helike',
  name: 'Helike',
  tagline: 'An ancient Greek city swallowed whole by the sea in a single night. For 2,400 years it lay beneath the mud, a real-world Atlantis waiting to be found.',
  category: 'place',
  subcategory: 'Sunken Cities',
  lastKnownYear: '373 BCE',
  lastKnownLocation: 'Gulf of Corinth, Greece',
  coordinates: [38.22, 22.1],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Destroyed by earthquake and tsunami in 373 BCE; submerged beneath the Gulf of Corinth and buried under lagoon sediments',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The City That Vanished Overnight

Helike was one of the most important cities of ancient Achaea, a prosperous Greek polis on the southwestern shore of the Gulf of Corinth. It served as the leader of the Achaean League, a confederation of twelve cities, and housed a celebrated sanctuary of Poseidon Helikonios. Pilgrims traveled from across the Greek world to worship there. Coins from Helike depict the head of Poseidon and his trident, testifying to the god's centrality in the city's identity.

In the winter of 373 BCE, the god of the sea destroyed the city that worshipped him. A massive earthquake struck the region, followed by a tsunami that surged inland from the Gulf of Corinth. The combined forces obliterated Helike. The ground beneath the city liquefied, and the entire settlement sank below the surface of a coastal lagoon. According to ancient sources, a rescue party of 2,000 soldiers arrived from neighboring cities but found nothing to save. Helike and all its inhabitants had disappeared beneath the water.

## The Ghost Beneath the Waves

For centuries after its destruction, the ruins of Helike were visible beneath the shallow waters of the gulf. The Roman geographer Strabo, writing in the first century BCE, noted that the submerged city could still be seen. The traveler Pausanias, visiting in the second century CE, reported that the walls were visible underwater, though corroded by salt. Ancient writers treated Helike as a moral parable about divine punishment, but they also described it as a physical place that divers and fishermen still encountered.

Over the following centuries, sediment from the Selinous and Kerynites rivers gradually buried the ruins. The lagoon silted over, and Helike vanished not just from the surface but from memory. By the modern era, scholars debated whether the city had been real at all. Some proposed it as one of Plato's possible inspirations for the Atlantis myth described in the Timaeus and Critias, noting the parallels between a powerful city destroyed by divine wrath and swallowed by the sea.

## Rediscovery

Greek archaeologist Dora Katsonopoulou led the effort to locate Helike. In 2001, her team discovered the remains of the classical city buried beneath the coastal plain, not offshore as earlier searchers had assumed, but inland, beneath layers of river sediment that had pushed the coastline seaward over millennia. Excavations revealed building foundations, coins, pottery, and evidence of the catastrophic subsidence that had pulled the city below ground level. The site continues to yield finds, confirming that Helike was a substantial and wealthy city whose destruction was as sudden and total as the ancient sources claimed.`,
  quickFacts: {
    'Founded': 'Pre-classical era, one of the oldest Achaean cities',
    'Destroyed': '373 BCE (earthquake and tsunami)',
    'Location': 'Southwestern shore, Gulf of Corinth',
    'Significance': 'Leader of the twelve-city Achaean League',
    'Patron Deity': 'Poseidon Helikonios',
    'Rediscovered': '2001 by Dora Katsonopoulou',
    'Possible Legacy': 'Proposed inspiration for Plato\'s Atlantis myth',
  },
  connections: [
    { slug: 'colossus-of-rhodes', relationship: 'Both were celebrated monuments of ancient Greece destroyed by earthquakes, leaving only textual accounts for centuries' },
    { slug: 'hanging-gardens', relationship: 'Both are ancient wonders whose very existence was debated until modern archaeology intervened' },
  ],
  sources: [
    { title: 'Geography', author: 'Strabo', year: -20 },
    { title: 'Description of Greece', author: 'Pausanias', year: 174 },
    { title: 'The Discovery of the Lost City of Helike', author: 'Dora Katsonopoulou', year: 2005, url: 'https://www.helike.org' },
    { title: 'Helike: Ancient City Beneath the Gulf of Corinth', author: 'Steven Soter', year: 1999 },
  ],
};
