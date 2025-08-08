import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section, SectionHeader } from '@/components/ui/section'
import { SolarRing } from '@/components/ui/solar-ring'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building,
  Users
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Borochi\'s energy experts. Contact our global offices in Berlin, Suzhou, and Singapore.',
}

const offices = [
  {
    city: 'Berlin',
    country: 'Germany',
    address: 'Friedrichstraße 123, 10117 Berlin, Germany',
    phone: '+49 30 1234 5678',
    email: 'berlin@borochi.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
    description: 'European headquarters and R&D center',
  },
  {
    city: 'Suzhou',
    country: 'China',
    address: 'Suzhou Industrial Park, Jiangsu 215123, China',
    phone: '+86 512 1234 5678',
    email: 'suzhou@borochi.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM CST',
    description: 'Manufacturing and engineering hub',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Marina Bay, Singapore 018989',
    phone: '+65 6123 4567',
    email: 'singapore@borochi.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
    description: 'Asia-Pacific operations center',
  },
]

const contactTypes = [
  {
    title: 'General Inquiries',
    description: 'Questions about our solutions and services',
    email: 'info@borochi.com',
    icon: MessageSquare,
  },
  {
    title: 'Sales & Partnerships',
    description: 'New projects and business opportunities',
    email: 'sales@borochi.com',
    icon: Building,
  },
  {
    title: 'Technical Support',
    description: 'Existing system support and maintenance',
    email: 'support@borochi.com',
    icon: Users,
  },
]

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section variant="default" className="relative overflow-hidden bg-gradient-to-br from-white via-borochi-light-blue/30 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <SolarRing variant="coral" size="lg" />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-borochi-deep-black sm:text-6xl lg:text-7xl font-headline">
            Get in{' '}
            <span className="bg-gradient-to-r from-borochi-primary to-borochi-cyan bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mb-8 text-xl text-borochi-medium-gray sm:text-2xl font-body max-w-4xl mx-auto">
            Ready to transform your energy infrastructure? Our experts are here to help you design 
            and implement the perfect intelligent energy solution for your facility.
          </p>
        </div>
      </Section>

      {/* Contact Types */}
      <Section variant="light-cyan">
        <SectionHeader
          title="How Can We Help?"
          description="Choose the best way to reach our team based on your needs"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {contactTypes.map((type) => (
            <Card key={type.title} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-primary/10">
                    <type.icon className="h-6 w-6 text-borochi-primary" />
                  </div>
                </div>
                <CardTitle className="font-body font-bold text-borochi-deep-black">
                  {type.title}
                </CardTitle>
                <CardDescription className="font-body text-borochi-medium-gray mb-4">
                  {type.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-borochi-primary text-borochi-primary hover:bg-borochi-primary hover:text-white"
                  onClick={() => window.location.href = `mailto:${type.email}`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {type.email}
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section variant="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              title="Send Us a Message"
              subtitle="Project Inquiry"
              description="Tell us about your project and we'll get back to you within 24 hours."
              centered={false}
            />
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-borochi-deep-black font-body mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-borochi-light-gray rounded-lg focus:ring-2 focus:ring-borochi-primary focus:border-borochi-primary font-body"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-borochi-deep-black font-body mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-borochi-light-gray rounded-lg focus:ring-2 focus:ring-borochi-primary focus:border-borochi-primary font-body"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-borochi-deep-black font-body mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-borochi-light-gray rounded-lg focus:ring-2 focus:ring-borochi-primary focus:border-borochi-primary font-body"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-borochi-deep-black font-body mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-borochi-light-gray rounded-lg focus:ring-2 focus:ring-borochi-primary focus:border-borochi-primary font-body"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-borochi-deep-black font-body mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full px-4 py-3 border border-borochi-light-gray rounded-lg focus:ring-2 focus:ring-borochi-primary focus:border-borochi-primary font-body"
                >
                  <option value="">Select project type</option>
                  <option value="pv-battery-ev">PV + Battery + EV Charging</option>
                  <option value="battery-trading">Battery Trading Hub</option>
                  <option value="pv-storage-heat">PV + Storage + Heat Pumps</option>
                  <option value="energy-management">Energy Management System</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-borochi-deep-black font-body mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-borochi-light-gray rounded-lg focus:ring-2 focus:ring-borochi-primary focus:border-borochi-primary font-body"
                  placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-borochi-primary hover:bg-borochi-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-borochi-deep-black font-body mb-4">
                Why Choose Borochi?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-borochi-primary flex-shrink-0"></div>
                  <p className="text-borochi-medium-gray font-body">
                    <span className="font-semibold text-borochi-deep-black">24-hour response time</span> - 
                    We respond to all project inquiries within one business day
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-borochi-primary flex-shrink-0"></div>
                  <p className="text-borochi-medium-gray font-body">
                    <span className="font-semibold text-borochi-deep-black">Free consultation</span> - 
                    Initial project assessment and feasibility study at no cost
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-borochi-primary flex-shrink-0"></div>
                  <p className="text-borochi-medium-gray font-body">
                    <span className="font-semibold text-borochi-deep-black">Global expertise</span> - 
                    Local teams with international best practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-borochi-primary flex-shrink-0"></div>
                  <p className="text-borochi-medium-gray font-body">
                    <span className="font-semibold text-borochi-deep-black">Proven track record</span> - 
                    50+ successful projects across three continents
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-borochi-primary/20 bg-borochi-light-blue/30">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black">
                  Emergency Support
                </CardTitle>
                <CardDescription className="font-body text-borochi-medium-gray">
                  For existing customers with urgent technical issues:
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-2 text-sm text-borochi-deep-black font-body">
                    <Phone className="h-4 w-4 text-borochi-primary" />
                    24/7 Hotline: +49 30 1234 9999
                  </p>
                  <p className="flex items-center gap-2 text-sm text-borochi-deep-black font-body">
                    <Mail className="h-4 w-4 text-borochi-primary" />
                    emergency@borochi.com
                  </p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>

      {/* Office Locations */}
      <Section variant="light-blue">
        <div className="flex items-center justify-center mb-8">
          <SolarRing variant="cyan" size="lg" />
        </div>
        <SectionHeader
          title="Our Global Offices"
          description="Visit us at any of our locations or schedule a virtual meeting with our local teams."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {offices.map((office) => (
            <Card key={office.city} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-xl">
                  {office.city}, {office.country}
                </CardTitle>
                <CardDescription className="font-body text-borochi-medium-gray mb-4">
                  {office.description}
                </CardDescription>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2 text-borochi-deep-black">
                    <MapPin className="h-4 w-4 mt-0.5 text-borochi-primary flex-shrink-0" />
                    {office.address}
                  </p>
                  <p className="flex items-center gap-2 text-borochi-deep-black">
                    <Phone className="h-4 w-4 text-borochi-primary flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-borochi-primary transition-colors">
                      {office.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-borochi-deep-black">
                    <Mail className="h-4 w-4 text-borochi-primary flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-borochi-primary transition-colors">
                      {office.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-borochi-medium-gray">
                    <Clock className="h-4 w-4 text-borochi-primary flex-shrink-0" />
                    {office.hours}
                  </p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  )
} 