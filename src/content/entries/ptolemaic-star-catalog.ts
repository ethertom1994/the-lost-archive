import type { Entry } from '../../types';

export const ptolemaicStarCatalog: Entry = {
  slug: 'ptolemaic-star-catalog',
  name: 'Hipparchus\'s Star Catalog',
  tagline: 'The first comprehensive map of the sky. 850 stars plotted by hand in 129 BCE. The original vanished. We knew it only through Ptolemy\'s later copy, until a palimpsest revealed fragments.',
  category: 'technology',
  lastKnownYear: '~129 BCE',
  lastKnownLocation: 'Nicaea, Bithynia (modern Iznik, Turkey)',
  coordinates: [40.7, 29.4],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The original manuscript was lost in antiquity; knowledge of it survived only through Ptolemy\'s derivative catalog in the Almagest',
  imageUrl: undefined,
  body: `## The First Sky Survey

Around 129 BCE, the Greek astronomer Hipparchus of Nicaea completed something unprecedented: a systematic catalog of the positions and brightnesses of at least 850 stars visible from the Mediterranean. Working from the island of Rhodes and from his native Nicaea in Bithynia, he plotted each star's position using a coordinate system and ranked their brightness on a scale that became the foundation of the modern magnitude system. No one before him had attempted anything so comprehensive.

Hipparchus was motivated in part by the observation of a nova, a new star that appeared where none had been recorded before. To detect such changes in the future, the sky needed a baseline, a complete inventory of what was already there. He spent years at the task, observing with instruments of his own design, measuring angles with a precision that would not be matched for centuries.

## Lost and Overshadowed

The original catalog did not survive. What we know of Hipparchus's star positions comes primarily through Claudius Ptolemy, who compiled his own star catalog around 137 CE as part of the Almagest. Ptolemy listed 1,022 stars and acknowledged Hipparchus as a predecessor. But scholars have long debated whether Ptolemy merely copied Hipparchus's data with adjustments for precession or conducted independent observations. Modern analysis suggests Hipparchus's original measurements were in many cases more accurate than Ptolemy's, raising the possibility that the lost catalog was superior to the one that replaced it.

In 2022, a dramatic partial recovery occurred. Researchers using multispectral imaging at the Museum of the Bible in Washington, D.C. found fragments of Hipparchus's catalog hidden beneath Christian texts in the Codex Climaci Rescriptus, a palimpsest from Saint Catherine's Monastery on Mount Sinai. Medieval scribes had scraped away the astronomical text and written over it. The recovered passages, covering a small number of constellations, confirmed that Hipparchus used equatorial coordinates rather than the ecliptic system Ptolemy later adopted.

## What Remains Hidden

The palimpsest fragments represent only a small fraction of the original catalog. The rest remains lost, either destroyed, scraped away and overwritten, or buried in manuscripts not yet examined. Hipparchus's methods, his full observational notes, and the complete dataset of 850 or more stellar positions as he originally recorded them are still beyond our reach. We have Ptolemy's version. We have fragments. The original map of the sky, the first in human history, exists only in pieces.`,
  quickFacts: {
    'Astronomer': 'Hipparchus of Nicaea',
    'Date Completed': '~129 BCE',
    'Stars Cataloged': '850+',
    'Coordinate System': 'Equatorial (not ecliptic)',
    'Brightness Scale': 'Precursor to modern magnitude system',
    'Ptolemy\'s Version': 'Almagest (~137 CE), 1,022 stars',
    'Palimpsest Discovery': '2022, Codex Climaci Rescriptus',
    'Motivation': 'Detection of novae (new stars)',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'Both products of Hellenistic astronomical knowledge; the mechanism may have used data from Hipparchus\'s observations' },
    { slug: 'library-of-alexandria', relationship: 'Hipparchus\'s catalog was part of the broader tradition of Hellenistic scholarship that the library fostered and whose decline contributed to such losses' },
  ],
  sources: [
    { title: 'New evidence for Hipparchus\' Star Catalogue revealed by multispectral imaging', author: 'Victor Gysembergh, Peter J. Williams, Emanuel Zingg', year: 2022, url: 'https://journals.sagepub.com/doi/10.1177/00218286221128289' },
    { title: 'A History of Ancient Mathematical Astronomy', author: 'Otto Neugebauer', year: 1975 },
    { title: 'Lost Star Catalog of Ancient Times Comes to Light', url: 'https://skyandtelescope.org/astronomy-news/lost-star-catalog-of-ancient-times-comes-to-light/' },
  ],
};
