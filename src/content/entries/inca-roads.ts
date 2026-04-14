import type { Entry } from '../../types';

export const incaRoads: Entry = {
  slug: 'inca-roads',
  name: 'The Inca Road System',
  tagline: '40,000 km of roads through the Andes, built without the wheel, iron tools, or draft animals. When Spain conquered the Inca, the living maintenance system collapsed. The roads began to crumble.',
  category: 'technology',
  subcategory: 'Infrastructure',
  lastKnownYear: 1572,
  lastKnownLocation: 'Andes Mountains, South America (Ecuador to Chile)',
  coordinates: [-13.16, -72.55],
  region: 'South America',
  status: 'functionally_extinct',
  cause: 'Spanish conquest destroyed the mit\'a labor system that maintained the roads. Without annual renewal of bridges and surfaces, sections deteriorated. Colonial roads followed different routes. Surviving fragments are now archaeological sites.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Greatest Road System No One Drove

The Qhapaq Ñan — the Inca royal road — was not one road but a network: over 40,000 kilometers of paths, highways, bridges, tunnels, and causeways connecting the largest empire in pre-Columbian America, from Quito in modern Ecuador through Cusco to Santiago in modern Chile. It traversed some of the most extreme terrain on Earth: 6,000-meter Andean passes, coastal deserts, tropical cloud forests, and the deep canyons of the western Andes.

It was built without the wheel (which the Inca never used for transport), without iron tools (stone, bronze, and wood sufficed), and without draft animals (llamas carried loads but were not harnessed). It was built by human labor organized through the mit'a system — a rotational labor tax in which communities contributed workers for public projects. And it worked.

## Engineering the Impossible

The engineering was adapted to each environment. In the highlands, the road was a paved stone causeway, sometimes 8 meters wide, with drainage channels and retaining walls. In steep mountain terrain, it became a stairway carved into living rock. In swamps, it ran on elevated causeways. In deserts, it was marked by low walls or lines of stones. Across rivers and chasms, the Inca built suspension bridges from braided ichu grass cables — the longest spanning over 45 meters.

The most famous of these rope bridges, the Q'eswachaka, crossed the Apurímac River. It was rebuilt every year by the local community in a ceremony combining engineering and ritual. Fresh ichu grass was braided into cables, the old bridge was cut away and allowed to fall into the gorge, and the new cables were strung and woven into a walkable surface. This annual renewal — the bridge as a living, maintained organism rather than a permanent structure — was the key to the system's longevity.

## The Collapse of Maintenance

When the Spanish conquered the Inca Empire in the 1530s-1570s, they dismantled the mit'a system (or rather, repurposed it for mining). The communities that had maintained the roads and bridges were reassigned, displaced, or decimated by disease. Without annual maintenance, the grass bridges rotted. Stone surfaces cracked and washed away. The road network — designed to be continuously renewed — began to die.

The Spanish built their own roads, often on different routes suited to wheeled vehicles and horses. Large sections of the Inca road were abandoned. Today, an estimated 25,000 km of the original network survive as fragments — some still used as footpaths, others excavated as archaeological sites. In 2014, UNESCO designated the Qhapaq Ñan as a World Heritage Site spanning six countries. The Q'eswachaka bridge is still rebuilt annually by the local community, the last living link to a transportation system that once connected a continent.`,
  quickFacts: {
    'Total Length': '~40,000 km',
    'Empire': 'Tawantinsuyu (Inca Empire)',
    'Span': 'Ecuador to Chile (6 modern countries)',
    'Built Without': 'Wheel, iron, draft animals',
    'Labor System': 'Mit\'a (rotational community labor)',
    'Bridge Material': 'Ichu grass cables (renewed annually)',
    'Surviving': '~25,000 km of fragments',
    'UNESCO Status': 'World Heritage Site (2014)',
  },
  connections: [
    { slug: 'roman-roads', relationship: 'The two greatest road networks of the ancient world — one in Europe, one in the Americas — built by empires that never knew each other existed' },
    { slug: 'quipu', relationship: 'The Inca road system was administered using quipu — the knotted-string recording devices that are the other great Inca technology' },
    { slug: 'great-hedge-india', relationship: 'Both continent-spanning infrastructure projects that served an empire\'s administrative needs' },
  ],
  sources: [
    { title: 'The Great Inka Road: Engineering an Empire', author: 'Smithsonian National Museum of the American Indian', year: 2015 },
    { title: 'The Incas', author: 'Terence N. D\'Altroy', year: 2014 },
    { title: 'Qhapaq Ñan: World Heritage nomination dossier', author: 'UNESCO', year: 2014 },
    { title: 'The Last Bridge Master', author: 'National Geographic', year: 2014 },
  ],
};
