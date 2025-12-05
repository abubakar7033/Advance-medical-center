'use client';

import React from 'react';
import { LucideIcon } from '../ui';

interface PortalSectionProps {
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const PortalSection: React.FC<PortalSectionProps> = ({ handleNavLinkClick }) => {
  return (
    <section id="portal" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Description */}
          <div className="reveal order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#0074C8] text-xs font-semibold mb-6">
              <LucideIcon className="w-4 h-4">
                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                <line x1="8" x2="16" y1="21" y2="21"></line>
                <line x1="12" x2="12" y1="17" y2="21"></line>
              </LucideIcon>
              For Healthcare Providers
            </div>
            
            <h2 className="text-md lg:text-md xl:text-md  text-gray-900 mb-4 lg:mb-6">
              Provider Portal Access
            </h2>
            
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
              Secure access to our DICOM imaging portal for referring physicians. View patient imaging studies, radiology reports, and collaborate with our board-certified radiologists in real-time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E3EEF8] flex items-center justify-center">
                  <LucideIcon className="w-6 h-6 text-[#0074C8]">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </LucideIcon>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1 font-bold text-base">HIPAA Compliant</h3>
                  <p className="text-gray-600 text-sm">Fully encrypted and secure access to patient imaging data</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E3EEF8] flex items-center justify-center">
                  <LucideIcon className="w-6 h-6 text-[#0074C8]">
                    <path d="M12 6v6l4 2"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </LucideIcon>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1 font-bold text-base">Real-Time Access</h3>
                  <p className="text-gray-600 text-sm">Instant access to imaging studies and preliminary reports</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E3EEF8] flex items-center justify-center">
                  <LucideIcon className="w-6 h-6 text-[#0074C8]">
                    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                    <line x1="8" x2="16" y1="21" y2="21"></line>
                    <line x1="12" x2="12" y1="17" y2="21"></line>
                  </LucideIcon>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1 font-bold text-base">DICOM Viewer</h3>
                  <p className="text-gray-600 text-sm">Advanced diagnostic tools and multi-modality support</p>
                </div>
              </div>
            </div>

            {/* Yellow Alert Box */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">New to our portal?</span> Contact us at{' '}
                <a href="tel:+17149955400" className="text-amber-700 underline underline-offset-2">
                  (714) 995-5400
                </a>{' '}
                to set up your provider account.
              </p>
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="reveal order-1 lg:order-2 ">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-lg mx-auto lg:mx-0">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0074C8] mb-4">
                  <LucideIcon className="w-8 h-8 text-white">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </LucideIcon>
                </div>
                <h3 className="text-gray-900 mb-2 font-bold text-xl">Provider Login</h3>
                <p className="text-gray-600 text-sm">Access your imaging portal</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900" htmlFor="portal-username">
                    Username
                  </label>
                  <div className="relative">
                    <LucideIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </LucideIcon>
                    <input 
                      type="text" 
                      className="h-11 border-gray-300 flex w-full rounded-lg border px-4 py-2 text-sm bg-white transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 pl-10" 
                      id="portal-username" 
                      placeholder="Enter your username" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900" htmlFor="portal-password">
                    Password
                  </label>
                  <div className="relative">
                    <LucideIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </LucideIcon>
                    <input 
                      type="password" 
                      className="h-11 border-gray-300 flex w-full rounded-lg border px-4 py-2 text-sm bg-white transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 pl-10" 
                      id="portal-password" 
                      placeholder="Enter your password" 
                    />
                  </div>
                </div>

                <button 
                  className="h-11 px-5 py-2 sm:text-base text-sm w-full bg-gradient-to-r from-blue-800 to-blue-500 hover:from-[#005A9C] hover:to-[#003F6B] text-white rounded-lg font-semibold transition shadow-md flex items-center justify-center gap-2" 
                  type="submit"
                >
                  Access TotalCloud PACS Portal
                  <LucideIcon className="w-4 h-4">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </LucideIcon>
                </button>

                <p className="text-xs text-center text-gray-500 pt-2">
                  Secure login powered by TotalCloud PACS
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavLinkClick(e, 'contact')} 
                  className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold h-10 px-4 py-2 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Go to Portal Login
                  <LucideIcon className="w-4 h-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </LucideIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
