import type { Entry } from '../../types';

export const lakePeigneur: Entry = {
  slug: 'lake-peigneur',
  name: 'Lake Peigneur',
  tagline: 'A 10-foot-deep freshwater lake swallowed whole in three hours when an oil drill punctured the salt mine beneath it.',
  category: 'place',
  subcategory: 'Transformed Landscapes',
  lastKnownYear: 1980,
  lastKnownLocation: 'New Iberia, Louisiana, USA',
  coordinates: [30.02, -91.99],
  region: 'North America',
  status: 'extinct',
  cause: 'Texaco oil rig accidentally drilled into Diamond Crystal Salt Company mine, draining the entire lake into the caverns below',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  keyDate: '11-20',
  keyDateLabel: 'Lake Peigneur disaster, 1980',
  body: `## The Quiet Morning

On the morning of November 20, 1980, Lake Peigneur was a shallow, placid body of water in Iberia Parish, Louisiana. At its deepest point it measured roughly ten feet. Its shores held the Rip Van Winkle Gardens, a botanical park established on Jefferson Island, and the lake supported a modest local fishing economy. Beneath the lakebed, three hundred feet down, the Diamond Crystal Salt Company operated a salt mine with miles of tunnels carved from a massive underground salt dome.

A Texaco oil rig, Rig No. 32, was drilling an exploratory well from a platform on the lake. At approximately 7:30 that morning, the fourteen-inch drill bit punched through the ceiling of the third level of the salt mine below.

## The Drain Opens

What happened next defied comprehension. The drill hole, small enough at first, was rapidly widened by the dissolving action of fresh water on salt. Within minutes, the opening was large enough to swallow the drilling platform. The entire lake began to drain into the mine like water down a bathtub drain.

A whirlpool formed at the breach point, growing to an estimated quarter mile in diameter. The vortex swallowed the $5 million Texaco drilling rig, eleven barges from a canal connected to the lake, a tugboat, 65 acres of land from Jefferson Island including trees and structures, and portions of the botanical gardens. The Live Oak Gardens greenhouse slid into the vortex. A parking lot with trucks vanished. The whirlpool's pull was so powerful that it temporarily reversed the flow of the Delcambre Canal, which normally drained into Vermilion Bay. Gulf of Mexico saltwater was pulled backward through the canal and into the void, creating a 150-foot waterfall into the mine as the last of the lake drained.

Fifty-five miners were working underground when the breach occurred. They escaped with their lives only because mine supervisor Junius Gaddison ordered an immediate evacuation the moment he noticed murky water appearing on the mine floor. All fifty-five reached the surface via elevator shafts with minutes to spare.

## The Aftermath

The entire lake drained in approximately three hours. The formerly ten-foot-deep freshwater lake refilled over the following days with salt water from the Gulf, pulled in through the canal. When equilibrium was reached, the new Lake Peigneur was 200 feet deep and saline. The mine was permanently flooded and never reopened. Nine of the eleven swallowed barges eventually popped back to the surface days later, ejected by air pressure from the flooded mine caverns.

Remarkably, no human lives were lost. The three Texaco employees on the rig escaped when they felt the platform tilting. A local fisherman whose boat was caught in the whirlpool's current managed to reach shore.

## The Lake That Is No More

Today, a body of water called Lake Peigneur still exists on maps. But it is a different lake in every meaningful sense. The shallow freshwater ecosystem that supported bass, catfish, and cypress trees is gone, replaced by a deep saltwater body with an entirely different ecology. The landscape itself was reshaped: Jefferson Island lost 65 acres of its shoreline in a single afternoon. The salt mine, representing decades of excavation and millions in infrastructure, is permanently sealed beneath the water.

The original Lake Peigneur was not destroyed by a natural disaster. It was destroyed by a miscalculation, a misalignment between the Texaco drilling coordinates and the Diamond Crystal mine maps that placed a fourteen-inch drill bit exactly where it should never have been.`,
  quickFacts: {
    'Date': 'November 20, 1980',
    'Original Depth': '~10 feet (freshwater)',
    'Current Depth': '~200 feet (saltwater)',
    'Cause': 'Texaco drill pierced Diamond Crystal Salt Company mine',
    'Swallowed': 'Oil rig, 11 barges, tugboat, 65 acres of land, botanical gardens',
    'Casualties': 'Zero (all 55 miners and 3 rig workers escaped)',
    'Whirlpool Diameter': 'Estimated quarter mile',
    'Time to Drain': 'Approximately 3 hours',
  },
  connections: [
    { slug: 'aral-sea', relationship: 'Both were bodies of water destroyed by human activity, the Aral Sea by diversion, Lake Peigneur by accidental puncture' },
    { slug: 'centralia', relationship: 'Both are places permanently transformed by industrial accidents that created conditions humans could not reverse' },
    { slug: 'owens-lake', relationship: 'Both are American lakes destroyed by human activity, one deliberately for water, the other accidentally through drilling' },
  ],
  sources: [
    { title: 'Lake Peigneur: The Swirling Vortex of Doom', author: 'Mike Williams', year: 2001, url: 'https://www.upi.com/Archives/1980/11/21/Oil-rig-drilling-mishap-drains-entire-Louisiana-lake/1141343630800/' },
    { title: 'The Lake Peigneur Disaster', author: 'American Oil & Gas Historical Society', year: 2019, url: 'https://aoghs.org/offshore-history/lake-peigneur/' },
    { title: 'Jefferson Island Salt Mine Flooding Disaster', author: 'Louisiana Geological Survey', year: 1981 },
  ],
  relatedMedia: [
    { type: 'documentary', title: 'Swallowed by a Sinkhole', url: 'https://www.youtube.com/watch?v=p_iZr2-Coqc', description: 'Documentary covering the Lake Peigneur disaster and its aftermath' },
  ],
};
