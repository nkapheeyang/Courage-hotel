'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface DatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  minDate = new Date(),
  maxDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-black mb-2">{label}</label>}
      <div className="relative">
        <input
          type="text"
          value={value ? value.toLocaleDateString() : ''}
          onClick={() => setIsOpen(!isOpen)}
          readOnly
          className="w-full px-4 py-3 border-2 border-gold rounded-lg bg-cream cursor-pointer focus:outline-none"
          placeholder="Select date"
        />
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white border-2 border-gold rounded-lg shadow-lg z-10">
            <Calendar
              onChange={(date) => {
                onChange(date as Date);
                setIsOpen(false);
              }}
              value={value}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        )}
      </div>
    </div>
  );
};
