import { marvelKnowledge } from '../knowledgeBase';
import { scrapeCharacterInfo } from './webScrapingService';

// In-memory session storage for learned information
const learnedKnowledge = new Map<string, any>();

interface LearnedCharacterInfo {
  name: string;
  description?: string;
  enemies?: string[];
  relationships?: string[];
  abilities?: string[];
  source: 'database' | 'web' | 'generated';
}

export async function searchAndLearnCharacterInfo(characterName: string): Promise<LearnedCharacterInfo | null> {
  const normalizedName = characterName.toLowerCase();

  // Check existing knowledge first
  const existingKnowledge = marvelKnowledge.characters[normalizedName];
  if (existingKnowledge) {
    return { ...existingKnowledge, source: 'database' };
  }

  // Check session memory
  const sessionKnowledge = learnedKnowledge.get(normalizedName);
  if (sessionKnowledge) {
    return sessionKnowledge;
  }

  try {
    // Try web scraping
    const scrapedInfo = await scrapeCharacterInfo(characterName);
    if (scrapedInfo) {
      const learnedInfo = { ...scrapedInfo, source: 'web' as const };
      learnedKnowledge.set(normalizedName, learnedInfo);
      return learnedInfo;
    }

    // If scraping fails, generate basic info
    const generatedInfo = generateBasicInfo(characterName);
    learnedKnowledge.set(normalizedName, generatedInfo);
    return generatedInfo;

  } catch (error) {
    console.error('Error learning character info:', error);
    return null;
  }
}

function generateBasicInfo(characterName: string): LearnedCharacterInfo {
  const formattedName = characterName
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    name: formattedName,
    description: `A mysterious character in the Marvel universe`,
    abilities: ['Unknown abilities'],
    source: 'generated'
  };
}