import { marvelKnowledge } from '../knowledgeBase';
import { learnAboutCharacter } from './characterLearningService';
import { formatRocketResponse } from '../helpers/responseFormatter';

export async function answerCharacterQuestion(question: string): Promise<string> {
  const lowerQuestion = question.toLowerCase();
  const characterName = extractCharacterName(lowerQuestion);
  
  if (!characterName) {
    return formatRocketResponse("Hey, who are you asking about? Be specific!");
  }

  try {
    // Get or learn character data
    const characterData = await learnAboutCharacter(characterName);
    
    // Generate appropriate response based on question type
    if (lowerQuestion.includes('who is') || lowerQuestion.includes("what's")) {
      return formatRocketResponse(characterData.description);
    }
    
    if (lowerQuestion.includes('power') || lowerQuestion.includes('strong')) {
      return formatRocketResponse(
        `${characterData.name} has a power level of ${characterData.powerLevel}! ` +
        `Their abilities include ${characterData.abilities.join(', ')}!`
      );
    }
    
    if (lowerQuestion.includes('ability') || lowerQuestion.includes('can')) {
      return formatRocketResponse(
        `${characterData.name} can ${characterData.abilities.join(', and ')}! ` +
        `Pretty impressive, right?`
      );
    }
    
    // Default response about the character
    return formatRocketResponse(
      `${characterData.description}. ` +
      `They're known for ${characterData.abilities.join(', ')}!`
    );
  } catch (error) {
    console.error('Error answering character question:', error);
    return formatRocketResponse(
      "Even with all my knowledge, that's a tricky one. Try asking something else!"
    );
  }
}

function extractCharacterName(question: string): string | null {
  // Common question patterns
  const patterns = [
    /who is ([^?]+)/i,
    /tell me about ([^?]+)/i,
    /what(?:'s| is) ([^?]+)/i,
    /how (?:strong|powerful) is ([^?]+)/i
  ];

  for (const pattern of patterns) {
    const match = question.match(pattern);
    if (match?.[1]) {
      return match[1].trim();
    }
  }

  // If no pattern matches, try to find the character name in the knowledge base
  return Object.keys(marvelKnowledge.characters).find(name => 
    question.toLowerCase().includes(name.toLowerCase())
  ) || null;
}