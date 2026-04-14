import type { Entry } from '../../types';

export const svalbardSyria: Entry = {
  slug: 'svalbard-syria',
  name: 'Seeds of the Svalbard Vault (Syrian Collection)',
  tagline: 'The Svalbard Seed Vault was built as the ultimate backup. In 2015, war in Syria forced the first-ever withdrawal. The backup worked. Many local varieties were never deposited.',
  category: 'culture',
  subcategory: 'Agricultural Heritage',
  lastKnownYear: 2015,
  lastKnownLocation: 'Aleppo, Syria / Svalbard, Norway',
  coordinates: [36.2, 37.16],
  region: 'Middle East',
  status: 'functionally_extinct',
  cause: 'The Syrian Civil War destroyed ICARDA\'s Aleppo seed bank. While some seeds had been deposited at Svalbard, many heritage varieties from local Syrian farmers were never backed up and are permanently lost.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Backup Plan

The Svalbard Global Seed Vault, opened in 2008 on the Norwegian archipelago of Svalbard, was designed as the ultimate insurance policy for global agriculture. Carved into a mountain above the Arctic Circle, maintained at -18°C by natural permafrost and mechanical cooling, it stores duplicate samples of seeds from gene banks around the world. It was built for disaster — war, natural catastrophe, climate change — to ensure that crop genetic diversity would survive even if individual seed banks were destroyed.

The designers hoped the vault would never need to be opened for an actual withdrawal. For seven years, it wasn't.

## The Withdrawal

In 2012, the International Center for Agricultural Research in the Dry Areas (ICARDA), based in Aleppo, Syria, began evacuating its operations as the Syrian Civil War engulfed the city. ICARDA maintained one of the most important seed collections in the world, specializing in crops adapted to arid and semi-arid environments: drought-resistant wheats, barley, lentils, and chickpeas developed over thousands of years by farmers across the Fertile Crescent.

Before the war, ICARDA had deposited 116,000 seed samples at Svalbard. In September 2015, ICARDA made the first-ever withdrawal from the vault — requesting the return of 130 boxes of seeds to begin rebuilding their collection at new facilities in Morocco and Lebanon. The system worked exactly as designed.

## What Wasn't Backed Up

But Svalbard only protects what was deposited. ICARDA's collection, while vast, did not include every variety. Across Syria and the broader Fertile Crescent, local farmers had been maintaining landrace varieties — traditional, locally adapted crops passed down through generations — that were never formally collected or deposited in any seed bank. These varieties, shaped by thousands of years of selection in specific microclimates and soils, existed only in farmers' fields and local storage.

The war displaced millions of Syrian farmers. Fields were abandoned, burned, or built over. Seed stores were destroyed or consumed. Heritage wheat varieties that had been cultivated in the same villages since the Bronze Age — varieties potentially containing genetic material for drought tolerance, disease resistance, or flavor that no other crop on Earth possessed — were lost with the communities that grew them.

The Svalbard Vault saved what was inside it. Nothing saved what was never collected.`,
  quickFacts: {
    'Svalbard Vault Opened': '2008',
    'Location': 'Longyearbyen, Svalbard, Norway',
    'ICARDA Deposited': '116,000 seed samples',
    'First Withdrawal': 'September 2015',
    'Seeds Withdrawn': '130 boxes (~38,000 samples)',
    'ICARDA Relocated To': 'Rabat, Morocco & Terbol, Lebanon',
    'Uncollected Varieties': 'Unknown number of Syrian landraces lost',
    'Fertile Crescent Crops': 'Wheat, barley, lentils, chickpeas',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent the loss of irreplaceable collections — one a library of scrolls, the other a library of seeds' },
    { slug: 'nalanda', relationship: 'Both knowledge repositories destroyed by conflict, with only fragments surviving through copies held elsewhere' },
    { slug: 'gros-michel-banana', relationship: 'Both demonstrate the fragility of crop genetic diversity — when a variety is lost, it cannot be re-created' },
  ],
  sources: [
    { title: 'Seeds on Ice: Svalbard Global Seed Vault', author: 'Cary Fowler', year: 2016 },
    { title: 'ICARDA Annual Report: Rebuilding from Svalbard', author: 'ICARDA', year: 2016 },
    { title: 'The Svalbard Seed Vault: Securing the Future of Agriculture', author: 'Norwegian Ministry of Agriculture', year: 2018 },
    { title: 'War and the Destruction of Agricultural Heritage', author: 'FAO', year: 2017 },
  ],
};
