'use client';

import React from 'react';
import { LucideIcon } from '../ui';
import { SERVICES } from '@/src/app/constants/services';

const iconPaths: Record<string, React.ReactNode> = {
  eye: (
    <>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </>
  ),
  activity: (
    <>
      <path d="M2 13s2-2 10-2 10 2 10 2M2 17s2-2 10-2 10 2 10 2M2 21s2-2 10-2 10 2 10 2"></path>
      <rect width="20" height="10" x="2" y="3" rx="2"></rect>
    </>
  ),
  layers: (
    <>
      <path d="M2 13s2-2 10-2 10 2 10 2M2 17s2-2 10-2 10 2 10 2M2 21s2-2 10-2 10 2 10 2"></path>
      <rect width="20" height="10" x="2" y="3" rx="2"></rect>
    </>
  ),
  scan: (
    <>
      <path d="M12 20a8 8 0 0 0 0-16M12 4a8 8 0 0 0 0 16"></path>
      <path d="M17 6.5l-4.5 4.5M6.5 17l4.5-4.5"></path>
    </>
  ),
  heart: (
    <>
      <path d="M16 8v6"></path>
      <path d="M18 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
      <path d="M4 6v14"></path>
      <path d="M8 6h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"></path>
    </>
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" x2="12" y1="15" y2="3"></line>
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
      <path d="M10 12h4"></path>
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </>
  ),
};

export const ServicesSection: React.FC = () => {
  return (
     // bg-[#E3EEF8]
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12 md:mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Imaging Services
          </h3>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Our board-certified radiologists provide expert readings across all major imaging modalities with rapid turnaround times.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="reveal group rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 p-6"
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0074C8] transition-colors">
                {service.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
