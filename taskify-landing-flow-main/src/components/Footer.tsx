
import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-300 mb-6 max-w-md">
              The smart task management app that helps you organize, prioritize, and accomplish more every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-secondary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-secondary transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Taskify. All rights reserved. Made with abdelfattah atef .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
