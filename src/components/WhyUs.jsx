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
              <h2>40</h2>
              <p>Qualified<br/>experts</p>
              <div className="plus-btn">+</div>
            </div>
            <div className="concentric-circles">
              <div className="circle circle-1">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="avatar av-1" />
              </div>
              <div className="circle circle-2">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="avatar av-2" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="avatar av-3" />
              </div>
              <div className="circle circle-3">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="avatar av-4" />
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="avatar av-5" />
              </div>
            </div>
          </Reveal>

          <div className="bento-left-bottom">
            {/* Success Card */}
            <Reveal direction="up" delay={200} className="bento-card bento-success">
              <div className="success-content">
                <h2>98%</h2>
                <p>Success Fee<br/>for Experts</p>
              </div>
            </Reveal>

            {/* Consult Card */}
            <Reveal direction="up" delay={300} className="bento-card bento-consult">
              <div className="consult-content">
                <span className="hashtag">#advantages</span>
                <div className="consult-icons">
                  <div className="c-icon">💡</div>
                  <div className="c-icon active">📋</div>
                  <div className="c-icon">🎯</div>
                </div>
                <h3>Comprehensive<br/>Consultation</h3>
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
              <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400" alt="Person" />
              <div className="person-label">Convinient App</div>
            </Reveal>

            <div className="bento-right-top-right">
              {/* Title */}
              <Reveal direction="down" delay={50}>
                <h2 className="bento-main-title">Why Us?</h2>
              </Reveal>
              
              <Reveal direction="left" delay={250} className="bento-materials-row">
                {/* Materials Card */}
                <div className="bento-card bento-materials">
                  <h2>1001</h2>
                  <p>Materials<br/>Available</p>
                </div>
                
                {/* Play Button */}
                <div className="bento-play-wrapper">
                  <button className="bento-play-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                  <svg className="play-text" viewBox="0 0 100 100">
                    <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                    <text><textPath href="#curve" startOffset="0">explore our process • explore our process • </textPath></text>
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Features Card */}
          <Reveal direction="up" delay={400} className="bento-card bento-features">
            <div className="features-content">
              <div className="features-tags">
                <span className="f-tag">⚙️</span>
                <span className="f-tag">📈</span>
              </div>
              <p className="f-subtitle">Driving Innovation Forward</p>
              <h3>Our Platform's<br/>Features Lead the Way</h3>
            </div>
            <div className="features-mockup">
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" alt="Mockup" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
