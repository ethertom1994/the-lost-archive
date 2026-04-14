import type { Entry } from '../../types';

export const flamingoTongue: Entry = {
  slug: 'flamingo-tongue',
  name: "Apicius' Flamingo Tongue",
  tagline: 'A Roman delicacy: the actual tongues of flamingos, served at banquets. The specific subspecies that supplied them is now extinct.',
  category: 'food',
  subcategory: 'Ancient Delicacies',
  lastKnownYear: '~5th century CE',
  lastKnownLocation: 'Roman North Africa',
  coordinates: [36.8, 10.18],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'Overconsumption of the North African flamingo population that supplied Roman kitchens, combined with the collapse of the Roman trade networks that distributed the delicacy',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Emperor's Appetizer

The Roman cookbook attributed to Apicius — *De Re Coquinaria*, the most complete culinary text to survive from the ancient world — includes a recipe for flamingo tongue. Not metaphorically. The literal tongues of flamingos, prepared with spices, honey, and vinegar. Pliny the Elder confirms the dish, noting that the tongue had a particularly fine flavor. The emperor Elagabalus reportedly served plates of flamingo tongues at banquets, alongside the brains of parrots and the heads of peacocks.

This was conspicuous consumption in its most literal form. A flamingo tongue is tiny — perhaps two or three bites of meat. To serve a banquet dish required dozens of birds. The tongues were extracted and the rest of the bird was discarded or used for lesser purposes. It was food as performance, a demonstration that you could afford to waste an entire animal for a mouthful of its rarest part.

## The Birds

The flamingos that supplied Roman tables were greater flamingos (*Phoenicopterus roseus*) from the coastal lagoons and salt lakes of North Africa, particularly the wetlands of what is now Tunisia and Libya. These populations were vast — flamingos gather in colonies of thousands — but they were not infinite. Roman demand, sustained over centuries, likely suppressed local populations. When Rome's trade networks collapsed in the 5th century, the specific culinary tradition died with the empire.

Greater flamingos still exist, of course. They remain widespread across Africa, southern Europe, and South Asia. But the specific populations of North African marshland flamingos that Romans harvested are gone, replaced by modern populations that have never been subjected to systematic tongue harvesting. Even if one could legally obtain a flamingo tongue today, it would not be from the same birds, raised on the same marsh invertebrates, producing the same flavor that Apicius described.

## The Recipe Survives, the Ingredient Does Not

Apicius' recipe for flamingo tongue is precise: boil the tongue, add pepper, cumin, coriander, laser (silphium), mint, dates, honey, vinegar, oil, and reduced wine. The technique is reproducible. The key ingredient — the tongue of a flamingo from a population that no longer exists, seasoned with a spice plant (silphium) that no longer exists — is permanently unavailable. It is a recipe that requires two separate extinctions to be undone.`,
  quickFacts: {
    'Source': 'Apicius, De Re Coquinaria (c. 4th century CE)',
    'Primary Species': 'Phoenicopterus roseus (Greater Flamingo)',
    'Source Region': 'North African coastal wetlands',
    'Served By': 'Emperor Elagabalus, among others',
    'Preparation': 'Boiled with spices, honey, and vinegar',
    'Also Required': 'Silphium (laser) — itself extinct',
    'Status': 'Both ingredient populations extinct',
  },
  connections: [
    { slug: 'silphium-spice', relationship: 'Both appear in the same Apicius recipes — together they represent an entire lost Roman flavor palette' },
    { slug: 'garum', relationship: 'Both staples of Roman haute cuisine that required specific biological resources no longer available' },
    { slug: 'passenger-pigeon-pie', relationship: 'Both represent the consumption of a seemingly inexhaustible animal resource until it was exhausted' },
  ],
  sources: [
    { title: 'Apicius: A Critical Edition with an Introduction and English Translation', author: 'Christopher Grocock & Sally Grainger', year: 2006 },
    { title: 'Natural History, Book X', author: 'Pliny the Elder', year: 77 },
    { title: 'Food in the Ancient World from A to Z', author: 'Andrew Dalby', year: 2003 },
    { title: 'Roman Cookery: Ancient Recipes for Modern Kitchens', author: 'Mark Grant', year: 1999 },
  ],
};
