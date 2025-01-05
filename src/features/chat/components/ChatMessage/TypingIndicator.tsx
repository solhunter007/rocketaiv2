import React from 'react';
import { RocketAvatar } from '../../../avatar/components/RocketAvatar/RocketAvatar';

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 p-4 message-animation">
      <RocketAvatar className="pulse-glow" />
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-[#ff6b00] rounded-full typing-dot" />
        <div className="w-2 h-2 bg-[#ff6b00] rounded-full typing-dot" />
        <div className="w-2 h-2 bg-[#ff6b00] rounded-full typing-dot" />
      </div>
    </div>
  );
}