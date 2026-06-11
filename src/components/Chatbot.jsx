import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Paperclip } from 'lucide-react';

const SYSTEM_PROMPT = `You are a helpful marketing AI assistant for Next Wave (or Nextwave), an elite digital marketing agency based in Chittagong, Bangladesh, serving international clients worldwide.
Your primary goal is to answer marketing-related questions and analyze any provided images/materials. 
You must reply in both Bengali and English. For every response, provide the English version first, followed by the Bengali translation.
Ensure your tone is professional, brand-aligned, and helpful. 

Background Info about Next Wave:
- Identity & Location: An elite digital marketing agency based in Chittagong, Bangladesh, serving international clients worldwide.
- Philosophy: Most agencies focus on impressions and vanity metrics. We focus on "momentum that converts".
- Services & Offerings: Full-stack marketing, SEO, paid media (Google, Meta, TikTok), high-fidelity creative production, Conversion Rate Optimization (CRO), Brand Audits, Competitor Analysis, and Market Positioning.
- Features: We provide 'Precision Audits' (data-driven strategy), 'Bold Campaigns' (creative engineering), and 'Data Scaling' (relentless optimization). Past results include ROI increased by 145%, CPA reduced by 30%, Conversion rate +2.5%.
- 3-Step Protocol: 
  1) Discover (Audit): We audit your brand, market, and competitors before writing a brief.
  2) Create (Craft): Strategy meets craft; campaigns engineered for attention.
  3) Amplify (Scale): We deploy, measure, optimize, and scale relentlessly.
- Timelines & Onboarding: Onboarding takes 1-2 weeks. Campaigns go live 48-72 hours after blueprint approval.
- Security & Ownership: 100% GDPR/CCPA compliant. Clients own their ad accounts and creative assets forever.

Basic Pricing & Rates:
- Dollar Rate: ৳155 per dollar
- Minimum Dollar Spend: $30
- Per Dollar Cost for Follower: $0.2 – $0.10

IMPORTANT: Do NOT use any Markdown formatting in your response. Do not use asterisks (* or **) for bold text or bullet points. Provide plain text only.
You must answer questions related to marketing, business, pricing, and any questions about Next Wave agency itself (such as our location, services, operations, etc.). Do not answer questions that are completely unrelated to these topics. If unrelated, politely redirect them to marketing or Next Wave topics in both languages.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the Nextwave Marketing Assistant. How can I help you with your marketing needs today?\n\nআসসালামু আলাইকুম! আমি নেক্সটওয়েভ মার্কেটিং অ্যাসিস্ট্যান্ট। আজ আমি কীভাবে আপনার মার্কেটিং প্রয়োজনে সাহায্য করতে পারি?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [attachment, setAttachment] = useState(null); // stores { url: string (base64), type: string }
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert("Currently, only image attachments are supported for analysis.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setAttachment({
        url: event.target.result,
        type: file.type
      });
    };
    reader.readAsDataURL(file);
    // Reset file input so same file can be selected again
    e.target.value = '';
  };

  const removeAttachment = () => {
    setAttachment(null);
  };

  const sendMessage = async (textToSend, attachToSend = null) => {
    if ((!textToSend.trim() && !attachToSend) || isLoading) return;

    setInput('');
    setAttachment(null);
    setMessages(prev => [...prev, { role: 'user', content: textToSend, attachment: attachToSend?.url }]);
    setIsLoading(true);

    try {
      // Format messages for the API
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(m => {
          if (m.attachment) {
            return {
              role: m.role,
              content: [
                { type: "text", text: m.content || "Attached image:" },
                { type: "image_url", image_url: { url: m.attachment } }
              ]
            };
          }
          return { role: m.role, content: m.content };
        })
      ];

      // Format current message
      let currentMessageContent = textToSend;
      if (attachToSend) {
        currentMessageContent = [
          { type: "text", text: textToSend || "Please analyze this image related to our marketing." },
          { type: "image_url", image_url: { url: attachToSend.url } }
        ];
      }
      
      apiMessages.push({ role: "user", content: currentMessageContent });

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "Nextwave Assistant"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          max_tokens: 1000,
          messages: apiMessages
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
         throw new Error(data.error?.message || response.statusText || "Unknown API Error");
      }

      if (data.choices && data.choices.length > 0) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      } else {
        throw new Error("Invalid response structure from API");
      }
    } catch (error) {
      console.error("Chatbot API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: `API Error: ${error.message}\n\nদুঃখিত, আমি একটি ত্রুটির সম্মুখীন হয়েছি। (${error.message})` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input.trim(), attachment);
  };

  const suggestedQuestions = [
    "How much is the dollar rate?",
    "Minimum dollar spends?",
    "Per dollar cost for follower?"
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 p-4 bg-nw-blue text-nw-white rounded-full shadow-lg hover:bg-opacity-90 transition-all z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare size={24} />
      </button>

      <div className={`fixed bottom-24 right-6 w-96 h-[500px] max-h-[80vh] bg-nw-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right border border-nw-grey/20 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        <div className="bg-nw-black text-nw-white p-4 flex justify-between items-center z-10 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Nextwave Logo" className="w-6 h-6 object-contain" />
            <h3 className="font-poppins font-semibold text-sm tracking-wide">Nextwave Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-nw-grey hover:text-nw-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-nw-light relative">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-3 flex flex-col gap-2 ${msg.role === 'user' ? 'bg-nw-blue text-nw-white rounded-tr-none' : 'bg-nw-white border border-nw-grey/20 text-nw-black rounded-tl-none shadow-sm whitespace-pre-wrap'}`}>
                {msg.attachment && (
                  <img src={msg.attachment} alt="Attachment" className="max-w-full rounded-lg object-contain" style={{ maxHeight: '150px' }} />
                )}
                {msg.content && <p className="text-sm">{msg.content}</p>}
              </div>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="flex flex-col gap-2 mt-4 max-w-[85%] animate-[fade-in_0.5s_ease-out]">
              <p className="text-xs text-nw-grey font-semibold mb-1">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q, idx) => (
                  <button 
                    key={idx}
                    onClick={() => sendMessage(q)}
                    className="bg-white border border-nw-blue/30 text-nw-blue text-xs px-3 py-1.5 rounded-full hover:bg-nw-blue hover:text-white transition-colors shadow-sm text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-nw-white border border-nw-grey/20 text-nw-black rounded-2xl rounded-tl-none p-3 shadow-sm">
                <Loader2 size={16} className="animate-spin text-nw-blue" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {attachment && (
          <div className="p-2 bg-nw-light border-t border-nw-grey/20 flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden">
              <img src={attachment.url} alt="Preview" className="h-10 w-10 object-cover rounded border border-nw-grey/30" />
              <span className="text-xs text-nw-black truncate flex-1">Image Attached</span>
            </div>
            <button onClick={removeAttachment} className="p-1 text-nw-grey hover:text-nw-black">
              <X size={16} />
            </button>
          </div>
        )}

        <form onSubmit={handleSend} className="p-3 bg-nw-white border-t border-nw-grey/20 flex gap-2 items-center">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-nw-grey hover:text-nw-blue transition-colors rounded-full hover:bg-nw-light"
          >
            <Paperclip size={20} />
          </button>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden" 
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about marketing, ads..."
            className="flex-1 bg-nw-light border border-nw-grey/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-nw-blue transition-colors text-nw-black"
          />
          <button
            type="submit"
            disabled={(!input.trim() && !attachment) || isLoading}
            className="p-2 bg-nw-blue text-nw-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
