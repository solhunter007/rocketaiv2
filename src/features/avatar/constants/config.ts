export const ADMIN_KEY = 'your-secret-key-here';

export const AVATAR_SIZES = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
  xxl: 'w-40 h-40',
  mega: 'w-48 h-48',
  ultra: 'w-64 h-64'
} as const;

export type AvatarSize = keyof typeof AVATAR_SIZES;