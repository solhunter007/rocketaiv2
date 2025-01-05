import { characterVariations } from './textParser';
import { levenshteinDistance, normalizeText } from './stringUtils';

// Common prefixes/titles to strip
const PREFIXES_TO_STRIP = ['the', 'dr', 'dr.', 'doctor', 'professor', 'prof', 'mr', 'mrs', 'ms', 'miss'];

export function findCharacterMatch(input: string): string | null {
  if (!input) return null;
  
  const normalizedInput = normalizeInput(input);
  
  // Direct match first
  const directMatch = findDirectMatch(normalizedInput);
  if (directMatch) return directMatch;
  
  // Try fuzzy matching
  const fuzzyMatch = findFuzzyMatch(normalizedInput);
  if (fuzzyMatch) return fuzzyMatch;
  
  return null;
}

function normalizeInput(input: string): string {
  let normalized = normalizeText(input);
  
  // Strip common prefixes
  for (const prefix of PREFIXES_TO_STRIP) {
    if (normalized.startsWith(prefix + ' ')) {
      normalized = normalized.slice(prefix.length).trim();
    }
  }
  
  return normalized;
}

function findDirectMatch(normalizedInput: string): string | null {
  for (const [key, variations] of Object.entries(characterVariations)) {
    const normalizedVariations = variations.map(v => normalizeText(v));
    if (normalizedVariations.includes(normalizedInput)) {
      return key;
    }
  }
  return null;
}

function findFuzzyMatch(normalizedInput: string): string | null {
  let bestMatch = {
    key: '',
    distance: Infinity
  };

  for (const [key, variations] of Object.entries(characterVariations)) {
    for (const variation of variations) {
      const normalizedVariation = normalizeText(variation);
      const distance = levenshteinDistance(normalizedInput, normalizedVariation);
      
      // Accept matches with distance <= 2 for short names (< 6 chars)
      // And distance <= 3 for longer names
      const maxDistance = normalizedVariation.length < 6 ? 2 : 3;
      
      if (distance <= maxDistance && distance < bestMatch.distance) {
        bestMatch = { key, distance };
      }
    }
  }

  return bestMatch.key || null;
}