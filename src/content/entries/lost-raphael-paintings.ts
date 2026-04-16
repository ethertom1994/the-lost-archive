import type { Entry } from '../../types';

export const lostRaphaelPaintings: Entry = {
  slug: 'lost-raphael-paintings',
  name: 'The Lost Paintings of Raphael',
  tagline: 'At least twenty documented Raphael paintings are confirmed destroyed or missing. Each was a singular, irreplaceable work.',
  category: 'culture',
  subcategory: 'Lost Art',
  lastKnownYear: 1945,
  lastKnownLocation: 'Urbino, Italy (birthplace); works scattered across Europe',
  coordinates: [43.11, 12.39],
  region: 'Europe',
  status: 'extinct',
  cause: 'War, fire, looting, and centuries of ownership transfers destroyed or displaced confirmed masterworks beyond recovery',
  imageUrl: undefined,
  body: `## The Missing Raphaels

Raffaello Sanzio da Urbino, known simply as Raphael, died in 1520 at the age of thirty-seven. In his brief career he produced an extraordinary body of work that defined the High Renaissance. But a significant portion of his documented output no longer exists. Scholars have identified at least twenty paintings by Raphael that are confirmed lost or destroyed, known only through preparatory drawings, contemporary copies, written descriptions, or archival records. Each represents an irreplaceable loss to art history.

The most famous missing Raphael is the "Portrait of a Young Man," believed to be a self-portrait or a portrait of the artist's friend. It was held in the Czartoryski Museum in Krakow until 1939, when it was seized by Nazi forces during the invasion of Poland. Hans Frank, the Nazi governor of occupied Poland, kept it in his personal collection. It was last seen in 1945 and has never been recovered despite decades of investigation. The Monuments Men Foundation and Polish authorities have continued searching, but the painting's fate remains unknown. It is considered one of the most important missing artworks in the world.

## Destroyed by Fire and War

Several Raphael paintings were destroyed in documented disasters. A "Holy Family" was lost in the 1734 fire at the Alcazar of Madrid, which destroyed many works from the Spanish royal collection. Another painting perished in the fire at London's Whitehall Palace in 1698. The bombardment of Dresden in 1945 damaged several works from the Old Masters Gallery, though most Raphaels there survived because they had been moved to underground storage.

Other works simply disappeared through centuries of changing ownership. Private collections were dispersed, inventories were lost, and paintings that were once carefully documented became untraceable. Some may survive unidentified in private collections or storage rooms, misattributed or forgotten. Others were almost certainly destroyed.

## What Cannot Be Replaced

The loss of any Raphael painting is disproportionately significant because of the brevity of his career. Raphael produced perhaps two hundred to three hundred works in roughly twenty years of active painting. Every surviving piece carries outsized importance for understanding his artistic development. The lost works include paintings from periods that are poorly represented in surviving collections, meaning that scholars have gaps in their knowledge of how Raphael evolved as an artist.

Copies of some lost works survive, made by students or later painters. These provide compositional information but cannot capture the qualities that made Raphael's originals extraordinary: his specific color harmonies, his brushwork, the subtle modulations of light and tone that distinguished his hand from that of any copyist. A copy records what a painting depicted. It does not preserve what the painting was.`,
  quickFacts: {
    'Artist': 'Raphael (Raffaello Sanzio, 1483-1520)',
    'Career Span': '~20 active years',
    'Confirmed Lost Works': 'At least 20 paintings',
    'Most Famous Missing': '"Portrait of a Young Man" (looted by Nazis, 1939)',
    'Last Seen': '1945, in the possession of Hans Frank',
    'Destroyed by Fire': 'Alcazar of Madrid (1734), Whitehall Palace (1698)',
    'Total Known Output': '~200-300 works',
    'Search Status': 'Ongoing; multiple works on international missing art registries',
  },
  connections: [
    { slug: 'benin-bronzes', relationship: 'Both represent irreplaceable artworks whose meaning and context were destroyed by looting and displacement' },
    { slug: 'mixtec-codices', relationship: 'Both are bodies of cultural work systematically destroyed or dispersed, leaving only fragments of a larger whole' },
  ],
  sources: [
    { title: 'Raphael: From Urbino to Rome', author: 'Hugo Chapman, Tom Henry, and Carol Plazzotta', year: 2004 },
    { title: 'The Rape of Europa: The Fate of Europe\'s Treasures in the Third Reich and the Second World War', author: 'Lynn H. Nicholas', year: 1994 },
    { title: 'Raphael', author: 'John Pope-Hennessy', year: 1970 },
  ],
};
