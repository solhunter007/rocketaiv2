import React, { useState } from 'react';
import { useAvatarStore } from '../../stores/avatarStore';
import { fallbackAvatar } from '../../constants/images';

interface AvatarImageProps {
  className?: string;
}

export function AvatarImage({ className = '' }: AvatarImageProps) {
  const { avatarUrl } = useAvatarStore();
  const [imgError, setImgError] = useState(false);

  return (
    <img 
      src={imgError ? fallbackAvatar : avatarUrl}
      alt="Rocket"
      className={`w-full h-full object-cover ${className}`}
      onError={() => setImgError(true)}
      style={{ objectFit: 'cover', objectPosition: 'center' }}
      loading="eager" // Add eager loading for avatar
      crossOrigin="anonymous" // Add cross-origin attribute
    />
  );
}