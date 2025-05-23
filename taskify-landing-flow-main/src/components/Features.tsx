
import React from 'react';
import { CheckCircle, Calendar, Bell, Share } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Smart Task Organization",
    description: "Intelligently categorize and prioritize your tasks with our AI-powered organization system."
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description: "Seamlessly integrate with your calendar and never miss important deadlines again."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get personalized reminders that adapt to your work patterns and preferences."
  },
  {
    icon: Share,
    title: "Team Collaboration",
    description: "Share projects and collaborate with your team in real-time with powerful sync features."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for 
            <span className="text-gradient"> Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to stay organized, productive, and ahead of your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary rounded-xl p-3 w-fit mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
