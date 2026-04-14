import type { Entry } from '../../types';

export const silphiumSpice: Entry = {
  slug: 'silphium-spice',
  name: 'The Flavor of Silphium',
  tagline: 'Rome\'s most prized seasoning, worth its weight in silver. The original flavor is permanently unknown.',
  category: 'food',
  subcategory: 'Lost Flavors',
  lastKnownYear: '~1st century CE',
  lastKnownLocation: 'Cyrenaica (modern Libya)',
  coordinates: [32.82, 21.86],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Overharvesting of the silphium plant, which resisted cultivation, led to extinction of both plant and flavor',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Seasoning That Built a City

The silphium plant had many uses: medicine, contraceptive, perfume. But for the kitchens of Rome, it was above all a flavor. The resin extracted from its stem and root, called *laser* or *laserpicium*, was the defining seasoning of Roman haute cuisine. Apicius, whose cookbook is the closest thing we have to a Roman culinary bible, calls for silphium in dozens of recipes, from sauces for grilled fish to elaborate meat preparations. It was so valuable that the Roman treasury kept a stockpile of it, and Cyrene, the North African city that controlled the only known wild supply, put the plant on its coins.

What did it taste like? We do not know. Pliny compared it favorably to other aromatics. Ancient descriptions suggest something pungent and complex, with notes that bridged savory and medicinal. But descriptions of flavor are notoriously unreliable, and no ancient writer thought to describe silphium precisely because everyone already knew what it tasted like.

## The Knockoff

The Romans themselves recognized the problem of supply. As silphium grew scarcer and more expensive, cooks turned to asafoetida, a resin from a related plant (*Ferula assa-foetida*) imported from Persia. Ancient sources are explicit that asafoetida was a substitute, a cheaper alternative that approximated the original. Modern food historians often suggest that asafoetida gives us a rough idea of silphium's flavor profile: sulfurous, garlicky, pungent, with an umami depth.

But asafoetida was the knockoff. Romans who could afford the original used the original. The difference was apparently significant enough to justify prices equivalent to silver by weight. Whatever made silphium distinct from its substitute has been lost with the plant itself.

## The Irreplicable Recipe

The disappearance of silphium's flavor creates a unique problem for culinary history. We have the recipes. We have substitutes that the Romans themselves used. But we cannot know what the dishes actually tasted like when made with the intended ingredient. Every reconstruction of a Roman recipe that calls for silphium is, at best, an educated approximation built on a foundation of ignorance. How do you replicate a recipe when the key ingredient no longer exists on Earth?`,
  quickFacts: {
    'Roman Name': 'Laser / Laserpicium (the resin)',
    'Source Plant': 'Silphium (Ferula sp., exact species unknown)',
    'Value': 'Worth its weight in silver denarii',
    'Appearances in Apicius': 'Dozens of recipes across multiple categories',
    'Modern Substitute': 'Asafoetida (Ferula assa-foetida)',
    'Source Region': 'Cyrenaica (coastal Libya)',
    'Extinction Period': '~1st century CE',
  },
  connections: [
    { slug: 'silphium', relationship: 'The plant itself is a separate entry; this entry covers the permanent culinary loss' },
    { slug: 'garum', relationship: 'Both lost Roman flavors that defined an entire cuisine, now reconstructable only through approximation' },
  ],
  sources: [
    { title: 'Apicius: A Critical Edition', author: 'Christopher Grocock & Sally Grainger', year: 2006 },
    { title: 'Silphium Reconsidered', author: 'John M. Riddle', year: 1992 },
    { title: 'Natural History', author: 'Pliny the Elder', year: 77 },
    { title: 'Food in the Ancient World from A to Z', author: 'Andrew Dalby', year: 2003 },
  ],
};
