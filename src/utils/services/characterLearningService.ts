import { powerLevels } from '../../data/combat/powerLevels';
import { marvelKnowledge } from '../knowledgeBase';
import { formatCharacterName } from '../helpers/formatters';

interface LearnedCharacter {
  name: string;
  description: string;
  abilities: string[];
  powerLevel: number;
  type: 'cosmic' | 'mystic' | 'mutant' | 'enhanced' | 'street-level';
  attributes: {
    strength: number;
    durability: number;
    speed: number;
    intelligence: number;
    combat_skill: number;
    energy_projection: number;
  };
}

export async function learnAboutCharacter(name: string): Promise<LearnedCharacter> {
  // First check if we already know about this character
  const existingChar = marvelKnowledge.characters[name.toLowerCase()];
  if (existingChar) {
    return {
      ...existingChar,
      powerLevel: powerLevels[name]?.base || calculatePowerLevel(existingChar),
      type: determineCharacterType(name, existingChar),
      attributes: powerLevels[name]?.attributes || generateAttributes(name)
    };
  }

  // Learn about new character
  const characterType = inferCharacterType(name);
  const attributes = generateAttributes(name);
  
  return {
    name: formatCharacterName(name),
    description: generateDescription(name, characterType),
    abilities: generateAbilities(characterType),
    powerLevel: calculateBasePower(attributes),
    type: characterType,
    attributes
  };
}

function inferCharacterType(name: string): LearnedCharacter['type'] {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('cosmic') || 
      lowerName.includes('celestial') || 
      lowerName.includes('eternal')) {
    return 'cosmic';
  }
  
  if (lowerName.includes('sorcerer') || 
      lowerName.includes('witch') || 
      lowerName.includes('wizard')) {
    return 'mystic';
  }
  
  if (lowerName.includes('mutant') || 
      lowerName.includes('x-men')) {
    return 'mutant';
  }
  
  if (lowerName.includes('super') || 
      lowerName.includes('enhanced')) {
    return 'enhanced';
  }
  
  return 'street-level';
}

function generateDescription(name: string, type: LearnedCharacter['type']): string {
  const descriptions = {
    cosmic: `A powerful cosmic entity known as ${name}, wielding forces beyond mortal comprehension`,
    mystic: `A practitioner of the mystic arts who goes by ${name}, mastering supernatural forces`,
    mutant: `A mutant hero known as ${name}, born with extraordinary abilities`,
    enhanced: `A superhuman individual called ${name}, possessing enhanced abilities`,
    'street-level': `A skilled hero known as ${name}, protecting their corner of the universe`
  };
  
  return descriptions[type];
}

function generateAbilities(type: LearnedCharacter['type']): string[] {
  const abilityPool = {
    cosmic: [
      'Cosmic energy manipulation',
      'Matter manipulation',
      'Reality warping',
      'Space flight',
      'Immortality'
    ],
    mystic: [
      'Spell casting',
      'Dimensional travel',
      'Energy projection',
      'Mystical artifacts use',
      'Reality manipulation'
    ],
    mutant: [
      'Superhuman abilities',
      'Genetic enhancement',
      'Advanced healing',
      'Natural evolution'
    ],
    enhanced: [
      'Enhanced strength',
      'Superior agility',
      'Advanced durability',
      'Combat expertise'
    ],
    'street-level': [
      'Expert combat skills',
      'Strategic mind',
      'Peak human condition',
      'Advanced technology use'
    ]
  };

  const abilities = abilityPool[type];
  const numAbilities = 2 + Math.floor(Math.random() * 3); // 2-4 abilities
  return abilities.sort(() => 0.5 - Math.random()).slice(0, numAbilities);
}

function generateAttributes(name: string): LearnedCharacter['attributes'] {
  const type = inferCharacterType(name);
  
  const baseStats = {
    cosmic: { min: 80, max: 100 },
    mystic: { min: 70, max: 90 },
    mutant: { min: 60, max: 85 },
    enhanced: { min: 50, max: 80 },
    'street-level': { min: 40, max: 70 }
  };

  const { min, max } = baseStats[type];
  
  return {
    strength: min + Math.floor(Math.random() * (max - min)),
    durability: min + Math.floor(Math.random() * (max - min)),
    speed: min + Math.floor(Math.random() * (max - min)),
    intelligence: min + Math.floor(Math.random() * (max - min)),
    combat_skill: min + Math.floor(Math.random() * (max - min)),
    energy_projection: min + Math.floor(Math.random() * (max - min))
  };
}

function calculateBasePower(attributes: LearnedCharacter['attributes']): number {
  return Math.floor(
    Object.values(attributes).reduce((sum, value) => sum + value, 0) / 6
  );
}

function determineCharacterType(name: string, char: any): LearnedCharacter['type'] {
  // Use existing data to determine type if available
  if (char.abilities?.includes('Cosmic energy manipulation')) return 'cosmic';
  if (char.abilities?.includes('Spell casting')) return 'mystic';
  if (char.description?.toLowerCase().includes('mutant')) return 'mutant';
  if (char.abilities?.includes('Enhanced strength')) return 'enhanced';
  return 'street-level';
}

function calculatePowerLevel(char: any): number {
  // Calculate power level based on abilities and description
  let base = 50;
  
  if (char.abilities) {
    base += char.abilities.length * 5;
  }
  
  const powerIndicators = [
    'cosmic', 'god', 'supreme', 'ultimate', 'omega',
    'master', 'expert', 'enhanced', 'super'
  ];
  
  powerIndicators.forEach(indicator => {
    if (char.description?.toLowerCase().includes(indicator)) {
      base += 10;
    }
  });
  
  return Math.min(base, 100);
}