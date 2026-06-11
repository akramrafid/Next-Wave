import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppCTA from './components/WhatsAppCTA';
import Gallery from './components/Gallery';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';

function AppContent() {
  const location = useLocation();
  
  return (
    <main className="bg-nw-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ErrorBoundary resetKey={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ErrorBoundary>
      </div>
      <Footer />
      <WhatsAppCTA />
      <Chatbot />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
