import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ADMIN_KEY, defaultAvatar } from '../constants';

interface AvatarState {
  avatarUrl: string;
  isAdmin: boolean;
  setAvatarUrl: (url: string, adminKey?: string) => void;
}

export const useAvatarStore = create<AvatarState>()(
  persist(
    (set) => ({
      avatarUrl: defaultAvatar,
      isAdmin: false,
      setAvatarUrl: (url: string, adminKey?: string) => {
        if (adminKey === ADMIN_KEY) {
          set({ avatarUrl: url });
        } else {
          console.error('Unauthorized attempt to change avatar');
        }
      },
    }),
    {
      name: 'rocket-avatar',
    }
  )
);