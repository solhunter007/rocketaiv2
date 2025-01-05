import React from 'react';
import { ChatMessageAvatar } from './ChatMessageAvatar';
import { ChatMessageContent } from './ChatMessageContent';
import { useChatMessageStyles } from './useChatMessageStyles';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  animate?: boolean;
}

export function ChatMessage({ message, isBot, animate = true }: ChatMessageProps) {
  const { containerClasses } = useChatMessageStyles(isBot, animate);
  
  return (
    <div className={containerClasses}>
      <ChatMessageAvatar isBot={isBot} />
      <ChatMessageContent message={message} isBot={isBot} />
    </div>
  );
}