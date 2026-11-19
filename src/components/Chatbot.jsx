'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  AlertIcon,
  ChatbotSparkleIcon,
  CloseCircleIcon,
  PaperclipIcon,
  RefreshIcon,
  RestartIcon,
  SendIcon,
} from './Icons';

const INITIAL_MESSAGES = [
  {
    role: 'assistant',
    content:
      'Hello! Ask me anything about Next Wave’s 360 marketing services, client work, leadership, office location, or campaign rates. (বাংলাতেও জিজ্ঞাসা করতে পারেন)',
  },
];

export default function Chatbot({ initialOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachment, setAttachment] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const hasOpenedOnceRef = useRef(false);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen && messages.length > 1) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  useEffect(() => {
    if (isOpen) {
      hasOpenedOnceRef.current = true;
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
      return () => clearTimeout(timer);
    } else if (hasOpenedOnceRef.current) {
      launcherRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Only image files (PNG, JPG, WebP) are supported for analysis.');
      e.target.value = '';
      return;
    }

    setUploadError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      setAttachment({
        url: event.target.result,
        type: file.type,
      });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const removeAttachment = () => {
    setAttachment(null);
    setUploadError('');
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInput('');
    setAttachment(null);
    setUploadError('');
    inputRef.current?.focus();
  };

  const canClear =
    !isLoading && (messages.length > 1 || Boolean(input.trim()) || Boolean(attachment) || Boolean(uploadError));

  const sendMessage = async (textToSend, attachToSend = null) => {
    if ((!textToSend.trim() && !attachToSend) || isLoading) return;

    const historyMessages = messages.slice(1).slice(-8);
    setInput('');
    setAttachment(null);
    setUploadError('');
    setMessages((prev) => [...prev, { role: 'user', content: textToSend, attachment: attachToSend?.url }]);
    setIsLoading(true);

    try {
      const apiMessages = historyMessages.map((m) => {
        if (m.attachment) {
          return {
            role: m.role,
            content: [
              { type: 'text', text: m.content || 'Attached image:' },
              { type: 'image_url', image_url: { url: m.attachment } },
            ],
          };
        }
        return { role: m.role, content: m.content };
      });

      let currentMessageContent = textToSend;
      if (attachToSend) {
        currentMessageContent = [
          { type: 'text', text: textToSend || 'Please analyze this image related to our marketing.' },
          { type: 'image_url', image_url: { url: attachToSend.url } },
        ];
      }

      apiMessages.push({ role: 'user', content: currentMessageContent });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stream: true,
          messages: apiMessages,
        }),
      });

      if (!response.ok) {
        let errMessage = response.statusText || 'Unknown API Error';
        try {
          const data = await response.json();
          errMessage = data.error?.message || errMessage;
        } catch {}
        throw new Error(errMessage);
      }

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (!reply) throw new Error('Invalid response structure from API');
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } else if (response.body) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let streamedText = '';
        let appended = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          if (!chunk) continue;
          streamedText += chunk;
          if (!appended) {
            appended = true;
            setIsLoading(false);
            setMessages((prev) => [...prev, { role: 'assistant', content: streamedText }]);
          } else {
            setMessages((prev) => {
              const next = [...prev];
              next[next.length - 1] = { role: 'assistant', content: streamedText };
              return next;
            });
          }
        }

        if (!appended) {
          throw new Error('Empty response received from assistant.');
        }
      } else {
        throw new Error('Empty response body from API');
      }
    } catch (error) {
      console.error('Chatbot API Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, could not complete your request right now (${error.message}). You can reach us on WhatsApp (+880 1711-204614) or via our Contact page.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input.trim(), attachment);
  };

  const suggestedQuestions = [
    'What services does Next Wave offer?',
    'Dollar rate & minimum spend?',
    'Office & Founder info?',
  ];

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Next Wave AI Assistant"
        aria-expanded={isOpen}
        aria-controls="nextwave-chatbot-dialog"
        title="Next Wave Assistant"
        className={`fixed bottom-[140px] right-4 w-[52px] h-[52px] flex items-center justify-center bg-[linear-gradient(135deg,#0E9ED9_0%,#076C96_100%)] text-white rounded-full border border-white/30 shadow-[0_10px_24px_rgba(9,19,69,0.28)] hover:brightness-110 hover:-translate-y-0.5 hover:scale-105 active:scale-95 transition-all duration-200 z-50 ${
          isOpen ? 'scale-95 opacity-0 pointer-events-none invisible' : 'scale-100 opacity-100 visible'
        }`}
      >
        <ChatbotSparkleIcon size={26} />
      </button>

      <div
        id="nextwave-chatbot-dialog"
        role="dialog"
        aria-modal={isOpen ? 'true' : undefined}
        aria-hidden={!isOpen}
        aria-label="Next Wave Assistant"
        className={`fixed bottom-[140px] right-4 w-[min(24rem,calc(100vw-2rem))] h-[500px] max-h-[calc(100vh-160px)] bg-white rounded-[2px] shadow-2xl flex flex-col overflow-hidden transition-[transform,opacity] duration-200 z-50 origin-bottom-right border border-[#262626]/25 ${
          isOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#262626] text-white px-4 h-14 flex justify-between items-center z-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/NextWave%20Logo%20PNG/NextWave%20Logo%20PNG/Logo%20Mark%20Only%20-%20Vertical%20-%20For%20Dark%404x.png"
              alt="Next Wave"
              className="w-5 h-5 object-contain"
            />
            <h3 className="font-poppins font-medium text-sm tracking-wide">Next Wave Assistant</h3>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleClearChat}
              disabled={!canClear}
              aria-label="Clear conversation"
              title="Clear conversation"
              className="w-11 h-11 flex items-center justify-center text-white/85 hover:text-white disabled:text-white/35 disabled:cursor-not-allowed transition-colors"
            >
              <RestartIcon size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="w-11 h-11 flex items-center justify-center text-white/85 hover:text-white transition-colors"
            >
              <CloseCircleIcon size={20} />
            </button>
          </div>
        </div>

        <div className="px-4 py-2 bg-[#F7F7F7] border-b border-[#CCCCCC] text-xs font-sans text-[#262626]/75 leading-snug">
          AI responses use Google Gemini. Avoid sharing confidential credentials.{' '}
          <Link href="/privacy-policy" className="text-[#076C96] font-semibold underline underline-offset-2">
            Privacy Policy
          </Link>
        </div>

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F7F7F7]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[84%] rounded-[2px] p-3.5 flex flex-col gap-2 ${
                  msg.role === 'user'
                    ? 'bg-[#076C96] text-white'
                    : 'bg-white border border-[#CCCCCC] text-[#262626] whitespace-pre-wrap'
                }`}
              >
                {msg.attachment && (
                  <img
                    src={msg.attachment}
                    alt="Uploaded attachment"
                    className="max-w-full object-contain border border-white/20"
                    style={{ maxHeight: '150px' }}
                  />
                )}
                {msg.content && <p className="text-sm font-sans leading-relaxed">{msg.content}</p>}
              </div>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-xs text-[#262626]/80 font-poppins font-medium">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => sendMessage(q)}
                    className="bg-white border border-[#076C96] text-[#076C96] text-xs font-sans font-semibold px-3 py-2 rounded-[2px] hover:bg-[#076C96] hover:text-white transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex justify-start" role="status" aria-label="Assistant is typing">
              <div className="bg-white border border-[#CCCCCC] text-[#262626] rounded-[2px] p-3">
                <RefreshIcon size={18} className="animate-spin text-[#076C96]" />
              </div>
            </div>
          )}
        </div>

        {uploadError && (
          <div
            role="alert"
            className="px-3 py-2 bg-[#FEF2F2] border-t border-[#B91C1C] text-[#991B1B] text-xs font-sans flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <AlertIcon size={16} />
              <span>{uploadError}</span>
            </div>
            <button
              type="button"
              onClick={() => setUploadError('')}
              aria-label="Dismiss attachment warning"
              className="w-8 h-8 flex items-center justify-center shrink-0"
            >
              <CloseCircleIcon size={16} />
            </button>
          </div>
        )}

        {attachment && (
          <div className="px-3 py-2 bg-[#F7F7F7] border-t border-[#CCCCCC] flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <img src={attachment.url} alt="Attachment preview" className="h-10 w-10 object-cover border border-[#CCCCCC]" />
              <span className="text-xs text-[#262626] truncate flex-1 font-sans">Image Attached</span>
            </div>
            <button
              type="button"
              onClick={removeAttachment}
              aria-label="Remove attachment"
              className="w-11 h-11 flex items-center justify-center text-[#262626]/75 hover:text-[#262626]"
            >
              <CloseCircleIcon size={18} />
            </button>
          </div>
        )}

        <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-[#CCCCCC] flex gap-2 items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Attach an image"
            className="w-11 h-11 shrink-0 flex items-center justify-center text-[#262626]/80 hover:text-[#076C96] transition-colors rounded-[2px] hover:bg-[#F7F7F7]"
          >
            <PaperclipIcon size={19} />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            aria-label="Choose image file"
          />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about marketing, ads..."
            aria-label="Chat message"
            className="flex-1 bg-[#F7F7F7] border border-[#CCCCCC] rounded-[2px] px-3.5 h-11 text-base sm:text-sm focus:outline-none focus:border-[#076C96] transition-colors text-[#262626] placeholder:text-[#666666]"
          />
          <button
            type="submit"
            disabled={(!input.trim() && !attachment) || isLoading}
            aria-label="Send message"
            className="w-11 h-11 shrink-0 flex items-center justify-center bg-[#076C96] text-white rounded-[2px] hover:bg-[#055475] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendIcon size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
