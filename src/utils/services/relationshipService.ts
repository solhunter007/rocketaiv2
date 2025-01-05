import { relationships } from '../../data/relationships';
import { formatRocketResponse } from '../helpers/responseFormatter';

interface RelationshipQuery {
  character: string;
  type: 'friend' | 'love_interest' | 'companion' | 'family' | 'any';
}

export function handleRelationshipQuery(input: string): string {
  const query = parseRelationshipQuery(input);
  if (!query) {
    return formatRocketResponse("Hey, I need to know who you're asking about!");
  }

  const characterData = relationships[query.character];
  if (!characterData) {
    return formatRocketResponse(`I don't have any relationship data for that character. Try asking about someone else!`);
  }

  switch (query.type) {
    case 'friend':
      return getBestFriend(characterData);
    case 'love_interest':
      return getLoveInterest(characterData);
    case 'family':
      return getFamilyMember(characterData);
    case 'any':
      return getGeneralRelationships(characterData);
    default:
      return getGeneralRelationships(characterData);
  }
}

function parseRelationshipQuery(input: string): RelationshipQuery | null {
  const lowerInput = input.toLowerCase();
  
  // Map character names to their keys
  const characterMap: { [key: string]: string } = {
    'spider-man': 'peter_parker',
    'spiderman': 'peter_parker',
    'peter parker': 'peter_parker',
    'peter': 'peter_parker',
    'iron man': 'tony_stark',
    'tony stark': 'tony_stark',
    'captain america': 'steve_rogers',
    'steve rogers': 'steve_rogers',
    'thor': 'thor',
    'black panther': 'tchalla'
  };

  // Find character in query
  let characterKey = null;
  for (const [name, key] of Object.entries(characterMap)) {
    if (lowerInput.includes(name.toLowerCase())) {
      characterKey = key;
      break;
    }
  }

  if (!characterKey) return null;

  // Determine relationship type
  let type: RelationshipQuery['type'] = 'any';
  if (lowerInput.includes('friend') || lowerInput.includes('bestie')) {
    type = 'friend';
  } else if (lowerInput.includes('love') || lowerInput.includes('girlfriend') || lowerInput.includes('boyfriend')) {
    type = 'love_interest';
  } else if (lowerInput.includes('family') || lowerInput.includes('parent') || lowerInput.includes('sibling')) {
    type = 'family';
  }

  return { character: characterKey, type };
}

function getBestFriend(data: any): string {
  const bestFriend = data.companions?.find((c: any) => 
    c.relationship.toLowerCase().includes('best friend')
  );

  if (bestFriend) {
    return formatRocketResponse(
      `${bestFriend.name} is ${data.character}'s best friend. ${bestFriend.description}`
    );
  }

  return formatRocketResponse(
    `Well, ${data.character} has several close companions, but I wouldn't call any of them a "best" friend.`
  );
}

function getLoveInterest(data: any): string {
  const currentLove = data.love_interests?.find((l: any) => 
    !l.status.toLowerCase().includes('former')
  );

  if (currentLove) {
    return formatRocketResponse(
      `${currentLove.name} is ${data.character}'s love interest. ${currentLove.description}`
    );
  }

  return formatRocketResponse(
    `${data.character} is currently flying solo in the romance department.`
  );
}

function getFamilyMember(data: any): string {
  const family = data.companions?.filter((c: any) => 
    c.relationship.toLowerCase().includes('family') ||
    c.relationship.toLowerCase().includes('sister') ||
    c.relationship.toLowerCase().includes('brother') ||
    c.relationship.toLowerCase().includes('parent')
  );

  if (family?.length) {
    const familyMember = family[0];
    return formatRocketResponse(
      `${familyMember.name} is ${data.character}'s ${familyMember.relationship}. ${familyMember.description}`
    );
  }

  return formatRocketResponse(
    `I don't have any family information for ${data.character}.`
  );
}

function getGeneralRelationships(data: any): string {
  const relationships = [];
  
  if (data.companions?.length) {
    relationships.push(`Their closest companion is ${data.companions[0].name}`);
  }
  
  if (data.love_interests?.length) {
    relationships.push(`In the romance department, there's ${data.love_interests[0].name}`);
  }

  return formatRocketResponse(
    relationships.length 
      ? `${data.character} has quite the social circle! ${relationships.join('. ')}.`
      : `${data.character} keeps their relationships pretty private, if you ask me.`
  );
}