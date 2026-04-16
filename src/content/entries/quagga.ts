import type { Entry } from '../../types';

export const quagga: Entry = {
  slug: 'quagga',
  name: 'Quagga',
  tagline: 'Half zebra, half horse, all gone. The only subspecies of zebra to be driven extinct. The last one died in an Amsterdam zoo and nobody noticed for years.',
  category: 'fauna',
  subcategory: 'Extinct Equids',
  lastKnownYear: 1883,
  lastKnownLocation: 'Artis Magistra Zoo, Amsterdam, Netherlands',
  coordinates: [52.37, 4.92],
  region: 'Africa / Europe (in captivity)',
  status: 'extinct',
  cause: 'Hunted for meat and hides by South African settlers, who also saw it as competition for livestock grazing',
  imageUrl: '/images/entries/quagga.jpg',
  imageCaption: 'The only known photograph of a living quagga, a mare at London Zoo, 1870',
  imageCredit: 'Frederick York, Public domain, via Wikimedia Commons',
  keyDate: '08-12',
  keyDateLabel: 'Last quagga died at Artis Magistra Zoo, Amsterdam, 1883',
  body: `## The Fading Stripes

The quagga was a subspecies of the plains zebra that looked like nature had run out of ink halfway through the job. Its head and neck bore the familiar black-and-white stripes of a zebra, but the stripes faded as they moved rearward, dissolving into a warm reddish-brown on the flanks and hindquarters. The legs were unstriped. The belly was white. The overall effect was striking and unmistakable: a zebra that was also, somehow, a horse.

Quaggas roamed the grasslands of the South African Karoo and Free State in herds that numbered in the thousands. They grazed alongside wildebeest, hartebeest, and springbok. Early Dutch settlers encountered them frequently and named them for the sound of their call: a barking "kwa-ha-ha" that echoed across the veld.

## The Hunt

Afrikaner settlers hunted the quagga for its hide, which was used for grain sacks, and for its meat, which fed their workers. More destructively, they killed quaggas to clear grazing land for cattle and sheep. The quagga competed for the same grass, and in the economics of colonial farming, it lost.

By the 1850s, the quagga was rare in the wild. The last wild quaggas were shot in the late 1870s. A few individuals survived in European zoos, but they were poorly documented and not recognized as the last of their kind. The last known quagga, a mare, died in the Artis Magistra Zoo in Amsterdam on August 12, 1883.

## The Photograph

The quagga is one of the few extinct animals to have been photographed alive. A single photograph survives, taken at the London Zoo in 1870: a solitary mare standing in a bare enclosure, her fading stripes clearly visible. It is one of the most haunting images in the history of extinction, an animal captured by a technology just new enough to record what was about to be lost.

Only 23 quagga specimens exist in museums worldwide. DNA analysis in the 1980s confirmed that the quagga was a subspecies of the plains zebra, not a separate species, which sparked the Quagga Project: an ongoing selective breeding effort in South Africa to recreate the quagga's appearance by breeding plains zebras with reduced striping. The project has produced animals that look remarkably similar. But genetics is not identity, and a selectively bred lookalike is not the animal that once barked across the Karoo.`,
  quickFacts: {
    'Subspecies Of': 'Plains zebra (Equus quagga quagga)',
    'Appearance': 'Stripes on head and neck, fading to brown on body',
    'Range': 'South African Karoo and Free State',
    'Last Wild Individual': 'Late 1870s',
    'Last Captive Individual': 'Died August 12, 1883, Amsterdam',
    'Photographic Record': '1 photograph, London Zoo, 1870',
  },
  connections: [
    { slug: 'thylacine', relationship: 'Both were photographed shortly before extinction, leaving haunting visual records of what was about to be lost' },
    { slug: 'stellers-sea-cow', relationship: 'Both were large animals killed primarily for practical use by settlers who didn\'t recognize the finality of what they were doing' },
  ],
  sources: [
    { title: 'The Quagga and Science', author: 'Reinhold Rau', year: 2005 },
    { title: 'Extinct: An Illustrated Exploration of Animals That Have Disappeared', author: 'Lucas Riera', year: 2019 },
    { title: 'The Quagga Project: Progress and Prospects', author: 'Eric Harley et al.', year: 2009 },
  ],
};
