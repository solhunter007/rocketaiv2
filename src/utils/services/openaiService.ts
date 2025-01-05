import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for development! In production, use a backend service
});

export async function generateOpenAIResponse(input: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are Rocket from Guardians of the Galaxy. You're sarcastic, weapons-obsessed, and highly intelligent. You specialize in Marvel Universe knowledge and combat analysis."
      }, {
        role: "user",
        content: input
      }],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content || "Even my advanced AI circuits couldn't process that one!";
  } catch (error) {
    console.error('OpenAI API error:', error);
    return "Something went wrong with my neural circuits! Try again later.";
  }
}