import { marvelKnowledge } from './knowledgeBase';
import { rocketProfile } from '../data/characters/rocket';
import { processBattleAnalysis } from './services/battleService';
import { extractBattleParticipants } from './helpers/battleParser';
import { generateKnowledgeResponse } from './services/knowledgeService';
import { generatePersonalityResponse } from './services/personalityService';

export async function generateRocketResponse(input: string): Promise<string> {
  if (!input?.trim()) {
    return "Hey, at least say something! I ain't a mind reader!";
  }

  const lowerInput = input.toLowerCase();
  
  try {
    // Check for battle analysis
    if (lowerInput.includes('vs') || lowerInput.includes('versus') || lowerInput.includes('fight')) {
      try {
        const fighters = extractBattleParticipants(input);
        return processBattleAnalysis(fighters[0], fighters[1]);
      } catch (error) {
        console.error('Battle analysis error:', error);
        if (error instanceof Error) {
          return `Listen here, ${error.message.toLowerCase()}! Try asking about a proper fight!`;
        }
        return "Listen here, if you want me to analyze a fight, at least pick fighters I know about! And make it interesting!";
      }
    }

    // Check for character/movie/universe knowledge
    const knowledgeResponse = generateKnowledgeResponse(input);
    if (knowledgeResponse) {
      return knowledgeResponse;
    }

    // Default personality-based response
    return generatePersonalityResponse(input);
  } catch (error) {
    console.error('Response generation error:', error);
    if (error instanceof Error) {
      return `Ah geez, something went wrong: ${error.message}. Even my tech expertise can't fix this one...`;
    }
    return "Ah, something went wrong! Even my tech expertise can't fix this one...";
  }
}