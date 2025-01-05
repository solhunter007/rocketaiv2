import type { CombatAttributes } from '../../data/combat/powerLevels';

interface LearnedCharacterData {
  attributes: CombatAttributes;
  description?: string;
  abilities?: string[];
}

export async function learnCharacterData(characterName: string): Promise<LearnedCharacterData> {
  // Determine character type and traits from name
  const traits = analyzeCharacterName(characterName);
  
  // Generate appropriate attributes based on character traits
  const attributes = generateAttributes(traits);
  
  // Generate character description and abilities
  const description = generateDescription(characterName, traits);
  const abilities = generateAbilities(traits);

  return { attributes, description, abilities };
}

interface CharacterTraits {
  isCosmic: boolean;
  isMystic: boolean;
  isEnhanced: boolean;
  isPowerful: boolean;
}

function analyzeCharacterName(name: string): CharacterTraits {
  const lowerName = name.toLowerCase();
  
  return {
    isCosmic: lowerName.includes('cosmic') || 
              lowerName.includes('celestial') || 
              lowerName.includes('eternal'),
              
    isMystic: lowerName.includes('sorcerer') || 
              lowerName.includes('witch') || 
              lowerName.includes('wizard') ||
              lowerName.includes('mystic'),
              
    isEnhanced: lowerName.includes('super') || 
                lowerName.includes('enhanced') ||
                lowerName.includes('ultimate'),
                
    isPowerful: lowerName.includes('supreme') || 
                lowerName.includes('god') ||
                lowerName.includes('king') ||
                lowerName.includes('lord')
  };
}

function generateAttributes(traits: CharacterTraits): CombatAttributes {
  let baseMin = 50;
  let baseMax = 70;
  
  // Adjust base stats based on traits
  if (traits.isCosmic) {
    baseMin = 85;
    baseMax = 100;
  } else if (traits.isMystic) {
    baseMin = 70;
    baseMax = 90;
  } else if (traits.isEnhanced) {
    baseMin = 65;
    baseMax = 85;
  }
  
  // Further boost if character is notably powerful
  if (traits.isPowerful) {
    baseMin += 10;
    baseMax += 10;
  }

  return {
    strength: baseMin + Math.floor(Math.random() * (baseMax - baseMin)),
    durability: baseMin + Math.floor(Math.random() * (baseMax - baseMin)),
    speed: baseMin + Math.floor(Math.random() * (baseMax - baseMin)),
    intelligence: baseMin + Math.floor(Math.random() * (baseMax - baseMin)),
    combat_skill: baseMin + Math.floor(Math.random() * (baseMax - baseMin)),
    energy_projection: baseMin + Math.floor(Math.random() * (baseMax - baseMin))
  };
}

function generateDescription(name: string, traits: CharacterTraits): string {
  const descriptors = [];
  
  if (traits.isCosmic) {
    descriptors.push('cosmic entity', 'wielder of cosmic forces');
  }
  if (traits.isMystic) {
    descriptors.push('mystic practitioner', 'master of the arcane arts');
  }
  if (traits.isEnhanced) {
    descriptors.push('enhanced individual', 'superhuman warrior');
  }
  if (traits.isPowerful) {
    descriptors.push('incredibly powerful', 'legendary');
  }
  
  const descriptor = descriptors[Math.floor(Math.random() * descriptors.length)] || 'mysterious hero';
  return `A ${descriptor} known as ${name}`;
}

function generateAbilities(traits: CharacterTraits): string[] {
  const abilities = new Set<string>();
  
  if (traits.isCosmic) {
    abilities.add('Cosmic energy manipulation');
    abilities.add('Matter manipulation');
    abilities.add('Space flight');
  }
  
  if (traits.isMystic) {
    abilities.add('Spell casting');
    abilities.add('Energy projection');
    abilities.add('Mystical artifacts use');
  }
  
  if (traits.isEnhanced) {
    abilities.add('Enhanced strength');
    abilities.add('Superior durability');
    abilities.add('Advanced combat skills');
  }
  
  if (traits.isPowerful) {
    abilities.add('Reality manipulation');
    abilities.add('Immortality');
    abilities.add('Godlike powers');
  }
  
  return Array.from(abilities);
}

export function calculateBasePower(attributes: CombatAttributes): number {
  return Math.floor(
    Object.values(attributes).reduce((sum, value) => sum + value, 0) / 6
  );
}