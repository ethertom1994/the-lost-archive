import type { Entry } from '../../types';

export const toromiro: Entry = {
  slug: 'toromiro',
  name: 'The Toromiro Tree',
  tagline: 'The last native tree of Easter Island. The civilization that carved stone giants killed every tree to move them.',
  category: 'flora',
  subcategory: 'Trees',
  lastKnownYear: 1960,
  lastKnownLocation: 'Rano Kau crater, Easter Island (Rapa Nui), Chile',
  coordinates: [-27.18, -109.43],
  region: 'Pacific Islands',
  status: 'extinct_in_wild',
  cause: 'Complete deforestation of Easter Island by the Rapa Nui people, likely driven by the need for timber to transport moai statues and for agricultural clearing. Introduced sheep grazed on remaining seedlings.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Naked Island

When the first European ship reached Easter Island on Easter Sunday 1722, the Dutch explorer Jacob Roggeveen was puzzled. The island was almost treeless — a windswept grassland dotted with enormous stone statues, the moai, that clearly required massive engineering effort to carve and transport. How had the islanders moved statues weighing up to 80 tons without trees for rollers and levers? The answer, invisible to Roggeveen, was beneath his feet. Pollen cores from the island's crater lakes tell the story: Easter Island was once covered in dense subtropical forest, dominated by a giant palm (*Paschalococos disperta*) and dozens of other tree species. The Rapa Nui people, who arrived around 1200 CE, cleared them all.

The *Sophora toromiro* was the last holdout. A small leguminous tree with hard, reddish wood prized for carving, the toromiro survived in the sheltered interior of the Rano Kau volcanic crater long after every other tree species on the island had been felled or eaten by introduced rats and livestock.

## Thor Heyerdahl's Seeds

In 1955-56, the Norwegian explorer Thor Heyerdahl led an archaeological expedition to Easter Island. Among many observations, he noted a single surviving toromiro tree clinging to the inner slope of Rano Kau. He collected seeds and wood samples. When he returned in 1968, the tree was dead — eaten by sheep that roamed freely across the island.

Heyerdahl's seeds were germinated at the Gothenburg Botanical Garden in Sweden. Additional material was propagated at Bonn Botanical Garden and several other institutions. The toromiro survives today in these botanical collections, but all attempts to reintroduce it to Easter Island have failed or produced uncertain results. The island's soil is degraded, the climate has shifted, and introduced species remain a threat.

## A Parable in Wood

The toromiro is often cited as a parable of ecological collapse. The Rapa Nui civilization deforested their island so completely that they lost the means to build oceangoing canoes, to transport their statues, and ultimately to sustain their population. The last tree — a species that had survived millions of years of Pacific storms — was eaten by sheep that humans brought to an island that humans had already stripped bare. The moai still stand. The forest that made them possible does not.`,
  quickFacts: {
    'Scientific Name': 'Sophora toromiro',
    'Family': 'Fabaceae (Legumes)',
    'Endemic To': 'Easter Island (Rapa Nui)',
    'Last Wild Specimen': 'Died ~1960',
    'Seeds Collected By': 'Thor Heyerdahl, 1955-56',
    'Surviving In': 'Gothenburg, Bonn, and other botanical gardens',
    'Wood Used For': 'Rongorongo tablets and moai kavakava carvings',
    'Island Deforestation': 'Complete by ~1600 CE',
  },
  connections: [
    { slug: 'cedars-of-lebanon', relationship: 'Both iconic trees stripped from their homeland by human demand, reduced from vast forests to tiny remnants' },
    { slug: 'lake-texcoco', relationship: 'Both ecological collapses driven by civilizations that destroyed their own environment to sustain monumental building' },
    { slug: 'cafe-marron', relationship: 'Both island trees reduced to a single surviving individual before rescue' },
  ],
  sources: [
    { title: 'Collapse: How Societies Choose to Fail or Succeed', author: 'Jared Diamond', year: 2005 },
    { title: 'The Statues That Walked', author: 'Terry Hunt & Carl Lipo', year: 2011 },
    { title: 'Conservation of Sophora toromiro', author: 'BGCI / Gothenburg Botanical Garden', year: 2000 },
    { title: 'Easter Island: The Heritage and its Conservation', author: 'UNESCO', year: 1995 },
  ],
};
