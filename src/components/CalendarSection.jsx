import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Reveal from './Reveal';

export default function CalendarSection() {
  const [selected, setSelected] = useState(new Date());

  return (
    <section className="section py-20 flex justify-center items-center w-full">
      <Reveal direction="up" delay={100} className="w-full">
        <div 
          className="calendar-container mx-auto p-8 rounded-2xl glass-panel relative overflow-hidden" 
          style={{ width: '100%', maxWidth: '789px', marginInline: 'auto' }}
        >
          {/* Glass background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="text-left md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
                Book Your Appointment
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Select a date that works best for you to consult with our leading eye specialists.
              </p>
              
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
                <p className="text-sm text-gray-400 mb-1">Selected Date</p>
                <p className="text-xl font-semibold text-white">
                  {selected ? format(selected, 'EEEE, MMMM do, yyyy') : 'Please select a date'}
                </p>
              </div>
              
              <button 
                className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                disabled={!selected}
              >
                Confirm Booking
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center items-center bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner">
              <style>{`
                .rdp {
                  --rdp-cell-size: 40px;
                  --rdp-accent-color: #3b82f6;
                  --rdp-background-color: rgba(59, 130, 246, 0.2);
                  --rdp-accent-color-dark: #2563eb;
                  --rdp-background-color-dark: rgba(37, 99, 235, 0.2);
                  --rdp-outline: 2px solid var(--rdp-accent-color);
                  margin: 0;
                }
                .rdp-day_selected {
                  background-color: var(--rdp-accent-color);
                  color: white;
                  font-weight: bold;
                }
                .rdp-day_selected:hover {
                  background-color: var(--rdp-accent-color-dark);
                }
                .rdp-day {
                  color: #e2e8f0;
                  border-radius: 50%;
                }
                .rdp-day:hover:not(.rdp-day_selected) {
                  background-color: rgba(255,255,255,0.1);
                }
                .rdp-head_cell {
                  color: #94a3b8;
                  font-weight: 500;
                  font-size: 0.875rem;
                }
                .rdp-nav_button {
                  color: #e2e8f0;
                }
                .rdp-nav_button:hover {
                  background-color: rgba(255,255,255,0.1);
                }
                .rdp-caption_label {
                  font-size: 1.125rem;
                  font-weight: 600;
                  color: #f8fafc;
                }
              `}</style>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                className="calendar-custom font-sans"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
