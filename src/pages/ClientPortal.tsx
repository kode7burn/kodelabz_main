import React, { useState } from 'react';
import { Lock } from 'lucide-react';

const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const ClientDashboard: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Welcome to Your Client Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project Status</h3>
          <p>Your current project is 75% complete.</p>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Documents</h3>
          <ul className="list-disc list-inside">
            <li>Project Proposal</li>
            <li>Technical Specifications</li>
            <li>Progress Report - May 2024</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Upcoming Meetings</h3>
          <ul className="space-y-2">
            <li>Project Review - June 15, 2024</li>
            <li>Sprint Planning - June 20, 2024</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Invoices</h3>
          <ul className="space-y-2">
            <li>Invoice #1234 - $5,000 (Paid)</li>
            <li>Invoice #1235 - $7,500 (Due: June 30, 2024)</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Client Portal</h1>
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
          <div className="flex justify-center mb-6">
            <Lock size={48} className="text-blue-500" />
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-700 rounded"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-400 hover:text-blue-300">Forgot password?</a>
          </div>
        </div>
      ) : (
        <ClientDashboard />
      )}
    </div>
  );
};

export default ClientPortal;