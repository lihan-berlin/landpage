'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
    setIsSubscribing(false);
  };

  return (
    <footer className="bg-white border-t border-brand-light-gray">
      <Section padding="lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <Image
                  src="/borochi_logo.png"
                  alt="Borochi"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="font-barlow text-brand-black/70 leading-relaxed mb-6">
                Intelligent energy solutions for factories, business parks, and hospitals. 
                Delivering turnkey clean-energy systems that cut operating costs and unlock new revenue streams.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-brand-light-blue rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-brand-light-blue rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-brand-light-blue rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-brand-light-blue rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="font-playfair font-bold text-xl text-brand-black mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#modules" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    Get Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-playfair font-bold text-xl text-brand-black mb-6">
                Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-barlow text-brand-black/70">
                      Hauptstraße 123<br />
                      Berlin, 10115<br />
                      Germany
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <a 
                    href="tel:+493012345678" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    +49 30 1234 5678
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <a 
                    href="mailto:info@borochi.com" 
                    className="font-barlow text-brand-black/70 hover:text-brand-blue transition-colors duration-300"
                  >
                    info@borochi.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="font-playfair font-bold text-xl text-brand-black mb-6">
                Newsletter
              </h3>
              <p className="font-barlow text-brand-black/70 mb-6">
                Subscribe to our newsletter for the latest energy solutions updates and industry insights.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 border-2 border-brand-light-gray rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-300 font-barlow"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full"
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-brand-light-gray">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-barlow text-brand-black/60 text-sm">
                © {new Date().getFullYear()} Borochi. All rights reserved.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a 
                  href="#" 
                  className="font-barlow text-brand-black/60 hover:text-brand-blue transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="font-barlow text-brand-black/60 hover:text-brand-blue transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="font-barlow text-brand-black/60 hover:text-brand-blue transition-colors duration-300 text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}; 