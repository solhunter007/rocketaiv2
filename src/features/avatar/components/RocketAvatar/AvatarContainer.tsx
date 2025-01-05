import React from 'react';
import { AVATAR_SIZES, AvatarSize } from '../../constants/config';

interface AvatarContainerProps {
  size: AvatarSize;
  children: React.ReactNode;
}

export function AvatarContainer({ size, children }: AvatarContainerProps) {
  return (
    <div className={`${AVATAR_SIZES[size]} relative rounded-full overflow-hidden border-2 border-[#ff6b00]/50 transform group-hover:scale-105 transition-all duration-300`}>
      {children}
    </div>
  );
}