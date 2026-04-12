import type { Entry } from '../../types';

export const alalaSong: Entry = {
  slug: 'alala-song',
  name: "The Alal\u0101's Wild Song",
  tagline: 'The Hawaiian crow survives in captivity. Its traditional songs do not. Even when a species is saved, its culture can be extinct.',
  category: 'sound',
  subcategory: 'Bird Vocalizations',
  lastKnownYear: 2002,
  lastKnownLocation: "Hawai\u02BBi Island (Big Island), Hawai\u02BBi",
  coordinates: [19.50, -155.50],
  region: 'Pacific Islands',
  status: 'extinct_in_wild',
  cause: 'Habitat loss, introduced predators, and disease eliminated wild populations; captive birds lost their vocal traditions',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Crow That Forgot How to Speak

The Alal\u0101, or Hawaiian crow (*Corvus hawaiiensis*), is not extinct. Roughly 130 individuals survive in captive breeding programs, and since 2016 small groups have been released into protected habitat on Hawai\u02BBi Island. By the metrics that conservation biology typically uses, the Alal\u0101 is a qualified success story: a species pulled back from the edge.

But something is missing. The captive-bred Alal\u0101 do not sound like the wild birds that were recorded in the 1970s and 1980s. Their vocalizations are simpler, less varied, and lack the complex calls that characterized the wild population. The birds are alive. Their songs are not.

## Corvid Culture

Crows are among the most intelligent birds on Earth, and like many corvids, they learn their vocalizations socially. Young crows develop their full vocal repertoire by listening to adults in their family group and community. Different populations of the same species can have distinct "dialects," regional variations in calls that are transmitted culturally, from parent to offspring, generation after generation.

The wild Alal\u0101 had a rich vocal repertoire documented by researchers before the population collapsed. Recordings from the 1970s and 1980s capture complex calls, alarm signals, contact notes, and social vocalizations that varied between family groups. This vocal complexity was a product of the same social learning that makes all crow communication sophisticated.

## The Break in Transmission

The last wild Alal\u0101 disappeared from the forests of Hawai\u02BBi Island around 2002. The captive population had been established from birds removed from the wild starting in the 1990s, but the captive environment could not replicate the social conditions under which vocal traditions were transmitted. Captive birds were often hand-reared, separated from wild-caught adults, and housed in facilities that did not allow for the large social groups in which crows naturally learn.

The result is a population of Alal\u0101 that can vocalize but has lost the specific vocal culture of the wild birds. When released birds encounter the forest, they lack the call repertoire that wild crows would have used to communicate about predators, food sources, territory boundaries, and social relationships. Some researchers have experimented with playing recordings of wild Alal\u0101 calls to captive birds, hoping to "teach" them the old songs, with limited success.

## Beyond the Body

The Alal\u0101 forces a difficult question about what it means to save a species. If you preserve the genome but lose the behavior, is the species really intact? Corvid culture, like human culture, is information that exists outside of DNA. It is transmitted, modified, and accumulated across generations. When that chain of transmission breaks, the culture dies, even if the bodies that carried it survive. The Alal\u0101 is alive. The Alal\u0101 that knew how to be a wild Hawaiian crow may not be.`,
  quickFacts: {
    'Scientific Name': 'Corvus hawaiiensis',
    'Common Name': 'Alal\u0101 (Hawaiian crow)',
    'Captive Population': '~130 individuals',
    'Last Wild Birds': '~2002',
    'Reintroductions': 'Ongoing since 2016',
    'What Is Lost': 'Wild vocal traditions and cultural behaviors',
    'Intelligence': 'Comparable to other corvids; tool use documented',
    'Challenge': 'Captive-bred birds lack wild behavioral repertoire',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both are Hawaiian birds whose songs were silenced. The \u02BB\u014D\u02BB\u014D lost everything; the Alal\u0101 lost its voice' },
    { slug: 'castrato-voice', relationship: 'Both represent sounds that cannot be recreated even with modern technology, because the tradition of production is broken' },
    { slug: 'pyrenean-ibex', relationship: 'Both illustrate the paradox of species preservation: saving the body does not mean saving the life' },
  ],
  sources: [
    { title: 'The Alal\u0101 Project: Conservation of the Hawaiian Crow', author: 'San Diego Zoo Wildlife Alliance', year: 2023 },
    { title: 'Cultural transmission in the Hawaiian crow', author: 'Christian Rutz et al.', year: 2018 },
    { title: 'Tool use and manufacture in the Hawaiian crow', author: 'Rutz et al.', year: 2016, url: 'https://doi.org/10.1038/nature19103' },
    { title: 'Recovery Plan for the Alal\u0101', author: 'U.S. Fish and Wildlife Service', year: 2009 },
  ],
};
