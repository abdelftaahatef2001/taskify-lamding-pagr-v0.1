
import React from 'react';
import { Download, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download & Setup",
    description: "Download Taskify from your app store and create your account in under 2 minutes."
  },
  {
    icon: Calendar,
    number: "02", 
    title: "Organize Your Tasks",
    description: "Add your tasks, set priorities, and let our smart system organize everything for you."
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Achieve Your Goals",
    description: "Stay on track with personalized insights and accomplish more than ever before."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with Taskify in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center animate-slide-up z-10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="w-8 h-8 text-white" />
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
