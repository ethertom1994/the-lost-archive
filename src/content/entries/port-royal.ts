import type { Entry } from '../../types';

export const portRoyal: Entry = {
  slug: 'port-royal',
  name: 'Port Royal',
  tagline: 'The wickedest city on Earth, where pirates spent fortunes in a single night. An earthquake dropped two-thirds of it into the Caribbean in minutes.',
  category: 'place',
  subcategory: 'Sunken Cities',
  lastKnownYear: 1692,
  lastKnownLocation: 'Kingston Harbour, Jamaica',
  coordinates: [17.93, -76.84],
  region: 'Caribbean',
  status: 'extinct',
  cause: 'Catastrophic earthquake on June 7, 1692 caused soil liquefaction, sinking two-thirds of the city into Kingston Harbour',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Capital of Buccaneers

Port Royal occupied a narrow sand spit at the entrance to Kingston Harbour, Jamaica. In the mid-seventeenth century, it became the unofficial capital of Caribbean piracy, a place where English privateers like Henry Morgan launched raids on Spanish colonies and returned to spend their plunder. By the 1680s, Port Royal had grown into one of the wealthiest and most densely populated cities in the English Americas. It housed an estimated 6,500 people packed into a settlement barely a quarter mile wide, with more taverns and brothels per square foot than anywhere in the colonial world. Contemporaries called it the wickedest city on Earth.

The wealth was real. Port Royal's merchants handled enormous quantities of looted Spanish gold and silver. The city boasted fine brick buildings, goldsmiths, and a commercial infrastructure that rivaled Boston and New York. Privateering had been officially sanctioned by the English crown as a tool of warfare against Spain, and Port Royal was its most profitable outpost. Even after the Treaty of Madrid in 1670 curtailed official privateering, the city's economy remained entangled with piracy.

## Eleven Minutes

At 11:43 in the morning on June 7, 1692, a massive earthquake struck southeastern Jamaica. The sandy soil beneath Port Royal liquefied almost instantly. Buildings, streets, and people slid into Kingston Harbour as the ground turned to fluid beneath them. Witnesses described watching entire blocks of buildings sink vertically into the earth, with the sand closing over them like water. The earthquake lasted approximately three minutes, but the destruction continued as a tsunami swept over the remaining land.

Two-thirds of the city disappeared beneath the harbor. Approximately 2,000 people died in the immediate disaster, with another 3,000 succumbing to injuries and disease in the following weeks. The survivors rebuilt on higher ground across the harbor at what became Kingston, but Port Royal never recovered its former scale or notoriety.

## Underwater Pompeii

The sunken portion of Port Royal is one of the most important underwater archaeological sites in the Western Hemisphere. Because the city sank rather than burned or eroded, artifacts were preserved in remarkable condition. Excavations beginning in the 1960s under Robert Marx and continuing under Donny Hamilton of Texas A&M University have recovered thousands of objects: pewter plates still set on tables, pocket watches stopped at 11:43, intact buildings with their contents undisturbed. The site has been called an underwater Pompeii for the way it preserves a snapshot of daily life at the moment of destruction. The wreckage lies in relatively shallow water, much of it under only about 40 feet, making it accessible but also vulnerable to hurricane damage and harbor development.`,
  quickFacts: {
    'Peak Population': '~6,500 (1680s)',
    'Destroyed': 'June 7, 1692',
    'Cause': 'Earthquake and soil liquefaction',
    'Deaths': '~2,000 immediate, ~3,000 from aftermath',
    'City Lost': 'Two-thirds sank into Kingston Harbour',
    'Depth': '~40 feet (12 meters) below harbor surface',
    'Notable Resident': 'Henry Morgan, privateer turned lieutenant governor',
    'Archaeological Work': 'Ongoing since 1960s',
  },
  connections: [
    { slug: 'helike', relationship: 'Both cities were destroyed by earthquakes and swallowed by water, becoming underwater time capsules of their respective eras' },
    { slug: 'library-of-alexandria', relationship: 'Both were centers of wealth and knowledge destroyed in sudden catastrophes, leaving only fragments of their former significance' },
  ],
  sources: [
    { title: 'Port Royal, Jamaica', author: 'Donny L. Hamilton', year: 2006, url: 'https://nautarch.tamu.edu/portroyal/' },
    { title: 'A True and Faithful Account of the Earthquake in Jamaica', author: 'Anonymous (Council of Jamaica)', year: 1692 },
    { title: 'Port Royal Rediscovered', author: 'Robert F. Marx', year: 1973 },
    { title: 'Apocalypse 1692: Empire, Slavery, and the Great Port Royal Earthquake', author: 'Ben Hughes', year: 2017 },
  ],
};
