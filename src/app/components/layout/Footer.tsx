'use client';

import React from 'react';
import Image from 'next/image';

interface FooterProps {
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ handleNavLinkClick }) => {
  return (
    <footer className="bg-[#0B2A3A] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
          
              {/* Logo placeholder - replace with actual logo */}
              <div className="w-32 h-20 flex items-center justify-center">
                <img src="/images/logo.png" alt="logo" className='w-28 h-16'/>
              </div>
            
            <p className="text-gray-300 text-base leading-relaxed max-w-sm pl-2">
              Expert radiology readings you can trust, delivered with precision and care.
            </p>
          </div>

          {/* Middle Column - Services */}
          <div>
            <h5 className="text-xl font-bold mb-6 text-white">Services</h5>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavLinkClick(e, 'services')} 
                  className="hover:text-white transition-colors text-base"
                >
                  X-ray Readings
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavLinkClick(e, 'services')} 
                  className="hover:text-white transition-colors text-base"
                >
                  Ultrasound Interpretations
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavLinkClick(e, 'services')} 
                  className="hover:text-white transition-colors text-base"
                >
                  MRI & CT Interpretations
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavLinkClick(e, 'services')} 
                  className="hover:text-white transition-colors text-base"
                >
                  Mammography Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h5 className="text-xl font-bold mb-6 text-white">Contact</h5>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <a 
                  className="hover:text-white transition-colors font-semibold" 
                  href="tel:+17149955400"
                >
                  (714) 995-5400
                </a>
              </p>
              <p className="text-base">
                <a 
                  className="hover:text-white transition-colors" 
                  href="mailto:apireports@gmail.com"
                >
                  apireports@gmail.com
                </a>
              </p>
              <p className="text-base">
                Reports within 24-48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Advanced Professional Imaging Medical Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
