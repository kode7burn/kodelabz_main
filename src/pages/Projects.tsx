import React from 'react';

const ProjectCard: React.FC<{ title: string; description: string; image: string; tags: string[] }> = ({ title, description, image, tags }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-600 text-white text-sm px-2 py-1 rounded mr-2 mb-2">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A scalable e-commerce solution with advanced features like real-time inventory management and AI-powered product recommendations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Healthcare Management System",
      description: "An integrated platform for healthcare providers to manage patient records, appointments, and billing securely and efficiently.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Angular", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Smart City IoT Dashboard",
      description: "A real-time dashboard for monitoring and managing IoT devices across a smart city, including traffic management and energy consumption.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Vue.js", "Go", "InfluxDB", "Kubernetes"]
    },
    {
      title: "AI-Powered Financial Advisor",
      description: "A machine learning-based application that provides personalized financial advice and investment recommendations.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["TensorFlow", "Python", "React Native", "Google Cloud"]
    },
    {
      title: "Supply Chain Management Platform",
      description: "A comprehensive solution for tracking and optimizing supply chain operations, featuring blockchain for enhanced transparency and security.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Hyperledger Fabric", "Node.js", "React", "Azure"]
    },
    {
      title: "Educational Technology Platform",
      description: "An interactive learning management system with features like video conferencing, collaborative workspaces, and AI-driven personalized learning paths.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Next.js", "Django", "PostgreSQL", "WebRTC"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <p className="text-xl mb-12 text-center">Showcasing our expertise through successful client projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;