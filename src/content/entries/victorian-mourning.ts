import type { Entry } from '../../types';

export const victorianMourning: Entry = {
  slug: 'victorian-mourning',
  name: 'Victorian Mourning Culture',
  tagline: 'An elaborate social system of grief: prescribed clothing, jewelry, social rules, and mourning warehouses. Queen Victoria mourned for 40 years. WWI killed too many for ritual to keep up.',
  category: 'culture',
  subcategory: 'Social Customs',
  lastKnownYear: 1918,
  lastKnownLocation: 'Britain and Western Europe',
  coordinates: [51.51, -0.13],
  region: 'Europe',
  status: 'extinct',
  cause: 'World War I produced death on such a scale that the elaborate mourning rituals became impractical. The social infrastructure (mourning warehouses, specialized craftspeople) could not serve millions of bereaved families simultaneously. The customs never recovered.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Rules of Grief

In Victorian Britain, grief was not a private matter. It was a regulated, public performance governed by detailed social rules that prescribed what a mourning person should wear, for how long, where they could go, what social events they could attend, what stationery they should use, and even what jewelry was appropriate at each stage. These rules were not suggestions. To violate them was to commit a social offense comparable to public indecency.

The system was most elaborate for widows. Full mourning (the first year after a husband's death) required all-black clothing made from non-reflective fabric — usually paramatta silk or crape. No jewelry except jet (a black gemstone). No social engagements. Black-bordered stationery. Black-edged handkerchiefs. A heavy black veil. After a year, "second mourning" allowed some purple or grey, and lighter fabrics. "Half-mourning," beginning at 18 months, permitted muted colors. The total mourning period for a husband was two to two and a half years.

## The Industry of Grief

An entire commercial infrastructure supported this system. Mourning warehouses — the most famous being Jay's London General Mourning Warehouse on Regent Street — sold every item a bereaved family might need, from clothing to curtain fabric. (A death in the family required covering mirrors and changing curtains to dark colors.) Hair from the deceased was woven into jewelry — lockets, brooches, rings — by specialized artisans. Memorial photography captured the dead in posed portraits. Black crape manufacturers did steady business.

Queen Victoria set the standard. After Prince Albert died in 1861, she wore black for the remaining 40 years of her life. She kept his rooms exactly as they were, had his clothes laid out daily, and withdrew from public life for years. Her mourning was extreme even by Victorian standards, but it set the cultural tone for an era.

## Death After the Somme

The elaborate mourning system required that death be relatively infrequent and individual — one family mourning one person at a time, with the social and financial resources to observe the proper forms. World War I destroyed every one of those conditions.

Between 1914 and 1918, approximately 886,000 British soldiers died. Nearly every family in Britain lost someone. The mourning warehouses could not supply enough black crape. The social calendar could not accommodate millions of women in simultaneous full mourning. The rules, designed for a world where death was a disruption, broke down in a world where death was the norm.

After the war, mourning customs simplified rapidly. Black armbands replaced full mourning dress. Mourning periods shortened. The commercial infrastructure — the warehouses, the hair jewelry artisans, the crape manufacturers — collapsed. Within a generation, the elaborate Victorian system was gone, replaced by the comparatively formless grief of the modern era. We gained informality. We lost a structured way to grieve.`,
  quickFacts: {
    'Full Mourning Period (widow)': '1 year in solid black',
    'Total Mourning Period': '2-2.5 years',
    'Victoria\'s Mourning': '40 years (1861-1901)',
    'Mourning Fabric': 'Crape (dull, non-reflective)',
    'Jewelry Allowed': 'Jet only during full mourning',
    'Hair Jewelry': 'Woven from the deceased\'s hair',
    'Ended By': 'World War I (886,000 British dead)',
    'Key Retailer': 'Jay\'s London General Mourning Warehouse',
  },
  connections: [
    { slug: 'knocker-upper', relationship: 'Both elaborate Victorian-era social systems with dedicated professionals, both swept away by modernity' },
    { slug: 'lamplighter', relationship: 'Both parts of the Victorian urban infrastructure that created a structured, ritualized public life' },
    { slug: 'mummy-brown', relationship: 'Both Victorian-era practices that seem bizarre in retrospect — one wearing elaborate grief costumes, the other painting with ground-up mummies' },
  ],
  sources: [
    { title: 'Death in the Victorian Family', author: 'Pat Jalland', year: 1996 },
    { title: 'The Victorian Celebration of Death', author: 'James Stevens Curl', year: 2000 },
    { title: 'Mourning Dress: A Costume and Social History', author: 'Lou Taylor', year: 1983 },
    { title: 'The Afterlife of the Victorian Dead', author: 'Catharine Arnold', year: 2014 },
  ],
};
