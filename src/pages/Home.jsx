import React, { useRef } from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Experts from '../components/Experts';
import CaseStudies from '../components/CaseStudies';
import { ScrollBackground } from '../components/ui/svg-follow-scroll';
import NeuralBackground from '../components/ui/flow-field-background';

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <main>
      <Hero />
      <div ref={scrollRef} style={{ position: 'relative' }}>
        <NeuralBackground color="#004e89" trailOpacity={0.15} speed={0.3} particleCount={100} />
        <ScrollBackground containerRef={scrollRef} />
        <WhyUs />
        <Services />
        <Experts />
        <CaseStudies />
      </div>
    </main>
  );
}
