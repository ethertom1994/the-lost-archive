import type { Entry } from '../../types';

export const mauritiusDodoEcosystem: Entry = {
  slug: 'mauritius-dodo-ecosystem',
  name: 'The Dodo\'s Ecosystem',
  tagline: 'The dodo wasn\'t alone. When it vanished from Mauritius, the tambalacoque tree stopped germinating. The extinction of one species was the slow death sentence of another.',
  category: 'flora',
  subcategory: 'Ecological Cascades',
  lastKnownYear: 1681,
  lastKnownLocation: 'Mauritius, Indian Ocean',
  coordinates: [-20.35, 57.55],
  region: 'Indian Ocean',
  status: 'functionally_extinct',
  cause: 'The extinction of the dodo (by ~1681) disrupted seed dispersal for the tambalacoque tree and other endemic species. Without the dodo\'s digestive system to scarify seeds, germination rates collapsed.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Invisible Thread

When Dutch sailors exterminated the dodo on Mauritius by around 1681, they didn't just kill a bird. They severed an ecological relationship that had evolved over millions of years. The full consequences took centuries to become visible.

In 1973, the American ecologist Stanley Temple observed that the tambalacoque tree (*Sideroxylon grandiflorum*), a Mauritian endemic, appeared to be dying out. Only about 13 old trees remained, and none were younger than approximately 300 years — roughly the time since the dodo's extinction. Temple hypothesized that the dodo had been the tree's primary seed disperser: the bird ate the tree's fruit, and the passage through the dodo's gizzard — a muscular organ containing stones that ground food — scarified the extremely hard seed coat, allowing germination.

Without the dodo, Temple argued, the seeds simply couldn't germinate. The existing trees were the last generation that had been processed by dodo digestive systems. When those trees died, the species would follow.

## The Debate

Temple's hypothesis was contested. Other researchers pointed out that some tambalacoque seeds can germinate without passing through a bird, that introduced turkeys and tortoises might serve as substitute dispersers, and that the age estimates of surviving trees might be inaccurate. The relationship between dodo and tambalacoque may not have been as obligate as Temple proposed.

But the broader principle is now well established across ecology: many plants depend on specific animals for seed dispersal, and when those animals go extinct, the plants enter a slow decline that ecologists call "extinction debt." The tree doesn't die immediately — it can live for centuries. But without its disperser, it stops reproducing. The extinction is already complete. It just hasn't finished happening yet.

## The Ghosts of Mauritius

Mauritius has lost far more than the dodo. The island's pre-human ecosystem included giant tortoises (which may have been even more important seed dispersers than the dodo), large skinks, fruit bats, parrots, and rails — most now extinct. Each extinction cascaded into others, disrupting pollination, seed dispersal, and nutrient cycling in ways that are still unfolding.

The remaining Mauritian flora is a ghost ecosystem: trees that evolved to be eaten by animals that no longer exist, producing fruits that no living creature disperses effectively. They stand like monuments to relationships we destroyed before we even understood they existed.`,
  quickFacts: {
    'Dodo Extinct': '~1681',
    'Tambalacoque': 'Sideroxylon grandiflorum',
    'Surviving Trees (1973)': '~13 (all 300+ years old)',
    'Hypothesis': 'Temple (1977) — dodo-dependent germination',
    'Concept': 'Extinction debt — delayed ecological collapse',
    'Other Lost Dispersers': 'Giant tortoises, large skinks',
    'Location': 'Mauritius, Indian Ocean',
    'Current Status': 'Tambalacoque critically endangered',
  },
  connections: [
    { slug: 'dodo', relationship: 'The dodo entry covers the bird; this entry covers what happened to the ecosystem after the bird disappeared' },
    { slug: 'cafe-marron', relationship: 'Both Mascarene island plants critically endangered by the loss of their natural ecological partners' },
    { slug: 'cedars-of-lebanon', relationship: 'Both iconic trees reduced to tiny remnant populations, struggling to reproduce without their original ecosystem' },
  ],
  sources: [
    { title: 'Plant-Animal Relationships and the Dodo', author: 'Stanley Temple, Science', year: 1977 },
    { title: 'The Dodo and the Tambalacoque Tree', author: 'Anthony Cheke & Julian Hume', year: 2008 },
    { title: 'Lost Land of the Dodo', author: 'Anthony Cheke & Julian Hume', year: 2008 },
    { title: 'Extinction Debt and the Conservation Crisis', author: 'David Tilman et al.', year: 1994 },
  ],
};
