import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppCTA from './components/WhatsAppCTA';
import Gallery from './components/Gallery';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <main className="bg-nw-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppCTA />
        <Chatbot />
      </main>
    </BrowserRouter>
  );
}

export default App;
