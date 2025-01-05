import React from 'react';
import { WebChatContainer } from './WebChat';
import { RocketAvatar } from '../../avatar/components/RocketAvatar';

export function ChatInterface() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 md:p-4 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e]/90 via-[#1a1f2e]/50 to-[#1a1f2e]/90" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        {/* Chat Container */}
        <div className="bg-[#2a2f3e]/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border-2 border-[#ff6b00]/20 relative">
          {/* Centered Avatar Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <RocketAvatar size="ultra" className="opacity-15" />
          </div>

          {/* WebChat Area */}
          <WebChatContainer />
        </div>

        {/* Helper Text */}
        <p className="text-center text-[#ffa066]/60 mt-4 font-medium text-sm md:text-base">
          Ask me about Marvel characters, 1v1 outcomes, lore and more!
        </p>
      </div>
    </div>
  );
}