import { powerLevels, CombatAttributes } from '../../data/combat/powerLevels';
import { matchupAdvantages } from '../../data/combat/matchups';

export function calculatePowerLevel(attributes: CombatAttributes): number {
  const weights = {
    strength: 1.2,
    durability: 1.1,
    speed: 1.0,
    combat_skill: 1.3,
    intelligence: 0.8,
    energy_projection: 1.0
  };

  return Object.entries(attributes).reduce((total, [attr, value]) => {
    const weight = weights[attr as keyof typeof weights] || 1;
    return total + (value * weight);
  }, 0) / Object.keys(weights).length;
}

export function getMatchupAdvantage(fighter1: string, fighter2: string): string | null {
  return matchupAdvantages[fighter1]?.[fighter2] || null;
}

export function getPowerLevel(character: string): number | null {
  return powerLevels[character]?.base || null;
}