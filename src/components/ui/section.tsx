import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light-blue' | 'light-gray';
  padding?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  style,
  id
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    'light-blue': 'bg-gradient-to-br from-brand-light-blue/60 to-blue-50/40',
    'light-gray': 'bg-gradient-to-br from-brand-light-gray/30 to-gray-50/50'
  };
  
  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  };
  
  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
      style={style}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
}; 