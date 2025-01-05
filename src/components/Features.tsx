import React from 'react';
import { Bomb, Cpu, Shield } from 'lucide-react';

export function Features() {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100 hover:border-orange-300 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <Bomb className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-semibold">Weapons & Explosives</h3>
        </div>
        <p className="text-gray-600">"Need something blown up? You've come to the right raccoon... Don't call me raccoon!"</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100 hover:border-orange-300 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <Cpu className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-semibold">Tech Solutions</h3>
        </div>
        <p className="text-gray-600">"If it's broke, I can fix it. If it ain't broke, I can make it better. And more explosive."</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100 hover:border-orange-300 transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-semibold">Combat Tactics</h3>
        </div>
        <p className="text-gray-600">"Need a battle plan? I got experience blowing up moons. ...What? They were really small moons!"</p>
      </div>
    </div>
  );
}