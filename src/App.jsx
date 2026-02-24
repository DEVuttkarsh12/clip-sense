import React, { useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Starfield from './components/Starfield';
import WaitlistPopup from './components/WaitlistPopup';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="app">
      <Starfield />
      <Navbar onJoinBeta={openWaitlist} />
      <main>
        <Hero onJoinBeta={openWaitlist} />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <CTA onJoinBeta={openWaitlist} />
      </main>
      <Footer />

      <WaitlistPopup isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}

export default App;
