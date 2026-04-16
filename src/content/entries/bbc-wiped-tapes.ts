import type { Entry } from '../../types';

export const bbcWipedTapes: Entry = {
  slug: 'bbc-wiped-tapes',
  name: 'The BBC Wiped Tapes',
  tagline: 'Between roughly 1967 and 1978, the BBC systematically erased thousands of master tapes of its own broadcasts to reuse the videotape. Entire seasons of early Doctor Who, the BBC version of Dad\'s Army pilots, episodes of Top of the Pops with performances by The Beatles and Jimi Hendrix, and a substantial share of British television\'s first two decades were destroyed as a matter of routine cost-saving.',
  category: 'culture',
  subcategory: 'Broadcast Media',
  lastKnownYear: 1978,
  lastKnownLocation: 'BBC Engineering archives, London, United Kingdom',
  coordinates: [51.52, -0.14],
  region: 'Europe',
  status: 'extinct',
  cause: 'Institutional policy of wiping videotape masters for reuse; lack of rebroadcast rights; videotape cost; view of broadcast television as ephemeral',
  imageUrl: undefined,
  body: `## The Policy

In the 1960s and early 1970s, broadcast-quality two-inch quadruplex videotape was expensive. A single blank reel cost, by the BBC's own internal estimate, roughly the price of a new Mini automobile. Management reasoned that once a programme had aired — and, where applicable, been repeated — its tape had no further commercial value. The tape was an expensive consumable. Programmes stored on it could be wiped, and the blank reel returned to production for the next broadcast.

This policy, applied across BBC departments from approximately 1967 to 1978, destroyed or overwrote tens of thousands of hours of original programming. It was not malice. No one at the BBC sat down to erase the cultural record. The culture was simply considered ephemeral by the institution that produced it.

## What Was Destroyed

The scale is difficult to comprehend. Of the first 253 episodes of Doctor Who, which aired between 1963 and 1969, every master videotape was wiped. Ninety-five of those episodes are currently missing from all sources; they survive, if at all, only as off-air audio recorded by fans at home, or as 16mm film copies shipped overseas for foreign broadcasters that later returned to Britain decades later.

Episodes of Top of the Pops from the 1960s containing only live performances by the Beatles, the Rolling Stones, Jimi Hendrix, and David Bowie were erased. The 1960s comedy series Not Only... But Also, starring Peter Cook and Dudley Moore, survives only in fragments because Peter Cook himself tried and failed to buy the master tapes before they were wiped. The entire first episode of Dad's Army, in which the cast recorded a different opening sequence than later broadcasts, exists now only in a 16mm film copy found in a private collection. Early episodes of Monty Python's Flying Circus were scheduled for wiping in 1971 until Terry Jones, tipped off by a BBC contact, personally smuggled the tapes out and copied them onto a domestic VCR in his garage.

## What Survived by Accident

The material that survived did so almost entirely by accident. Film prints made for sale to foreign broadcasters in Nigeria, Australia, Canada, or the United States occasionally turned up decades later in their overseas archives, as television companies there had different storage policies. Amateur audio recordings made by fans pointing reel-to-reel tape recorders at their televisions preserved at least the sound of missing Doctor Who episodes. A handful of junior BBC engineers quietly took tapes home rather than wiping them, in violation of policy, and returned them to the archive decades later.

A few tapes still occasionally surface. In 2011 and 2013, previously missing Doctor Who episodes were recovered from a Nigerian television studio and returned to the BBC. Most, however, are considered permanently lost.

## What Broadcast Television Lost

The wipe era ended around 1978 when it became clear that home video, repeat broadcasts, and the international syndication market made archival of masters commercially valuable. But the decade-plus gap it created in British broadcast history is, by the BBC's own admission, irreparable. Tens of thousands of hours of first-run drama, comedy, news, documentary, and musical performance from the early years of television — a medium that had been invented in Britain only thirty years earlier — were erased by the institution that produced them.

The wiped tapes are the largest single deliberate loss of cultural material in late-twentieth-century broadcasting, and it was carried out not by censors but by accountants.`,
  quickFacts: {
    'Policy period': 'Approximately 1967-1978',
    'Doctor Who episodes missing': '95 of 253 (1963-1969 era)',
    'Other notable losses': 'Early Top of the Pops, Not Only... But Also, original Dad\'s Army pilot, much of 1960s BBC drama',
    'Primary cause': 'Reuse of two-inch videotape for cost savings',
    'Survival route': 'Overseas 16mm film prints, fan audio recordings, private collections',
    'Recovery ongoing': 'Occasional episode recoveries continue into the 2020s',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both are cases of institutional cultural records destroyed not by invasion but by routine decisions over time' },
    { slug: 'kodachrome', relationship: 'Both are 20th-century mass-media formats whose material instability or institutional neglect has produced major losses of visual culture' },
    { slug: 'cathar-texts', relationship: 'Both are bodies of cultural production deliberately destroyed by the institutions that had custody of them, though for very different reasons' },
  ],
  sources: [
    {
      title: 'Doctor Who missing episodes — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Doctor_Who_missing_episodes',
    },
    {
      title: 'Why are some Doctor Who episodes missing? — BBC',
      url: 'https://www.doctorwho.tv/news-and-features/why-are-some-doctor-who-episodes-missing',
    },
    {
      title: 'Wiped! Doctor Who\'s Missing Episodes',
      author: 'Richard Molesworth',
      year: 2013,
    },
    {
      title: 'Doctor Who\'s Missing Episodes and the Changing Value of Television — University of Warwick',
      url: 'https://warwick.ac.uk/newsandevents/knowledgecentre/arts/film-tv/doctor-who-missing-episodes/',
    },
  ],
};
