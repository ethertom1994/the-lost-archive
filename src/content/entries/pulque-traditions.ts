import type { Entry } from '../../types';

export const pulqueTraditions: Entry = {
  slug: 'pulque-traditions',
  name: 'Pre-Colonial Pulque (Octli)',
  tagline: 'A sacred drink with 400 gods. The Spanish destroyed the rituals. What survives is a shadow of what was.',
  category: 'food',
  subcategory: 'Lost Beverages',
  lastKnownYear: 1521,
  lastKnownLocation: 'Tenochtitlan and the Valley of Mexico',
  coordinates: [19.43, -99.13],
  region: 'Mesoamerica',
  status: 'extinct',
  cause: 'Spanish conquest destroyed sacred production traditions, banned ritual consumption, and disrupted cultivated agave lineages',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Drink of 400 Gods

Before the Spanish arrived, pulque was not simply a beverage. Called octli in Nahuatl, it was a sacred substance woven into every layer of Aztec spiritual and ceremonial life. The Aztec pantheon included the Centzon Totochtin, literally "400 rabbits," a group of deities associated with drunkenness and pulque, each representing a different aspect or degree of intoxication. The goddess Mayahuel, depicted with 400 breasts, personified the maguey plant itself. Pulque was offered to the gods, consumed at religious festivals, given to sacrificial victims, and administered to the elderly and nursing mothers as a nutritional supplement.

Production was a priestly craft governed by strict ritual protocols. Specific wild and semi-cultivated agave varieties were selected for their sap quality. The tlachiquero, or pulque harvester, used an acocote (a long gourd) to extract aguamiel (honey water) from the heart of a mature maguey plant. This sap was fermented using naturally occurring microorganisms in a process that was carefully timed and ritually supervised. The resulting drink was milky, slightly viscous, mildly alcoholic, and rich in nutrients including B vitamins and probiotics.

## What the Conquest Destroyed

The Spanish conquest of 1521 shattered the ritual framework. Catholic missionaries banned ceremonial pulque consumption as idolatry. The priestly knowledge governing which agave varieties to cultivate, when to harvest, and how to manage fermentation was disrupted. The specific wild agave strains favored for centuries of selective cultivation were lost as agricultural systems collapsed under colonial reorganization.

Pulque survived the conquest, but in degraded form. The Spanish actually encouraged its consumption as a taxable commodity, but what persisted was stripped of its sacred context and standardized for commercial production. The hundreds of regional variants, each tied to specific agave cultivars and local fermentation traditions, narrowed to a generic product.

## The Ghost of Octli

Modern pulque, still produced in central Mexico, is a living beverage. But it is not octli. The ritualized production methods, the specific agave genetics, the priestly oversight, and the ceremonial context that gave the drink its meaning are gone. What the Centzon Totochtin would recognize in a modern pulqueria is debatable. The liquid survives. The tradition that made it sacred does not.`,
  quickFacts: {
    'Nahuatl Name': 'Octli',
    'Source Plant': 'Maguey (Agave spp.)',
    'Associated Deities': 'Centzon Totochtin (400 Rabbits), Mayahuel',
    'Alcohol Content': '~4-6% (traditional)',
    'Ritual Status': 'Sacred; governed by priestly protocols',
    'Destruction': 'Spanish conquest, 1521',
    'Modern Survival': 'Commercial pulque persists, but without sacred traditions',
  },
  connections: [
    { slug: 'aztec-chocolate', relationship: 'Both were sacred Aztec beverages whose original ritual preparation methods were destroyed by the Spanish conquest' },
    { slug: 'silphium-spice', relationship: 'Both were culturally essential consumables whose specific biological source was lost, leaving only approximations' },
  ],
  sources: [
    { title: 'The Drunken Botanist', author: 'Amy Stewart', year: 2013 },
    { title: 'Pulque: A Traditional Mexican Drink', author: 'Adelfo Escalante et al.', year: 2016, url: 'https://doi.org/10.1016/B978-0-12-811837-5.00014-1' },
    { title: 'Daily Life of the Aztecs', author: 'Jacques Soustelle', year: 1961 },
  ],
};
