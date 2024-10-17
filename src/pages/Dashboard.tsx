import React, { useState } from 'react';
import { Users, Briefcase, DollarSign, BarChart2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const TabButton: React.FC<{ id: string; label: string }> = ({ id, label }) => (
    <button
      className={`py-2 px-4 font-semibold ${activeTab === id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  const Overview: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Users size={48} className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Total Clients</h3>
            <p className="text-3xl font-bold">42</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Briefcase size={48} className="text-green-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Active Projects</h3>
            <p className="text-3xl font-bold">18</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <DollarSign size={48} className="text-yellow-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Revenue (YTD)</h3>
            <p className="text-3xl font-bold">$1.2M</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <BarChart2 size={48} className="text-purple-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Avg. Project Value</h3>
            <p className="text-3xl font-bold">$65K</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ClientManagement: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Client Management</h2>
      <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">Client Name</th>
            <th className="py-3 px-4 text-left">Project</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4">Acme Corp</td>
            <td className="py-3 px-4">E-commerce Platform</td>
            <td className="py-3 px-4"><span className="bg-green-500 text-white px-2 py-1 rounded">Active</span></td>
            <td className="py-3 px-4">2024-05-15</td>
          </tr>
          <tr>
            <td className="py-3 px-4">TechStart Inc</td>
            <td className="py-3 px-4">Mobile App Development</td>
            <td className="py-3 px-4"><span className="bg-yellow-500 text-white px-2 py-1 rounded">On Hold</span></td>
            <td className="py-3 px-4">2024-05-10</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Global Solutions</td>
            <td className="py-3 px-4">Cloud Migration</td>
            <td className="py-3 px-4"><span className="bg-blue-500 text-white px-2 py-1 rounded">Planning</span></td>
            <td className="py-3 px-4">2024-05-20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const ProjectAnalytics: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Project Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project Status Distribution</h3>
          {/* Placeholder for a chart */}
          <div className="h-64 bg-gray-700 flex items-center justify-center">
            [Project Status Chart Placeholder]
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Revenue by Project Type</h3>
          {/* Placeholder for a chart */}
          <div className="h-64 bg-gray-700 flex items-center justify-center">
            [Revenue Chart Placeholder]
          </div>
        </div>
      </div>
    </div>
  );

  const ReportingTools: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Reporting Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Financial Reports</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Monthly Revenue</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Quarterly Profit & Loss</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Annual Financial Statement</a></li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project Reports</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Project Timeline Analysis</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Resource Allocation</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Project Success Metrics</a></li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Client Reports</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Client Satisfaction Survey</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Client Retention Rate</a></li>
            <li><a href="#" className="text-blue-400 hover:text-blue-300">Client Acquisition Cost</a></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="mb-6">
        <TabButton id="overview" label="Overview" />
        <TabButton id="clients" label="Client Management" />
        <TabButton id="analytics" label="Project Analytics" />
        <TabButton id="reporting" label="Reporting Tools" />
      </div>
      {activeTab === 'overview' && <Overview />}
      {activeTab === 'clients' && <ClientManagement />}
      {activeTab === 'analytics' && <ProjectAnalytics />}
      {activeTab === 'reporting' && <ReportingTools />}
    </div>
  );
};

export default Dashboard;