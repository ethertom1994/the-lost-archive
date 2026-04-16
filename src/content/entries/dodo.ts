import type { Entry } from '../../types';

export const dodo: Entry = {
  slug: 'dodo',
  name: 'Dodo',
  tagline: 'The bird so synonymous with extinction that its name became the metaphor. But the real story is stranger than the cartoon: we have almost nothing left of it. No complete skin. No preserved egg. Just bones and sketches.',
  category: 'fauna',
  subcategory: 'Extinct Birds',
  lastKnownYear: 1681,
  lastKnownLocation: 'Mauritius, Indian Ocean',
  coordinates: [-20.35, 57.55],
  region: 'Indian Ocean',
  status: 'extinct',
  cause: 'Hunting by sailors, predation by introduced rats, pigs, and monkeys on eggs and chicks',
  imageUrl: '/images/entries/dodo.jpg',
  imageCaption: 'Edwards\' Dodo, painted by Roelant Savery in 1626, the most famous depiction of the dodo',
  imageCredit: 'Roelant Savery, Public domain, via Wikimedia Commons',
  body: `## The Bird We Think We Know

Everyone knows the dodo. The fat, stupid bird that couldn't fly and didn't run from humans. The cartoon of extinction. Except almost everything in that popular image is wrong.

The dodo was not fat. Sketches made from living birds show an athletic, upright bird roughly the size of a turkey, with strong legs and a large, powerful beak adapted for cracking tough seeds and fruits. The "fat" image comes from European paintings based on overfed captive specimens and from stuffed mounts made decades after the last one died, padded with cotton to fill out the skin.

It was not stupid. It had no land predators on Mauritius for millions of years. Fearlessness in the absence of threats is not stupidity. It is a rational evolutionary strategy, one that worked perfectly until sailors arrived in 1598.

## Less Than a Century

Dutch sailors first encountered the dodo on Mauritius around 1598. By 1681, roughly eighty years later, it was gone. The extinction was caused not primarily by hunting (though sailors did kill and eat dodos) but by the animals they brought with them: rats, pigs, and crab-eating macaques, all of which preyed on dodo eggs and chicks. The dodo nested on the ground and laid only one egg per clutch. The introduced predators ate the eggs faster than the birds could replace them.

The collapse was quiet. There was no dramatic last stand, no famous "last dodo." The birds simply became fewer and fewer until someone noticed they couldn't find any more. The last widely accepted sighting was in 1681, reported by a shipwrecked sailor named Benjamin Harry.

## What Remains

Here is what is surprising: for the most famous extinct animal in the world, we have almost nothing. No complete preserved specimen exists. No skin. No egg. The last stuffed dodo, held by the Ashmolean Museum in Oxford, was destroyed in a fire in 1755 (only the head and one foot survived). A few collections hold scattered bones. One partial skeleton, the "Thirioux dodo," is the most complete example.

Most of what we "know" about the dodo's appearance comes from a handful of sketches made by Dutch sailors between 1598 and 1634, supplemented by the Oxford head and foot and by subfossil bones excavated from Mauritian swamps in the 1800s. The plump, grey bird in children's books is a reconstruction built from fragments, imagination, and guesswork.

## The Irony of Fame

The dodo is the universal symbol of extinction. Its name is shorthand for obsolescence. "Dead as a dodo" is a cliche in a dozen languages. But this fame is built on almost no material evidence. We have more physical remains of dinosaurs that died 66 million years ago than of a bird that died 340 years ago. The dodo is famous not because we know it but because we lost it so thoroughly that its very absence became the lesson.`,
  quickFacts: {
    'Species': 'Raphus cucullatus',
    'Location': 'Mauritius, Indian Ocean (endemic)',
    'First European Contact': '~1598',
    'Last Sighting': '1681',
    'Surviving Remains': 'Partial skeleton, one head and foot (Oxford), scattered bones',
    'Preserved Specimens': 'Zero complete skins or stuffed mounts survive',
  },
  connections: [
    { slug: 'stellers-sea-cow', relationship: 'Both were large animals on isolated islands, both driven extinct within decades of European contact' },
    { slug: 'caribbean-monk-seal', relationship: 'Both were fearless animals that had never learned to fear humans, and both were killed for that trust' },
    { slug: 'cafe-marron', relationship: 'Both from islands in the Indian Ocean, both casualties of European colonization' },
  ],
  sources: [
    { title: 'The Dodo: From Extinction to Icon', author: 'Errol Fuller', year: 2002 },
    { title: 'Lost Land of the Dodo', author: 'Anthony Cheke and Julian Hume', year: 2008 },
    { title: 'A New Reconstruction of the Dodo', author: 'Leon Claessens et al.', year: 2016 },
  ],
};
