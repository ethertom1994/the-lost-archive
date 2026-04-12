// Original 5 entries
import { ansaultPear } from './entries/ansault-pear';
import { grosMichelBanana } from './entries/gros-michel-banana';
import { kauaiOo } from './entries/kauai-oo';
import { mummyBrown } from './entries/mummy-brown';
import { silphium } from './entries/silphium';

// Fauna (5)
import { xercesBlue } from './entries/xerces-blue';
import { baiji } from './entries/baiji';
import { stellersSeaCow } from './entries/stellers-sea-cow';
import { brambleCayMelomys } from './entries/bramble-cay-melomys';
import { pyreneanIbex } from './entries/pyrenean-ibex';

// Flora (3)
import { franklinia } from './entries/franklinia';
import { stHelenaOlive } from './entries/st-helena-olive';
import { cryViolet } from './entries/cry-violet';

// Food (4)
import { taliaferroApple } from './entries/taliaferro-apple';
import { aztecChocolate } from './entries/aztec-chocolate';
import { passengerPigeonPie } from './entries/passenger-pigeon-pie';
import { bengalQuince } from './entries/bengal-quince';

// Sound (3)
import { alalaSong } from './entries/alala-song';
import { eyakLanguage } from './entries/eyak-language';
import { castratoVoice } from './entries/castrato-voice';

// Material (3)
import { tyrianPurple } from './entries/tyrian-purple';
import { fordite } from './entries/fordite';
import { romanConcrete } from './entries/roman-concrete';

// Technology (3)
import { greekFire } from './entries/greek-fire';
import { antikytheraMechanism } from './entries/antikythera-mechanism';
import { damascusSteel } from './entries/damascus-steel';

// Place (3)
import { doggerland } from './entries/doggerland';
import { aralSea } from './entries/aral-sea';
import { lakePedder } from './entries/lake-pedder';

// Culture (4)
import { tanganyika } from './entries/tanganyika';
import { knockerUpper } from './entries/knocker-upper';
import { libraryOfAlexandria } from './entries/library-of-alexandria';
import { prussianTaler } from './entries/prussian-taler';

// Cross-category (2)
import { stradivariusSecret } from './entries/stradivarius-secret';
import { silphionCoin } from './entries/silphion-coin';

import type { Entry, Category } from '../types';

export const entries: Entry[] = [
  // Featured
  silphium,
  // Original starters
  ansaultPear,
  grosMichelBanana,
  kauaiOo,
  mummyBrown,
  // Fauna
  xercesBlue,
  baiji,
  stellersSeaCow,
  brambleCayMelomys,
  pyreneanIbex,
  // Flora
  franklinia,
  stHelenaOlive,
  cryViolet,
  // Food
  taliaferroApple,
  aztecChocolate,
  passengerPigeonPie,
  bengalQuince,
  // Sound
  alalaSong,
  eyakLanguage,
  castratoVoice,
  // Material
  tyrianPurple,
  fordite,
  romanConcrete,
  // Technology
  greekFire,
  antikytheraMechanism,
  damascusSteel,
  // Place
  doggerland,
  aralSea,
  lakePedder,
  // Culture
  tanganyika,
  knockerUpper,
  libraryOfAlexandria,
  prussianTaler,
  // Cross-category
  stradivariusSecret,
  silphionCoin,
];

export function getEntry(slug: string): Entry | undefined {
  return entries.find(e => e.slug === slug);
}

export function getFeaturedEntry(): Entry | undefined {
  return entries.find(e => e.featured) ?? entries[0];
}

export function getEntriesByCategory(category: Category): Entry[] {
  return entries.filter(e => e.category === category);
}

export function getConnectedEntries(entry: Entry): (Entry & { relationship: string })[] {
  return entry.connections
    .map(c => {
      const connected = entries.find(e => e.slug === c.slug);
      return connected ? { ...connected, relationship: c.relationship } : null;
    })
    .filter((e): e is Entry & { relationship: string } => e !== null);
}
