import type { Entry } from '../../types';

export const medievalStainedGlass: Entry = {
  slug: 'medieval-stained-glass',
  name: 'Medieval Stained Glass Formulas',
  tagline: 'The blue light of Chartres Cathedral has never been reproduced. The recipe died with the glaziers who made it.',
  category: 'material',
  subcategory: 'Lost Pigments and Formulas',
  lastKnownYear: '~1300',
  lastKnownLocation: 'Chartres, France',
  coordinates: [48.45, 1.49],
  region: 'Western Europe',
  status: 'extinct',
  cause: 'Color formulas and firing techniques transmitted orally within guilds, never recorded; tradition disrupted by economic and social upheaval',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Light That Cannot Be Copied

The stained glass windows of the great Gothic cathedrals, particularly those installed at Chartres between roughly 1145 and 1240, produce colors that modern glassmakers have never been able to replicate precisely. The most famous is "Chartres blue," a deep, luminous cobalt blue that seems to glow from within even on overcast days. Scientific analysis has identified cobalt oxide as the primary colorant, along with trace amounts of other minerals, but knowing the ingredients is not the same as knowing the recipe.

Medieval glaziers worked with wood-ash glass, a potash-lime silicate fundamentally different from the soda-lime glass used today. The raw materials, sourced from local forests and riverbed sands, contained variable impurities of iron, manganese, and other elements that affected color in ways the glaziers learned to control through experience rather than chemical analysis. They understood their materials empirically, adjusting compositions based on how a melt looked, smelled, and behaved, knowledge that could be taught by demonstration but not easily written down.

## Guild Secrets and Oral Tradition

Glass coloring was a guild secret. The fraternity of glaziers passed techniques from master to apprentice across generations, with no incentive to create written records that competitors might obtain. The monk Theophilus Presbyter wrote *De Diversis Artibus* around 1120, which includes glass recipes, but these are general and lack the specificity needed to reproduce the finest cathedral glass. The critical variables, exact firing temperatures, duration, kiln atmosphere, cooling rates, and the specific mineral sources used, went unrecorded.

The tradition began to decline in the fourteenth century as economic disruption, the Black Death, and changing architectural fashions reduced demand. The Hundred Years' War devastated the regions where the finest glass had been produced. By the time the Renaissance revived interest in colored glass, the chain of master-to-apprentice transmission had been broken.

## Modern Failures

Contemporary glass artists and scientists have spent decades attempting to reproduce Chartres blue. Chemical analysis can identify what is in the glass but not how it was made. The firing process matters enormously: the same ingredients fired at different temperatures, for different durations, in different kiln atmospheres, produce dramatically different colors. Modern reproductions are recognizably different from the originals. They lack what conservators describe as an internal luminosity, a quality of transmitting light that the medieval glass achieves and modern glass does not.`,
  quickFacts: {
    'Peak Period': '~1145-1240 CE at Chartres Cathedral',
    'Famous Color': 'Chartres blue (cobalt-based)',
    'Glass Type': 'Potash-lime silicate (wood-ash glass)',
    'Knowledge Transmission': 'Oral, master-to-apprentice within guilds',
    'Key Text': 'Theophilus, De Diversis Artibus (~1120), general but incomplete',
    'Decline Factors': 'Black Death, Hundred Years\' War, changing tastes',
    'Modern Status': 'Exact formulas and firing methods remain unreproduced',
  },
  connections: [
    { slug: 'egyptian-blue', relationship: 'Both are lost color-production techniques where the specific manufacturing process, not just the ingredients, was the secret that died' },
    { slug: 'maya-blue', relationship: 'Both are pigment mysteries from lost civilizations where modern chemistry can identify components but cannot fully explain the results' },
  ],
  sources: [
    { title: 'The Art of Light and Color: Stained Glass in the Middle Ages', author: 'Virginia Chieffo Raguin', year: 2003 },
    { title: 'De Diversis Artibus (On Divers Arts)', author: 'Theophilus Presbyter', year: 1120 },
    { title: 'Stained Glass Before 1540: An Annotated Bibliography', author: 'Madeline Caviness', year: 1983 },
  ],
};
