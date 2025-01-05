import { powerLevels } from '../../data/combat/powerLevels';
import { formatCharacterName } from '../helpers/formatters';
import { calculateCombatScore } from './combatCalculator';

export interface BattleResult {
  winner: string;
  probability: number;
  reasoning: string[];
  narrative: string[];
}

export function analyzeBattle(fighter1: string, fighter2: string): BattleResult {
  const f1Data = powerLevels[fighter1];
  const f2Data = powerLevels[fighter2];
  
  if (!f1Data || !f2Data) {
    throw new Error(`Unknown fighters: ${fighter1} vs ${fighter2}`);
  }

  // Calculate base combat scores
  const f1Score = calculateCombatScore(f1Data.attributes);
  const f2Score = calculateCombatScore(f2Data.attributes);
  
  // Calculate win probability
  const totalScore = f1Score + f2Score;
  const probability = Math.round((f1Score / totalScore) * 100);
  
  // Generate reasoning and narrative
  const reasoning = generateReasoning(f1Data, f2Data, fighter1, fighter2);
  const narrative = generateNarrative(fighter1, fighter2, probability >= 50, probability);
  
  return {
    winner: probability >= 50 ? fighter1 : fighter2,
    probability: probability >= 50 ? probability : 100 - probability,
    reasoning,
    narrative
  };
}

function generateReasoning(f1Data: any, f2Data: any, f1Name: string, f2Name: string): string[] {
  const reasons: string[] = [];
  
  // Format names for display
  const f1Display = formatCharacterName(f1Name);
  const f2Display = formatCharacterName(f2Name);

  // Compare key attributes
  if (f1Data.attributes.strength > f2Data.attributes.strength + 10) {
    reasons.push(`${f1Display} has overwhelming strength advantage`);
  }
  if (f1Data.attributes.combat_skill > f2Data.attributes.combat_skill + 10) {
    reasons.push(`${f1Display}'s combat skills are clearly superior`);
  }
  if (f1Data.attributes.intelligence > f2Data.attributes.intelligence + 10) {
    reasons.push(`${f1Display} has significant tactical advantage`);
  }

  return reasons;
}

function generateNarrative(f1Name: string, f2Name: string, f1Wins: boolean, probability: number): string[] {
  const f1Display = formatCharacterName(f1Name);
  const f2Display = formatCharacterName(f2Name);
  
  const winner = f1Wins ? f1Display : f2Display;
  const loser = f1Wins ? f2Display : f1Display;
  
  const narrative = [
    `${f1Display} vs ${f2Display} - now this is gonna be interesting!`,
  ];

  if (probability > 90) {
    narrative.push(`This ain't even close - ${winner} completely outclasses ${loser}!`);
  } else if (probability > 70) {
    narrative.push(`${winner} has a clear advantage, but ${loser} shouldn't be underestimated.`);
  } else {
    narrative.push(`This is a close match, but ${winner} has a slight edge over ${loser}.`);
  }

  return narrative;
}