import { formatRocketResponse } from '../helpers/responseFormatter';
import { searchAndLearnCharacterInfo } from './knowledgeLearningService';
import { findCharacterMatch } from '../helpers/characterMatcher';

export async function answerMarvelQuestion(question: string): Promise<string> {
  if (!question?.trim()) {
    return formatRocketResponse("Hey, at least ask something! I ain't a mind reader!");
  }

  const characterName = findCharacterMatch(question);
  if (!characterName) {
    return formatRocketResponse("Hey genius, who exactly are you asking about? Be more specific!");
  }

  try {
    const info = await searchAndLearnCharacterInfo(characterName);
    
    if (!info) {
      return formatRocketResponse(
        "Even with all my tech and searching capabilities, I couldn't find anything about that character. " +
        "Are you sure they exist in the Marvel universe?"
      );
    }

    // Determine what aspect of the character is being asked about
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('friend') || lowerQuestion.includes('best friend')) {
      return formatRocketResponse(
        info.relationships?.length 
          ? `${info.name}'s closest friend is ${info.relationships[0]}. ${info.source === 'web' ? "Just learned that from my research!" : ""}`
          : `I don't have any information about ${info.name}'s friends yet. Maybe they're a loner like me!`
      );
    }

    if (lowerQuestion.includes('enemy') || lowerQuestion.includes('villain')) {
      return formatRocketResponse(
        info.enemies?.length
          ? `${info.name}'s main enemies include ${info.enemies.join(', ')}! ${info.source === 'web' ? "Fresh intel from my latest search!" : ""}`
          : `Still gathering intel on ${info.name}'s enemies. Give me time to dig deeper!`
      );
    }

    if (lowerQuestion.includes('power') || lowerQuestion.includes('ability')) {
      return formatRocketResponse(
        info.abilities?.length
          ? `${info.name} possesses ${info.abilities.join(', ')}! ${info.source === 'web' ? "Just found this in my research!" : ""}`
          : `I'm still learning about ${info.name}'s abilities. They must be keeping them secret!`
      );
    }

    // Default to general information
    return formatRocketResponse(
      `${info.description || `${info.name} is a character in the Marvel universe`}. ` +
      `${info.source === 'web' ? "I just learned this from my latest research!" : ""}`
    );

  } catch (error) {
    console.error('Error answering Marvel question:', error);
    return formatRocketResponse(
      "Something went wrong with my search systems! Even my tech expertise can't figure this one out right now!"
    );
  }
}