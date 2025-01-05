import React from 'react';
import { WebChatFrame } from './WebChatFrame';

interface WebChatContainerProps {
  className?: string;
}

export function WebChatContainer({ className = '' }: WebChatContainerProps) {
  return (
    <div className="h-[calc(100vh-220px)] md:h-[600px] relative z-10">
      <WebChatFrame className={className} />
    </div>
  );
}