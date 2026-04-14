import type { Entry } from '../../types';

export const pripyat: Entry = {
  slug: 'pripyat',
  name: 'Pripyat',
  tagline: 'A model Soviet city for 49,000 people. Evacuated one day after Chernobyl. Residents were told they would return in three days. They never did.',
  category: 'place',
  subcategory: 'Abandoned Cities',
  lastKnownYear: 1986,
  lastKnownLocation: 'Pripyat, Kyiv Oblast, Ukraine',
  coordinates: [51.41, 30.05],
  region: 'Eastern Europe',
  status: 'extinct',
  cause: 'Catastrophic nuclear accident at Chernobyl Nuclear Power Plant (Reactor No. 4) on April 26, 1986. Radiation contamination rendered the city permanently uninhabitable.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Model City

Pripyat was built to be perfect. Founded in 1970 as a closed city for workers at the Chernobyl Nuclear Power Plant, it was designed according to the most modern Soviet urban planning principles. Wide boulevards, apartment blocks with central heating, a palace of culture, a cinema, a sports center with a swimming pool, schools, hospitals, and shops. By 1986, its population had reached 49,360 — young, educated, well-paid nuclear industry workers and their families.

The average age in Pripyat was 26. It was one of the youngest cities in the Soviet Union, filled with new families and children. An amusement park with a Ferris wheel and bumper cars had been built and was scheduled to open on May 1, 1986, for the May Day celebrations. It would never open.

## 36 Hours

At 1:23 AM on April 26, 1986, Reactor No. 4 of the Chernobyl Nuclear Power Plant exploded during a safety test gone catastrophically wrong. The explosion and subsequent fire released massive amounts of radioactive material into the atmosphere. Pripyat, located just 3 kilometers from the reactor, was directly downwind.

For 36 hours, the city's residents were not evacuated. Official announcements were delayed by bureaucratic confusion and the Soviet instinct to suppress bad news. Children played outdoors. People stood on a railway bridge to watch the glow of the burning reactor, unaware they were being irradiated. Some reportedly said the fire was "beautiful."

On the afternoon of April 27, buses arrived. Residents were told to pack for three days. They left meals on tables, clothes in closets, toys on floors. Most took almost nothing. Many never returned. The evacuation was permanent, though nobody used that word at the time.

## The Ghost City

Pripyat has been uninhabitable ever since. The Exclusion Zone surrounding Chernobyl — a 30-kilometer radius — remains in effect. The city stands as it was left: apartment blocks with curtains still in windows, schools with textbooks still on desks, the amusement park rides rusting in place. Trees have grown through buildings. Wolves, wild boar, and Przewalski's horses roam the streets.

The radiation levels have dropped dramatically since 1986 but remain too high for permanent habitation. Short-term visits are permitted — Pripyat became a tourist destination before Russia's 2022 invasion temporarily closed access. Visitors walk through a time capsule: a city frozen on a spring day in 1986, decaying slowly under rain and frost and the patient encroachment of the forest.

The amusement park that was supposed to open on May 1, 1986 — its yellow Ferris wheel, its bumper cars in candy colors — has become one of the most photographed images of the nuclear age. A playground built for children who were evacuated five days before they could ride it.`,
  quickFacts: {
    'Founded': '1970',
    'Population (1986)': '49,360',
    'Average Resident Age': '26 years',
    'Distance to Reactor': '3 km',
    'Explosion Date': 'April 26, 1986 (1:23 AM)',
    'Evacuation': 'April 27, 1986 (afternoon)',
    'Told to Pack For': '3 days',
    'Status': 'Permanently uninhabitable (Exclusion Zone)',
  },
  connections: [
    { slug: 'centralia', relationship: 'Both towns abandoned due to invisible underground threats — one radiation, one a coal fire — both frozen in time' },
    { slug: 'aral-sea', relationship: 'Both Soviet-era environmental catastrophes whose consequences outlasted the Soviet Union itself' },
    { slug: 'lop-nur', relationship: 'Both places made uninhabitable by 20th-century industrial/military decisions' },
  ],
  sources: [
    { title: 'Voices from Chernobyl', author: 'Svetlana Alexievich', year: 2005 },
    { title: 'Midnight in Chernobyl', author: 'Adam Higginbotham', year: 2019 },
    { title: 'Chernobyl: The History of a Nuclear Catastrophe', author: 'Serhii Plokhy', year: 2018 },
    { title: 'IAEA Report on the Chernobyl Accident', author: 'INSAG-7', year: 1992 },
  ],
};
