import React, { useState, useRef, useEffect } from 'react';
import { Bomb, Rocket, Zap } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput('');
    setIsTyping(false);
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-[#ff6b00]/20 p-4 bg-gradient-to-b from-[#2a2f3e]/90 to-[#1a1f2e]/90">
      <div className="relative flex gap-4">
        <div className="flex-1 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setIsTyping(e.target.value.length > 0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Ask me anything... I got answers and explosives!"
            className="w-full rounded-lg bg-[#2a2f3e]/90 border-2 border-[#ff6b00]/20 px-4 py-2 pr-12 text-[#ffa066] placeholder-[#ffa066]/50 focus:outline-none focus:border-[#ff6b00]/50 resize-none min-h-[44px] max-h-32 transition-all duration-200 relative"
            rows={1}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <Zap className={`w-4 h-4 transition-all duration-300 ${
              isTyping ? 'text-[#ff6b00] rotate-12' : 'text-[#ffa066]/50'
            }`} />
            <Rocket className={`w-5 h-5 transition-all duration-300 ${
              isTyping ? 'text-[#ff6b00] rotate-12' : 'text-[#ffa066]/50'
            }`} />
          </div>
        </div>
        <button
          type="submit"
          disabled={!input.trim()}
          className={`${
            input.trim() 
              ? 'bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] hover:from-[#ff8533] hover:to-[#4a4f5e]' 
              : 'bg-[#2a2f3e]'
          } text-white px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 group relative`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative flex items-center gap-2">
            <Bomb className={`w-5 h-5 transition-transform duration-300 ${
              input.trim() ? 'group-hover:rotate-12' : ''
            }`} />
            Send
          </div>
        </button>
      </div>
      <div className="mt-2 text-xs text-[#ffa066]/70 italic">
        Press Enter to send, Shift + Enter for new line
      </div>
    </form>
  );
}