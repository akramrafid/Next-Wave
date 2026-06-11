import React from 'react';
import { MessageCircle, Globe, Share2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-white pt-24 pb-0 px-8 md:px-16 overflow-hidden min-h-[600px] flex flex-col justify-end">

      {/* Main footer container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 relative z-10 mb-24">

        {/* Left Blue Card */}
        <div className="w-full md:w-[35%] bg-gradient-to-b from-nw-blue to-[#097ba8] rounded-[2rem] p-10 flex flex-col justify-between text-white shadow-[0_20px_40px_rgba(14,158,217,0.2)] min-h-[400px]">
          <div className="font-poppins font-extrabold text-3xl tracking-tighter flex items-center">
            <span className="mr-2 text-white">≋</span> Next Wave
          </div>

          <div className="mt-12">
            <h3 className="font-poppins font-semibold text-2xl mb-8 leading-tight text-white/90">
              Bold strategy.<br />Measurable momentum.
            </h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center transition-colors">
                <Globe className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-xl flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Light Card */}
        <div className="w-full md:w-[65%] bg-[#F5F5F7] rounded-[2rem] p-10 flex flex-col justify-between shadow-sm relative">

          {/* Decorative Floating Element (Similar to the 3D icon in image) */}
          <div className="absolute -top-12 -right-8 w-32 h-32 bg-gradient-to-br from-[#1EAEED] to-[#0A88BD] rounded-3xl rotate-12 shadow-[0_20px_40px_rgba(14,158,217,0.3)] flex items-center justify-center z-20 hidden lg:flex">
            <span className="font-poppins font-extrabold text-6xl text-white opacity-90 -rotate-12">≋</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-poppins font-bold text-nw-black/50 text-sm mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-4 font-sans text-nw-black font-medium text-sm">
                <li><a href="#work" className="hover:text-nw-blue transition-colors">How it works</a></li>
                <li><a href="#services" className="hover:text-nw-blue transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-nw-blue transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-nw-blue transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-nw-blue transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-poppins font-bold text-nw-black/50 text-sm mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4 font-sans text-nw-black font-medium text-sm">
                <li><a href="#blog" className="hover:text-nw-blue transition-colors">Blog</a></li>
                <li><a href="#about" className="hover:text-nw-blue transition-colors">About</a></li>
                <li><a href="#terms" className="hover:text-nw-blue transition-colors">Terms and Condition</a></li>
                <li><a href="#privacy" className="hover:text-nw-blue transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Copyright */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 mt-auto border-t border-nw-grey/20 pt-8">
            <div className="font-sans text-xs text-nw-black/40 font-medium">
              © {new Date().getFullYear()} Next Wave 360 Solutions. All rights reserved.
            </div>

            <div className="w-full md:w-auto">
              <p className="font-sans text-xs text-nw-black/50 mb-1 font-medium">An occasional email.</p>
              <h4 className="font-poppins font-bold text-nw-black mb-4 text-lg">Stay ahead with Next Wave 360 Solutions.</h4>
              <div className="flex bg-white rounded-xl p-1.5 shadow-sm w-full md:w-[380px]">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="pl-4 pr-2 py-2 outline-none text-sm font-sans w-full bg-transparent text-nw-black placeholder:text-nw-black/30"
                />
                <button className="bg-nw-black text-white px-5 md:px-6 py-2.5 rounded-lg font-sans text-sm font-medium hover:bg-nw-blue transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Background Text matching the image's "Kresna" */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] md:translate-y-[35%] w-full text-center pointer-events-none select-none z-0">
        <h1 className="font-poppins font-extrabold text-[20vw] md:text-[20vw] leading-[0.8] text-nw-grey opacity-20 tracking-tighter whitespace-nowrap">
          Next Wave
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
