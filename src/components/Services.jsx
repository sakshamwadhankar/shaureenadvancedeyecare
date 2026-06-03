import React from 'react';
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

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
        <Reveal direction="right" delay={200} className="services-card green-theme cursor-pointer hover:scale-105 transition-transform duration-300">
          <Link to="/doctor/shamik" className="block w-full h-full">
            <div className="services-card-bg-wrapper">
               <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800" alt="Green texture" />
            </div>
            <div className="glass-panel">
              <div className="glass-top">
                 <span className="pill-badge">Chief Surgeon</span>
                 <button className="heart-btn">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                 </button>
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
          </Link>
        </Reveal>

        {/* Right Card */}
        <Reveal direction="left" delay={300} className="services-card peach-theme cursor-pointer hover:scale-105 transition-transform duration-300">
          <Link to="/doctor/demo" className="block w-full h-full">
            <div className="services-card-bg-wrapper">
               <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800" alt="Peach texture" />
            </div>
            <div className="glass-panel">
              <div className="glass-top">
                 <div className="vertical-avatars">
                   <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=100" alt="Av 1" />
                   <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=100" alt="Av 2" />
                   <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=100" alt="Av 3" />
                   <button className="add-btn">+</button>
                 </div>
                 <span className="pill-badge">Specialized Care</span>
                 <button className="heart-btn">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                 </button>
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
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
