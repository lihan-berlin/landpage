'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Battery,
  TrendingUp,
  Settings,
  Users,
  Phone,
  Mail
} from 'lucide-react'

const solutions = [
  {
    title: 'PV + Battery + EV Charging',
    href: '/solutions/pv-battery-ev',
    description: 'Complete solar and storage solutions with EV charging infrastructure.',
    icon: Battery,
  },
  {
    title: 'Battery Trading Hubs',
    href: '/solutions/battery-trading',
    description: 'Standalone storage systems for energy market participation.',
    icon: TrendingUp,
  },
  {
    title: 'PV + Storage + Heat Pumps',
    href: '/solutions/pv-storage-heat',
    description: 'Integrated renewable energy systems for heating and cooling.',
    icon: Zap,
  },
  {
    title: 'Energy Management Platform',
    href: '/solutions/energy-management',
    description: 'AI-powered cloud platform for optimal energy control.',
    icon: Settings,
  },
]

const company = [
  {
    title: 'About Us',
    href: '/about',
    description: 'Learn about our mission and global presence.',
    icon: Users,
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with our energy experts.',
    icon: Phone,
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-borochi-light-gray/50 shadow-soft' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-10 w-10 lg:h-12 lg:w-12 transition-transform duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-r from-borochi-primary to-borochi-cyan rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Image
                src="/borochi_logo.png"
                alt="Borochi Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-headline font-bold text-xl lg:text-2xl text-borochi-deep-black group-hover:text-borochi-primary transition-colors duration-300">
              Borochi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-body font-medium text-borochi-deep-black hover:text-borochi-primary transition-colors duration-300 bg-transparent hover:bg-borochi-light-blue/20 data-[state=open]:bg-borochi-light-blue/20 h-10 px-4">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border border-borochi-light-gray/20 shadow-xl rounded-lg">
                  <div className="w-[500px] p-6">
                    <div className="grid gap-4">
                      <div className="mb-4">
                        <h3 className="font-headline font-bold text-lg text-borochi-deep-black mb-2">
                          Energy Solutions
                        </h3>
                        <p className="font-body text-sm text-borochi-medium-gray">
                          Comprehensive clean energy systems for every industry.
                        </p>
                      </div>
                      <div className="grid gap-3">
                        {solutions.map((solution) => (
                          <NavigationMenuLink key={solution.href} asChild>
                            <Link
                              href={solution.href}
                              className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-borochi-light-blue/20 transition-colors duration-300"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-borochi-primary/10 group-hover:bg-borochi-primary/20 transition-colors duration-300">
                                <solution.icon className="h-5 w-5 text-borochi-primary" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-body font-semibold text-sm text-borochi-deep-black group-hover:text-borochi-primary transition-colors duration-300">
                                  {solution.title}
                                </h4>
                                <p className="font-body text-xs text-borochi-medium-gray mt-1">
                                  {solution.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-body font-medium text-borochi-deep-black hover:text-borochi-primary transition-colors duration-300 bg-transparent hover:bg-borochi-light-blue/20 data-[state=open]:bg-borochi-light-blue/20 h-10 px-4">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white border border-borochi-light-gray/20 shadow-xl rounded-lg">
                  <div className="w-[300px] p-6">
                    <div className="grid gap-3">
                      {company.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-borochi-light-cyan/20 transition-colors duration-300"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-borochi-cyan/10 group-hover:bg-borochi-cyan/20 transition-colors duration-300">
                              <item.icon className="h-5 w-5 text-borochi-cyan" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-body font-semibold text-sm text-borochi-deep-black group-hover:text-borochi-cyan transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="font-body text-xs text-borochi-medium-gray mt-1">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={cn(
                    "font-body font-medium px-4 py-2 h-10 flex items-center rounded-lg transition-colors duration-300",
                    pathname === '/about'
                      ? "text-borochi-primary bg-borochi-light-blue/20"
                      : "text-borochi-deep-black hover:text-borochi-primary hover:bg-borochi-light-blue/20"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={cn(
                    "font-body font-medium px-4 py-2 h-10 flex items-center rounded-lg transition-colors duration-300",
                    pathname === '/contact'
                      ? "text-borochi-primary bg-borochi-light-blue/20"
                      : "text-borochi-deep-black hover:text-borochi-primary hover:bg-borochi-light-blue/20"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              size="sm"
              className="font-body bg-gradient-to-r from-borochi-primary to-borochi-cyan hover:from-borochi-cyan hover:to-borochi-primary transition-all duration-300 transform hover:scale-105 shadow-medium"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-borochi-light-gray/50 shadow-strong">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-6">
                <div>
                  <h3 className="font-headline font-bold text-lg text-borochi-deep-black mb-4">
                    Solutions
                  </h3>
                  <div className="space-y-3 ml-4">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="flex items-center space-x-3 py-2 text-borochi-medium-gray hover:text-borochi-primary transition-colors duration-300"
                        onClick={handleCloseMenu}
                      >
                        <solution.icon className="h-4 w-4" />
                        <span className="font-body text-sm">{solution.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-headline font-bold text-lg text-borochi-deep-black mb-4">
                    Company
                  </h3>
                  <div className="space-y-3 ml-4">
                    {company.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 py-2 text-borochi-medium-gray hover:text-borochi-cyan transition-colors duration-300"
                        onClick={handleCloseMenu}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="font-body text-sm">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-borochi-light-gray">
                  <Button
                    size="sm"
                    className="w-full font-body bg-gradient-to-r from-borochi-primary to-borochi-cyan hover:from-borochi-cyan hover:to-borochi-primary transition-all duration-300"
                    onClick={handleCloseMenu}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 