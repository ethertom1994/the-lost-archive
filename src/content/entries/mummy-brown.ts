import type { Entry } from '../../types';

export const mummyBrown: Entry = {
  slug: 'mummy-brown',
  name: 'Mummy Brown',
  tagline: 'A pigment literally made from ground-up Egyptian mummies, used by painters until the supply ran out.',
  category: 'material',
  subcategory: 'Pigments',
  lastKnownYear: '~1964',
  lastKnownLocation: 'London, England',
  coordinates: [51.51, -0.13],
  region: 'Europe',
  status: 'extinct',
  cause: 'Depletion of source material (Egyptian mummies) and growing ethical objections',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Color of the Dead

For centuries, European painters mixed their browns and warm glazes with a pigment that had one of the most macabre origins in the history of art. Mummy brown — also known as *Caput Mortuum* or Egyptian brown — was made from the ground remains of Egyptian mummies, both human and feline. The bitumen and resins used in the ancient embalming process gave the resulting powder a warm, transparent brown with excellent glazing properties, prized by artists from the sixteenth century through the early twentieth.

## A Peculiar Commerce

The trade in Egyptian mummies for pigment was part of a broader European appetite for mummy products. Since the medieval period, Europeans had consumed powdered mummy as a medicine, believing it contained miraculous healing properties. The word "mummia" originally referred to bitumen, and the dark resinous substance found on Egyptian mummies was erroneously believed to be this valuable mineral. By the time the error was understood, the trade was well established.

When the medicinal fad declined, the art supply industry absorbed the surplus. London colormen — the merchants who prepared and sold artists' materials — offered Mummy Brown alongside more conventional pigments like burnt sienna and raw umber. The firm of C. Roberson and Co., one of London's most prominent art suppliers, sold the pigment well into the twentieth century.

## Who Used It

Mummy Brown appears in the palettes of several notable painters, though many artists were unaware of its true composition. The Pre-Raphaelite painter Edward Burne-Jones was reportedly so horrified upon learning the source of his favorite brown that he took his tube of Mummy Brown into the garden and gave it a proper burial. His colleague Lawrence Alma-Tadema, by contrast, was said to have been entirely unfazed.

The French painter Martin Drolling is believed to have used mummy-derived pigment in his work, and the color was a staple of academic painting studios throughout the nineteenth century, valued for its subtle transparency in shadow glazes and its warm undertone that no synthetic pigment quite replicated.

## The Supply Problem

By the early twentieth century, the supply of Egyptian mummies suitable for grinding into pigment was running low. Centuries of looting had depleted the accessible tombs, and the Egyptian government had begun enforcing antiquities laws that made export increasingly difficult. C. Roberson and Co. reportedly maintained a stock of mummy parts sufficient to supply the pigment, but by the mid-twentieth century, even their reserves were exhausted.

In 1964, the firm's managing director, Geoffrey Roberson-Park, told *Time* magazine that he might have some arms and legs left in stock but that they had run out of complete mummies. He noted, with characteristically British understatement, that it might be difficult to obtain fresh supplies. The pigment effectively ceased production around this time, ending a trade that had lasted over three hundred years.

## The Ethics, Eventually

The disappearance of Mummy Brown was driven by supply exhaustion rather than moral awakening, though ethical objections did play a role in its final years. The Roberson firm's matter-of-fact approach to the material — treating human remains as simply another raw ingredient — became increasingly untenable as archaeological ethics evolved.

Today, conservators occasionally encounter Mummy Brown in the paint layers of historical works, identifiable through microscopic analysis that reveals fragments of human tissue, bone, and wrapping materials. The color exists now only in paintings where it was applied centuries ago, slowly aging in the darkness of museum storerooms — the dead, preserving the dead, for an audience that will never know what it cost.`,
  quickFacts: {
    'Also Known As': 'Caput Mortuum, Egyptian Brown, Mummia',
    'Color Properties': 'Warm, transparent brown; excellent for glazing',
    'Source Material': 'Ground Egyptian mummies (human and feline)',
    'Primary Supplier': 'C. Roberson & Co., London',
    'Era of Use': '16th century – mid 20th century',
    'Last Known Supply': '~1964 (Roberson & Co.)',
    'Notable Users': 'Edward Burne-Jones, Martin Drolling',
    'Modern Detection': 'Microscopic analysis reveals tissue fragments in paint layers',
  },
  connections: [
    { slug: 'silphium', relationship: 'Both represent irreplaceable resources that were consumed to the point of total exhaustion' },
    { slug: 'kauai-oo', relationship: 'Both represent unique natural resources consumed by human demand until nothing remained' },
    { slug: 'ansault-pear', relationship: 'Both vanished not with a dramatic event but through slow, indifferent depletion' },
  ],
  sources: [
    { title: 'Mummy Brown and Other Historical Pigments', author: 'Philip McCouat', year: 2013, url: 'https://www.artinsociety.com' },
    { title: 'The Art of Darkness: Mummy Pigment', author: 'Time Magazine', year: 1964 },
    { title: 'Color: A Natural History of the Palette', author: 'Victoria Finlay', year: 2002 },
    { title: 'Artists\' Pigments: A Handbook of Their History and Characteristics', author: 'Robert L. Feller', year: 1986 },
    { title: 'Egyptian Mummies: Unravelling the Secrets of an Ancient Art', author: 'Bob Brier', year: 1994 },
  ],
};
