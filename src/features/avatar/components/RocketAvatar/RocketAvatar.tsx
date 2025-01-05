import React from 'react';
import { useRocketAvatar } from './useRocketAvatar';
import { RocketAvatarImage } from './RocketAvatarImage';

interface RocketAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function RocketAvatar({ className = '', size = 'md' }: RocketAvatarProps) {
  const { containerClasses } = useRocketAvatar(className, size);
  
  return (
    <div className={containerClasses}>
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6b00] to-[#3a3f4e] rounded-full blur opacity-25 group-hover:opacity-100 transition-all duration-300" />
      <RocketAvatarImage size={size} />
    </div>
  );
}