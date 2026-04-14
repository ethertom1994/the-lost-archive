import type { Entry } from '../../types';

export const okinawanAwamori: Entry = {
  slug: 'okinawan-awamori',
  name: 'Pre-War Okinawan Awamori',
  tagline: 'Centuries-old mold cultures refined across generations. Incinerated in a single battle.',
  category: 'food',
  subcategory: 'Lost Spirits',
  lastKnownYear: 1945,
  lastKnownLocation: 'Okinawa, Japan',
  coordinates: [26.34, 127.77],
  region: 'East Asia',
  status: 'extinct',
  cause: 'The Battle of Okinawa (1945) destroyed 90% of buildings and the pre-war black koji mold culture lineages used in traditional distillation',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Living Ingredient

Awamori is Okinawa's indigenous spirit, distilled from long-grain indica rice using black koji mold (*Aspergillus luchuensis*). What made pre-war awamori irreplaceable was not the recipe itself but the mold cultures. Each distillery maintained its own *koji-kin* lineage, a living colony of mold that had been cultivated and refined across generations, sometimes for centuries. These cultures were not interchangeable. Each had evolved unique enzymatic properties that shaped the character of the finished spirit. The mold was the distillery's identity, passed from master to apprentice like a family heirloom that happened to be alive.

The oldest awamori, called *kusu*, was aged for decades or even centuries. Some Okinawan families possessed jars of kusu that predated the Meiji Restoration. The aging process itself depended on the specific microbial environment of the original fermentation. The mold, the spirit, and the time were inseparable.

## Eighty-Two Days

The Battle of Okinawa lasted from April 1 to June 22, 1945. It was the largest amphibious assault in the Pacific War. Approximately 150,000 Okinawan civilians died, a quarter to a third of the island's population. American naval bombardment and ground combat leveled an estimated ninety percent of the island's buildings. The distilleries, with their irreplaceable mold cultures and their aging stores of kusu, burned along with everything else. Jars of century-old spirit shattered under artillery fire. Living cultures that had been tended for generations were reduced to ash.

## The Reconstruction

After the war, under American occupation, awamori production slowly restarted. But the pre-war *koji-kin* lineages were gone. Distillers obtained new cultures from mainland Japan and began again from scratch. Modern awamori is a legitimate spirit with its own character, but it is not the same drink. The specific flavor profiles shaped by centuries of mold evolution, the aged kusu with its complex depth, the regional variations between family distilleries, all of that was destroyed in eighty-two days of combat.

Today, Okinawan distillers openly acknowledge the discontinuity. Some have begun aging new batches of kusu, hoping to rebuild what was lost over decades. But the pre-war cultures, the ones that carried centuries of microbial history in their DNA, are as gone as the buildings that housed them.`,
  quickFacts: {
    'Spirit Type': 'Distilled rice spirit (indica rice)',
    'Key Organism': 'Aspergillus luchuensis (black koji mold)',
    'Aged Variety': 'Kusu (aged 3+ years, historically decades or centuries)',
    'Destruction Date': 'April-June 1945',
    'Buildings Destroyed': '~90% of Okinawa\'s structures',
    'Civilian Deaths': '~150,000 Okinawans',
    'Post-War Recovery': 'New mold cultures sourced from mainland Japan',
  },
  connections: [
    { slug: 'garum', relationship: 'Both lost culinary preparations whose exact flavor profiles are impossible to replicate with modern substitutes' },
    { slug: 'aztec-chocolate', relationship: 'Both food traditions destroyed by military conquest, their specific preparations lost with the cultures that created them' },
  ],
  sources: [
    { title: 'Awamori: Traditional Okinawan Spirit', author: 'Koji Kinoshita', year: 2014 },
    { title: 'The Battle of Okinawa: The Blood and the Bomb', author: 'George Feifer', year: 2001 },
    { title: 'Aspergillus luchuensis, an Industrially Important Black Aspergillus in East Asia', author: 'Hong et al.', year: 2013, url: 'https://doi.org/10.1371/journal.pone.0063769' },
    { title: 'Okinawa: The Last Battle', author: 'Roy Appleman et al.', year: 1948 },
  ],
};
