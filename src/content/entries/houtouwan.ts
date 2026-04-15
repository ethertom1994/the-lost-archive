import type { Entry } from '../../types';

export const houtouwan: Entry = {
  slug: 'houtouwan',
  name: 'Houtouwan Village',
  tagline: 'A Chinese fishing village abandoned in the 1990s, now completely swallowed by climbing plants that blanket every rooftop, wall, and window.',
  category: 'place',
  subcategory: 'Abandoned Settlements',
  lastKnownYear: '~2002',
  lastKnownLocation: 'Shengshan Island, Zhoushan Archipelago, Zhejiang, China',
  coordinates: [30.73, 122.82],
  region: 'Asia',
  status: 'extinct',
  cause: 'Residents gradually relocated to mainland China due to declining fishing industry and lack of infrastructure; village fully abandoned by early 2000s',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Fishing Village on the Edge

Houtouwan sits on the northern coast of Shengshan Island, one of nearly 400 islands in the Shengshan archipelago off the coast of Zhejiang Province in eastern China. At its peak in the 1980s and early 1990s, the village was home to over 2,000 residents. It was a working fishing community, its stone houses stacked up a steep hillside overlooking the East China Sea, its harbor filled with boats that brought in the hairtail, cuttlefish, and yellow croaker that sustained the local economy.

The village had no road connection to the rest of the island. Supplies arrived by boat. There was no hospital, no secondary school, and limited electricity. As China's economy modernized in the 1990s, younger residents began leaving for opportunities on the mainland. The fishing stocks that had supported generations were declining from overfishing. One by one, families packed up and relocated.

## The Green Tide

By the early 2000s, Houtouwan was empty. What happened next was swift by architectural standards but slow enough that no one was watching. The subtropical climate of the Zhoushan Islands, warm and humid with abundant rainfall, created ideal conditions for climbing plants. Creeping fig, Boston ivy, and other vines began scaling the stone walls of the abandoned houses. Within a few years, the vegetation had reached the rooflines. Within a decade, entire buildings were invisible beneath thick blankets of green.

The transformation was total. Houses, staircases, walls, and pathways disappeared under cascading layers of foliage. Doorways became green tunnels. Windows vanished behind curtains of leaves. Rooftops became rolling hillocks of vegetation indistinguishable from the natural hillside. The village did not decay in the usual way of abandoned places, with crumbling walls and exposed interiors. Instead, it was absorbed, wrapped in a living skin that preserved the structures beneath while erasing every sign of human habitation from view.

## The Accidental Tourist Attraction

In 2015, a series of photographs of Houtouwan by photographer Joe Nafis went viral on Chinese social media. The images showed a village that appeared to have been claimed by a fairy tale, every surface alive with green, the geometry of human construction visible only as contours beneath the vegetation. The pictures attracted enormous attention, and Houtouwan became a tourist destination.

Located roughly forty miles from Shanghai by boat, the village now receives visitors who come to see what happens when nature reclaims a human settlement in real time. Local authorities on Shengshan Island have installed walkways and viewing platforms. A few former residents have returned to operate small shops catering to tourists. The village that died because people left has been partially reborn because people come to see it dead.

## What Remains

Beneath the vines, the stone houses of Houtouwan are largely intact. The village is simultaneously preserved and erased, its physical structure maintained by the very plants that hide it. It has become one of the most photographed examples of ecological succession in an urban environment, a living demonstration that nature's patience exceeds human ambition. Houtouwan is not ruined. It is wrapped.`,
  quickFacts: {
    'Peak Population': 'Over 2,000 residents',
    'Location': 'Shengshan Island, Zhoushan Archipelago, Zhejiang Province',
    'Distance from Shanghai': '~40 miles by sea',
    'Abandoned': 'Gradual exodus through 1990s, fully empty by ~2002',
    'Dominant Plants': 'Creeping fig, Boston ivy, and other climbing species',
    'Viral Moment': '2015 photographs by Joe Nafis on Chinese social media',
    'Current Status': 'Tourist attraction with viewing platforms installed',
  },
  connections: [
    { slug: 'pripyat', relationship: 'Both are abandoned settlements where nature has reclaimed human infrastructure, Pripyat by force, Houtouwan by neglect' },
    { slug: 'centralia', relationship: 'Both are towns emptied by circumstances beyond residents\' control, one by underground fire, the other by economic decline' },
  ],
  sources: [
    { title: 'Shengshan Island: The Abandoned Fishing Village Swallowed by Nature', author: 'Jane Qiu', year: 2015, url: 'https://www.bbc.com/travel/article/20150727-the-chinese-village-being-swallowed-by-nature' },
    { title: 'Houtouwan: China\'s Ghost Village', author: 'Joe Nafis', year: 2015 },
    { title: 'Abandoned Villages in the Zhoushan Archipelago', author: 'Zhejiang Provincial Government Cultural Survey', year: 2018 },
  ],
};
