
import React from 'react';
import { BarChart3, Layers, Sparkles, Cog } from 'lucide-react';

const ProductFeatures = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Revolutionizing Your World with Our Products</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f3f4f6] mb-4">
              <BarChart3 className="h-6 w-6 text-[#8B5CF6]" />
            </div>
            <span className="text-sm text-gray-600">Optimization</span>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f3f4f6] mb-4">
              <Layers className="h-6 w-6 text-[#8B5CF6]" />
            </div>
            <span className="text-sm text-gray-600">Scalability</span>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f3f4f6] mb-4">
              <Sparkles className="h-6 w-6 text-[#8B5CF6]" />
            </div>
            <span className="text-sm text-gray-600">Unique Features</span>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f3f4f6] mb-4">
              <Cog className="h-6 w-6 text-[#8B5CF6]" />
            </div>
            <span className="text-sm text-gray-600">Tech Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
