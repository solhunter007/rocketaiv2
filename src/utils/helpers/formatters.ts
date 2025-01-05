// Format character names for display
export function formatCharacterName(name: string): string {
  return name
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Format battle result for display
export function formatBattleResult(result: any): string {
  const { winner, probability, reasoning, narrative } = result;
  
  return `
${narrative.join('\n')}

WINNER: ${formatCharacterName(winner)} (${Math.round(probability)}% chance of victory)

Why? Let me break it down:
${reasoning.map(reason => '💥 ' + reason).join('\n')}

And trust me, I've seen enough fights to know what I'm talking about!
`.trim();
}