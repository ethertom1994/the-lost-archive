import type { Entry } from '../../types';

export const marshalleseNavigation: Entry = {
  slug: 'marshallese-navigation',
  name: 'Marshallese Wave Piloting',
  tagline: 'The only navigation system in history based on feeling ocean waves with the body — its stick charts were study aids never taken to sea.',
  category: 'technology',
  subcategory: 'Navigation',
  lastKnownYear: '~1960',
  lastKnownLocation: 'Marshall Islands, Pacific Ocean',
  coordinates: [7.09, 171.38],
  region: 'Oceania',
  status: 'functionally_extinct',
  cause: 'Motorized boats, GPS, and Western education displaced traditional navigation training; last fully trained wave pilots died without passing on complete knowledge',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Navigation by Feel

Every navigation system in human history has relied on the same fundamental principle: look at something and determine your position from what you see. Stars, landmarks, compass needles, satellite signals — all are visual inputs processed by the eyes and brain. Every system except one.

Marshallese wave piloting, practiced for centuries across the scattered atolls of the Marshall Islands, was built on a radically different foundation. Navigators did not primarily watch the ocean. They felt it. Lying prone in the hull of an outrigger canoe, a trained wave pilot could read the interference patterns of ocean swells as they refracted, reflected, and diffracted around islands far beyond the visible horizon. The navigator's body was the instrument.

## Reading the Invisible

The open Pacific produces long-period swells that travel thousands of miles with remarkable consistency. When these swells encounter an island or atoll, they bend around it, creating characteristic patterns of wave interaction. Two swells meeting from different directions produce a distinctive chop. A swell reflecting off a distant landmass creates a subtle cross-pattern. The shadow of an island, where it blocks the swell, leaves a zone of relative calm.

A trained navigator could distinguish these patterns, identify which island was causing them, and determine direction and distance — all without seeing anything but open water. The sensitivity required was extraordinary. Navigators trained for years, beginning in childhood, learning to isolate individual swell patterns from the complex superposition of waves, wind chop, and current.

## The Stick Charts

The most visible artifacts of Marshallese navigation are the stick charts — lattices of palm ribs and cowrie shells that Western observers often mistook for sea maps carried aboard canoes. They were not. Stick charts were teaching devices, used on land to illustrate the principles of swell refraction and island interaction. A student would study a chart, internalize the patterns, and then navigate entirely from bodily sensation. Taking a chart to sea would have been pointless — the information it encoded was not positional but conceptual.

Three types existed: the mattang, a small instructional model showing wave patterns around a single island; the meddo, covering a section of the island chain; and the rebbelib, showing the entire Marshall Islands archipelago. Each was unique to its maker, encoding personal understanding rather than standardized cartography.

## Confirmation and Loss

In 2005, oceanographer Joseph Genz worked with one of the last practicing wave pilots, Captain Korent Joel, to scientifically document the technique. Using wave sensors and satellite imagery, Genz confirmed that the swell interaction patterns described by traditional navigators were physically real and measurable. The indigenous knowledge was not mysticism — it was fluid dynamics, learned through the body rather than through equations.

But Captain Korent was among the last. Motorized boats eliminated the need for long canoe voyages. GPS made traditional navigation seem obsolete. Western schooling replaced the years of apprenticeship required to train a navigator's body to read the sea. By the early twenty-first century, the number of Marshallese who could navigate by wave-feel alone had dwindled to a handful of elderly men, most of whom had no students.`,
  quickFacts: {
    'Unique Feature': 'Only known navigation by bodily sensation of wave patterns',
    'Training': 'Years of apprenticeship beginning in childhood',
    'Stick Chart Types': 'Mattang (single island), meddo (section), rebbelib (full chain)',
    'Charts at Sea': 'Never taken aboard — used only for land-based study',
    'Scientific Confirmation': 'Joseph Genz, 2005, using wave sensors and satellite data',
    'Key Navigator': 'Captain Korent Joel, one of last practitioners',
    'Cause of Decline': 'Motorized boats and GPS replaced traditional voyaging',
  },
  connections: [
    { slug: 'polynesian-wayfinding', relationship: 'Both are Pacific Island navigation traditions using natural phenomena, though Marshallese wave piloting is uniquely tactile rather than visual' },
    { slug: 'balinese-subak', relationship: 'Both are indigenous knowledge systems encoding sophisticated science in traditional practice, validated by modern research' },
    { slug: 'quipu', relationship: 'Both used physical objects as mnemonic devices encoding complex information in non-written form' },
  ],
  sources: [
    { title: 'Waves, Winds, and Currents: Wave Navigation in the Marshall Islands', author: 'Joseph Genz', year: 2018 },
    { title: 'We Are the Land, the Sea, and the Sky: The Science of Marshallese Navigation', author: 'Joseph Genz et al.', year: 2009 },
    { title: 'The Last Navigator: A Young Man, An Ancient Mariner, the Secrets of the Sea', author: 'Steve Thomas', year: 1987 },
  ],
  relatedMedia: [
    { type: 'documentary', title: 'Waves and Navigators of the Marshall Islands', url: 'https://vimeo.com/channels/marshallnavigation', description: 'Documentary footage of traditional Marshallese wave piloting' },
  ],
};
