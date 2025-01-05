import React from 'react';
import { ChatInterface } from './features/chat/components/ChatInterface';
import { LandingPage } from './features/landing/components/LandingPage';
import { LoadingScreen } from './features/loading/LoadingScreen';
import { useAppStore } from './stores/appStore';

export default function App() {
  const { hasEntered, isLoading, setIsLoading } = useAppStore();

  return (
    <div className="min-h-screen bg-[#1a1f2e] bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-blend-overlay bg-cover bg-center">
      {hasEntered ? (
        isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <ChatInterface />
        )
      ) : (
        <LandingPage />
      )}
    </div>
  );
}