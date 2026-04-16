import type { Entry } from '../../types';

export const sapphoNineBooks: Entry = {
  slug: 'sappho-nine-books',
  name: 'Sappho\'s Nine Books',
  tagline: 'The ancient world revered Sappho as one of its nine great lyric poets. Alexandrian scholars compiled her complete works into nine books, an estimated 10,000 lines. About 650 lines survive, almost all as fragments. New papyri are still being found.',
  category: 'culture',
  subcategory: 'Lost Literary Corpus',
  lastKnownYear: 'c. 600 BCE',
  lastKnownLocation: 'Mytilene, Lesbos (composition); Alexandria (Hellenistic canonization)',
  coordinates: [39.11, 26.555],
  region: 'Ancient Greece',
  status: 'extinct',
  cause: 'Papyrus rolls not copied onto parchment codices in the transition of late antiquity; declining demand, shifting literary taste, and possibly Christian moral objections accelerated attrition',
  body: `## The Tenth Muse

Sappho of Mytilene wrote in the late seventh century BCE, on the island of Lesbos in the eastern Aegean. Within her own lifetime she was famous enough that the sculptor may have made images of her. Within a generation she was canonized as one of the nine great lyric poets of Greece, the only woman on the list. Plato, centuries later, called her the tenth Muse. Her technical mastery was regarded as definitive: the stanzaic form she used is still called the Sapphic stanza today.

Around the third or second century BCE, scholars at the Library of Alexandria compiled her complete works into a standard edition of nine books, probably organized by meter. Conservative modern estimates put the original corpus at around ten thousand lines of poetry. It was among the most prestigious literary texts in the Greek-speaking world for the better part of a millennium.

## What Survives

Approximately 650 lines survive today, meaning roughly 93 percent of her poetry is lost. Of what survives, most consists of very short fragments — a line, a phrase, sometimes a single word — quoted by ancient grammarians and metricians because they illustrated some point about Aeolic dialect or rare meter. Only one poem, the "Hymn to Aphrodite," survives complete, preserved by Dionysius of Halicarnassus in a treatise on rhetoric. Two or three others are substantially whole.

The rest of what we have has come from papyri. Starting in the late nineteenth century, excavators at Oxyrhynchus in Egypt pulled thousands of papyrus fragments from ancient trash heaps, including dozens of scraps of Sappho. New finds continue to appear. In 2004 a papyrus fragment was identified containing a previously unknown complete Sappho poem on the theme of old age (the "Tithonus poem"), and in 2014 five more poems surfaced from a private collection, including the "Brothers Poem" and the "Kypris Poem," though the provenance of some of these has since become controversial.

## Why They Vanished

The mechanism of loss was gradual rather than violent. Papyrus rolls need recopying every few centuries, or the rolls decay. Between roughly the fourth and ninth centuries CE, as the codex replaced the roll and parchment replaced papyrus, each individual text had to be actively chosen for transcription. Texts that were widely taught in schools (Homer, some of Euripides, some Plato) got copied. Texts that were difficult, marginal, or out of literary fashion did not.

Sappho had several strikes against her in the new environment. Her Aeolic dialect was difficult for post-classical readers. Her lyric meters did not work in the musical traditions of the medieval Mediterranean. Her poetic subject matter — intense emotional and erotic relationships between women — was increasingly uncongenial to Christian moral frameworks. By the ninth century, when Byzantine scholars had largely finished the transition from papyrus to parchment, Sappho was not among the authors they saved.

## The Continuing Excavation

Every decade or two, a new scrap of Sappho emerges from an Egyptian papyrus collection. Each one adds a line or two to a body of work that we know was twenty times larger than what we hold. The Oxyrhynchus site has not been fully published after 130 years of excavation; more Sappho is almost certainly still in the drawers. The most famous woman poet of antiquity exists today as an archaeological rescue project, one line at a time.`,
  quickFacts: {
    'Poet': 'Sappho of Mytilene (c. 630-570 BCE)',
    'Alexandrian Edition': 'Nine books, probably organized by meter',
    'Estimated Original Lines': '~10,000',
    'Surviving Lines': '~650',
    'Complete Poems Surviving': 'One (Hymn to Aphrodite), plus two or three nearly complete',
    'Main Source of Fragments': 'Papyri from Oxyrhynchus, Egypt',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Sappho\'s nine-book Alexandrian edition was produced at the Library and would have been among its most prestigious holdings' },
    { slug: 'aristotle-on-poets', relationship: 'Both are major works of Greek literature that survived only as fragments after the papyrus-to-parchment transition' },
    { slug: 'greek-music-modes', relationship: 'Sappho\'s poems were sung to specific musical modes, and both the melodies and most of the words are now lost' },
  ],
  sources: [
    { title: 'Poetry of Sappho', url: 'https://en.wikipedia.org/wiki/Poetry_of_Sappho' },
    { title: 'If Not, Winter: Fragments of Sappho', author: 'Anne Carson', year: 2002 },
    { title: 'The Newest Sappho: P. Sapph. Obbink and P. GC inv. 105', author: 'Anton Bierl and Andre Lardinois, eds.', year: 2016 },
  ],
};
