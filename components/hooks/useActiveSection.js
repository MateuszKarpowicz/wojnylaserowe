/**
 * useActiveSection - Hook do zarządzania aktywną sekcją
 * 
 * Zapewnia funkcjonalność:
 * - Automatyczne wykrywanie aktywnej sekcji na podstawie scroll
 * - Nawigację między sekcjami
 * - Obsługę smooth scroll
 * - Callbacki dla zmian aktywnej sekcji
 * 
 * @param {Array} sections - Lista sekcji do śledzenia
 * @param {number} offset - Offset dla wykrywania aktywnej sekcji
 * @param {Function} onSectionChange - Callback przy zmianie sekcji
 * @returns {object} { activeSection, scrollToSection, isSectionVisible }
 */

'use client';
import { useState, useEffect, useCallback } from 'react';

export function useActiveSection(
  sections = [],
  offset = 100,
  onSectionChange = null
) {
  const [activeSection, setActiveSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Funkcja do sprawdzania czy sekcja jest widoczna
  const isSectionVisible = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    return (
      rect.top <= windowHeight - offset &&
      rect.bottom >= offset
    );
  }, [offset]);

  // Funkcja do scrollowania do sekcji
  const scrollToSection = useCallback((sectionId, smooth = true) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    
    setIsScrolling(true);
    
    const scrollOptions = {
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start',
    };
    
    element.scrollIntoView(scrollOptions);
    
    // Reset flag after scroll
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, []);

  // Funkcja do aktualizacji aktywnej sekcji
  const updateActiveSection = useCallback(() => {
    if (isScrolling) return;
    
    const visibleSections = sections.filter(section => 
      isSectionVisible(section.id)
    );
    
    if (visibleSections.length > 0) {
      // Znajdź sekcję najbliższą górnej części ekranu
      const closestSection = visibleSections.reduce((closest, current) => {
        const currentRect = document.getElementById(current.id)?.getBoundingClientRect();
        const closestRect = document.getElementById(closest.id)?.getBoundingClientRect();
        
        if (!currentRect || !closestRect) return closest;
        
        return Math.abs(currentRect.top) < Math.abs(closestRect.top) ? current : closest;
      });
      
      if (closestSection.id !== activeSection) {
        setActiveSection(closestSection.id);
        if (onSectionChange) {
          onSectionChange(closestSection.id, closestSection);
        }
      }
    }
  }, [sections, isSectionVisible, activeSection, onSectionChange, isScrolling]);

  // Effect do śledzenia scroll
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(updateActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    updateActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateActiveSection]);

  // Effect do aktualizacji gdy zmienią się sekcje
  useEffect(() => {
    updateActiveSection();
  }, [sections, updateActiveSection]);

  return {
    activeSection,
    scrollToSection,
    isSectionVisible,
    isScrolling,
  };
}
