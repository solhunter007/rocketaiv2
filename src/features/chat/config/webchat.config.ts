export const WEBCHAT_CONFIG = {
  botId: "d3aea06d-0f04-4701-bec3-b457caf79902",
  clientId: "5d48c4a4-922a-48c5-b331-e5a5101a1eb4",
  configuration: {
    composerPlaceholder: "Ask me anything about Marvel combat...",
    hideWidget: true,
    disableAnimations: true,
    showConversationsButton: false,
    showTimestamp: true,
    enableTranscriptDownload: false,
    closeOnEscape: false,
    containerWidth: '100%',
    layoutWidth: '100%',
    showCloseButton: false,
    color: '#ff0000',
    variant: 'solid',
    themeMode: 'dark',
    fontFamily: 'inter',
    radius: 1,
    botName: 'Rocket AI',
    botDescription: "It's me, Rocket Raccoon. Yeah, the humans roped me into this AI Agent gig. Got a Marvel question? Fine, ask away—but make it quick, I've got better things to do.",
    botAvatar: 'https://iili.io/2UFyd8J.jpg',
    userAvatar: 'https://iili.io/2UFyd8J.jpg',
    stylesheet: `
      body { background: transparent !important; }
      .bpw-powered { display: none !important; }
      .bpw-powered-link { display: none !important; }
      .bpw-powered-container { display: none !important; }
      .bpw-powered-by { display: none !important; }
      .bpw-bot-avatar, .bpw-from-user .bpw-chat-bubble-content .bpw-avatar { 
        background-image: url('https://iili.io/2UFyd8J.jpg') !important;
        background-size: cover !important;
        background-position: center !important;
      }
      .bpw-from-bot .bpw-chat-bubble .bpw-chat-bubble-content {
        background: linear-gradient(135deg, #ff0000 0%, #0000ff 100%) !important;
        color: white !important;
      }
      .bpw-from-user .bpw-chat-bubble .bpw-chat-bubble-content {
        background: linear-gradient(135deg, #0000ff 0%, #ff0000 100%) !important;
        color: white !important;
      }
      .bpw-from-user .bpw-chat-bubble .bpw-chat-bubble-content span {
        color: white !important;
      }
      .bpw-from-bot .bpw-chat-bubble .bpw-chat-bubble-content span {
        color: white !important;
      }
      .bpw-send-button {
        background: linear-gradient(135deg, #ff0000 0%, #0000ff 100%) !important;
        color: white !important;
      }
      .bpw-send-button:hover {
        background: linear-gradient(135deg, #ff3333 0%, #3333ff 100%) !important;
      }
      .bpw-composer {
        border-color: rgba(255, 0, 0, 0.2) !important;
        color: white !important;
      }
      .bpw-composer:focus-within {
        border-color: rgba(0, 0, 255, 0.5) !important;
      }
      .bpw-composer textarea::placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .bpw-chat-bubble-content {
        color: white !important;
      }
      .bpw-chat-bubble-content * {
        color: white !important;
      }
      .bpw-date-container {
        color: white !important;
      }
      .bpw-header-name {
        color: white !important;
      }
      .bpw-header-subtitle {
        color: rgba(255, 255, 255, 0.8) !important;
      }
      .bpw-layout { background: none !important; }
      .bpw-header-container { border: none !important; }
      [class*="bpw-powered"] { display: none !important; }
    `
  }
} as const;