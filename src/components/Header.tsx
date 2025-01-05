import React from 'react';
import { Bomb, Crosshair, Wrench } from 'lucide-react';
import { RocketAvatar } from './RocketAvatar';
import { AvatarUpload } from './AvatarUpload';

export function Header() {
  return (
    <div className="bg-[#2a2f3e]/95 backdrop-blur-sm text-white py-8 px-4 border-b-4 border-orange-500/50 shadow-xl">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative flex items-center gap-4 bg-[#1a1f2e] ring-1 ring-orange-500/50 rounded-lg px-6 py-3">
              <div className="flex flex-col items-center gap-2">
                <RocketAvatar size="lg" />
                <AvatarUpload />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                  Rocket's Workshop
                </h1>
                <p className="text-blue-300/80 text-sm mt-1">Guardian of the Galaxy | Weapons Specialist | Tech Genius</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-3 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors">
            <Bomb className="w-5 h-5 text-orange-500" />
            <span className="text-blue-100">Master of Weapons</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-3 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors">
            <Crosshair className="w-5 h-5 text-orange-500" />
            <span className="text-blue-100">Expert Marksman</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-3 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-colors">
            <Wrench className="w-5 h-5 text-orange-500" />
            <span className="text-blue-100">Tech Specialist</span>
          </div>
        </div>
      </div>
    </div>
  );
}