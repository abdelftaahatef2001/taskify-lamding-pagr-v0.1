
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button 
        size="lg" 
        className="bg-gradient-brand hover:opacity-90 transition-all duration-300 shadow-2xl rounded-full p-4"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Now
      </Button>
    </div>
  );
};

export default FloatingCTA;
