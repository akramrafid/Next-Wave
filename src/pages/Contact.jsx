import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
    setTimeout(() => { setSending(false); setSent(true); }, 1800);
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ── Hero Banner ─────────────────────────────────────────── */}
        <div
          className="w-full h-[300px] md:h-[420px] rounded-[2.5rem] bg-cover bg-center flex items-end p-8 md:p-16 mb-16 relative overflow-hidden"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Blue glow accent */}
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-25 blur-3xl" style={{ background: '#0E9ED9', transform: 'translate(-30%, 30%)' }} />

          <div className="relative z-10 w-full flex justify-between items-end">
            <h1
              className="text-white font-bold leading-none"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(52px, 7vw, 88px)', letterSpacing: '-2px' }}
            >
              Contacts
            </h1>
            <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-white/80 text-sm">
              <span className="opacity-60">Home</span>
              <span className="opacity-40 mx-1">/</span>
              <span className="font-medium text-white">Contacts</span>
            </div>
          </div>
        </div>

        {/* ── Two-column content ───────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">

          {/* Left – Contact Info */}
          <div className="w-full lg:w-1/2">
            <p className="text-xs font-mono tracking-[0.2em] text-gray-400 mb-5 uppercase">/ get in touch /</p>

            <h2
              className="font-bold text-nw-black leading-tight mb-6"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(30px, 3.5vw, 50px)', letterSpacing: '-1px' }}
            >
              We are always ready to help you and answer your questions
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-sm">
              Whether you're looking to launch your brand, scale campaigns, or build a digital presence — our team is ready to move with you.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h4 className="font-semibold text-nw-black text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Call Center</h4>
                <p className="text-gray-500 text-sm leading-relaxed">+880 1700 000000<br />+880 1800 000000</p>
              </div>

              <div>
                <h4 className="font-semibold text-nw-black text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Location</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  House 66 (4th floor), Road 06,<br />
                  O. R. Nizam Road R/A, Circle,<br />
                  Chattogram 4203
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-nw-black text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Email</h4>
                <p className="text-gray-500 text-sm">hello@nextwave360.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-nw-black text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Social network</h4>
                <div className="flex items-center gap-3 mt-1">
                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-nw-blue transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-nw-blue transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-nw-blue transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-nw-blue transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Form Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F8F9FA] rounded-[2rem] p-8 md:p-12 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-nw-black mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Get In Touch</h3>
              <p className="text-gray-400 text-sm mb-8">
                Define your goals and identify areas where Next Wave can add value to your business.
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-nw-blue">
                    <Send size={28} className="text-white" />
                  </div>
                  <p className="font-bold text-nw-black text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Message sent!</p>
                  <p className="text-gray-400 text-sm text-center">We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-4 text-sm underline text-gray-400 hover:text-nw-blue transition-colors">Send another</button>
                </div>
              ) : (
                <form className="space-y-0" onSubmit={handleSubmit}>
                  {[
                    { id: 'name',    label: 'Full name',  type: 'text',  key: 'name'    },
                    { id: 'email',   label: 'Email',      type: 'email', key: 'email'   },
                    { id: 'subject', label: 'Subject',    type: 'text',  key: 'subject' },
                  ].map(({ id, label, type, key }) => (
                    <div key={id} className="border-b border-gray-200 py-4">
                      <input
                        id={id}
                        type={type}
                        placeholder={label}
                        required={id !== 'subject'}
                        value={formData[key]}
                        onChange={e => setFormData(p => ({ ...p, [key]: e.target.value }))}
                        className="w-full bg-transparent text-sm text-nw-black placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                  ))}
                  <div className="border-b border-gray-200 py-4">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full bg-transparent text-sm text-nw-black placeholder-gray-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center gap-3 bg-nw-black text-white text-sm font-medium rounded-full px-8 py-4 hover:bg-nw-blue transition-colors duration-300 hover:scale-105 disabled:opacity-70 shadow-[0_4px_20px_rgba(14,158,217,0.15)]"
                    >
                      {sending ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <ArrowRight size={16} className="text-nw-blue shrink-0" />
                          Send a message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ── Map ─────────────────────────────────────────────────── */}
        <div className="w-full h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-sm relative group">
          <iframe
            src="https://maps.google.com/maps?q=22.3569,91.8352&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
            title="Next Wave Office Location"
          />
        </div>

      </div>
    </div>
  );
};

export default Contact;
