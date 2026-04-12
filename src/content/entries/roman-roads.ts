import type { Entry } from '../../types';

export const romanRoads: Entry = {
  slug: 'roman-roads',
  name: 'Roman Road-Building Technique',
  tagline: 'Roman roads lasted 2,000 years. Modern asphalt lasts 20. We didn\'t lose the knowledge. We decided it was too expensive.',
  category: 'technology',
  subcategory: 'Superseded Techniques',
  lastKnownYear: 400,
  lastKnownLocation: 'Roman Empire (roads survive across Europe, North Africa, and the Middle East)',
  coordinates: [41.89, 12.49],
  region: 'Mediterranean / Europe',
  status: 'extinct',
  cause: 'Too labor-intensive and expensive for modern construction at scale, replaced by cheaper asphalt methods',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Built to Last Millennia

The Roman road network eventually covered more than 250,000 miles, connecting every corner of the empire from Scotland to Mesopotamia. Portions of these roads are still in use today, two thousand years after construction. The Appian Way, built in 312 BCE, still has stretches of original paving stones with the ruts of ancient cart wheels visible in the surface.

The construction method was systematic and overbuilt. A typical Roman road began with a trench dug to bedrock or firm subsoil. The first layer was large stones set in mortar. Above that, a layer of smaller stones and gravel in cement. Then a layer of fine gravel and sand. Finally, the surface: tightly fitted polygonal stone blocks, cambered (raised in the center) to shed water to drainage ditches on either side.

The total depth could exceed four feet. The engineering was designed for permanence, not for speed or economy of construction. Roman roads were built by legions, by slaves, and by conscripted labor. Cost was measured in human time, and the empire had plenty.

## Why They Lasted

The durability of Roman roads comes from three factors. First, the deep multi-layer foundation distributed weight and prevented the subsoil movement that destroys modern thin-surface roads. Second, the stone surface was essentially waterproof and wear-resistant, unlike asphalt, which degrades under UV exposure and water infiltration. Third, the cambered surface and drainage system kept water away from the foundation, the single most destructive force acting on any road.

Modern road engineers understand all of this. The principles are taught in every civil engineering program. The question is not knowledge but economics.

## The Modern Trade-Off

A modern asphalt road costs roughly $2-5 million per mile for a two-lane highway. A Roman-style stone road, built with modern labor costs, would cost many times that. The asphalt road lasts 15-25 years before requiring major resurfacing. The Roman road lasted centuries. Over a sufficient time horizon, the Roman road is cheaper. But road budgets operate on 5-10 year cycles, and no politician gets credit for a road that lasts 500 years.

The result is a system that builds cheap and rebuilds constantly. The United States alone spends over $50 billion annually on road maintenance and repair, much of it repairing roads that were built to a twenty-year standard. The total lifecycle cost of this approach may exceed what Roman-style construction would have cost, but the cost is distributed over time in a way that makes it politically manageable.

## We Know How

The Roman road technique is not lost in the way that Greek fire or Damascus steel is lost. We have the roads themselves to examine. We have Vitruvius's descriptions. We have modern materials science that could improve on the original. What we have lost is not the knowledge but the will to apply it. The idea that infrastructure should be built to last for centuries, rather than for the next budget cycle, has become as foreign as the empire that practiced it.`,
  quickFacts: {
    'Total Network': '250,000+ miles at peak',
    'Construction Depth': 'Up to 4+ feet, multiple layers',
    'Surface Material': 'Fitted polygonal stone blocks, cambered for drainage',
    'Surviving Examples': 'Appian Way (312 BCE), roads across Europe and North Africa',
    'Modern Asphalt Lifespan': '15-25 years before major repair',
    'Roman Road Lifespan': '2,000+ years and counting',
  },
  connections: [
    { slug: 'roman-concrete', relationship: 'Both demonstrate Roman engineering that outlasted the empire by millennia, built with methods we understand but choose not to use' },
    { slug: 'great-hedge-india', relationship: 'Both are infrastructure projects of staggering scale that modern societies would struggle to replicate' },
  ],
  sources: [
    { title: 'Roman Roads', author: 'Raymond Chevallier', year: 1976 },
    { title: 'De Architectura', author: 'Vitruvius', year: -25 },
    { title: 'The Construction of Roman Roads', author: 'Hugh Davies', year: 2008 },
  ],
};
