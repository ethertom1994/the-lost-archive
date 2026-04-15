import type { Entry } from '../../types';

export const sinEater: Entry = {
  slug: 'sin-eater',
  name: 'The Sin-Eater',
  tagline: 'A reviled outcast hired to consume bread off a corpse\'s chest, absorbing the dead person\'s sins so their soul could pass to heaven.',
  category: 'culture',
  subcategory: 'Extinct Professions',
  lastKnownYear: '~1906',
  lastKnownLocation: 'Welsh Marches, England-Wales border',
  coordinates: [52.1, -3.0],
  region: 'Europe',
  status: 'extinct',
  cause: 'Decline of folk religion, industrialization, and modernization of burial practices in rural Britain',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Transaction

When someone died in certain communities along the Welsh border and in parts of Scotland, a message was sent to a specific person. This person, almost always a man, was the sin-eater. He would come to the house of the deceased, where the body lay in preparation for burial. A piece of bread and a bowl of ale, sometimes wine or milk, were placed on the chest of the corpse. The sin-eater ate the bread and drank the ale. In doing so, he was understood to have consumed the sins of the dead person, freeing their soul to pass into the afterlife unburdened.

The ritual combined Christian theology with much older folk beliefs about the transfer of spiritual pollution through food. The bread, having rested on the body, was believed to have absorbed the sins of the deceased through physical contact. By eating it, the sin-eater took those sins into himself. Each ceremony added to his accumulated spiritual burden. Over a career, a sin-eater might carry the sins of hundreds of dead.

## The Outcast's Burden

The sin-eater occupied a unique social position: essential yet despised. Communities needed him because the alternative, allowing the dead to carry their sins to judgment, was theologically terrifying. But the act of absorbing sin made the sin-eater himself an object of fear and revulsion. He was avoided in daily life, excluded from church, and treated as spiritually contaminated.

The payment was meager. Historical accounts mention sums ranging from a few pence to sixpence, sometimes just the food and drink themselves. The sin-eater was typically among the poorest members of the community, someone whose desperation made the role's social cost bearable. John Aubrey, the seventeenth-century antiquarian, described a sin-eater near Ross-on-Wye in Herefordshire as a "long, leane, ugly, lamentable poor raskal" who lived in a cottage and performed the ritual for two groats.

## The Historical Record

The practice is documented primarily through accounts from antiquarians and folklorists rather than from the sin-eaters themselves. John Aubrey's description from the 1680s is the most cited early source. Bagford's letter of 1715 provides additional detail. The practice appears to have been concentrated along the Welsh Marches, the border region between England and Wales, with scattered reports from Scotland and parts of the English West Country.

The last known sin-eater is often identified as Richard Munslow of Ratlinghope, Shropshire, who died in 1906. Unlike the destitute figures described by Aubrey, Munslow was a farmer of some means. Local tradition holds that he took up the practice after the deaths of several of his children, suggesting that personal grief rather than poverty motivated his assumption of the role.

## The Paradox

The sin-eater embodied a profound paradox. He performed an act of mercy, freeing the dead from spiritual consequence, while condemning himself to accumulating damnation. He was paid to accept eternal suffering so that others would not have to. The community simultaneously required his service and punished him for providing it. He was the necessary damned, the willing vessel for sins that no one else would carry.

When the practice died, it took with it one of the strangest expressions of folk Christianity ever recorded: the idea that sin was a physical substance, transferable through food, and that someone could be hired to eat it.`,
  quickFacts: {
    'Region': 'Welsh Marches, Scotland, English West Country',
    'Ritual': 'Consumed bread and ale placed on corpse\'s chest',
    'Purpose': 'Absorb the deceased\'s sins to free their soul',
    'Payment': 'A few pence to sixpence (pittance)',
    'Social Status': 'Feared, shunned, excluded from church',
    'Last Known Practitioner': 'Richard Munslow of Ratlinghope, Shropshire (d. 1906)',
    'Key Source': 'John Aubrey\'s Remaines of Gentilisme and Judaisme (1686-87)',
  },
  connections: [
    { slug: 'victorian-mourning', relationship: 'Both were elaborate cultural practices surrounding death that disappeared as modern secular attitudes replaced folk and religious traditions' },
    { slug: 'night-soil', relationship: 'Both were reviled but necessary professions that served communities who simultaneously depended on and shunned the practitioners' },
    { slug: 'gong-farmer', relationship: 'Both were despised occupations held by society\'s poorest, doing essential work that others refused to perform' },
  ],
  sources: [
    { title: 'Remaines of Gentilisme and Judaisme', author: 'John Aubrey', year: 1686 },
    { title: 'The Sin-Eater and Other Tales', author: 'Fiona Macleod', year: 1895 },
    { title: 'Funeral Customs: Their Origin and Development', author: 'Bertram S. Puckle', year: 1926 },
    { title: 'The Last Sin Eater: Richard Munslow and the Custom of Sin Eating', author: 'Matthew Engel', year: 2010, url: 'https://www.theguardian.com/uk/2010/sep/18/last-sin-eater-shropshire' },
  ],
  relatedMedia: [
    { type: 'article', title: 'The Last Sin-Eater (The Guardian)', url: 'https://www.theguardian.com/uk/2010/sep/18/last-sin-eater-shropshire', description: 'Matthew Engel visits the grave of Richard Munslow, believed to be the last sin-eater' },
  ],
};
