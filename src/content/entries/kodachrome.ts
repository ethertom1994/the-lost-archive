import type { Entry } from '../../types';

export const kodachrome: Entry = {
  slug: 'kodachrome',
  name: 'Kodachrome',
  tagline: 'Kodak\'s legendary color film, produced 1935-2009. The last roll was processed on December 30, 2010. The chemistry to develop it no longer exists anywhere on Earth.',
  category: 'technology',
  subcategory: 'Discontinued Processes',
  lastKnownYear: 2010,
  lastKnownLocation: 'Dwayne\'s Photo, Parsons, Kansas (last processing lab)',
  coordinates: [37.34, -95.26],
  region: 'North America',
  status: 'extinct',
  cause: 'Replaced by digital photography; K-14 chemical process too complex and expensive for declining demand',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Standard

For seventy-four years, Kodachrome was the gold standard of color photography. Introduced by Kodak in 1935, it was the first commercially successful color film and remained the preferred medium of serious photographers for decades. National Geographic shot almost exclusively on Kodachrome for much of its history. Steve McCurry's "Afghan Girl," arguably the most famous photograph of the twentieth century, was shot on Kodachrome 64 in 1984.

The film produced colors that were saturated but natural, warm but accurate. Photographers described Kodachrome's palette as having a quality that other films and digital processes could imitate but never quite match: rich reds, deep blues, and a particular warmth in skin tones that made it the preferred film for portraits and travel photography. The archival stability was extraordinary. Properly stored Kodachrome slides from the 1930s still look vivid today, while prints from other processes have faded.

## The Process

What made Kodachrome unique was also what killed it. Unlike other color films, Kodachrome had no color dyes in the film itself. The three color layers were added during a fiendishly complex development process called K-14. The process involved more than a dozen chemical steps, precise temperature control, and specialized machinery. It could not be done at home or in an ordinary darkroom. It required centralized processing at dedicated facilities.

At its peak, Kodak operated K-14 processing labs worldwide. But as digital photography rose in the 2000s, demand for film collapsed. Kodak discontinued Kodachrome production in June 2009. The remaining rolls could still be developed, but only at the few labs still equipped for K-14.

## The Last Lab

By 2010, only one lab on Earth still processed Kodachrome: Dwayne's Photo, a small family-run shop in Parsons, Kansas. Dwayne Steinle, the owner, had kept the K-14 line running as other labs shut down. Photographers from around the world mailed him their final rolls.

On December 30, 2010, Dwayne's Photo processed the last roll of Kodachrome. The final images were shot by Steve McCurry, the same photographer who had taken the "Afghan Girl" portrait twenty-six years earlier. After that day, the K-14 chemicals were disposed of. The processing machinery was shut down.

No facility on Earth can now develop Kodachrome film. Thousands of exposed but unprocessed rolls exist in freezers and drawers worldwide. The images are on the film, latent but locked. Without K-14 chemistry, they cannot be extracted. They are photographs that exist but cannot be seen.

## The Song

Paul Simon's 1973 song "Kodachrome" turned the film into a cultural artifact even before its discontinuation. "They give us those nice bright colors / They give us the greens of summers," Simon sang. The song is now a eulogy for a way of seeing that no longer exists: a specific relationship between light, chemistry, and color that produced something digital sensors process differently. Not better or worse, necessarily, but different in a way that everyone who shot Kodachrome recognizes and that nobody can precisely define.`,
  quickFacts: {
    'Produced': '1935-2009 (74 years)',
    'Process': 'K-14, 12+ chemical steps, centralized processing only',
    'Last Lab': 'Dwayne\'s Photo, Parsons, Kansas',
    'Last Roll Processed': 'December 30, 2010, shot by Steve McCurry',
    'Famous Work': 'McCurry\'s "Afghan Girl" (1984), majority of National Geographic covers',
    'Undeveloped Rolls': 'Thousands exist worldwide, images locked without K-14 chemistry',
  },
  connections: [
    { slug: 'concorde', relationship: 'Both represent technologies that worked, that people loved, and that were abandoned for economic rather than technical reasons' },
    { slug: 'fordite', relationship: 'Both are products of industrial processes that no longer exist, valued now as artifacts of a vanished method' },
    { slug: 'bakelite', relationship: 'Both were revolutionary technologies replaced by cheaper alternatives that couldn\'t match the original\'s specific qualities' },
  ],
  sources: [
    { title: 'Kodachrome: The American Invention of Our World, 1939-1959', author: 'Robert Maddox', year: 2016 },
    { title: 'The Last Roll of Kodachrome', author: 'Steve McCurry', year: 2012 },
    { title: 'A History of Kodachrome', author: 'Eastman Kodak Company', year: 2009 },
  ],
};
