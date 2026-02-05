
export type Page = 'home' | 'projects' | 'other-projects' | 'contact' | 'project-detail';

export interface ProjectData {
  id: string;
  mainTitle?: string;
  title: string;
  status?: string;
  text: string;
  previewText?: string;
  imageUrl?: string;
  bgClass?: string;
  details?: {
    research?: string;
    researchIntro?: string;
    personaTitle?: string;
    personaText?: string;
    define?: string;
    ideate?: string;
    finalDesign?: string;
  };
}

export interface NavItem {
  id: Page;
  label: string;
}
