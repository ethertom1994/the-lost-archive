import type { Entry } from '../../types';

export const saturnVCraft: Entry = {
  slug: 'saturn-v-craft',
  name: 'Saturn V Manufacturing Knowledge',
  tagline: 'The blueprints for the F-1 engine still exist. What does not exist is the workforce who knew which welds had to be re-done, which tolerances could be fudged, and which components were hand-fitted by people who wrote nothing down. When NASA engineers tried to resurrect the engine in 2013, they had to reverse-engineer it from surviving hardware.',
  category: 'technology',
  subcategory: 'Industrial and Manufacturing',
  lastKnownYear: 1970,
  lastKnownLocation: 'Rocketdyne plant, Canoga Park, California',
  coordinates: [34.20, -118.59],
  region: 'North America',
  status: 'functionally_extinct',
  cause: 'Retirement and death of the original engineers, loss of supplier networks, obsolescence of manufacturing techniques, absence of formal documentation for tacit knowledge',
  imageUrl: undefined,
  body: `## The Documentation Myth

A common story about the Apollo program goes like this: NASA destroyed the plans for the Saturn V. It is not true. The design documents for the Saturn V, including its five F-1 first-stage engines, are still archived. Thousands of pages of schematics, test reports, and internal memos sit in NASA's Marshall Space Flight Center archives, the Library of Congress, and digital collections. In a narrow sense, the blueprints were never lost.

What was lost is something harder to archive. The F-1 engine — the largest single-chamber liquid-fuel rocket engine ever successfully flown, producing 1.5 million pounds of thrust — was built between 1959 and 1970 by a workforce of roughly 6,000 people across Rocketdyne and its suppliers. That workforce figured out how to make the engine work by trial, failure, and undocumented fix. When NASA attempted to revive F-1 technology for the planned Space Launch System around 2012, engineers discovered that the paper record omitted most of what actually mattered.

## Hand-Fitted, Hand-Fixed

The F-1 was not an assembly-line product. Every one of the 65 flown engines was effectively hand-built. Welds on the combustion chamber were inspected, re-done, and re-inspected. The injector plate — the disc that sprayed kerosene and liquid oxygen into the chamber — had a pattern of holes whose exact dimensions and angles were tuned empirically to suppress combustion instability. Early tests had seen the engine literally tear itself apart in less than a second from oscillations the engineers did not fully understand. The solution was found by detonating small explosive charges inside firing engines until the injector design stopped ringing. No theoretical model ever captured why the final pattern worked. The pattern was the knowledge.

Engineers kept their own handwritten notes. Supervisors knew which welders could hold which tolerances. Procurement knew which foundry produced usable castings and which did not. None of this went into the formal documentation. Propulsion Engineer Tom Mueller of SpaceX has said publicly that when his team examined F-1 records in the 2000s, they found drawings but no instructions on how to actually make the components — the human chain that converted drawings to hardware was gone.

## The 2013 Resurrection Attempt

In 2012 and 2013, a small NASA team at Marshall Space Flight Center tried to restore an F-1 gas generator — the subsystem that drives the engine's turbopump — to firing condition, as a test of whether F-1 technology could feed into modern heavy-lift design. They did not work from the original drawings. They reverse-engineered a surviving test-stand engine using 3D scans, because the physical hardware was the only source that reflected what had actually been built, as opposed to what had been designed.

The team succeeded in firing the gas generator, but they concluded that rebuilding a flight-ready F-1 using 1960s techniques was not possible. Modern manufacturing — additive manufacturing, computer-controlled machining, modern welding — would have to replace the old craft knowledge. They were not restoring the engine; they were building a related new thing.

## What Knowledge Is

The Saturn V case is a compact demonstration of what engineers call tacit knowledge. It is the skill in a welder's hand, the intuition of a senior engineer who has seen a given failure mode before, the half-sentence advice passed between coworkers at a coffee machine. It is what makes a written blueprint executable. When the people carrying it retire or die without apprentices, the artifact the knowledge produced remains, but the capacity to reproduce it does not.

The Saturn V flew for the last time in 1973, carrying Skylab into orbit. The generation that built it has now largely passed. A modern space program can send humans to the Moon again, but it cannot rebuild the Saturn V. It will have to build something else.`,
  quickFacts: {
    'Vehicle': 'Saturn V, F-1 engine (first stage)',
    'Builder': 'Rocketdyne (engine), North American Aviation / Boeing (stages)',
    'Production run': '1959-1970',
    'Engines flown': '65 (13 vehicles, 5 engines each)',
    'Last flight': 'May 14, 1973 (Skylab launch)',
    'Lost': 'Supplier networks, tacit craft knowledge, undocumented engineering fixes',
  },
  connections: [
    { slug: 'arecibo-telescope', relationship: 'Both are 20th-century megaprojects whose operational expertise has largely died with the workforce that built them' },
    { slug: 'concorde', relationship: 'Both are mid-20th-century aerospace achievements whose manufacturing base has dissolved and which cannot now be rebuilt as originally flown' },
    { slug: 'damascus-steel', relationship: 'Both are classic cases of a physical artifact surviving while the tacit craft knowledge that produced it is lost' },
  ],
  sources: [
    {
      title: 'Waking a Giant: Bringing the Saturn F-1 Engine Back to Life',
      url: 'https://ntrs.nasa.gov/api/citations/20140011656/downloads/20140011656.pdf',
      author: 'NASA Marshall Space Flight Center',
      year: 2014,
    },
    {
      title: 'How NASA Brought the F-1 Rocket Engine Back To Life — Ars Technica',
      url: 'https://arstechnica.com/science/2013/04/how-nasa-brought-the-monstrous-f-1-moon-rocket-back-to-life/',
      year: 2013,
    },
    {
      title: 'Rocketdyne F-1 — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Rocketdyne_F-1',
    },
  ],
  keyDate: '1973-05-14',
  keyDateLabel: 'Last Saturn V flight',
};
