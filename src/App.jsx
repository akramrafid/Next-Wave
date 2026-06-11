import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Clients from './components/Clients';
import Principles from './components/Principles';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppCTA from './components/WhatsAppCTA';

function App() {
  return (
    <main className="bg-nw-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Clients />
      <Principles />
      <Roadmap />
      <WhyChooseUs />
      <Features />
      <FAQ />
      <Philosophy />
      <Protocol />
      <CTA />
      <Footer />
      <WhatsAppCTA />
      <Chatbot />
    </main>
  );
}

export default App;
