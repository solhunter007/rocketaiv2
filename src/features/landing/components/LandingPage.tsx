import React from 'react';
import { useAppStore } from '../../../stores/appStore';
import { RocketAvatar } from '../../avatar/components/RocketAvatar';
import { Shield, Sparkles, Brain } from 'lucide-react';

export function LandingPage() {
  const { setHasEntered } = useAppStore();

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasEntered(true);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 cursor-pointer relative overflow-hidden"
      onClick={() => setHasEntered(true)}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20" />
      
      <div className="text-center space-y-6 max-w-3xl mx-auto relative z-10">
        {/* Ultra Large Avatar Section */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="relative group animate-float scale-100 md:scale-150">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <RocketAvatar size="ultra" />
          </div>
        </div>

        {/* Title Section */}
        <h1 className="text-5xl md:text-7xl font-comic bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] bg-clip-text text-transparent drop-shadow-2xl">
          Rocket AI
        </h1>

        <p className="text-xl md:text-2xl text-[#ffa066] font-title">
          Your Personal Guide to the Marvel Multiverse
        </p>

        {/* Clickable Feature Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          <button
            onClick={handleCardClick}
            className="bg-[#1a1f2e]/80 backdrop-blur-sm p-4 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/40 transition-all duration-300 group cursor-pointer w-full md:w-32"
          >
            <Shield className="w-8 h-8 text-[#ff6b00] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-[#ffa066] font-comic text-sm">Marvel Expert</h3>
          </button>

          <button
            onClick={handleCardClick}
            className="bg-[#1a1f2e]/80 backdrop-blur-sm p-4 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/40 transition-all duration-300 group cursor-pointer w-full md:w-32"
          >
            <Sparkles className="w-8 h-8 text-[#ff6b00] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-[#ffa066] font-comic text-sm">Battle Analyst</h3>
          </button>

          <button
            onClick={handleCardClick}
            className="bg-[#1a1f2e]/80 backdrop-blur-sm p-4 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00]/40 transition-all duration-300 group cursor-pointer w-full md:w-32"
          >
            <Brain className="w-8 h-8 text-[#ff6b00] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-[#ffa066] font-comic text-sm">Character Insights</h3>
          </button>
        </div>

        <div className="text-[#ffa066]/80 text-lg md:text-xl font-title mt-6 md:mt-8 animate-pulse">
          Click anywhere to enter the multiverse...
        </div>
      </div>
    </div>
  );
}