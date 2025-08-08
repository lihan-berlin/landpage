'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Section } from '../ui/section';
import { Battery, Zap, TrendingUp, Shield, Clock, Award, CheckCircle } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: '',
    icon: <Zap className="w-8 h-8" />,
    background: 'light-gray' as const,
    isInteractive: true,
    features: [
      {
        id: 'pv-battery-ev',
        title: 'PV + Battery + EV Charging',
        description: 'Rooftop solar from 100 kWp upward, paired with high-performance storage and fleet/visitor chargers. You use your own green power first, store the surplus, and shave peak-rate costs while showcasing sustainability.',
        icon: <Battery className="w-8 h-8" />,
        color: 'brand-blue',
        bgGradient: 'from-blue-50 to-blue-100',
        hoverGradient: 'from-blue-100 to-blue-200',
        benefits: ['Self-consumption optimization', 'Peak shaving', 'Sustainability showcase'],
        stats: { 'Power': '100+ kWp', 'Efficiency': '95%', 'Savings': '30-50%' }
      },
      {
        id: 'battery-trading',
        title: 'Standalone Battery Trading Hubs',
        description: 'For plants with spare grid capacity, we add large-scale storage that charges off-peak and sells when prices spike, creating a new profit centre and supporting grid stability.',
        icon: <TrendingUp className="w-8 h-8" />,
        color: 'brand-coral',
        bgGradient: 'from-red-50 to-red-100',
        hoverGradient: 'from-red-100 to-red-200',
        benefits: ['New revenue streams', 'Grid stability support', 'Off-peak optimization'],
        stats: { 'Capacity': '1+ MWh', 'Revenue': '€50k/year', 'Efficiency': '92%' }
      },
      {
        id: 'pv-storage-heat',
        title: 'PV + Storage + Heat Pumps',
        description: 'Ideal for hotels, hospitals, and care homes. Solar-charged batteries and high-efficiency heat pumps deliver simultaneous cuts to electricity and heating bills while slashing emissions.',
        icon: <Shield className="w-8 h-8" />,
        color: 'brand-cyan',
        bgGradient: 'from-cyan-50 to-cyan-100',
        hoverGradient: 'from-cyan-100 to-cyan-200',
        benefits: ['Dual bill reduction', 'Emission cuts', 'High efficiency heating'],
        stats: { 'COP': '4.5+', 'Savings': '40-60%', 'Emissions': '-70%' }
      }
    ]
  },
  {
    id: 2,
    title: 'Smart Energy Management & Market Access',
    subtitle: 'From Compliance to Monetisation—All in One Platform',
    icon: <TrendingUp className="w-8 h-8" />,
    background: 'white' as const,
    description: 'Our cloud EMS gives real-time oversight of generation, storage, loads, and chargers. AI schedules dispatch to maximise self-consumption, avoid high-tariff imports, and meet §14a EnWG requirements. Optional market modules let your battery join Germany\'s intraday and ancillary-service markets—buying low, selling high, and earning reliability payments. You gain certified audits, automated reporting, and continuous optimisation without extra headcount.',
    showImage: true
  },
  {
    id: 3,
    title: 'Delivery, Service, and Guarantees',
    subtitle: 'Turnkey Projects Backed by Industrial-Grade Support',
    icon: <Award className="w-8 h-8" />,
    background: 'light-blue' as const,
    features: [
      {
        title: 'EPC, PPA, or BOT',
        description: 'Choose outright ownership or zero-CapEx power-purchase models; Borochi finances, builds, and operates to stringent VDE/DIN/IEC standards.',
        icon: <Shield className="w-6 h-6 text-brand-blue" />
      },
      {
        title: 'Dedicated Account & SLA',
        description: '4-hour remote response, 24-hour on-site, and ≥99.8% system availability, with stocked spares and preventive maintenance schedules.',
        icon: <Clock className="w-6 h-6 text-brand-coral" />
      },
      {
        title: '24/7 SCADA & IoT Monitoring',
        description: 'Live dashboards, automated alerts, and data-driven asset-health analytics keep downtime near zero and prove savings to stakeholders.',
        icon: <Zap className="w-6 h-6 text-brand-cyan" />
      }
    ],
    showVideo: true
  }
];

const InteractiveFeatureCard: React.FC<{
  feature: any;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ feature, isActive, onHover, onLeave }) => {
  return (
    <div
      className={`relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer group ${
        isActive 
          ? `border-${feature.color} bg-gradient-to-br ${feature.hoverGradient} shadow-2xl scale-105` 
          : `border-gray-200 bg-gradient-to-br ${feature.bgGradient} hover:border-${feature.color} hover:shadow-xl hover:scale-102`
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Floating Icon */}
      <div className={`absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500 ${
        isActive ? `bg-${feature.color} shadow-lg` : `bg-${feature.color} group-hover:shadow-lg`
      }`}>
        {feature.icon}
      </div>
      
      {/* Content */}
      <div className="pt-6">
        <h3 className="font-playfair font-bold text-2xl text-brand-black mb-4 group-hover:text-brand-blue transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="font-barlow text-brand-black/70 leading-relaxed mb-6">
          {feature.description}
        </p>
        
        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {feature.benefits.map((benefit: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="font-barlow text-sm text-brand-black/80">{benefit}</span>
            </div>
          ))}
        </div>
        
                 {/* Stats */}
         <div className="grid grid-cols-3 gap-4 mb-6">
           {Object.entries(feature.stats).map(([key, value], index) => (
             <div key={index} className="text-center">
               <div className={`font-playfair font-bold text-lg text-${feature.color}`}>
                 {value as string}
               </div>
               <div className="font-barlow text-xs text-brand-black/60 capitalize">
                 {key.replace(/([A-Z])/g, ' $1').trim()}
               </div>
             </div>
           ))}
         </div>
        
        
      </div>
      
      {/* Decorative Elements */}
      <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}></div>
      <div className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg`}></div>
    </div>
  );
};

export const ModulesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div id="modules">
      {modules.map((module, index) => (
        <Section 
          key={module.id} 
          background={module.background} 
          padding="lg"
          className={`animate-slide-up`} 
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="max-w-7xl mx-auto">
            {module.isInteractive ? (
              // Interactive First Section
              <div className="text-center mb-16">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white mx-auto mb-8">
                  {module.icon}
                </div>
                <h2 className="font-playfair font-bold text-4xl lg:text-5xl text-brand-black mb-6">
                  {module.title}
                </h2>
                <p className="font-barlow text-xl text-brand-black/70 max-w-3xl mx-auto mb-16">
                  Discover our comprehensive energy solutions designed for your specific needs. 
                  Hover over each option to explore detailed benefits and performance metrics.
                </p>
                
                {/* Interactive Feature Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  {module.features?.map((feature) => (
                    <InteractiveFeatureCard
                      key={feature.id}
                      feature={feature}
                      isActive={activeFeature === feature.id}
                      onHover={() => setActiveFeature(feature.id)}
                      onLeave={() => setActiveFeature(null)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // Regular Sections
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white mb-6">
                    {module.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-brand-black mb-4">
                    {module.title}
                  </h2>
                  
                  {module.subtitle && (
                    <h3 className="font-barlow font-semibold text-xl text-brand-blue mb-6">
                      {module.subtitle}
                    </h3>
                  )}
                  
                  {module.description && (
                    <p className="font-barlow text-lg text-brand-black/80 leading-relaxed mb-8">
                      {module.description}
                    </p>
                  )}
                  
                  {module.features && !module.isInteractive && (
                    <div className="grid md:grid-cols-1 gap-6 mb-8">
                      {module.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="group flex items-start gap-4 p-6 bg-white/70 rounded-lg shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-brand-blue/20 animate-slide-up relative overflow-hidden"
                          style={{
                            animationDelay: `${featureIndex * 0.2 + 0.5}s`
                          }}
                        >
                          <div className="flex-shrink-0 mt-1 relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 flex items-center justify-center group-hover:from-brand-blue/20 group-hover:to-brand-blue/30 transition-all duration-300 group-hover:scale-110">
                              <div className="relative z-10">
                                {feature.icon}
                              </div>
                              <div className="absolute inset-0 rounded-full bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-barlow font-semibold text-lg text-brand-black mb-2 group-hover:text-brand-blue transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="font-barlow text-brand-black/70 leading-relaxed group-hover:text-brand-black/80 transition-colors duration-300">
                              {feature.description}
                            </p>
                          </div>
                          
                          {/* Decorative elements */}
                          <div className="absolute top-2 right-2 w-2 h-2 bg-brand-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                          <div className="absolute bottom-2 right-4 w-1 h-1 bg-brand-cyan/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                          
                          {/* Hover glow effect */}
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Image Section for Smart Energy Management */}
                {module.showImage && (
                  <div className="flex-shrink-0 lg:w-2/5 flex justify-center items-center">
                    <div className="relative rounded-xl overflow-hidden shadow-lg max-w-md">
                      <Image
                        src="/demo_image.png"
                        alt="Borochi Energy System Installation - Completed Project"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                        Smart Energy System
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Video Section for Delivery & Service */}
                {module.showVideo && (
                  <div className="flex-shrink-0 lg:w-2/5 flex justify-center items-center">
                    <div className="relative rounded-xl overflow-hidden shadow-lg max-w-md">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto"
                        poster="/demo_image.png"
                      >
                        <source src="/boro.mp4" type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                        Installation Process
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Section>
      ))}
    </div>
  );
}; 