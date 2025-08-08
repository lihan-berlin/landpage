import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/section'
import { SolarRing } from '@/components/ui/solar-ring'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using Borochi\'s services and website.',
}

export default function TermsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section variant="default" className="bg-gradient-to-br from-white via-borochi-light-cyan/30 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <SolarRing variant="cyan" size="lg" />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-borochi-deep-black sm:text-6xl font-headline">
            Terms of Service
          </h1>
          <p className="mb-8 text-xl text-borochi-medium-gray sm:text-2xl font-body max-w-3xl mx-auto">
            Please read these terms carefully before using our services. They govern your relationship with Borochi.
          </p>
          <p className="text-sm text-borochi-medium-gray font-body">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Section>

      {/* Terms Content */}
      <Section variant="default">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  By accessing and using Borochi's website, services, or products, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") apply to all users of the service, including without limitation 
                  users who are browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  2. Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  Borochi provides intelligent energy solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Solar photovoltaic (PV) systems design and installation</li>
                  <li>Battery energy storage systems (BESS)</li>
                  <li>Electric vehicle (EV) charging infrastructure</li>
                  <li>Energy management systems (EMS)</li>
                  <li>Grid integration and trading services</li>
                  <li>Monitoring and maintenance services</li>
                </ul>
                <p>
                  We reserve the right to modify or discontinue any aspect of our service at any time, 
                  with or without notice to you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  3. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any unlawful purpose</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Follow safety protocols for energy systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  4. Service Agreements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Project Contracts</h4>
                    <p>
                      Specific project terms will be outlined in separate service agreements, including 
                      scope of work, timelines, pricing, and performance guarantees.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Service Level Agreements (SLAs)</h4>
                    <p>
                      We provide SLAs with specific uptime guarantees, response times, and performance metrics 
                      as detailed in individual contracts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Maintenance Services</h4>
                    <p>
                      Ongoing maintenance and support services are subject to separate terms and may include 
                      preventive maintenance schedules and emergency response procedures.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  5. Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment terms are specified in individual service agreements</li>
                  <li>Invoices are typically due within 30 days unless otherwise specified</li>
                  <li>Late payments may incur interest charges and service interruptions</li>
                  <li>All prices are exclusive of taxes unless otherwise stated</li>
                  <li>Currency and payment methods will be specified in contracts</li>
                  <li>Disputed charges must be reported within 30 days of invoice date</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  6. Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Borochi Property</h4>
                    <p>
                      All software, designs, methodologies, and proprietary technologies developed by 
                      Borochi remain our exclusive property.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Customer Data</h4>
                    <p>
                      You retain ownership of your data, but grant us license to use it for 
                      providing services and system optimization.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Third-Party Components</h4>
                    <p>
                      Some systems may include third-party components subject to their own licensing terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  7. Warranties and Disclaimers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Limited Warranty</h4>
                    <p>
                      We provide limited warranties on our systems and services as specified in 
                      individual contracts, typically covering defects in materials and workmanship.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Disclaimer</h4>
                    <p>
                      Except as expressly stated, our services are provided "as is" without warranty 
                      of any kind, either express or implied.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Force Majeure</h4>
                    <p>
                      We are not liable for delays or failures due to circumstances beyond our reasonable 
                      control, including natural disasters, government actions, or grid failures.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  8. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  To the maximum extent permitted by law, Borochi shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Loss of profits or revenue</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Cost of substitute services</li>
                </ul>
                <p>
                  Our total liability shall not exceed the amount paid by you for the specific service 
                  that gave rise to the claim during the twelve (12) months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  9. Indemnification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  You agree to indemnify and hold Borochi harmless from any claims, damages, or expenses 
                  arising from:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your use of our services in violation of these terms</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Your infringement of third-party rights</li>
                  <li>Modifications to our systems without authorization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  10. Termination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Termination by You</h4>
                    <p>
                      You may terminate services according to the terms specified in your service agreement, 
                      typically with appropriate notice periods.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Termination by Borochi</h4>
                    <p>
                      We may terminate services immediately for material breach of terms, non-payment, 
                      or safety violations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Effect of Termination</h4>
                    <p>
                      Upon termination, access to services will cease, and any outstanding obligations 
                      will survive termination as specified in contracts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  11. Governing Law and Disputes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  These terms are governed by the laws of Germany. Any disputes will be resolved through:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Good faith negotiations as the first step</li>
                  <li>Mediation if negotiations fail</li>
                  <li>Arbitration or court proceedings as a last resort</li>
                </ul>
                <p>
                  The courts of Berlin, Germany shall have exclusive jurisdiction over any legal proceedings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  12. Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  We reserve the right to modify these terms at any time. Material changes will be 
                  communicated to you via:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Email notification to registered users</li>
                  <li>Posted notice on our website</li>
                  <li>Direct communication for contract modifications</li>
                </ul>
                <p>
                  Continued use of our services after changes constitute acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  13. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  For questions about these terms or our services, please contact us:
                </p>
                <div className="bg-borochi-light-cyan/30 p-4 rounded-lg">
                  <p><strong className="text-borochi-deep-black">Email:</strong> <a href="mailto:legal@borochi.com" className="text-borochi-primary hover:underline">legal@borochi.com</a></p>
                  <p><strong className="text-borochi-deep-black">Address:</strong> Friedrichstraße 123, 10117 Berlin, Germany</p>
                  <p><strong className="text-borochi-deep-black">Phone:</strong> <a href="tel:+493012345678" className="text-borochi-primary hover:underline">+49 30 1234 5678</a></p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </Section>
    </main>
  )
} 