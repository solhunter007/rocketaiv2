import React from 'react';
import { AvatarSize } from '../../constants/config';
import { AvatarContainer } from './AvatarContainer';
import { AvatarImage } from './AvatarImage';

interface RocketAvatarImageProps {
  size: AvatarSize;
}

export function RocketAvatarImage({ size }: RocketAvatarImageProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage />
    </AvatarContainer>
  );
}