'use client';

import React, { useState } from 'react';

interface ResumeInputProps {
  onParseResume: (resumeText: string) => void;
  isLoading: boolean;
}

const ResumeInput: React.FC<ResumeInputProps> = ({ onParseResume, isLoading }) => {
  const [resumeText, setResumeText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resumeText.trim()) {
      onParseResume(resumeText);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Your Resume</h2>
      <p className="text-gray-600 mb-6">
        Enter all your resume details in one message below. Include your name, job role, skills, 
        work experience, education, certifications, location, and contact information.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder={`Example:
John Doe
Software Engineer with 5 years of experience
Skills: JavaScript, React, Node.js, Python, SQL
Work Experience: 
- Senior Developer at Tech Corp (2020-Present): Led development of web applications...
- Junior Developer at Startup Inc (2018-2020): Built and maintained APIs...
Education: B.S. Computer Science from University of Tech (2014-2018)
Certifications: AWS Certified Developer, Google Cloud Professional
Location: San Francisco, CA
Contact: john.doe@email.com, (555) 123-4567`}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {resumeText.length} characters
          </div>
          <button
            type="submit"
            disabled={isLoading || !resumeText.trim()}
            className={`px-6 py-3 rounded-lg font-medium ${
              isLoading || !resumeText.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 transition-colors'
            }`}
          >
            {isLoading ? 'Processing...' : 'Create Resume'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeInput;