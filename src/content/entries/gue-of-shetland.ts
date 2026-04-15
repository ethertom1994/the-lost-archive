import type { Entry } from '../../types';

export const gueOfShetland: Entry = {
  slug: 'gue-of-shetland',
  name: 'The Gue of Shetland',
  tagline: 'A stringed instrument from Scotland\'s northern islands. No instruments survive. No drawings. No music. Just a few sentences from 1809 confirming it once existed.',
  category: 'sound',
  subcategory: 'Lost Instruments',
  lastKnownYear: '~1809',
  lastKnownLocation: 'Shetland Islands, Scotland',
  coordinates: [60.39, -1.15],
  region: 'Europe',
  status: 'extinct',
  cause: 'Replaced by the fiddle; no physical examples, images, or musical notation preserved',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Ghost Instrument

Some things vanish so completely that their absence becomes their defining characteristic. The gue of the Shetland Islands is perhaps the most thoroughly erased musical instrument in European history. No example survives in any museum. No drawing or painting depicts it. No tune written for it was recorded in any form. What we know of the gue fits in a short paragraph, pieced together from a handful of written references, the most substantial being a brief description by Arthur Edmondston in his 1809 work on the Shetland Islands.

Edmondston described the gue as a stringed instrument with two strings made of horsehair, played with a bow. He noted that it had been in use among the islanders in earlier times but had been entirely supplanted by the fiddle, which Norse and Scottish traders had introduced. By the time he wrote, the gue was already a memory. No living person on the islands could play one, because none existed to play.

## Norse Roots

The Shetland Islands were Norse territory from the ninth century until 1472, when they were pledged to Scotland. The culture of the islands during those centuries was fundamentally Scandinavian, and the gue is generally understood to be related to the broader family of Norse and Nordic bowed instruments. The Hardanger fiddle of Norway, the Icelandic fidhla, and various medieval Scandinavian bowed lyres all belong to a tradition of two- and three-stringed instruments that preceded the modern violin family in Northern Europe.

The gue likely belonged to this family. A two-stringed, horsehair-strung bowed instrument is consistent with early medieval Nordic instruments that have been found archaeologically in Scandinavian contexts. But the Shetland example is unique in its totality of loss. Even the most fragmentary Scandinavian instruments have left physical remains, a bridge here, a tuning peg there. The gue left nothing.

## What Silence Sounds Like

The challenge of the gue is that there is nothing to reconstruct from. Bach's lituus left a musical score that encoded enough acoustic information for scientists to reverse-engineer a plausible instrument. The castrato voice left recordings, however poor. The gue left two sentences and a name. We cannot model its sound because we do not know its dimensions, its resonating chamber shape, its string length, or its tuning. We cannot guess at its repertoire because not a single melody was transcribed.

Instrument makers have occasionally built speculative gues based on related Nordic instruments, but these are creative interpretations rather than reconstructions. They tell us what a two-stringed bowed instrument from the Norse world might have sounded like. They cannot tell us what the gue sounded like, because nobody alive has any way of knowing.

## The Value of the Gap

The gue matters precisely because it is unknowable. Most entries in the archive of lost things preserve at least a fragment: a recording, a recipe, a seed, a bone. The gue preserves only the knowledge that there is something to be missing. It is the purest form of cultural loss, an instrument that existed, that real people played at real gatherings on real cold nights in the Shetland Islands, reduced to a name and the fact that it had two strings.

Even that name is uncertain. "Gue" may be a rendering of a Norse term, or a Shetlandic dialect word, or a misremembering. The instrument exists now only as a gap in the shape of a sound.`,
  quickFacts: {
    'Location': 'Shetland Islands, Scotland',
    'Type': 'Bowed stringed instrument, two horsehair strings',
    'Cultural Origin': 'Norse/Scandinavian tradition',
    'Key Source': 'Arthur Edmondston, 1809',
    'Replaced By': 'The fiddle (violin)',
    'Surviving Examples': 'None',
    'Surviving Images': 'None',
    'Surviving Music': 'None',
  },
  connections: [
    { slug: 'bachs-lituus', relationship: 'Both are instruments that vanished without a single surviving example, though the lituus left a score and the gue left nothing' },
    { slug: 'stonehenge-acoustics', relationship: 'Both represent lost soundscapes of northern European cultures where the physical space survived but the sound did not' },
    { slug: 'eyak-language', relationship: 'Both are cultural traditions from small communities that vanished without adequate documentation' },
  ],
  sources: [
    { title: 'A View of the Ancient and Present State of the Zetland Islands', author: 'Arthur Edmondston', year: 1809 },
    { title: 'The Fiddle in Shetland Society', author: 'Peter Cooke', year: 1986 },
    { title: 'Musical Instruments of the Norse Atlantic', author: 'Andro Linklater', year: 1998 },
  ],
};
