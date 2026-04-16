import type { Entry } from '../../types';

export const aristotleOnPoets: Entry = {
  slug: 'aristotle-on-poets',
  name: 'Aristotle\'s On Poets',
  tagline: 'A three-book dialogue by Aristotle about poetry, performed as conversation rather than lecture. Diogenes Laertius catalogued it among 145 titles. Cicero praised its style as "a river of gold." Every word of it is gone.',
  category: 'culture',
  subcategory: 'Lost Philosophical Works',
  lastKnownYear: 'c. 322 BCE',
  lastKnownLocation: 'Athens, Lyceum',
  coordinates: [37.98, 23.77],
  region: 'Ancient Greece',
  status: 'extinct',
  cause: 'Aristotle\'s exoteric dialogues ceased to be copied after his school preferred the lecture-style treatises; lost by late antiquity',
  body: `## The Aristotle We Did Not Get

The Aristotle we read today is dense, technical, and famously unpolished. The Metaphysics, the Physics, the Nicomachean Ethics: these are lecture notes, working papers from his school, the Lyceum. They were called the esoteric works, for use inside the school.

Aristotle also wrote a second, entirely different body of work: the exoteric writings, polished literary dialogues meant for educated readers outside the school. Cicero, who had read them, compared their prose to "a river of gold" (flumen orationis aureum). These were the books that made Aristotle famous in his own lifetime. Every single one of them is lost.

Diogenes Laertius preserved a catalogue of Aristotle's writings that lists roughly 145 separate titles. Among them, in the earliest section devoted to dialogues, appears Peri Poieton, On Poets, in three books.

## What On Poets Contained

The surviving Poetics is an esoteric treatise, a compact analytical work on tragedy and epic. On Poets was something different. It was a dialogue, a literary form Aristotle used for works directed at a general audience, with named speakers exchanging views. Fragments and references preserved by later authors give hints of its content. Favorinus, quoted by Diogenes Laertius, reports that in the first book Aristotle asserted that Alexamenus of Styra or Teos was the first person ever to write philosophical dialogues, earlier even than Plato.

Other fragments refer to the origins of tragedy and comedy, the lives and personalities of individual poets including Homer and Empedocles, and the nature of poetic inspiration. The three-book format suggests a far wider scope than the Poetics: a full literary history, with biographical, critical, and theoretical components, presented as conversation.

## How the Dialogues Vanished

When Aristotle died in 322 BCE, the Lyceum preserved his esoteric lecture notes carefully. The dialogues, circulating among educated readers around the Greek world, received less institutional protection. They were famous books, but their survival depended on ordinary commercial copying.

Over the centuries, as philosophical fashion shifted toward the technical treatises that could be used for teaching, the exoteric works were copied less often. By the early medieval period, almost all of them had disappeared. Neoplatonist commentators in late antiquity still quoted the dialogues occasionally, but by the ninth century, when Byzantine scholars began systematically transferring Greek literature to parchment codices, the Aristotelian dialogues were not among the texts that survived the transition.

## The Absence at the Center of Criticism

The loss of On Poets is a particular wound for the history of literary criticism. The Poetics we have is a fragment of a larger project: we possess only the first book, which treats tragedy, and lost the second book, on comedy, made famous by Umberto Eco's The Name of the Rose. On Poets was a separate, parallel work, likely broader in ambition and more accessible in style. It would have shown us Aristotle thinking about poetry not as a scientist dissecting a specimen but as a literary artist writing about other literary artists. We have his framework. We have lost his voice.`,
  quickFacts: {
    'Author': 'Aristotle (384-322 BCE)',
    'Form': 'Three-book dialogue',
    'Greek Title': 'Peri Poieton',
    'Cicero\'s Judgment': '"A river of gold" (flumen orationis aureum)',
    'Surviving Fragments': 'Brief quotations in Diogenes Laertius, Athenaeus, and others',
    'Likely Loss Date': 'Ceased to be copied by c. 500-800 CE',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Alexandria held the major Greek literary archive where Aristotle\'s dialogues would have been preserved and copied' },
    { slug: 'greek-theatrical-masks', relationship: 'Both are lost pieces of the ancient Greek theatrical tradition Aristotle was writing about' },
    { slug: 'democritus-mikros-diakosmos', relationship: 'Both are major philosophical works catalogued by Diogenes Laertius but lost in the transition from papyrus to parchment' },
  ],
  sources: [
    { title: 'Lives of Eminent Philosophers, Book V: Aristotle', author: 'Diogenes Laertius', year: 230 },
    { title: 'Aristotle: The Growth and Structure of His Thought', author: 'G. E. R. Lloyd', year: 1968 },
    { title: 'Aristotle\'s Lost Works and the Dialogues That Vanished', url: 'https://spokenpast.com/articles/aristotles-lost-works-dialogues-vanished/' },
  ],
};
