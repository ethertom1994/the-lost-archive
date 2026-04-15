import type { Entry } from '../../types';

export const protoElamite: Entry = {
  slug: 'proto-elamite',
  name: 'Proto-Elamite Script',
  tagline: 'One of the oldest writing systems ever created, used for barely two centuries, and still unread after five thousand years.',
  category: 'language',
  subcategory: 'Undeciphered Scripts',
  lastKnownYear: '~2700 BCE',
  lastKnownLocation: 'Susa, Iran (and surrounding sites)',
  coordinates: [32.19, 48.24],
  region: 'Middle East',
  status: 'extinct',
  cause: 'Abandoned after roughly 200 years of use, replaced by cuneiform-based systems; underlying language and culture remain unidentified',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Shortest-Lived Script

Around 3100-2900 BCE, in the cities of what is now southwestern Iran, someone invented a writing system. Within two centuries, it was gone. Proto-Elamite is one of the oldest scripts in human history, roughly contemporary with the earliest Sumerian cuneiform and Egyptian hieroglyphs, and it holds a singular distinction: it is the shortest-lived writing system ever documented. It appeared, spread across a vast territory from Susa to sites near the Afghan border, and then vanished, replaced by the better-established cuneiform tradition of Mesopotamia.

Approximately 1,600 clay tablets inscribed in Proto-Elamite have been recovered, the majority from the ancient city of Susa. The script uses roughly 1,000 distinct signs, many of them numerical. Most inscriptions appear to be administrative: lists of commodities, counts of animals, records of transactions. This is bookkeeping at the dawn of civilization, and we cannot read it.

## Locked in Storage

One of the most frustrating aspects of Proto-Elamite studies is that a significant number of tablets remain unpublished. Major museum collections, particularly at the Louvre and the National Museum of Iran, hold Proto-Elamite tablets that have never been fully photographed, cataloged, or made available to researchers. The tablets sit in storerooms, their signs unread and their potential contributions to decipherment inaccessible.

In 2012, a project at the University of Oxford led by Jacob Dahl began using Reflectance Transformation Imaging (RTI) to create high-resolution digital images of Proto-Elamite tablets, making them available online for the first time. The project revealed previously unreadable signs on damaged tablets and corrected errors in earlier hand-drawn copies. But even with better images, the fundamental problem remains: without a bilingual text or knowledge of the underlying language, the script resists decipherment.

## What the Numbers Tell Us

The numerical signs in Proto-Elamite are partially understood. Scholars have identified several different counting systems used simultaneously, probably for different categories of goods: one system for grain, another for animals, another for discrete objects. This is consistent with the early Sumerian practice of using different number systems for different commodities, a feature that disappeared as writing systems matured.

The non-numerical signs remain opaque. They do not obviously derive from proto-cuneiform, the early Mesopotamian script used in the same period, though some scholars have proposed distant connections. The signs appear to be an independent invention, created by a culture that saw its Mesopotamian neighbors developing writing and decided to create its own system rather than borrow theirs.

## A Script That Walked Away

The disappearance of Proto-Elamite is almost as mysterious as its content. Around 2700 BCE, the script simply stops appearing. The cities that used it continued to exist. The culture did not collapse. The people of Elam eventually adopted cuneiform for their own language (Elamite), but there is no smooth transition from Proto-Elamite to Linear Elamite or Elamite cuneiform. The script was not evolved. It was abandoned, like a tool that no longer served its purpose, leaving behind 1,600 clay tablets that no one alive can read.`,
  quickFacts: {
    'Date Range': '~3100-2700 BCE',
    'Lifespan': '~200 years (shortest-lived known script)',
    'Corpus Size': '~1,600 clay tablets',
    'Sign Count': '~1,000 distinct signs',
    'Primary Site': 'Susa, southwestern Iran',
    'Underlying Language': 'Unknown (possibly related to Elamite)',
    'Status': 'Undeciphered (numerical signs partially understood)',
    'Major Collections': 'Louvre, National Museum of Iran',
  },
  connections: [
    { slug: 'cypro-minoan', relationship: 'Both are undeciphered scripts from the ancient world whose small corpora have frustrated decipherment for generations' },
    { slug: 'sumerian', relationship: 'Roughly contemporary writing systems from neighboring civilizations; Sumerian cuneiform ultimately outlasted and replaced Proto-Elamite' },
    { slug: 'quipu', relationship: 'Both are non-alphabetic information systems used for administrative record-keeping that remain only partially understood' },
  ],
  sources: [
    { title: 'Proto-Elamite Tablet Online Corpus', author: 'Jacob Dahl, University of Oxford', year: 2012 },
    { title: 'The Proto-Elamite Texts from Tepe Yahya', author: 'Peter Damerow & Robert K. Englund', year: 1989 },
    { title: 'The Archaeology of Elam', author: 'D. T. Potts', year: 1999 },
    { title: 'Visible Language: Inventions of Writing in the Ancient Middle East and Beyond', author: 'Christopher Woods (ed.)', year: 2010 },
  ],
};
