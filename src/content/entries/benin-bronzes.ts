import type { Entry } from '../../types';

export const beninBronzes: Entry = {
  slug: 'benin-bronzes',
  name: 'The Context of the Benin Bronzes',
  tagline: 'We have the artifacts but not the meaning. Like having every page of a book but not knowing the reading order.',
  category: 'culture',
  subcategory: 'Decontextualized Art',
  lastKnownYear: 1897,
  lastKnownLocation: 'Benin City, Nigeria',
  coordinates: [6.34, 5.63],
  region: 'Sub-Saharan Africa',
  status: 'extinct',
  cause: 'British punitive expedition of 1897 looted the Royal Palace and scattered the bronzes across Western museums, destroying their original context',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Palace Walls

The Kingdom of Benin, centered in what is now southern Nigeria, produced some of the most technically accomplished metalwork in human history. Over centuries, guild artisans created thousands of cast brass and bronze plaques, heads, and figures. These were not made for galleries or collectors. They were mounted on the pillars and walls of the Oba's Royal Palace in Benin City, arranged in specific sequences that recorded the kingdom's history, commemorated rulers, documented rituals, and encoded political relationships.

The arrangement mattered. The plaques formed visual narratives read in context, their placement relative to each other and to specific locations within the palace carrying meaning that the individual objects alone could not convey. Court historians and ritual specialists understood the full system. The bronzes were, in effect, a three-dimensional historical archive mounted on the walls of its own reading room.

## February 1897

In February 1897, a British punitive expedition attacked Benin City in retaliation for the killing of a British diplomatic party. The British forces captured the city, deposed the Oba, burned large sections of it, and systematically looted the Royal Palace. Over a thousand bronze plaques were stripped from the palace walls, along with hundreds of carved ivory tusks, coral beadwork, and other artifacts. The objects were shipped to London, where they were inventoried by the British Museum and the Foreign Office, then sold and distributed to museums and private collectors across Europe and North America.

The bronzes astonished the European art world. Their technical quality challenged prevailing racist assumptions about African civilization. But the admiration focused on individual objects as aesthetic achievements, divorced from the system that gave them meaning.

## The Irretrievable Arrangement

Today, the Benin Bronzes are the subject of one of the most prominent repatriation campaigns in the museum world. Germany, the United Kingdom, and other nations have begun returning objects to Nigeria. But repatriation of individual pieces cannot reconstruct the original arrangement. The palace was destroyed. The specialists who understood the full system are long dead. The oral traditions that accompanied the visual record have been fragmented by over a century of colonial disruption.

What is lost is not the art itself but the library it formed. We have the pages. We do not have the book.`,
  quickFacts: {
    'Kingdom': 'Kingdom of Benin (Edo people), present-day Nigeria',
    'Material': 'Cast brass and bronze (commonly called "bronzes")',
    'Estimated Objects Looted': 'Over 3,000 pieces',
    'British Expedition': 'February 1897 (Benin Punitive Expedition)',
    'Current Locations': 'British Museum, Ethnologisches Museum Berlin, and dozens of others',
    'Repatriation Status': 'Ongoing; Germany and UK have returned some objects since 2022',
    'What Is Lost': 'Original palace arrangement, spatial narratives, ritual context',
  },
  connections: [
    { slug: 'great-hedge-india', relationship: 'Both examples of British colonial destruction of indigenous systems, prioritizing extraction over preservation' },
    { slug: 'rai-stones', relationship: 'Both cultural artifacts whose meaning depends on context and collective memory, not just physical form' },
  ],
  sources: [
    { title: 'The Brutish Museums: The Benin Bronzes, Colonial Violence and Cultural Restitution', author: 'Dan Hicks', year: 2020 },
    { title: 'Benin Art and the Problem of Description', author: 'Kathryn Wysocki Gunsch', year: 2018 },
    { title: 'The Art of Benin', author: 'Paula Girshick Ben-Amos', year: 1995 },
    { title: 'Benin: Royal Art of Africa from the Museum fur Volkerkunde, Vienna', author: 'Barbara Plankensteiner', year: 2007 },
  ],
};
