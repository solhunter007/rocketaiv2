import React, { useEffect, useRef } from 'react';
import { WEBCHAT_CONFIG } from '../../config/webchat.config';

interface WebChatFrameProps {
  className?: string;
}

export function WebChatFrame({ className = '' }: WebChatFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
              window.addEventListener('load', () => {
                const initBot = () => {
                  window.botpress?.init({
                    botId: "${WEBCHAT_CONFIG.botId}",
                    clientId: "${WEBCHAT_CONFIG.clientId}",
                    hostUrl: "https://cdn.botpress.cloud/webchat/v2.2",
                    messagingUrl: "https://messaging.botpress.cloud",
                    webhookId: "${WEBCHAT_CONFIG.botId}",
                    lazySocket: true,
                    frontendVersion: "v2.2",
                    useSessionStorage: true,
                    theme: "prism",
                    themeColor: "#ff0000",
                    configuration: ${JSON.stringify({
                      ...WEBCHAT_CONFIG.configuration,
                      autoOpenDelay: 0,
                      alwaysOpen: true,
                    })}
                  });

                  // Force open immediately
                  setTimeout(() => window.botpress?.open(), 100);
                };

                // Initialize and open
                initBot();

                // Ensure it opens when ready
                window.botpress?.onEvent("webchat:ready", () => {
                  window.botpress?.open();
                }, true);
              });
            </script>
          </body>
        </html>
      `;
    }
  }, []);

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <iframe
        ref={iframeRef}
        className="h-full w-full border-none bg-transparent"
        title="Rocket AI Chat"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}