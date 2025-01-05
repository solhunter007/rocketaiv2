import type { CombatAttributes } from '../../data/combat/powerLevels';

const ATTRIBUTE_WEIGHTS = {
  strength: 1.2,
  durability: 1.1,
  speed: 1.0,
  combat_skill: 1.3,
  intelligence: 0.8,
  energy_projection: 1.0
};

export function calculateCombatScore(attributes: CombatAttributes): number {
  return Object.entries(attributes).reduce((total, [attr, value]) => {
    const weight = ATTRIBUTE_WEIGHTS[attr as keyof typeof ATTRIBUTE_WEIGHTS] || 1;
    return total + (value * weight);
  }, 0) / Object.keys(ATTRIBUTE_WEIGHTS).length;
}