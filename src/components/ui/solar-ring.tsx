import React from 'react';

interface SolarRingProps {
  size?: 'sm' | 'md' | 'lg';
  scheme?: 1 | 2;
  className?: string;
}

export const SolarRing: React.FC<SolarRingProps> = ({
  size = 'md',
  scheme = 1,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  const schemeStyles = {
    1: {
      stroke: '#ff7979', // R01 Coral Red
      fill: 'white'
    },
    2: {
      stroke: '#68f1fa', // C01 Cyan
      fill: '#237ebc' // B01 Primary Blue
    }
  };
  
  return (
    <div className={`${sizeClasses[size]} ${className} animate-float`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transform -rotate-45"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill={schemeStyles[scheme].fill}
          stroke={schemeStyles[scheme].stroke}
          strokeWidth="4"
          strokeDasharray="188.5 62.8"
          strokeLinecap="round"
          className="animate-spin"
          style={{ animationDuration: '20s' }}
        />
      </svg>
    </div>
  );
}; 