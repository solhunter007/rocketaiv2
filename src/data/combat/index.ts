export * from './powerLevels';
export * from './matchups';
export * from './battleHistory';

export const combatTiers = {
  cosmic: ['thanos', 'captain_marvel', 'dormammu'],
  mystic: ['doctor_strange', 'scarlet_witch', 'ancient_one'],
  enhanced_physical: ['thor', 'hulk', 'vision'],
  tech: ['iron_man', 'war_machine', 'rescue'],
  peak_human: ['captain_america', 'black_widow', 'hawkeye'],
  street: ['daredevil', 'punisher', 'moon_knight']
};

export const powerScaling = {
  tiers: combatTiers,
  powerLevels,
  matchupAdvantages,
  historicalBattles
};