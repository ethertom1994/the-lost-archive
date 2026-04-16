import type { Entry } from '../../types';

export const baldsEyesalve: Entry = {
  slug: 'balds-eyesalve',
  name: "Bald's Eyesalve",
  tagline: 'A 1,000-year-old Anglo-Saxon infection remedy that kills MRSA better than modern antibiotics — and no one knows exactly why.',
  category: 'technology',
  subcategory: 'Medicine',
  lastKnownYear: '~1100',
  lastKnownLocation: 'Winchester, England',
  coordinates: [51.06, -1.31],
  region: 'Europe',
  status: 'functionally_extinct',
  cause: 'Medieval medical knowledge dismissed as superstition; recipe survived in manuscript but practical tradition died',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Recipe From the Dark Ages

In a ninth-century manuscript known as Bald's Leechbook, held in the British Library, a recipe appears for treating eye infections. The instructions are precise: take equal amounts of garlic and another allium (likely onion or leek), pound them together, add wine and bovine bile, mix in a vessel of brass, and let the preparation stand for nine days. The result is Bald's Eyesalve, and in 2015 it became the most famous medieval recipe in modern microbiology.

The Leechbook itself is one of the oldest surviving medical texts in English, compiled during the reign of King Alfred the Great. For over a century, historians treated it as a curiosity — evidence of medieval ignorance, a catalog of folk remedies no rational person would take seriously. The garlic and bile and prayers seemed to confirm every assumption about pre-scientific medicine.

## The Nottingham Experiment

In 2015, microbiologist Freya Harrison at the University of Nottingham decided to test the recipe with scientific rigor. Her team followed the original instructions as precisely as possible, sourcing the ingredients and preparing the mixture in brass vessels. They then tested the resulting preparation against methicillin-resistant Staphylococcus aureus — MRSA, one of the most dangerous antibiotic-resistant bacteria in modern hospitals.

The results stunned the research community. Bald's Eyesalve killed up to 90% of MRSA bacteria in biofilm form, the stubborn colonies that make hospital infections so difficult to treat. This performance rivaled or exceeded vancomycin, the antibiotic of last resort for MRSA infections. The eyesalve also proved effective against several other bacterial species.

## The Mystery of Synergy

What makes the result genuinely remarkable is that no single ingredient works alone. Garlic has well-documented antimicrobial properties. Wine contains organic acids. Bile salts are known surfactants. Brass contributes copper ions, which are antimicrobial. But individually, none of these ingredients comes close to matching the potency of the combined preparation. The killing power emerges only from the specific combination, prepared in the specific way the Leechbook describes — including the nine-day incubation period.

This synergistic effect suggests something profound: the Anglo-Saxon practitioners who developed this remedy were not guessing. They were conducting systematic empirical experiments, testing combinations and refining protocols over generations. The nine-day waiting period, so easy to dismiss as ritual, appears to allow critical biochemical reactions to complete.

## A Thousand Years of Silence

The recipe text survived in a manuscript. The practical medical tradition that created it did not. By roughly 1100 CE, the Anglo-Saxon empirical medicine tradition — the living practice of preparing, testing, and refining these remedies — had been displaced by Norman conquest, monastic reorganization, and the adoption of continental Galenic medicine. The Leechbook became an artifact rather than a working manual. For nearly a thousand years, the recipe sat unread in a library, its practical knowledge dead.

What was lost was not the text but the tradition: the generation-to-generation transmission of which ingredients to select, how to judge freshness and potency, how to recognize when the nine-day preparation was proceeding correctly, and how to apply the result. Harrison's 2015 experiment proved the recipe worked, but it took a modern microbiology lab to rediscover what Anglo-Saxon practitioners knew from practice. Hundreds of other recipes in the Leechbook and similar manuscripts remain untested — a thousand years of practical medical knowledge reduced to words on vellum that no living person knows how to properly execute.`,
  quickFacts: {
    'Source Text': "Bald's Leechbook, ~900 CE, British Library",
    'Key Ingredients': 'Garlic, onion/leek, wine, bovine bile, brass vessel',
    'MRSA Kill Rate': 'Up to 90% in biofilm',
    'Modern Comparison': 'Rivals vancomycin, the last-resort antibiotic',
    'Critical Detail': 'No single ingredient works alone — synergy required',
    'Incubation': 'Nine days in brass vessel',
    'Research Team': 'AncientBiotics project, University of Nottingham',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent vast bodies of ancient empirical knowledge lost to historical dismissal or destruction' },
    { slug: 'terra-preta', relationship: 'Both are ancient technologies whose effectiveness modern science confirmed but cannot fully replicate' },
    { slug: 'kyphi', relationship: 'Both are ancient multi-ingredient preparations whose precise formulation encoded empirical knowledge dismissed as ritual' },
  ],
  sources: [
    { title: 'A 1,000-year-old antimicrobial remedy with antistaphylococcal activity', author: 'Freya Harrison et al.', year: 2015, url: 'https://doi.org/10.1128/mBio.01129-15' },
    { title: "Bald's Leechbook (Royal MS 12 D XVII)", author: 'British Library', url: 'https://www.bl.uk/collection-items/balds-leechbook' },
    { title: 'AncientBiotics: A Medieval Remedy for Modern Day Superbugs?', author: 'University of Nottingham', year: 2015, url: 'https://www.nottingham.ac.uk/news/ancientbiotics' },
  ],
  relatedMedia: [
    { type: 'video', title: 'AncientBiotics — Can Medieval Medicine Help Fight Superbugs?', url: 'https://www.youtube.com/watch?v=_pH2sDMkNR4', description: 'University of Nottingham overview of the AncientBiotics project' },
    { type: 'article', title: "Anglo-Saxon Remedy Kills Hospital Superbug MRSA", url: 'https://www.bbc.co.uk/news/uk-england-nottinghamshire-32117815', description: 'BBC coverage of the original 2015 findings' },
  ],
};
