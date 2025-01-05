import { powerScaling } from '../data/powerScaling';

interface CombatResult {
  winner: string;
  probability: number;
  reasoning: string[];
}

export function analyzeCombat(fighter1: string, fighter2: string, conditions?: string): CombatResult {
  const f1 = powerScaling.powerLevels[fighter1];
  const f2 = powerScaling.powerLevels[fighter2];
  
  if (!f1 || !f2) {
    throw new Error('One or both fighters not found in database');
  }

  // Calculate base combat score
  const f1Score = calculateCombatScore(f1);
  const f2Score = calculateCombatScore(f2);

  // Check for specific matchup advantages
  const advantages1 = powerScaling.matchupAdvantages[fighter1]?.[fighter2];
  const advantages2 = powerScaling.matchupAdvantages[fighter2]?.[fighter1];

  // Adjust scores based on advantages
  const adjustedF1Score = adjustScoreForAdvantages(f1Score, advantages1);
  const adjustedF2Score = adjustScoreForAdvantages(f2Score, advantages2);

  // Calculate win probability
  const totalScore = adjustedF1Score + adjustedF2Score;
  const probability = (adjustedF1Score / totalScore) * 100;

  // Generate reasoning
  const reasoning = generateReasoning(f1, f2, advantages1, advantages2);

  return {
    winner: probability > 50 ? fighter1 : fighter2,
    probability: Math.round(Math.max(probability, 100 - probability)),
    reasoning
  };
}

function calculateCombatScore(fighter: any): number {
  return Object.values(fighter.attributes).reduce((sum: number, value: number) => sum + value, 0) / 6;
}

function adjustScoreForAdvantages(score: number, advantages: string | undefined): number {
  return advantages ? score * 1.2 : score;
}

function generateReasoning(f1: any, f2: any, adv1?: string, adv2?: string): string[] {
  const reasons: string[] = [];

  // Compare key attributes
  if (f1.attributes.strength > f2.attributes.strength + 10) {
    reasons.push('Significant strength advantage');
  }
  if (f1.attributes.combat_skill > f2.attributes.combat_skill + 10) {
    reasons.push('Superior combat skill');
  }
  if (f1.attributes.intelligence > f2.attributes.intelligence + 10) {
    reasons.push('Tactical advantage due to higher intelligence');
  }

  // Add matchup-specific advantages
  if (adv1) reasons.push(adv1);
  if (adv2) reasons.push(adv2);

  return reasons;
}