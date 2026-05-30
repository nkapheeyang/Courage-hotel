import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, helperText, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-semibold text-black mb-2">{label}</label>}
      <input
        className={`w-full px-4 py-3 border-2 rounded-lg transition-colors ${
          error ? 'border-red-500' : 'border-gold focus:border-dark-gold'
        } focus:outline-none bg-cream ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && <p className="text-gray-600 text-sm mt-1">{helperText}</p>}
    </div>
  );
};
