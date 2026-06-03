import React from 'react';
import Reveal from './Reveal';

export default function Services() {
  return (
    <section className="services-hub section">
      <div className="services-header">
        <Reveal direction="down">
          <h2 className="services-title">Services Hub:<br /> Discover Your Path to Success</h2>
        </Reveal>
        <Reveal direction="down" delay={100}>
          <p className="services-subtitle">From Consultations to Collaborations,<br /> We're Here to Elevate Your Journey</p>
        </Reveal>
      </div>

      <div className="services-grid">
        {/* Left Card */}
        <Reveal direction="right" delay={200} className="services-card green-theme">
          <div className="services-card-bg-wrapper">
             <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" alt="Green texture" />
          </div>
          <div className="glass-panel">
            <div className="glass-top">
               <span className="pill-badge">Chief Surgeon</span>
            </div>
            <div className="glass-middle">
               <h3>Dr. Shamik</h3>
               <h4>A. Ambatkar</h4>
               <p>MBBS, DNB (Ophthalmology)<br/>Vitreo-Retinal Surgeon. Leading specialist in advanced eye surgeries.</p>
            </div>
            <div className="glass-bottom">
               <span className="price">22+</span> <span className="price-unit">/ years experience</span>
            </div>
          </div>
        </Reveal>

        {/* Right Card */}
        <Reveal direction="left" delay={300} className="services-card peach-theme">
          <div className="services-card-bg-wrapper">
             <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800" alt="Peach texture" />
          </div>
          <div className="glass-panel">
            <div className="glass-top">
               <span className="pill-badge">Specialized Care</span>
            </div>
            <div className="glass-middle">
               <h3>Expert</h3>
               <h4>Optometrists</h4>
               <p>Our panel of highly skilled eye specialists provides detailed consultations and personalized treatment plans.</p>
            </div>
            <div className="glass-bottom">
               <span className="price-unit">Dedicated to your vision</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
