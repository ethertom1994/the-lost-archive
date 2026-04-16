import type { Entry } from '../../types';

export const chimuHydraulics: Entry = {
  slug: 'chimu-hydraulics',
  name: 'Chimu Intervalley Hydraulics',
  tagline: 'On the driest coast in South America, the Chimu engineered underground aqueducts, filtration galleries, and a seventy-kilometre canal meant to move one river into the basin of another. They had no written language and no blueprints. The Inca conquered them, and the techniques went with their engineers.',
  category: 'technology',
  subcategory: 'Lost Engineering',
  lastKnownYear: 1470,
  lastKnownLocation: 'Chan Chan, Chimor Kingdom (modern northern Peru)',
  coordinates: [-8.11, -79.08],
  region: 'South America',
  status: 'extinct',
  cause: 'Inca conquest c. 1470; forced relocation of Chimu engineers and craftsmen to Cuzco; subsequent Spanish conquest',
  imageUrl: undefined,
  body: `## Water Where There Is Almost None

The north coast of Peru receives less rainfall per year than many deserts. The Chimu, whose kingdom of Chimor was centred at the city of Chan Chan and at its height stretched roughly a thousand kilometres along the Pacific shoreline, built one of the largest dryland agricultural systems in the pre-industrial world on the basis of careful capture and movement of river water from the Andes. Chan Chan itself, a mud-brick city of nine enormous royal enclosures, housed around 30,000 people at its peak in the fifteenth century and drew water not from its immediate river but from engineered distributions.

The Chimu technical toolkit included *puquios*-style underground galleries that tapped the water table and moved water laterally beneath the desert surface to minimise evaporation; strategically placed reservoirs (*huachaques*) that captured seasonal flood; deep wells lined with dressed stone; and networks of raised stone-lined canals that crossed intervening dry valleys on low causeways. Modern computer-flow analyses of surviving canal geometries have shown that Chimu engineers were selecting channel gradients and cross-sections that balanced transport capacity against erosion and siltation, a type of open-channel hydraulic reasoning that was not formalised in European engineering until the nineteenth century.

## The Canal That Was Never Finished

Their most ambitious project was the La Cumbre Canal, sometimes called the Chicama-Moche Intervalley Canal. Around the year 1000, a combination of severe drought and tectonic uplift began lowering the water table on the Moche River and threatened the Chimu capital. In response, the kingdom started a canal to divert water from the Chicama River, fifty to seventy kilometres to the north, across an intervening watershed and into the Moche drainage. Surveying was done without transit instruments and without written records. Modern measurements along the preserved stretches show that the Chimu engineers maintained gradients of a fraction of a percent over tens of kilometres, through shifting sand and across active tectonic terrain.

The canal was never completed. Some combination of tectonic shifting, siltation, and probably political disruption before the Inca conquest ended the project. Parts of it still cross the desert, visible from the air, a line of low walls running towards an end that was never reached.

## Conquest and Erasure

Around 1470, the Inca emperor Tupac Yupanqui conquered Chimor. According to Inca and early Spanish accounts, the conquest included the standard Inca procedure for a major state: the royal court was deposed and Chimu craftsmen, specifically metal-workers and engineers, were resettled near Cuzco under state supervision. The surviving Chan Chan nobility held diminished authority. Less than seventy years later the Spanish arrived, the Inca state itself was destroyed, and the Chimu craft lineages that had survived in diaspora were scattered a second time. By the late sixteenth century the irrigation systems they had built were silting up; the Spanish administrators who replaced them, coming from a Mediterranean hydraulic tradition built around short gravity channels, did not understand or maintain the long intervalley galleries.

The Chimu had no written language, so there is no manual, no book, no set of drawings describing how they surveyed seventy-kilometre canals or designed their filtration galleries. What is lost is not the fact that these structures existed, since many still do, in varying states of ruin. What is lost is the method, the accumulated craft knowledge of how a particular lineage of engineers, without instruments and without drawings, had learned over centuries to read terrain and water in the dryest coast in the Americas. The techniques persisted for a few generations in memory. Then they did not.`,
  quickFacts: {
    'Capital': 'Chan Chan, modern Peru',
    'Peak Population': 'c. 30,000 at Chan Chan',
    'Signature Project': 'La Cumbre (Chicama-Moche Intervalley) Canal',
    'Canal Length Attempted': 'c. 70 km across a watershed divide',
    'Instruments Used': 'None known; no written language',
    'Conquest': 'Inca under Tupac Yupanqui, c. 1470',
  },
  connections: [
    { slug: 'khmer-hydraulics', relationship: 'Both were sophisticated medieval hydraulic civilisations whose operational expertise vanished with the collapse of the state that sustained it' },
    { slug: 'inca-roads', relationship: 'The Inca absorbed Chimu engineers and probably some of their knowledge before losing both states to the Spanish' },
    { slug: 'mesopotamian-marshes', relationship: 'Both involved large-scale water management that shaped desert or arid landscapes and cannot now be reconstructed from documents' },
  ],
  sources: [
    { title: 'Hydraulic Engineering Aspects of the Chimu Chicama-Moche Intervalley Canal', author: 'Charles R. Ortloff', year: 1985 },
    { title: 'Chan Chan: Andean Desert City', author: 'Michael E. Moseley and Kent C. Day (eds.)', year: 1982 },
    { title: 'Chan Chan (UNESCO World Heritage)', url: 'https://whc.unesco.org/en/list/366/' },
    { title: 'Chimu culture - Wikipedia', url: 'https://en.wikipedia.org/wiki/Chimor' },
  ],
};
