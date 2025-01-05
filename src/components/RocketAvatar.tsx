import React from 'react';
import { useAvatarStore } from '../stores/avatarStore';

interface RocketAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function RocketAvatar({ className = '', size = 'md' }: RocketAvatarProps) {
  const { avatarUrl } = useAvatarStore();
  
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  return (
    <div className={`relative flex-shrink-0 group ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition-all duration-300" />
      <div className={`${sizeClasses[size]} relative rounded-full overflow-hidden border-2 border-orange-500/50 transform group-hover:scale-105 transition-all duration-300`}>
        <img 
          src={avatarUrl}
          alt="Rocket"
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    </div>
  );
}