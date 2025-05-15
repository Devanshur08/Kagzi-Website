
import React from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 w-full">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Premonio</h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Home</a>
        <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Products</a>
        <a href="#" className="text-sm text-gray-700 hover:text-gray-900">About Us</a>
        <a href="#" className="text-sm text-gray-700 hover:text-gray-900">Contact</a>
      </div>
      
      <div className="flex items-center space-x-3">
        <a href="#" className="hidden md:inline-block text-sm text-gray-700 hover:text-gray-900">Log in</a>
        <Button className="bg-[#8B5CF6] hover:bg-[#7c4ff5] text-white">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navigation;
