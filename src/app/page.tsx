import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section, SectionHeader } from '@/components/ui/section'
import { 
  Battery, 
  Zap, 
  TrendingUp, 
  Shield, 
  Settings, 
  BarChart3,
  Wrench,
  Clock,
  Globe,
  CheckCircle,
  Star,
  Users
} from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section with Enhanced Visual Appeal */}
      <Section variant="default" className="relative overflow-hidden bg-gradient-to-br from-white via-borochi-light-blue/20 to-borochi-light-cyan/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-borochi-cyan/20 to-borochi-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-borochi-coral-red/10 to-borochi-primary/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-6xl text-center">
          {/* Logo with Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-24 w-24 group">
              <div className="absolute inset-0 bg-gradient-to-r from-borochi-primary to-borochi-cyan rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="/borochi_logo.png"
                alt="Borochi Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Hero Title with Gradient Text */}
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-borochi-deep-black sm:text-7xl lg:text-8xl font-headline leading-tight">
            Powering Industry with{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-borochi-primary via-borochi-cyan to-borochi-primary bg-clip-text text-transparent bg-300% animate-gradient">
                Intelligent Energy
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-borochi-primary to-borochi-cyan rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="mb-12 text-xl text-borochi-medium-gray sm:text-2xl font-body max-w-5xl mx-auto leading-relaxed">
            From factories to business parks and hospitals, Borochi delivers turnkey clean-energy systems 
            that <span className="text-borochi-primary font-semibold">cut operating costs</span>, 
            <span className="text-borochi-cyan font-semibold"> unlock new revenue streams</span>, and keep critical operations running—today 
            and for decades to come.
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-borochi-medium-gray">
              <CheckCircle className="h-5 w-5 text-borochi-primary" />
              <span className="font-body">99.8% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-borochi-medium-gray">
              <Star className="h-5 w-5 text-borochi-cyan" />
              <span className="font-body">50+ Successful Projects</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-borochi-medium-gray">
              <Users className="h-5 w-5 text-borochi-coral-red" />
              <span className="font-body">3 Global Offices</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Module 1: Tailored Architectures with Enhanced Cards */}
      <Section variant="light-cyan">
        <SectionHeader
          title="Tailored Architectures for Every Site"
          subtitle="INTELLIGENT SOLUTIONS"
          description="Customized energy solutions designed to meet your specific operational needs and maximize efficiency with cutting-edge technology."
        />
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-borochi-light-blue/30">
            <div className="absolute inset-0 bg-gradient-to-br from-borochi-primary/5 to-borochi-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-borochi-primary/10 to-borochi-primary/20 group-hover:from-borochi-primary/20 group-hover:to-borochi-primary/30 transition-all duration-300">
                <Battery className="h-8 w-8 text-borochi-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black text-xl mb-3 group-hover:text-borochi-primary transition-colors duration-300">
                PV + Battery + EV Charging
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray leading-relaxed">
                Rooftop solar from <span className="font-semibold text-borochi-primary">100 kWp upward</span>, paired with high-performance storage and fleet/visitor chargers. 
                You use your own green power first, store the surplus, and shave peak-rate costs while showcasing sustainability.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-borochi-light-cyan/30">
            <div className="absolute inset-0 bg-gradient-to-br from-borochi-cyan/5 to-borochi-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-borochi-cyan/10 to-borochi-cyan/20 group-hover:from-borochi-cyan/20 group-hover:to-borochi-cyan/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-borochi-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black text-xl mb-3 group-hover:text-borochi-cyan transition-colors duration-300">
                Standalone Battery Trading Hubs
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray leading-relaxed">
                For plants with spare grid capacity, we add <span className="font-semibold text-borochi-cyan">large-scale storage</span> that charges off-peak and sells when prices spike, 
                creating a new profit centre and supporting grid stability.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-borochi-light-red/30 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-borochi-coral-red/5 to-borochi-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-borochi-coral-red/10 to-borochi-coral-red/20 group-hover:from-borochi-coral-red/20 group-hover:to-borochi-coral-red/30 transition-all duration-300">
                <Zap className="h-8 w-8 text-borochi-coral-red group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="font-body font-bold text-borochi-deep-black text-xl mb-3 group-hover:text-borochi-coral-red transition-colors duration-300">
                PV + Storage + Heat Pumps
              </CardTitle>
              <CardDescription className="font-body text-borochi-medium-gray leading-relaxed">
                Ideal for <span className="font-semibold text-borochi-coral-red">hotels, hospitals, and care homes</span>. Solar-charged batteries and high-efficiency heat pumps 
                deliver simultaneous cuts to electricity and heating bills while slashing emissions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Module 2: Smart Energy Management with Enhanced Layout */}
      <Section variant="light-red">
        <SectionHeader
          title="Smart Energy Management & Market Access"
          subtitle="AI-POWERED PLATFORM"
          description="From compliance to monetisation—all in one intelligent platform that maximizes your energy potential."
        />
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="relative">
              <h3 className="mb-6 text-3xl font-bold text-borochi-deep-black font-headline">
                AI-Powered Optimization
              </h3>
              <p className="mb-8 text-lg text-borochi-medium-gray font-body leading-relaxed">
                AI schedules dispatch to <span className="font-semibold text-borochi-primary">maximise self-consumption</span>, avoid high-tariff imports, and meet §14a EnWG requirements. 
                Optional market modules let your battery join Germany's intraday and ancillary-service markets—buying low, selling high, and earning reliability payments.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: Settings, text: "Automated Reporting", color: "borochi-primary" },
                { icon: BarChart3, text: "Certified Audits", color: "borochi-cyan" },
                { icon: TrendingUp, text: "Continuous Optimization", color: "borochi-coral-red" },
                { icon: Shield, text: "Compliance Ready", color: "borochi-primary" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 group">
                  <div className={`h-12 w-12 rounded-xl bg-${item.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-6 w-6 text-${item.color}`} />
                  </div>
                  <span className="font-body font-semibold text-borochi-deep-black group-hover:text-borochi-primary transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-borochi-light-blue/30">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-borochi-primary/10 to-borochi-cyan/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <CardTitle className="font-headline text-2xl font-bold text-borochi-deep-black mb-6">
                You gain without extra headcount:
              </CardTitle>
              <div className="space-y-4">
                {[
                  "Real-time oversight of all systems",
                  "Automated market participation",
                  "Regulatory compliance assurance",
                  "Continuous performance optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="mt-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-borochi-primary to-borochi-cyan group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="font-body text-borochi-medium-gray group-hover:text-borochi-deep-black transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Module 3: Delivery & Service with Enhanced Visual Design */}
      <Section variant="default">
        <SectionHeader
          title="Delivery, Service, and Guarantees"
          subtitle="TURNKEY EXCELLENCE"
          description="Turnkey projects backed by industrial-grade support and world-class engineering standards."
        />
        
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Wrench,
              title: "EPC, PPA, or BOT",
              description: "Choose outright ownership or zero-CapEx power-purchase models; Borochi finances, builds, and operates to stringent VDE/DIN/IEC standards.",
              color: "borochi-primary",
              gradient: "from-borochi-primary/10 to-borochi-primary/20"
            },
            {
              icon: Clock,
              title: "Dedicated Account & SLA",
              description: "4-hour remote response, 24-hour on-site, and ≥99.8% system availability, with stocked spares and preventive maintenance schedules.",
              color: "borochi-cyan",
              gradient: "from-borochi-cyan/10 to-borochi-cyan/20"
            },
            {
              icon: BarChart3,
              title: "24/7 SCADA & IoT Monitoring",
              description: "Live dashboards, automated alerts, and data-driven asset-health analytics keep downtime near zero and prove savings to stakeholders.",
              color: "borochi-coral-red",
              gradient: "from-borochi-coral-red/10 to-borochi-coral-red/20"
            }
          ].map((item, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-borochi-light-gray/20">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <CardHeader className="relative text-center">
                <div className={`mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-10 w-10 text-${item.color}`} />
                </div>
                <CardTitle className={`font-body font-bold text-borochi-deep-black text-xl mb-4 group-hover:text-${item.color} transition-colors duration-300`}>
                  {item.title}
                </CardTitle>
                <CardDescription className="font-body text-borochi-medium-gray leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Enhanced CTA Section */}
      <Section variant="light-blue" className="relative overflow-hidden bg-gradient-to-br from-borochi-light-blue/20 via-white to-borochi-light-cyan/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionHeader
            title="Ready to Transform Your Energy Future?"
            subtitle="GET STARTED TODAY"
            description="Get in touch with our experts to discuss your custom energy solution and discover how much you can save."
          />
          
          <Button 
            size="lg" 
            className="group text-lg px-10 py-5 bg-gradient-to-r from-borochi-primary to-borochi-cyan hover:from-borochi-cyan hover:to-borochi-primary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Contact Our Team
            <Globe className="ml-3 h-5 w-5 transition-transform group-hover:rotate-12" />
          </Button>
        </div>
      </Section>
    </main>
  )
} 