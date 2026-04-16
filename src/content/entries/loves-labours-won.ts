import type { Entry } from '../../types';

export const lovesLaboursWon: Entry = {
  slug: 'loves-labours-won',
  name: 'Love\'s Labour\'s Won',
  tagline: 'Francis Meres listed it in 1598 as one of Shakespeare\'s comedies. A London stationer\'s list from 1603 confirms it was printed in quarto. And then it vanishes. No copy has ever been found. Either a lost play, or a lost title for one we think we already have.',
  category: 'culture',
  subcategory: 'Lost Literature',
  lastKnownYear: 1603,
  lastKnownLocation: 'London, England',
  coordinates: [51.51, -0.13],
  region: 'Europe',
  status: 'extinct',
  cause: 'Early modern quartos were printed in small runs and treated as disposable; if no prompt-book or collected edition captured the text, the entire work could disappear within a generation',
  body: `## Two Pieces of Evidence

There are exactly two independent sixteenth-century mentions of a Shakespeare play called *Love's Labour's Won*.

The first is in *Palladis Tamia: Wit's Treasury*, a 1598 commonplace book by the clergyman and schoolmaster Francis Meres. In a passage praising Shakespeare, Meres lists twelve plays as proof of his range: six comedies and six tragedies. Among the comedies he names *Gentlemen of Verona*, *Errors*, *Love labors lost*, *Love labours wonne*, *Midsummer night dreame*, and *Merchant of Venice*. For centuries, this was the only mention, and scholars speculated that *Love's Labour's Won* must be an alternate title for an existing play — perhaps *Much Ado About Nothing* or *The Taming of the Shrew*.

Then in 1953 the London antiquarian book dealer Solomon Pottesman found a second piece of evidence: a fragment of a stationer's list dated August 1603, belonging to the bookseller Christopher Hunt of Exeter. The list records, among other titles in stock, *marchant of vennis*, *taming of a shrew*, *loves labor lost*, and *loves labor won*. That both *Taming of a Shrew* and *Love's Labour's Won* appear separately on the same list makes it very difficult to argue that *Love's Labour's Won* is merely an alternate name for a play we already have.

## A Printed Book With No Surviving Copies

The Hunt list describes *Love's Labour's Won* as a quarto — a printed book. Early modern quartos were cheap, flimsy productions, typically printed in runs of perhaps 800 to 1,200 copies. They were sold unbound, read until they fell apart, and thrown away. The survival rate of any given Elizabethan quarto is shockingly low; there are Shakespeare quartos that survive in only one or two copies, and there must be others for which every single copy has been lost.

If *Love's Labour's Won* really was printed in quarto by 1603, then copies existed, and they were sold in a London bookshop. But no copy has ever surfaced in any library, private collection, or archive in the 425 years since. The 1623 First Folio, which attempted to gather Shakespeare's plays, did not include it. This is either because Heminges and Condell did not have a manuscript, because the play was thought to be a duplicate of something they did include, or because the script had already been lost in the years since Shakespeare's death in 1616.

## The Shape of the Absence

What kind of play was it? From the title alone, critics have guessed at a sequel to *Love's Labour's Lost*, perhaps resolving the melancholy ending of that play, where the lovers are separated and asked to wait a year. That hypothesis fits the pattern of Shakespearean "answer plays" like *Henry IV* Part 2. But it is only a guess. The script may have resembled *Much Ado About Nothing*, or *All's Well That Ends Well*, or something with no surviving parallel at all.

*Love's Labour's Won* is the classic case of a work known only by its cover. It is not mythical — there is documentary evidence that it existed, was performed, was printed, and was sold. But the entire text has disappeared, leaving only the title to haunt the Shakespeare canon like a vacancy in a bookshelf.`,
  quickFacts: {
    'Author': 'Attributed to William Shakespeare',
    'First Reference': 'Francis Meres, Palladis Tamia (1598)',
    'Second Reference': 'Christopher Hunt stationer\'s list, August 1603',
    'Format': 'Printed quarto (per 1603 list)',
    'Copies Surviving': 'Zero',
    'Included in First Folio (1623)': 'No',
  },
  connections: [
    { slug: 'cathar-texts', relationship: 'Both are cases where the existence of a text is well attested but no copy survives, a common pattern in pre-industrial book culture' },
    { slug: 'library-of-alexandria', relationship: 'Both represent texts known only by title and ancient list, their content irretrievable' },
    { slug: 'original-kabuki', relationship: 'Both belong to popular theatrical forms whose scripts were treated as working documents rather than literature' },
    { slug: 'vitrum-flexile', relationship: 'Both are cases where contemporary witnesses describe something that vanishes without leaving physical evidence' },
  ],
  sources: [
    { title: 'Palladis Tamia: Wit\'s Treasury', author: 'Francis Meres', year: 1598 },
    { title: 'The Reign of Elizabeth I: Court and Culture in the Last Decade', author: 'John Guy', year: 1995 },
    { title: 'Love\'s Labour\'s Won (Lost Plays Database)', url: 'https://lostplays.folger.edu/Love%27s_Labour%27s_Won' },
    { title: 'Love\'s Labour\'s Won (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Love%27s_Labour%27s_Won' },
  ],
};
