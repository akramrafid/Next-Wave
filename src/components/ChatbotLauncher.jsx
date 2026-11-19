'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ChatbotSparkleIcon } from './Icons';

const loadChatbot = () => import('./Chatbot');
const LazyChatbot = dynamic(loadChatbot, { ssr: false });

/** Lightweight launcher button that code-splits the 400+ line Chatbot dialog until interaction. */
export default function ChatbotLauncher() {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return <LazyChatbot initialOpen />;
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      onPointerEnter={() => loadChatbot()}
      onFocus={() => loadChatbot()}
      aria-label="Open Next Wave AI Assistant"
      aria-expanded="false"
      title="Next Wave Assistant"
      className="fixed bottom-[140px] right-4 w-[52px] h-[52px] flex items-center justify-center bg-[linear-gradient(135deg,#0E9ED9_0%,#076C96_100%)] text-white rounded-full border border-white/30 shadow-[0_10px_24px_rgba(9,19,69,0.28)] hover:brightness-110 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-200 z-50"
    >
      <ChatbotSparkleIcon size={26} />
    </button>
  );
}
