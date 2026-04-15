import type { Entry } from '../../types';

export const stonehengeAcoustics: Entry = {
  slug: 'stonehenge-acoustics',
  name: 'Stonehenge Acoustics',
  tagline: 'The complete stone circle was an open-air concert hall. The ruin we visit today is acoustically dead by comparison.',
  category: 'sound',
  subcategory: 'Architectural Acoustics',
  lastKnownYear: '~1600 BCE',
  lastKnownLocation: 'Salisbury Plain, England',
  coordinates: [51.1789, -1.8262],
  region: 'Europe',
  status: 'extinct',
  cause: 'Millennia of stone removal, collapse, and weathering destroyed the acoustic properties that depended on the complete circular arrangement',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## A Circle Designed to Be Heard

Modern visitors to Stonehenge encounter a broken ring of megaliths, impressive but incomplete. Roughly half the original stones are missing, toppled, or reduced to stumps. What few visitors realize is that the monument they see is not merely visually diminished but acoustically gutted. The complete stone circle, with its continuous ring of sarsen uprights capped by lintels, created wave-interference patterns that amplified and shaped sound in ways the current ruin cannot reproduce.

Researchers from the University of Salford built a 1:12 scale acoustic model of Stonehenge as it would have appeared around 2200 BCE, with all 157 stones in place. Their measurements demonstrated that the complete monument significantly amplified speech and music within the circle while reducing sound leakage to the outside. The effect was not subtle. Standing inside the full circle, a voice or drum would have resonated with a warmth and presence impossible in open air, while observers just beyond the outer ring would have heard comparatively little.

## How Stone Becomes Sound

The acoustic behavior arose from the geometry itself. The continuous ring of sarsen stones, each roughly four meters tall and two meters wide, created a curved reflective surface. Sound waves bouncing between opposing stones produced standing waves and constructive interference at specific frequencies. The lintels connecting the tops of the uprights added a ceiling effect, trapping sound energy and directing it inward and downward toward listeners at ground level.

The inner horseshoe of taller trilithons created a secondary acoustic environment, a focal zone where reflected sound from the outer circle converged. This is consistent with archaeological evidence placing ritual activity at the center of the monument. Whatever ceremonies occurred there, they occurred in a space engineered, whether by intention or accumulated tradition, to make human voices and instruments sound larger than life.

## The Bluestone Question

The smaller bluestones, transported from Wales over 240 kilometers away, add another acoustic dimension. Research by the Royal College of Art found that certain bluestones from the Preseli Hills are "ringing rocks," producing clear, bell-like tones when struck. This lithophones theory suggests the bluestones may have been selected partly for their sonic properties. The effort of transporting them such an extraordinary distance makes more sense if they were valued not just as sacred objects but as musical instruments.

## What Remains

Today's Stonehenge retains almost none of these acoustic properties. With roughly half the outer circle missing and several trilithons collapsed, the reflective geometry is broken. Sound passes through the gaps and dissipates across Salisbury Plain. The monument is a visual icon but an acoustic ghost. We see the stones. We cannot hear what they once made possible: a space where ritual speech carried the authority of amplification, where drums reverberated between megaliths, and where the boundary between inside and outside was drawn not just in stone but in sound.`,
  quickFacts: {
    'Date of Full Circle': '~2500-1600 BCE',
    'Original Stone Count': '~157 stones (sarsen, bluestone, and Welsh stones)',
    'Surviving Stones': 'Roughly half the original arrangement',
    'Acoustic Effect': 'Sound amplification inside, reduction outside the circle',
    'Research Method': '1:12 scale acoustic model (University of Salford)',
    'Bluestone Origin': 'Preseli Hills, Pembrokeshire, Wales (~240 km away)',
    'Ringing Rocks': 'Some bluestones produce bell-like tones when struck',
  },
  connections: [
    { slug: 'hypogeum-oracle', relationship: 'Both are prehistoric structures whose acoustic properties appear deliberately engineered for ritual effect' },
    { slug: 'globe-acoustics', relationship: 'Both demonstrate how architectural spaces can be designed to transform the human voice, one through stone geometry, the other through timber' },
    { slug: 'antikythera-mechanism', relationship: 'Both challenge assumptions about the technological sophistication of ancient peoples' },
  ],
  sources: [
    { title: 'Acoustic Simulation of Stonehenge', author: 'Trevor Cox et al., University of Salford', year: 2020 },
    { title: 'Stonehenge as a Sound Space', author: 'Rupert Till', year: 2009 },
    { title: 'Landscape of the Megaliths', author: 'Mike Parker Pearson', year: 2012 },
    { title: 'The Preseli Bluestones and the Question of Human versus Glacial Transport', author: 'Richard Bevins et al.', year: 2014 },
  ],
};
