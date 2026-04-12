import type { Entry } from '../../types';

export const tekhelet: Entry = {
  slug: 'tekhelet',
  name: 'Murex-Dyed Tekhelet',
  tagline: 'A specific shade of blue required by Jewish law for 3,000 years. The recipe was lost for 1,300 of them. Nobody could fulfill the commandment because nobody knew how to make the color.',
  category: 'material',
  subcategory: 'Lost Dyes',
  lastKnownYear: 639,
  lastKnownLocation: 'Eastern Mediterranean (dye industry centered in Phoenician coastal cities)',
  coordinates: [33.27, 35.19],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Destruction of Mediterranean dye industry following Arab conquest and loss of the specific snail identification and dyeing process',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Commandment

The Torah commands that one thread of the tzitzit, the fringes worn on the corners of a garment, must be dyed tekhelet, a specific shade of blue. The commandment appears in Numbers 15:38 and is one of the 613 mitzvot. For observant Jews, it is not optional and not symbolic. It is a specific instruction requiring a specific color from a specific source.

The source was a sea creature called the chilazon. Talmudic descriptions say it had a shell, that its body was the color of the sea, that its blood was used for the dye, and that it appeared in quantity only once in seventy years. The dye was produced through a process involving exposure to sunlight. But after the destruction of the Mediterranean dye industry in the seventh century, the identity of the chilazon was forgotten. The process was lost. For 1,300 years, the commandment existed but could not be fulfilled.

## The Search

The loss of tekhelet was not treated casually. Jewish legal authorities debated for centuries what to do. The consensus was that in the absence of genuine tekhelet, the fringes should be made entirely white. This was a compromise born of necessity, not preference. Scholars never stopped looking.

In the nineteenth century, Rabbi Gershon Henoch Leiner, the Radziner Rebbe, proposed that tekhelet came from the cuttlefish. He established a factory and produced blue-dyed threads. But chemical analysis later showed his process relied on Prussian blue, an iron compound, not a biological dye. The cuttlefish theory was abandoned.

## The Murex Candidate

In the 1980s, chemist Otto Elsner demonstrated that the Murex trunculus sea snail, known to have been used by the Phoenicians for purple dye, could produce a blue dye when the extract was exposed to ultraviolet light during processing. The chemistry was consistent with Talmudic descriptions: the raw secretion is purple, but sunlight converts it to blue.

The Ptil Tekhelet Foundation, established in 1993, now produces tekhelet from Murex trunculus and sells it to Jews worldwide. Thousands wear it. The color is a deep, clear blue, indistinguishable from the indigo shade described in ancient sources.

But the identification remains controversial. Some rabbinical authorities accept the Murex as the chilazon. Others argue that the evidence is circumstantial, that the Talmudic descriptions don't perfectly match, or that the chain of tradition was broken too completely to be reconstructed from archaeological and chemical evidence alone.

## The Color of Obligation

Tekhelet is the only color specified as a religious obligation in Judaism. Not red, not gold, not white. Blue, from a specific marine animal, processed in a specific way. The loss of tekhelet for 1,300 years meant that millions of Jews lived and died unable to fulfill a commandment they read every day. The possible rediscovery is either a restoration of something sacred or a well-intentioned approximation, depending on whom you ask. The color itself, held to the light, is beautiful either way.`,
  quickFacts: {
    'Religious Source': 'Numbers 15:38 (Torah)',
    'Required For': 'One thread of the tzitzit (garment fringes)',
    'Lost Period': '~639 CE to ~1990s (~1,300 years)',
    'Likely Source': 'Murex trunculus sea snail',
    'Key Chemistry': 'UV exposure converts purple secretion to blue',
    'Modern Producer': 'Ptil Tekhelet Foundation (est. 1993)',
  },
  connections: [
    { slug: 'tyrian-purple', relationship: 'Tekhelet and Tyrian purple likely came from the same family of snails, differing only in the UV exposure during processing' },
    { slug: 'mummy-brown', relationship: 'Both are pigments whose production intersects with cultural and ethical questions beyond mere chemistry' },
  ],
  sources: [
    { title: 'The Royal Purple and the Biblical Blue', author: 'Israel Irving Ziderman', year: 1990 },
    { title: 'The Radziner Rebbe\'s Tekhelet and the Identification of Hillazon', author: 'Baruch Sterman', year: 2012 },
    { title: 'The Science of Tekhelet', author: 'Otto Elsner and Ehud Spanier', year: 1996 },
  ],
};
