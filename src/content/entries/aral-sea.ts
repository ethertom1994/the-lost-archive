import type { Entry } from '../../types';

export const aralSea: Entry = {
  slug: 'aral-sea',
  name: 'The Aral Sea',
  tagline: 'Once the world\'s fourth largest lake. Soviet irrigation projects drained it. Ships now rust in a desert that was underwater.',
  category: 'place',
  subcategory: 'Drained Water Bodies',
  lastKnownYear: 2014,
  lastKnownLocation: 'Kazakhstan / Uzbekistan',
  coordinates: [45.0, 58.5],
  region: 'Central Asia',
  status: 'functionally_extinct',
  cause: 'Soviet-era diversion of the Amu Darya and Syr Darya rivers for cotton irrigation',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/AralSea1989_2014.jpg/400px-AralSea1989_2014.jpg',
  imageCaption: 'The Aral Sea in 1989 (left) and 2014 (right)',
  imageCredit: 'NASA',
  body: `## The Fourth Largest Lake on Earth

In 1960, the Aral Sea was the fourth largest lake in the world, covering 68,000 square kilometers, an area roughly the size of Ireland. It supported a thriving fishing industry that employed tens of thousands of people in the ports of Moynaq and Aralsk. Twenty-four species of fish lived in its waters. The climate of the surrounding region was moderated by the lake's enormous mass of water, keeping summers cooler and winters milder.

By 2014, the eastern basin of the Aral Sea was completely dry. The lake had lost more than 90 percent of its volume. The fishing towns of Moynaq and Aralsk are now landlocked, surrounded by sand flats encrusted with salt and pesticide residue. Rusting hulks of fishing boats sit in the desert, photographed by tourists who come to see one of the most dramatic environmental disasters of the twentieth century.

## The Cotton Decision

In the 1950s, Soviet central planners decided to transform the arid steppes of Central Asia into cotton-producing farmland. To irrigate the cotton fields, they diverted the Amu Darya and Syr Darya rivers, the two major rivers that fed the Aral Sea. An extensive network of irrigation canals, many of them poorly lined and leaking, carried water away from the sea and into the fields.

Soviet hydrologists understood what would happen. Internal documents from the 1960s show that planners anticipated the Aral Sea would shrink significantly, and they accepted this outcome as a reasonable price for cotton production. The Aral Sea was, in the words of one Soviet water engineer, "a mistake of nature" that would be corrected by redirecting its water to more productive uses.

## The Consequences

The results exceeded even the most pessimistic projections. As the sea shrank, its salinity tripled, then quadrupled. Fish populations collapsed. The fishing industry died. The exposed lakebed, laden with salt, fertilizer runoff, and pesticide residues from decades of agricultural use, became a source of toxic dust storms that spread contamination across hundreds of miles. Respiratory illness, cancer rates, and infant mortality in the surrounding region rose sharply.

The local climate changed. Without the lake's moderating influence, summers became hotter, winters colder, and the growing season shorter, reducing agricultural productivity in the very region the irrigation was supposed to benefit. The area around the former sea became one of the most environmentally degraded landscapes on Earth.

## Partial Recovery, Permanent Loss

Kazakhstan, with World Bank funding, built the Kok-Aral Dam in 2005, separating the smaller northern Aral Sea from the southern basin. The northern sea has partially recovered: water levels have risen, salinity has dropped, and some fish species have returned. But the southern basin, by far the larger portion, remains dry. Uzbekistan's continued reliance on cotton irrigation makes restoration of the full Aral Sea effectively impossible.

NASA satellite imagery from 1973 to the present documents the transformation in a series of images that are among the most powerful visual records of environmental destruction ever assembled. The Aral Sea is still on maps. But the body of water those maps depict is a ghost.`,
  quickFacts: {
    'Peak Size': '~68,000 km\u00B2 (1960)',
    'Current Size': '~10% of original (southern basin mostly dry)',
    'Cause': 'Diversion of Amu Darya and Syr Darya rivers',
    'Purpose': 'Cotton irrigation in Soviet Central Asia',
    'Fishing Industry Peak': '40,000+ tons/year, 60,000 jobs',
    'Fish Species Lost': '20 of 24 native species',
    'Kok-Aral Dam': '2005 (partially restored northern Aral)',
    'Eastern Basin': 'Completely dry since 2014',
  },
  connections: [
    { slug: 'baiji', relationship: 'Both represent ecosystems destroyed by the same force: centrally planned industrial transformation of waterways' },
    { slug: 'lake-pedder', relationship: 'Both were bodies of water destroyed by deliberate human engineering decisions despite public opposition' },
    { slug: 'doggerland', relationship: 'Both are landscapes transformed beyond recognition by changes in water level' },
  ],
  sources: [
    { title: 'The Aral Sea Disaster', author: 'Philip Micklin', year: 2007, url: 'https://doi.org/10.1146/annurev.earth.35.031306.140120' },
    { title: 'The Aral Sea Encyclopedia', author: 'Igor S. Zonn et al.', year: 2009 },
    { title: 'NASA Earth Observatory: The Shrinking Aral Sea', year: 2023, url: 'https://earthobservatory.nasa.gov' },
    { title: 'Creeping Environmental Problems and Sustainable Development in the Aral Sea Basin', author: 'Michael H. Glantz', year: 1999 },
  ],
  relatedMedia: [
    { type: 'article', title: 'Shrinking Aral Sea - NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/world-of-change/AralSea', description: 'Satellite imagery showing the Aral Sea\'s dramatic shrinkage over decades' },
  ],
};
