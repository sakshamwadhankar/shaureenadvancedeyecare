import React from 'react';
import FadeInUp from './FadeInUp';

export default function Experts() {
  return (
    <FadeInUp as="section" className="experts section">
      <h2 className="centered-title">Meet Our Experts</h2>
      <div className="experts-container">
        <div className="expert-bubble pos-1"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Expert 1" /></div>
        <div className="expert-bubble pos-2"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Expert 2" /></div>
        <div className="expert-bubble pos-3"><img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" alt="Expert 3" /></div>
        <div className="expert-bubble pos-4"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" alt="Expert 4" /></div>
        <div className="expert-bubble pos-5"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Expert 5" /></div>
        <div className="expert-bubble pos-6"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Expert 6" /></div>
      </div>
    </FadeInUp>
  );
}
