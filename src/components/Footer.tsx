
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 bg-[#8B5CF6] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/20">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Premonio</h3>
            <p className="text-white/80 text-sm mb-4">
              Building the future of digital experiences with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Features</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Solutions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Tutorials</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Security</a></li>
              <li><a href="#" className="text-white/80 hover:text-white text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Premonio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
