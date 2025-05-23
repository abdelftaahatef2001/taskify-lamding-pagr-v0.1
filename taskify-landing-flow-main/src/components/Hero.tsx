
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Task Management 
              <span className="block text-secondary">Made Simple</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Transform your productivity with Taskify - the modern task management app that helps you organize, prioritize, and accomplish more every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors text-lg px-8 py-4">
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="bg-secondary text-white border-secondary hover:bg-secondary/90 hover:text-white transition-colors text-lg px-8 py-4">
                Download for Android
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="glassmorphism rounded-3xl p-8 max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=800&fit=crop&crop=center" 
                  alt="Taskify App Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-auto">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="#F8F9FB"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
