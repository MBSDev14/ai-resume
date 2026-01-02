'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import ProfileImageUpload from '../ProfileImageUpload';

interface ResumeTemplateProps {
  resumeData: ResumeData;
  templateId: string;
  onImageUpload: (imageUrl: string) => void;
}

const CleanSimpleTemplate: React.FC<ResumeTemplateProps> = ({ 
  resumeData, 
  onImageUpload 
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{resumeData.fullName}</h1>
            <h2 className="text-xl font-semibold mt-2 opacity-90">{resumeData.targetJobRole}</h2>
          </div>
          <div>
            <ProfileImageUpload 
              onImageUpload={onImageUpload} 
              currentImage={resumeData.profileImageUrl} 
            />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="block opacity-90">📍 Location</span>
            <span className="font-medium">{resumeData.location}</span>
          </div>
          <div>
            <span className="block opacity-90">✉️ Email</span>
            <span className="font-medium">{resumeData.contactInfo.email}</span>
          </div>
          <div>
            <span className="block opacity-90">📞 Phone</span>
            <span className="font-medium">{resumeData.contactInfo.phone}</span>
          </div>
          {resumeData.contactInfo.linkedin && (
            <div>
              <span className="block opacity-90">💼 LinkedIn</span>
              <span className="font-medium">{resumeData.contactInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-300 pb-2 mb-4">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1.5 bg-sky-100 text-sky-800 rounded border border-sky-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-300 pb-2 mb-4">
            Work Experience
          </h3>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-5 pb-5 border-b border-sky-100">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                  <p className="text-sky-700 font-medium">{exp.company}</p>
                </div>
                <span className="text-sky-600">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-300 pb-2 mb-4">
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 pb-4 border-b border-sky-100">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.fieldOfStudy}</h4>
                <span className="text-sky-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-sky-700 font-medium">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-sky-700 border-b-2 border-sky-300 pb-2 mb-4">
              Certifications
            </h3>
            <ul className="space-y-2">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-sky-500">✓</span>
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default CleanSimpleTemplate;