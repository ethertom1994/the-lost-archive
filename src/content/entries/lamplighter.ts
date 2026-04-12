import type { Entry } from '../../types';

export const lamplighter: Entry = {
  slug: 'lamplighter',
  name: 'Full-Time Lamplighter',
  tagline: 'Every evening at dusk, they walked the streets with a long pole and lit the city one flame at a time. Electrification erased the profession in a single generation.',
  category: 'culture',
  subcategory: 'Extinct Professions',
  lastKnownYear: 1930,
  lastKnownLocation: 'European and American cities (last holdouts in smaller towns)',
  coordinates: [51.51, -0.13],
  region: 'Global',
  status: 'extinct',
  cause: 'Replacement of gas street lighting by electric lighting, which could be switched on remotely',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Evening Ritual

Before electric street lighting, cities went dark at sunset. The lamplighter's job was to push back that darkness, one lamp at a time. Armed with a long pole, usually with a small flame at the tip and a hook for reaching the gas valve, a lamplighter would walk a assigned route through the city at dusk, stopping at each lamp post to turn the gas valve and touch the flame to the mantle. The lamp would hiss to life, casting a warm yellowish circle on the street below.

At dawn, the same lamplighter (or a colleague on the morning shift) would reverse the route, extinguishing each lamp. In rain, they carried covers to protect the pilot flame. In wind, they cupped their hands around the mantle until it caught. In fog, they were sometimes the only moving figures visible on entire blocks, ghostly shapes with long poles walking from one island of light to the next.

## The Scale

At its peak in the late 1800s, London employed over 1,500 lamplighters to maintain roughly 80,000 gas lamps. Paris had a comparable number. New York, Boston, Philadelphia, and every major European and American city had a corps of lamplighters. The profession was steady, unionized in many cities, and respected. It was unglamorous work but essential. Without lamplighters, cities were simply dark after sunset.

A typical lamplighter could light about sixty lamps per hour, managing a route of several hundred lamps over an evening. Routes were assigned by district, and experienced lamplighters could complete their rounds by muscle memory, barely breaking stride as they reached up, turned the valve, and touched the flame. Children would follow them, watching the street come alive one lamp at a time.

## The Light Switch

Thomas Edison's electric lighting system, demonstrated in 1882, did not immediately kill the lamplighter. Gas lighting was cheaper and more established, and electric infrastructure took decades to build out. But the advantage of electricity was decisive: a central switch could illuminate an entire district simultaneously. No one needed to walk a route at dusk.

By 1910, electric lighting was dominant in major cities. By the 1920s, gas street lamps were being removed or converted. The lamplighter profession, which had existed for over 150 years, vanished within a single generation. Men who had walked the same routes for decades found their jobs simply did not exist anymore.

## A Poem's Worth of Memory

Robert Louis Stevenson immortalized the lamplighter in a children's poem published in 1885: "For we are very lucky, with a lamp before the door, / And Leerie stops to light it as he lights so many more." Stevenson wrote it during the brief window when lamplighters were still a daily presence but already felt nostalgic, a profession that everyone could see was ending.

The poem endures. The profession does not. The last gas street lamps in most cities were converted to electric or preserved as heritage fixtures. A handful of cities maintain decorative gas lamps, but no one lights them by hand. The lamplighter exists now only in Stevenson's verse and in the soft hiss of gas lamps in period films, a profession as extinct as the darkness it was designed to fight.`,
  quickFacts: {
    'Peak Employment': '1,500+ in London alone (late 1800s)',
    'London Gas Lamps': '~80,000 at peak',
    'Lighting Speed': '~60 lamps per hour',
    'Primary Tool': 'Long pole with flame tip and gas valve hook',
    'Replaced By': 'Electric street lighting (centrally switched)',
    'Literary Legacy': 'Robert Louis Stevenson, "The Lamplighter" (1885)',
  },
  connections: [
    { slug: 'knocker-upper', relationship: 'Both were daily-life professions made obsolete by technology, one by electric lights, the other by alarm clocks' },
    { slug: 'tanganyika', relationship: 'Both represent things that once defined the character of a place and vanished so completely that their absence is no longer noticed' },
  ],
  sources: [
    { title: 'A Child\'s Garden of Verses', author: 'Robert Louis Stevenson', year: 1885 },
    { title: 'The Age of Edison: Electric Light and the Invention of Modern America', author: 'Ernest Freeberg', year: 2013 },
    { title: 'London: A Social History', author: 'Roy Porter', year: 1994 },
  ],
};
