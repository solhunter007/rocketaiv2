import React, { useEffect, useRef } from 'react';
import { WEBCHAT_CONFIG } from '../../config/webchat.config';

interface WebChatFrameProps {
  className?: string;
}

export function WebChatFrame({ className = '' }: WebChatFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = generateIframeContent();
    }
  }, []);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <iframe
        ref={iframeRef}
        className="h-full w-full border-none bg-transparent"
        title="Rocket AI Chat"
      />
    </div>
  );
}

function generateIframeContent(): string {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <style>
          body { 
            margin: 0; 
            background: transparent; 
            overflow: hidden;
          }
          #webchat-container {
            height: 100vh;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div id="webchat-container"></div>
        <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
        <script>
          window.botpress.on("webchat:ready", () => {
            botpress.open();
          });

          window.botpress.init({
            botId: "${WEBCHAT_CONFIG.botId}",
            clientId: "${WEBCHAT_CONFIG.clientId}",
            configuration: ${JSON.stringify(WEBCHAT_CONFIG.configuration)}
          });
        </script>
      </body>
    </html>
  `;
}