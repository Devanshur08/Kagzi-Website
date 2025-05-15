
import React from 'react';
import { Button } from '@/components/ui/button';

const VisionSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Together, we are creating a <span className="text-[#8B5CF6]">Bright Future</span>.
        </h2>
        <p className="text-gray-600 uppercase tracking-wider font-medium">JOIN US</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold mb-3">Powerful Performance</h3>
          <p className="text-gray-600 mb-4">Experience lightning-fast performance with our optimized algorithms and efficient code.</p>
          <Button variant="outline" className="text-[#8B5CF6] border-[#8B5CF6]">
            Learn More
          </Button>
        </div>
        
        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold mb-3">Intuitive Design</h3>
          <p className="text-gray-600 mb-4">Our user-friendly interface makes it easy for anyone to use our platform effectively.</p>
          <Button variant="outline" className="text-[#8B5CF6] border-[#8B5CF6]">
            Learn More
          </Button>
        </div>
        
        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold mb-3">Reliable Support</h3>
          <p className="text-gray-600 mb-4">Our dedicated team is always ready to help you resolve any issues that may arise.</p>
          <Button variant="outline" className="text-[#8B5CF6] border-[#8B5CF6]">
            Learn More
          </Button>
        </div>
        
        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-bold mb-3">Cutting-edge Technology</h3>
          <p className="text-gray-600 mb-4">We use the latest technologies to ensure your experience is smooth and efficient.</p>
          <Button variant="outline" className="text-[#8B5CF6] border-[#8B5CF6]">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
