import type { Entry } from '../../types';

export const zanzibarLeopard: Entry = {
  slug: 'zanzibar-leopard',
  name: 'The Zanzibar Leopard',
  tagline: 'A subspecies exterminated not because it was dangerous, but because people believed it was supernatural.',
  category: 'fauna',
  subcategory: 'Extinct Big Cats',
  lastKnownYear: '~1990s',
  lastKnownLocation: 'Unguja Island, Zanzibar, Tanzania',
  coordinates: [-6.16, 39.19],
  region: 'Sub-Saharan Africa',
  status: 'extinct',
  cause: 'Government-sponsored extermination campaigns targeting leopards believed to be controlled by witches',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Witch's Cat

On Unguja Island, the largest island of the Zanzibar archipelago, a unique subspecies of leopard evolved in isolation. *Panthera pardus adersi* was smaller than its mainland relatives, adapted to the island's dense coral rag forests and humid lowlands. For centuries it coexisted uneasily with the island's human inhabitants. But the Zanzibar leopard's fate was sealed not by habitat loss or sport hunting, but by something far older: belief in witchcraft.

Local tradition held that certain people, known as *wachawi*, kept leopards as servants. These "witch leopards" were said to be sent out at night to attack enemies and destroy livestock. The leopards themselves were not feared as ordinary predators. They were feared as instruments of malice, extensions of human evil. Killing a leopard was not pest control. It was spiritual warfare.

## The Campaigns

After the Zanzibar Revolution in 1964, the new government launched organized campaigns to eradicate the leopards. Village hunting squads were formed. Bounties were offered. Traps were set across the forests. The campaigns accelerated through the 1970s and 1980s, driven by a feedback loop: as leopards became rarer and more desperate, their occasional attacks on livestock only reinforced the belief that surviving animals were being deliberately deployed by witches.

By the early 1990s, sightings had effectively ceased. Conservation groups attempted to intervene in the mid-1990s, but local hostility toward the animals made any protection program politically impossible. The last verified sighting dates to the mid-1990s, though scattered unconfirmed reports persisted.

## A Ghost on Camera

In 2018, a camera trap set in Unguja's Jozani-Chwaka Bay National Park captured footage of what appears to be a leopard moving through the forest at night. The footage was tantalizing but inconclusive. No follow-up survey has confirmed a surviving population. If any individuals do persist, they number so few that the subspecies is functionally gone.

The Zanzibar leopard is one of the few large predators driven to extinction not by the usual forces of development and habitat destruction, but by organized persecution rooted in supernatural belief. A species killed because people thought it belonged to witches.`,
  quickFacts: {
    'Scientific Name': 'Panthera pardus adersi',
    'Island': 'Unguja, Zanzibar Archipelago',
    'Size': 'Smaller than mainland African leopards',
    'Extermination Campaigns': '1960s-1990s',
    'Last Confirmed Sighting': 'Mid-1990s',
    'Possible Camera Trap Sighting': '2018',
    'Primary Threat': 'Persecution linked to witchcraft beliefs',
  },
  connections: [
    { slug: 'thylacine', relationship: 'Both large predators hunted to extinction through organized government-backed campaigns' },
    { slug: 'dodo', relationship: 'Both island species uniquely vulnerable to targeted killing due to geographic isolation' },
  ],
  sources: [
    { title: 'The Zanzibar Leopard: Between Science and Witchcraft', author: 'Martin T. Walsh', year: 2007 },
    { title: 'The Ecology of the Zanzibar Leopard', author: 'Helle V. Goldman & Jon Walsh', year: 2002 },
    { title: 'Camera-trap confirmation of the survival of the Zanzibar leopard', author: 'Forrest et al.', year: 2018 },
  ],
};
