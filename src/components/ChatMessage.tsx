import React from 'react';
import { User } from 'lucide-react';
import { RocketAvatar } from './RocketAvatar';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  animate?: boolean;
}

export function ChatMessage({ message, isBot, animate = true }: ChatMessageProps) {
  return (
    <div 
      className={`flex gap-3 ${
        isBot 
          ? 'bg-gradient-to-r from-slate-900/50 to-blue-900/50 text-blue-100' 
          : 'bg-white/10 text-gray-200'
      } p-4 rounded-lg transition-all duration-300 hover:shadow-lg border border-orange-500/20 hover:border-orange-500/40 ${
        animate ? 'message-animation' : ''
      }`}
    >
      {isBot ? (
        <RocketAvatar />
      ) : (
        <div className="relative group">
          <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center border-2 border-blue-500/30 group-hover:border-blue-500/50 transition-all duration-300">
            <User className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      )}
      <div className="flex-1">
        <div className={`whitespace-pre-wrap ${isBot ? 'font-medium' : ''}`}>
          {message}
        </div>
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 p-4 message-animation">
      <RocketAvatar className="pulse-glow" />
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-orange-500 rounded-full typing-dot" />
        <div className="w-2 h-2 bg-orange-500 rounded-full typing-dot" />
        <div className="w-2 h-2 bg-orange-500 rounded-full typing-dot" />
      </div>
    </div>
  );
}