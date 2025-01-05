import React, { useEffect, useRef } from 'react';

interface WebChatProps {
  className?: string;
}

export function WebChat({ className = '' }: WebChatProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure iframe content is reloaded when component mounts
    if (iframeRef.current) {
      iframeRef.current.srcdoc = `
        <!doctype html>
        <html lang="en">
          <head>
            <style>
              body { margin: 0; background: transparent; }
            </style>
          </head>
          <body>
            <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
            <script defer>
              window.botpress.on("webchat:ready", (conversationId) => {
                botpress.open();
              });
              window.botpress.init({
                "botId": "d3aea06d-0f04-4701-bec3-b457caf79902",
                "configuration": {
                  "website": {},
                  "email": {},
                  "phone": {},
                  "termsOfService": {},
                  "privacyPolicy": {},
                  "color": "#ff6b00",
                  "variant": "solid",
                  "themeMode": "dark",
                  "fontFamily": "inter",
                  "radius": 1,
                  "hideWidget": true,
                  "containerWidth": "100%",
                  "layoutWidth": "100%",
                  "showConversationsButton": false,
                  "showTimestamp": true,
                  "enableTranscriptDownload": false,
                  "stylesheet": "body { background: transparent !important; }"
                },
                "clientId": "0e772c62-e321-46b5-a9fb-a88c5104e067"
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
      />
    </div>
  );
}