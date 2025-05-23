
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CheckCircle className="w-6 h-6 text-secondary" fill="#4CD964" strokeWidth={1.5} />
      <span className="text-2xl font-bold text-gradient-brand">Taskify</span>
    </div>
  );
};

export default Logo;
