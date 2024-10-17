import React, { useEffect, useRef } from 'react';
import { Code, Server, Brain, Cloud, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white animate-fade-in-down">Welcome to KodeLabz</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up">Your Partner in Full-Stack Development and IT Services</p>
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in">
            Get Started
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={48} className="text-white" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg text-center scroll-animate transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Code size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
            <p>Crafting robust and scalable web applications</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center scroll-animate transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Server size={48} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">IT Services</h3>
            <p>Comprehensive IT solutions for your business</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center scroll-animate transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Brain size={48} className="mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p>Implementing intelligent solutions for complex problems</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center scroll-animate transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Cloud size={48} className="mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
            <p>Designing and implementing scalable cloud solutions</p>
          </div>
        </section>

        <section className="mb-16 scroll-animate">
          <h2 className="text-3xl font-bold mb-8 text-center">About KodeLabz</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Team Collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                KodeLabz is a California-based full-stack development and IT services company dedicated to delivering cutting-edge solutions for businesses of all sizes. Our team of expert developers and IT professionals are passionate about leveraging the latest technologies to solve complex problems and drive innovation.
              </p>
              <p className="text-lg">
                With a focus on quality, efficiency, and client satisfaction, we offer a wide range of services including web and mobile app development, cloud solutions, machine learning implementations, and comprehensive IT support. At KodeLabz, we're not just service providers – we're your technology partners, committed to helping you achieve your business goals through innovative and tailored solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-animate">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose KodeLabz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Expertise" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p>Our team consists of highly skilled professionals with years of experience in various technologies and industries.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Innovation" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We stay at the forefront of technology trends to provide you with the most innovative solutions.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Client-Centric Approach" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
              <p>Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;