'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('modules');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/boro_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Logo */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
        <Image
          src="/borochi_logo.png"
          alt="Borochi"
          width={150}
          height={50}
          className="h-8 md:h-12 w-auto"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20 md:mt-0">
        <div className="animate-fade-in">
          <h1 className="font-playfair font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Powering Industry with{' '}
            <span className="text-brand-cyan">Intelligent Energy</span>
          </h1>
          
          <p className="font-barlow text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            From factories to business parks and hospitals, Borochi delivers turnkey clean-energy systems that cut operating costs, unlock new revenue streams, and keep critical operations running—today and for decades to come.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
              onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNextSection}
          className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}; 