import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'light-blue' | 'light-cyan' | 'light-red'
  container?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', container = true, children, ...props }, ref) => {
    const variantClasses = {
      default: 'bg-white',
      'light-blue': 'bg-borochi-light-blue',
      'light-cyan': 'bg-borochi-light-cyan', 
      'light-red': 'bg-borochi-light-red',
    }

    return (
      <section
        ref={ref}
        className={cn(
          'py-16 sm:py-24',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
Section.displayName = 'Section'

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, description, centered = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mb-12 sm:mb-16',
          centered && 'text-center',
          className
        )}
        {...props}
      >
        {subtitle && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-borochi-primary font-body">
            {subtitle}
          </p>
        )}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-borochi-deep-black sm:text-4xl lg:text-5xl font-headline">
          {title}
        </h2>
        {description && (
          <p className="mx-auto max-w-3xl text-lg text-borochi-medium-gray font-body">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = 'SectionHeader'

export { Section, SectionHeader } 