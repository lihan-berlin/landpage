import * as React from 'react'
import { cn } from '@/lib/utils'

interface ElementRingProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'coral' | 'cyan' | 'primary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  heading?: string
  text?: string
}

const ElementRing = React.forwardRef<HTMLDivElement, ElementRingProps>(
  ({ 
    className, 
    variant = 'coral', 
    size = 'lg', 
    heading = "Heading ...", 
    text = "Text ...", 
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'w-24 h-24',
      md: 'w-32 h-32',
      lg: 'w-48 h-48',
      xl: 'w-64 h-64',
    }

    const variantClasses = {
      coral: {
        ring: 'border-borochi-coral-red',
        dot: 'bg-borochi-coral-red',
        background: 'bg-white',
        maskBackground: 'before:bg-white',
      },
      cyan: {
        ring: 'border-borochi-cyan',
        dot: 'bg-borochi-cyan',
        background: 'bg-borochi-primary',
        maskBackground: 'before:bg-borochi-primary',
      },
      primary: {
        ring: 'border-borochi-primary',
        dot: 'bg-borochi-primary',
        background: 'bg-white',
        maskBackground: 'before:bg-white',
      }
    }

    const currentVariant = variantClasses[variant]

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-block',
          className
        )}
        {...props}
      >
        {/* Main 3/4 Circle */}
        <div
          className={cn(
            'relative border-2 rounded-full',
            // Create the 3/4 circle effect with pseudo-element (covering right-bottom quarter)
            'before:absolute before:bottom-0 before:right-0',
            'before:w-1/2 before:h-1/2 before:rounded-br-full',
            sizeClasses[size],
            currentVariant.ring,
            currentVariant.background,
            currentVariant.maskBackground
          )}
        >
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn(
              'rounded-full',
              size === 'sm' ? 'w-2 h-2' : 
              size === 'md' ? 'w-3 h-3' : 
              size === 'lg' ? 'w-4 h-4' : 'w-5 h-5',
              currentVariant.dot
            )} />
          </div>
        </div>

        {/* Text Content in the missing quarter */}
        <div className={cn(
          'absolute bottom-0 right-0 p-2 max-w-[50%]',
          size === 'sm' ? 'p-1' : 
          size === 'md' ? 'p-2' : 
          size === 'lg' ? 'p-4' : 'p-6'
        )}>
          <h3 className={cn(
            'font-headline font-bold mb-1 leading-tight',
            variant === 'cyan' ? 'text-white' : 'text-borochi-deep-black',
            size === 'sm' ? 'text-xs' :
            size === 'md' ? 'text-sm' :
            size === 'lg' ? 'text-base' : 'text-lg'
          )}>
            {heading}
          </h3>
          <p className={cn(
            'font-body leading-tight',
            variant === 'cyan' ? 'text-white/80' : 'text-borochi-medium-gray',
            size === 'sm' ? 'text-xs' :
            size === 'md' ? 'text-xs' :
            size === 'lg' ? 'text-sm' : 'text-base'
          )}>
            {text}
          </p>
        </div>
      </div>
    )
  }
)
ElementRing.displayName = 'ElementRing'

export { ElementRing } 