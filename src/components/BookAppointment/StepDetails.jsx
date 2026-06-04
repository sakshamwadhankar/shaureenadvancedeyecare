import React, { useState, useEffect } from 'react';
import { User, Phone, CalendarDays, Clock, MessageCircle, ChevronLeft, AlertCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '917507633352'; // Clinic number '0712 2232005' formatted for WhatsApp (91 prefix)

export default function StepDetails({ selectedDate, selectedTime, userData, onBack }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (userData) {
      setName(userData.name || '');
      setPhone(userData.phone || '');
    }
  }, [userData]);

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const validatePhone = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return 'Phone number is required';
    if (cleaned.length !== 10) return 'Enter a valid 10-digit number';
    return '';
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(val);
    if (phoneError) setPhoneError(validatePhone(val));
  };

  const handleSubmit = () => {
    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }
    if (!name.trim()) return;

    setSubmitted(true);

    const message = `Hello, I would like to book an appointment.\nPatient Name: ${name.trim()}\nPhone: ${phone}\nDate: ${formattedDate}\nTime: ${selectedTime}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Short delay for visual feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3770bf]/10 text-[#3770bf] text-sm font-medium mb-3">
          <User size={15} />
          Step 3 of 3
        </div>
        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Philosopher', sans-serif" }}>
          Patient Details
        </h2>
        <p className="text-[#8dc2ff] text-sm mt-1">Confirm your details to finalize the booking</p>
      </div>

      {/* Booking Summary */}
      <div className="bg-[#f3f6ff] rounded-2xl p-5 space-y-3">
        <h4 className="text-xs font-semibold text-[#8dc2ff] uppercase tracking-wider">Booking Summary</h4>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#3770bf]/10 flex items-center justify-center">
            <CalendarDays size={16} className="text-[#3770bf]" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Date</p>
            <p className="text-sm font-semibold text-gray-800">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#3770bf]/10 flex items-center justify-center">
            <Clock size={16} className="text-[#3770bf]" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Time</p>
            <p className="text-sm font-semibold text-gray-800">{selectedTime}</p>
          </div>
        </div>
        {userData?.email && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#3770bf]/10 flex items-center justify-center">
              <User size={16} className="text-[#3770bf]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Signed in as</p>
              <p className="text-sm font-semibold text-gray-800">{userData.email}</p>
            </div>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Patient Name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8dc2ff]" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter patient name"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f3f6ff] border border-[#8dc2ff]/20 text-gray-800 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3770bf]/30 focus:border-[#3770bf]/50 transition-all duration-200"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Pre-filled from your Google account. Edit if booking for someone else.</p>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8dc2ff]" />
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 select-none">+91</div>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="9876543210"
              maxLength={10}
              className={`w-full pl-[4.5rem] pr-4 py-3 rounded-xl bg-[#f3f6ff] border text-gray-800 text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
                phoneError
                  ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                  : 'border-[#8dc2ff]/20 focus:ring-[#3770bf]/30 focus:border-[#3770bf]/50'
              }`}
            />
          </div>
          {phoneError && (
            <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
              <AlertCircle size={12} />
              {phoneError}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!name.trim() || submitted}
        className={`
          w-full py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-200
          ${submitted
            ? 'bg-green-100 text-green-600 cursor-not-allowed'
            : !name.trim()
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-[#cef26d] text-[#3770bf] shadow-lg shadow-[#cef26d]/30 hover:shadow-xl hover:shadow-[#cef26d]/40 hover:scale-[1.01] active:scale-[0.99]'
          }
        `}
      >
        {submitted ? (
          <>
            <MessageCircle size={18} />
            Redirecting to WhatsApp…
          </>
        ) : (
          <>
            <MessageCircle size={18} />
            Confirm & Send to WhatsApp
          </>
        )}
      </button>

      {/* Back button */}
      <button
        onClick={onBack}
        disabled={submitted}
        className="w-full py-3 rounded-xl text-sm font-medium text-[#8dc2ff] hover:text-[#3770bf] hover:bg-[#f3f6ff] transition-all duration-200 flex items-center justify-center gap-1"
      >
        <ChevronLeft size={14} />
        Back
      </button>
    </div>
  );
}
