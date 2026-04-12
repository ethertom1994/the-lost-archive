import type { Entry } from '../../types';

export const cryViolet: Entry = {
  slug: 'cry-violet',
  name: 'The Cry Violet',
  tagline: 'A flower known only from pressed herbarium specimens. We know exactly what it looked like. We will never see it alive.',
  category: 'flora',
  subcategory: 'Wildflowers',
  lastKnownYear: 1927,
  lastKnownLocation: 'Cry, Yonne, France',
  coordinates: [47.58, 3.63],
  region: 'Europe',
  status: 'extinct',
  cause: 'Quarrying of the limestone cliffs where it grew destroyed its only known habitat',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Flower from the Cliffs

*Viola cryana* grew on the exposed limestone cliffs near the village of Cry in the Yonne department of Burgundy, France. It was a small violet, described in 1878 by the French botanist Charles Royer from specimens collected on the chalky outcrops above the Cure River valley. It had delicate pale flowers, slightly different in form from its relatives, adapted to the thin, alkaline soils of its cliff habitat.

The Cry violet was never common. Its entire known range was a handful of limestone bluffs near one small village. It was a classic calcicole, a plant dependent on calcium-rich substrates, and the specific geological conditions it required existed in only this one narrow area. Botanists in the late nineteenth century recognized it as distinct and collected specimens for herbaria, but no one took particular steps to protect it.

## Quarried Away

The limestone cliffs of Cry were commercially valuable. Throughout the late nineteenth and early twentieth centuries, quarrying operations carved away the rock faces where the violet grew. Each blast removed not just stone but the thin pockets of soil where *Viola cryana* clung to existence. The plant had nowhere to retreat. There were no other limestone outcrops in the region with the right combination of exposure, soil chemistry, and microclimate.

The last confirmed collection of the Cry violet was made in 1927. After that, searches of the remaining cliff habitat found nothing. The quarries had eaten the flower's world.

## Pressed Between Pages

Today, *Viola cryana* exists as a collection of dried, pressed specimens in herbaria across France and elsewhere in Europe. The plants were carefully mounted on archival paper, their stems flattened, their flowers faded to pale ghosts of their original color. Labels in neat nineteenth-century handwriting record the collector, the date, the location.

These specimens are simultaneously a record of existence and a monument to inadequacy. They preserve the plant's morphology with reasonable fidelity: leaf shape, flower structure, stem habit. A botanist can study them and understand what the Cry violet was. But no pressed specimen captures color as it was in life, or fragrance, or the way the plant moved in the wind on a limestone cliff above a French river valley. The specimens are the botanical equivalent of a death mask.

The Cry violet asks an uncomfortable question: how many species vanish from places we never bother to survey? *Viola cryana* was described, collected, documented. And still it was lost.`,
  quickFacts: {
    'Scientific Name': 'Viola cryana',
    'Family': 'Violaceae',
    'Described': '1878 by Charles Royer',
    'Habitat': 'Limestone cliff faces, Cry, Burgundy, France',
    'Last Collection': '1927',
    'Cause of Extinction': 'Limestone quarrying',
    'Surviving Material': 'Pressed herbarium specimens only',
    'Range': 'Single site near the village of Cry',
  },
  connections: [
    { slug: 'xerces-blue', relationship: 'Both survive only as preserved specimens, known to us primarily through what collectors happened to save' },
    { slug: 'st-helena-olive', relationship: 'Both were endemic species destroyed by habitat alteration in their only known location' },
    { slug: 'franklinia', relationship: 'Both were species known from a single, extremely limited location, but only one was saved' },
  ],
  sources: [
    { title: 'Flore de la C\u00f4te-d\'Or', author: 'Charles Royer', year: 1881 },
    { title: 'Red List of Threatened Species: Viola cryana', year: 2011, url: 'https://www.iucnredlist.org' },
    { title: 'Extinct Plants of France', author: 'Mus\u00e9um national d\'Histoire naturelle', year: 2019 },
  ],
};
