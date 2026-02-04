
import React from 'react';
import { Page, ProjectData } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page, project?: ProjectData) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl px-6 py-4 flex flex-col items-center md:items-start border-b border-white/5">
      <div className="w-full flex justify-between items-center mb-2">
        <div className="hidden md:block text-[clamp(14px,1.4vw,18px)] font-light text-white tracking-wider uppercase">
          UX/UI Design Portfolio
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-4">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center group">
            <img 
              src="https://i.imgur.com/VFhrjQD.png" 
              alt="Serhat Yücel Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </button>
        </div>
        
        <div className="hidden md:block w-40">
          {/* Right spacer for visual balance */}
        </div>
      </div>

      <nav className="mt-4 md:mt-2 flex flex-row gap-8 items-center justify-center w-full md:justify-start">
        <button 
          onClick={() => onNavigate('projects')}
          className={`text-lg font-bold nav-link-transition relative group ${
            currentPage === 'projects' || currentPage === 'project-detail' 
              ? 'animate-ai-gradient' 
              : 'text-white hover:text-gray-300'
          }`}
        >
          Projekte
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-500 ${
            currentPage === 'projects' || currentPage === 'project-detail' ? 'w-full opacity-50' : 'w-0'
          }`}></span>
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className={`text-lg font-bold nav-link-transition relative group ${
            currentPage === 'contact' 
              ? 'animate-ai-gradient' 
              : 'text-white hover:text-gray-300'
          }`}
        >
          Kontakt
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all duration-500 ${
            currentPage === 'contact' ? 'w-full opacity-50' : 'w-0'
          }`}></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;