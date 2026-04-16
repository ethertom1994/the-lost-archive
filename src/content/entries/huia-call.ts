import type { Entry } from '../../types';

export const huiaCall: Entry = {
  slug: 'huia-call',
  name: "The Huia's Call",
  tagline: 'No recording exists of this sacred bird. The closest we have is a 1949 recording of an old man whistling his memory of its song.',
  category: 'sound',
  subcategory: 'Bird Vocalizations',
  lastKnownYear: 1907,
  lastKnownLocation: 'Tararua Range, North Island, New Zealand',
  coordinates: [-40.93, 175.45],
  region: 'Oceania',
  status: 'extinct',
  cause: 'Overhunting for tail feathers prized in Maori culture and European fashion, combined with habitat destruction and introduced predators',
  imageUrl: '/images/entries/huia-call.jpg',
  imageCaption: 'Illustration of a pair of huia from Walter Buller\'s A History of the Birds of New Zealand (1888), showing the dramatic sexual dimorphism in bill shape',
  imageCredit: 'J. G. Keulemans, public domain, via Wikimedia Commons',
  body: `## A Sound Remembered, Not Recorded

The huia (*Heteralocha acutirostris*) was a large wattlebird endemic to the North Island of New Zealand, sacred to Maori as a chiefly symbol. Its tail feathers, black with a white band at the tip, were worn by rangatira as marks of rank. The bird's call was described by early European ornithologists as a smooth, haunting whistle, likened to the sound of the word "huia" itself, the Maori onomatopoeia from which the bird took its name.

The last confirmed sighting was on December 28, 1907, in the Tararua Range. No audio recording was ever made. Sound recording technology existed by then, Edison had demonstrated the phonograph thirty years earlier, but no one brought a recording device into the New Zealand bush in time.

## The Whistled Memory

In 1949, a man named Henare Hamana, a Maori elder and former bird tracker, was recorded whistling the huia's call as he remembered it from his youth. He had last heard the living bird decades earlier. The recording, made by ornithologist Robert Falla, captures Hamana producing a clear, descending whistle: two notes, the second lower, with a distinctive liquid quality. It is a recording of a memory of a sound, filtered through human vocal cords and decades of elapsed time. It is the closest anyone alive today can come to hearing the huia.

Whether Hamana's whistled imitation was accurate is unknowable. Human memory reshapes sounds over time, and a whistle is not a bird. But his recording remains the only auditory link to a species whose voice is otherwise completely lost.

## Extinction Within Extinction

The huia carried a parasitic louse, *Rallicola extinctus*, that lived exclusively on huia feathers. When the last huia died, this louse became extinct as well, a species lost within a species lost. The parasite had co-evolved with the huia over millennia, its entire existence dependent on the continued survival of a single host. Its disappearance was noted only after the fact, identified from specimens preserved on museum skins.

This nested extinction illustrates a principle ecologists call co-extinction: when a host species vanishes, its obligate parasites, symbionts, and commensals follow silently. The huia's death was at least mourned. Its louse vanished without anyone noticing.

## The Most Expensive Feather

The huia was remarkable for another reason: extreme sexual dimorphism of the bill. Males had short, stout bills for chiseling into wood. Females had long, curved bills for probing into crevices. The pair worked cooperatively, the male opening the wood and the female extracting insects from deep within. No other bird species exhibits this degree of bill dimorphism.

After the bird's extinction, its tail feathers became extraordinarily valuable. In 2010, a single huia tail feather sold at auction in New Zealand for NZ$8,000, at the time a world record for any feather. The feather that once adorned a living bird in a montane forest now sits behind glass, worth more dead than alive.`,
  quickFacts: {
    'Scientific Name': 'Heteralocha acutirostris',
    'Last Confirmed Sighting': 'December 28, 1907',
    'Location': 'Tararua Range, North Island, New Zealand',
    'Closest Audio': '1949 whistled imitation by Henare Hamana',
    'Unique Feature': 'Extreme sexual dimorphism in bill shape',
    'Co-Extinct Parasite': 'Rallicola extinctus (feather louse)',
    'Cultural Significance': 'Tail feathers worn as chiefly insignia (taonga)',
    'Record Feather Price': 'NZ$8,000 (2010 auction)',
  },
  connections: [
    { slug: 'kauai-oo', relationship: 'Both are island birds whose calls were lost to extinction, the kauai oo with a haunting final recording, the huia with only a human imitation' },
    { slug: 'alala-song', relationship: 'Both illustrate how a species can lose its voice even before or after losing its body, one through captivity, the other through total extinction' },
    { slug: 'thylacine', relationship: 'Both were iconic species driven extinct by colonial-era hunting and habitat loss in the Southern Hemisphere' },
  ],
  sources: [
    { title: 'A History of the Birds of New Zealand', author: 'Walter Buller', year: 1888 },
    { title: 'Extinct Birds', author: 'Julian Hume & Michael Walters', year: 2012 },
    { title: 'Ghosts of Gondwana: The History of Life in New Zealand', author: 'George Gibbs', year: 2006 },
    { title: 'Huia: The Bird That Became a Feather', author: 'Te Papa Tongarewa Museum of New Zealand', year: 2003 },
  ],
};
