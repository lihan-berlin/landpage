import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section, SectionHeader } from '@/components/ui/section'
import { SolarRing } from '@/components/ui/solar-ring'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  Award,
  TrendingUp,
  Shield,
  Lightbulb
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Borochi\'s mission to power industry with intelligent energy solutions across the globe.',
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section variant="default" className="relative overflow-hidden bg-gradient-to-br from-white via-borochi-light-blue/30 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <SolarRing variant="cyan" size="lg" />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-borochi-deep-black sm:text-6xl lg:text-7xl font-headline">
            Powering the Future of{' '}
            <span className="bg-gradient-to-r from-borochi-primary to-borochi-cyan bg-clip-text text-transparent">
              Clean Energy
            </span>
          </h1>
          <p className="mb-8 text-xl text-borochi-medium-gray sm:text-2xl font-body max-w-4xl mx-auto">
            Founded with a vision to transform how industries consume and generate energy, 
            Borochi combines cutting-edge technology with sustainable practices to create 
            a cleaner, more efficient future.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section variant="light-cyan">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-borochi-primary/10">
                  <Target className="h-8 w-8 text-borochi-primary" />
                </div>
              </div>
              <CardTitle className="font-headline text-2xl text-borochi-deep-black">
                Our Mission
              </CardTitle>
              <CardDescription className="font-body text-lg text-borochi-medium-gray">
                To accelerate the global transition to clean energy by delivering intelligent, 
                scalable solutions that reduce costs, increase efficiency, and create new revenue 
                opportunities for industrial and commercial operations worldwide.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-borochi-cyan/10">
                  <Eye className="h-8 w-8 text-borochi-cyan" />
                </div>
              </div>
              <CardTitle className="font-headline text-2xl text-borochi-deep-black">
                Our Vision
              </CardTitle>
              <CardDescription className="font-body text-lg text-borochi-medium-gray">
                A world where every industrial facility operates on clean, intelligent energy systems 
                that not only power operations sustainably but also contribute to grid stability and 
                generate additional revenue streams.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Company Story */}
      <Section variant="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <SectionHeader
              title="Our Story"
              subtitle="From Vision to Global Impact"
              description="Founded by energy industry veterans who recognized the untapped potential of intelligent energy systems."
              centered={false}
            />
            <div className="space-y-6 font-body text-borochi-medium-gray">
              <p>
                Borochi was born from the recognition that traditional energy systems were failing 
                to meet the evolving needs of modern industry. Our founders, with decades of combined 
                experience in renewable energy, grid management, and industrial operations, saw an 
                opportunity to revolutionize how businesses approach energy.
              </p>
              <p>
                Starting with a simple premise—that energy systems should not just consume but also 
                generate value—we developed our first integrated PV and battery solutions for 
                manufacturing facilities in Germany. The results exceeded expectations, with clients 
                achieving 30-40% reductions in energy costs while generating new revenue streams 
                through grid services.
              </p>
              <p>
                Today, with offices in Berlin, Suzhou, and Singapore, we serve clients across 
                three continents, delivering turnkey solutions that combine solar generation, 
                intelligent storage, EV charging, and advanced energy management systems.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-borochi-light-blue to-borochi-light-cyan">
              {/* Placeholder for company image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-borochi-primary mx-auto mb-4" />
                  <p className="text-borochi-primary font-body font-semibold">
                    Global Presence
                  </p>
                  <p className="text-borochi-medium-gray font-body text-sm">
                    3 Continents, 50+ Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section variant="light-blue">
        <div className="flex items-center justify-center mb-8">
          <SolarRing variant="coral" size="lg" />
        </div>
        <SectionHeader
          title="Our Core Values"
          description="The principles that guide everything we do"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-primary/10">
                  <Lightbulb className="h-6 w-6 text-borochi-primary" />
                </div>
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black">
                Innovation
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                We continuously push the boundaries of what's possible in energy technology, 
                developing solutions that are ahead of their time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-cyan/10">
                  <Shield className="h-6 w-6 text-borochi-cyan" />
                </div>
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black">
                Reliability
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                Our systems are built to industrial standards with 99.8%+ uptime guarantees, 
                ensuring your operations never skip a beat.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-coral-red/10">
                  <Heart className="h-6 w-6 text-borochi-coral-red" />
                </div>
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black">
                Sustainability
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                Every solution we deliver contributes to a cleaner planet while creating 
                economic value for our clients.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-primary/10">
                  <Users className="h-6 w-6 text-borochi-primary" />
                </div>
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black">
                Partnership
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                We work closely with our clients as long-term partners, not just vendors, 
                ensuring mutual success and growth.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-cyan/10">
                  <Award className="h-6 w-6 text-borochi-cyan" />
                </div>
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black">
                Excellence
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                We maintain the highest standards in engineering, service delivery, 
                and customer support across all our operations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg text-center">
            <CardHeader>
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-borochi-coral-red/10">
                  <TrendingUp className="h-6 w-6 text-borochi-coral-red" />
                </div>
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black">
                Growth
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                We believe in creating solutions that grow with our clients' needs and 
                contribute to their long-term success.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Global Presence */}
      <Section variant="light-red">
        <SectionHeader
          title="Global Presence, Local Expertise"
          description="With engineering teams across three continents, we combine global knowledge with local understanding."
        />
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-body font-bold text-borochi-deep-black text-xl">
                Berlin, Germany
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                European headquarters and R&D center. Leading innovation in energy management 
                systems and grid integration technologies.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-body font-bold text-borochi-deep-black text-xl">
                Suzhou, China
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                Manufacturing and engineering hub. Specializing in high-volume production 
                and advanced battery storage solutions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-body font-bold text-borochi-deep-black text-xl">
                Singapore
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray">
                Asia-Pacific operations center. Focusing on tropical climate solutions 
                and regional market development.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="default">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader
            title="Ready to Join Our Mission?"
            description="Whether you're looking to transform your energy infrastructure or join our team, we'd love to hear from you."
          />
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base bg-borochi-primary hover:bg-borochi-primary/90">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg" className="text-base border-borochi-primary text-borochi-primary hover:bg-borochi-primary hover:text-white">
              View Careers
            </Button>
          </div>
        </div>
      </Section>
    </main>
  )
} 