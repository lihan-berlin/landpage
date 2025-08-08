import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/section'
import { SolarRing } from '@/components/ui/solar-ring'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Borochi collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Section variant="default" className="bg-gradient-to-br from-white via-borochi-light-blue/30 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <SolarRing variant="coral" size="lg" />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-borochi-deep-black sm:text-6xl font-headline">
            Privacy Policy
          </h1>
          <p className="mb-8 text-xl text-borochi-medium-gray sm:text-2xl font-body max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-borochi-medium-gray font-body">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </Section>

      {/* Privacy Content */}
      <Section variant="default">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <div>
                  <h4 className="font-semibold text-borochi-deep-black mb-2">Personal Information</h4>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or use our services. This may include:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and job title</li>
                    <li>Project details and energy consumption data</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-borochi-deep-black mb-2">Technical Information</h4>
                  <p>
                    We automatically collect certain information when you use our website and services, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Energy system performance data (for customers)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Develop new products and services</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  3. Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>We may share your information in the following circumstances:</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Service Providers</h4>
                    <p>We may share information with third-party vendors who perform services on our behalf.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Business Transfers</h4>
                    <p>Information may be transferred in connection with mergers, acquisitions, or sales of assets.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Legal Requirements</h4>
                    <p>We may disclose information if required by law or to protect our rights and safety.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-borochi-deep-black">Consent</h4>
                    <p>We may share information with your consent or at your direction.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  5. Your Rights (GDPR)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>If you are located in the European Economic Area, you have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-borochi-deep-black">Access:</strong> Request copies of your personal data</li>
                  <li><strong className="text-borochi-deep-black">Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong className="text-borochi-deep-black">Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong className="text-borochi-deep-black">Portability:</strong> Receive your data in a structured format</li>
                  <li><strong className="text-borochi-deep-black">Restriction:</strong> Limit how we process your data</li>
                  <li><strong className="text-borochi-deep-black">Objection:</strong> Object to processing of your data</li>
                  <li><strong className="text-borochi-deep-black">Withdraw consent:</strong> Revoke consent for data processing</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at <a href="mailto:privacy@borochi.com" className="text-borochi-primary hover:underline">privacy@borochi.com</a>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  6. Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  We retain your personal information for as long as necessary to provide our services, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Account information: Until account deletion plus 30 days</li>
                  <li>Customer project data: Duration of service agreement plus 7 years</li>
                  <li>Marketing communications: Until unsubscribed plus 2 years</li>
                  <li>Website analytics: 26 months from collection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  7. International Transfers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We operate offices in Germany, China, and Singapore, and may transfer data between these locations 
                  to provide our services. We ensure appropriate safeguards are in place for such transfers, including:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Standard contractual clauses approved by the European Commission</li>
                  <li>Adequacy decisions for certain countries</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  8. Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  We use cookies and similar tracking technologies to collect and use personal information about you. 
                  This includes:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to understand site usage</li>
                  <li>Marketing cookies for targeted advertising</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
                <p>
                  You can control cookie preferences through your browser settings or our cookie consent banner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  9. Changes to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any material changes 
                  by posting the new policy on this page and updating the "Last updated" date. We encourage you to 
                  review this policy periodically to stay informed about how we protect your information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-body font-bold text-borochi-deep-black text-2xl">
                  10. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body text-borochi-medium-gray">
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-borochi-light-blue/30 p-4 rounded-lg">
                  <p><strong className="text-borochi-deep-black">Email:</strong> <a href="mailto:privacy@borochi.com" className="text-borochi-primary hover:underline">privacy@borochi.com</a></p>
                  <p><strong className="text-borochi-deep-black">Address:</strong> Friedrichstraße 123, 10117 Berlin, Germany</p>
                  <p><strong className="text-borochi-deep-black">Data Protection Officer:</strong> <a href="mailto:dpo@borochi.com" className="text-borochi-primary hover:underline">dpo@borochi.com</a></p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </Section>
    </main>
  )
} 