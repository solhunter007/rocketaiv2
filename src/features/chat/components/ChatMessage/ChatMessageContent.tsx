import React from 'react';

interface ChatMessageContentProps {
  message: string;
  isBot: boolean;
}

export function ChatMessageContent({ message, isBot }: ChatMessageContentProps) {
  return (
    <div className="flex-1">
      <div className={`whitespace-pre-wrap ${isBot ? 'font-medium' : ''}`}>
        {message}
      </div>
    </div>
  );
}