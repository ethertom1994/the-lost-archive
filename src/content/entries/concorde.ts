import type { Entry } from '../../types';

export const concorde: Entry = {
  slug: 'concorde',
  name: 'Concorde',
  tagline: 'Commercial supersonic flight existed from 1976 to 2003. London to New York in 3.5 hours. Then it ended. For the first time in aviation history, the next generation was slower.',
  category: 'technology',
  subcategory: 'Retired Technology',
  lastKnownYear: 2003,
  lastKnownLocation: 'London Heathrow and Paris Charles de Gaulle (final flights)',
  coordinates: [51.47, -0.46],
  region: 'Global',
  status: 'extinct',
  cause: 'Economic unsustainability after the 2000 crash, post-9/11 aviation downturn, and rising maintenance costs',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Three and a Half Hours

On January 21, 1976, Concorde entered commercial service simultaneously for British Airways and Air France. It flew at Mach 2.04, twice the speed of sound, at an altitude of 60,000 feet, where the curvature of the Earth was visible and the sky turned dark blue. A flight from London to New York took three hours and thirty minutes. Because of the time zone difference, passengers arrived before they departed by the clock. You could leave London at 10:30 AM and arrive in New York at 9:25 AM the same day.

The aircraft itself was beautiful in the way that extreme engineering produces beauty: a needle-nosed delta wing, a droop-nose that tilted down for visibility during landing, and a fuselage that heated to over 100 degrees Celsius at cruise speed due to air friction. The cabin was narrow, about 100 seats, with leather upholstery and champagne service. It was, in every sense, the fastest way to cross an ocean.

## The Economics

Concorde was never commercially viable in the conventional sense. Only twenty were built (fourteen production aircraft). Only two airlines operated them. The fuel consumption was enormous: roughly four times as much per passenger-mile as a conventional subsonic jet. Tickets cost several thousand dollars, affordable only to the wealthy and to business travelers on expense accounts.

British Airways and Air France operated Concorde as a prestige service and, in later years, as a profitable niche product serving a small, wealthy clientele. But the economics depended on everything going right: high load factors, minimal maintenance downtime, and no disruptions to demand.

## The End

On July 25, 2000, Air France Flight 4590 crashed during takeoff from Paris after running over a piece of debris on the runway, which ruptured a fuel tank. All 109 people aboard and four on the ground were killed. It was Concorde's only fatal accident, but it shattered the aircraft's reputation for safety and grounded the fleet for over a year.

The fleet returned to service in November 2001, two months after the September 11 attacks. The aviation industry was in crisis. Business travel had collapsed. The combination of the crash, the downturn, rising maintenance costs for an aging fleet, and the withdrawal of Airbus support made continued operation unsustainable.

On October 24, 2003, the last Concorde flights landed at London Heathrow. The supersonic age was over.

## Going Backwards

For the first time in the history of powered flight, the generation of aircraft that followed was slower than the one it replaced. A traveler in 2003 could cross the Atlantic in 3.5 hours. A traveler in 2004 needed 7 or 8. The same journey takes the same time today.

Several companies have announced plans to develop new supersonic commercial aircraft, but as of 2024, none is in passenger service. Concorde's retirement represents a rare case of technological regression: a capability that existed, that worked, and that was abandoned not because it was impossible but because it was expensive. The sky that was once crossed at twice the speed of sound is now crossed at half that speed, and the people who remember the difference are getting older every year.`,
  quickFacts: {
    'Speed': 'Mach 2.04 (1,354 mph)',
    'London-New York Time': '3 hours 30 minutes',
    'Cruise Altitude': '60,000 feet',
    'Aircraft Built': '20 (14 production)',
    'In Service': '1976-2003',
    'Current Supersonic Commercial Flights': 'Zero',
  },
  connections: [
    { slug: 'starlite', relationship: 'Both represent technological capabilities that existed and were lost, one through secrecy, the other through economics' },
    { slug: 'arecibo-telescope', relationship: 'Both represent the retirement of extraordinary technology without replacement, leaving a gap that remains unfilled' },
  ],
  sources: [
    { title: 'Concorde: The Rise and Fall of the Supersonic Airliner', author: 'Jonathan Glancey', year: 2015 },
    { title: 'Concorde', author: 'Brian Trubshaw', year: 2000 },
    { title: 'Last Days of the Concorde', author: 'Samme Chittum', year: 2018 },
  ],
};
