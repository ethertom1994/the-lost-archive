import type { Entry } from '../../types';

export const aztecChocolate: Entry = {
  slug: 'aztec-chocolate',
  name: 'Aztec Chocolate',
  tagline: 'The original cacao drink was nothing like chocolate. We will never taste what Montezuma drank.',
  category: 'food',
  subcategory: 'Historical Beverages',
  lastKnownYear: '~1521',
  lastKnownLocation: 'Tenochtitlan (modern Mexico City)',
  coordinates: [19.43, -99.13],
  region: 'Mesoamerica',
  status: 'extinct',
  cause: 'Spanish conquest destroyed Aztec cultivation practices; original cacao cultivars replaced by commercial strains',
  body: `## Not Chocolate

When Hern\u00e1n Cort\u00e9s arrived at the court of Montezuma II in 1519, he encountered a drink that bore no resemblance to the sweet, milky substance we call chocolate. The Aztec *xocol\u0101tl* was bitter, frothy, room-temperature or cold, often dyed red with achiote and seasoned with chili peppers, vanilla, and various flowers. It was whipped to a foam using a wooden whisk called a *molinillo*, and the foam was considered the most important part. Montezuma reportedly drank fifty cups a day from golden goblets.

The drink was sacred. Cacao beans served simultaneously as currency and as a ritual substance, consumed at religious ceremonies, offered to the gods, and served at royal feasts. The Aztec word *xocol\u0101tl* likely derives from *xococ* (bitter) and *\u0101tl* (water). This was not a treat. It was a sacrament.

## The Cultivars We Lost

The cacao trees the Aztecs cultivated were not the same as the commercial cacao grown today. Mesoamerican civilizations had been selectively breeding cacao for at least three thousand years, developing varieties adapted to specific microclimates and flavor profiles. The *Criollo* cacao that dominated Aztec-era cultivation was genetically distinct from the *Forastero* varieties that now account for roughly 80 percent of the world's chocolate production.

After the Spanish conquest, the colonial administration transformed cacao from a sacred luxury into a commodity crop. Indigenous cultivation practices, which involved complex agroforestry systems with shade trees and companion plants, were replaced by plantation monocultures. The specific Criollo cultivars that the Aztecs had refined over millennia were gradually displaced by hardier, higher-yielding Forastero stock. The old varieties, maintained by oral tradition and careful propagation, were not recorded in any way that would allow reconstruction.

## The Recipe We Can't Follow

Even if the original cacao cultivars survived, the Aztec preparation method involved ingredients and techniques that were specific to their culture and ecology. The flowers used for flavoring included species like *Cymbopetalum penduliflorum* (known as *xochinacaztli*), an aromatic bloom from the custard-apple family that is still used in some rural Mexican markets but was never adopted into the European chocolate tradition. The specific ratios, the water source, the altitude at which the drink was prepared, the whisking technique for the foam, the ceremonial context that shaped the sensory experience: all of this is gone.

Modern artisan chocolatiers have attempted reconstructions, using surviving Criollo cacao and historical Spanish accounts. These efforts produce interesting drinks. But the participants in those reconstructions are the first to say that what they make is an approximation built on fragments, not a revival. The drink Montezuma consumed was the product of three millennia of refinement by a civilization that was destroyed. Its flavor died with that civilization.`,
  quickFacts: {
    'Aztec Name': 'Xocol\u0101tl (bitter water)',
    'Key Ingredients': 'Cacao, chili, vanilla, achiote, various flowers',
    'Preparation': 'Whisked cold or room-temperature, frothy',
    'Cacao Type': 'Criollo cultivars (now largely replaced)',
    'Cultural Role': 'Currency, religious sacrament, royal beverage',
    'Montezuma\'s Consumption': 'Reportedly ~50 cups daily',
    'Modern Cacao': '~80% Forastero (different species/cultivar)',
  },
  connections: [
    { slug: 'silphium', relationship: 'Both were prized ancient substances whose exact character was lost when the civilizations that cultivated them fell' },
    { slug: 'tyrian-purple', relationship: 'Both were luxury products of ancient civilizations whose precise production methods died with their makers' },
  ],
  sources: [
    { title: 'The True History of Chocolate', author: 'Sophie D. Coe and Michael D. Coe', year: 2013 },
    { title: 'Historia General de las Cosas de Nueva Espa\u00f1a', author: 'Bernardino de Sahag\u00fan', year: 1577 },
    { title: 'Cacao and Chocolate: A Short History', author: 'Smithsonian Tropical Research Institute', year: 2018 },
    { title: 'Letters from Mexico', author: 'Hern\u00e1n Cort\u00e9s', year: 1520 },
  ],
};
