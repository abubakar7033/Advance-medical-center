'use client';

import React from 'react';
// import Image from 'next/image'; // Uncomment when adding real images
import { LucideIcon } from '../ui';

interface HeroSectionProps {
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ handleNavLinkClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Soft Gradient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-12 md:pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal show">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-blue-400  text-xs font-semibold ring-1 ring-primary/50">
              Board-Certified • Fast Turnaround
            </span>
            
            <h1 className="mt-5 text-2xl sm:text-5xl font-extrabold tracking-tight text-">
              Expert Medical Imaging Readings You Can Trust
            </h1>
            
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Advanced Professional Imaging Medical Center delivers accurate, timely radiology reads across all major modalities for healthcare providers.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a 
                href="#services" 
                onClick={(e) => handleNavLinkClick(e, 'services')}
                className="px-8 py-3 sm:mb-0 mb-2 rounded-full bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold hover:from-blue-900 hover:to-blue-6 00 transition shadow-lg"
              >
                Learn More
              </a>
              
              <a 
                href="tel:+17149955400" 
                className="inline-flex items-center gap-2 sm:px-0 px-1 text-gray-700 hover:text-brand-primary  transition font-medium"
              >
                <LucideIcon className="w-5 h-5 text-brand-primary">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </LucideIcon>
                Call (714) 995-5400
              </a>
            </div>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
  <div className="p-5 rounded-2xl shadow-md bg-white border border-gray-200 flex items-start gap-3">
    <LucideIcon className="w-6 h-6 text-blue-600 flex-shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
      <path d="m9 12 2 2 4-4"></path>
    </LucideIcon>
    <div>
      <div className="text-blue-600 font-bold text-lg">Board‑Certified</div>
      <div className="text-gray-600 text-sm">Subspecialty expertise</div>
    </div>
  </div>
  <div className="p-5 rounded-2xl shadow-md bg-white border border-gray-200 flex items-start gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600 flex-shrink-0"><path d="m2 2 20 20"/><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"/><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"/></svg> 
    <div>
      <div className="text-blue-600 font-bold text-lg">HIPAA</div>
      <div className="text-gray-600 text-sm">Secure &amp; compliant</div>
    </div>
  </div>
</div>

          </div>

          <div className="reveal flex items-center justify-center show">
            <div className="relative w-full">
              {/* Temporary placeholder - replace with actual image */}
              <div className="w-full aspect-4/3 rounded-2xl shadow-2xl shadow-brand-primary/10 bg-linear-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white">
              <img src="/images/herosection.png" alt="herosection" className='w-full h-full rounded-2xl' />
                {/* <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏥</div>
                  <p className="text-xl font-bold">Medical Imaging Excellence</p>
                  <p className="text-sm opacity-80 mt-2">Add your image to /public/images/hero-medical-imaging.jpg</p>
                </div> */}
              </div>
              {/* 
              Uncomment when you have your hero image:
              <Image 
                src="/images/hero-medical-imaging.jpg" 
                alt="Medical imaging equipment with CT and MRI scans" 
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl shadow-brand-primary/10"
                priority
              />
              */}
              {/* <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-brand-dark">
                Real-time Diagnostics
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
