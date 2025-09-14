// src/hooks/useAnimation.js
import { useEffect } from 'react';

export const useAnimation = () => {
  useEffect(() => {
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

    // Portal card interactions
    document.querySelectorAll('.card-hover').forEach(card => {
      card.addEventListener('click', function() {
        const button = this.querySelector('button');
        const portalName = button.textContent.trim();
        
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = '';
          alert(`Welcome to ${portalName}! Redirecting to your dashboard...`);
        }, 150);
      });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Button hover effects
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};