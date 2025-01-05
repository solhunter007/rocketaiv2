import { powerLevels } from '../../data/combat/powerLevels';
import { matchupAdvantages } from '../../data/combat/matchups';
import { getCharacterMetadata } from '../helpers/characterMetadata';

interface MatchupResult {
  advantage: string;
  explanation: string[];
  tacticalNotes: string[];
}

export function analyzeMatchup(fighter1: string, fighter2: string): MatchupResult | null {
  const matchup = matchupAdvantages[fighter1]?.[fighter2];
  if (!matchup) return null;

  const f1Meta = getCharacterMetadata(fighter1);
  const f2Meta = getCharacterMetadata(fighter2);

  return {
    advantage: matchup.advantage,
    explanation: matchup.reasoning.map(reason => 
      reason.replace(/\$1/g, f1Meta?.name || fighter1)
            .replace(/\$2/g, f2Meta?.name || fighter2)
    ),
    tacticalNotes: matchup.tacticalNotes || []
  };
}