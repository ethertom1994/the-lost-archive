import type { Entry } from '../../types';

export const kyphi: Entry = {
  slug: 'kyphi',
  name: 'Kyphi',
  tagline: 'Sacred Egyptian incense burned at sunset for the sun god Ra — its recipes list ingredients that no one can identify and preparations that required prayers to the stars.',
  category: 'material',
  subcategory: 'Incense',
  lastKnownYear: '~400',
  lastKnownLocation: 'Egypt',
  coordinates: [25.7, 32.65],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Christianization of Egypt ended temple ritual use; many ancient ingredient names unmappable to modern botanicals; astronomical timing of preparation lost',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Scent of the Setting Sun

Three times each day, the priests of ancient Egypt burned incense in the temples. At dawn, they offered frankincense to greet the sun. At noon, myrrh accompanied Ra at his zenith. But at sunset, as the sun began its dangerous nightly journey through the underworld, the priests burned kyphi — the most sacred, most complex, and most mysterious incense of the ancient world.

Kyphi was not merely fragrance. It was theology made material. The Egyptians believed that its smoke carried prayers to the gods, purified the air of evil influences, and soothed the spirit of the dying sun. It was used to embalm pharaohs, scent royal garments, and treat medical complaints. Plutarch, writing in the first century CE, described kyphi as a compound that could lull the listener to sleep, brighten dreams, relax the mind, and polish the faculty of imagination.

## Recipes and Riddles

Multiple kyphi recipes survive from antiquity, inscribed on temple walls at Edfu and Philae, recorded by Plutarch and Dioscorides, and referenced in the Ebers Papyrus. They agree on general principles but diverge dramatically in specifics. The number of ingredients ranges from ten in the simplest versions to fifty or more in the most elaborate. Common components include honey, wine, raisins, frankincense, myrrh, juniper, sweet flag, cinnamon, and various resins.

The fundamental problem for modern reconstruction is identification. Many ancient Egyptian ingredient names do not correspond to any plant or substance that modern botanists can identify with certainty. The hieroglyphic term for a given resin or wood might refer to a species that has since gone extinct, or to a substance traded under names that changed meaning over centuries. Scholars debate basic ingredients — whether a given term means cinnamon or cassia, sweet flag or calamus, one species of juniper or another.

## The Process Was the Product

Even if every ingredient could be identified, the preparation method presents its own barriers. Temple inscriptions describe kyphi production as a ritual process extending over days or weeks. Ingredients were added in prescribed sequences. Specific prayers accompanied each step. The timing was governed by astronomical events — the positions of stars and planets determined when certain mixtures should be combined or heated.

Modern interpreters tend to dismiss the ritual elements as superstition layered onto a straightforward pharmaceutical process. But the example of other ancient preparations — where timing and sequence proved critical to chemical efficacy — suggests caution. The prayers may have served as mnemonic devices for precise timing. The astronomical alignment may have encoded seasonal information about when specific plant materials reached optimal chemical potency. Dismissing the ritual may mean losing the recipe.

## What Remains

Several modern perfumers and incense makers have attempted to recreate kyphi based on the surviving ancient texts. These reconstructions are fragrant and evocative, but they are necessarily speculative — built on best guesses about ingredient identity and modern processing methods that omit the ritual framework entirely. No one can know what the temple at Edfu smelled like at sunset. The scent of kyphi died with the last priests who mixed it by starlight, and no recipe inscribed in stone preserves the knowledge their hands and noses carried.`,
  quickFacts: {
    'Used For': 'Sunset temple ritual for Ra, embalming, medicine',
    'Ingredient Range': '10 to 50+ ingredients depending on recipe',
    'Common Ingredients': 'Honey, wine, raisins, frankincense, myrrh, juniper',
    'Source Texts': 'Edfu and Philae temple walls, Plutarch, Ebers Papyrus',
    'Key Problem': 'Many ancient ingredient names unmappable to modern species',
    'Preparation': 'Multi-day ritual process with prayers and astronomical timing',
    'Described By': 'Plutarch as soothing dreams and polishing imagination',
  },
  connections: [
    { slug: 'egyptian-blue', relationship: 'Both are ancient Egyptian productions requiring precise empirical knowledge transmitted through temple workshop traditions' },
    { slug: 'balds-eyesalve', relationship: 'Both are ancient multi-ingredient preparations whose ritual/procedural elements may encode critical production parameters' },
    { slug: 'sea-silk', relationship: 'Both are ancient luxury materials requiring elaborate preparation processes maintained through hereditary craft traditions' },
    { slug: 'silphium', relationship: 'Both are ancient substances of enormous cultural importance whose exact identity and preparation are now irrecoverably uncertain' },
  ],
  sources: [
    { title: 'Sacred Luxuries: Fragrance, Aromatherapy, and Cosmetics in Ancient Egypt', author: 'Lise Manniche', year: 1999 },
    { title: 'Plutarch: Isis and Osiris', author: 'Plutarch (trans. Frank Cole Babbitt)', year: 1936 },
    { title: 'An Ancient Egyptian Herbal', author: 'Lise Manniche', year: 1989 },
  ],
};
