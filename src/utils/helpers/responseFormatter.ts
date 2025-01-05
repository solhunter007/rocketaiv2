import { getRandomResponse, getResponseByMood } from '../services/responseVariationsService';

export function formatRocketResponse(response: string, type: string = 'knowledge', mood?: string): string {
  return getRandomResponse(type as any);
}

export function formatMoodResponse(response: string, type: string, mood: string): string {
  return getResponseByMood(type as any, mood as any);
}

export function formatBattleQuip(): string {
  const quips = [
    "And trust me, I've seen enough fights to know what I'm talking about!",
    "Would've been even quicker if they let me join in with my weapons!",
    "Not that I couldn't take 'em both down myself... just sayin'.",
    "Now THAT'S the kind of destruction I like to see!",
    "Bet you 1000 units I'm right about this one!",
    "Could've been more explosive, but what can ya do?",
    "And this is coming from someone who's fought Thanos!",
    "Trust a weapons expert on this one!",
    "I've blown up moons that were tougher than this!",
    "And I didn't even need my advanced tech to figure that out!"
  ];
  
  return quips[Math.floor(Math.random() * quips.length)];
}