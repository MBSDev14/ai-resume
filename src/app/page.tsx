 'use client';

import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ResumeInput from '@/components/ResumeInput';
import TemplateSelector from '@/components/TemplateSelector';
import { availableTemplates } from '@/lib/templates';
import templateComponents from '@/lib/templateComponents.client';
import DownloadButton from '@/components/DownloadButton';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  const [resumeText, setResumeText] = useState('');
  const [resumeData, setResumeData] = useState<any>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState('modern');
  const [isLoading, setIsLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const handleParseResume = async (text: string) => {
    setIsLoading(true);
    setResumeText(text);
    
    // In a real application, this would call your backend API
    // For now, we'll simulate the response
    setTimeout(() => {
      const mockResumeData = {
        fullName: 'John Doe',
        targetJobRole: 'Software Engineer',
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS'],
        workExperience: [
          {
            company: 'Tech Corp',
            position: 'Senior Developer',
            startDate: '2020',
            endDate: 'Present',
            description: 'Led development of web applications using React and Node.js. Implemented CI/CD pipelines and improved system performance by 30%.'
          },
          {
            company: 'Startup Inc',
            position: 'Junior Developer',
            startDate: '2018',
            endDate: '2020',
            description: 'Built and maintained APIs, collaborated with cross-functional teams, and contributed to code reviews.'
          }
        ],
        education: [
          {
            institution: 'University of Technology',
            degree: 'B.S.',
            fieldOfStudy: 'Computer Science',
            startDate: '2014',
            endDate: '2018'
          }
        ],
        certifications: ['AWS Certified Developer', 'Google Cloud Professional'],
        location: 'San Francisco, CA',
        contactInfo: {
          email: 'john.doe@email.com',
          phone: '(555) 123-4567',
          linkedin: 'linkedin.com/in/johndoe',
          github: 'github.com/johndoe'
        },
        profileImageUrl
      };
      
      setResumeData(mockResumeData);
      setIsLoading(false);
    }, 1500);
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
  };

  const handleImageUpload = (imageUrl: string) => {
    setProfileImageUrl(imageUrl);
    
    // Update resume data with new image URL if resume data exists
    if (resumeData) {
      setResumeData({
        ...resumeData,
        profileImageUrl: imageUrl
      });
    }
  };

  const handleDownloadPDF = () => {
    (async () => {
      if (!resumeData) return;
      const el = document.getElementById('resume-preview');
      if (!el) return alert('Resume preview not found');
      try {
        const [html2canvasMod, jspdfMod] = await Promise.all([
          import('html2canvas'),
          import('jspdf')
        ]);
        const html2canvas = (html2canvasMod && (html2canvasMod.default || html2canvasMod)) as any;
        const jsPDFLib = (jspdfMod && (jspdfMod.jsPDF || jspdfMod.default || jspdfMod)) as any;

        // wait a tick so any images finish loading
        await new Promise((r) => setTimeout(r, 250));

        const scale = Math.max(2, window.devicePixelRatio || 1);
        // Clone the preview into a hidden offscreen container and inline computed
        // styles from the original elements onto the clone. This resolves color-mix/lab
        // and other CSS functions into concrete colors so html2canvas can render them.
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.left = '-99999px';
        container.style.top = '0';
        container.style.width = el.clientWidth + 'px';
        container.style.height = el.clientHeight + 'px';
        container.style.overflow = 'hidden';
        document.body.appendChild(container);

        const clone = (el as HTMLElement).cloneNode(true) as HTMLElement;
        // Remove any id attributes from clone to avoid duplicate IDs
        clone.querySelectorAll('[id]').forEach((n) => n.removeAttribute('id'));
        container.appendChild(clone);

        // Inline computed styles from original to clone
        const origNodes = Array.from((el as HTMLElement).querySelectorAll('*')) as HTMLElement[];
        const cloneNodes = Array.from(clone.querySelectorAll('*')) as HTMLElement[];
        // include root
        origNodes.unshift(el as HTMLElement);
        cloneNodes.unshift(clone as HTMLElement);

        for (let i = 0; i < origNodes.length; i++) {
          const o = origNodes[i];
          const c = cloneNodes[i];
          if (!o || !c) continue;
          const cs = window.getComputedStyle(o);
          // Copy essential properties. Copying all properties is expensive; choose a broad set.
          const props = [
            'color','background-color','background-image','background-size','background-position','background-repeat',
            'border','border-top','border-right','border-bottom','border-left','box-shadow',
            'font-size','font-family','font-weight','font-style','line-height','text-align','text-decoration',
            'padding','margin','width','height','display','flex-direction','justify-content','align-items',
            'gap','grid-template-columns','grid-template-rows','column-gap','row-gap','white-space','word-break',
            'overflow','opacity','transform'
          ];
          for (const p of props) {
            const v = cs.getPropertyValue(p);
            if (v) c.style.setProperty(p, v, 'important');
          }
        }

        const canvas = await html2canvas(clone as HTMLElement, {
          scale,
          useCORS: true,
          logging: false,
          allowTaint: true,
        });
        // cleanup cloned container
        if (container && container.parentNode) container.parentNode.removeChild(container);

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDFLib({ unit: 'pt', format: 'a4', orientation: 'portrait' });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // If content taller than one page, split into pages
        if (pdfHeight <= pdf.internal.pageSize.getHeight()) {
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        } else {
          let remainingHeight = canvas.height;
          const pageHeightPx = (canvas.width * pdf.internal.pageSize.getHeight()) / pdfWidth;
          let offsetY = 0;

          while (remainingHeight > 0) {
            const sliceHeight = Math.min(pageHeightPx, remainingHeight);
            const sliceCanvas = document.createElement('canvas');
            sliceCanvas.width = canvas.width;
            sliceCanvas.height = sliceHeight;
            const sliceCtx = sliceCanvas.getContext('2d')!;
            sliceCtx.drawImage(canvas, 0, offsetY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
            const sliceData = sliceCanvas.toDataURL('image/png');
            const slicePdfHeight = (sliceHeight * pdfWidth) / canvas.width;
            pdf.addImage(sliceData, 'PNG', 0, 0, pdfWidth, slicePdfHeight);
            remainingHeight -= sliceHeight;
            offsetY += sliceHeight;
            if (remainingHeight > 0) pdf.addPage();
          }
        }

        const fileName = `${(resumeData.fullName || 'resume').replace(/\s+/g, '_')}.pdf`;
        pdf.save(fileName);
        console.log('PDF generated and saved:', fileName);
      } catch (err: any) {
        console.error('PDF generation error:', err);
        alert('Failed to generate PDF: ' + (err && err.message ? err.message : String(err)));
      }
    })();
  };

  const SelectedTemplateComponent = templateComponents[selectedTemplateId];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            AI Resume Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create professional, ATS-friendly resumes in seconds with AI-powered suggestions
          </p>
        </header>

        {!resumeData ? (
          <div className="flex justify-center">
            <ResumeInput 
              onParseResume={handleParseResume} 
              isLoading={isLoading} 
            />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Template</h2>
              <TemplateSelector 
                templates={availableTemplates}
                selectedTemplateId={selectedTemplateId}
                onSelectTemplate={handleTemplateSelect}
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Resume Preview</h2>
                <DownloadButton 
                  onClick={handleDownloadPDF} 
                  disabled={isLoading} 
                />
              </div>
              
              {SelectedTemplateComponent && (
                <div id="resume-preview">
                  <SelectedTemplateComponent 
                    resumeData={resumeData} 
                    templateId={selectedTemplateId}
                    onImageUpload={handleImageUpload}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;