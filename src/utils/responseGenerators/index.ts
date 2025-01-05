import { formatBattleResult } from '../helpers/formatters';

// ... rest of the imports ...

export async function generateResponse(input: string): Promise<string> {
  // Check for battle analysis request first
  const fighters = extractBattleParticipants(input);
  if (fighters.length === 2) {
    try {
      const result = await analyzeBattle(fighters[0], fighters[1]);
      return formatBattleResult(result);
    } catch (error) {
      return "Listen here, if you want me to analyze a fight, at least pick fighters I know about! And make it interesting!";
    }
  }
  
  // Rest of the function remains the same...
}