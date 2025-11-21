import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChatBot from './components/AiChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-dark font-sans selection:bg-accent/20 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AiChatBot />
    </div>
  );
};

export default App;