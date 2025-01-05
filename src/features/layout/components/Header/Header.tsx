import React from 'react';
import { Shield, Sparkles, Brain } from 'lucide-react';
import { RocketAvatar } from '../../../avatar/components/RocketAvatar';
import { AvatarUpload } from '../../../avatar/components/AvatarUpload';

export function Header() {
  return (
    <div className="bg-transparent text-white py-8 px-4 border-b-4 border-[#ff6b00]/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-6 mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex flex-col md:flex-row items-center gap-4 bg-[#1a1f2e]/50 backdrop-blur-md ring-1 ring-[#ff6b00]/50 rounded-lg px-6 py-4">
              <div className="flex flex-col items-center gap-2">
                <RocketAvatar size="lg" />
                <AvatarUpload />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] bg-clip-text text-transparent">
                  Rocket AI
                </h1>
                <p className="text-[#ffa066] text-lg mt-1 font-medium">Personal Marvel AI Genius</p>
              </div>
            </div>
          </div>

          {/* Updated Feature Cards - Bigger Size */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
            <div className="bg-[#1a1f2e]/50 backdrop-blur-md p-4 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all duration-300 group">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-8 h-8 text-[#ff6b00] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  <h3 className="text-[#ffa066] text-lg font-semibold mb-1">Marvel Expert</h3>
                  <p className="text-[#ffa066]/60 text-sm">Deep knowledge of the Marvel Universe</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e]/50 backdrop-blur-md p-4 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all duration-300 group">
              <div className="flex flex-col items-center gap-2">
                <Sparkles className="w-8 h-8 text-[#ff6b00] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  <h3 className="text-[#ffa066] text-lg font-semibold mb-1">Battle Analyst</h3>
                  <p className="text-[#ffa066]/60 text-sm">Compare heroes and predict battles</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1f2e]/50 backdrop-blur-md p-4 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/50 transition-all duration-300 group">
              <div className="flex flex-col items-center gap-2">
                <Brain className="w-8 h-8 text-[#ff6b00] group-hover:scale-110 transition-transform duration-300" />
                <div className="text-center">
                  <h3 className="text-[#ffa066] text-lg font-semibold mb-1">Character Insights</h3>
                  <p className="text-[#ffa066]/60 text-sm">Deep character analysis and lore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}