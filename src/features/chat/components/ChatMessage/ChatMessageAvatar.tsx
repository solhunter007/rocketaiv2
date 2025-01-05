import React from 'react';
import { User } from 'lucide-react';
import { RocketAvatar } from '../../../avatar/components/RocketAvatar';

interface ChatMessageAvatarProps {
  isBot: boolean;
}

export function ChatMessageAvatar({ isBot }: ChatMessageAvatarProps) {
  if (isBot) {
    return <RocketAvatar />;
  }

  return (
    <div className="relative group">
      <div className="w-10 h-10 bg-[#2a2f3e]/30 rounded-full flex items-center justify-center border-2 border-[#ff6b00]/30 group-hover:border-[#ff6b00]/50 transition-all duration-300">
        <User className="w-6 h-6 text-[#ffa066]" />
      </div>
    </div>
  );
}