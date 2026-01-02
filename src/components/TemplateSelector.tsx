'use client';

import React from 'react';
import { Template } from '@/types/resume';

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplateId,
  onSelectTemplate,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
            selectedTemplateId === template.id
              ? 'border-blue-500 shadow-lg'
              : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
          }`}
          onClick={() => onSelectTemplate(template.id)}
        >
          <div className="flex items-center mb-3">
            <div
              className="w-10 h-10 rounded-full mr-3"
              style={{ backgroundColor: template.colorScheme.primary }}
            ></div>
            <h3 className="font-semibold text-lg">{template.name}</h3>
            {template.isAtsFriendly && (
              <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                ATS
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-3">{template.description}</p>
          <div className="flex space-x-2">
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: template.colorScheme.primary }}
            ></div>
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: template.colorScheme.secondary }}
            ></div>
            <div
              className="w-6 h-6 rounded"
              style={{ backgroundColor: template.colorScheme.accent }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector;