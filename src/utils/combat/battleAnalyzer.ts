import { formatCharacterName } from '../helpers/formatters';

// ... rest of the imports ...

function generateReasoning(f1Data: any, f2Data: any, f1Name: string, f2Name: string, f1Advantage?: string, f2Advantage?: string): string[] {
  const reasons: string[] = [];
  
  // Format names for display
  const f1Display = formatCharacterName(f1Name);
  const f2Display = formatCharacterName(f2Name);

  // Compare key attributes
  if (f1Data.attributes.strength > f2Data.attributes.strength + 10) {
    reasons.push(`${f1Display} has overwhelming strength advantage`);
  }
  if (f1Data.attributes.combat_skill > f2Data.attributes.combat_skill + 10) {
    reasons.push(`${f1Display}'s combat skills are clearly superior`);
  }
  if (f1Data.attributes.intelligence > f2Data.attributes.intelligence + 10) {
    reasons.push(`${f1Display} has significant tactical advantage`);
  }

  // Add matchup-specific advantages
  if (f1Advantage) reasons.push(f1Advantage);
  if (f2Advantage) reasons.push(`However, ${f2Display} has an edge: ${f2Advantage}`);

  return reasons;
}

function generateNarrative(f1Name: string, f2Name: string, f1Wins: boolean, probability: number): string[] {
  // Format names for display
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