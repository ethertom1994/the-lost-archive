import type { Entry } from '../../types';

export const cyproMinoan: Entry = {
  slug: 'cypro-minoan',
  name: 'Cypro-Minoan Script',
  tagline: 'Wedged between two deciphered writing systems, this mercantile script has resisted reading for over three thousand years.',
  category: 'language',
  subcategory: 'Undeciphered Scripts',
  lastKnownYear: '~1050 BCE',
  lastKnownLocation: 'Cyprus',
  coordinates: [35.13, 33.43],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Replaced by the Cypriot syllabary and Greek alphabet during the transition from the Bronze Age to the Iron Age',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Script Between Scripts

Cypro-Minoan is one of the most tantalizing puzzles in epigraphy. It sits, historically and structurally, between two writing systems that have been deciphered: Linear A, the script of Minoan Crete, and the Cypriot syllabary, used to write Greek on Cyprus from roughly the eleventh to the third centuries BCE. Cypro-Minoan appears to descend from Linear A and to have given rise to the Cypriot syllabary. It is the middle link in a chain, and it is the one we cannot read.

The script was in use on Cyprus from approximately 1550 to 1050 BCE, spanning the Late Bronze Age. It appears on clay tablets, clay balls, ceramic vessels, bronze tools, and ivory objects. The corpus is small: roughly 250 inscribed objects bearing approximately 4,000 individual signs. This is both its fascination and its curse. Four thousand signs may not be enough to crack a script when the underlying language is unknown.

## A Merchant's Script

Most undeciphered ancient scripts are associated with palaces or temples, the administrative machinery of states. Cypro-Minoan is different. While some inscriptions come from official contexts, a significant proportion appear on objects associated with trade: clay balls that may have served as bills of lading, inscribed weights, marked pottery that likely recorded contents or ownership. This is a script used, at least in part, by merchants.

This mercantile character makes Cypro-Minoan unusual among ancient writing systems and complicates decipherment. Administrative texts tend to be formulaic, recording the same types of transactions in predictable patterns. Merchant notations may have been more varied, more abbreviated, and more dependent on context that the reader was expected to already know.

## Why It Resists

Several factors conspire to keep Cypro-Minoan unread. The corpus is small: 250 objects is a fraction of what cryptanalytic techniques require. The underlying language is unknown, meaning decipherers cannot test readings against a known vocabulary. The script may represent more than one language, as Cyprus in the Late Bronze Age was a crossroads of Aegean, Levantine, and Anatolian cultures. And the signs themselves are ambiguous, some clearly derived from Linear A but with uncertain sound values, while others appear to be local innovations.

In 2022, a team led by Philippa Steele at the University of Cambridge published a new comprehensive corpus of Cypro-Minoan inscriptions, the first major update to the sign catalog in decades. The project digitized and re-examined many inscriptions, some of which had deteriorated since their original publication. But a full decipherment remains out of reach.

## The Locked Room

Cypro-Minoan occupies a peculiar position: a script surrounded by knowledge that cannot quite reach it. We know what came before it (Linear A, also undeciphered but partially understood). We know what came after it (the Cypriot syllabary, fully deciphered). We know the archaeological context, the material culture, the trade networks, the political history of Late Bronze Age Cyprus. We have the room. We have the furniture. We simply cannot read the writing on the wall.`,
  quickFacts: {
    'Date Range': '~1550-1050 BCE',
    'Location': 'Cyprus (with some finds in Ugarit, Syria)',
    'Corpus Size': '~250 inscribed objects, ~4,000 signs',
    'Script Type': 'Syllabary (probable)',
    'Ancestor Script': 'Linear A (Minoan Crete)',
    'Descendant Script': 'Cypriot syllabary',
    'Underlying Language': 'Unknown',
    'Status': 'Undeciphered',
  },
  connections: [
    { slug: 'proto-elamite', relationship: 'Both are undeciphered ancient scripts whose small corpora and unknown underlying languages have defeated generations of scholars' },
    { slug: 'antikythera-mechanism', relationship: 'Both emerge from the eastern Mediterranean Bronze Age and demonstrate the sophistication of cultures whose written records remain only partially accessible' },
    { slug: 'library-of-alexandria', relationship: 'Both represent knowledge systems that were lost during civilizational transitions, leaving only fragments' },
  ],
  sources: [
    { title: 'The Cypro-Minoan Corpus Project', author: 'Philippa Steele, University of Cambridge', year: 2022 },
    { title: 'Cypro-Minoan Inscriptions, Volume I: Analysis', author: 'Emilia Masson', year: 1974 },
    { title: 'Writing in Cyprus and the Aegean Bronze Age', author: 'Philippa Steele', year: 2013 },
    { title: 'The Oxford Handbook of the Bronze Age Aegean', author: 'Eric Cline (ed.)', year: 2010 },
  ],
};
