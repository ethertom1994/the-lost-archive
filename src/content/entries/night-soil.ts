import type { Entry } from '../../types';

export const nightSoil: Entry = {
  slug: 'night-soil',
  name: 'Night Soil Collectors',
  tagline: 'Before sewers, human waste was collected nightly and sold as fertilizer. In Japan, waste from wealthy neighborhoods fetched a higher price. An entire economy of poop, gone with the flush toilet.',
  category: 'culture',
  subcategory: 'Extinct Professions',
  lastKnownYear: '~1950s',
  lastKnownLocation: 'East Asia (Japan, China, Korea — last widespread use)',
  coordinates: [35.68, 139.69],
  region: 'Global',
  status: 'extinct',
  cause: 'The development of modern sewage systems and flush toilets made the profession obsolete. Urbanization and public health concerns accelerated the transition.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Midnight Economy

Before the flush toilet and the municipal sewer, someone had to deal with human waste. In cities across the world — London, Paris, Tokyo, Beijing, New York — that someone was the night soil collector: a worker who came after dark with a bucket, a ladle, and a cart, emptying privies, cesspits, and chamber pots, then hauling the contents out of the city to be sold as agricultural fertilizer.

The term "night soil" reflects the schedule: the work was done at night, both to avoid offending daytime sensibilities and because the streets were less crowded. It was dirty, dangerous, socially stigmatized work. In many cultures, night soil collectors belonged to the lowest social caste — the Dalits in India, the Burakumin in Japan, the "gong farmers" of medieval England. But the work was essential, and in some places, it was surprisingly profitable.

## The Japanese System

Nowhere was the night soil economy more sophisticated than in Edo-period Japan (1603-1868). In a country with limited livestock and therefore limited animal manure, human waste was the primary fertilizer for rice paddies and vegetable gardens. It was collected, transported, composted, and applied with care and expertise.

The system was so organized that landlords and tenants actually negotiated over who owned the tenant's waste. Night soil from wealthy neighborhoods commanded higher prices — the logic being that a richer diet produced more nutrient-dense fertilizer. Contracts specified collection schedules, prices, and quality standards. Disputes over night soil rights went to magistrates. An entire economic ecosystem existed around what we now flush away without thinking.

## The Flush

The flush toilet, widely adopted in Western cities during the 19th century and in East Asian cities during the 20th century, eliminated the night soil collector in a single technological stroke. Modern sewage treatment plants process waste chemically and biologically, recovering some nutrients but largely disconnecting the urban-agricultural loop that night soil collection maintained.

Environmentalists have noted that the night soil system was, in its way, a model of circular economy — waste was a resource, not a pollutant. Modern sewage systems are more hygienic but less efficient: they use enormous quantities of fresh water to transport waste, then require energy-intensive treatment to make the water reusable. The night soil collector's bucket was crude. The system it supported was elegant.`,
  quickFacts: {
    'Also Called': 'Gong farmers (England), honeydippers (US)',
    'Peak Period': 'Pre-industrial cities worldwide',
    'Japanese System': 'Elaborate contracts, quality pricing',
    'Wealth Premium': 'Richer diet = higher-priced fertilizer',
    'Replaced By': 'Flush toilet + municipal sewage',
    'Last Widespread Use': '~1950s (East Asia)',
    'Modern Parallel': 'Biosolids recycling programs',
    'Social Status': 'Lowest caste in most societies',
  },
  connections: [
    { slug: 'knocker-upper', relationship: 'Both pre-industrial professions made instantly obsolete by a single technology — one by the alarm clock, the other by the flush toilet' },
    { slug: 'lamplighter', relationship: 'Both essential urban service professions that vanished when infrastructure was modernized' },
    { slug: 'victorian-mourning', relationship: 'Both elaborate social systems from the pre-modern era with intricate rules and customs that seem alien today' },
  ],
  sources: [
    { title: 'The Big Necessity: The Unmentionable World of Human Waste', author: 'Rose George', year: 2008 },
    { title: 'Japan\'s Medieval Population: Famine, Fertility, and Warfare', author: 'William Wayne Farris', year: 2006 },
    { title: 'The Ghost Map: The Story of London\'s Most Terrifying Epidemic', author: 'Steven Johnson', year: 2006 },
    { title: 'Night Soil and the City', author: 'David Edgerton', year: 2006 },
  ],
};
