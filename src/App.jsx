import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Starfield from './components/Starfield';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
