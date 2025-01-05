import { characterEnemies } from '../../data/relationships/enemies';
import { formatRocketResponse } from '../helpers/responseFormatter';
import { learnAboutCharacter } from './characterLearningService';

interface EnemyQuery {
  character: string;
  type: 'main' | 'rival' | 'organization' | 'any';
}

export async function handleEnemyQuery(input: string): Promise<string> {
  const query = parseEnemyQuery(input);
  if (!query) {
    return formatRocketResponse("Hey, I need to know who you're asking about!");
  }

  // Check existing enemy data
  const enemyData = characterEnemies[query.character];
  if (enemyData) {
    return formatExistingEnemyData(query, enemyData);
  }

  // Generate enemy data for unknown characters
  return await generateEnemyResponse(query.character);
}

function parseEnemyQuery(input: string): EnemyQuery | null {
  const lowerInput = input.toLowerCase();
  
  // Map character names to their keys
  const characterMap: { [key: string]: string } = {
    'wolverine': 'wolverine',
    'logan': 'wolverine',
    'weapon x': 'wolverine',
    // Add more character mappings...
  };

  // Find character in query
  let characterKey = null;
  for (const [name, key] of Object.entries(characterMap)) {
    if (lowerInput.includes(name)) {
      characterKey = key;
      break;
    }
  }

  if (!characterKey) return null;

  // Determine query type
  let type: EnemyQuery['type'] = 'any';
  if (lowerInput.includes('arch') || lowerInput.includes('main') || lowerInput.includes('nemesis')) {
    type = 'main';
  } else if (lowerInput.includes('rival')) {
    type = 'rival';
  } else if (lowerInput.includes('organization') || lowerInput.includes('group')) {
    type = 'organization';
  }

  return { character: characterKey, type };
}

function formatExistingEnemyData(query: EnemyQuery, data: any): string {
  switch (query.type) {
    case 'main':
      const mainEnemy = data.mainEnemies[0];
      return formatRocketResponse(
        `${mainEnemy.name} is ${query.character}'s arch-nemesis. ${mainEnemy.description}. ` +
        `They've had some nasty fights, including ${mainEnemy.notableConflicts.join(', ')}!`
      );

    case 'rival':
      const rivalry = data.rivalries[0];
      return formatRocketResponse(
        `${rivalry.name} is one of ${query.character}'s biggest rivals. ` +
        `It's a ${rivalry.type} rivalry - ${rivalry.description}.`
      );

    case 'organization':
      const org = data.organizations[0];
      return formatRocketResponse(
        `${org.name} is a major enemy organization for ${query.character}. ` +
        `${org.description}. Current status: ${org.status}.`
      );

    default:
      const enemy = data.mainEnemies[0];
      return formatRocketResponse(
        `${enemy.name} is ${query.character}'s most notorious enemy. ${enemy.description}. ` +
        `But trust me, there's plenty more who want a piece of them!`
      );
  }
}

async function generateEnemyResponse(character: string): Promise<string> {
  // Learn about the character first
  const characterData = await learnAboutCharacter(character);
  
  // Generate appropriate enemy based on character type
  const enemyType = determineEnemyType(characterData.type);
  const enemyDescription = generateEnemyDescription(characterData);

  return formatRocketResponse(
    `Based on what I know about ${character}, their main enemy would be ${enemyType}. ` +
    `${enemyDescription} But hey, in this business, you make a lot of enemies!`
  );
}

function determineEnemyType(characterType: string): string {
  const enemyTypes = {
    cosmic: 'a rival cosmic entity seeking universal dominance',
    mystic: 'a dark sorcerer corrupted by forbidden magic',
    mutant: 'an anti-mutant organization or a powerful rival mutant',
    enhanced: 'a twisted mirror of their own powers',
    'street-level': 'a crime syndicate or personal nemesis'
  };

  return enemyTypes[characterType as keyof typeof enemyTypes] || 'a powerful rival';
}

function generateEnemyDescription(characterData: any): string {
  const descriptions = [
    `They're constantly at odds due to their opposing ideologies.`,
    `Their battles have become legendary in the superhero community.`,
    `It's a deeply personal conflict that goes back years.`,
    `Every encounter between them threatens to reshape their world.`
  ];

  return descriptions[Math.floor(Math.random() * descriptions.length)];
}