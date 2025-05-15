
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Have Questions?<br />
            <span className="text-[#8B5CF6]">Contact Us</span>
          </h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            
            <Button type="submit" className="bg-[#8B5CF6] hover:bg-[#7c4ff5] text-white">
              Send Message
            </Button>
          </form>
        </div>
        
        {/* Image/Graphic */}
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-[#8B5CF6] rounded-lg opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-radial from-[#8B5CF6] to-purple-900 opacity-80 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
