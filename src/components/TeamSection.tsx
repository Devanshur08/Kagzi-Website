
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { 
      name: "James Wagner", 
      role: "CEO & Founder", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
    },
    { 
      name: "John Hopkins", 
      role: "Lead Designer", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
    },
    { 
      name: "Lisa Raymond", 
      role: "Developer", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" 
    },
    { 
      name: "Alex Mitchell", 
      role: "Marketing", 
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
    },
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Meet the Amazing Team<br />
        Behind Our Success
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
