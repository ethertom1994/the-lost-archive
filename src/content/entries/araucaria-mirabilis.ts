import type { Entry } from '../../types';

export const araucariaMirabilis: Entry = {
  slug: 'araucaria-mirabilis',
  name: 'Araucaria mirabilis',
  tagline: 'A Jurassic forest buried alive by a volcano 160 million years ago. The trees are stone now. They are still standing.',
  category: 'flora',
  subcategory: 'Prehistoric Trees',
  lastKnownYear: '~160 million years ago',
  lastKnownLocation: 'Patagonia, Argentina',
  coordinates: [-43.62, -67.99],
  region: 'South America',
  status: 'extinct',
  cause: 'Volcanic eruption buried an entire forest in ash during the Jurassic period, preserving it as stone',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Forest Frozen in Stone

In the arid steppe of central Patagonia, in the Argentine province of Chubut, stands the Cerro Cuadrado Petrified Forest. It is not a collection of fallen logs. The trunks are upright, rooted where they grew, standing in the positions they occupied when they were alive. Some exceed 30 meters in height. They have been standing for approximately 160 million years. They are made entirely of stone.

During the Middle Jurassic period, this region of what is now South America was a humid, warm forest dominated by tall conifers of the genus Araucaria -- relatives of the modern monkey puzzle tree and Norfolk Island pine. The species Araucaria mirabilis grew in dense stands, reaching heights comparable to modern Douglas firs. Beneath them grew ferns, cycads, and the understory plants of a Mesozoic forest floor. Dinosaurs moved through these trees. The southern supercontinent of Gondwana was still intact.

## The Eruption

Approximately 160 million years ago, a massive volcanic eruption blanketed the forest in a thick layer of ash. The burial was rapid enough that the trees did not fall. The ash sealed them in place, cutting off oxygen and preventing decay. Over millions of years, silica-rich groundwater percolated through the volcanic deposits and infiltrated the wood at the cellular level, replacing organic material molecule by molecule with quartz and chalcedony. The process, called permineralization, preserved the trees in extraordinary detail.

The preservation is so fine that under a microscope, individual cell walls, growth rings, and even traces of fungal infections are visible. Petrified cones have been found with seeds still inside, frozen in the act of reproduction. The forest did not decay. It was translated, atom by atom, from carbon to silicon, from biology to geology.

## Walking Among Ghosts

Today the Cerro Cuadrado Petrified Forest is a protected natural monument. Visitors walk among stone trunks that still cast shadows in the Patagonian sun. The stumps show growth rings that record seasons from the Jurassic. Fallen trunks, broken by tectonic forces over the eons, reveal interiors of banded agate and crystalline quartz in colors the living wood never displayed -- reds, purples, yellows created by mineral impurities in the replacing silica.

The species Araucaria mirabilis has no living descendants. Its closest modern relatives -- Araucaria araucana (the monkey puzzle tree) and Araucaria heterophylla (the Norfolk Island pine) -- diverged from the same lineage but evolved along different paths. The specific combination of genetics, growth habit, and ecology that defined A. mirabilis ended in the Jurassic. Only the stone record remains.

## Time Made Visible

The Cerro Cuadrado forest collapses the abstraction of deep time into something physical. You can touch a tree that grew 160 million years ago. You can count its growth rings. You can see where a branch forked. The species is extinct, the continent has moved, the climate has transformed, and the animals that sheltered beneath these canopies have been gone for a geological age. But the forest stands, patient and mineralized, a monument to a world that no longer exists in any form except rock.`,
  quickFacts: {
    'Species': 'Araucaria mirabilis',
    'Age': '~160 million years (Middle Jurassic)',
    'Location': 'Cerro Cuadrado Petrified Forest, Chubut Province, Argentina',
    'Preservation': 'Permineralization by silica-rich groundwater',
    'Trunk Heights': 'Up to 30+ meters',
    'Modern Relatives': 'Monkey puzzle tree (A. araucana), Norfolk Island pine (A. heterophylla)',
    'Protection': 'Argentine Natural Monument',
  },
  connections: [
    { slug: 'cooksonia', relationship: 'Both represent ancient plant lineages from deep geological time, preserved as fossils that reveal the history of terrestrial life' },
    { slug: 'doggerland', relationship: 'Both are landscapes so thoroughly transformed that their former state can only be reconstructed from physical evidence buried in the ground' },
  ],
  sources: [
    { title: 'Petrified Forests of Patagonia', author: 'Ignacio H. Escapa and others', year: 2008 },
    { title: 'Araucarian Forests of the Jurassic of Patagonia', author: 'Raul Cuhneo and others', year: 2003 },
    { title: 'The Cerro Cuadrado Petrified Forest: A Window into the Jurassic', author: 'National Geographic Argentina', year: 2011 },
    { title: 'Permineralized Araucarian Cones from the Jurassic of Patagonia', author: 'Stockey, R.A.', year: 1978 },
  ],
};
