import type { Entry } from '../../types';

export const areciboTelescope: Entry = {
  slug: 'arecibo-telescope',
  name: 'Arecibo Telescope',
  tagline: 'In 1974, we beamed a message at the stars. In 2020, the telescope collapsed. If they ever reply, the ear we were listening with is rubble.',
  category: 'technology',
  subcategory: 'Lost Scientific Infrastructure',
  lastKnownYear: 2020,
  lastKnownLocation: 'Arecibo, Puerto Rico',
  coordinates: [18.35, -66.75],
  region: 'Caribbean',
  status: 'extinct',
  cause: 'Structural collapse of the Arecibo Observatory on December 1, 2020, after cable failures',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Arecibo_Observatory_Aerial_View.jpg/400px-Arecibo_Observatory_Aerial_View.jpg',
  imageCaption: 'Aerial view of the Arecibo Observatory, showing the 305-meter radio telescope dish, 2012',
  imageCredit: 'NAIC - Arecibo Observatory, a facility of the NSF; courtesy of the NAIC, Public domain, via Wikimedia Commons',
  keyDate: '12-01',
  keyDateLabel: 'Arecibo Observatory collapsed, 2020',
  body: `## The Message

On November 16, 1974, the Arecibo radio telescope in Puerto Rico transmitted a carefully crafted message toward Messier 13, a globular star cluster 25,000 light-years away. The message, designed by Frank Drake and Carl Sagan, was encoded in 1,679 binary digits that, when arranged into a 73-by-23 grid, formed a pictogram showing the numbers 1 through 10, the atomic numbers of key elements, the structure of DNA, a stick figure of a human, the solar system, and a diagram of the Arecibo telescope itself.

The transmission lasted three minutes and used the full power of the Arecibo transmitter, briefly making it the strongest radio signal ever broadcast from Earth. The message was largely symbolic. Messier 13 is so far away that even traveling at the speed of light, the signal will take 25,000 years to arrive. A reply, traveling at the same speed, would take another 25,000 years. The earliest possible response would arrive around the year 51974.

## The Telescope

The Arecibo Observatory was, for over fifty years, one of the most important scientific instruments on Earth. Its 1,000-foot-diameter dish, built into a natural sinkhole in the limestone hills of northwestern Puerto Rico, was the largest single-aperture telescope in the world from its construction in 1963 until 2016. It was used for radio astronomy, atmospheric science, radar mapping of asteroids, and the search for extraterrestrial intelligence (SETI).

It discovered the first binary pulsar (earning Russell Hulse and Joseph Taylor the 1993 Nobel Prize in Physics). It produced the first radar maps of Venus. It was central to SETI observations for decades. It was the instrument that sent the Arecibo message and the instrument that would have been best positioned to detect a response.

## The Collapse

In August 2020, an auxiliary cable supporting the 900-ton instrument platform above the dish snapped. In November, a main cable failed. The National Science Foundation, which operated the facility, announced that the structure was too unstable to repair. On December 1, 2020, before the planned controlled demolition could begin, the remaining cables gave way. The instrument platform crashed into the dish below.

The collapse was captured on video. It took about thirty seconds. Fifty-seven years of scientific infrastructure, including the transmitter that had sent the Arecibo message, fell into its own reflector dish in a cloud of dust and twisted metal.

## The Broken Megaphone

The Arecibo message was always a gesture, not a practical communication attempt. But gestures have meaning, and the meaning of this one has changed. In 1974, it said: "We are here. We are listening." In 2020, it says something different: "We shouted into the void, and then we broke the megaphone."

No equivalent facility has been built to replace Arecibo's transmitting capability. Even if Messier 13 harbored a civilization that received and understood the message, even if they replied immediately, the response would arrive at a planet that no longer has the instrument that sent the original signal. We started a conversation and then, through a combination of underfunding and structural neglect, ensured we could not hear the reply.`,
  quickFacts: {
    'Message Sent': 'November 16, 1974',
    'Target': 'Messier 13 star cluster, 25,000 light-years away',
    'Message Length': '1,679 bits, transmitted in 3 minutes',
    'Designed By': 'Frank Drake and Carl Sagan',
    'Telescope Collapsed': 'December 1, 2020',
    'Earliest Possible Reply': '~Year 51974',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'Both represent humanity\'s ambition to understand the cosmos, one through mechanical computation, the other through radio transmission' },
    { slug: 'library-of-alexandria', relationship: 'Both are losses of irreplaceable scientific infrastructure caused by neglect' },
  ],
  sources: [
    { title: 'The Arecibo Message of November 1974', author: 'Frank Drake et al.', year: 1975 },
    { title: 'Collapse of the Arecibo Observatory', author: 'National Science Foundation', year: 2020 },
    { title: 'The Arecibo Observatory: Fifty Years of Discovery', author: 'Cornell University', year: 2013 },
  ],
  relatedMedia: [
    { type: 'video', title: 'Arecibo Telescope Collapse', url: 'https://www.youtube.com/watch?v=ssHkMWcGat4', description: 'The dramatic collapse of the 305m dish on December 1, 2020' },
  ],
};
