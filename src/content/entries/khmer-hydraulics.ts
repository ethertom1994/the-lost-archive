import type { Entry } from '../../types';

export const khmerHydraulics: Entry = {
  slug: 'khmer-hydraulics',
  name: 'Khmer Hydraulic Engineering',
  tagline: 'A water network that fed three quarters of a million people from hand-built reservoirs the size of lakes. When Angkor fell, the knowledge drained away with it.',
  category: 'technology',
  subcategory: 'Lost Infrastructure',
  lastKnownYear: 1431,
  lastKnownLocation: 'Angkor, Cambodia',
  coordinates: [13.41, 103.87],
  region: 'Southeast Asia',
  status: 'extinct',
  cause: 'Sack of Angkor by Ayutthaya (Thai) forces in 1431 and subsequent abandonment; the engineering class that maintained the system dispersed',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Hydraulic City

Angkor was not just a temple complex. It was a hydraulic civilization, a society whose power, prosperity, and very existence depended on the management of water. At its height in the twelfth and thirteenth centuries, the Khmer Empire's capital region supported an estimated 750,000 people across an urban sprawl of roughly 1,000 square kilometers, making it the largest pre-industrial city on Earth. Every aspect of this settlement was organized around water infrastructure of a scale and sophistication unmatched in the medieval world.

The system's most visible features were the barays, enormous rectangular reservoirs built by excavating millions of cubic meters of earth. The West Baray, completed in the eleventh century, measures 8 kilometers long by 2.1 kilometers wide and held approximately 56 million cubic meters of water. The East Baray, older and now dry, was even larger. These were not natural lakes but entirely artificial constructions, built by hand without metal tools or wheeled vehicles, requiring the coordinated labor of tens of thousands of workers over decades.

## How It Worked

The barays were the anchors of a network of canals, moats, distribution channels, and rice paddies that captured, stored, and distributed the monsoon rains. Cambodia's climate produces extreme wet and dry seasons; the barays smoothed this cycle, storing monsoon water and releasing it during the dry months to irrigate rice paddies that produced two or three crops per year. This multi-cropping capacity was the economic engine of the Khmer Empire, generating the surplus that funded Angkor Wat, the Bayon, and hundreds of other temple complexes.

Recent lidar surveys have revealed that the water network was far more extensive and sophisticated than ground-level archaeology had suggested. The entire Angkor region was threaded with a hierarchy of channels, from major canals linking the barays to micro-channels distributing water to individual field plots. The system required constant maintenance: channels silted, embankments eroded, and distribution structures needed seasonal adjustment. Managing this infrastructure was a full-time undertaking requiring specialized knowledge passed down within the administrative class.

## Collapse

The fall of Angkor was intimately connected to its water system. Dendrochronological and sedimentary evidence shows that the fourteenth and fifteenth centuries brought severe droughts interspersed with catastrophic floods, stressing the hydraulic network beyond its design capacity. When Ayutthaya forces sacked Angkor in 1431, the Khmer court relocated south to Phnom Penh. The administrative class that had managed the water system dispersed. Without maintenance, canals silted, embankments breached, and the carefully balanced hydrology collapsed within decades. The jungle reclaimed the infrastructure, and the engineering knowledge to build and manage a water system of this scale passed out of living memory.`,
  quickFacts: {
    'Peak Population': '~750,000 in the Angkor region',
    'West Baray Size': '8 km x 2.1 km, ~56 million cubic meters',
    'Urban Area': '~1,000 square kilometers',
    'Rice Harvests': '2-3 per year (enabled by irrigation)',
    'Construction': 'Hand-excavated without metal tools or wheels',
    'Capital Abandoned': '1431 CE',
    'Modern Discovery': 'Lidar surveys (2012-2015) revealed full extent',
  },
  connections: [
    { slug: 'roman-hydraulics', relationship: 'Both were ancient hydraulic systems of enormous scale that sustained large populations and were lost when the empires that maintained them collapsed' },
    { slug: 'balinese-subak', relationship: 'Both are Southeast Asian water management systems encoding deep hydrological knowledge; the subak survived where the Khmer system did not' },
  ],
  sources: [
    { title: 'The Civilization of Angkor', author: 'Charles Higham', year: 2001 },
    { title: 'Greater Angkor and the Hydraulic City', author: 'Damian Evans et al.', year: 2007, url: 'https://doi.org/10.1017/S0003598X00094023' },
    { title: 'Airborne Laser Scanning of the Angkor Region', author: 'Damian Evans et al.', year: 2013 },
    { title: 'The Fall of Angkor', author: 'Brendan M. Buckley et al.', year: 2010 },
  ],
};
