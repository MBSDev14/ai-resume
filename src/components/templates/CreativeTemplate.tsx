'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import ProfileImageUpload from '../ProfileImageUpload';

interface ResumeTemplateProps {
  resumeData: ResumeData;
  templateId: string;
  onImageUpload: (imageUrl: string) => void;
}

const CreativeTemplate: React.FC<ResumeTemplateProps> = ({ 
  resumeData, 
  onImageUpload 
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8">
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
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span>📍 {resumeData.location}</span>
          <span>✉️ {resumeData.contactInfo.email}</span>
          <span>📞 {resumeData.contactInfo.phone}</span>
          {resumeData.contactInfo.linkedin && (
            <span>💼 LinkedIn: {resumeData.contactInfo.linkedin}</span>
          )}
        </div>
      </div>

      <div className="p-8">
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {resumeData.skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-purple-50 p-3 rounded-lg text-center border border-purple-200"
              >
                <span className="font-medium text-purple-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
            Work Experience
          </h3>
          {resumeData.workExperience.map((exp, index) => (
            <div key={index} className="mb-6 border-l-4 border-purple-500 pl-4 py-1">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                <span className="text-gray-600 bg-purple-100 px-2 py-1 rounded">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-purple-700 font-medium text-lg">{exp.company}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
            Education
          </h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex justify-between">
                <h4 className="text-lg font-semibold text-gray-800">{edu.degree} in {edu.fieldOfStudy}</h4>
                <span className="text-gray-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-purple-700 font-medium">{edu.institution}</p>
            </div>
          ))}
        </section>

        {/* Certifications */}
        {resumeData.certifications.length > 0 && (
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-purple-700 border-b-2 border-purple-300 pb-2 mb-4">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                  <div className="mr-3 text-purple-600">🎓</div>
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

export default CreativeTemplate;