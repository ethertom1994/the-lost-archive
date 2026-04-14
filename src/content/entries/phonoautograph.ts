import type { Entry } from '../../types';

export const phonoautograph: Entry = {
  slug: 'phonoautograph',
  name: 'Phonautograph Recording of Au Clair de la Lune',
  tagline: 'The oldest recorded human voice. Made in 1860. Not heard until 2008 -- because no one built a way to play it back.',
  category: 'sound',
  subcategory: 'Early Sound Recording',
  lastKnownYear: 1860,
  lastKnownLocation: 'Paris, France',
  coordinates: [48.86, 2.35],
  region: 'Europe',
  status: 'extinct',
  cause: 'The phonautograph was designed to visualize sound, not play it back; only modern digital technology could decode the recording 148 years later',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Before Playback

On April 9, 1860, in Paris, a typesetter and inventor named Edouard-Leon Scott de Martinville pressed a sheet of soot-blackened paper against a rotating cylinder, spoke into a barrel-shaped horn fitted with a vibrating membrane and a hog-bristle stylus, and recorded the human voice for the first time in history. He sang a fragment of "Au Clair de la Lune," the French folk song. The stylus traced the vibrations of his voice as a wavering white line etched into the soot -- a visual picture of sound.

Scott called his invention the phonautograph, meaning "self-writer of sound." He had no interest in playing the sound back. The concept of audio playback did not yet exist. His goal was purely scientific: to create a visual record of sound waves so they could be studied the way one studies a photograph. He wanted to see sound, not hear it again. Thomas Edison would not invent the phonograph for another seventeen years.

## Trapped in Soot

Scott deposited his phonautograms with the Academie des Sciences and the French patent office. They sat in archives for nearly a century and a half, studied occasionally by historians of technology but never heard. The recordings were, after all, just lines on paper. There was no needle, no groove, no mechanism to convert them back into sound. They were visual data with no decoder.

Several phonautograms survived in the collections of the Institut National de la Propriete Industrielle in Paris. Researchers knew what they were. They knew that locked in those wavy lines was the sound of a human voice from 1860 -- seventeen years before Edison, twenty years before the earliest surviving phonograph recordings. But the lines were silent. A photograph of sound that could not speak.

## The Decoding

In 2008, a team of audio historians and scientists called First Sounds, working with researchers at Lawrence Berkeley National Laboratory in California, developed a technique to read the phonautograms optically. They high-resolution scanned the soot-blackened paper, used software to trace the wavering line of the stylus, and converted the visual waveform back into audio using the same principles that Scott had used to create it -- only in reverse.

What emerged was ghostly, distorted, unmistakable: a human voice singing the opening line of "Au Clair de la Lune," recorded on April 9, 1860. The pitch was initially misinterpreted, played back at the wrong speed, but subsequent analysis corrected the playback. The voice is thin, wavering, surrounded by hiss and mechanical noise. It lasts about ten seconds. It is the oldest known recording of a human voice.

## The Edge of Silence

Everything before April 9, 1860 is silence. Every human voice, every piece of music, every speech, every lullaby sung before that date exists only in written description or memory. Abraham Lincoln's voice. Beethoven playing piano. Mozart singing. Napoleon giving orders. The phonautograph recording is the boundary line. On one side, we can hear. On the other, we can only imagine. And Scott de Martinville, the man who drew that line, never heard his own recording. He died in 1879, unaware that the wavy lines he had etched in soot contained a recoverable voice.`,
  quickFacts: {
    'Recorded': 'April 9, 1860',
    'Inventor': 'Edouard-Leon Scott de Martinville',
    'Device': 'Phonautograph (patented 1857)',
    'Song': '"Au Clair de la Lune" (French folk song)',
    'First Playback': '2008, by First Sounds / Lawrence Berkeley National Lab',
    'Gap': '148 years between recording and first playback',
    'Medium': 'Soot-blackened paper on rotating cylinder',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both are singular sound recordings that mark the boundary of what can and cannot be heard -- one the last of a species, the other the first of all recording' },
    { slug: 'pre-equal-temperament', relationship: 'Both represent historical sounds that existed beyond the reach of recording technology, recovered only through indirect means' },
  ],
  sources: [
    { title: 'Inscribing Sound: Edouard-Leon Scott de Martinville and the Phonautograph', author: 'Patrick Feaster', year: 2010 },
    { title: 'Playback of Phonautograph Recordings', author: 'First Sounds collaborative', year: 2008 },
    { title: 'The Phonautograph and the Beginnings of Sound Recording', author: 'David Giovannoni', year: 2008 },
    { title: 'Earliest Known Recording of a Human Voice', author: 'Lawrence Berkeley National Laboratory', year: 2008 },
  ],
};
