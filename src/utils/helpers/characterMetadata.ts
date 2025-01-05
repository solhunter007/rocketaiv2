interface CharacterMetadata {
  name: string;
  gender: 'male' | 'female';
  pronouns: {
    subject: string;  // he/she
    object: string;   // him/her
    possessive: string; // his/her
  };
}

const characterData: { [key: string]: CharacterMetadata } = {
  iron_man: {
    name: 'Tony Stark',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  captain_america: {
    name: 'Steve Rogers',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  thor: {
    name: 'Thor',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  hulk: {
    name: 'Bruce Banner',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  spider_man: {
    name: 'Peter Parker',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  black_widow: {
    name: 'Natasha Romanoff',
    gender: 'female',
    pronouns: { subject: 'she', object: 'her', possessive: 'her' }
  },
  scarlet_witch: {
    name: 'Wanda Maximoff',
    gender: 'female',
    pronouns: { subject: 'she', object: 'her', possessive: 'her' }
  },
  captain_marvel: {
    name: 'Carol Danvers',
    gender: 'female',
    pronouns: { subject: 'she', object: 'her', possessive: 'her' }
  },
  doctor_strange: {
    name: 'Stephen Strange',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  vision: {
    name: 'Vision',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  black_panther: {
    name: 'T\'Challa',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  },
  thanos: {
    name: 'Thanos',
    gender: 'male',
    pronouns: { subject: 'he', object: 'him', possessive: 'his' }
  }
};

export function getCharacterMetadata(characterId: string): CharacterMetadata | null {
  return characterData[characterId] || null;
}

export function getPronouns(characterId: string): CharacterMetadata['pronouns'] {
  return characterData[characterId]?.pronouns || { subject: 'they', object: 'them', possessive: 'their' };
}