import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const OnboardingStep: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Client Onboarding</h1>
      <p className="text-xl mb-12 text-center">Let's get started with your project</p>

      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
        {step === 1 && (
          <OnboardingStep title="Step 1: Project Information">
            <form>
              <div className="mb-4">
                <label htmlFor="projectName" className="block mb-2">Project Name</label>
                <input type="text" id="projectName" className="w-full p-2 bg-gray-700 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="projectDescription" className="block mb-2">Project Description</label>
                <textarea id="projectDescription" rows={4} className="w-full p-2 bg-gray-700 rounded"></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="projectType" className="block mb-2">Project Type</label>
                <select id="projectType" className="w-full p-2 bg-gray-700 rounded">
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="ml">Machine Learning</option>
                </select>
              </div>
            </form>
          </OnboardingStep>
        )}

        {step === 2 && (
          <OnboardingStep title="Step 2: Timeline and Budget">
            <form>
              <div className="mb-4">
                <label htmlFor="startDate" className="block mb-2">Desired Start Date</label>
                <input type="date" id="startDate" className="w-full p-2 bg-gray-700 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="block mb-2">Estimated End Date</label>
                <input type="date" id="endDate" className="w-full p-2 bg-gray-700 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="budget" className="block mb-2">Budget Range</label>
                <select id="budget" className="w-full p-2 bg-gray-700 rounded">
                  <option value="">Select a budget range</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
            </form>
          </OnboardingStep>
        )}

        {step === 3 && (
          <OnboardingStep title="Step 3: Additional Information">
            <form>
              <div className="mb-4">
                <label htmlFor="teamSize" className="block mb-2">Your Team Size</label>
                <input type="number" id="teamSize" className="w-full p-2 bg-gray-700 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="industry" className="block mb-2">Industry</label>
                <input type="text" id="industry" className="w-full p-2 bg-gray-700 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="additionalInfo" className="block mb-2">Additional Information</label>
                <textarea id="additionalInfo" rows={4} className="w-full p-2 bg-gray-700 rounded"></textarea>
              </div>
            </form>
          </OnboardingStep>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button onClick={prevStep} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <ChevronLeft size={20} className="mr-2" /> Previous
            </button>
          )}
          {step < 3 ? (
            <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center ml-auto">
              Next <ChevronRight size={20} className="ml-2" />
            </button>
          ) : (
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-auto">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;