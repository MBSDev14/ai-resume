'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import ProfileImageUpload from '../ProfileImageUpload';

interface ResumeTemplateProps {
  resumeData: ResumeData;
  templateId: string;
  onImageUpload: (imageUrl: string) => void;
}

const CorporateTemplate: React.FC<ResumeTemplateProps> = ({ 
  resumeData, 
  onImageUpload 
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-800 text-white p-8">
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
        <div className="mt-6 pt-6 border-t border-blue-700 flex flex-wrap gap-6 text-sm">
          <div>
            <span className="block opacity-80">Location</span>
            <span className="font-medium">{resumeData.location}</span>
          </div>
          <div>
            <span className="block opacity-80">Email</span>
            <span className="font-medium">{resumeData.contactInfo.email}</span>
          </div>
          <div>
            <span className="block opacity-80">Phone</span>
            <span className="font-medium">{resumeData.contactInfo.phone}</span>
          </div>
          {resumeData.contactInfo.linkedin && (
            <div>
              <span className="block opacity-80">LinkedIn</span>
              <span className="font-medium">{resumeData.contactInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-4">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {resumeData.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-blue-50 p-3 rounded text-center border border-blue-200"
              >
                <span className="font-medium text-blue-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-4">
            Professional Experience
          </h3>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                  <p className="text-blue-700 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-600 bg-blue-100 px-3 py-1 rounded">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-600 mt-3">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-4">
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 pb-4 border-b border-gray-100 last:border-0">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.fieldOfStudy}</h4>
                <span className="text-gray-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-blue-700 font-medium">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-4">
              Certifications & Awards
            </h3>
            <div className="space-y-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="mr-3 text-blue-600">🏆</div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CorporateTemplate;