
import React from 'react';
import { Button } from '@/components/ui/button';

const ProductsShowcase = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Revolutionizing Your World with Our Products</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
        <Button className="bg-[#8B5CF6] hover:bg-[#7c4ff5] text-white rounded-full px-6">
          Popular Items
        </Button>
        <Button variant="outline" className="text-gray-700 rounded-full px-6">
          Feature #2
        </Button>
        <Button variant="outline" className="text-gray-700 rounded-full px-6">
          Feature #3
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Product Card 1 */}
        <div className="gradient-card-1 rounded-lg aspect-square"></div>
        
        {/* Product Card 2 */}
        <div className="gradient-card-2 rounded-lg aspect-square"></div>
        
        {/* Product Card 3 */}
        <div className="gradient-card-3 rounded-lg aspect-square"></div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
