'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import ProfileImageUpload from '../ProfileImageUpload';

interface ResumeTemplateProps {
  resumeData: ResumeData;
  templateId: string;
  onImageUpload: (imageUrl: string) => void;
}

const ModernTemplate: React.FC<ResumeTemplateProps> = ({ 
  resumeData, 
  onImageUpload 
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">{resumeData.fullName}</h1>
            <h2 className="text-xl font-semibold mt-2 opacity-90">{resumeData.targetJobRole}</h2>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <span>{resumeData.location}</span>
              <span>{resumeData.contactInfo.email}</span>
              <span>{resumeData.contactInfo.phone}</span>
              {resumeData.contactInfo.linkedin && (
                <span>LinkedIn: {resumeData.contactInfo.linkedin}</span>
              )}
            </div>
          </div>
          <div className="ml-6">
            <ProfileImageUpload 
              onImageUpload={onImageUpload} 
              currentImage={resumeData.profileImageUrl} 
            />
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Work Experience
          </h3>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                <span className="text-gray-600">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-700 font-medium">{exp.company}</p>
              <p className="text-gray-600 mt-1">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.fieldOfStudy}</h4>
                <span className="text-gray-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-gray-700">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
              Certifications
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="text-gray-700">{cert}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;