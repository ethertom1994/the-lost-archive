import type { Entry } from '../../types';

export const babylonianCalculus: Entry = {
  slug: 'babylonian-calculus',
  name: 'Babylonian Trapezoid Calculus',
  tagline: 'Babylonian astronomers used integral calculus to track Jupiter 1,500 years before Europeans reinvented it — hidden in cuneiform tablets no one could read.',
  category: 'technology',
  subcategory: 'Mathematics',
  lastKnownYear: '~100 BCE',
  lastKnownLocation: 'Babylon, Mesopotamia',
  coordinates: [32.54, 44.42],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Cuneiform literacy died out; mathematical tradition ended with the decline of Babylonian temple astronomy',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Tablets No One Could Read

In the archives of the British Museum sit five small clay tablets covered in cuneiform script, cataloged and largely ignored for over a century. They were excavated from Babylonian sites in the nineteenth century, and for decades scholars assumed they contained routine astronomical tables — lists of planetary positions, perhaps, or records of celestial omens. The wedge-shaped impressions were dense, mathematical, and extremely difficult to interpret.

In 2002, Assyriologist Mathieu Ossendrijver began a systematic study of these tablets. Fourteen years later, in January 2016, he published a finding that sent shockwaves through the history of mathematics: the tablets showed Babylonian astronomers computing the distance traveled by Jupiter using the area under a velocity-time graph. They were performing integration — the core operation of calculus — fifteen centuries before Newton and Leibniz.

## Trapezoids in Clay

The method is elegant. The Babylonian astronomers plotted Jupiter's apparent velocity against time and computed the area of the resulting trapezoid to determine the total displacement. This is precisely the geometric technique that would later form the foundation of integral calculus. The tablets show the astronomers dividing the planet's motion into intervals, computing trapezoidal areas for each, and summing them.

What makes this especially remarkable is the level of abstraction. The Babylonians were not merely recording observations. They were constructing a mathematical model of planetary motion in an abstract velocity-time space — a conceptual leap that historians had assumed no culture achieved before medieval European and Islamic scholars.

## A Knowledge That Died Twice

The Babylonian mathematical tradition was among the most sophisticated of the ancient world. Their base-60 number system gave us the 360-degree circle and the 60-minute hour. Their algebraic techniques for solving quadratic equations predated comparable Greek methods by a millennium. But cuneiform literacy was always limited to a small class of scribes and priests. When Babylonian civilization declined under successive Persian, Greek, and Parthian rule, the scribal schools closed. By the first century CE, no one on Earth could read the tablets.

The mathematical concepts encoded in them were independently reinvented — first by medieval Indian and Islamic scholars who developed proto-calculus techniques, then by European mathematicians in the seventeenth century. Each reinvention was celebrated as original genius. The Babylonian precedent lay buried in museum drawers, locked in a script that required centuries of modern scholarship to decode.

## What Ossendrijver Found

Ossendrijver's breakthrough was recognizing that the tablets did not simply tabulate Jupiter's positions but computed velocity integrals geometrically. The distinction matters profoundly. Tabulation is bookkeeping. Geometric integration is mathematical reasoning of the highest order — the insight that the area under a curve represents accumulated change.

The discovery forced a fundamental reassessment. Calculus was not invented once, in seventeenth-century Europe. It was invented, lost, and reinvented across millennia — a pattern that raises an uncomfortable question about how much other ancient mathematics remains locked in undeciphered texts or destroyed archives.`,
  quickFacts: {
    'Date of Tablets': '350-50 BCE',
    'Discovered By': 'Mathieu Ossendrijver, 2016',
    'Years of Study': '14 years analyzing cuneiform tablets',
    'Method': 'Trapezoid-area computation of velocity-time graph',
    'Subject': "Jupiter's apparent motion",
    'Prior Attribution': 'Technique credited to 14th-century European scholars',
    'Gap': '~1,500 years before European reinvention',
  },
  connections: [
    { slug: 'kerala-calculus', relationship: 'Both demonstrate that calculus was independently developed long before Newton and Leibniz, in cultures whose contributions were historically overlooked' },
    { slug: 'antikythera-mechanism', relationship: 'Both reveal ancient astronomical computation far more sophisticated than previously believed' },
    { slug: 'library-of-alexandria', relationship: 'Both represent ancient mathematical knowledge lost when the civilizations that produced them declined' },
  ],
  sources: [
    { title: 'Ancient Babylonian astronomers calculated Jupiter\'s position from the area under a time-velocity graph', author: 'Mathieu Ossendrijver', year: 2016, url: 'https://doi.org/10.1126/science.aad8085' },
    { title: 'Babylonian astronomers used geometry to track Jupiter', author: 'Nature News', year: 2016, url: 'https://www.nature.com/articles/nature.2016.19182' },
  ],
  relatedMedia: [
    { type: 'article', title: 'Babylonians tracked Jupiter with fancy math, tablet reveals', url: 'https://www.science.org/content/article/babylonians-tracked-jupiter-fancy-math-tablet-reveals', description: 'Science coverage of Ossendrijver\'s 2016 discovery' },
  ],
};
