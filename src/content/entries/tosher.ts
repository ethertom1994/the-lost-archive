import type { Entry } from '../../types';

export const tosher: Entry = {
  slug: 'tosher',
  name: 'The Tosher',
  tagline: 'Victorian families who descended into London\'s sewers with hooked poles and lanterns, hunting for coins, jewelry, and anything of value flushed into the dark.',
  category: 'culture',
  subcategory: 'Extinct Professions',
  lastKnownYear: '~1900',
  lastKnownLocation: 'London, England',
  coordinates: [51.51, -0.13],
  region: 'Europe',
  status: 'extinct',
  cause: 'Increased sewer regulation, the Trespass Act, and modernized sewer infrastructure eliminated access and opportunity',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## Into the Sewers

In Victorian London, a parallel economy operated beneath the streets. Toshers, also called shore-hunters or sewer-hunters, entered the city's labyrinthine sewer system to scavenge for valuables that had been lost, dropped, or flushed into the drains. Armed with long poles fitted with hooks or rakes, canvas bags, and bull's-eye lanterns strapped to their chests, they waded through the effluent searching for coins, cutlery, jewelry, metal scraps, rope, and anything else that could be sold above ground.

The practice predated the formal sewer system. London's earliest toshers worked in the open sewers and drainage ditches that served the city before Bazalgette's network was built. But the great enclosed sewers of the mid-nineteenth century, with their brick tunnels and predictable flows, created the golden age of toshing. The new infrastructure concentrated London's waste into defined channels, and with the waste came everything the city accidentally discarded.

## The Economics of Waste

Toshing could be surprisingly lucrative. Henry Mayhew, the Victorian journalist and social researcher, documented the toshers in his 1851 work London Labour and the London Poor. He reported that experienced toshers could earn six shillings a day, a sum comparable to skilled tradesmen and significantly more than many factory workers. The best finds were copper coins, which accumulated in the silt of sewer junctions, and silver spoons or jewelry that had been swept down kitchen drains.

Toshers developed detailed knowledge of the sewer network, learning which tunnels produced the richest pickings and which were dangerous. They tracked the tides, since the Thames-connected sewers flooded with each high tide, and they learned to read the flow patterns that indicated where heavy objects would settle. This expertise was passed within families. Mayhew recorded that toshing was often a multigenerational trade, with parents teaching children the routes and techniques.

## The Dangers Below

The sewer tunnels were lethal environments. The air carried methane and hydrogen sulfide, gases that could kill without warning. Sudden rainstorms could send walls of water through the tunnels, drowning anyone caught in the surge. Rats were a constant presence, and bites could cause fatal infections. The toshers worked in near-total darkness beyond their lanterns, navigating by memory and the sound of water flow.

Despite these hazards, Mayhew reported that toshers were generally healthier than many above-ground laborers, a finding that surprised his Victorian readers. The toshers attributed their resilience to the "toughening" effect of constant exposure, though modern understanding suggests that survivors of such conditions were simply the hardiest members of an already hardy class.

## Legally, They Were Trespassers

Entering the sewers was illegal. The Metropolitan Commission of Sewers prohibited unauthorized access, and toshers who were caught faced fines or imprisonment. But enforcement was minimal in the early Victorian period. The sewers were vast and the authorities had neither the manpower nor the inclination to patrol them. Toshers entered through gratings, manholes, and riverside outlets, and the authorities largely looked the other way as long as no one caused damage.

As sewer management professionalized in the later nineteenth century, enforcement tightened. Grated barriers were installed at entry points. Patrols increased. Simultaneously, improved drainage design meant fewer valuables accumulated in the tunnels. The combination of restricted access and diminished returns killed the profession by the turn of the twentieth century. The last toshers disappeared into the same darkness where they had worked.`,
  quickFacts: {
    'Also Known As': 'Shore-hunters, sewer-hunters',
    'Equipment': 'Hooked poles, canvas bags, bull\'s-eye lanterns',
    'Daily Earnings': 'Up to 6 shillings (comparable to skilled tradesmen)',
    'Common Finds': 'Copper coins, silver cutlery, jewelry, metal scraps, rope',
    'Key Dangers': 'Toxic gas, flash flooding, rat bites, total darkness',
    'Legal Status': 'Technically trespassers; prosecution was rare early on',
    'Key Source': 'Henry Mayhew, London Labour and the London Poor (1851)',
  },
  connections: [
    { slug: 'gong-farmer', relationship: 'Both worked underground in London\'s waste infrastructure, gong farmers in the cesspit era, toshers in the sewer era that followed' },
    { slug: 'night-soil', relationship: 'Both professions extracted economic value from human waste systems, one collecting the waste itself, the other scavenging what was lost in it' },
    { slug: 'lamplighter', relationship: 'Both were Victorian-era professions made obsolete by infrastructure modernization, one by electric lights, the other by sewer engineering' },
  ],
  sources: [
    { title: 'London Labour and the London Poor', author: 'Henry Mayhew', year: 1851 },
    { title: 'The Great Stink of London: Sir Joseph Bazalgette and the Cleansing of the Victorian Metropolis', author: 'Stephen Halliday', year: 1999 },
    { title: 'Dirty Old London: The Victorian Fight Against Filth', author: 'Lee Jackson', year: 2014 },
  ],
  relatedMedia: [
    { type: 'book', title: 'London Labour and the London Poor', url: 'https://www.gutenberg.org/ebooks/55998', description: 'Mayhew\'s landmark survey of London\'s working poor, including detailed interviews with toshers' },
  ],
};
