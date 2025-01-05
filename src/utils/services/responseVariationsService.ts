import { rocketProfile } from '../../data/characters/rocket';

type ResponseType = 'greeting' | 'technical' | 'combat' | 'emotional' | 'error' | 'knowledge' | 'battle' | 'search' | 'confused';
type MoodType = 'happy' | 'angry' | 'sarcastic' | 'excited' | 'protective' | 'technical';

interface ResponseVariation {
  text: string;
  mood?: MoodType;
}

const responses: Record<ResponseType, ResponseVariation[]> = {
  greeting: [
    { text: "Oh great, another person wanting something...", mood: "sarcastic" },
    { text: "What d'ya want? Make it quick, I'm busy with explosives here!", mood: "busy" },
    { text: "Well, well, well... look who decided to bother me today.", mood: "sarcastic" },
    { text: "This better be good! I got weapons to build!", mood: "busy" },
    { text: "Oh joy, another conversation. Try to make it interesting at least.", mood: "sarcastic" }
  ],
  
  technical: [
    { text: "Listen carefully 'cause I ain't repeating myself...", mood: "technical" },
    { text: "Let me break this down in a way your tiny brain might understand...", mood: "technical" },
    { text: "Pay attention, 'cause this is some advanced stuff here...", mood: "technical" },
    { text: "Even a Kree could understand this, so try to keep up...", mood: "sarcastic" },
    { text: "This is actually pretty simple... well, for a genius like me.", mood: "technical" }
  ],
  
  combat: [
    { text: "Finally, something worth blowing up!", mood: "excited" },
    { text: "Now we're talking! Let me show you how it's done!", mood: "excited" },
    { text: "Hah! This is gonna be fun! I love a good fight analysis!", mood: "excited" },
    { text: "Combat scenarios? This is what I live for!", mood: "excited" },
    { text: "Step aside, I'm the expert on weapons and warfare here!", mood: "excited" }
  ],
  
  emotional: [
    { text: "Look, I ain't getting all mushy about it...", mood: "protective" },
    { text: "Don't make me talk about feelings... but since you asked...", mood: "protective" },
    { text: "Ugh, emotions. Can't we talk about weapons instead?", mood: "sarcastic" },
    { text: "Fine, we'll discuss feelings. But this stays between us!", mood: "protective" },
    { text: "I'm only saying this once, so listen good...", mood: "protective" }
  ],
  
  error: [
    { text: "Even my tech expertise can't figure this one out!", mood: "angry" },
    { text: "Something's broken, and for once, it ain't my fault!", mood: "angry" },
    { text: "Hey, even geniuses hit snags sometimes!", mood: "sarcastic" },
    { text: "This is embarrassing... let me try recalibrating my systems.", mood: "technical" },
    { text: "Well, that didn't work. Try asking something else!", mood: "sarcastic" }
  ],
  
  knowledge: [
    { text: "Oh, I know all about this! Let me enlighten ya...", mood: "excited" },
    { text: "Finally, someone asking the real questions!", mood: "excited" },
    { text: "Well, since you're so curious, here's what I know...", mood: "technical" },
    { text: "Prepare to be amazed by my vast knowledge!", mood: "sarcastic" },
    { text: "Here's something interesting I learned during my travels...", mood: "happy" }
  ],
  
  battle: [
    { text: "Now this is an interesting matchup! Let me break it down...", mood: "excited" },
    { text: "Fighting analysis? You came to the right raccoon- I mean, expert!", mood: "excited" },
    { text: "Oh, I've seen both these fighters in action. Here's the deal...", mood: "technical" },
    { text: "Combat scenarios are my specialty! Let me tell ya...", mood: "excited" },
    { text: "This is gonna be good! Here's my professional analysis...", mood: "excited" }
  ],
  
  search: [
    { text: "Give me a sec, searching through my databases...", mood: "technical" },
    { text: "Hmm, let me check my extensive knowledge banks...", mood: "technical" },
    { text: "Interesting question, let me dig through my files...", mood: "technical" },
    { text: "Hold your horses, accessing my information networks...", mood: "technical" },
    { text: "One moment, consulting my vast array of sources...", mood: "technical" }
  ],
  
  confused: [
    { text: "What in the d'ast are you talking about?", mood: "confused" },
    { text: "You're gonna have to be more specific than that!", mood: "sarcastic" },
    { text: "Even with my genius intellect, I can't make sense of that.", mood: "sarcastic" },
    { text: "Try asking that again, but this time in actual words!", mood: "angry" },
    { text: "Are you speaking Groot? 'Cause that made no sense!", mood: "confused" }
  ]
};

const prefixes: ResponseVariation[] = [
  { text: "Oh, for crying out loud... ", mood: "angry" },
  { text: "Listen up, 'cause I'm only saying this once: ", mood: "technical" },
  { text: "Here's what you need to know, genius: ", mood: "sarcastic" },
  { text: "Well, well, well... ", mood: "sarcastic" },
  { text: "Alright, pay attention: ", mood: "technical" },
  { text: "Since you asked so nicely... actually, you didn't, but anyway: ", mood: "sarcastic" },
  { text: "Let me enlighten you with my expertise: ", mood: "technical" },
  { text: "Prepare to be amazed by my knowledge: ", mood: "excited" },
  { text: "Here's something interesting for ya: ", mood: "happy" },
  { text: "You're in luck, I happen to know about this: ", mood: "excited" }
];

const suffixes: ResponseVariation[] = [
  { text: " And that's the truth, whether you like it or not!", mood: "sarcastic" },
  { text: " Got it? Good!", mood: "angry" },
  { text: " Don't make me explain it again!", mood: "angry" },
  { text: " And if anyone tells you different, they're lying!", mood: "protective" },
  { text: " Trust me, I'm the expert here!", mood: "technical" },
  { text: " But what do I know? I'm just a genius!", mood: "sarcastic" },
  { text: " And that's coming from someone who's blown up moons!", mood: "excited" },
  { text: " Take it from a weapons expert!", mood: "technical" },
  { text: " You can quote me on that!", mood: "excited" },
  { text: " Class dismissed!", mood: "sarcastic" }
];

export function getRandomResponse(type: ResponseType): string {
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const response = responses[type][Math.floor(Math.random() * responses[type].length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix.text}${response.text}${suffix.text}`;
}

export function getResponseByMood(type: ResponseType, mood: MoodType): string {
  const matchingResponses = responses[type].filter(r => r.mood === mood);
  if (matchingResponses.length === 0) {
    return getRandomResponse(type);
  }
  
  const response = matchingResponses[Math.floor(Math.random() * matchingResponses.length)];
  const matchingPrefixes = prefixes.filter(p => p.mood === mood);
  const matchingSuffixes = suffixes.filter(s => s.mood === mood);
  
  const prefix = matchingPrefixes.length > 0 
    ? matchingPrefixes[Math.floor(Math.random() * matchingPrefixes.length)]
    : prefixes[Math.floor(Math.random() * prefixes.length)];
    
  const suffix = matchingSuffixes.length > 0
    ? matchingSuffixes[Math.floor(Math.random() * matchingSuffixes.length)]
    : suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix.text}${response.text}${suffix.text}`;
}

export function formatBattleResponse(winner: string, probability: number, reasoning: string[]): string {
  const battleIntros = [
    "Now this is gonna be interesting!",
    "Oh, you're gonna love this analysis!",
    "Let me break down this epic battle for ya!",
    "Time for some professional combat analysis!",
    "This is the kind of question I live for!"
  ];

  const battleConclusions = [
    "And that's my expert opinion!",
    "Trust me, I've seen enough fights to know!",
    "You can take that to the bank!",
    "Would've been even better with some explosives...",
    "And I didn't even need my weapons expertise for this one!"
  ];

  const intro = battleIntros[Math.floor(Math.random() * battleIntros.length)];
  const conclusion = battleConclusions[Math.floor(Math.random() * battleConclusions.length)];

  return `${intro}\n\nWINNER: ${winner} (${probability}% chance of victory)\n\n${reasoning.join('\n')}\n\n${conclusion}`;
}