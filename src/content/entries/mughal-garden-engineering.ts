import type { Entry } from '../../types';

export const mughalGardenEngineering: Entry = {
  slug: 'mughal-garden-engineering',
  name: 'Mughal Garden Hydraulic Engineering',
  tagline: 'Gardens that defied gravity with invisible water systems. The fountains still stand; the knowledge that made them flow is gone.',
  category: 'technology',
  subcategory: 'Hydraulic Engineering',
  lastKnownYear: 1707,
  lastKnownLocation: 'Lahore, Mughal Empire (modern Pakistan)',
  coordinates: [31.59, 74.38],
  region: 'South Asia',
  status: 'extinct',
  cause: 'The decline of the Mughal Empire after Aurangzeb dispersed the specialized court engineers who maintained and transmitted the hydraulic tradition',
  imageUrl: undefined,
  body: `## The Paradise Garden

The Mughal emperors built gardens that Europeans described as earthly paradises. The char bagh, or four-fold garden, was divided by water channels into quadrants, with fountains, cascading terraces, and reflecting pools arranged in geometric precision. These were not merely decorative. They were feats of hydraulic engineering that moved thousands of liters of water per hour through systems powered entirely by gravity, without mechanical pumps.

The Shalimar Gardens in Lahore, commissioned by Emperor Shah Jahan in 1641, contained over four hundred fountains across three descending terraces. Water was lifted from the Ravi River through a series of channels to an elevated reservoir, then distributed through the garden via underground pipes calibrated to produce specific fountain heights and flow patterns. The entire system operated continuously. Different terraces produced different water effects, from gentle cascades to jets that reached several meters high, all from a single gravity-fed source.

## The Engineering Behind the Beauty

Mughal hydraulic engineers, known as ab-kash, developed specialized knowledge for calculating water pressure, pipe diameter, and elevation gradients. They designed chadar, or water chutes, with carved surfaces that broke falling water into intricate patterns. They built underground channels called nahr that distributed water across vast distances with minimal evaporation loss. At the Shalimar Bagh in Kashmir, engineers diverted a natural canal through a system so precisely graded that fountains at different points in the garden achieved uniform height despite varying distances from the water source.

This knowledge was not written in engineering textbooks. It was held by families and guilds of hydraulic specialists attached to the Mughal court. The designs were executed through practical expertise passed from master to apprentice: how to calculate the correct pipe bore for a desired fountain height, how to seal underground channels against leakage, how to account for seasonal variation in water supply.

## The Dispersal

When the Mughal Empire declined after the death of Aurangzeb in 1707, the imperial court that sustained these specialists fractured. The engineers scattered to regional courts or lost their patronage entirely. Successive invasions and political instability disrupted the apprenticeship chains. The gardens themselves fell into disrepair. When the British colonial administration eventually undertook restoration of sites like the Shalimar Gardens, they could repair the physical structures but not reconstruct the engineering knowledge that had created them. Modern restorations use electric pumps to produce effects that Mughal engineers achieved with gravity alone.`,
  quickFacts: {
    'Key Period': '1526-1707 (Mughal Empire peak)',
    'Finest Example': 'Shalimar Gardens, Lahore (1641)',
    'Fountains at Shalimar': 'Over 400',
    'Power Source': 'Gravity-fed, no mechanical pumps',
    'Specialists': 'Ab-kash (hydraulic engineers)',
    'Water Features': 'Chadar (chutes), nahr (channels), fountains, cascades',
    'UNESCO Status': 'Shalimar Gardens designated World Heritage Site, 1981',
    'Modern Restorations': 'Rely on electric pumps, not original gravity systems',
  },
  connections: [
    { slug: 'roman-hydraulics', relationship: 'Both were gravity-fed hydraulic systems of imperial scale whose specific engineering knowledge died with the empires that created them' },
    { slug: 'khmer-hydraulics', relationship: 'Three great hydraulic civilizations, Roman, Khmer, and Mughal, each solved the same engineering problems independently and each lost their solutions' },
  ],
  sources: [
    { title: 'The Mughal Garden: Interpretation, Conservation, and Implications', author: 'James L. Wescoat Jr. and Joachim Wolschke-Bulmahn', year: 1996 },
    { title: 'Mughal Gardens: Sources, Places, Representations, and Prospects', author: 'James L. Wescoat Jr.', year: 2010 },
    { title: 'The Gardens of the Great Mughals', author: 'Constance M. Villiers-Stuart', year: 1913 },
  ],
};
