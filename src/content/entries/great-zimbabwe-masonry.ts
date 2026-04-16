import type { Entry } from '../../types';

export const greatZimbabweMasonry: Entry = {
  slug: 'great-zimbabwe-masonry',
  name: 'Great Zimbabwe Dry-Stone Masonry',
  tagline: 'Medieval Shona masons built curving walls eleven metres tall out of dressed granite blocks locked together without mortar. The city was abandoned around 1450. By the twentieth century only a handful of living craftsmen knew how the walls had been made.',
  category: 'technology',
  subcategory: 'Lost Crafts',
  lastKnownYear: 1450,
  lastKnownLocation: 'Great Zimbabwe, Zimbabwe plateau',
  coordinates: [-20.27, 30.93],
  region: 'Southern Africa',
  status: 'extinct',
  cause: 'Abandonment of Great Zimbabwe c. 1450; attrition of apprenticeship chains under colonial disruption and industrial-era building',
  imageUrl: undefined,
  body: `## Walls Without Mortar

Great Zimbabwe, the principal city of the medieval Shona kingdom that shares its name, was built and occupied between roughly 1100 and 1450 on a granite escarpment in what is now southeastern Zimbabwe. At its height it held around 18,000 people and sat at the centre of a trade network that moved gold down the Zambezi and Sabi rivers to the Swahili city of Sofala and on across the Indian Ocean. Its signature is a set of enclosures built out of dressed granite blocks stacked dry, without mortar of any kind. The Great Enclosure's outer wall, the largest pre-colonial stone structure in Africa south of the Sahara, runs about 250 metres in circumference, reaches 11 metres in height, and is nearly 5 metres thick at the base.

The technique, *dzimba dza mabwe* in Shona (from which "Zimbabwe" takes its name), was a specific craft, not a general practice. Masons sourced unweathered granite from exfoliation sheets on the surrounding hills. They heated the granite with brush fires and then cooled it rapidly with water to produce thin slabs that could be split along natural planes. The slabs were dressed into roughly rectangular blocks with hammer-stones. The walls were then laid as two parallel faces, carefully course-matched, with the internal cavity packed with rubble. Courses stepped slightly inward as the wall rose, giving the tapered profile visible at the site today. Openings were spanned with lintels of the same granite or with timber crossbeams. Decorative chevron bands, herringbone courses, and monolith-capped pillars were worked directly into the wall structure.

Related sites extend the style across the region: Khami (fifteenth-seventeenth centuries), Danangombe, Naletale, Thulamela, Mapungubwe, and hundreds of smaller ruins that collectively define a dry-stone tradition operating continuously from roughly 900 to 1800.

## The Long Decline

Great Zimbabwe itself was abandoned around 1450, probably owing to some combination of soil exhaustion, shifts in the gold trade, and climatic change. The masonry tradition did not end with the city; it shifted north and west, flowering again at Khami and later Danangombe under the successor Torwa and Rozvi states. But those later sites were smaller, the walls in some cases less technically accomplished than the peak work at the Great Enclosure, and the core knowledge concentrated in fewer lineages.

Colonial conquest in the 1890s accelerated the attrition. The Ndebele kingdom, which had absorbed much of the regional Shona polity, fell in 1893-1894; Shona uprisings in 1896-1897 were defeated. The Rhodesian administration and early European antiquarians, working from a racist premise that African peoples could not have built such structures, first attempted to credit the ruins to Phoenicians or to the biblical Queen of Sheba, and then actively looted them for gold and gold ornaments in the late nineteenth and early twentieth centuries. The Shona masonic apprenticeships that had sustained the craft for seven centuries had already been under pressure; colonial land alienation, forced labour, and the destruction of the specific political economy that had patronised the masters finished them.

## What Is Left

The skills required to build a new Great Enclosure cannot, as of 2025, be re-assembled from the surviving practitioners. A 2019-2022 joint project by the University of Cambridge, the British Museum's Endangered Material Knowledge Programme, and the National Museums and Monuments of Zimbabwe documented the work of the few remaining stonemasons still practising traditional dry-stone conservation repair at Great Zimbabwe and other sites. The team found that most of the workforce was over sixty, that there was no formal training pipeline, that the knowledge had descended through undocumented father-to-son (sometimes grandfather-to-grandson) lines, and that the specific decision-making about stone selection and course-laying was preserved only as embodied practice, not as any kind of written or recorded instruction.

The buildings still stand. Some of the internal principles, those that can be read off the stone itself, are reconstructible. The full body of craft knowledge that a master mason at Great Zimbabwe in 1400 would have held, including how to grade granite by ring-tone, how to read a sheet for its natural parting planes, how to train an apprentice to do the same, is known now only in a few places, by a few old hands, and not at all to anyone under forty.`,
  quickFacts: {
    'Period of Occupation': 'c. 1100-1450',
    'Peak Population': 'c. 18,000',
    'Great Enclosure Wall': '250 m circumference, 11 m tall, 5 m thick at base',
    'Technique': 'Dressed granite, laid dry, no mortar',
    'Related Sites': 'Khami, Danangombe, Mapungubwe, Thulamela',
    'Practising Masons Documented 2022': 'Few remain, most over 60',
  },
  connections: [
    { slug: 'kilwa-chronicle', relationship: 'The Zimbabwe plateau\'s gold passed through Kilwa to the Indian Ocean economy; both sites decline in parallel in the 15th-16th centuries' },
    { slug: 'inca-roads', relationship: 'Both were pre-Columbian/pre-colonial stone engineering traditions whose working knowledge was interrupted by European conquest and only partially reconstructible from surviving structures' },
    { slug: 'khmer-hydraulics', relationship: 'Both were large-scale medieval non-European engineering traditions whose specific craft knowledge, as distinct from the surviving physical monuments, did not fully survive' },
  ],
  sources: [
    { title: 'Great Zimbabwe: Reclaiming a "Confiscated" Past', author: 'Shadreck Chirikure', year: 2020 },
    { title: 'Documenting Knowledge, Skills, and Practices of Dry-Stone Masonry at Great Zimbabwe', url: 'https://www.emkp.org/documenting-knowledge-skills-and-practices-of-dry-stone-masonry-at-great-zimbabwe-2/' },
    { title: 'Great Zimbabwe - Metropolitan Museum of Art', url: 'https://www.metmuseum.org/perspectives/great-zimbabwe' },
    { title: 'The Archaeology of Ancient Zimbabwe', author: 'Innocent Pikirayi', year: 2001 },
  ],
};
