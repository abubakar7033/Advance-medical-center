'use client';

import React, { useState, useCallback } from 'react';
import { Header, Footer } from './components/layout';
import { 
  HeroSection, 
  ServicesSection, 
  PortalSection, 
  AboutSection, 
  ContactSection 
} from './components/sections';
import { useScrollEffects } from './hooks/useScrollEffects';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Use custom hook for scroll effects
  useScrollEffects(setActiveSection);

  return (
    <div className="font-sans antialiased text-brand-dark">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        handleNavLinkClick={handleNavLinkClick}
      />

      <main>
        <HeroSection handleNavLinkClick={handleNavLinkClick} />
        <ServicesSection />
        <PortalSection handleNavLinkClick={handleNavLinkClick} />
        <AboutSection />
        <ContactSection handleNavLinkClick={handleNavLinkClick} />
      </main>

      <Footer handleNavLinkClick={handleNavLinkClick} />
    </div>
  );
}



