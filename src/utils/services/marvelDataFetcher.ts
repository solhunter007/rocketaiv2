import { powerLevels, CombatAttributes } from '../../data/combat/powerLevels';
import { characterVariations } from '../helpers/textParser';

export async function fetchCharacterData(characterName: string): Promise<boolean> {
  try {
    // First check if we already have this character
    if (powerLevels[characterName]) {
      return true;
    }

    // Generate data for unknown characters
    const newCharacter = generateCharacterData(characterName);
    
    // Add to our local database
    addCharacterToDatabase(characterName, newCharacter);
    
    return true;
  } catch (error) {
    console.error('Error fetching character data:', error);
    return false;
  }
}

function generateCharacterData(characterName: string): CombatAttributes {
  // Determine character type from name
  const isCosmicBeing = characterName.toLowerCase().includes('celestial') || 
                        characterName.toLowerCase().includes('eternal') ||
                        characterName.toLowerCase().includes('cosmic');
                        
  const isMystic = characterName.toLowerCase().includes('sorcerer') ||
                   characterName.toLowerCase().includes('witch') ||
                   characterName.toLowerCase().includes('wizard') ||
                   characterName.toLowerCase().includes('voodoo');

  if (isCosmicBeing) {
    return {
      strength: 90 + Math.floor(Math.random() * 10),
      durability: 85 + Math.floor(Math.random() * 15),
      speed: 80 + Math.floor(Math.random() * 15),
      intelligence: 85 + Math.floor(Math.random() * 15),
      combat_skill: 80 + Math.floor(Math.random() * 15),
      energy_projection: 85 + Math.floor(Math.random() * 15)
    };
  }

  if (isMystic) {
    return {
      strength: 50 + Math.floor(Math.random() * 20),
      durability: 60 + Math.floor(Math.random() * 20),
      speed: 65 + Math.floor(Math.random() * 20),
      intelligence: 80 + Math.floor(Math.random() * 15),
      combat_skill: 70 + Math.floor(Math.random() * 20),
      energy_projection: 85 + Math.floor(Math.random() * 15)
    };
  }

  // Default to street-level hero attributes
  return {
    strength: 60 + Math.floor(Math.random() * 20),
    durability: 55 + Math.floor(Math.random() * 20),
    speed: 60 + Math.floor(Math.random() * 20),
    intelligence: 60 + Math.floor(Math.random() * 20),
    combat_skill: 65 + Math.floor(Math.random() * 20),
    energy_projection: 40 + Math.floor(Math.random() * 30)
  };
}

function addCharacterToDatabase(characterName: string, attributes: CombatAttributes): void {
  // Add to powerLevels
  (powerLevels as any)[characterName] = {
    base: calculateBasePower(attributes),
    attributes: attributes
  };

  // Add to character variations for future matching
  characterVariations[characterName] = [
    characterName,
    characterName.replace(/_/g, ' '),
    characterName.replace(/_/g, '-')
  ];
}

function calculateBasePower(attributes: CombatAttributes): number {
  return Math.floor(
    Object.values(attributes).reduce((sum, value) => sum + value, 0) / 6
  );
}