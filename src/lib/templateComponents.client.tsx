'use client';

import ModernTemplate from '@/components/templates/ModernTemplate';
import CreativeTemplate from '@/components/templates/CreativeTemplate';
import MinimalTemplate from '@/components/templates/MinimalTemplate';
import CorporateTemplate from '@/components/templates/CorporateTemplate';
import ColorfulTemplate from '@/components/templates/ColorfulTemplate';
import ProfessionalTemplate from '@/components/templates/ProfessionalTemplate';
import TechTemplate from '@/components/templates/TechTemplate';
import CreativeProTemplate from '@/components/templates/CreativeProTemplate';
import ModernBoldTemplate from '@/components/templates/ModernBoldTemplate';
import CleanSimpleTemplate from '@/components/templates/CleanSimpleTemplate';

const templateComponents: Record<string, React.ComponentType<any>> = {
  'modern': ModernTemplate,
  'creative': CreativeTemplate,
  'minimal': MinimalTemplate,
  'corporate': CorporateTemplate,
  'colorful': ColorfulTemplate,
  'professional': ProfessionalTemplate,
  'tech': TechTemplate,
  'creative-pro': CreativeProTemplate,
  'modern-bold': ModernBoldTemplate,
  'clean-simple': CleanSimpleTemplate
};

export default templateComponents;
