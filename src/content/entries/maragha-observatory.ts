import type { Entry } from '../../types';

export const maraghaObservatory: Entry = {
  slug: 'maragha-observatory',
  name: 'The Maragha Observatory',
  tagline: 'Funded by the Mongol khan who had just sacked Baghdad, the Maragha observatory produced the mathematical models that eventually reached Copernicus. Then the patronage dried up, the roof fell in, and most of its records went with it.',
  category: 'place',
  subcategory: 'Lost Observatories',
  lastKnownYear: 1339,
  lastKnownLocation: 'Maragha, Ilkhanate (modern northwest Iran)',
  coordinates: [37.39, 46.24],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Loss of patronage after the Ilkhanate\'s decline; abandonment and structural collapse through the 14th century',
  imageUrl: undefined,
  body: `## A Strange Beginning

In 1258, the Mongol commander Hulagu sacked Baghdad and, by most accounts, threw enough manuscripts from the libraries into the Tigris to tint the river black for days. Among the people he spared and took with him was the Persian polymath Nasir al-Din al-Tusi, whom he appointed to build an observatory on a hill above the town of Maragha in what is now northwestern Iran. Construction began in 1259. Within a few years it was the best-equipped observatory in the world, with a thirty-metre tower, a large mural quadrant, an armillary sphere, and what contemporary sources describe as a substantial library built up from manuscripts gathered from across the Ilkhanate.

Al-Tusi gathered around him a group of scholars of startling diversity: his own students, including the astronomer Mu'ayyad al-Din al-'Urdi from Damascus, Qutb al-Din al-Shirazi from Iran, Najm al-Din al-Qazwini, and the Chinese astronomer Fu Mengji, whose presence is attested in the Ilkhanid records and who contributed methods from the Chinese tradition. It was the first observatory of truly institutional scale, funded as a waqf endowment so that it could outlive its founder.

## What Came Out and What Stayed In

The observatory's public output was the *Zij-i Ilkhani*, a set of astronomical tables completed around 1272 that circulated across the Islamic world and was translated into Byzantine Greek by Gregory Chioniades in the early fourteenth century, from which it influenced Byzantine and eventually early modern European astronomy. The private output was more radical. Al-Tusi and al-'Urdi developed a set of geometrical devices, now called the Tusi couple and the 'Urdi lemma, that let astronomers reproduce Ptolemaic planetary motion without violating the Aristotelian requirement of uniform circular motion. Nearly identical constructions appear three centuries later in Copernicus's *De revolutionibus*, and the extent to which this represents independent discovery or unacknowledged transmission is still argued in the scholarship.

But the detailed working records of Maragha, the tables of individual observations, al-'Urdi's working drafts, the commentaries produced by the circle of scholars on each other's work, and most of the library holdings, are gone. After al-Tusi's death in 1274 his son took over. The observatory continued for a few decades under diminished patronage, produced the refined tables of Qutb al-Din al-Shirazi, and then, as the Ilkhanate itself fragmented after 1335, lost its funding. By the middle of the fourteenth century the staff had dispersed, and the physical structure was in ruins by the time the traveller Hamdallah Mustawfi described it around 1339. The library's manuscripts scattered; some were carried to Tabriz and Sultaniyya, some vanished entirely.

## The Afterlife

What survives of Maragha is the output, not the process. The *Zij-i Ilkhani* exists in dozens of manuscript copies. Al-Tusi's *Tadhkira fi 'ilm al-hay'a* (Memoir on Astronomy), which lays out the non-Ptolemaic models, survives in numerous copies too. But there is almost nothing from the workshop: no individual observation records of the Maragha sky, no correspondence among the scholars, no working notebooks. The observatory ruins were excavated beginning in the 1970s and the foundations of the main building, the small dormitory cells around it, and fragments of the original library shelving have been identified, but the manuscripts they once held went the way of the institution's patronage.

The Maragha tradition itself, as a way of doing astronomy, outlived its home. The mathematical techniques were picked up at Samarqand a century and a half later under Ulugh Beg, and through that chain they probably reached the Ottoman astronomer Taqi al-Din and, indirectly, European astronomers writing in Latin. What was lost was not the science. It was the laboratory: the specific institutional memory of how a large staff of working astronomers had organised themselves, decade after decade, to do it.`,
  quickFacts: {
    'Founded': '1259, by Nasir al-Din al-Tusi under Hulagu Khan',
    'Main Output': 'Zij-i Ilkhani (c. 1272), astronomical tables',
    'Key Innovation': 'Tusi couple and Urdi lemma (non-Ptolemaic planetary models)',
    'Staff Diversity': 'Persian, Arab, Chinese, and Byzantine astronomers',
    'Abandoned': 'Mid-14th century',
    'Working Records Surviving': 'Essentially none',
  },
  connections: [
    { slug: 'samarqand-observatory', relationship: 'The Maragha methods and some personnel traditions passed directly to Ulugh Beg\'s observatory a century later' },
    { slug: 'house-of-wisdom', relationship: 'Both were Islamic-world scientific institutions funded by unlikely patrons whose manuscripts and working papers have almost entirely vanished' },
    { slug: 'ptolemaic-star-catalog', relationship: 'Maragha produced the first systematic non-Ptolemaic planetary models, but most of its own working catalogues are gone' },
  ],
  sources: [
    { title: 'The Astronomical Work of Nasir al-Din al-Tusi', author: 'F. Jamil Ragep', year: 1993 },
    { title: 'Islamic Science and the Making of the European Renaissance', author: 'George Saliba', year: 2007 },
    { title: 'Maragheh observatory - Wikipedia', url: 'https://en.wikipedia.org/wiki/Maragheh_observatory' },
    { title: 'Nasir al-Din al-Tusi - MacTutor History of Mathematics', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Al-Tusi_Nasir/' },
  ],
};
