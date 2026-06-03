import React from 'react';
import FadeInUp from './FadeInUp';

export default function CaseStudies() {
  return (
    <FadeInUp as="section" className="case-studies section">
      <div className="section-header">
        <h2>Explore Our Case Studies</h2>
      </div>
      <div className="case-studies-scroll">
        <div className="case-card">
          <div className="case-image">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600" alt="Healthcare" />
          </div>
          <div className="case-content">
            <h3>Revolutionizing Healthcare: The Story of Medical Innovations</h3>
            <p>Explore how our digital solutions transformed patient care.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="case-image">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Boardroom" />
          </div>
          <div className="case-content">
            <h3>From Grass Roots to Boardroom</h3>
            <p>A journey of scalable growth and enterprise strategy.</p>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}
