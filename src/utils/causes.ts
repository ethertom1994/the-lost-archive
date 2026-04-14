import type { Entry } from '../types';

export type LossCause =
  | 'hunting'
  | 'habitat_loss'
  | 'climate'
  | 'colonization'
  | 'industrialization'
  | 'war_conflict'
  | 'disease'
  | 'neglect'
  | 'obsolescence'
  | 'unknown';

export function categorizeCause(entry: Entry): LossCause {
  const cause = entry.cause.toLowerCase();
  if (cause.includes('hunt') || cause.includes('harvest') || cause.includes('killed') || cause.includes('overharvest') || cause.includes('poach') || cause.includes('exterminat') || cause.includes('slaughter')) return 'hunting';
  if (cause.includes('habitat') || cause.includes('urban') || cause.includes('development') || cause.includes('deforest') || cause.includes('drain') || cause.includes('land use') || cause.includes('agriculture')) return 'habitat_loss';
  if (cause.includes('climate') || cause.includes('sea level') || cause.includes('warming') || cause.includes('ice age') || cause.includes('drought') || cause.includes('rising ocean') || cause.includes('rising sea')) return 'climate';
  if (cause.includes('spanish') || cause.includes('colonial') || cause.includes('conquest') || cause.includes('missionary') || cause.includes('assimilation') || cause.includes('suppression') || cause.includes('erasure') || cause.includes('coloniz')) return 'colonization';
  if (cause.includes('industrial') || cause.includes('commercial') || cause.includes('replaced') || cause.includes('standardiz') || cause.includes('mass produc') || cause.includes('modern cultivar') || cause.includes('cheaper')) return 'industrialization';
  if (cause.includes('war') || cause.includes('fall of') || cause.includes('siege') || cause.includes('destro') || cause.includes('sack') || cause.includes('bomb') || cause.includes('battle') || cause.includes('invasion')) return 'war_conflict';
  if (cause.includes('disease') || cause.includes('fungus') || cause.includes('chytrid') || cause.includes('panama') || cause.includes('pathogen') || cause.includes('blight') || cause.includes('virus')) return 'disease';
  if (cause.includes('lost') || cause.includes('forgotten') || cause.includes('died with') || cause.includes('secret') || cause.includes('knowledge') || cause.includes('neglect') || cause.includes('last speaker') || cause.includes('oral tradition') || cause.includes('not passed')) return 'neglect';
  if (cause.includes('electric') || cause.includes('modern') || cause.includes('cheaper') || cause.includes('obsolet') || cause.includes('digital') || cause.includes('discontinued')) return 'obsolescence';
  return 'unknown';
}

export const CAUSE_META: Record<LossCause, { label: string; icon: string }> = {
  hunting: { label: 'Hunting & Harvesting', icon: '🎯' },
  habitat_loss: { label: 'Habitat Destruction', icon: '🏗️' },
  climate: { label: 'Climate Change', icon: '🌡️' },
  colonization: { label: 'Colonization & Conquest', icon: '⚔️' },
  industrialization: { label: 'Industrialization', icon: '🏭' },
  war_conflict: { label: 'War & Conflict', icon: '💥' },
  disease: { label: 'Disease & Pathogen', icon: '🦠' },
  neglect: { label: 'Lost Knowledge', icon: '📭' },
  obsolescence: { label: 'Made Obsolete', icon: '🔄' },
  unknown: { label: 'Unknown / Debated', icon: '❓' },
};
