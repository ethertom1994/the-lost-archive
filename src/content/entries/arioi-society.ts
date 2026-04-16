import type { Entry } from '../../types';

export const arioiSociety: Entry = {
  slug: 'arioi-society',
  name: 'The Arioi of Tahiti',
  tagline: 'A traveling society of actors, dancers, and chroniclers devoted to the war god Oro, ranked in seven orders and marked by elaborate tattoos. Cook, Banks, and Forster all described them in awe in the 1770s. Within fifty years of first contact, Protestant missionaries had driven them underground; the order never recovered.',
  category: 'culture',
  subcategory: 'Polynesian Religion',
  lastKnownYear: 1797,
  lastKnownLocation: 'Tahiti and the Society Islands',
  coordinates: [-17.65, -149.43],
  region: 'Pacific',
  status: 'extinct',
  cause: 'Introduced epidemics from European contact after 1767 caused catastrophic population decline in the Society Islands; the arrival of the London Missionary Society in 1797 began a sustained campaign against Arioi ceremonies, sexuality, and theology that by the 1820s had suppressed the order',
  body: `## A Religious Society That Traveled

The Arioi were a confederated religious and performing society that existed across the Society Islands — Tahiti, Raiatea, Moorea, Huahine, and their neighbours — when the first European ships arrived in 1767. They were devoted to Oro, the Polynesian war god whose principal shrine was at Taputapuatea on Raiatea, and they were organised into a strict hierarchy of seven grades, each marked by specific tattoo patterns on the legs and torso.

During the season of Matari'i i ni'a, when the Pleiades were visible in the evening sky, the Arioi toured the islands by ocean-going double canoe, arriving in villages to perform. Their performances combined chant, drumming, oratory, masked dance, athletic displays, and improvised satirical drama — a tradition of public theatre with no close parallel elsewhere in Polynesia. In return, host villages feasted them at communal expense. The highest grades of the order enjoyed privileges no ordinary person could claim: freedom of movement between islands in wartime, sexual licence, and direct participation in the priestly service of Oro.

## What the Early Observers Saw

James Cook, Joseph Banks, George Forster, and William Bligh all left accounts of the Arioi from first-hand observation in the 1770s and 1780s. Banks in particular, on Cook's first voyage in 1769, spent time with named members of the society and described the seven orders, the tattoos that distinguished each, the oratorical duels between companies, and the practice by which Arioi members were required to remain childless — a rule enforced by infanticide that horrified Cook's company and every European observer after them.

The missionary William Ellis, writing in 1829 from longer residence, added a far more detailed account of the society's cosmology. According to Ellis, the Arioi traced their founding to a myth of Oro descending from the heavens to the mountain Tamaiti on Raiatea, where he took the beautiful mortal Vairaumati as his bride; the first Arioi, Urutaetae, was commissioned to celebrate this union forever through song and dance. The names of the seven grades, their insignia, and the ceremonies of admission were all preserved in Ellis's reconstruction, together with an acknowledgment that by the time he wrote, the society had been largely suppressed.

## Disease and Mission

The Society Islands lost an enormous proportion of their population in the three decades after first contact. Introduced diseases — influenza, dysentery, tuberculosis, and later smallpox and measles — killed an estimated three quarters of the pre-contact population by about 1800. The social conditions that had sustained the Arioi — large host villages, steady tribute, a working priesthood of Oro — collapsed with the population.

The London Missionary Society arrived in Tahiti in 1797. For their first decade their mission made little headway. But after the conversion of King Pomare II in 1812, the Protestant mission gained the royal authority it needed to prohibit Arioi ceremonies outright. The missionaries saw the Arioi as the embodiment of what they had come to destroy: public dance, tattoo, sexual freedom, and a theology of a god who took mortal wives. Tattooing was outlawed. Sunday observance replaced the Matari'i season. The costumes and drums were burned.

## The Remnant

A splinter movement called the Mamaia, blending old Arioi themes with Christian imagery, emerged in the mid-1820s and was largely suppressed by the early 1840s. After that, the Arioi as a living society is gone. Tahitian performance arts survived and were revived in the twentieth century, and names and pieces of the old liturgy are preserved in missionary ethnographies, but no-one has been initiated into the seven grades in two hundred years, and the specific cosmology that connected dance, tattoo, infanticide, Oro, and the Pleiades no longer organises anybody's life.`,
  quickFacts: {
    'Name': 'Arioi (Areoi)',
    'Principal Deity': 'Oro',
    'Grades': 'Seven orders, each with distinct tattoos',
    'First European Accounts': 'Cook\'s first voyage (1769)',
    'Main Ethnographic Source': 'William Ellis, Polynesian Researches (1829)',
    'Formal Suppression': '1810s–1830s, under Pomare II and the London Missionary Society',
  },
  connections: [
    { slug: 'aboriginal-songlines', relationship: 'Both are Pacific/Oceanic oral-performance traditions whose living transmission was broken within a century of sustained colonial pressure' },
    { slug: 'polynesian-wayfinding', relationship: 'Both were Polynesian institutional knowledge systems that depended on inter-island travel and did not survive the demographic collapse after European contact' },
    { slug: 'marshallese-navigation', relationship: 'Both were specialised Pacific Islander traditions transmitted through initiated orders whose institutions have been lost even where the people remain' },
    { slug: 'moa-cuisine', relationship: 'Both are cases of Pacific cultural forms — one Society Islands performance, one Maori foodways — shattered by the introduction of European disease and missionary authority' },
  ],
  sources: [
    { title: 'Polynesian Researches (2nd ed.)', author: 'William Ellis', year: 1832 },
    { title: 'Ancient Tahitian Society', author: 'Douglas L. Oliver', year: 1974 },
    { title: 'Arioi (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Arioi' },
    { title: 'Aphrodite\'s Island: The European Discovery of Tahiti', author: 'Anne Salmond', year: 2009 },
  ],
};
