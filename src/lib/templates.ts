import { Template } from '@/types/resume';

// Define all available templates
export const availableTemplates: Template[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean and professional layout with gradient accents',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#2563eb',
      secondary: '#3b82f6',
      accent: '#60a5fa',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'creative',
    name: 'Creative Design',
    description: 'Colorful and artistic layout for creative professionals',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#9d174d',
      secondary: '#f0abfc',
      accent: '#f472b6',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'minimal',
    name: 'Minimalist',
    description: 'Simple and clean design focusing on content',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#1f2937',
      secondary: '#374151',
      accent: '#6b7280',
      text: '#111827',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Traditional business style with professional look',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#1e3a8a',
      secondary: '#3b82f6',
      accent: '#60a5fa',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'colorful',
    name: 'Colorful',
    description: 'Vibrant colors with modern layout',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#0d9488',
      secondary: '#14b8a6',
      accent: '#2dd4bf',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Elegant design with warm color tones',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#b45309',
      secondary: '#f59e0b',
      accent: '#fbbf24',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'tech',
    name: 'Tech Focus',
    description: 'Designed specifically for technology professionals',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#047857',
      secondary: '#10b981',
      accent: '#34d399',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'creative-pro',
    name: 'Creative Pro',
    description: 'Professional layout with creative flair',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#be123c',
      secondary: '#f43f5e',
      accent: '#fb7185',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'modern-bold',
    name: 'Modern Bold',
    description: 'Bold typography with vibrant colors',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#6d28d9',
      secondary: '#8b5cf6',
      accent: '#a78bfa',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  },
  {
    id: 'clean-simple',
    name: 'Clean & Simple',
    description: 'Simple and elegant design with sky blue accents',
    isAtsFriendly: true,
    colorScheme: {
      primary: '#0284c7',
      secondary: '#0ea5e9',
      accent: '#38bdf8',
      text: '#1e293b',
      background: '#ffffff'
    },
    thumbnailUrl: ''
  }
];

// NOTE: Component mapping moved to a client-only module to avoid importing
// client components from a module that may be used server-side. See
// `templateComponents.client.tsx` for the client-only mapping.