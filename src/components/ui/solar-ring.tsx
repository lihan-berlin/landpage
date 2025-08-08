import * as React from 'react'
import { cn } from '@/lib/utils'

interface SolarRingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'coral' | 'cyan'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  glowing?: boolean
}

const SolarRing = React.forwardRef<HTMLDivElement, SolarRingProps>(
  ({ className, variant = 'coral', size = 'md', animated = true, glowing = false, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-16 h-16',
      lg: 'w-20 h-20',
      xl: 'w-24 h-24',
    }

    const variantClasses = {
      coral: {
        ring: 'border-borochi-coral-red bg-white',
        dot: 'bg-borochi-coral-red',
        glow: 'shadow-glow-coral',
        gradient: 'from-borochi-coral-red/20 to-borochi-primary/20'
      },
      cyan: {
        ring: 'border-borochi-cyan bg-borochi-primary',
        dot: 'bg-borochi-cyan',
        glow: 'shadow-glow-cyan',
        gradient: 'from-borochi-cyan/20 to-borochi-primary/20'
      },
    }

    const currentVariant = variantClasses[variant]

    return (
      <div
        ref={ref}
        className={cn(
          'relative group',
          className
        )}
        {...props}
      >
        {/* Outer glow ring */}
        {glowing && (
          <div className={cn(
            'absolute inset-0 rounded-full blur-md opacity-50 transition-opacity duration-500',
            `bg-gradient-to-r ${currentVariant.gradient}`,
            animated && 'animate-pulse-glow'
          )} />
        )}

        {/* Main ring */}
        <div
          className={cn(
            // Base styles for 3/4 circle
            'relative rounded-full border-4 transition-all duration-300',
            // Create the 3/4 circle effect with pseudo-element
            'before:absolute before:top-0 before:right-0',
            'before:w-1/4 before:h-1/4 before:bg-white before:rounded-tr-full',
            // Hover effects
            'group-hover:scale-110 group-hover:rotate-12',
            sizeClasses[size],
            currentVariant.ring,
            glowing && currentVariant.glow,
            animated && 'animate-float',
            className
          )}
        >
          {/* Rotating inner ring */}
          {animated && (
            <div className={cn(
              'absolute inset-2 rounded-full border-2 border-dashed opacity-30 transition-all duration-1000',
              'animate-spin',
              variant === 'coral' ? 'border-borochi-coral-red' : 'border-borochi-cyan'
            )} />
          )}

          {/* Inner content area with enhanced styling */}
          <div className="absolute inset-1 rounded-full flex items-center justify-center">
            {/* Central dot with pulse effect */}
            <div className={cn(
              'rounded-full transition-all duration-300 group-hover:scale-125',
              size === 'sm' ? 'w-1.5 h-1.5' : 
              size === 'md' ? 'w-2 h-2' : 
              size === 'lg' ? 'w-3 h-3' : 'w-4 h-4',
              currentVariant.dot,
              animated && 'animate-pulse'
            )} />

            {/* Orbiting particles */}
            {animated && (
              <>
                <div className={cn(
                  'absolute w-1 h-1 rounded-full opacity-60 animate-spin',
                  currentVariant.dot,
                  size === 'sm' ? 'top-1 right-2' : 
                  size === 'md' ? 'top-2 right-4' : 
                  size === 'lg' ? 'top-2 right-5' : 'top-3 right-6'
                )} 
                style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
                
                <div className={cn(
                  'absolute w-0.5 h-0.5 rounded-full opacity-40 animate-spin',
                  currentVariant.dot,
                  size === 'sm' ? 'bottom-1 left-2' : 
                  size === 'md' ? 'bottom-2 left-4' : 
                  size === 'lg' ? 'bottom-2 left-5' : 'bottom-3 left-6'
                )} 
                style={{ animationDuration: '4s' }} />
              </>
            )}
          </div>

          {/* Energy waves effect */}
          {animated && (
            <div className="absolute inset-0 rounded-full">
              <div className={cn(
                'absolute inset-0 rounded-full border-2 opacity-20 animate-ping',
                variant === 'coral' ? 'border-borochi-coral-red' : 'border-borochi-cyan'
              )} 
              style={{ animationDuration: '2s' }} />
              <div className={cn(
                'absolute inset-1 rounded-full border opacity-10 animate-ping',
                variant === 'coral' ? 'border-borochi-coral-red' : 'border-borochi-cyan'
              )} 
              style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            </div>
          )}
        </div>

        {/* Shimmer effect overlay */}
        {animated && (
          <div className={cn(
            'absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500',
            'before:absolute before:inset-0 before:animate-shimmer',
            'before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent'
          )} />
        )}
      </div>
    )
  }
)
SolarRing.displayName = 'SolarRing'

export { SolarRing } 