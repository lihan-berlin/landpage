import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-barlow font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-brand-blue text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1',
    secondary: 'bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white',
    outline: 'bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 