import type { Entry } from '../../types';

export const owensLake: Entry = {
  slug: 'owens-lake',
  name: 'Owens Lake',
  tagline: 'A vast inland sea deliberately killed so Los Angeles could drink, inspiring Chinatown and leaving behind the worst dust storm source in North America.',
  category: 'place',
  subcategory: 'Drained Lakes',
  lastKnownYear: 1926,
  lastKnownLocation: 'Owens Valley, Inyo County, California, USA',
  coordinates: [36.43, -117.95],
  region: 'North America',
  status: 'extinct',
  cause: 'Los Angeles Aqueduct diverted the Owens River beginning in 1913, draining the lake completely by 1926',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Inland Sea

For thousands of years, Owens Lake spread across the floor of the Owens Valley in eastern California, a high desert basin flanked by the Sierra Nevada to the west and the Inyo Mountains to the east. At its peak it covered roughly 108 square miles of surface area and reached depths of 30 feet or more. Fed by the Owens River carrying snowmelt from the Sierras, it was a critical stopover for millions of migratory birds and supported a thriving community of Paiute people who harvested brine fly larvae from its alkaline waters as a protein-rich food source they called kutsavi.

By the late nineteenth century, the lake also anchored a regional economy. Steamboats carried silver ore across its surface from mines in the Cerro Gordo district. Ranchers irrigated pastures with its tributary waters. The town of Keeler, on its eastern shore, served as a shipping hub.

## The Water War

In the early 1900s, Los Angeles was a booming city with insufficient water. William Mulholland, superintendent of the Los Angeles Department of Water and Power, and Fred Eaton, a former mayor, devised a plan to acquire water rights in the Owens Valley and build a 233-mile aqueduct to deliver the river's flow to Los Angeles. The project required deception. Eaton posed as a rancher buying land for agriculture while secretly securing options for the city. When the scheme became public, valley residents were outraged but largely powerless.

The Los Angeles Aqueduct opened on November 5, 1913. Almost immediately, the Owens River's flow was captured and redirected south. The lake began to shrink. By the early 1920s, desperate ranchers dynamited sections of the aqueduct in acts of sabotage that became known as the California Water Wars. The resistance failed. By 1926, Owens Lake was dry.

## The Toxic Legacy

The exposed lakebed, roughly 110 square miles of fine alkaline sediment laced with arsenic, cadmium, and other heavy metals, became one of the most prolific sources of particulate matter air pollution in the United States. Winds sweeping down the valley lifted clouds of toxic dust that violated federal air quality standards by enormous margins. The Owens Lake playa generated more PM10 particulate pollution than any other single source in North America.

The environmental and health consequences for downwind communities were severe. Residents of Keeler, Lone Pine, and other Owens Valley towns breathed air thick with alkali dust. Respiratory illness rates climbed. The dust storms were so dense they reduced visibility to zero on Highway 395.

## Reckoning

In the 1990s, the Environmental Protection Agency ordered Los Angeles to mitigate the dust. The city has since spent over $2.5 billion on dust control measures, including shallow flooding, gravel cover, and managed vegetation on portions of the lakebed. These measures have reduced but not eliminated the problem.

The story of Owens Lake became a defining parable of American water politics. Roman Polanski's 1974 film Chinatown drew directly on the Owens Valley water grab for its plot. The real history was arguably darker than the fiction. A city three hundred miles away reached across a mountain range, took a river, killed a lake, and left behind a toxic wasteland that it is still paying to contain a century later.`,
  quickFacts: {
    'Original Size': '~108 square miles of surface area',
    'Fed By': 'Owens River (Sierra Nevada snowmelt)',
    'Drained By': 'Los Angeles Aqueduct (opened 1913)',
    'Fully Dry': '~1926',
    'Pollution': 'Worst single source of PM10 particulate matter in North America',
    'Dust Control Cost': 'Over $2.5 billion by Los Angeles DWP',
    'Cultural Impact': 'Inspired Roman Polanski\'s Chinatown (1974)',
    'Indigenous Use': 'Paiute people harvested brine fly larvae (kutsavi)',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both were massive inland water bodies deliberately drained by diverting their source rivers, with catastrophic environmental consequences' },
    { slug: 'lake-peigneur', relationship: 'Both are American lakes destroyed by human activity, one through deliberate diversion, the other by accidental drilling' },
    { slug: 'lake-texcoco', relationship: 'Both were lakes drained to serve urban growth, Lake Texcoco for Mexico City, Owens Lake for Los Angeles' },
  ],
  sources: [
    { title: 'Cadillac Desert: The American West and Its Disappearing Water', author: 'Marc Reisner', year: 1986 },
    { title: 'The Water Seekers', author: 'Remi Nadeau', year: 1950 },
    { title: 'Owens Lake Dust Mitigation Program', author: 'Great Basin Unified Air Pollution Control District', year: 2016, url: 'https://gbuapcd.org/OwensLake' },
    { title: 'Rivers of Empire: Water, Aridity, and the Growth of the American West', author: 'Donald Worster', year: 1985 },
  ],
  relatedMedia: [
    { type: 'book', title: 'Cadillac Desert', url: 'https://www.goodreads.com/book/show/56140.Cadillac_Desert', description: 'Marc Reisner\'s definitive account of water politics in the American West' },
    { type: 'documentary', title: 'Cadillac Desert (PBS)', url: 'https://www.pbs.org/kteh/cadillacdesert/', description: 'Four-part PBS documentary based on Reisner\'s book' },
  ],
};
