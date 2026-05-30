import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variantClasses = {
    primary: 'bg-gold text-black',
    secondary: 'bg-dark-gray text-cream',
    success: 'bg-green-600 text-white',
    warning: 'bg-amber-600 text-white',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
