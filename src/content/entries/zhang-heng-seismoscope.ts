import type { Entry } from '../../types';

export const zhangHengSeismoscope: Entry = {
  slug: 'zhang-heng-seismoscope',
  name: "Zhang Heng's Seismoscope",
  tagline: 'In 132 CE, a Chinese astronomer built a machine that detected earthquakes 500 kilometers away. No one has figured out how it worked.',
  category: 'technology',
  subcategory: 'Scientific Instruments',
  lastKnownYear: '~200 CE',
  lastKnownLocation: 'Luoyang, Han dynasty China',
  coordinates: [34.75, 113.65],
  region: 'East Asia',
  status: 'extinct',
  cause: 'The device was not replicated after the fall of the Han dynasty, and the internal mechanism was never recorded in sufficient detail',
  imageUrl: undefined,
  imageCaption: undefined,
  imageCredit: undefined,
  body: `## The Bronze Vessel with Eight Dragons

In 132 CE, the polymath Zhang Heng presented the Han dynasty court with a device unlike anything the world had seen. The Houfeng Didong Yi, roughly translated as the instrument for measuring seasonal winds and the movements of the earth, was a large bronze vessel approximately two meters in diameter. Around its exterior sat eight dragon heads, each holding a bronze ball in its jaws. Below each dragon crouched a bronze toad with its mouth open. When an earthquake occurred, even hundreds of kilometers away, the internal mechanism would cause one dragon to release its ball into the waiting toad's mouth, and the direction of the triggered dragon indicated the direction of the earthquake's epicenter.

The Book of the Later Han records that in 138 CE the device indicated an earthquake to the northwest, but no one in the capital of Luoyang had felt any tremor. Days later, a messenger arrived reporting that an earthquake had struck Longxi, in modern Gansu Province, roughly 500 kilometers away. The court was astonished. The device had worked.

## The Missing Mechanism

Zhang Heng's descriptions, as preserved in historical texts, explain the exterior design in reasonable detail but describe the internal mechanism only in general terms. The texts mention a central column (du zhu) that could move in response to seismic waves and a system of levers or channels that converted this movement into the release of a specific ball. But the exact configuration, the materials used for the sensing element, the method of isolating seismic vibrations from other sources of motion, and the mechanism that ensured only one dragon fired, remain unknown.

Dozens of reconstruction attempts have been made since the 1930s. Chinese scientist Wang Zhenduo built a working replica in 1951 using a pendulum mechanism, but his version responded to direct shaking rather than distant seismic waves. A 2005 team at the Chinese Academy of Sciences proposed a design using a suspended internal column that could detect primary waves, but debate continues over whether their model truly replicates the original's capabilities.

## Seventeen Centuries Ahead

Zhang Heng's seismoscope preceded the first Western seismograph, built by Luigi Palmieri in 1856, by more than seventeen hundred years. The fundamental challenge it addressed, detecting distant seismic events and determining their direction, remains a core problem in modern seismology. That a device built in the second century could accomplish this at all suggests a sophistication in Zhang Heng's understanding of wave propagation that his surviving writings only hint at. The instrument was not mass-produced, not widely copied, and not maintained after the political turmoil that ended the Han dynasty. It became a legend before it could become a tradition.`,
  quickFacts: {
    'Date Built': '132 CE',
    'Builder': 'Zhang Heng, Han dynasty polymath',
    'Location': 'Luoyang, Eastern Han capital',
    'Detection Range': '~500 km (recorded event)',
    'Design': 'Bronze vessel, 8 dragon heads, 8 toads',
    'Internal Mechanism': 'Unknown (central column described)',
    'First Western Equivalent': '1856 (Palmieri seismograph)',
  },
  connections: [
    { slug: 'antikythera-mechanism', relationship: 'Both are ancient scientific instruments of astonishing sophistication, each demonstrating that their respective civilizations achieved capabilities not matched for over a millennium' },
    { slug: 'babylonian-calculus', relationship: 'Both represent scientific achievements of the ancient world that preceded their European equivalents by centuries, challenging linear narratives of technological progress' },
  ],
  sources: [
    { title: 'Book of the Later Han (Hou Han Shu)', author: 'Fan Ye', year: 445 },
    { title: 'Science and Civilisation in China, Volume 3', author: 'Joseph Needham', year: 1959 },
    { title: 'Zhang Heng and the Seismoscope', author: 'Robert Reitherman', year: 2012 },
    { title: 'Reconstruction of the Seismoscope of Zhang Heng', author: 'Feng Rui et al.', year: 2006 },
  ],
};
