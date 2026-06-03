import React from 'react';
import FadeInUp from './FadeInUp';

export default function Contact() {
  return (
    <FadeInUp as="section" className="contact-section section" style={{ paddingBottom: '100px' }}>
      <h1 className="huge-title">CONTACT US</h1>
      <div className="contact-container" style={{display: 'flex', gap: '40px', padding: '0 5%', marginTop: '40px', position: 'relative', zIndex: 10, color: 'white', alignItems: 'stretch'}}>
        <div className="contact-details" style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '24px', backdropFilter: 'blur(10px)'}}>
          <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Shaureen Advanced Eye Care</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}><strong>Address:</strong><br/> Plot No 120, Central Excise Layout, Telecom Nagar, Nagpur - 440022</p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}><strong>Phone:</strong><br/> 0712 2232005</p>
          <p style={{ fontSize: '18px', lineHeight: '1.6' }}><strong>Consultation Hours:</strong><br/> Mon - Sat: 10:00 AM - 8:00 PM</p>
        </div>
        <div className="contact-map" style={{flex: 1, borderRadius: '24px', overflow: 'hidden'}}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709424707!2d79.00213898142345!3d21.16108593452636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0, minHeight: '100%'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
    </FadeInUp>
  );
}
