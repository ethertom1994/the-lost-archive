import type { Entry } from '../../types';

export const amazonianCities: Entry = {
  slug: 'amazonian-cities',
  name: 'Pre-Columbian Amazonian Cities',
  tagline: 'Millions of people built cities in the rainforest. Disease killed ninety percent before anyone wrote down what they saw.',
  category: 'place',
  subcategory: 'Vanished Civilizations',
  lastKnownYear: '~1540',
  lastKnownLocation: 'Amazon Basin, South America',
  coordinates: [-3.0, -60.0],
  region: 'South America',
  status: 'extinct',
  cause: 'European diseases wiped out an estimated 90% of the population before sustained European contact; knowledge of urban planning, agriculture, and governance died with them',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Cities That Were Not Supposed to Exist

For centuries, Western scholars insisted that the Amazon rainforest could not support large populations. The soils were too poor, the environment too hostile, the jungle too dense for anything beyond small nomadic bands. This assumption was wrong. Recent LiDAR surveys, which use laser pulses from aircraft to map the ground beneath the forest canopy, have revealed the remains of extensive urban settlements across the Amazon Basin. In the upper Xingu region of Brazil, researchers have identified clusters of towns connected by wide, straight roads, surrounded by managed orchards and agricultural fields. In Bolivia's Llanos de Mojos, LiDAR has uncovered networks of canals, causeways, raised fields, and forest islands supporting settlements of ten thousand or more people.

The Spanish explorer Francisco de Orellana, who traveled the length of the Amazon in 1542, described dense populations along the river: towns that stretched for miles along the banks, roads leading inland, and organized resistance from large forces. Later explorers found the same stretches nearly empty. For centuries, historians dismissed Orellana's accounts as exaggeration. The archaeological evidence now suggests he was telling the truth.

## The Catastrophe Between Observations

The gap between Orellana's observations and the depopulated Amazon encountered by later Europeans is explained by one of history's greatest demographic catastrophes. European diseases, particularly smallpox, measles, and influenza, traveled faster than the Europeans themselves. Epidemics spread along trade networks into populations with no prior exposure and no immunity. Estimates suggest that eighty to ninety percent of the indigenous Amazonian population died within the first century of contact, many before they ever saw a European.

The knowledge systems of these civilizations died with them. The people who built these cities knew how to create terra preta, the extraordinarily fertile black soil that sustained agriculture in nutrient-poor tropical conditions. They knew how to manage forests as productive landscapes, cultivating useful trees while suppressing competitors. They had systems of governance that coordinated thousands of people across connected settlements.

## The Forest Reclaimed

Within decades of depopulation, the forest reclaimed the abandoned settlements. Roads were overgrown, earthworks eroded, and wooden structures rotted. By the time European colonists arrived in force, the jungle looked primeval, as if it had never been touched. The cities vanished so completely that their existence was denied for four hundred years, until technology finally revealed what the forest had hidden.`,
  quickFacts: {
    'Population Estimates': 'Possibly 8-10 million people in the Amazon Basin pre-contact',
    'Settlement Size': 'Towns of 10,000+ with roads, plazas, and managed forests',
    'Key Technology': 'Terra preta soil creation, forest management, hydraulic engineering',
    'First European Report': 'Francisco de Orellana, 1542',
    'Population Collapse': '~80-90% mortality from European diseases',
    'Rediscovery Method': 'LiDAR aerial surveys, 2010s-present',
    'Key Regions': 'Upper Xingu (Brazil), Llanos de Mojos (Bolivia), Acre state (Brazil)',
  },
  connections: [
    { slug: 'terra-preta', relationship: 'Terra preta was the agricultural foundation of Amazonian urbanism; the soil survives but the knowledge of how to create it was lost with the civilizations that made it' },
    { slug: 'inca-roads', relationship: 'Both represent vast pre-Columbian infrastructure systems destroyed by European contact, one in the Andes and one in the lowland Amazon' },
  ],
  sources: [
    { title: '1491: New Revelations of the Americas Before Columbus', author: 'Charles C. Mann', year: 2005 },
    { title: 'The Lost City of Z', author: 'David Grann', year: 2009 },
    { title: 'Amazonia: Man and Culture in a Counterfeit Paradise', author: 'Betty Meggers', year: 1971 },
  ],
};
