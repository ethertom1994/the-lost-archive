import type { Entry } from '../../types';

export const mesopotamianMarshes: Entry = {
  slug: 'mesopotamian-marshes',
  name: 'The Mesopotamian Marshes',
  tagline: 'Twenty thousand square kilometers of reed-choked wetland at the confluence of the Tigris and Euphrates — the likely inspiration for the Garden of Eden, home to the Marsh Arabs for five thousand years. Between 1991 and 2003 Saddam Hussein\'s government drained ninety percent of it on purpose. A portion has been reflooded. The old marshes, and much of the civilization they held, have not come back.',
  category: 'place',
  subcategory: 'Destroyed Wetlands',
  lastKnownYear: 2003,
  lastKnownLocation: 'Southern Iraq, between Basra, Nasiriyah, and Amarah',
  coordinates: [30.95, 47.0],
  region: 'Middle East',
  status: 'functionally_extinct',
  cause: 'Deliberate state-ordered draining by Saddam Hussein\'s government after the 1991 Shia uprising; upstream damming of the Tigris and Euphrates; salinity intrusion',
  imageUrl: undefined,
  body: `## The World the Marshes Made

The marshes of southern Iraq formed where the Tigris and Euphrates rivers slowed, divided, and spread across a shallow alluvial basin before reaching the Persian Gulf. Under normal conditions they covered around 20,000 square kilometers — roughly the size of Wales — and they had done so, with seasonal variation, for at least five millennia. The Sumerians knew them. Uruk sat on their northern edge. Biblical scholars have identified them as a plausible setting for the Eden tradition.

The people who lived there, the Maʿdan or Marsh Arabs, built island villages from bundled qasab reeds on platforms that floated on matted vegetation. The mudhif — the traditional Marsh Arab guest hall — was a cathedral of reed, constructed entirely of bundled grass without a single nail or plank. A fisherman would leave his village in a tarada, a long canoe coated in bitumen, and navigate by landmarks invisible to outsiders. Water buffalo grazed on floating reed islands. The economy ran on fish, dates, reeds, and rice. In the early twentieth century, around 500,000 Maʿdan lived in the marshes.

## The 1991 Reprisal

After the 1991 Gulf War, Shia Muslims in southern Iraq rose up against Saddam Hussein's government. The Marsh Arabs sheltered many of the rebels. Reprisals began immediately. When the rebellion was crushed, Saddam's regime began a project to drain the marshes wholesale, in order to deny the rebels any future refuge and to collectively punish the Maʿdan.

The engineering was vast. Three enormous canals — named with regime sarcasm the Third River, the Mother of Battles Canal, and the Loyalty to the Leader Channel — were cut across the wetland to divert the Tigris and Euphrates directly to the Gulf, bypassing the marshes. Dams, dykes, and pumped drainage completed the work. By 2000, satellite imagery showed that roughly 90 percent of the marsh area had been reduced to cracked salt flat. The Maʿdan population, which had already been declining, collapsed. Most of the surviving 500,000 were driven into Iran, into Iraqi cities, or into refugee camps. The United Nations called the draining "a tragic human and environmental catastrophe" comparable to the deforestation of the Amazon.

## The Partial Return

After the fall of the Baʿath government in 2003, local communities began breaking the dykes themselves. International agencies and the new Iraqi government followed. By 2006, water had returned to roughly half the former marsh area. Birds came back. Some fish. A smaller number of Maʿdan returned to rebuild. In 2016, UNESCO designated parts of the restored marshes a World Heritage Site.

But the marshes have not recovered as an ecosystem. Upstream damming on the Tigris and Euphrates by Turkey and Iran, drought driven by climate change, and salinity intrusion from the Gulf mean that the reflooded areas receive much less water, with much higher salt content, than the historic marshes. As of the mid-2020s, the reflooded areas have again begun shrinking and salinizing. Researchers describe the modern marshes as a different, smaller, saltier ecosystem — not the five-thousand-year wetland that was drained.

The Maʿdan way of life — reed villages, water-buffalo dairying at scale, the economy of bitumen canoes and floating islands — has not come back with the water. Most of the people who remembered how to build a mudhif from nothing but reeds are now dead or living as urban displaced. The knowledge is documented in books. It is no longer practiced in the marshes on the scale it was practiced in 1990.`,
  quickFacts: {
    'Historic extent': 'Approximately 20,000 km² (size of Wales)',
    'Draining period': '1991-2003',
    'Peak drainage': 'Approximately 90% of surface area lost by 2000',
    'Population displaced': 'Estimated 200,000-500,000 Maʿdan',
    'Restoration': 'Partial reflooding beginning 2003; UNESCO listing 2016',
    'Current threat': 'Upstream damming, climate drought, salinity intrusion',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both are 20th-century destructions of a vast inland water body by deliberate human engineering, with irreversible ecological and cultural consequences' },
    { slug: 'lake-texcoco', relationship: 'Both are cases of an enormous native wetland drained for political and economic reasons, with the destruction of the indigenous water-based culture that depended on it' },
  ],
  sources: [
    {
      title: 'Draining of the Mesopotamian Marshes — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Draining_of_the_Mesopotamian_Marshes',
    },
    {
      title: 'After Comeback, Southern Iraq\'s Marshes Are Now Drying Up — Yale Environment 360',
      url: 'https://e360.yale.edu/features/iraq-marshes-drought-climate-change',
    },
    {
      title: 'Reclaiming Mesopotamia\'s Marshes — NASA Earth Observatory',
      url: 'https://science.nasa.gov/earth/earth-observatory/world-of-change/mesopotamia-marshes',
    },
  ],
  keyDate: '2000',
  keyDateLabel: 'Drainage reached ~90% of marsh area',
};
