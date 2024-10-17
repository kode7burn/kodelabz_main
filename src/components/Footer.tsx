import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">KodeLabz</h3>
            <p className="text-sm">Full-stack development and IT services company based in California.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
              <li><Link to="/onboarding" className="hover:text-blue-400">Onboarding</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Tech Street</p>
            <p className="text-sm">San Francisco, CA 94105</p>
            <p className="text-sm">Email: info@kodelabz.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 KodeLabz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;