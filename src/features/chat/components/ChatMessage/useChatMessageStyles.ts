export function useChatMessageStyles(isBot: boolean, animate: boolean) {
  const containerClasses = `
    flex gap-3 
    ${isBot 
      ? 'bg-gradient-to-r from-[#2a2f3e]/80 to-[#3a3f4e]/80 text-[#ffa066]' 
      : 'bg-[#1a1f2e]/60 text-gray-300'
    } 
    p-4 rounded-lg transition-all duration-300 
    hover:shadow-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/40
    ${animate ? 'message-animation' : ''}
  `.trim();

  return { containerClasses };
}