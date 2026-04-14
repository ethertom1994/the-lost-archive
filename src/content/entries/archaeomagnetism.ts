import type { Entry } from '../../types';

export const archaeomagnetism: Entry = {
  slug: 'archaeomagnetism',
  name: "Earth's Magnetic Field Record in Pottery",
  tagline: 'Ancient pottery preserves a record of Earth\'s magnetic field at the moment it was fired. Every kiln fire was a recording device. Every pot is a compass frozen in time. We are losing the records.',
  category: 'culture',
  subcategory: 'Archaeological Science',
  lastKnownYear: 'ongoing',
  lastKnownLocation: 'Archaeological sites worldwide',
  coordinates: [31.78, 35.23],
  region: 'Global',
  status: 'functionally_extinct',
  cause: 'Destruction of archaeological sites through urban development, looting, conflict, and agricultural expansion destroys pottery in its original context, making archaeomagnetic analysis impossible. Unprovenanced pottery in museum collections lacks the positional data needed for magnetic analysis.',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Invisible Record

When clay is heated above approximately 580°C — the Curie point for magnetite — the iron oxide particles within it lose their magnetic alignment. As the clay cools, those particles realign with Earth's magnetic field at that moment and are locked in place. The finished pot becomes a permanent record of the direction and intensity of Earth's magnetic field at the time and place it was fired.

This phenomenon — thermoremanent magnetism — means that every ancient kiln fire, every pottery workshop, every brick in every ancient building was inadvertently recording geomagnetic data. A collection of dated pottery from a single region can reconstruct thousands of years of magnetic field behavior: how the field's direction drifted, how its intensity fluctuated, and how the magnetic poles wandered.

## Why This Matters

Earth's magnetic field is not static. The magnetic north pole moves continuously, the field's intensity varies by 10-20% over centuries, and the entire field occasionally reverses polarity (the last full reversal was about 780,000 years ago). Understanding these changes is critical for geophysics, space weather prediction, and understanding the dynamo process in Earth's core.

Direct measurements of the magnetic field only go back about 400 years (the first systematic observations began in the 1590s). Before that, our only data comes from natural records (lava flows, sediment cores) and archaeological materials — primarily pottery. Archaeomagnetic data from the Near East, where pottery production has been continuous for over 8,000 years, provides the longest and most detailed record of geomagnetic variation available anywhere on Earth.

## Losing the Data

Every time an archaeological site is destroyed — bulldozed for development, looted for artifacts, bombed in conflict, or plowed over for agriculture — the archaeomagnetic record it contains is lost. The pottery itself may survive in a museum, but without knowing its exact position and orientation when it was excavated (and hence when it was fired), its magnetic data is useless.

The destruction of sites across the Middle East — in Iraq, Syria, Libya, Yemen — has obliterated thousands of years of magnetic field data that existed in situ. Urban expansion across South Asia and East Asia is paving over sites that have never been surveyed. Looting removes pottery from its context, destroying the positional information that makes archaeomagnetic analysis possible. Every pot that ends up in a private collection without provenance is a compass whose reading has been erased.`,
  quickFacts: {
    'Curie Point': '~580°C (magnetite)',
    'Record Preserved In': 'Fired clay, bricks, kiln walls',
    'Oldest Usable Data': '~8,000 years (Near East pottery)',
    'Direct Measurements Since': '~1590 CE',
    'Key Regions': 'Mesopotamia, Levant, Egypt, China',
    'Lost Through': 'Looting, development, conflict',
    'Field': 'Archaeomagnetism / Paleomagnetism',
    'Data Destroyed': 'Irreplaceable — no natural substitute',
  },
  connections: [
    { slug: 'library-of-alexandria', relationship: 'Both represent irreplaceable records being destroyed — one a library of texts, the other a library of magnetic data encoded in clay' },
    { slug: 'samian-ware', relationship: 'Both examples of ancient pottery that carries more information than its makers intended' },
    { slug: 'svalbard-syria', relationship: 'Both about the loss of irreplaceable records during the Syrian conflict — seeds in one case, magnetic data in the other' },
  ],
  sources: [
    { title: 'Archaeomagnetism: Methodology and Applications', author: 'Donald Tarling', year: 2006 },
    { title: 'Geomagnetic Field Intensity from Levantine Ceramics', author: 'Erez Ben-Yosef et al., PNAS', year: 2017 },
    { title: 'The Magnetic Field of the Earth: Paleomagnetism, the Core, and the Deep Mantle', author: 'Ronald T. Merrill et al.', year: 1996 },
    { title: 'Cultural Heritage Under Fire', author: 'UNESCO', year: 2016 },
  ],
};
