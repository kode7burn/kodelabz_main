import React, { useEffect, useRef } from 'react';
import { Code, Server, Brain, Cloud, Database, Shield, Smartphone, Zap } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-4">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

const Services: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={32} className="text-blue-500" />,
      title: "Web Development",
      description: "Custom web applications tailored to your business needs using the latest technologies and frameworks."
    },
    {
      icon: <Smartphone size={32} className="text-green-500" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      icon: <Server size={32} className="text-yellow-500" />,
      title: "IT Infrastructure",
      description: "Design, implementation, and maintenance of robust IT infrastructure to support your business operations."
    },
    {
      icon: <Brain size={32} className="text-purple-500" />,
      title: "Machine Learning",
      description: "Implement AI and machine learning solutions to automate processes and gain valuable insights from your data."
    },
    {
      icon: <Cloud size={32} className="text-indigo-500" />,
      title: "Cloud Architecture",
      description: "Design and implementation of scalable, secure, and cost-effective cloud solutions."
    },
    {
      icon: <Database size={32} className="text-red-500" />,
      title: "Database Management",
      description: "Efficient database design, optimization, and management for improved performance and data integrity."
    },
    {
      icon: <Shield size={32} className="text-teal-500" />,
      title: "Cybersecurity",
      description: "Comprehensive security assessments, implementation of security measures, and ongoing monitoring to protect your digital assets."
    },
    {
      icon: <Zap size={32} className="text-orange-500" />,
      title: "DevOps",
      description: "Streamline your development and operations processes with our DevOps services for faster and more reliable software delivery."
    }
  ];

  return (
    <div>
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-down">Our Services</h1>
          <p className="text-xl text-gray-300 animate-fade-in-up">Comprehensive IT solutions tailored to your business needs</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="scroll-animate opacity-0">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center scroll-animate opacity-0">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our services can help you achieve your goals.</p>
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;