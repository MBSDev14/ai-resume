import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">AI Resume Builder</h3>
            <p className="text-gray-400 text-sm">Creating professional resumes with AI</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300">© {new Date().getFullYear()} AI Resume Builder</p>
            <p className="text-gray-400 text-sm">Created by Syed Mubashir</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>Build the perfect resume with AI-powered suggestions and ATS-friendly templates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;