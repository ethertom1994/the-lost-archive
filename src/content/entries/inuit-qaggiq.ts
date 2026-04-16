import type { Entry } from '../../types';

export const inuitQaggiq: Entry = {
  slug: 'inuit-qaggiq',
  name: 'Inuit Qaggiq',
  tagline: 'Communal snow houses large enough for sixty people, built for ceremonies and gatherings. The knowledge to construct them faded when governments forced the Inuit indoors.',
  category: 'culture',
  subcategory: 'Lost Architecture',
  lastKnownYear: '~1960',
  lastKnownLocation: 'Canadian Arctic',
  coordinates: [63.75, -68.52],
  region: 'Arctic',
  status: 'extinct',
  cause: 'Canadian government forced settlement policies in the 1950s-60s relocated Inuit into permanent buildings, ending the semi-nomadic lifestyle that sustained qaggiq construction',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Houses of Gathering

The qaggiq was a large communal snow house built by Inuit communities for social gatherings, ceremonies, drum dances, storytelling, and feasts during the long Arctic winter. Unlike the smaller igluit (the familiar "igloo") built by individual families for seasonal shelter, the qaggiq was a monumental structure designed to hold dozens or even sixty or more people. It served as community hall, performance space, and ceremonial center for groups that might otherwise be scattered across hundreds of miles of sea ice and tundra.

Construction of a qaggiq required expert knowledge. The builder had to select snow of the right density and consistency, typically wind-packed snow that was firm enough to hold its shape when cut into blocks but porous enough to provide insulation. The blocks were cut with snow knives made of bone or antler, later of metal, and spiraled upward in a continuous ascending course that naturally formed a dome. For a qaggiq large enough to hold a major gathering, multiple domes might be joined together, with connecting passages and ventilation holes carefully positioned to manage temperature and airflow.

## Engineering in Snow

The structural engineering of the qaggiq was sophisticated. Snow is an excellent insulator, and a properly built qaggiq could maintain an interior temperature near freezing even when exterior temperatures dropped to minus 40 or below. The dome shape distributed structural loads efficiently, and the spiral construction technique meant that each block leaned inward against the previous one, creating a self-supporting structure that did not require centering or scaffolding. Ventilation was critical: too little air exchange and the occupants' body heat would melt the interior walls; too much and the structure would lose its warmth. Skilled builders calibrated ventilation holes and entrance tunnels to maintain the right balance.

The social function of the qaggiq was as important as its engineering. Gatherings brought together families and bands that had been living in small groups during the hunting season. The qaggiq hosted drum dances, a central Inuit musical and spiritual tradition. Song duels, in which disputes were resolved through competitive singing, took place in the qaggiq. Elders told stories. Marriages were arranged. News and knowledge were exchanged. The qaggiq was the Inuit equivalent of a town hall, a church, and a theater.

## Forced Indoors

The qaggiq tradition was destroyed not by environmental change but by government policy. Beginning in the 1950s, the Canadian government forcibly relocated Inuit families into permanent settlements, part of a broader program of Arctic sovereignty assertion and assimilation. Children were sent to residential schools. Families that had lived semi-nomadically, following caribou and seal across seasonal rounds, were confined to fixed communities with prefabricated houses. The qaggiq, which existed only in the context of mobile winter camps, became unnecessary. The last generation of builders who had constructed large ceremonial qaggiq grew old without passing the full scope of their knowledge to successors. Revitalization efforts exist today, but the continuous tradition of large-scale ceremonial qaggiq construction has been broken.`,
  quickFacts: {
    'Capacity': '60+ people in the largest qaggiq',
    'Material': 'Wind-packed snow blocks',
    'Construction': 'Spiral ascending dome, no scaffolding needed',
    'Tools': 'Snow knife (bone, antler, or metal)',
    'Interior Temperature': 'Near 0\u00B0C even at -40\u00B0C outside',
    'Function': 'Ceremonies, drum dances, feasts, storytelling',
    'Decline': '1950s-60s forced settlement policies',
  },
  connections: [
    { slug: 'feast-of-fools', relationship: 'Both were communal gatherings with deep social functions, spaces where normal rules were suspended and community bonds were renewed through shared ritual' },
    { slug: 'victorian-mourning', relationship: 'Both were elaborate cultural practices with strict protocols that disappeared when the social structures sustaining them were disrupted by modernity' },
  ],
  sources: [
    { title: 'The Igloo', author: 'Charlotte and David Falk', year: 2001 },
    { title: 'Inuit Architecture: The Qaggiq', author: 'Susan Rowley', year: 2005 },
    { title: 'The People\'s Land: Whites and the Eastern Arctic', author: 'Hugh Brody', year: 1975 },
    { title: 'Relocating the Inuit: The Federal Government\'s Cold War Experiment', author: 'Frank Tester & Peter Kulchyski', year: 1994 },
  ],
};
