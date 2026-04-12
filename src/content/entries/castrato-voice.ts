import type { Entry } from '../../types';

export const castratoVoice: Entry = {
  slug: 'castrato-voice',
  name: 'The Castrato Voice',
  tagline: 'A vocal range produced by castration before puberty. The last castrato recorded his voice in 1904. Nothing like it can be recreated.',
  category: 'sound',
  subcategory: 'Musical Traditions',
  lastKnownYear: 1922,
  lastKnownLocation: 'Rome, Italy',
  coordinates: [41.90, 12.50],
  region: 'Europe',
  status: 'extinct',
  cause: 'The practice of castration for vocal preservation was banned; the last castrato died in 1922',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Alessandro_Moreschi.png/400px-Alessandro_Moreschi.png',
  imageCaption: 'Alessandro Moreschi, the last known castrato',
  imageCredit: 'Public domain',
  body: `## The Unnatural Instrument

For roughly three hundred years, the most celebrated voices in European music belonged to men who had been castrated as boys. The castrati, as they were known, underwent the procedure before puberty, preventing the testosterone-driven growth of the larynx that deepens the male voice. The result was extraordinary: adult male lung capacity and physical power driving a vocal range that could span soprano and mezzo-soprano registers. The combination produced a sound that contemporary accounts described as otherworldly, with a power, range, and agility that no unaltered human voice could match.

The practice began in the Italian church choirs of the sixteenth century, where women were forbidden from singing. It reached its peak in the seventeenth and eighteenth centuries, when castrati dominated Italian opera. The most famous, Carlo Broschi, known as Farinelli, commanded fees comparable to modern rock stars and performed for royalty across Europe. His voice reportedly spanned three and a half octaves.

## The Cost

The human cost was enormous. Thousands of boys were castrated, many from poor families who hoped their sons would achieve the fame and fortune of a Farinelli. Most did not. The surgery was dangerous, especially before modern anesthesia and antisepsis, and many boys died from the procedure or its complications. Those who survived but lacked exceptional talent faced a life of physical difference without the compensation of a celebrated career.

The ethical revulsion grew slowly. Napoleon banned the practice in territories under French control. Italy officially prohibited the castration of boys for musical purposes in 1861, upon unification, though the Vatican choir continued to employ castrati quietly for decades afterward.

## The Recording

Alessandro Moreschi, born in 1858, was the last known castrato. He sang in the Sistine Chapel choir from 1883 to 1913. Between 1902 and 1904, he made a series of recordings for the Gramophone Company, the only audio recordings of an actual castrato voice in existence.

The recordings are technically poor, captured on early acoustic equipment that could not reproduce the full range or quality of any voice, let alone one as unusual as Moreschi's. He was also past his prime when they were made, in his mid-forties and no longer the singer he had been. Critics note a pronounced vibrato and uncertain pitch in places. Yet even through the hiss and distortion, something remarkable is audible: a voice that sounds like nothing else in the recorded catalog, neither female soprano nor male countertenor, occupying a timbral space that no longer exists.

Moreschi died in Rome in 1922. He was sixty-three years old. With him died the last living example of a vocal tradition that had shaped three centuries of European music.

## What Countertenors Cannot Do

Modern countertenors sing in falsetto, a technique that uses the upper register of the male voice. The sound is beautiful but fundamentally different from the castrato voice. A countertenor's falsetto is produced by vibrating the edges of the vocal folds. A castrato's voice was produced by full vocal fold vibration, the same mechanism that produces a child's or woman's voice, powered by an adult male's respiratory system. The difference in power, projection, and timbral richness was, by all historical accounts, immense.`,
  quickFacts: {
    'Era': '16th-19th century (peak: 17th-18th)',
    'Origin': 'Italian church choirs',
    'Most Famous': 'Farinelli (Carlo Broschi, 1705-1782)',
    'Last Castrato': 'Alessandro Moreschi (1858-1922)',
    'Recordings': '1902-1904, Gramophone Company',
    'Vocal Mechanism': 'Full fold vibration with adult male lungs',
    'Practice Banned': '1861 (Italy), though Vatican continued later',
    'Modern Equivalent': 'None (countertenor falsetto is fundamentally different)',
  },
  connections: [
    { slug: 'alala-song', relationship: 'Both represent sounds that cannot be recreated even with modern technology, because the tradition of production is broken' },
    { slug: 'stradivarius-secret', relationship: 'Both are irreproducible artistic phenomena from the same era whose secrets died with their creators' },
    { slug: 'knocker-upper', relationship: 'Both are professions made extinct by changing times, though with vastly different human costs' },
  ],
  sources: [
    { title: 'The Castrati in Opera', author: 'Angus Heriot', year: 1956 },
    { title: 'Farinelli and the King', author: 'Carlo Vitali', year: 2004 },
    { title: 'Alessandro Moreschi and the Voice of the Castrato', author: 'Nicholas Clapton', year: 2004 },
    { title: 'The Last Castrato: The Recordings of Alessandro Moreschi', year: 1902 },
  ],
};
