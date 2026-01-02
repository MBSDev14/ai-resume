'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import ProfileImageUpload from '../ProfileImageUpload';

interface ResumeTemplateProps {
  resumeData: ResumeData;
  templateId: string;
  onImageUpload: (imageUrl: string) => void;
}

const ProfessionalTemplate: React.FC<ResumeTemplateProps> = ({ 
  resumeData, 
  onImageUpload 
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8">
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
            <span className="block opacity-90">Location</span>
            <span className="font-medium">{resumeData.location}</span>
          </div>
          <div>
            <span className="block opacity-90">Email</span>
            <span className="font-medium">{resumeData.contactInfo.email}</span>
          </div>
          <div>
            <span className="block opacity-90">Phone</span>
            <span className="font-medium">{resumeData.contactInfo.phone}</span>
          </div>
          {resumeData.contactInfo.linkedin && (
            <div>
              <span className="block opacity-90">LinkedIn</span>
              <span className="font-medium">{resumeData.contactInfo.linkedin}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-300 pb-2 mb-4">
            Core Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {resumeData.skills.map((skill, index) => (
              <div 
                key={index}
                className="p-3 bg-amber-50 rounded-lg text-center border border-amber-200"
              >
                <span className="font-medium text-amber-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-300 pb-2 mb-4">
            Professional Experience
          </h3>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-6 border-l-4 border-amber-500 pl-6 py-2 bg-amber-50 rounded-r-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                  <p className="text-amber-700 font-medium">{exp.company}</p>
                </div>
                <span className="text-amber-600 font-medium bg-white px-3 py-1 rounded">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-600 mt-3">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-300 pb-2 mb-4">
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.fieldOfStudy}</h4>
                <span className="text-amber-600 font-medium">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-amber-700 font-medium">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-amber-700 border-b-2 border-amber-300 pb-2 mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border border-amber-200">
                  <div className="flex items-center">
                    <div className="mr-3 text-amber-600 text-xl">📜</div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;