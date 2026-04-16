# AUDIT_REPORT.md

## Phase 1: Identified 64 new entries from commit e9babcf

### Prehistory (<3000 BCE) (9)
- atlit-yam (-5000)
- cave-lion (-11900)
- denisovan-culture (-48000)
- irish-elk (-5700)
- lake-agassiz (-6200)
- lomekwi-toolmakers (-3300000)
- megatherium (-10600)
- sundaland (-5000)
- woolly-rhinoceros (-11900)

### Ancient (3000 BCE - 500 CE) (13)
- aristotle-on-poets (c. 322 BCE)
- democritus-mikros-diakosmos (c. 370 BCE)
- eleusinian-mysteries (392)
- epicurus-on-nature (c. 270 BCE)
- heraclitus-on-nature (c. 480 BCE)
- megasthenes-indica (c. 290 BCE)
- meroitic-language (c. 450 CE)
- mithraic-mysteries (c. 400 CE)
- nok-culture (c. 400 CE)
- persepolis-archives (-330)
- qin-book-burning (-213)
- sappho-nine-books (c. 600 BCE)
- sybaris (-510)

### Medieval (500-1500) (10)
- an-lushan-libraries (763)
- bobbio-library (1492)
- chimu-hydraulics (1470)
- great-zimbabwe-masonry (1450)
- heian-gagaku-repertoire (1185)
- maragha-observatory (1339)
- merv-libraries (1221)
- pratyabhijna-vivriti (1400)
- samarqand-observatory (1449)
- trobairitz-melodies (1270)

### Early Modern (1500-1800) (13)
- arioi-society (1797)
- cluny-library (1500)
- huron-feast-of-dead (1650)
- jussieu-herbarium (1771)
- kilwa-chronicle (1505)
- loves-labours-won (1603)
- maya-codex-burning (1562)
- natchez-language (1729)
- sapi-ivory (1545)
- taino-cohoba (1550)
- timucua-language (1767)
- uraniborg-instruments (1728)
- vivaldi-lost-operas (1741)

### Industrial (1800-1945) (10)
- booming-ben (1932)
- cleopatra-1917 (1937)
- crystal-palace (1936)
- guadalupe-caracara (1900)
- louvain-library (1914)
- pink-headed-duck (1935)
- rocky-mountain-locust (1902)
- ryukyu-pigeon (1936)
- schomburgk-deer (1938)
- yuanmingyuan (1860)

### Modern (1945-present) (9)
- bbc-wiped-tapes (1978)
- chinese-paddlefish (2003)
- dura-language (2008)
- florida-acropora (2023)
- mesopotamian-marshes (2003)
- poouli (2004)
- red-dye-no-2 (1976)
- saturn-v-craft (1970)
- splendid-poison-frog (1992)

## Phase 2: Dead Sources

7 parallel subagents verified every URL in `sources` and `relatedMedia` for all 64 entries (≈140 URLs total). 403 responses were re-confirmed via WebSearch and treated as OK when the page genuinely existed (anti-bot blocks).

### Aggregate counts
- URLs verified OK: ~135
- URLs replaced (live but pointing wrong / outdated host): 2
- Source metadata corrected (wrong author/year, wrong specific Wikipedia article): 3
- Sources removed entirely: 0
- Entries flagged for removal: 0

### Specific changes

**meroitic-language.ts** (line 52) — author correction
- Before: `author: 'John Lawton'`
- After: `author: 'Krzysztof Grzymski'`
- The Saudi Aramco World article is by Grzymski, not Lawton (verified on the page itself).

**persepolis-archives.ts** (line 51) — host renamed, URL updated
- Before: `'Oriental Institute, University of Chicago' / oi.uchicago.edu/...`
- After: `'Institute for the Study of Ancient Cultures, University of Chicago' / isac.uchicago.edu/research/projects/persepolis-fortification-archive`
- The Oriental Institute was renamed; old URL 302-redirects to the new host.

**sybaris.ts** (line 51) — wrong author/year for the cited article
- Before: `author: 'Froelich Rainey and C. M. Lerici', year: 1967`
- After: `author: 'Froelich Rainey', year: 1969`
- The Penn Museum *Expedition* online article at that URL is solely Rainey 1969; the 1967 citation conflated it with the separate Rainey & Lerici book.

**sapi-ivory.ts** — Wikipedia URL pointed at the wrong artifact
- Before: `Saltcellar with Portuguese Figures` (a Bini-Portuguese piece, not Sapi)
- After: `Sapi-Portuguese Ivory Spoon` (genuinely Sapi)

**mesopotamian-marshes.ts** — NASA URL 301-redirect followed
- Before: `earthobservatory.nasa.gov/world-of-change/Iraq`
- After: `science.nasa.gov/earth/earth-observatory/world-of-change/mesopotamia-marshes`

## Phase 3: Date Verification

7 parallel subagents extracted every specific-date claim from `tagline`, `body`, `keyDate`, `keyDateLabel`, `lastKnownYear`, and `quickFacts`. Each was verified against encyclopedias, university dept pages, peer-reviewed sources. Wrong → corrected. Unverifiable → softened. Never fabricated a replacement specific.

### Aggregate counts (across all batches; two agents crashed before final report but committed their edits)
- Specific dates audited: ~150
- Verified as-stated: ~135
- Corrected to a documented different date: 11
- Softened (could not verify pinpoint): 9
- Patterns of overconfidence: see below

### Specific changes

**cave-lion.ts**
- Body: Chauvet panel "around 32,000 years ago" → "roughly 36,000 years ago" (recalibrated radiocarbon now puts Chauvet at ~36-37 kya)
- Body: "Boris and Sparta in 2017" → "Boris and Sparta recovered in the late 2010s" (cubs found in different years; Boris 2017, Sparta 2018)
- quickFacts Frozen Specimens: "(2015, 2017)" → "(2015 and the late 2010s)"

**atlit-yam.ts**
- "In 2011 a research team led by Maria Pareschi and Stefano Tinti" → "In 2007 a research team led by Maria Pareschi" (the Pareschi et al. Etna-tsunami paper is GRL 2007)

**persepolis-archives.ts**
- Tagline: "lost that night" → "lost in that fire" (Alexander occupied for months; not a single night)
- Body: "In January 330 BCE..." → "In early 330 BCE..." (Alexander arrived ~Jan 31 but burning was months later)
- quickFacts Destruction: "January 330 BCE" → "330 BCE"

**bobbio-library.ts** (largest correction set in this phase)
- Removed unsupported "1461 Pope Pius II Vatican transfer" claim (the 1461 inventory was a catalogue at Bobbio itself, not a transfer)
- Borromeo: "1618, 86 volumes" → "1606, ~77 manuscripts" (correct date+count per Ambrosiana records)
- Removed unsupported "1792 Turin transfer" claim
- Vatican transfer: corrected to "1618, at the request of Pope Paul V, 29 manuscripts"
- Updated cause and quickFacts to match

**cluny-library.ts**
- "On 4 August 1790" → "In 1790" (specific date was a pattern-match against the famous Aug 4, 1789 Night of August 4; no source documents the Cluny sack on a specific August date)

**kilwa-chronicle.ts**
- "Mahdali dynasty from its arrival in the mid-fourteenth century" → "from its rise in the late thirteenth century" (founded c. 1277 by al-Hasan ibn Talut; mid-14th was its zenith)

**maragha-observatory.ts**
- "Hamdallah Mustawfi described it around 1339" → "Mustawfi described the site in the mid-fourteenth century" (couldn't pin specific 1339 to Maragha; his works span 1329-30 to ~1340)

**merv-libraries.ts**
- "Mongol siege and sack in February 1221" → "in 1221" (Tolui arrived Feb but the actual sack was 7-10 April 1221)
- Body and quickFacts updated to match

**arioi-society.ts**
- Mamaia "appeared in the 1820s and was itself suppressed by 1833" → "emerged in the mid-1820s and was largely suppressed by the early 1840s" (1833 not corroborated)

**natchez-language.ts**
- Nancy Raven "born around 1874" → "born in the early 1870s" (specific 1874 not confidently sourced)

**ryukyu-pigeon.ts**
- "Pierre Louis Jouy ... obtained the first specimens in 1887 and the species was formally described by Stejneger in 1897" → "formally described by Stejneger in 1887 and named in honor of Jouy" (description year corrected; the 1897 was wrong)
- quickFacts Described: "1897 (Stejneger)" → "1887 (Stejneger)"

**uraniborg-instruments.ts**
- Brahe globe "ordered from Augsburg in 1570 and worked on continuously for twenty-five years" → "commissioned at Augsburg around 1570 and refined over many years" (specific 1570/25 years not corroborated)

**vivaldi-lost-operas.ts**
- *Argippo* reconstruction "In 2012, ... Ondrej Macek found recopied arias from it in a collection in Regensburg" → "In 2006, ... Ondřej Macek found a substantial portion of the score in the Thurn und Taxis archive at Regensburg; his Hofmusici ensemble gave the first modern performance at Prague Castle in 2008" (correct year and adds known performance fact)

**chinese-paddlefish.ts**
- "Three Gorges Dam, completed in 2003" → "Three Gorges Dam, whose reservoir began filling in 2003 and whose main structure was completed in 2006" (conflated reservoir filling with full completion)

**red-dye-no-2.ts** (most fabricated dates in a single entry — required largest rewrite)
- Tagline: "banned it on February 12, 1976" → "announced the ban on January 19, 1976" (no Feb 12 event in the record; FDA announced Jan 19, Federal Register notices Feb 10/13)
- Cause + body + quickFacts U.S. ban date + keyDate + keyDateLabel all updated to match
- Body: Soviet study "In 1970, researchers at the Soviet Union's Institute of Nutrition in Moscow" → "In 1971, Soviet researchers" (specific institute attribution not verifiable; year corrected)
- Body: 1971/1.2M-pounds figure → softened to "By the mid-1970s ... well over a million pounds a year" (specific 1971 figure unverified)
- Body: "ten-year-old Paul Hethmon" → "University of Tennessee student Paul Hethmon — who had founded the Society as a freshman in 1982" (Hethmon was an 18-year-old UT freshman in 1982, not a ten-year-old; significant factual error)

### Patterns of overconfidence
- Specific months on ancient destructions ("January 330 BCE", "February 1221") tend to be conflations of "campaign began in X" with "the destruction itself"
- Famous-date pattern-matching (Cluny "4 August 1790" echoing Night of August 4, 1789)
- Conflating "describer" and "namer" of biological species, and confusing specimen-collection year with formal-description year (ryukyu-pigeon)
- Conflating reservoir filling vs. dam completion (chinese-paddlefish)
- Library transfer histories prone to misdating (bobbio mixed up Borromeo 1606 with Vatican 1618)
- Modern era is the most strict: red-dye-no-2 contained the only outright fabricated event-date in the audit

## Phase 4: Named Entities

7 parallel subagents verified every named individual (researchers, rulers, scholars, "discoverers") and every named work (treatises, papers, named specimens, films) across all 64 entries.

### Aggregate counts
- Named persons checked: ~250
- Named works checked: ~80
- Removed unverifiable name attributions: 9
- Corrected wrong attributions (real person, wrong attribution): 4
- Entries flagged for human removal review: 0

### Specific changes

**aristotle-on-poets.ts** — wrong author for source citation
- Before: `author: 'G. E. L. Owen, ed.', year: 1965`
- After: `author: 'G. E. R. Lloyd', year: 1968`
- The book *Aristotle: The Growth and Structure of His Thought* is by Lloyd 1968, not Owen 1965.

**an-lushan-libraries.ts** — fabricated work title
- Removed unverifiable title "*Kaiyuan shumu*" for the Xuanzong-era 720s palace bibliography. (The actual Kaiyuan-era catalogue is "Qunshu sibu lu" under Yuan Xingchong; "Kaiyuan shumu" not attested.) Preserved the general claim and the 53,000-juan figure.

**heian-gagaku-repertoire.ts** — two unverifiable specifics
- Replaced fabricated treatise "*Rokudenshu*" with the documented thirteenth-century gagaku treatise *Kyokunsho* (1233, by Koma no Chikazane).
- Removed "Ono" from the named hereditary lineages list (Toyohara and Oga are attested Heian-era families; Ono is not corroborated as a historic gagaku lineage).

**arioi-society.ts** — invented mythological/historical specifics
- Removed unverified mountain "Tamaiti on Raiatea" (standard myth places Oro's descent on Mount Pahia, Bora Bora).
- Removed invented founder name "Urutaetae" as the first commissioned Arioi (Ellis/Oliver record the first chief as Hua-tua, not Urutaetae).

**natchez-language.ts** — fabricated residence
- Reworded the claim that Maturin Le Petit "lived among the Natchez in the 1720s." Le Petit was assigned to the Choctaw mission (1726) and wrote his 1730 letter on the Natchez from New Orleans based on reports, not from residence among them. Spelling corrected to standard "Maturin Le Petit" and his actual role clarified.

**vivaldi-lost-operas.ts** — wrongly listed as lost
- Removed *Tito Manlio* (RV 738) and *L'incoronazione di Dario* (RV 719) from the list of confirmed lost operas — both have full surviving autograph scores in the Turin Biblioteca Nazionale and have been recorded commercially.
- Clarified that *Tieteberga* survives as a replacement aria and *Scanderbeg* as a few arias, rather than implying full loss.

**pink-headed-duck.ts** — wrong co-author
- Removed "Hein van Grouw" from the 2018 Forktail paper authorship; sole author is Julian Hume.

**cleopatra-1917.ts** — minor descriptor fix
- "film researcher James Fennell" → "film collector James Fennell" (sources describe him as a collector); clarified the projector as a 1920s toy film projector.

**yuanmingyuan.ts** — fabricated quote, wrong nationality, unverifiable attribution
- Rewrote the Captain Charles Gordon sentence: removed fabricated "absolutely overwhelming" quote and corrected nationality (Gordon was a British Royal Engineers officer, not French).
- Removed specific attribution of "one million objects" estimate to Michael Sullivan (the figure is widely cited but not cleanly attributable to him); now phrased as Chinese authority estimates.
- Softened "complete Siku Quanshu" to "a copy of" (Yuanmingyuan held one of several copies).

**saturn-v-craft.ts** — unverified attributed quote
- Removed sentence attributing a specific quote about F-1 records to "Propulsion Engineer Tom Mueller of SpaceX" (could not be verified). Kept the same factual claim phrased generally.

### Patterns
- Confident specific names get attached to general claims (Tom Mueller / Michael Sullivan / "Urutaetae" — real people / made-up name in the same shape)
- Real people misattributed to wrong nationalities or roles (Charles Gordon as French; Le Petit as resident among the Natchez)
- Real lost-corpus entries diluted by adding still-extant works to the "lost" list (Vivaldi *Tito Manlio* and *Dario* are not lost)
- Treatise titles invented in transliterated Sanskrit/Chinese/Tahitian where Anglophone sources are scarce (Rokudenshu, Kaiyuan shumu)

### Slugs flagged for human review
None. No entry's existence depends on an unverifiable named entity. All entries retained adequate sourcing after corrections.

## Phase 5: Duplicates

A subagent compared all 64 new entries against the full 293-entry catalog. Read the most likely overlap candidates in full (libraries, observatories, submerged landmasses, lost philosophical works, Pleistocene megafauna, destroyed cities, lost music traditions, mystery cults, the silphium family).

### Result
- **0 genuine duplicates removed.** Every flagged candidate turned out to be a distinct subject.
- 293 entries before, 293 entries after this phase.

### Candidate clusters investigated (all confirmed distinct)
- Libraries: an-lushan-libraries, bobbio-library, cluny-library, louvain-library, merv-libraries vs library-of-alexandria, nalanda, house-of-wisdom, timbuktu-scholars, persepolis-archives — different institutions, eras, events
- Observatories: maragha-observatory (1259 Iran), samarqand-observatory (1424 Uzbekistan), uraniborg-instruments (1576 Denmark) — three distinct observatories
- Submerged landmasses: sundaland, atlit-yam, doggerland, beringia, zealandia, helike, port-royal — different scales and contexts
- Lost philosophical works: aristotle-on-poets, democritus-mikros-diakosmos, epicurus-on-nature, heraclitus-on-nature — four different authors
- Pleistocene megafauna: cave-lion, irish-elk, megatherium, woolly-rhinoceros — four different species
- Mystery cults: eleusinian-mysteries vs mithraic-mysteries — different deities, sites, periods
- Silphium family: silphium / silphium-spice / silphion-coin / roman-silphium-economy — four facets, properly distinct
- Lost music: vivaldi-lost-operas, trobairitz-melodies, heian-gagaku-repertoire — different cultures/eras
- Extinct frogs: splendid-poison-frog (Panama 1992) vs golden-toad (Costa Rica 1989) — different species

### Possible partial overlap flagged for human attention
- **maya-codex-burning** ↔ **mixtec-codices**: Both describe Spanish destruction of Mesoamerican codices, and mixtec-codices already mentions Landa's 1562 Mani burning as "the most famous instance" — which is exactly the maya-codex-burning entry. Different scripts/peoples though (Mixtec pictographic Oaxaca vs Yucatec Maya logosyllabic). Keep both; consider adding a connection between them and resolving the slug/name inconsistency in maya-codex-burning.

### Connection-integrity issue noticed (deferred to Phase 6)
- mesopotamian-marshes connections include sundarbans-shrinking
- florida-acropora connections include sundarbans-shrinking and maldives-sinking
- Both target slugs were removed in the original commit's cleanup; need to be fixed.

