
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "This platform has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
      author: "Sarah Johnson",
      company: "Tech Innovations",
      avatar: "/placeholder.svg"
    },
    {
      content: "The customer support team is exceptional. They helped us customize the solution perfectly for our unique business needs.",
      author: "Michael Chen",
      company: "Growth Solutions",
      avatar: "/placeholder.svg"
    },
    {
      content: "We've tried many similar products, but none have delivered the consistent results and reliability we get with this platform.",
      author: "Emma Rodriguez",
      company: "Digital Spark",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Words from Our Satisfied Customers
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl ${index === 1 ? 'bg-[#8B5CF6] text-white' : 'bg-gray-100'}`}
          >
            <div className="flex items-start mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-medium">{testimonial.author}</h4>
                <p className={`text-sm ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                  {testimonial.company}
                </p>
              </div>
            </div>
            <p className={`${index === 1 ? 'text-white/90' : 'text-gray-700'} mb-4`}>
              {testimonial.content}
            </p>
            <div className="flex justify-end">
              <Quote className={`h-5 w-5 ${index === 1 ? 'text-white/50' : 'text-gray-400'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
