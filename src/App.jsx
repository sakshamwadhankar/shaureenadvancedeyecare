import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Experts from './components/Experts';
import CaseStudies from './components/CaseStudies';
=======
>>>>>>> 02e23e73d23fc7aeaa2823af3e7de42d8fa0945c
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import { Agentation } from 'agentation';

function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
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
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
>>>>>>> 02e23e73d23fc7aeaa2823af3e7de42d8fa0945c
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
