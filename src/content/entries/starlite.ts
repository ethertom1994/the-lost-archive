import type { Entry } from '../../types';

export const starlite: Entry = {
  slug: 'starlite',
  name: 'Starlite',
  tagline: 'An amateur chemist made a material that withstood 10,000 degrees. He refused to share the formula. He died. The secret probably died with him.',
  category: 'technology',
  subcategory: 'Lost Inventions',
  lastKnownYear: 2011,
  lastKnownLocation: 'Blackpool, Lancashire, England',
  coordinates: [53.81, -3.05],
  region: 'Europe',
  status: 'extinct',
  cause: 'Inventor Maurice Ward died in 2011 without publicly revealing the formula or manufacturing process',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Demonstration

In 1993, Maurice Ward appeared on the BBC science program *Tomorrow's World*. He was a former hairdresser and amateur chemist from Blackpool, England, with no formal scientific credentials and a claim that sounded absurd: he had invented a material that could withstand extreme heat without burning, charring, or conducting heat to anything behind it.

The BBC demonstration was simple and striking. A coating of Starlite was applied to an egg. The egg was then blasted with a blowtorch at temperatures the show stated could reach several thousand degrees Celsius. After several minutes of direct flame, the coating was intact. The egg inside was cracked open. It was raw. Not cooked, not warm. Raw.

The segment aired and the scientific community, predictably, was skeptical.

## The Testing

But Ward's material was tested by people with credentials. Researchers at the Atomic Weapons Establishment (AWE) at Aldermaston subjected Starlite to thermal tests simulating nuclear flash. The material survived temperatures the AWE reported as equivalent to 10,000 degrees Celsius, seventy-five times the temperature at which a space shuttle's heat shield is designed to operate. It did not burn. It did not melt. It did not conduct heat. A thin sheet of it could be heated on one side to thousands of degrees while the other side remained cool enough to touch.

The AWE scientists were impressed enough to express formal interest. So were researchers at Boeing, NASA, and several military agencies. Starlite appeared to be a genuine and potentially revolutionary thermal barrier material.

## The Refusal

Ward would not share the formula. He was not secretive out of ignorance. He was secretive out of fear, rational or otherwise, that any corporate or government partner would steal the formula, patent it themselves, and cut him out. Every negotiation followed the same pattern: the interested party asked for the composition, Ward refused to reveal it, talks collapsed.

He would not patent it either, since a patent would require disclosing the formula. He would not license it under terms that gave any other party knowledge of the composition. He insisted on maintaining complete control, which meant maintaining complete secrecy.

Decades passed. The material that could have revolutionized fire protection, aerospace, and nuclear safety sat in the workshop of a man in Blackpool who would not let anyone else know what it was made of.

## The Death

Maurice Ward died on May 11, 2011, at the age of 78. His family stated that they possessed the formula and intended to continue his work. As of 2024, no product based on Starlite has reached the market. No peer-reviewed paper has disclosed the composition. No independent researcher has replicated the material's claimed properties.

The most common speculation is that Starlite was a mixture of organic polymers and ceramic materials, possibly involving boron compounds, that formed an intumescent (swelling) char layer when exposed to extreme heat. But speculation is all it is. The material that could take ten thousand degrees without flinching may now be as lost as Greek fire, and for almost the same reason: the person who knew how to make it decided that nobody else should.`,
  quickFacts: {
    'Inventor': 'Maurice Ward (1933-2011)',
    'Claimed Performance': 'Withstands 10,000\u00B0C without burning or conducting heat',
    'Key Test': 'Atomic Weapons Establishment, Aldermaston',
    'BBC Demonstration': '1993, Tomorrow\'s World',
    'Why It\'s Lost': 'Ward refused to reveal the formula and died without sharing it',
    'Status': 'Family claims to have formula; no product or publication has followed',
  },
  connections: [
    { slug: 'greek-fire', relationship: 'Both are materials whose formulas were kept secret and lost, one by imperial policy, the other by one man\'s paranoia' },
    { slug: 'damascus-steel', relationship: 'Both involve manufacturing secrets that died with their practitioners, leaving behind only demonstrations and rumors' },
  ],
  sources: [
    { title: 'Starlite: The Story of Maurice Ward', author: 'BBC Tomorrow\'s World', year: 1993 },
    { title: 'The Man Who Invented a Material NASA Wanted', author: 'The Guardian', year: 2018 },
    { title: 'Intumescent Materials and Their Application in Fire Protection', author: 'Serge Bourbigot et al.', year: 2004 },
  ],
  relatedMedia: [
    { type: 'video', title: 'Starlite on Tomorrow\'s World (BBC)', url: 'https://www.youtube.com/watch?v=aqR4_UoBIzY', description: 'Maurice Ward demonstrates Starlite\'s heat resistance on BBC TV' },
  ],
};
