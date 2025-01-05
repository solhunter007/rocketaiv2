import { marvelKnowledge } from '../knowledgeBase';
import { formatRocketResponse } from '../helpers/responseFormatter';
import { getCharacterMetadata } from '../helpers/characterMetadata';

export function generateKnowledgeResponse(input: string): string | null {
  const lowerInput = input.toLowerCase();
  
  // Check common questions first
  if (marvelKnowledge.commonQuestions[lowerInput]) {
    return formatRocketResponse(marvelKnowledge.commonQuestions[lowerInput]);
  }

  // Check for character information
  for (const [key, value] of Object.entries(marvelKnowledge.characters)) {
    if (lowerInput.includes(key)) {
      return formatCharacterResponse(key, value);
    }
  }

  // Check for movie information
  if (lowerInput.includes('movie') || lowerInput.includes('film')) {
    for (const phase of Object.values(marvelKnowledge.movies.phases)) {
      const relevantMovie = phase.find(movie => 
        lowerInput.includes(movie.toLowerCase())
      );
      if (relevantMovie) {
        return formatMovieResponse(relevantMovie);
      }
    }
  }

  return null;
}

function formatCharacterResponse(characterId: string, character: any): string {
  const metadata = getCharacterMetadata(characterId);
  const pronouns = metadata?.pronouns || { subject: 'they', object: 'them', possessive: 'their' };
  
  const response = `${character.description} ${pronouns.subject} first showed up in ${character.firstAppearance}, and let me tell ya, ${pronouns.subject}'s been causing trouble ever since!`;
  return formatRocketResponse(response);
}

function formatMovieResponse(movie: any): string {
  const response = `${movie.description} And between you and me, I could've handled that whole situation in half the time with the right explosives!`;
  return formatRocketResponse(response);
}