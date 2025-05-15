
import React from 'react';

const StartupsSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-[#8B5CF6]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Scalable Business<br />for Startups.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-[#9b87f5]/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold text-white mb-3">FOCUS YOUR STRATEGY</h3>
            <p className="text-white/80">
              Our platform helps you identify and concentrate on what truly matters for your business growth.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="bg-[#9b87f5]/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold text-white mb-3">ENGAGE YOUR AUDIENCE</h3>
            <p className="text-white/80">
              Connect with your customers on a deeper level with our engagement tools and analytics.
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="bg-[#9b87f5]/30 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold text-white mb-3">INCREASE YOUR TEAM CAPACITY</h3>
            <p className="text-white/80">
              Empower your team with tools that boost productivity and streamline workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupsSection;
