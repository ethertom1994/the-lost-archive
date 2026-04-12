import type { Entry } from '../../types';

export const terracottaPaint: Entry = {
  slug: 'terracotta-paint',
  name: 'Terracotta Army Pigments',
  tagline: 'The Terracotta Warriors were painted in vivid color. The paint survives underground but disintegrates within minutes of exposure to air. We can watch the color vanish in real time.',
  category: 'material',
  subcategory: 'Unstable Pigments',
  lastKnownYear: '210 BCE',
  lastKnownLocation: 'Tomb of Qin Shi Huang, Xi\'an, Shaanxi Province, China',
  coordinates: [34.38, 109.28],
  region: 'East Asia',
  status: 'extinct',
  cause: 'Pigments bound with lacquer that dehydrates and curls away from the clay surface within minutes of exposure to dry air',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Color Beneath

The Terracotta Army that tourists see in Xi'an is grey. Row after row of life-sized clay soldiers in muted earth tones, impressive for their scale and individuality but monochrome. This is not how they were made. When the warriors were buried around 210 BCE in the mausoleum of Qin Shi Huang, they were painted in vivid colors: red and blue armor, pink faces, black hair, green and purple details. Each figure was a portrait in full color.

The paint survived underground for over 2,200 years, protected from light and air in the sealed burial pits. But when the pits were opened during excavation, beginning in 1974, the dry air of Shaanxi Province began to destroy the paint almost immediately.

## Fifteen Minutes

The deterioration is caused by the paint's binder. Qin-dynasty artisans applied mineral pigments (cinnabar for red, azurite for blue, malachite for green, bone white, and carbon black) over a base coat of lacquer made from the sap of the Chinese lacquer tree. This lacquer is hygroscopic: it requires moisture to remain stable. Underground, in the humid environment of the sealed pits, it stayed flexible for millennia.

Exposed to the dry air of the excavation, the lacquer dehydrates. As it dries, it contracts and curls, pulling away from the clay surface and flaking off. The process can take as little as fifteen minutes. Archaeologists who opened new sections of the pits watched the color literally fall off the figures as they stood there.

Early excavations in the 1970s and 1980s lost paint from hundreds of warriors before conservation techniques were developed to slow the deterioration. The grey army that visitors see is the army after the color was lost.

## The Conservation Race

German and Chinese conservators have developed treatments that can stabilize the lacquer and preserve the remaining paint. The primary technique involves applying a polyethylene glycol solution to the surface immediately upon exposure, which replaces the evaporating moisture and prevents the lacquer from curling. When applied quickly enough, the treatment works. Some recently excavated figures retain much of their original color.

But the treatment must be applied in real time, as the figure is uncovered. Any delay means lost paint. This has changed the pace of excavation: new sections are opened slowly, with conservation teams standing by. Large portions of the tomb complex remain deliberately unexcavated because the technology to preserve what's inside is not yet considered adequate.

## Still Waiting Underground

The main burial chamber of Qin Shi Huang's tomb has never been opened. Ancient texts describe an underground palace with rivers of mercury, a ceiling painted with constellations, and crossbow traps. Soil tests have confirmed elevated mercury levels in the mound. Whatever is inside has been sealed for 2,200 years.

The lesson of the paint is the reason the tomb stays closed. Opening the chamber would expose its contents to air. If the conservation technology isn't ready, the act of seeing would be the act of destroying. The paint on the warriors proved that. We know the color is there, under the ground, waiting. We just can't look at it yet without killing it.`,
  quickFacts: {
    'Date of Burial': '~210 BCE',
    'Original Colors': 'Red, blue, green, purple, pink, black, white',
    'Binder Material': 'Chinese lacquer tree sap (hygroscopic)',
    'Deterioration Speed': 'As fast as 15 minutes after air exposure',
    'Conservation Method': 'Polyethylene glycol applied immediately upon excavation',
    'Unexcavated': 'Main tomb chamber remains sealed to protect contents',
  },
  connections: [
    { slug: 'mummy-brown', relationship: 'Both involve pigments entangled with human remains and burial practices, raising questions about what we sacrifice to preserve or study' },
    { slug: 'antikythera-mechanism', relationship: 'Both are ancient technologies found in remarkably preserved condition, revealing capabilities we didn\'t expect from their era' },
  ],
  sources: [
    { title: 'Conservation of the Polychrome Decoration on the Terracotta Army', author: 'Catharina Blänsdorf et al.', year: 2006 },
    { title: 'The Terracotta Warriors: The Secret Codes of the Emperor\'s Army', author: 'Maurice Cotterell', year: 2003 },
    { title: 'Preserving the Polychromy of the Terracotta Army', author: 'Zhou Tie et al.', year: 2011 },
  ],
};
