export interface ResumeData {
  fullName: string;
  targetJobRole: string;
  skills: string[];
  workExperience: WorkExperience[];
  education: Education[];
  certifications: string[];
  location: string;
  contactInfo: ContactInfo;
  profileImageUrl?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  isAtsFriendly: boolean;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  thumbnailUrl: string;
}

export interface JobMatch {
  jobId: string;
  jobTitle: string;
  companyName: string;
  matchScore: number; // 0-100
  requiredSkills: string[];
  missingSkills: string[];
}