
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image column */}
        <div className="relative">
          <img
            src="/placeholder.svg"
            alt="Team collaborating"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute top-6 left-6 bg-[#8B5CF6] text-white text-sm px-4 py-1 rounded-full">
            OUR STORY
          </div>
        </div>
        
        {/* Text column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore our story, values, and the mission that inspires <span className="text-[#8B5CF6]">everything we do</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Founded with a vision to revolutionize how businesses operate in the digital era, 
            we're committed to creating solutions that drive growth and efficiency. 
            Our team combines expertise in technology, design, and business strategy 
            to deliver products that make a real difference.
          </p>
          <Button className="bg-[#8B5CF6] hover:bg-[#7c4ff5] text-white self-start">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
