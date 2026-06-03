import React from 'react';
import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section className="why-us section">
      <div className="bento-container">
        {/* Left Column */}
        <div className="bento-left">
          {/* Experts Card */}
          <Reveal direction="right" delay={100} className="bento-card bento-experts">
            <div className="experts-content">
              <h2>15+</h2>
              <p>Advanced<br/>Equipments</p>
              <div className="plus-btn">+</div>
            </div>
            <div className="concentric-circles">
              <div className="circle circle-1">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=100" alt="Equipment" className="avatar av-1" />
              </div>
              <div className="circle circle-2">
                <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=100" alt="Equipment" className="avatar av-2" />
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=100" alt="Equipment" className="avatar av-3" />
              </div>
              <div className="circle circle-3">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=100" alt="Equipment" className="avatar av-4" />
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=100" alt="Equipment" className="avatar av-5" />
              </div>
            </div>
          </Reveal>

          <div className="bento-left-bottom">
            {/* Success Card */}
            <Reveal direction="up" delay={200} className="bento-card bento-success">
              <div className="success-content">
                <h2>99%</h2>
                <p>Success Rate<br/>for Surgeries</p>
              </div>
            </Reveal>

            {/* Consult Card */}
            <Reveal direction="up" delay={300} className="bento-card bento-consult">
              <div className="consult-content">
                <span className="hashtag">#care</span>
                <div className="consult-icons">
                  <div className="c-icon">👁️</div>
                  <div className="c-icon active">🩺</div>
                  <div className="c-icon">🔬</div>
                </div>
                <h3>Detailed Eye<br/>Exam & Diagnosis</h3>
                <div className="dots">
                  <span></span><span className="active"></span><span></span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Column */}
        <div className="bento-right">
          <div className="bento-right-top">
            {/* Person Card */}
            <Reveal direction="down" delay={150} className="bento-card bento-person">
              <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=400" alt="Happy Patient" />
              <div className="person-label">Happy Patients</div>
            </Reveal>

            <div className="bento-right-top-right">
              {/* Title */}
              <Reveal direction="down" delay={50}>
                <h2 className="bento-main-title">Why Us?</h2>
              </Reveal>
              
              <Reveal direction="left" delay={250} className="bento-materials-row">
                {/* Materials Card */}
                <div className="bento-card bento-materials">
                  <h2>20k+</h2>
                  <p>Satisfied<br/>Customers</p>
                </div>
                
                {/* Play Button */}
                <div className="bento-play-wrapper">
                  <button className="bento-play-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                  <svg className="play-text" viewBox="0 0 100 100">
                    <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                    <text><textPath href="#curve" startOffset="0">explore treatments • explore treatments • </textPath></text>
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Features Card */}
          <Reveal direction="up" delay={400} className="bento-card bento-features">
            <div className="features-content">
              <div className="features-tags">
                <span className="f-tag">🔬</span>
                <span className="f-tag">🏥</span>
              </div>
              <p className="f-subtitle">World-class Medical Care</p>
              <h3>Advanced Diagnostics<br/>& Precision Care</h3>
            </div>
            <div className="features-mockup">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" alt="Eye Care Diagnostics" style={{ height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
