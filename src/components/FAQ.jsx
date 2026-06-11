import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, MessageSquare, Shield, CreditCard, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    category: "Getting Started",
    icon: MessageSquare,
    questions: [
      {
        q: "What makes Next Wave different from other agencies?",
        a: "We don't just run ads; we build comprehensive digital ecosystems. Our focus is on data-driven strategy and measurable momentum, treating your business like it's our own."
      },
      {
        q: "How quickly can we launch a campaign?",
        a: "Typically, our onboarding and initial strategy phase takes 1-2 weeks. Once the blueprint is approved, campaigns can go live within 48 to 72 hours depending on creative requirements."
      },
      {
        q: "Do you work with international clients?",
        a: "Yes, although we are based in Chittagong, Bangladesh, we partner with ambitious brands worldwide, ensuring seamless communication and timezone overlap."
      }
    ]
  },
  {
    category: "Our Services",
    icon: Zap,
    questions: [
      {
        q: "What specific marketing services do you offer?",
        a: "We offer full-stack marketing, including SEO, paid media (Google, Meta, TikTok), high-fidelity creative production, and conversion rate optimization (CRO)."
      },
      {
        q: "Do you handle the creative design and video production?",
        a: "Absolutely. Our in-house creative engineers produce scroll-stopping visuals, videos, and copywriting tailored precisely to your brand's voice and audience."
      },
      {
        q: "Can you integrate with our existing CRM?",
        a: "Yes, our technical team ensures seamless integration with major CRMs like HubSpot, Salesforce, and GoHighLevel to track leads and attribute revenue perfectly."
      }
    ]
  },
  {
    category: "Pricing & ROI",
    icon: CreditCard,
    questions: [
      {
        q: "How do you structure your pricing?",
        a: "Our pricing is custom-tailored to your goals and scale. We offer both project-based models for specific builds and monthly retainers for ongoing growth partnerships."
      },
      {
        q: "What kind of ROI can I expect from your campaigns?",
        a: "While ROI varies by industry, our data-driven approach is designed to aggressively scale your returns. We establish clear KPIs and benchmark targets during the Discovery phase."
      },
      {
        q: "Are there any long-term lock-in contracts?",
        a: "We believe in earning your business every month. While we recommend a 3-month commitment to see optimal algorithmic seasoning, we don't force restrictive long-term lock-ins."
      }
    ]
  },
  {
    category: "Security & Data",
    icon: Shield,
    questions: [
      {
        q: "Is my customer data secure and compliant?",
        a: "100%. We strictly adhere to GDPR and CCPA guidelines. Your pixel data, customer lists, and business metrics are handled with enterprise-grade security."
      },
      {
        q: "Who owns the ad accounts and creative assets?",
        a: "You do. We build everything inside your business manager. If we ever part ways, you retain full ownership of all data, ad accounts, and creative assets we've produced."
      }
    ]
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border ${isOpen ? 'border-nw-blue shadow-md' : 'border-gray-200 hover:border-gray-300'} rounded-2xl mb-4 bg-white transition-all duration-300 overflow-hidden`}>
      <button 
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
      >
        <span className={`font-poppins font-medium pr-4 ${isOpen ? 'text-nw-blue' : 'text-nw-black'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-nw-blue/10 rotate-180' : 'bg-gray-50'}`}>
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-nw-blue' : 'text-gray-500'}`} />
        </div>
      </button>
      
      <div 
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-2 font-sans text-gray-600 text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);
  
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reset open question when category changes
    setOpenQuestionIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      
      gsap.fromTo('.faq-sidebar',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
      
      gsap.fromTo('.faq-content',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const activeQuestions = faqData[activeCategory].questions;

  return (
    <section className="py-24 px-4 bg-nw-white relative" id="faq" ref={sectionRef}>
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#E6F5FB] to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 faq-header">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F5FB] text-nw-blue text-sm font-medium mb-6">
            <div className="w-2 h-2 rounded-full bg-nw-blue animate-pulse"></div>
            Frequently Asked Questions
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-nw-black tracking-tighter mb-4">
            Got Questions?<br/>
            <span className="text-nw-blue">We've Got Answers</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about working with Next Wave, from getting started to advanced strategies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[30%] flex-shrink-0 faq-sidebar">
            <h3 className="font-poppins font-bold text-lg mb-6 text-nw-black lg:-mt-[50px]">Browse by Category</h3>
            
            <div className="flex flex-col gap-3 mb-8">
              {faqData.map((cat, idx) => {
                const isActive = activeCategory === idx;
                const Icon = cat.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 border ${
                      isActive 
                      ? 'bg-[#E6F5FB] border-nw-blue/30 shadow-sm' 
                      : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-nw-blue text-white shadow-[0_4px_12px_rgba(14,158,217,0.3)]' : 'bg-gray-50 text-nw-blue'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className={`font-poppins font-medium text-sm ${isActive ? 'text-nw-black' : 'text-gray-700'}`}>
                          {cat.category}
                        </div>
                        <div className="font-sans text-xs text-gray-400">
                          {cat.questions.length} questions
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Support CTA Box */}
            <div className="bg-nw-black rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-nw-blue rounded-full filter blur-[50px] opacity-40"></div>
              <h4 className="font-poppins font-bold text-lg mb-2 relative z-10">Still have questions?</h4>
              <p className="font-sans text-xs text-gray-300 mb-6 leading-relaxed relative z-10">
                Can't find the answer you're looking for? Our elite support team is ready to help you scale.
              </p>
              <button className="w-full bg-white text-nw-black font-sans font-medium py-3 rounded-xl hover:bg-nw-blue hover:text-white transition-colors duration-300 relative z-10">
                Contact Support
              </button>
            </div>
          </div>

          {/* Accordion Content */}
          <div className="w-full lg:w-[70%] faq-content">
            {activeQuestions.map((item, idx) => (
              <FAQItem 
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openQuestionIndex === idx}
                onClick={() => setOpenQuestionIndex(openQuestionIndex === idx ? -1 : idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
