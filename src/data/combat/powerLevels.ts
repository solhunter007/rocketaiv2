export const powerLevels = {
  // Cosmic Level Beings
  ego: {
    base: 96,
    planetForm: 98,
    attributes: {
      strength: 98,
      durability: 97,
      speed: 85,
      intelligence: 92,
      combat_skill: 88,
      energy_projection: 96
    }
  },
  ajak: {
    base: 89,
    prime: 92,
    attributes: {
      strength: 88,
      durability: 90,
      speed: 85,
      intelligence: 95,
      combat_skill: 92,
      energy_projection: 87
    }
  },
  celestials: {
    base: 99,
    attributes: {
      strength: 100,
      durability: 100,
      speed: 90,
      intelligence: 98,
      combat_skill: 95,
      energy_projection: 100
    }
  },
  // Add many more characters...
};

export const matchupAdvantages = {
  ego: {
    ajak: 'Celestial power level far exceeds Eternal capabilities',
    eternals: 'Planetary form provides overwhelming advantage',
    thanos: 'Cosmic power exceeds Infinity Stone manipulation'
  },
  ajak: {
    thanos: 'Eternal powers provide resistance to physical attacks',
    captain_marvel: 'Advanced combat experience and healing factor',
    iron_man: 'Eternal physiology negates technological advantages'
  }
  // Add many more matchups...
};

export type CombatAttributes = {
  strength: number;
  durability: number;
  speed: number;
  intelligence: number;
  combat_skill: number;
  energy_projection: number;
};