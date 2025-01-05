import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  hasEntered: boolean;
  isLoading: boolean;
  setHasEntered: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  resetState: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasEntered: false,
      isLoading: true,
      setHasEntered: (value) => set({ hasEntered: value, isLoading: value }),
      setIsLoading: (value) => set({ isLoading: value }),
      resetState: () => set({ hasEntered: false, isLoading: true }),
    }),
    {
      name: 'rocket-ai-state',
      onRehydrateStorage: () => {
        // Reset state when the page is refreshed
        return (state) => {
          if (state) {
            state.resetState();
          }
        };
      },
    }
  )
);