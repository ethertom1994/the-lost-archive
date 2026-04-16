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

