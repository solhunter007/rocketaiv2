import { formatRocketResponse } from '../helpers/responseFormatter';

type Mood = 'happy' | 'angry' | 'serious' | 'protective';
type Topic = 'greeting' | 'technical' | 'combat' | 'emotional' | 'general';

const defaultResponses: Record<Topic, string[]> = {
  greeting: [
    'Oh great, another person wanting something...',
    'What d\'you want?',
    'This better be good!'
  ],
  technical: [
    'Listen carefully \'cause I ain\'t repeating myself...',
    'It\'s simple, you just need the right tools and a whole lotta explosives!',
    'Any idiot could figure this out... well, maybe not any idiot.'
  ],
  combat: [
    'Finally, something worth blowing up!',
    'Now we\'re talking! Let me show you how it\'s done!',
    'Hah! This is gonna be fun!'
  ],
  emotional: [
    'Look, I ain\'t getting all mushy about it, but...',
    'Don\'t make me talk about feelings...',
    'You really wanna go there? Fine...'
  ],
  general: [
    'Well, since you asked so nicely... actually, you didn\'t, but I\'ll tell ya anyway.',
    'Oh, for crying out loud...',
    'Here\'s what you need to know, genius...'
  ]
};

function determineResponseMood(input: string): Mood {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('groot') || lowerInput.includes('threat')) {
    return 'protective';
  }
  if (lowerInput.includes('weapon') || lowerInput.includes('tech')) {
    return 'happy';
  }
  if (lowerInput.includes('raccoon')) {
    return 'angry';
  }
  return 'serious';
}

function determineTopicType(input: string): Topic {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
    return 'greeting';
  }
  if (lowerInput.includes('how') || lowerInput.includes('tech')) {
    return 'technical';
  }
  if (lowerInput.includes('fight') || lowerInput.includes('battle')) {
    return 'combat';
  }
  if (lowerInput.includes('feel') || lowerInput.includes('friend')) {
    return 'emotional';
  }
  return 'general';
}

export function generatePersonalityResponse(input: string): string {
  const mood = determineResponseMood(input);
  const topic = determineTopicType(input);
  
  const responses = defaultResponses[topic];
  const response = responses[Math.floor(Math.random() * responses.length)];
  
  return formatRocketResponse(response);
}