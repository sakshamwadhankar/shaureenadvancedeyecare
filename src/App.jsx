import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Experts from './components/Experts';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollBackground } from './components/ui/svg-follow-scroll';
import NeuralBackground from './components/ui/flow-field-background';

import { Agentation } from 'agentation';

function App() {
  const scrollRef = useRef(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div ref={scrollRef} style={{ position: 'relative' }}>
          <NeuralBackground color="#004e89" trailOpacity={0.15} speed={0.3} particleCount={100} />
          <ScrollBackground containerRef={scrollRef} />
          <WhyUs />
          <Services />
          <Experts />
          <CaseStudies />
          <Contact />
        </div>
      </main>
      <Footer />
      {import.meta.env.DEV && (
        <Agentation 
          endpoint="http://localhost:4747"
          onSessionCreated={(sessionId) => {
            console.log("Session started:", sessionId);
          }}
        />
      )}
    </>
  );
}

export default App;
