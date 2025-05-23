
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your 
            <span className="text-gradient-brand"> Productivity?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users who've already discovered the power of smart task management. Download Taskify today and start achieving more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity text-lg px-8 py-4">
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="bg-secondary text-white border-secondary hover:bg-hero/90 hover:text-white transition-colors text-lg ">
              Download for Android
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Free to download • No credit card required • 14-day premium trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
