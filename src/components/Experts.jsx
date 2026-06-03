import React from 'react';
import FadeInUp from './FadeInUp';

export default function Experts() {
  return (
    <FadeInUp as="section" className="experts section">
      <h2 className="centered-title">Book Your Appointment<br/><span style={{fontSize: '0.5em', fontWeight: 'normal'}}>Call us at 0712 2232005</span></h2>
      <div className="experts-container">
        <div className="expert-bubble pos-1"><img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=200" alt="Clinic 1" /></div>
        <div className="expert-bubble pos-2"><img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=200" alt="Clinic 2" /></div>
        <div className="expert-bubble pos-3"><img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=200" alt="Clinic 3" /></div>
        <div className="expert-bubble pos-4"><img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=200" alt="Clinic 4" /></div>
        <div className="expert-bubble pos-5"><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=200" alt="Clinic 5" /></div>
        <div className="expert-bubble pos-6"><img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=200" alt="Clinic 6" /></div>
      </div>
    </FadeInUp>
  );
}
