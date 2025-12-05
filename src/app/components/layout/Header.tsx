'use client';

import React from 'react';
import { Logo } from '../ui';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  activeSection: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}> = ({ href, children, activeSection, onClick }) => {
  const sectionId = href.substring(1);
  const isActive = activeSection === sectionId;
  
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, sectionId)}
      className={`nav-link text-brand-dark/80 hover:text-brand-primary transition font-medium ${isActive ? 'nav-active' : ''}`}
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}> = ({ href, children, onClick }) => {
  const sectionId = href.substring(1);
  
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, sectionId)}
      className="px-4 py-2 rounded-lg bg-white hover:bg-brand-secondary-light text-brand-dark font-medium transition"
    >
      {children}
    </a>
  );
};

export const Header: React.FC<HeaderProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  handleNavLinkClick 
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between pb-3 pt-6">
          {/* Logo Area */}
          <div className='w-36 h-12 flex items-center justify-between'>
            <a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')} className="flex items-center gap-3">
            <img src="/images/headerlogo.png" alt="logo" className='object-contain w'/>
          </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <nav className="flex items-center gap-8 hover:text-brand-secondary transition">
              <NavLink href="#services" activeSection={activeSection} onClick={handleNavLinkClick}>
                Services
              </NavLink>
              <NavLink href="#portal" activeSection={activeSection} onClick={handleNavLinkClick}>
                Provider Portal access
              </NavLink>
              <NavLink href="#about" activeSection={activeSection} onClick={handleNavLinkClick}>
                About Us
              </NavLink>
              <NavLink href="#contact" activeSection={activeSection} onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </nav>
            
            {/* Provider Portal CTA */}
            {/* <a
              href="#portal"
              onClick={(e) => handleNavLinkClick(e, 'portal')}
              className="px-5 py-2.5 rounded-full bg-brand-primary text-white font-bold hover-bg-brand-primary transition shadow-premium text-sm tracking-wide"
            >
              Provider Portal
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary text-white hover-bg-brand-primary transition"
          >
            <span>Menu</span>
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden pb-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="grid gap-2 text-sm font-medium">
            <MobileNavLink href="#services" onClick={handleNavLinkClick}>Services</MobileNavLink>
            <MobileNavLink href="#portal" onClick={handleNavLinkClick}>Provider Portal access</MobileNavLink>
            <MobileNavLink href="#about" onClick={handleNavLinkClick}>About Us</MobileNavLink>
            <MobileNavLink href="#contact" onClick={handleNavLinkClick}>Contact</MobileNavLink>
            
          
          </div>
        </div>
      </div>
    </header>
  );
};
