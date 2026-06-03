import React, { useRef, useState } from 'react';
import Reveal from './Reveal';

export default function CaseStudies() {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 320;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 320;
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    }
  };

  const handleTrackClick = (e) => {
    if (carouselRef.current) {
      const trackRect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - trackRect.left;
      const percentage = clickX / trackRect.width;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: percentage * maxScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="case-studies section">
      <div className="case-header" style={{ justifyContent: 'flex-end' }}>
        <Reveal direction="left">
          <h2 className="case-main-title">Explore Our Case Studies</h2>
        </Reveal>
      </div>

      <div className="case-layout">
        <Reveal direction="up" delay={200} className="case-left">
          <div className="case-main-card">
            <div className="case-card-top">
              <div>
                <h3>Revolutionizing Healthcare:<br/>The Story of MedTech Innovations</h3>
                <p className="case-desc">Follow the journey of MedTech Innovations, a pioneering startup dedicated to revolutionizing the healthcare industry.</p>
              </div>
            </div>
            
            <img className="case-hero-img" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="MedTech Innovations" />
            
            <div className="case-stats">
              <div className="stat-pill">
                3k <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <button className="icon-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-3 3-3-3V3h6v12z"></path></svg>
              </button>
              <button className="icon-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
          </div>
          
          <div className="case-controls">
            <button className="control-btn left" onClick={scrollLeft} style={{ position: 'relative', zIndex: 99, pointerEvents: 'auto' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
            </button>
            <button className="control-btn right" onClick={scrollRight} style={{ position: 'relative', zIndex: 99, pointerEvents: 'auto' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
            <div className="slider-track" onClick={handleTrackClick} style={{ cursor: 'pointer', position: 'relative', zIndex: 99, pointerEvents: 'auto' }}>
              <div className="slider-thumb" style={{ left: `${scrollProgress * 70}%`, position: 'relative', pointerEvents: 'none' }}></div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={300} className="case-right">
          <div className="case-carousel" ref={carouselRef} onScroll={handleScroll}>
             <div className="small-case-card light-green">
               <h4>From Dorm Room<br/>to Boardroom</h4>
               <div className="circle-cutout">
                 <img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200" alt="Startup founder" />
               </div>
             </div>
             <div className="small-case-card orange-bg">
               <img className="card-bg-img" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=400" alt="Pink abstract" />
               <div className="glass-content">
                 <h4>The Journey of Eco-<br/>Friendly Startup Solutions</h4>
               </div>
             </div>
             <div className="small-case-card green-bg">
               <img className="card-bg-img" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400" alt="Green abstract" />
               <div className="glass-content">
                 <h4>The Impact...<br/>Entrepreneur...</h4>
               </div>
             </div>
          </div>
          
          <div className="case-info">
             <p>Discover a treasure trove of success stories and insightful case studies that illuminate the journey of innovation and entrepreneurship. From groundbreaking startups to industry-disrupting strategies, dive into real-world examples that inspire, inform, and guide.</p>
             <a href="#" className="explore-link">
               Explore In Details 
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
             </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
