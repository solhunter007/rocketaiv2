import { characterVariations } from './textParser';

export function extractBattleParticipants(input: string): string[] {
  if (!input?.trim()) {
    throw new Error('Input string is required');
  }

  const lowerInput = input.toLowerCase();
  
  // Common battle-related phrases to remove
  const battlePhrases = [
    'who would win',
    'who wins',
    'who is stronger',
    'who would beat',
    'battle between',
    'between'
  ];

  // Clean up the input first
  let cleanedInput = lowerInput;
  battlePhrases.forEach(phrase => {
    cleanedInput = cleanedInput.replace(phrase, '');
  });

  const separators = [' vs ', ' versus ', ' fight ', ' against ', ' and ', ' or '];
  
  for (const separator of separators) {
    if (cleanedInput.includes(separator)) {
      const [f1, f2] = cleanedInput.split(separator)
        .map(f => f.trim())
        .filter(Boolean); // Remove empty strings
      
      if (!f1 || !f2) {
        throw new Error('Could not identify both fighters in the input');
      }
      
      return [normalizeCharacterName(f1), normalizeCharacterName(f2)];
    }
  }
  
  throw new Error('Could not find a valid battle comparison in the input');
}

function normalizeCharacterName(name: string): string {
  if (!name) {
    throw new Error('Character name cannot be empty');
  }

  const nameMap: { [key: string]: string } = {
    'iron man': 'iron_man',
    'tony stark': 'iron_man',
    'cap': 'captain_america',
    'captain america': 'captain_america',
    'steve rogers': 'captain_america',
    'thor': 'thor',
    'hulk': 'hulk',
    'bruce banner': 'hulk',
    'dr strange': 'doctor_strange',
    'doctor strange': 'doctor_strange',
    'strange': 'doctor_strange',
    'spider-man': 'spider_man',
    'spiderman': 'spider_man',
    'spider man': 'spider_man',
    'peter parker': 'spider_man',
    'black widow': 'black_widow',
    'natasha': 'black_widow',
    'hawkeye': 'hawkeye',
    'clint': 'hawkeye',
    'cosmic ghost rider': 'cosmic_ghost_rider',
    'sentry': 'sentry'
  };
  
  return nameMap[name.toLowerCase()] || name.toLowerCase().replace(/\s+/g, '_');
}