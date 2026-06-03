import React from 'react';
import Reveal from './Reveal';
import drImg from '../img/R-1.jpg';
import optImg from '../img/67133d513112ae5e0ebf734286fcf2e8.png';

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
             <img src={drImg} alt="Dr. Shamik Ambatkar" />
          </div>
          <div className="glass-panel">
            <div className="glass-top">
               <span className="pill-badge">Chief Surgeon</span>
            </div>
            <div className="glass-middle">
               <h3 className="card-doctor-name">Dr. Shamik Ambatkar</h3>
            </div>
          </div>
        </Reveal>

        {/* Right Card */}
        <Reveal direction="left" delay={300} className="services-card peach-theme">
          <div className="services-card-bg-wrapper">
              <img src={optImg} alt="Expert Optometrists" />
          </div>
          <div className="glass-panel">
            <div className="glass-top">
               <span className="pill-badge">Specialized Care</span>
            </div>
            <div className="glass-middle">
               <h3 className="card-doctor-name">Expert Optometrists</h3>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
