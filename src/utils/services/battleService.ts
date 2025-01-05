import { powerLevels } from '../../data/combat/powerLevels';
import { formatBattleResult } from '../helpers/formatters';
import { formatCharacterName } from '../helpers/formatters';
import { learnCharacterData, calculateBasePower } from './dataLearningService';

const COMBAT_WEIGHTS = {
  strength: 1.2,
  durability: 1.1,
  speed: 1.0,
  combat_skill: 1.3,
  intelligence: 0.8,
  energy_projection: 1.0
};

export async function processBattleAnalysis(fighter1: string, fighter2: string): Promise<string> {
  if (!fighter1 || !fighter2) {
    throw new Error('Both fighters must be specified');
  }

  // Get or learn power data
  let f1Data = powerLevels[fighter1];
  let f2Data = powerLevels[fighter2];

  if (!f1Data) {
    const learnedData = await learnCharacterData(fighter1);
    f1Data = { base: calculateBasePower(learnedData.attributes), attributes: learnedData.attributes };
  }
  if (!f2Data) {
    const learnedData = await learnCharacterData(fighter2);
    f2Data = { base: calculateBasePower(learnedData.attributes), attributes: learnedData.attributes };
  }

  try {
    // Calculate combat scores
    const f1Score = calculateCombatScore(f1Data.attributes);
    const f2Score = calculateCombatScore(f2Data.attributes);
    
    // Calculate win probability
    const totalScore = f1Score + f2Score;
    const probability = Math.round((f1Score / totalScore) * 100);
    
    // Generate detailed reasoning
    const winner = probability >= 50 ? fighter1 : fighter2;
    const loser = probability >= 50 ? fighter2 : fighter1;
    const winnerData = probability >= 50 ? f1Data : f2Data;
    const loserData = probability >= 50 ? f2Data : f1Data;
    
    const result = {
      winner,
      probability: probability >= 50 ? probability : 100 - probability,
      reasoning: generateDetailedReasoning(winnerData, loserData, winner, loser),
      narrative: generateNarrative(fighter1, fighter2, probability >= 50, probability)
    };

    return formatBattleResult(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    throw new Error(`Battle analysis failed: ${errorMessage}`);
  }
}

function calculateCombatScore(attributes: any): number {
  return Object.entries(attributes).reduce((total, [attr, value]) => {
    const weight = COMBAT_WEIGHTS[attr as keyof typeof COMBAT_WEIGHTS] || 1;
    return total + (Number(value) * weight);
  }, 0) / Object.keys(COMBAT_WEIGHTS).length;
}

function generateDetailedReasoning(winnerData: any, loserData: any, winner: string, loser: string): string[] {
  const reasons: string[] = [];
  const winnerName = formatCharacterName(winner);
  const loserName = formatCharacterName(loser);
  
  // Compare key attributes with detailed explanations
  if (winnerData.attributes.strength > loserData.attributes.strength + 10) {
    reasons.push(`${winnerName}'s superior strength (${winnerData.attributes.strength} vs ${loserData.attributes.strength}) gives them a significant physical advantage`);
  }
  
  if (winnerData.attributes.combat_skill > loserData.attributes.combat_skill + 10) {
    reasons.push(`${winnerName}'s combat expertise (${winnerData.attributes.combat_skill} vs ${loserData.attributes.combat_skill}) allows them to outmaneuver ${loserName}`);
  }
  
  if (winnerData.attributes.speed > loserData.attributes.speed + 10) {
    reasons.push(`${winnerName}'s superior speed (${winnerData.attributes.speed} vs ${loserData.attributes.speed}) lets them control the pace of the battle`);
  }
  
  if (winnerData.attributes.durability > loserData.attributes.durability + 10) {
    reasons.push(`${winnerName}'s greater durability (${winnerData.attributes.durability} vs ${loserData.attributes.durability}) helps them withstand ${loserName}'s attacks`);
  }
  
  if (winnerData.attributes.intelligence > loserData.attributes.intelligence + 10) {
    reasons.push(`${winnerName}'s tactical advantage (${winnerData.attributes.intelligence} vs ${loserData.attributes.intelligence}) lets them outsmart ${loserName}`);
  }
  
  if (winnerData.attributes.energy_projection > loserData.attributes.energy_projection + 10) {
    reasons.push(`${winnerName}'s energy projection capabilities (${winnerData.attributes.energy_projection} vs ${loserData.attributes.energy_projection}) give them superior ranged combat options`);
  }

  // Add overall combat effectiveness explanation
  const winnerTotal = Object.values(winnerData.attributes).reduce((sum: number, val: number) => sum + val, 0);
  const loserTotal = Object.values(loserData.attributes).reduce((sum: number, val: number) => sum + val, 0);
  
  reasons.push(`Overall, ${winnerName}'s combined combat effectiveness (${Math.round(winnerTotal/6)}) exceeds ${loserName}'s (${Math.round(loserTotal/6)})`);

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