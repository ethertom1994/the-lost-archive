import type { Entry } from '../../types';

export const rapaNuiPalm: Entry = {
  slug: 'rapa-nui-palm',
  name: 'Rapa Nui Palm',
  tagline: 'A giant palm once covered Easter Island in dense forest. When the last one fell, the islanders lost the sea.',
  category: 'flora',
  subcategory: 'Extinct Trees',
  lastKnownYear: '~1650',
  lastKnownLocation: 'Rapa Nui (Easter Island), Polynesia',
  coordinates: [-27.11, -109.35],
  region: 'Pacific Islands',
  status: 'extinct',
  cause: 'Deforestation by Polynesian settlers for agriculture, canoe-building, and transporting moai statues',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Island of Palms

When Polynesian voyagers first reached Rapa Nui around 1200 CE, they found an island covered in forest. The dominant species was a giant palm, Paschalococos disperta, closely related to the Chilean wine palm but larger, reaching heights of over 15 meters with trunks nearly a meter in diameter. Pollen cores from island lake sediments show that this palm had grown on Rapa Nui for at least 35,000 years, forming dense stands across the island's volcanic slopes. It was the backbone of the ecosystem, sheltering smaller plants, stabilizing soil, and providing habitat for nesting seabirds.

The palm was also immediately useful to the settlers. Its trunk could be hollowed into canoes large enough for deep-sea fishing. Its wood served as fuel, building material, and rollers for transporting the famous moai statues from the quarries at Rano Raraku to their platforms along the coast. Its nuts, similar to coconuts, were edible. Charred palm nut fragments found in archaeological sites confirm that the Rapanui ate them regularly.

## The Slow Collapse

Deforestation was not sudden. Pollen records show a gradual decline spanning several centuries. The palms were cut faster than they could regenerate, and introduced Polynesian rats gnawed the nuts, preventing new seedlings from establishing. By approximately 1650, the last Rapa Nui palm was gone. With it went the ability to build oceangoing canoes. An island civilization that had navigated thousands of miles of open Pacific to arrive was now stranded. Deep-sea fish and porpoise, once dietary staples, disappeared from the archaeological record after the forest vanished.

Soil erosion accelerated without tree cover. Crop yields declined. The population, which may have peaked at 15,000, contracted sharply. The cultural upheaval that followed, including the toppling of the moai, is inseparable from the ecological collapse that began with the loss of the palms.

## What Remains

The Rapa Nui palm left behind only fossils. Petrified root casts are visible in the volcanic rock at several sites. Palm nut shells, some still bearing rat tooth marks, have been recovered from caves and middens. No living specimen exists, and no close enough relative survives to attempt restoration. The island that once rustled with forest canopy is now largely grassland, its treelessness so total that visitors often assume it was always barren. It was not. The silence of the wind across open grass is the sound of a forest that was spent.`,
  quickFacts: {
    'Species': 'Paschalococos disperta',
    'Closest Living Relative': 'Chilean wine palm (Jubaea chilensis)',
    'Height': 'Over 15 meters',
    'Duration on Island': '~35,000+ years (pollen record)',
    'Human Arrival': '~1200 CE',
    'Extinction': '~1650 CE',
    'Key Evidence': 'Pollen cores, petrified root casts, charred nut shells',
  },
  connections: [
    { slug: 'dodo', relationship: 'Both were island species destroyed by the arrival of humans and introduced animals, their loss emblematic of ecological collapse' },
    { slug: 'mauritius-dodo-ecosystem', relationship: 'Both illustrate how the extinction of one keystone species cascades through an entire island ecosystem' },
  ],
  sources: [
    { title: 'Collapse: How Societies Choose to Fail or Succeed', author: 'Jared Diamond', year: 2005 },
    { title: 'The Statues That Walked', author: 'Terry Hunt and Carl Lipo', year: 2011 },
    { title: 'Late Quaternary Environments of Easter Island', author: 'John Flenley and Paul Bahn', year: 2003 },
  ],
};
