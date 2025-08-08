import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'coral' | 'cyan';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true
}) => {
  const baseClasses = 'rounded-xl shadow-lg transition-all duration-300 p-8';
  
  const variantClasses = {
    default: 'bg-white',
    blue: 'bg-brand-light-blue',
    coral: 'bg-brand-light-coral',
    cyan: 'bg-brand-light-cyan'
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-2' : '';
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}; 