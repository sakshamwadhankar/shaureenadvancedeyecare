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
          <h2 className="case-main-title">Patient Reviews</h2>
        </Reveal>
      </div>

      <div className="case-layout">
        <Reveal direction="up" delay={200} className="case-left">
          <div className="case-main-card">
            <div className="case-card-top">
              <div>
                <h3>Exceptional Eye Care:<br/>My Experience at Shaureen</h3>
                <p className="case-desc">"I visited Dr. Shamik Ambatkar for a vitreo-retinal consultation and the experience was flawless. The advanced equipment and caring staff made me feel completely at ease."</p>
              </div>
            </div>
            
            <img className="case-hero-img" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" alt="Happy Patient" />
            
            <div className="case-stats">
              <div className="stat-pill">
                5/5 <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{color: '#FFD700'}} width="20" height="20"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
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
               <h4>"Best Eye<br/>Hospital in Nagpur"</h4>
               <div className="circle-cutout">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Patient" />
               </div>
             </div>
             <div className="small-case-card orange-bg">
               <img className="card-bg-img" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=400" alt="Pink abstract" />
               <div className="glass-content">
                 <h4>"Dr. Shamik's diagnosis<br/>was precise and helpful."</h4>
               </div>
             </div>
             <div className="small-case-card green-bg">
               <img className="card-bg-img" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400" alt="Green abstract" />
               <div className="glass-content">
                 <h4>"The surgery was a success.<br/>Highly Recommended!"</h4>
               </div>
             </div>
          </div>
          
          <div className="case-info">
             <p>Read what our happy patients have to say about their experience with Shaureen Advanced Eye Care. From routine check-ups to complex retinal surgeries, our commitment to excellence shines through their stories.</p>
             <a href="#" className="explore-link">
               Read More Reviews 
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
             </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
