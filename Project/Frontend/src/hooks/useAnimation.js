import { useEffect } from 'react';

export const useAnimation = () => {
  useEffect(() => {
    // Smooth scrolling for navigation
    const handleNavClick = (e) => {
      if (e.target.tagName === 'BUTTON' && e.target.textContent) {
        const targetId = e.target.textContent.toLowerCase().replace(' ', '-');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleNavClick);
      observer.disconnect();
    };
  }, []);
};