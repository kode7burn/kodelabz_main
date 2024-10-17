import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Code2 size={32} />
          <span className="text-xl font-bold">KodeLabz</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/onboarding" className="hover:text-blue-400">Onboarding</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          <Link to="/client-portal" className="hover:text-blue-400">Client Portal</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/services" className="hover:text-blue-400">Services</Link>
            <Link to="/projects" className="hover:text-blue-400">Projects</Link>
            <Link to="/onboarding" className="hover:text-blue-400">Onboarding</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            <Link to="/client-portal" className="hover:text-blue-400">Client Portal</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;