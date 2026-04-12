import type { Entry } from '../../types';

export const bakelite: Entry = {
  slug: 'bakelite',
  name: 'The Bakelite Formula',
  tagline: 'The first fully synthetic plastic, built to last forever. The industry that followed it was built on disposability. The material that started the plastic age is the one modern plastics can\'t replicate.',
  category: 'material',
  subcategory: 'Lost Manufacturing Processes',
  lastKnownYear: 1945,
  lastKnownLocation: 'Bakelite Corporation factories, United States and Europe',
  coordinates: [40.89, -74.04],
  region: 'Global',
  status: 'extinct',
  cause: 'Replaced by cheaper thermoplastics that could be mass-produced more quickly, original manufacturing knowledge dispersed',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Material of a Thousand Uses

In 1907, Belgian-American chemist Leo Baekeland heated phenol and formaldehyde under pressure in a sealed reactor he called the "Bakelizer." The result was a hard, dark, lustrous material that could be molded into any shape and, once set, could not be melted, dissolved, or reshaped. He called it Bakelite, and it was the first fully synthetic plastic, a material with no equivalent in nature.

Bakelite was extraordinary. It was heat-resistant, electrically insulating, chemically stable, and scratch-resistant. It could be polished to a warm, deep glow in shades of amber, brown, black, green, and red. It felt substantial in the hand, heavier and warmer than the cheap plastics that would follow it. The Bakelite Corporation marketed it as "the material of a thousand uses," and for once the advertising was understated.

## What It Became

Between 1910 and 1940, Bakelite was everywhere. Telephone housings, radio casings, electrical plugs, camera bodies, jewelry, buttons, pipe stems, billiard balls, distributor caps, and kitchen handles. The Art Deco movement embraced it. Designers created bracelets, brooches, and desk sets in marbled Bakelite that are now collected as art objects. The material's warmth and depth gave everyday objects a quality that transcended their function.

The manufacturing process was labor-intensive. Bakelite is a thermoset plastic: once molded under heat and pressure, it cannot be remelted or reformed. Each piece required careful preparation of the resin, precise control of temperature and pressure during molding, and often hand-finishing afterward. The process was slower and more skilled than the injection molding of modern thermoplastics.

## The Replacement

After World War II, the chemical industry pivoted to thermoplastics: polyethylene, polypropylene, polystyrene, and their descendants. These materials were cheaper, lighter, faster to produce, and could be melted and remolded. They were also flimsier, less durable, and aesthetically inferior. But they were cheap, and cheap won.

Bakelite production declined through the 1950s and 1960s. The Bakelite Corporation was acquired and merged. The specific formulations, pigment recipes, and molding techniques that had produced the distinctive warmth and luster of vintage Bakelite were gradually lost as the workforce retired and the equipment was scrapped.

## The Irony

Modern chemists can make phenolic resins, the chemical class to which Bakelite belongs. But reproducing the specific qualities of original Bakelite, the depth of color, the warmth to the touch, the weight, the glow after polishing - has proven difficult. The original formulations included proprietary fillers, pigments, and additives that were never fully published. The molding conditions were controlled by experienced operators who worked by feel as much as by specification.

The deepest irony of Bakelite is this: the first plastic was made to last. It was heavy, beautiful, and indestructible. Every plastic that followed it was made to be thrown away. The material that launched the age of disposability was itself the least disposable thing the industry ever produced. Vintage Bakelite pieces from the 1930s still glow, still feel warm, still work. The plastic bag that replaced them lasts twenty minutes.`,
  quickFacts: {
    'Invented': '1907 by Leo Baekeland',
    'Type': 'Thermoset phenolic resin (cannot be remelted)',
    'Properties': 'Heat-resistant, electrically insulating, warm to touch',
    'Peak Production': '1920s-1940s',
    'Replaced By': 'Cheaper thermoplastics (polyethylene, polypropylene)',
    'Collectibility': 'Vintage Bakelite is now prized by collectors and designers',
  },
  connections: [
    { slug: 'fordite', relationship: 'Both are materials from the industrial age that are now valued as art objects, prized for qualities that modern manufacturing cannot replicate' },
    { slug: 'roman-concrete', relationship: 'Both are materials where the original manufacturing process produced superior results that modern equivalents struggle to match' },
  ],
  sources: [
    { title: 'Bakelite: The Material of a Thousand Uses', author: 'Leo Baekeland', year: 1909 },
    { title: 'American Plastic: A Cultural History', author: 'Jeffrey Meikle', year: 1995 },
    { title: 'Bakelite Jewelry: A Collector\'s Guide', author: 'Matthew Burkholz and Linda Kaplan', year: 1997 },
  ],
};
