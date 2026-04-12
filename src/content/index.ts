// Original 5 entries
import { ansaultPear } from './entries/ansault-pear';
import { grosMichelBanana } from './entries/gros-michel-banana';
import { kauaiOo } from './entries/kauai-oo';
import { mummyBrown } from './entries/mummy-brown';
import { silphium } from './entries/silphium';

// Fauna (5 original)
import { xercesBlue } from './entries/xerces-blue';
import { baiji } from './entries/baiji';
import { stellersSeaCow } from './entries/stellers-sea-cow';
import { brambleCayMelomys } from './entries/bramble-cay-melomys';
import { pyreneanIbex } from './entries/pyrenean-ibex';

// Flora (3 original)
import { franklinia } from './entries/franklinia';
import { stHelenaOlive } from './entries/st-helena-olive';
import { cryViolet } from './entries/cry-violet';

// Food (4 original)
import { taliaferroApple } from './entries/taliaferro-apple';
import { aztecChocolate } from './entries/aztec-chocolate';
import { passengerPigeonPie } from './entries/passenger-pigeon-pie';
import { bengalQuince } from './entries/bengal-quince';

// Sound (3 original)
import { alalaSong } from './entries/alala-song';
import { eyakLanguage } from './entries/eyak-language';
import { castratoVoice } from './entries/castrato-voice';

// Material (3 original)
import { tyrianPurple } from './entries/tyrian-purple';
import { fordite } from './entries/fordite';
import { romanConcrete } from './entries/roman-concrete';

// Technology (3 original)
import { greekFire } from './entries/greek-fire';
import { antikytheraMechanism } from './entries/antikythera-mechanism';
import { damascusSteel } from './entries/damascus-steel';

// Place (3 original)
import { doggerland } from './entries/doggerland';
import { aralSea } from './entries/aral-sea';
import { lakePedder } from './entries/lake-pedder';

// Culture (4 original)
import { tanganyika } from './entries/tanganyika';
import { knockerUpper } from './entries/knocker-upper';
import { libraryOfAlexandria } from './entries/library-of-alexandria';
import { prussianTaler } from './entries/prussian-taler';

// Cross-category (2 original)
import { stradivariusSecret } from './entries/stradivarius-secret';
import { silphionCoin } from './entries/silphion-coin';

// New fauna (6)
import { thylacine } from './entries/thylacine';
import { caribbeanMonkSeal } from './entries/caribbean-monk-seal';
import { goldenToad } from './entries/golden-toad';
import { toolacheWallaby } from './entries/toolache-wallaby';
import { quagga } from './entries/quagga';
import { dodo } from './entries/dodo';

// New flora (2)
import { cooksonia } from './entries/cooksonia';
import { cafeMarron } from './entries/cafe-marron';

// New food (3)
import { garum } from './entries/garum';
import { claxtonPeach } from './entries/claxton-peach';
import { originalNyCheesecake } from './entries/original-ny-cheesecake';

// New sound (2)
import { slenderBilledCurlew } from './entries/slender-billed-curlew';
import { preEqualTemperament } from './entries/pre-equal-temperament';

// New material (4)
import { tekhelet } from './entries/tekhelet';
import { kistlerAerogel } from './entries/kistler-aerogel';
import { bakelite } from './entries/bakelite';
import { terracottaPaint } from './entries/terracotta-paint';

// New technology (5)
import { starlite } from './entries/starlite';
import { ulfberhtSwords } from './entries/ulfberht-swords';
import { areciboTelescope } from './entries/arecibo-telescope';
import { concorde } from './entries/concorde';
import { kodachrome } from './entries/kodachrome';
import { romanRoads } from './entries/roman-roads';

// New place (4)
import { zealandia } from './entries/zealandia';
import { centralia } from './entries/centralia';
import { lopNur } from './entries/lop-nur';
import { hangingGardens } from './entries/hanging-gardens';

// New culture (4)
import { raiStones } from './entries/rai-stones';
import { lamplighter } from './entries/lamplighter';
import { greatHedgeIndia } from './entries/great-hedge-india';
import { mixtecCodices } from './entries/mixtec-codices';

import { FEATURED_SLUG } from './featured';
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
  thylacine,
  caribbeanMonkSeal,
  goldenToad,
  toolacheWallaby,
  quagga,
  dodo,
  // Flora
  franklinia,
  stHelenaOlive,
  cryViolet,
  cooksonia,
  cafeMarron,
  // Food
  taliaferroApple,
  aztecChocolate,
  passengerPigeonPie,
  bengalQuince,
  garum,
  claxtonPeach,
  originalNyCheesecake,
  // Sound
  alalaSong,
  eyakLanguage,
  castratoVoice,
  slenderBilledCurlew,
  preEqualTemperament,
  // Material
  tyrianPurple,
  fordite,
  romanConcrete,
  tekhelet,
  kistlerAerogel,
  bakelite,
  terracottaPaint,
  // Technology
  greekFire,
  antikytheraMechanism,
  damascusSteel,
  starlite,
  ulfberhtSwords,
  areciboTelescope,
  concorde,
  kodachrome,
  romanRoads,
  // Place
  doggerland,
  aralSea,
  lakePedder,
  zealandia,
  centralia,
  lopNur,
  hangingGardens,
  // Culture
  tanganyika,
  knockerUpper,
  libraryOfAlexandria,
  prussianTaler,
  raiStones,
  lamplighter,
  greatHedgeIndia,
  mixtecCodices,
  // Cross-category
  stradivariusSecret,
  silphionCoin,
];

export function getEntry(slug: string): Entry | undefined {
  return entries.find(e => e.slug === slug);
}

export function getFeaturedEntry(): Entry | undefined {
  return entries.find(e => e.slug === FEATURED_SLUG) ?? entries[0];
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
