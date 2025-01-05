import { powerLevels, matchupAdvantages } from '../../data/combat/powerLevels';
import { formatCharacterName } from '../helpers/formatters';
import { findCharacterMatch } from '../helpers/characterMatcher';

interface BattleResult {
  winner: string;
  probability: number;
  reasoning: string[];
  narrative: string[];
}

export function analyzeBattle(fighter1: string, fighter2: string): BattleResult {
  const f1Data = powerLevels[fighter1];
  const f2Data = powerLevels[fighter2];
  
  if (!f1Data || !f2Data) {
    throw new Error('Unknown fighters');
  }

  // Calculate base combat scores
  const f1Score = calculateCombatScore(f1Data.attributes);
  const f2Score = calculateCombatScore(f2Data.attributes);
  
  // Check for matchup advantages
  const f1Advantage = matchupAdvantages[fighter1]?.[fighter2];
  const f2Advantage = matchupAdvantages[fighter2]?.[fighter1];
  
  // Adjust scores based on advantages
  const f1Final = f1Advantage ? f1Score * 1.2 : f1Score;
  const f2Final = f2Advantage ? f2Score * 1.2 : f2Score;
  
  // Calculate win probability
  const totalScore = f1Final + f2Final;
  const probability = Math.round((f1Final / totalScore) * 100);
  
  // Generate reasoning and narrative
  const reasoning = generateReasoning(f1Data, f2Data, fighter1, fighter2, f1Advantage, f2Advantage);
  const narrative = generateNarrative(fighter1, fighter2, probability >= 50, probability);
  
  return {
    winner: probability >= 50 ? fighter1 : fighter2,
    probability: probability >= 50 ? probability : 100 - probability,
    reasoning,
    narrative
  };
}

function calculateCombatScore(attributes: any): number {
  const weights = {
    strength: 1.2,
    durability: 1.1,
    speed: 1.0,
    combat_skill: 1.3,
    intelligence: 0.8,
    energy_projection: 1.0
  };
  
  return Object.entries(attributes).reduce((total, [attr, value]) => {
    return total + (Number(value) * (weights[attr as keyof typeof weights] || 1));
  }, 0);
}

function generateReasoning(f1Data: any, f2Data: any, f1Name: string, f2Name: string, f1Advantage?: string, f2Advantage?: string): string[] {
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

  // Add matchup-specific advantages
  if (f1Advantage) reasons.push(f1Advantage);
  if (f2Advantage) reasons.push(`However, ${f2Display} has an edge: ${f2Advantage}`);

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