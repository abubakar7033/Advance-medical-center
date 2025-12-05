'use client';

import React from 'react';
import Image from 'next/image';
import { LucideIcon } from '../ui';

interface FooterProps {
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ handleNavLinkClick }) => {
  return (
    // <footer className="bg-[#0B2A3A] text-white py-12 md:py-16">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Main Footer Content */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
    //       {/* Left Column - Logo and Description */}
    //       <div className="space-y-6">
          
    //           {/* Logo placeholder - replace with actual logo */}
    //           <div className="w-32 h-20 flex items-center justify-center">
    //             <img src="/images/logo.png" alt="logo" className='w-28 h-16'/>
    //           </div>
            
    //         <p className="text-gray-300 text-base leading-relaxed max-w-sm pl-2">
    //           Expert radiology readings you can trust, delivered with precision and care.
    //         </p>
    //       </div>

    //       {/* Middle Column - Services */}
    //       <div>
    //         <h5 className="text-xl font-bold mb-6 text-white">Services</h5>
    //         <ul className="space-y-3 text-gray-300">
    //           <li>
    //             <a 
    //               href="#services" 
    //               onClick={(e) => handleNavLinkClick(e, 'services')} 
    //               className="hover:text-white transition-colors text-base"
    //             >
    //               X-ray Readings
    //             </a>
    //           </li>
    //           <li>
    //             <a 
    //               href="#services" 
    //               onClick={(e) => handleNavLinkClick(e, 'services')} 
    //               className="hover:text-white transition-colors text-base"
    //             >
    //               Ultrasound Interpretations
    //             </a>
    //           </li>
    //           <li>
    //             <a 
    //               href="#services" 
    //               onClick={(e) => handleNavLinkClick(e, 'services')} 
    //               className="hover:text-white transition-colors text-base"
    //             >
    //               MRI & CT Interpretations
    //             </a>
    //           </li>
    //           <li>
    //             <a 
    //               href="#services" 
    //               onClick={(e) => handleNavLinkClick(e, 'services')} 
    //               className="hover:text-white transition-colors text-base"
    //             >
    //               Mammography Reports
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Right Column - Contact */}
    //       <div>
    //         <h5 className="text-xl font-bold mb-6 text-white">Contact</h5>
    //         <div className="space-y-4 text-gray-300">
    //           <p className="text-lg">
    //             <a 
    //               className="hover:text-white transition-colors font-semibold" 
    //               href="tel:+17149955400"
    //             >
    //               (714) 995-5400
    //             </a>
    //           </p>
    //           <p className="text-base">
    //             <a 
    //               className="hover:text-white transition-colors" 
    //               href="mailto:apireports@gmail.com"
    //             >
    //               apireports@gmail.com
    //             </a>
    //           </p>
    //           <p className="text-base">
    //             Reports within 24-48 hours
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom Border and Copyright */}
    //     <div className="mt-12 pt-8 border-t border-gray-700">
    //       <p className="text-center text-gray-400 text-sm">
    //         © {new Date().getFullYear()} Advanced Professional Imaging Medical Group. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    // <footer className="bg-slate-900 text-white py-12">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="grid md:grid-cols-4 gap-8">
    //           <div className="md:col-span-2">
    //             <div className="flex items-center gap-3 mb-4">
    //               {/* <Logo /> */}
    //               <span className="font-extrabold text-xl">Advanced Professional Imaging</span>
    //             </div>
    //             <p className="opacity-80 text-sm max-w-sm">
    //               A leader in teleradiology solutions, providing high-quality, reliable diagnostic reports to support healthcare providers nationwide.
    //             </p>
    //             <div className="mt-4 flex space-x-4">
    //                 <a href="#" className="opacity-70 hover:opacity-100 transition"><LucideIcon className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></LucideIcon></a>
    //                 <a href="#" className="opacity-70 hover:opacity-100 transition"><LucideIcon className="w-5 h-5"><path d="M22.09 15.06a9.5 9.5 0 1 1-15.04-10.02"></path><circle cx="12" cy="12" r="10"></circle><path d="M12 2v10"></path></LucideIcon></a>
    //             </div>
    //           </div>
    //           <div>
    //             <h5 className="font-extrabold mb-4 text-teal-400">Services</h5>
    //             <ul className="space-y-2 opacity-80 text-sm">
    //               <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:underline">X-ray & Ultrasound</a></li>
    //               <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:underline">MRI & CT Readings</a></li>
    //               <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:underline">Nighthawk Coverage</a></li>
    //               <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:underline">Subspecialty Reports</a></li>
    //             </ul>
    //           </div>
    //           <div>
    //             <h5 className="font-extrabold mb-4 text-teal-400">Support</h5>
    //             <div className="space-y-2 opacity-80 text-sm">
    //               <p><a className="hover:underline" href="tel:+17149955400">Call: (714) 995-5400</a></p>
    //               <p><a className="hover:underline" href="mailto:apireports@gmail.com">Email: apireports@gmail.com</a></p>
    //               <p>Portal Login Support</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-60 text-sm">
    //           <p>© {new Date().getFullYear()} Advanced Professional Imaging Medical Group. All rights reserved. | HIPAA Compliant.</p>
    //         </div>
    //       </div>
    //     </footer>
     <footer className="bg-brand-dark text-white py-12">
          <div className="max-w-7xl w-[97%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  {/* Logo in Inverted Colors for Dark Footer */}
                  <div className="leading-tight">
                    <div className="text-lg font-extrabold uppercase text-white tracking-wide">ADVANCED</div>
                    <div className="text-xs font-semibold uppercase text-white/90 tracking-widest">PROFESSIONAL IMAGING</div>
                    <div className="text-sm font-bold uppercase text-brand-secondary tracking-wide">MEDICAL CENTER</div>
                  </div>
                </div>
                <p className="opacity-80 text-sm max-w-sm">
                  A leader in teleradiology solutions, providing high-quality, reliable diagnostic reports to support healthcare providers nationwide.
                </p>
                <div className="mt-4 flex space-x-4">
                    <a href="#" className="opacity-70 hover:text-brand-secondary hover:opacity-100 transition"><LucideIcon className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></LucideIcon></a>
                    <a href="#" className="opacity-70 hover:text-brand-secondary hover:opacity-100 transition"><LucideIcon className="w-5 h-5"><path d="M22.09 15.06a9.5 9.5 0 1 1-15.04-10.02"></path><circle cx="12" cy="12" r="10"></circle><path d="M12 2v10"></path></LucideIcon></a>
                </div>
              </div>
              <div>
                <h5 className="font-extrabold mb-4 text-brand-secondary">Services</h5>
                <ul className="space-y-2 opacity-80 text-sm">
                  <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:text-brand-secondary transition">X-ray & Ultrasound</a></li>
                  <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:text-brand-secondary transition">MRI & CT Readings</a></li>
                  <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:text-brand-secondary transition">Nighthawk Coverage</a></li>
                  <li><a href="#services" onClick={(e) => handleNavLinkClick(e, 'services')} className="hover:text-brand-secondary transition">Subspecialty Reports</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-extrabold mb-4 text-brand-secondary">Support</h5>
                <div className="space-y-2 opacity-80 text-sm">
                  <p><a className="hover:text-brand-secondary transition" href="tel:+17149955400">Call: (714) 995-5400</a></p>
                  <p><a className="hover:text-brand-secondary transition" href="mailto:apireports@gmail.com">Email: apireports@gmail.com</a></p>
                  <p>Portal Login Support</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-60 text-sm">
              <p>© {new Date().getFullYear()} Advanced Professional Imaging Medical Center. All rights reserved. | HIPAA Compliant.</p>
            </div>
          </div>
        </footer>
  );
};
