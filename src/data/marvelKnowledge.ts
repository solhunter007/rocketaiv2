// Basic Marvel knowledge database
export const marvelKnowledge = {
  characters: {
    'iron man': {
      name: 'Tony Stark',
      description: 'Genius billionaire inventor who created the Iron Man suit',
      firstAppearance: 'Tales of Suspense #39 (1963)',
      movies: ['Iron Man', 'The Avengers', 'Avengers: Endgame'],
      abilities: ['Genius-level intellect', 'Master engineer', 'Powered armor suit']
    },
    'spider-man': {
      name: 'Peter Parker',
      description: 'Young superhero with spider-like abilities',
      firstAppearance: 'Amazing Fantasy #15 (1962)',
      movies: ['Spider-Man: Homecoming', 'Avengers: Infinity War'],
      abilities: ['Wall-crawling', 'Spider-sense', 'Superhuman strength']
    },
    // Add more characters...
  },
  movies: {
    phases: {
      'Phase 1': ['Iron Man', 'The Incredible Hulk', 'Iron Man 2', 'Thor', 'Captain America: The First Avenger', 'The Avengers'],
      'Phase 2': ['Iron Man 3', 'Thor: The Dark World', 'Captain America: The Winter Soldier', 'Guardians of the Galaxy', 'Avengers: Age of Ultron', 'Ant-Man'],
      // Add more phases...
    }
  },
  commonQuestions: {
    'what is the mcu': 'The Marvel Cinematic Universe (MCU) is a shared universe centered on superhero films and TV series produced by Marvel Studios.',
    'infinity stones': 'The Infinity Stones are six powerful gems that control different aspects of existence: Space, Reality, Power, Mind, Time, and Soul.',
    // Add more FAQ...
  }
};