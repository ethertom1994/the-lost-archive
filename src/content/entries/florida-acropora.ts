import type { Entry } from '../../types';

export const floridaAcropora: Entry = {
  slug: 'florida-acropora',
  name: 'Florida\'s Staghorn and Elkhorn Corals',
  tagline: 'Two species that had built the Florida reef tract for 10,000 years — the antler-branched staghorn and the flat-bladed elkhorn — were declared functionally extinct along Florida\'s coast in October 2025. The 2023 marine heatwave killed 97.8 to 100 percent of them across the Lower Keys and the Dry Tortugas in a single summer.',
  category: 'fauna',
  subcategory: 'Functionally Extinct Corals',
  lastKnownYear: 2023,
  lastKnownLocation: 'Florida Keys and Dry Tortugas, United States',
  coordinates: [24.55, -81.78],
  region: 'North America',
  status: 'functionally_extinct',
  cause: 'Ocean heat stress driven by climate change, specifically the 2023 North Atlantic marine heatwave; disease, pollution, and bleaching over prior decades',
  imageUrl: undefined,
  body: `## The Reef These Corals Built

For most of the last ten thousand years, the reef tract off the southern tip of Florida was built primarily by two species: Acropora cervicornis, the staghorn coral, which grew in dense branching thickets that looked like piled antlers; and Acropora palmata, the elkhorn coral, whose thick, flat paddle-shaped branches formed shallow breakwaters that sheltered the coast from storms.

These two species were the engineers of the Florida reef. They grew faster than the massive boulder corals. They provided the three-dimensional structure that everything else — groupers, parrotfish, lobsters, turtles — used as habitat. They also absorbed wave energy, reducing storm surge in a way no seawall can economically replicate. Healthy elkhorn thickets in particular were estimated by NOAA to save Florida billions of dollars in avoided storm damage per year.

Between the 1970s and the 2010s, both species declined by an estimated 95 percent across the Caribbean due to white-band disease, pollution, storms, and earlier bleaching events. Both were listed as threatened under the U.S. Endangered Species Act in 2006. Conservation nurseries were established. Small outplanted thickets were painstakingly rebuilt across the Florida Keys through the 2010s. It looked, cautiously, like a recovery.

## July 2023

Beginning in July 2023, sea surface temperatures across the Florida Keys rose above 31°C — the upper edge of coral tolerance — and stayed there for an average of 40.7 days. Heat exposure that summer was 2.2 to 4 times greater than in any year since the 1980s. A buoy in Manatee Bay near Everglades National Park recorded 38.4°C in July, approaching the temperature of a hot tub. The water was, for weeks, too warm for coral physiology to function.

The reef bleached wholesale. Staghorn and elkhorn corals, which are more heat-sensitive than many other reef-builders, died in near-total numbers. A peer-reviewed study published in Science in October 2025, led by researchers at the University of Miami Rosenstiel School, the Perry Institute, and collaborating institutions, documented 97.8 to 100 percent mortality of both species across the Lower Keys and the Dry Tortugas. The nurseries that had served as a living genetic bank were hit as hard as the wild populations.

## Functional Extinction

The formal conclusion of the Science paper was that Acropora cervicornis and Acropora palmata are now functionally extinct along the Florida Reef Tract. "Functional extinction" does not mean that the last individual has died. A handful of colonies still exist in deeper water, in remote patches, and in onshore aquarium gene banks. It means that the remaining population is too small and too fragmented to fulfill its role in the ecosystem — to build reef, shelter fish, or reliably sexually reproduce — and too sparse to be expected to recover on its own without active human intervention for generations.

The Florida reef tract is now the first major coral reef system in the world to lose its principal reef-building species to climate-driven heat mortality within a single lifetime. Scientists at Miami and Shedd Aquarium are maintaining living repositories of genotypes in land-based coral banks and offshore nurseries in cooler Caribbean waters, hoping to preserve enough of the species' genetic diversity for eventual restoration if temperatures ever stabilize.

The reef those corals built does not go away when they die. For a while, the skeletons remain. But without staghorn and elkhorn continually adding new material, the reef begins to erode. Within a few decades, without restoration, Florida's outer barrier reef will become a low-relief rubble field.`,
  quickFacts: {
    'Species': 'Acropora cervicornis (staghorn), Acropora palmata (elkhorn)',
    'Historic role': 'Primary reef-builders of the Caribbean for ~10,000 years',
    '2023 heatwave duration': 'Average 40.7 days above 31°C in Florida Keys',
    'Documented mortality': '97.8-100% in Lower Keys and Dry Tortugas',
    'Formal declaration': 'October 23, 2025 (Science paper)',
    'Surviving populations': 'Small remnant wild colonies; ex-situ gene banks on land and in offshore nurseries',
  },
  connections: [
    { slug: 'flamingo-tongue', relationship: 'Both are signature Caribbean reef organisms whose decline reflects the collapse of the reef ecosystem they lived in' },
    { slug: 'aral-sea', relationship: 'Both are named, formally documented losses of an entire ecosystem within a single human generation' },
  ],
  sources: [
    {
      title: 'Heat-driven functional extinction of Caribbean Acropora corals from Florida\'s Coral Reef',
      url: 'https://www.science.org/doi/10.1126/science.adx7825',
      author: 'Baker et al., Science',
      year: 2025,
    },
    {
      title: 'New study documents functional extinction of two critically endangered coral species — University of Miami',
      url: 'https://news.miami.edu/rosenstiel/stories/2025/10/new-study-documents-functional-extinction-of-two-critically-endangered-coral-species-following-record-heatwave-in-florida.html',
      year: 2025,
    },
    {
      title: 'Functionally extinct: After 10,000 years on the Florida coast — NBC News',
      url: 'https://www.nbcnews.com/science/climate-change/florida-coral-species-declared-functionally-extinct-rcna238753',
      year: 2025,
    },
  ],
  keyDate: '2025-10-23',
  keyDateLabel: 'Functional extinction formally declared in Science',
};
