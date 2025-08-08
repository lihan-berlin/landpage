import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const footerNavigation = {
  solutions: [
    { name: 'PV + Battery + EV Charging', href: '/solutions/pv-battery-ev' },
    { name: 'Battery Trading Hubs', href: '/solutions/battery-trading' },
    { name: 'PV + Storage + Heat Pumps', href: '/solutions/pv-storage-heat' },
    { name: 'Energy Management System', href: '/solutions/energy-management' },
  ],
  services: [
    { name: 'EPC Services', href: '/services/epc' },
    { name: 'Power Purchase Agreements', href: '/services/ppa' },
    { name: 'Build-Operate-Transfer', href: '/services/bot' },
    { name: '24/7 Monitoring', href: '/services/monitoring' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Insights', href: '/news' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support Center', href: '/support' },
    { name: 'System Status', href: '/status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Legal Notice', href: '/legal' },
  ],
}

const offices = [
  {
    city: 'Berlin',
    country: 'Germany',
    address: 'Friedrichstraße 123, 10117 Berlin',
    phone: '+49 30 1234 5678',
    email: 'berlin@borochi.com',
  },
  {
    city: 'Suzhou',
    country: 'China',
    address: 'Suzhou Industrial Park, Jiangsu 215123',
    phone: '+86 512 1234 5678',
    email: 'suzhou@borochi.com',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Marina Bay, Singapore 018989',
    phone: '+65 6123 4567',
    email: 'singapore@borochi.com',
  },
]

export function Footer() {
  return (
    <footer className="bg-borochi-deep-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/borochi_logo.png"
                alt="Borochi Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="mb-6 text-borochi-light-gray font-body max-w-md">
              Powering industry with intelligent energy solutions. From factories to hospitals, 
              we deliver turnkey clean-energy systems that cut costs and unlock revenue streams.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com/company/borochi" 
                className="text-borochi-light-gray hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://twitter.com/borochi" 
                className="text-borochi-light-gray hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-4">
            {/* Solutions */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-body">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-borochi-light-gray hover:text-white transition-colors font-body text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-body">
                Services
              </h3>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-borochi-light-gray hover:text-white transition-colors font-body text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-body">
                Company
              </h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-borochi-light-gray hover:text-white transition-colors font-body text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white font-body">
                Support
              </h3>
              <ul className="space-y-3">
                {footerNavigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-borochi-light-gray hover:text-white transition-colors font-body text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16 pt-8 border-t border-borochi-medium-gray">
          <h3 className="mb-8 text-lg font-semibold text-white font-body">
            Global Offices
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {offices.map((office) => (
              <div key={office.city} className="text-sm">
                <h4 className="mb-2 font-semibold text-white font-body">
                  {office.city}, {office.country}
                </h4>
                <div className="space-y-1 text-borochi-light-gray">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <Link href={`tel:${office.phone}`} className="hover:text-white transition-colors">
                      {office.phone}
                    </Link>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <Link href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                      {office.email}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-borochi-medium-gray bg-borochi-deep-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-borochi-light-gray font-body">
              © {new Date().getFullYear()} Borochi. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-borochi-light-gray hover:text-white transition-colors font-body"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 