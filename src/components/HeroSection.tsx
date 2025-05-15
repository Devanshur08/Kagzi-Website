
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Purple badge */}
      <div className="inline-block bg-[#8B5CF6]/20 text-[#8B5CF6] font-medium rounded-full px-4 py-1 text-sm mb-4">
        NEW AND IMPROVED
      </div>
      
      {/* Main heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl mb-6">
        Boost your project's speed and efficiency.
      </h1>
      
      {/* Subheading */}
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Take advantage of our cutting-edge technology to increase your productivity and achieve better results.
      </p>
      
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
        <Button className="bg-[#8B5CF6] hover:bg-[#7c4ff5] text-white px-6 py-6 rounded-lg text-lg">
          Get Started
        </Button>
        <Button variant="outline" className="border-gray-300 text-gray-700 px-6 py-6 rounded-lg text-lg">
          Learn More →
        </Button>
      </div>
      
      {/* Abstract shape image - represented by a div with gradient background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-contain bg-no-repeat bg-right z-0 opacity-90">
        <div className="w-full h-full bg-gradient-radial from-[#9b87f5]/40 via-[#8B5CF6]/30 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
