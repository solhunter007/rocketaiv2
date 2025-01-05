// Add Spider-Man to the combatCharacters object
export const combatCharacters: { [key: string]: CombatCharacter } = {
  spider_man: {
    name: "Peter Parker",
    powerLevel: {
      base: 82,
      maxPotential: 88,
      variations: {
        "Base": 82,
        "Iron Spider": 87,
        "Symbiote": 88
      }
    },
    attributes: {
      strength: 85,
      durability: 75,
      speed: 92,
      intelligence: 90,
      combat_skill: 85,
      energy_projection: 40,
      technique: 88,
      adaptability: 95,
      experience: 80
    },
    specialAbilities: [
      "Spider-sense",
      "Wall-crawling",
      "Web-slinging",
      "Superhuman agility",
      "Proportional strength of a spider"
    ],
    weaknesses: [
      "Sense of responsibility",
      "Personal life conflicts",
      "Limited resources",
      "Protective of civilians"
    ],
    fightingStyle: [
      "Acrobatic combat",
      "Web-based tactics",
      "Improvised strategy",
      "Quip-enhanced distraction"
    ],
    equipment: [
      "Web-shooters",
      "Spider-suit",
      "Advanced HUD",
      "Various web combinations"
    ],
    notableVictories: [
      "Doctor Octopus",
      "Vulture",
      "Mysterio",
      "Green Goblin"
    ],
    notableDefeats: [
      "Thanos",
      "Green Goblin (first encounter)",
      "Doctor Octopus (initial fight)"
    ]
  },
  // ... existing characters ...
};