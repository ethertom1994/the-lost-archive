import type { Entry } from '../../types';

export const balineseSubak: Entry = {
  slug: 'balinese-subak',
  name: 'Balinese Subak',
  tagline: 'When scientists overrode a 1,000-year-old temple irrigation system, crops failed — then a computer proved the priests had been right all along.',
  category: 'technology',
  subcategory: 'Agriculture',
  lastKnownYear: 2012,
  lastKnownLocation: 'Bali, Indonesia',
  coordinates: [-8.35, 115.51],
  region: 'Southeast Asia',
  status: 'functionally_extinct',
  cause: 'Green Revolution policies disrupted traditional scheduling; UNESCO recognition came after irreversible damage to many local subak networks',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Water Temples

For over a thousand years, Balinese rice farmers managed one of the most productive agricultural systems on Earth through an institution that baffled outside observers: the subak. Each subak was a cooperative of farmers who shared water from a single irrigation source, and each was governed not by any secular authority but by a Hindu water temple. Priests set the planting and fallow schedules. Rituals determined when water flowed and when fields were drained. Offerings to the goddess Dewi Danu, deity of the crater lake atop Mount Batur, were as integral to the system as the canals themselves.

To Western development experts who arrived in Indonesia in the 1960s and 1970s, this looked like textbook superstition holding back agricultural progress.

## The Green Revolution Intervenes

The Green Revolution brought high-yield rice varieties, synthetic fertilizers, and a new planting philosophy: continuous cropping. International agricultural advisors, backed by the Asian Development Bank, urged Balinese farmers to abandon the temple-coordinated fallow schedules and plant as often as possible. The new rice varieties could produce two or three harvests per year instead of one. The math seemed obvious.

But the math was wrong. Within a few seasons, pest populations exploded. Rice paddies that had been fallow in synchronized patterns — creating landscape-scale pest breaks — were now planted continuously, giving insects an uninterrupted food supply. Brown planthopper and rice tungro virus swept across the island. Water shortages multiplied as farmers competed for irrigation without coordinated scheduling. Crop losses reached 50% in affected areas.

## The Computer Agrees with the Priests

Anthropologist J. Stephen Lansing spent years studying the subak system, eventually building computer models of the entire Balinese irrigation network. His simulations tested thousands of possible planting schedules, optimizing for both water distribution and pest control. The result was striking: the schedules that the water temple priests had been using for centuries were mathematically near-optimal. The priests' calendars, refined through generations of observation and encoded in ritual, achieved pest suppression and water efficiency that no outside planner could improve upon.

Lansing's work, published in his landmark book "Priests and Programmers," demonstrated that the temple rituals were not irrational cultural artifacts but a sophisticated information-processing system. The rituals encoded ecological knowledge accumulated over a millennium. The gods and offerings were the interface; the underlying logic was ecological optimization.

## What Survived and What Did Not

UNESCO inscribed the subak landscape as a World Heritage Site in 2012, recognizing its cultural and agricultural significance. But the recognition came after decades of disruption. Many local subak networks had already fragmented. Younger farmers, educated in modern agricultural science, viewed the temple schedules with skepticism. Tourism development consumed rice paddies across southern Bali. The living tradition — in which ecological knowledge flowed through religious practice — was broken in ways that heritage status alone cannot repair.

The subak stands as a cautionary tale about the cost of dismissing indigenous knowledge systems. What looked like superstition was science. What looked like inefficiency was optimization. And the experts who knew better left a trail of failed harvests behind them.`,
  quickFacts: {
    'Age': 'Over 1,000 years',
    'Key Researcher': 'J. Stephen Lansing, anthropologist',
    'Disrupted By': 'Green Revolution continuous cropping, 1960s-1970s',
    'Crop Losses': 'Up to 50% in affected areas',
    'Computer Finding': "Temple schedules were mathematically near-optimal",
    'UNESCO Inscription': '2012, World Heritage Site',
    'Governing Deity': 'Dewi Danu, goddess of the crater lake',
  },
  connections: [
    { slug: 'terra-preta', relationship: 'Both are indigenous agricultural systems encoding centuries of ecological wisdom that Western science initially dismissed' },
    { slug: 'polynesian-wayfinding', relationship: 'Both are traditional knowledge systems that proved scientifically sophisticated when finally analyzed with modern tools' },
    { slug: 'inca-roads', relationship: 'Both are large-scale infrastructure systems managed by pre-industrial societies with remarkable engineering precision' },
  ],
  sources: [
    { title: 'Priests and Programmers: Technologies of Power in the Engineered Landscape of Bali', author: 'J. Stephen Lansing', year: 1991 },
    { title: 'Perfect Order: Recognizing Complexity in Bali', author: 'J. Stephen Lansing', year: 2006 },
    { title: 'Cultural Landscape of Bali Province: the Subak System as a Manifestation of the Tri Hita Karana Philosophy', url: 'https://whc.unesco.org/en/list/1194', year: 2012 },
  ],
  relatedMedia: [
    { type: 'book', title: 'Priests and Programmers', url: 'https://press.princeton.edu/books/paperback/9780691130668/priests-and-programmers', description: "Lansing's landmark study of the subak irrigation system and emergent complexity" },
  ],
};
