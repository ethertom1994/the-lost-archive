import type { Entry } from '../../types';

export const maldivesSinking: Entry = {
  slug: 'maldives-sinking',
  name: 'The Maldives (As We Know Them)',
  tagline: 'The lowest country on Earth. Average elevation: 1.5 meters. At current rates, largely uninhabitable by 2100. A nation is making plans for its own funeral.',
  category: 'place',
  subcategory: 'Threatened Nations',
  lastKnownYear: 2100,
  lastKnownLocation: 'Indian Ocean, south of India',
  coordinates: [3.2, 73.22],
  region: 'South Asia',
  status: 'functionally_extinct',
  cause: 'Sea level rise driven by global climate change. Even moderate projections suggest 0.5-1 meter of rise by 2100, which would inundate most of the country\'s 1,192 coral islands.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Country at Sea Level

The Republic of Maldives is the flattest country on Earth. Its highest natural point is approximately 2.4 meters above sea level. Its average elevation is 1.5 meters. It consists of 1,192 coral islands arranged in 26 atolls, stretching across 90,000 square kilometers of the Indian Ocean south of India. About 200 of these islands are inhabited, home to roughly 520,000 people. None of the islands rises more than a few meters above the waves.

This has always been the Maldives' geography. What has changed is the water level around it. Sea levels have risen approximately 20 centimeters since 1900 and are projected to rise another 30-100 centimeters by 2100, depending on the trajectory of global greenhouse gas emissions. For a country whose entire land area sits within a meter or two of high tide, even the moderate projections are existential.

## The Underwater Cabinet

In 2009, Maldivian President Mohamed Nasheed held a cabinet meeting on the ocean floor, with ministers in scuba gear signing documents at an underwater desk. It was theater, deliberately staged for international media. The message was not subtle: this is what governance looks like when your country is drowning. Nasheed called it "a message to the world that we are going to die."

The Maldives has been at the forefront of international climate negotiations, consistently advocating for the most aggressive emissions reduction targets. But the country's own emissions are negligible — it contributes essentially nothing to the problem that threatens to erase it. The Maldives is not sinking because of anything Maldivians did. It is sinking because of what the rest of the world's industrial economies have emitted for 150 years.

## Planning for Absence

The Maldivian government has explored purchasing land in India, Sri Lanka, and Australia as contingency territory for future climate refugees. It has invested heavily in coastal protection — sea walls, elevated reclaimed islands, and coral restoration — but these are stopgap measures against a rising ocean. The new artificial island of Hulhumalé, built on reclaimed land raised to 2 meters above sea level, is designed as a climate-resilient refuge. But even 2 meters may not be enough.

The Maldives is not yet gone. Its islands are still above water, its reefs still alive (though bleaching events are increasing), and its people still live and work and fish and welcome tourists. But the country exists now under a kind of anticipatory grief. Every long-term infrastructure project, every school built, every road paved is undertaken with the knowledge that the sea is coming. The Maldives as we know them — a living nation of coral islands and turquoise lagoons — is a place that may not exist for the children being born there today.`,
  quickFacts: {
    'Average Elevation': '1.5 meters above sea level',
    'Highest Point': '~2.4 meters (natural)',
    'Number of Islands': '1,192 (200 inhabited)',
    'Population': '~520,000',
    'Projected Sea Level Rise': '0.3-1.0 m by 2100',
    'Carbon Emissions': '<0.01% of global total',
    'Underwater Cabinet': 'October 17, 2009',
    'Contingency': 'Land purchases in other nations under discussion',
  },
  connections: [
    { slug: 'doggerland', relationship: 'Both lands lost to rising seas — Doggerland 8,000 years ago, the Maldives potentially within this century' },
    { slug: 'sundarbans-shrinking', relationship: 'Both coastal regions being consumed by rising water levels driven by climate change' },
    { slug: 'aral-sea', relationship: 'Both bodies of water whose radical transformation threatens or destroyed entire communities and ecosystems' },
  ],
  sources: [
    { title: 'The Maldives: A Nation Under Threat', author: 'UNDP Climate Change Adaptation', year: 2010 },
    { title: 'IPCC Sixth Assessment Report: Sea Level Rise', author: 'Intergovernmental Panel on Climate Change', year: 2021 },
    { title: 'The Island President (documentary)', year: 2011 },
    { title: 'Climate Change and Small Island Developing States', author: 'UNEP', year: 2014 },
  ],
};
