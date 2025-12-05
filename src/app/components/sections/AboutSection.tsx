'use client';

import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-900 mb-4 lg:mb-6">
              Trusted by Healthcare Providers
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 lg:mb-10 leading-relaxed">
              With decades of combined experience, our team of board-certified radiologists delivers accurate, timely interpretations that healthcare providers depend on for optimal patient care.
            </p>
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E3EEF8] flex items-center justify-center mt-0.5">
                  <span className="text-orange-600 text-sm">🏅</span>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  Board-certified radiologists
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E3EEF8]  flex items-center justify-center mt-0.5">
                  <span className="text-purple-600 text-sm">⏱️</span>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  Get your reports within 24-48 hours
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E3EEF8] flex items-center justify-center mt-0.5">
                  <span className="text-blue-600 text-sm">🛡️</span>
                </div>
                <span className="text-gray-700 text-sm md:text-base">
                  HIPAA compliant and secure
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="reveal bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-3xl lg:text-3xl font-extrabold text-[#0074C8] mb-2">30+</div>
                <div className="text-gray-700 text-xs md:text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl lg:text-3xl font-extrabold text-[#0074C8] mb-2">50K+</div>
                <div className="text-gray-700 text-xs md:text-sm font-medium">Studies Read</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl lg:text-3xl font-extrabold text-[#0074C8] mb-2">24-48hr</div>
                <div className="text-gray-700 text-xs md:text-sm font-medium">Report Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl lg:text-3xl font-extrabold text-[#0074C8] mb-2">100%</div>
                <div className="text-gray-700 text-xs md:text-sm font-medium">HIPAA Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
