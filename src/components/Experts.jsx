import React from 'react';
import FadeInUp from './FadeInUp';
import CalendarAppointmentBookingDemo from './ui/demo';

export default function Experts() {
  return (
    <FadeInUp as="section" className="experts section">
      <h2 className="centered-title" style={{ marginBottom: '40px' }}>
        Book Your Appointment<br/>
        <span style={{fontSize: '0.5em', fontWeight: 'normal'}}>Call us at 0712 2232005</span>
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '0 auto' }}>
        <CalendarAppointmentBookingDemo />
      </div>
    </FadeInUp>
  );
}
