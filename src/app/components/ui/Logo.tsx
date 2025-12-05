import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-3">
    {/* The Stylized 'A' Icon with gradient and stripe effect */}
    <svg viewBox="0 0 100 100" className="h-10 w-10 md:h-12 md:w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gradient for the 'A' body */}
        <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#004E8C" offset="0%"/>
          <stop stopColor="#1EACEA" offset="100%"/>
        </linearGradient>
        {/* Simulated Stripe/Texture effect mask */}
        <mask id="stripeMask">
          <rect x="0" y="0" width="100" height="100" fill="white"/>
          <path d="M40 70 L55 5 L60 5 L45 70 Z" fill="black" transform="rotate(20 50 50)" opacity="0.1"/>
          <path d="M35 70 L50 5 L55 5 L40 70 Z" fill="black" transform="rotate(20 50 50)" opacity="0.1"/>
          <path d="M30 70 L45 5 L50 5 L35 70 Z" fill="black" transform="rotate(20 50 50)" opacity="0.1"/>
        </mask>
      </defs>
      
      {/* Main 'A' body */}
      <path d="M50 5 L10 95 H35 L45 75 H60 L70 95 H90 L50 5 Z" fill="url(#logoGradient)" mask="url(#stripeMask)"/>
      
      {/* The sweeping element (darker blue) */}
      <path d="M55 45 L90 50 C85 30 75 15 55 45 Z" fill="#004E8C"/>

      {/* The right wing sweep (bright blue) */}
      <path d="M50 40 C60 10 90 20 85 45 L50 40 Z" fill="#1EACEA" opacity="0.8"/>
    </svg>

    {/* The stacked text matching the logo */}
    <div className="leading-tight">
      <div className="text-lg font-extrabold uppercase text-brand-dark tracking-wide">ADVANCED</div>
      <div className="text-xs font-semibold uppercase text-brand-dark/90 tracking-widest">PROFESSIONAL IMAGING</div>
      <div className="text-sm font-bold uppercase text-brand-primary tracking-wide">MEDICAL CENTER</div>
    </div>
  </div>
);
