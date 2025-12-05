'use client';

import { useEffect } from 'react';
import { SECTION_IDS } from '../constants/services';

export const useScrollEffects = (setActiveSection: (section: string) => void) => {
  useEffect(() => {
    // 1. Reveal on Scroll Logic
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Scroll Spy Logic
    const spyObservers = SECTION_IDS.map(id => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        }, { rootMargin: '-30% 0px -30% 0px' });
        observer.observe(el);
        return observer;
      }
      return null;
    }).filter(o => o !== null);

    // Cleanup function
    return () => {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.unobserve(el));
      spyObservers.forEach(obs => obs?.disconnect());
    };
  }, [setActiveSection]);
};
