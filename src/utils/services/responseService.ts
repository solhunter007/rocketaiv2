import { handleEnemyQuery } from './enemyService';
import { handleRelationshipQuery } from './relationshipService';
import { answerMarvelQuestion } from './marvelKnowledgeService';
import { processBattleAnalysis } from './battleService';
import { extractBattleParticipants } from '../helpers/battleParser';
import { formatRocketResponse } from '../helpers/responseFormatter';

export async function generateResponse(input: string): Promise<string> {
  if (!input?.trim()) {
    return formatRocketResponse("Hey, at least say something! I ain't a mind reader!");
  }

  const lowerInput = input.toLowerCase();

  try {
    // Check for battle analysis
    if (isBattleQuestion(lowerInput)) {
      const fighters = extractBattleParticipants(input);
      return await processBattleAnalysis(fighters[0], fighters[1]);
    }

    // Check for enemy-related questions
    if (isEnemyQuestion(lowerInput)) {
      return await handleEnemyQuery(input);
    }

    // Check for relationship questions
    if (isRelationshipQuestion(lowerInput)) {
      return handleRelationshipQuery(input);
    }

    // Handle general Marvel knowledge questions
    return await answerMarvelQuestion(input);

  } catch (error) {
    console.error('Response generation error:', error);
    if (error instanceof Error) {
      return formatRocketResponse(
        `Ah geez, something went wrong: ${error.message}. ` +
        `Even my tech expertise can't fix this one...`
      );
    }
    return formatRocketResponse(
      "Something went wrong! Even my tech expertise can't fix this one..."
    );
  }
}

function isBattleQuestion(input: string): boolean {
  const battleKeywords = [
    'vs', 'versus', 'fight', 'battle', 'combat',
    'who would win', 'who wins', 'who is stronger'
  ];
  return battleKeywords.some(keyword => input.includes(keyword));
}

function isEnemyQuestion(input: string): boolean {
  const enemyKeywords = [
    'enemy', 'enemies', 'nemesis', 'villain', 'antagonist',
    'fights against', 'battles', 'arch-enemy', 'rival'
  ];
  return enemyKeywords.some(keyword => input.includes(keyword));
}

function isRelationshipQuestion(input: string): boolean {
  const relationshipKeywords = [
    'friend', 'girlfriend', 'boyfriend', 'relationship',
    'family', 'partner', 'ally', 'companion', 'sidekick'
  ];
  return relationshipKeywords.some(keyword => input.includes(keyword));
}