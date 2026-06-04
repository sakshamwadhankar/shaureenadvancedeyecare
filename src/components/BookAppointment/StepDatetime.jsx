import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, Clock } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const TIME_SLOTS = (() => {
  const slots = [];
  let h = 9, m = 30;
  while (h < 18 || (h === 18 && m <= 30)) {
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h > 12 ? h - 12 : h;
    slots.push(`${displayH}:${m.toString().padStart(2, '0')} ${ampm}`);
    m += 30;
    if (m === 60) { m = 0; h++; }
  }
  return slots;
})();

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  const day = new Date(year, month, 1).getDay();
  // Convert: 0=Sun -> 6, 1=Mon -> 0, ... 6=Sat -> 5
  return day === 0 ? 6 : day - 1;
}

export default function StepDatetime({ selectedDate, selectedTime, onDateSelect, onTimeSelect, onNext }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const monthName = new Date(viewYear, viewMonth).toLocaleString('default', { month: 'long' });

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const cells = [];

    // Empty cells for offset
    for (let i = 0; i < firstDay; i++) {
      cells.push({ day: null, disabled: true, isSunday: false });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(viewYear, viewMonth, d);
      const dayOfWeek = date.getDay(); // 0 = Sunday
      const isPast = date < today;
      const isSunday = dayOfWeek === 0;
      cells.push({
        day: d,
        date,
        disabled: isPast || isSunday,
        isSunday,
        isPast,
        isToday: date.getTime() === today.getTime(),
      });
    }

    return cells;
  }, [viewYear, viewMonth]);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const isSelected = (date) =>
    selectedDate && date &&
    selectedDate.getDate() === date.getDate() &&
    selectedDate.getMonth() === date.getMonth() &&
    selectedDate.getFullYear() === date.getFullYear();

  const canGoPrev = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3770bf]/10 text-[#3770bf] text-sm font-medium mb-3">
          <CalendarDays size={15} />
          Step 1 of 3
        </div>
        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Philosopher', sans-serif" }}>
          Choose Your Appointment
        </h2>
        <p className="text-[#8dc2ff] text-sm mt-1">Select a date and preferred time slot</p>
      </div>

      {/* Calendar */}
      <div className="bg-[#f3f6ff] rounded-2xl p-5">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={prevMonth}
            disabled={!canGoPrev}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
              canGoPrev
                ? 'bg-white shadow-sm hover:shadow-md text-[#3770bf] hover:bg-[#3770bf] hover:text-white'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <h3 className="text-lg font-semibold text-gray-800">
            {monthName} {viewYear}
          </h3>
          <button
            onClick={nextMonth}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-white shadow-sm hover:shadow-md text-[#3770bf] hover:bg-[#3770bf] hover:text-white transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map((d) => (
            <div
              key={d}
              className={`text-center text-xs font-semibold py-2 ${
                d === 'Sun' ? 'text-red-300' : 'text-[#8dc2ff]'
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((cell, i) => {
            if (cell.day === null) {
              return <div key={`empty-${i}`} className="aspect-square" />;
            }

            const selected = isSelected(cell.date);

            return (
              <button
                key={`day-${cell.day}`}
                disabled={cell.disabled}
                onClick={() => onDateSelect(cell.date)}
                className={`
                  aspect-square rounded-xl text-sm font-medium transition-all duration-200 relative
                  ${cell.disabled
                    ? 'opacity-25 cursor-not-allowed text-gray-400'
                    : selected
                      ? 'bg-[#3770bf] text-white shadow-lg shadow-[#3770bf]/30 scale-105'
                      : 'text-gray-700 hover:bg-white hover:shadow-md hover:scale-105 cursor-pointer'
                  }
                  ${cell.isToday && !selected ? 'ring-2 ring-[#3770bf]/30' : ''}
                `}
              >
                {cell.day}
                {cell.isSunday && !selected && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-5 h-[1.5px] bg-red-300 rotate-[-45deg] absolute" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="animate-[fadeSlideUp_0.3s_ease-out]">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-[#3770bf]" />
            <h4 className="text-sm font-semibold text-gray-700">
              Available Time Slots — {selectedDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
            </h4>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                onClick={() => onTimeSelect(slot)}
                className={`
                  py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200
                  ${selectedTime === slot
                    ? 'bg-[#3770bf] text-[#f3f6ff] shadow-lg shadow-[#3770bf]/25 scale-[1.03]'
                    : 'bg-white border border-[#8dc2ff]/25 text-gray-600 hover:border-[#3770bf]/40 hover:shadow-sm'
                  }
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Next Button */}
      {selectedDate && selectedTime && (
        <div className="animate-[fadeSlideUp_0.3s_ease-out]">
          <button
            onClick={onNext}
            className="w-full py-3.5 rounded-xl bg-[#cef26d] text-[#3770bf] font-bold text-base shadow-lg shadow-[#cef26d]/30 hover:shadow-xl hover:shadow-[#cef26d]/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
          >
            Continue to Sign In →
          </button>
        </div>
      )}
    </div>
  );
}
