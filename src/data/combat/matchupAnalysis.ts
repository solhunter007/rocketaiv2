// Add Spider-Man matchups
export const matchupAdvantages: { [key: string]: { [key: string]: MatchupAnalysis } } = {
  spider_man: {
    thor: {
      advantage: "Severe Disadvantage",
      explanation: [
        "Cannot match Thor's godlike strength",
        "Lightning attacks difficult to dodge even with spider-sense",
        "Limited options against weather control"
      ],
      tacticalNotes: [
        "Must rely on agility and web-slinging",
        "Spider-sense crucial for survival",
        "Web attacks ineffective against Asgardian durability"
      ]
    },
    iron_man: {
      advantage: "Tactical Advantage",
      explanation: [
        "Spider-sense counters targeting systems",
        "Superior agility and reflexes",
        "Web attacks can interfere with suit systems"
      ],
      tacticalNotes: [
        "Use webs to limit mobility",
        "Spider-sense provides combat precognition",
        "Close combat negates ranged advantages"
      ]
    },
    captain_america: {
      advantage: "Slight Advantage",
      explanation: [
        "Superior strength and agility",
        "Spider-sense counters shield throws",
        "Web-slinging provides mobility advantage"
      ],
      tacticalNotes: [
        "Maintain distance advantage",
        "Use webs to control shield movement",
        "Exploit aerial superiority"
      ]
    }
  },
  // Add reverse matchups
  thor: {
    spider_man: {
      advantage: "Strong Advantage",
      explanation: [
        "Overwhelming strength difference",
        "Weather control limits web-slinging",
        "Lightning attacks bypass spider-sense"
      ],
      tacticalNotes: [
        "Area attacks counter agility",
        "Lightning negates web effectiveness",
        "Raw power overwhelms defensive capabilities"
      ]
    }
  },
  iron_man: {
    spider_man: {
      advantage: "Slight Disadvantage",
      explanation: [
        "Spider-sense complicates targeting",
        "Web attacks can disable suit systems",
        "Difficult to track enhanced agility"
      ],
      tacticalNotes: [
        "Maintain distance",
        "Use wide-area attacks",
        "Rely on suit's analytical capabilities"
      ]
    }
  },
  captain_america: {
    spider_man: {
      advantage: "Slight Disadvantage",
      explanation: [
        "Spider-sense negates surprise attacks",
        "Cannot match spider-strength",
        "Shield throws less effective"
      ],
      tacticalNotes: [
        "Focus on tactical advantage",
        "Use environment for positioning",
        "Exploit Spider-Man's sense of responsibility"
      ]
    }
  }
  // ... existing matchups ...
};