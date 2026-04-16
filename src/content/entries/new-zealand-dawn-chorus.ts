import type { Entry } from '../../types';

export const newZealandDawnChorus: Entry = {
  slug: 'new-zealand-dawn-chorus',
  name: 'Pre-Human New Zealand Dawn Chorus',
  tagline: 'A country with no native land mammals. The birds owned the soundscape. Then the mammals arrived.',
  category: 'sound',
  subcategory: 'Lost Soundscapes',
  lastKnownYear: '~1280',
  lastKnownLocation: 'New Zealand (Aotearoa)',
  coordinates: [-41.28, 174.78],
  region: 'Pacific Islands',
  status: 'extinct',
  cause: 'Extinction of 51+ bird species following Polynesian and European settlement, introduction of mammalian predators',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Loudest Silence

Before humans arrived, New Zealand was an ecological experiment found nowhere else on Earth. Separated from other landmasses for over 80 million years, the islands had no native land mammals except two species of bat. Every ecological niche that mammals occupy elsewhere, from ground-foraging rodents to apex predators, was filled by birds. Flightless moa browsed like deer. The massive Haast's eagle hunted like a wolf. Kiwi rooted through leaf litter like hedgehogs. Wrens hopped across the forest floor like mice.

The acoustic consequence was extraordinary. With hundreds of bird species and no mammalian competitors for airspace, the New Zealand dawn chorus was among the loudest and most complex natural soundscapes on the planet. Early European observers described a wall of birdsong so dense it was physically disorienting. Ornithologist Walter Buller, writing in the 1870s, described forests where the sound was continuous from pre-dawn through mid-morning, a layered composition of calls, songs, and territorial displays from dozens of species simultaneously.

## The Mammals Arrived

Polynesian settlers reached New Zealand around 1280 CE, bringing the Pacific rat (kiore) and dogs. Within two centuries, all nine species of moa were extinct, along with Haast's eagle and at least 25 other bird species. European colonization from the 1700s onward introduced cats, rats, stoats, possums, and dozens of other mammalian predators. New Zealand's birds, having evolved for tens of millions of years without mammalian threats, had no effective defenses. Many were flightless. Many nested on the ground. They were catastrophically vulnerable.

At least 51 bird species have gone extinct since human arrival. Many more are critically endangered. Each extinction subtracted a voice from the chorus. The huia, with its haunting duet between differently billed male and female, fell silent in 1907. The laughing owl, whose call reportedly sounded like deranged human laughter, was last heard in 1914. The bush wren, the South Island snipe, the Chatham Island bellbird: each took a frequency, a rhythm, a melodic line out of the soundscape permanently.

## A Diminished Dawn

The New Zealand dawn chorus still exists. In protected sanctuaries like Zealandia in Wellington, where mammalian predators have been eradicated behind predator-proof fences, you can hear a rich and beautiful birdsong at dawn. But it is a fraction of what once was. Acoustic ecologists estimate that the pre-human chorus was several orders of magnitude louder and more complex. The specific frequencies and rhythmic patterns contributed by 51 extinct species are simply gone. The dawn still comes to New Zealand. It just comes quieter now.`,
  quickFacts: {
    'Location': 'New Zealand (Aotearoa)',
    'Isolation': '80+ million years with no land mammals',
    'Native Land Mammals': '2 bat species only',
    'Human Arrival': '~1280 CE (Polynesian)',
    'Bird Species Extinct Since': '51+',
    'Key Introduced Predators': 'Rats, cats, stoats, possums',
    'Notable Extinct Voices': 'Moa, huia, laughing owl, bush wren',
  },
  connections: [
    { slug: 'huia-call', relationship: 'The huia was one of the most distinctive voices lost from the New Zealand dawn chorus, its duet song now silent' },
    { slug: 'kauai-oo', relationship: 'Both represent island soundscapes devastated by introduced predators, where unique bird calls were silenced by mammals that never should have been there' },
  ],
  sources: [
    { title: 'Ghosts of Gondwana: The History of Life in New Zealand', author: 'George Gibbs', year: 2006 },
    { title: 'A History of the Birds of New Zealand', author: 'Walter Buller', year: 1888 },
    { title: 'Extinct Birds of New Zealand', author: 'Alan Tennyson and Paul Martinson', year: 2006 },
  ],
};
