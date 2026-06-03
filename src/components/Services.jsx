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
               <span className="pill-badge">Our Service</span>
               <button className="heart-btn">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
               </button>
            </div>
            <div className="glass-middle">
               <h3>1001</h3>
               <h4>growth hacking cases</h4>
               <p>Dive into Our Treasury of Success Stories and Case Studies<br/>To Get Insights for Your Own Startup</p>
            </div>
            <div className="glass-bottom">
               <span className="price">$ 200</span> <span className="price-unit">/ full access</span>
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
               <div className="vertical-avatars">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Av 1" />
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Av 2" />
                 <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" alt="Av 3" />
                 <button className="add-btn">+</button>
               </div>
               <span className="pill-badge">Our Service</span>
               <button className="heart-btn">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
               </button>
            </div>
            <div className="glass-middle">
               <h3>40</h3>
               <h4>experts</h4>
               <p>Meet Our Panel of Visionaries and Innovators Who are<br/>Here to Help Your Grow Your Startup</p>
            </div>
            <div className="glass-bottom">
               <span className="price">$ 100</span> <span className="price-unit">/ one query</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
