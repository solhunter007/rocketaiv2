import React, { useEffect, useState } from 'react';
import { RocketAvatar } from '../avatar/components/RocketAvatar';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Start fade out after 1.2 seconds
    const fadeTimeout = setTimeout(() => {
      setOpacity(0);
    }, 1200);

    // Complete loading after fade animation (1.7 seconds total)
    const completeTimeout = setTimeout(() => {
      onLoadingComplete();
    }, 1700);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1a1f2e]"
      style={{ 
        opacity, 
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <div className="animate-bounce mb-8">
        <RocketAvatar size="xl" />
      </div>
      <div className="text-[#ff6b00] text-2xl font-comic">
        Initializing Marvel Intelligence systems...
      </div>
    </div>
  );
}