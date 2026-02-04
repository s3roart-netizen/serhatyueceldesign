
export type Page = 'home' | 'projects' | 'other-projects' | 'contact' | 'project-detail';

export interface Persona {
  name: string;
  avatarUrl?: string;
  age: string;
  gender: string;
  job: string;
  techSavvy: string;
  behavior: string;
  usage: string;
  goals: string[];
  painPoints: string[];
  environment: string;
  interests: string[];
  values: string[];
  channels: string[];
  bio: string;
}

export interface ProjectData {
  id: string;
  mainTitle?: string;
  title: string;
  logoUrl?: string;
  status?: string;
  text: string;
  previewText?: string;
  imageUrl?: string;
  bgClass?: string;
  details?: {
    research?: string;
    researchIntro?: string;
    persona?: Persona;
    define?: string;
    ideate?: string;
    ideateImageUrls?: string[];
    finalDesign?: string;
    sitemapUrl?: string;
    userFlowUrl?: string;
    wireframeUrls?: string[];
    finalDesignUrls?: string[];
    userBehavior?: {
      mainImageUrl: string;
      items: { label: string; imageUrl: string | string[] }[];
    };
  };
}

export interface DesignItem {
  id: string;
  title: string;
  url: string;
  type?: 'image' | 'video' | 'pdf';
  subCategory?: string;
  thumbnailUrl?: string;
}

export interface NavItem {
  id: Page;
  label: string;
}
