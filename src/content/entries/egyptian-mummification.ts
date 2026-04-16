import type { Entry } from '../../types';

export const egyptianMummification: Entry = {
  slug: 'egyptian-mummification',
  name: 'Egyptian Mummification',
  tagline: 'A 3,000-year tradition of preserving the dead for eternity. The full process took 70 days and was guarded by priests who took their secrets to the grave.',
  category: 'culture',
  subcategory: 'Lost Ritual Arts',
  lastKnownYear: '~400 CE',
  lastKnownLocation: 'Egypt',
  coordinates: [25.7, 32.65],
  region: 'North Africa',
  status: 'extinct',
  cause: 'Spread of Christianity in Roman Egypt eliminated the priestly class that held the knowledge; last known mummifications occurred around the 4th century CE',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Seventy Days to Eternity

Egyptian mummification was not a single procedure but a spectrum of techniques practiced over three millennia, from roughly 2600 BCE to the fourth century CE. The most elaborate form, reserved for pharaohs and high officials, was a 70-day ritual combining chemical preservation, surgical intervention, and religious ceremony. The Greek historian Herodotus, writing in the fifth century BCE, provided the most detailed surviving account, though Egyptologists have confirmed and expanded on his description through analysis of mummified remains.

The process began with the removal of the brain, typically extracted through the nostrils using hooked bronze instruments. The abdominal organs were removed through an incision in the left flank, washed, treated with natron (a naturally occurring mineral salt), and stored in four canopic jars dedicated to the four sons of Horus. The heart was deliberately left in place, as Egyptian theology held it to be the seat of the soul and necessary for judgment in the afterlife. The body cavity was washed with palm wine and packed with natron, then the entire body was covered in natron and left to desiccate for approximately 40 days.

## The Art of Wrapping

After desiccation, the body was washed, anointed with oils and resins, and wrapped in hundreds of yards of linen bandages. The wrapping process itself was ritualized, with specific prayers recited at each stage and protective amulets placed between the layers. The exact resins used, their proportions, the sequence of wrapping, and the accompanying prayers were knowledge held exclusively by the embalmer priests, the wt and hery seshta, who operated under the patronage of the jackal god Anubis.

Recent chemical analysis of mummification resins has identified complex mixtures of plant oils, animal fats, beeswax, tree resins, and bitumen. A 2023 study of a mummification workshop at Saqqara identified specific vessels labeled for use on particular body parts, demonstrating that different preparations were used on the head, the torso, and the limbs. The chemical sophistication suggests centuries of empirical experimentation.

## Death of a Tradition

Mummification declined gradually as Christianity spread through Roman Egypt. The theological framework that had sustained the practice, the belief that the preserved body was necessary for the ka and ba to survive in the afterlife, was replaced by Christian doctrines of bodily resurrection that did not require physical preservation. The embalmer priests who held the detailed procedural knowledge were members of a religious tradition that was actively suppressed. By the fourth century CE, mummification had ceased. The last practitioners died without successors, and 3,000 years of accumulated knowledge about human preservation was lost.`,
  quickFacts: {
    'Duration of Tradition': '~2600 BCE to ~400 CE (3,000 years)',
    'Process Length': '70 days for full royal treatment',
    'Brain Removal': 'Through the nostrils with bronze hooks',
    'Desiccation Agent': 'Natron (mineral salt)',
    'Organ Storage': 'Canopic jars (four, for four organs)',
    'Patron Deity': 'Anubis, jackal-headed god of embalming',
    'Key Discovery': 'Saqqara mummification workshop (2018)',
  },
  connections: [
    { slug: 'kyphi', relationship: 'Both were complex Egyptian preparations involving multiple ingredients and priestly knowledge that died with the tradition' },
    { slug: 'library-of-alexandria', relationship: 'Both represent vast bodies of Egyptian knowledge that survived millennia but could not survive the transition to the Christian Roman world' },
  ],
  sources: [
    { title: 'The Histories, Book II', author: 'Herodotus', year: -440 },
    { title: 'Mummification in Ancient Egypt', author: 'Salima Ikram & Aidan Dodson', year: 1998 },
    { title: 'Molecular Evidence for the Processing of Egyptian Embalming Materials at Saqqara', author: 'Maxime Rageot et al.', year: 2023 },
    { title: 'Death and Burial in Ancient Egypt', author: 'Salima Ikram', year: 2003 },
  ],
};
