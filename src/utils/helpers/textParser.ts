export const characterVariations: { [key: string]: string[] } = {
  // Cosmic Beings
  ego: ['ego', 'ego the living planet', 'living planet', 'celestial ego'],
  ajak: ['ajak', 'ajax', 'eternal healer', 'eternal ajak'],
  hood: ['the hood', 'hood', 'parker robbins', 'robbins'],
  brother_voodoo: ['brother voodoo', 'doctor voodoo', 'jericho drumm', 'drumm'],
  
  // More characters with variations
  iron_man: ['iron man', 'tony stark', 'stark', 'the invincible iron man'],
  captain_america: ['captain america', 'steve rogers', 'rogers', 'cap', 'the first avenger'],
  thor: ['thor', 'thor odinson', 'god of thunder', 'odinson'],
  hulk: ['hulk', 'bruce banner', 'banner', 'the incredible hulk'],
  black_widow: ['black widow', 'natasha romanoff', 'romanoff', 'natasha'],
  hawkeye: ['hawkeye', 'clint barton', 'barton'],
  scarlet_witch: ['scarlet witch', 'wanda maximoff', 'wanda'],
  vision: ['vision', 'the vision'],
  doctor_strange: ['doctor strange', 'dr strange', 'stephen strange', 'strange', 'sorcerer supreme'],
  spider_man: ['spider-man', 'spiderman', 'spider man', 'peter parker', 'parker'],
  black_panther: ['black panther', 'tchalla', "t'challa", 'king of wakanda'],
  captain_marvel: ['captain marvel', 'carol danvers', 'danvers'],
  ant_man: ['ant-man', 'ant man', 'scott lang', 'lang'],
  wasp: ['wasp', 'hope van dyne', 'van dyne'],
  winter_soldier: ['winter soldier', 'bucky barnes', 'barnes', 'white wolf'],
  falcon: ['falcon', 'sam wilson', 'wilson', 'captain america sam'],
  war_machine: ['war machine', 'james rhodes', 'rhodey', 'rhodes'],
  
  // Add more characters with their variations...
};

export function extractBattleKeywords(): string[] {
  return [
    'vs', 'versus', 'against', 'fight', 'battle', 'combat',
    'who would win', 'who wins', 'who is stronger',
    'match up', 'matchup', 'face off', 'faceoff',
    'between', 'and', 'or'
  ];
}

export function isBattleQuestion(input: string): boolean {
  const lowerInput = input.toLowerCase();
  return extractBattleKeywords().some(keyword => lowerInput.includes(keyword));
}