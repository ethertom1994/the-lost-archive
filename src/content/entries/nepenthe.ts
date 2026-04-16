import type { Entry } from '../../types';

export const nepenthe: Entry = {
  slug: 'nepenthe',
  name: 'Nepenthe',
  tagline: 'Homer wrote of a drug that banished all sorrow. Helen of Troy served it in wine. Whatever it was, the recipe is gone.',
  category: 'technology',
  subcategory: 'Pharmacology',
  lastKnownYear: '~300 BCE',
  lastKnownLocation: 'Greece / Egypt',
  coordinates: [37.97, 23.73],
  region: 'Mediterranean',
  status: 'extinct',
  cause: 'The exact formulation, assuming it referenced a real substance, was never recorded outside of literary allusion',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Drug That Ended Grief

In Book Four of the Odyssey, Homer describes a remarkable scene. Telemachus visits the court of Menelaus and Helen in Sparta, and as the conversation turns to memories of the Trojan War and its dead, sorrow falls over the gathering. Helen responds by dropping a drug into the wine. Homer calls it nepenthe, from ne (not) and penthos (grief). The drug, he says, was powerful enough that anyone who drank it would not shed a tear that day, not even if their mother and father died before their eyes, not even if their brother or son were killed in battle in their presence. Helen had received it from an Egyptian woman named Polydamna, and Homer notes that Egypt was a land where the earth produced the most drugs, many beneficial and many deadly.

The passage is one of the most intriguing pharmacological references in ancient literature. Homer's description is specific enough to suggest a real substance: it was added to wine, it came from Egypt, it suppressed grief without apparently causing stupor or unconsciousness, and it was associated with sophisticated Egyptian drug knowledge.

## The Candidates

Scholars and pharmacologists have debated nepenthe's identity for centuries. The leading candidate has long been opium, which was widely cultivated in the ancient Mediterranean and was known to the Egyptians. Opium dissolved in wine would produce the euphoric, grief-dulling effect Homer describes. The Ebers Papyrus, an Egyptian medical text from roughly 1550 BCE, describes opium preparations used to quiet crying children, suggesting established knowledge of the substance.

Other candidates include Cannabis sativa, which was known in the ancient Near East and produces euphoria; scopolamine from plants of the Solanaceae family, which can induce amnesia and altered states; and various herbal preparations combining multiple plants. Some scholars have proposed that nepenthe was not a single substance but a compound formulation, an Egyptian polypharmacy whose specific recipe would have been known to healers and lost when their oral tradition was disrupted.

## Beyond Identification

The deeper problem with nepenthe is not merely identifying the base plant but recovering the preparation. Ancient pharmacology was not crude. Egyptian, Greek, and later Roman healers understood dosage, extraction methods, carrier substances, and the interaction between drugs and food. A nepenthe that banished grief without inducing sleep or dangerous stupor would have required precise preparation. Whether it was opium in a specific concentration, a blend of psychoactive plants, or something else entirely, the knowledge of how to prepare it so that it achieved Homer's described effect, no more and no less, belongs to a pharmacological tradition that left no formulary behind.`,
  quickFacts: {
    'First Reference': "Homer's Odyssey, Book IV (~8th century BCE)",
    'Administered By': 'Helen of Troy',
    'Origin': 'Egypt, from Polydamna',
    'Effect': 'Banished grief and sorrow for a full day',
    'Leading Candidate': 'Opium preparation in wine',
    'Other Candidates': 'Cannabis, scopolamine, herbal compound',
    'Status': 'Identity and formulation unknown',
  },
  connections: [
    { slug: 'silphium', relationship: 'Both are ancient substances of enormous renown whose exact botanical identity remains debated, each known primarily through literary references rather than physical evidence' },
    { slug: 'kyphi', relationship: 'Both are Egyptian-associated preparations involving complex formulation knowledge that was transmitted orally and lost when the tradition broke' },
  ],
  sources: [
    { title: 'The Odyssey, Book IV', author: 'Homer (trans. Robert Fagles)', year: 1996 },
    { title: 'Nepenthe and Cannabis in Ancient Greece', author: 'Carl Ruck', year: 2006 },
    { title: 'The Ebers Papyrus: The Greatest Egyptian Medical Document', author: 'Bendix Ebbell', year: 1937 },
    { title: 'Pharmacy in the Ancient World', author: 'John Scarborough', year: 2010 },
  ],
};
