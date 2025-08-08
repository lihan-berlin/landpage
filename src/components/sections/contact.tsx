'use client';

import React, { useState } from 'react';
import { Section } from '../ui/section';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the typical payback period for a Borochi energy system?",
    answer: "The payback period typically ranges from 5-8 years depending on your energy consumption, local electricity rates, and system size. Our PV + Battery systems often achieve 30-50% savings on electricity bills, while our Battery Trading Hubs can generate additional revenue of €50k+ annually."
  },
  {
    id: 2,
    question: "Do you provide financing options for energy projects?",
    answer: "Yes, we offer multiple financing models including EPC (Engineering, Procurement, Construction), PPA (Power Purchase Agreements), and BOT (Build-Operate-Transfer) arrangements. You can choose outright ownership or zero-CapEx power-purchase models to suit your budget and preferences."
  },
  {
    id: 3,
    question: "What maintenance and support do you provide?",
    answer: "We provide comprehensive 24/7 support with 4-hour remote response, 24-hour on-site service, and ≥99.8% system availability guarantee. Our service includes stocked spare parts, preventive maintenance schedules, and continuous SCADA & IoT monitoring with automated alerts."
  },
  {
    id: 4,
    question: "Can your systems integrate with existing infrastructure?",
    answer: "Absolutely. Our smart energy management systems are designed to integrate seamlessly with existing electrical infrastructure. We conduct thorough site assessments and customize solutions to work with your current setup while maximizing efficiency and compliance with local regulations like §14a EnWG."
  },
  {
    id: 5,
    question: "What size projects do you handle?",
    answer: "We handle projects from 100 kWp rooftop solar installations up to large-scale 1+ MWh battery storage systems. Whether you're a small factory, business park, hospital, or large industrial facility, we have scalable solutions tailored to your energy needs."
  },
  {
    id: 6,
    question: "How do you ensure system performance and ROI?",
    answer: "Our AI-powered cloud EMS provides real-time monitoring and optimization, automated reporting, and certified audits. We guarantee system performance with detailed analytics, predictive maintenance, and continuous optimization to ensure you achieve the projected ROI throughout the system lifecycle."
  }
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <Section id="contact" background="light-gray" padding="lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-brand-black mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="font-barlow text-xl text-brand-black/70 max-w-3xl mx-auto">
            Get in touch with our energy experts to discuss your specific needs and discover how Borochi can deliver the perfect solution for your facility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="font-playfair font-bold text-2xl text-brand-black">
                Frequently Asked Questions
              </h3>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h4 className="font-barlow font-semibold text-brand-black pr-4">
                      {faq.question}
                    </h4>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="font-barlow text-brand-black/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-brand-light-blue/20 rounded-lg p-6 mt-8">
              <h4 className="font-barlow font-semibold text-brand-black mb-2">
                Still have questions?
              </h4>
              <p className="font-barlow text-brand-black/70 mb-4">
                Our energy experts are ready to help you find the perfect solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+493012345678"
                  className="flex items-center gap-2 text-brand-blue font-barlow font-semibold hover:text-brand-blue/80 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +49 30 1234 5678
                </a>
                <a 
                  href="mailto:info@borochi.com"
                  className="flex items-center gap-2 text-brand-blue font-barlow font-semibold hover:text-brand-blue/80 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  info@borochi.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card variant="default">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-coral rounded-full flex items-center justify-center text-white">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-brand-black">
                  Get Your Custom Quote
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-barlow font-semibold text-brand-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-barlow font-semibold text-brand-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block font-barlow font-semibold text-brand-black mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-barlow font-semibold text-brand-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300"
                      placeholder="+49 30 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block font-barlow font-semibold text-brand-black mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select your project type</option>
                    <option value="pv-battery-ev">PV + Battery + EV Charging</option>
                    <option value="battery-trading">Standalone Battery Trading Hub</option>
                    <option value="pv-storage-heat">PV + Storage + Heat Pumps</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-barlow font-semibold text-brand-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell us about your energy requirements, facility size, current energy costs, and any specific challenges you're facing..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Custom Quote
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}; 