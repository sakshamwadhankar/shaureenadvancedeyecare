import React from 'react';
import FadeInUp from './FadeInUp';

export default function Hero() {
  return (
    <FadeInUp as="header" className="hero section">
      <div className="hero-content">
        <div className="badge">Performance & Result Driven</div>
        <h1 className="hero-title">
          Drive Your Startup <br /> Forward with <br />
          <span className="gradient-text">Growth Hacking</span> Expertise!
        </h1>
        <div className="hero-actions">
          <button className="primary-btn">
            Start Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <div className="hero-avatars">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="User" />
            <div className="avatar-count">+2k</div>
          </div>
          <div className="hero-rating">
            <div className="stars">★★★★★</div>
            <p>4.9/5 (1k+ reviews)</p>
          </div>
        </div>
      </div>
      <div className="hero-background-shape"></div>
    </FadeInUp>
  );
}
