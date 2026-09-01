import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Send, Mail, Phone, MapPin, Globe } from 'lucide-react';

const serviceOptions = [
  "Strategy & Planning",
  "Creative & Brand Design",
  "Digital & Performance Marketing",
  "Production & Activation",
  "PR & Corporate Communications",
  "Integrated 360 Partnership"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Strategy & Planning',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
      ScrollTrigger.clearScrollMemory();
    } catch (e) {}
    try {
      document.querySelectorAll('.pin-spacer').forEach(el => {
        const child = el.children[0];
        if (child) { child.removeAttribute('style'); el.parentNode?.insertBefore(child, el); }
        el.remove();
      });
    } catch (e) {}
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className="bg-[#070707] text-white min-h-screen pt-36 pb-24 font-sans border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0E9ED9]/5 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-[1560px] relative z-10">

        {/* ── Header Block ────────────────────────────────── */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0E9ED9] animate-pulse" />
            <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#9DD6F3] uppercase font-semibold">
              INITIATE ENGAGEMENT
            </span>
          </div>
          <h1 className="font-poppins font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-none mb-6">
            LET'S TALK.
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl font-sans leading-relaxed max-w-2xl">
            Tell us about your brand objectives, business challenges or expansion plans, and our senior leadership team will initiate the strategic dialogue.
          </p>
        </div>

        {/* ── Two-Column Layout: Contact Details & Simplified Form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">

          {/* Left Column: Official Contact & Headquarters Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-white mb-4">
                NextWave 360 Solutions
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Headquartered in Chittagong, serving ambitious corporate clients, national retail leaders, and global enterprise ventures.
              </p>

              <div className="space-y-6 border-t border-white/10 pt-8">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#0E9ED9] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-[#9DD6F3] tracking-wider mb-1">
                      Headquarters
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">
                      House 66, Road 06, O. R. Nizam R/A,<br />
                      GEC Circle, Chittagong, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#0E9ED9] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-[#9DD6F3] tracking-wider mb-1">
                      Direct Email
                    </h4>
                    <a 
                      href="mailto:info.nextwaves@gmail.com" 
                      className="text-white hover:text-[#9DD6F3] text-sm font-semibold transition-colors"
                    >
                      info.nextwaves@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#0E9ED9] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-[#9DD6F3] tracking-wider mb-1">
                      Phone / WhatsApp
                    </h4>
                    <a 
                      href="tel:+8801711204614" 
                      className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                    >
                      +880 1711-204614
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#0E9ED9] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-xs uppercase text-[#9DD6F3] tracking-wider mb-1">
                      Digital Domain
                    </h4>
                    <p className="text-[#0E9ED9] text-sm font-mono font-semibold">
                      nextwaves.agency
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-[#111111] text-white p-6 rounded-2xl border border-white/10 shadow-xl">
              <span className="text-xs font-mono text-[#9DD6F3] uppercase tracking-widest block mb-1 font-semibold">
                RESPONSE PROTOCOL
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                All client enquiries are reviewed directly by agency strategy leadership within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
              
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight mb-2">
                Start a Conversation
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                Please complete the details below to schedule an initial consultation.
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white text-black shadow-lg">
                    <Send size={26} />
                  </div>
                  <h4 className="font-poppins font-bold text-white text-2xl">Conversation Initiated</h4>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you. We have received your details and our team will get in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', company: '', email: '', phone: '', service: 'Strategy & Planning', message: '' });
                    }}
                    className="mt-6 text-xs font-poppins font-bold uppercase tracking-wider text-[#9DD6F3] hover:text-white transition-colors underline"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {/* Field 1 & 2: NAME & COMPANY */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9DD6F3] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        COMPANY *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Organization name"
                        value={formData.company}
                        onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9DD6F3] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 3 & 4: EMAIL & PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="work@company.com"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9DD6F3] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                        PHONE
                      </label>
                      <input
                        type="tel"
                        placeholder="+880 1..."
                        value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9DD6F3] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 5: WHAT CAN WE HELP WITH? */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                      WHAT CAN WE HELP WITH?
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#9DD6F3] transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#1a1a1a] text-white">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Field 6: MESSAGE */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                      MESSAGE *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your objectives, timelines, or requirements..."
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9DD6F3] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-200 text-black text-xs font-poppins font-bold uppercase tracking-wider rounded-xl px-10 py-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 cursor-pointer shadow-lg"
                    >
                      {sending ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Processing…
                        </>
                      ) : (
                        <>
                          <span>START A CONVERSATION</span>
                          <ArrowUpRight size={16} />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* ── Map Location ────────────────────────────────────────── */}
        <div className="w-full h-[380px] md:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <iframe
            src="https://maps.google.com/maps?q=NextWave+360+Solutions,+House+66+4th+Floor,+Road+6A,+O.R.+Nizam+Road,+Chattogram+4223,+Bangladesh&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert contrast-125 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700"
            title="NextWave 360 Solutions Location"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
