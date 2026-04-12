import type { Entry } from '../../types';

export const greatHedgeIndia: Entry = {
  slug: 'great-hedge-india',
  name: 'The Great Hedge of India',
  tagline: 'A 2,500-mile living wall of thorny bushes maintained by 12,000 guards to enforce a salt tax. Most Indians have never heard of it.',
  category: 'culture',
  subcategory: 'Erased Structures',
  lastKnownYear: 1879,
  lastKnownLocation: 'Across central India, from the Himalayas to Odisha',
  coordinates: [24.0, 78.0],
  region: 'South Asia',
  status: 'extinct',
  cause: 'Abandoned after the salt tax was reformed, the hedge was left to decay and was largely forgotten within decades',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Customs Line

In 1803, the British East India Company inherited a problem. They controlled salt production in parts of India but not in others. Salt from regions where it was cheap could be smuggled into regions where the Company taxed it heavily. The price difference was enormous. The tax, at its peak, could double or triple the cost of salt to consumers, a burden that fell hardest on the poorest Indians, for whom salt was a daily necessity.

The solution was the Inland Customs Line: a physical barrier running across central India, from the Himalayas in the north to Odisha in the east, designed to prevent the movement of untaxed salt. It began as a series of customs posts and patrol routes, but by the 1840s it had evolved into something far more ambitious.

## The Living Wall

The barrier became a hedge. Not a decorative garden border, but a military fortification made of thorny bushes, primarily Indian plum, babool, and prickly pear. At its peak, the Great Hedge was over 2,500 miles long, twelve feet high, and fourteen feet thick. It was dense enough that a person could not push through it. Where the hedge couldn't grow (in rocky or arid terrain), dry thorn barriers and stone walls filled the gaps.

Twelve thousand men were employed to maintain and patrol it. Their job was to check every person and cart that passed through designated crossing points, inspect goods for untaxed salt, and impose duties. The hedge was, in effect, a customs border running through the middle of a country, splitting the subcontinent in two.

## The Cost

The salt tax the hedge enforced was devastating. Salt is a biological necessity, especially in hot climates where people lose salt through sweat. For millions of poor Indians, the inflated price of salt caused real suffering. British administrators acknowledged this in internal reports but maintained the tax because it generated enormous revenue: at its peak, salt duties accounted for roughly ten percent of British Indian revenue.

Mahatma Gandhi's famous Salt March of 1930, in which he walked 240 miles to the sea to make salt in defiance of the British monopoly, was a protest against a system whose physical infrastructure had included the hedge. By 1930, the hedge was gone, but the tax endured until Indian independence.

## The Forgetting

The Great Hedge was abandoned in 1879 after a reorganization of salt tax collection made the physical barrier unnecessary. Without maintenance, the living portions died and decayed. The dry barriers scattered. Within a few decades, the hedge had virtually disappeared.

British historian Roy Moxham stumbled upon a reference to the hedge in the 1990s and spent years tracking its route. He found almost nothing. A few stretches of slightly different vegetation. A line of old trees. Mostly, he found that no one, British or Indian, remembered it existed. A structure that had been one of the largest in the world, longer than the Great Wall of China, maintained by thousands, affecting millions, had been erased from memory within a century.`,
  quickFacts: {
    'Length': '~2,500 miles',
    'Height': 'Up to 12 feet',
    'Patrol Staff': '12,000 men',
    'Purpose': 'Enforce British salt tax by blocking untaxed salt movement',
    'Operational Period': '~1840s-1879',
    'Rediscovered By': 'Roy Moxham, published 2001',
  },
  connections: [
    { slug: 'tanganyika', relationship: 'Both are colonial-era constructs that shaped millions of lives and were then almost completely forgotten' },
    { slug: 'library-of-alexandria', relationship: 'Both represent the erasure not just of a thing, but of the memory that the thing existed' },
  ],
  sources: [
    { title: 'The Great Hedge of India', author: 'Roy Moxham', year: 2001 },
    { title: 'Salt: A World History', author: 'Mark Kurlansky', year: 2002 },
    { title: 'The Customs Line in India', author: 'W.S. Halsey', year: 1877 },
  ],
};
