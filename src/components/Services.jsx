import React from 'react';
import FadeInUp from './FadeInUp';

export default function Services() {
  return (
    <FadeInUp as="section" className="services-hub section">
      <div className="section-header">
        <h2>Services Hub:<br /> Discover Your Path to Success</h2>
        <div className="header-actions">
          <button className="nav-arrow" aria-label="Previous">←</button>
          <button className="nav-arrow" aria-label="Next">→</button>
        </div>
      </div>

      <div className="services-grid">
        <div className="service-card card-silver">
          <div className="card-top">
            <span className="icon">🌐</span>
          </div>
          <div className="card-bottom">
            <h3>1001</h3>
            <p>Global Branches in one system</p>
          </div>
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Global" className="bg-image" />
          <div className="overlay-glass"></div>
        </div>

        <div className="service-card card-peach">
          <div className="card-top">
            <span className="icon">🚀</span>
          </div>
          <div className="card-bottom">
            <h3>40+</h3>
            <p>Experts across domains</p>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}
