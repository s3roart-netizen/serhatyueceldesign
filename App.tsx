
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectSlider from './components/ProjectSlider';
import ProjectDetail from './components/ProjectDetail';
import OtherDesigns from './components/OtherDesigns';
import Contact from './components/Contact';
import GeminiAssistant from './components/GeminiAssistant';
import { Page, ProjectData } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects') setCurrentPage('projects');
      else if (hash === 'andere-projekte') setCurrentPage('other-projects');
      else if (hash === 'contact') setCurrentPage('contact');
      else if (PROJECTS[hash]) {
        setSelectedProject(PROJECTS[hash]);
        setCurrentPage('project-detail');
      } else {
        setCurrentPage('home');
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (page: Page, project?: ProjectData) => {
    if (project) {
      window.location.hash = project.id;
    } else if (page === 'projects') {
      window.location.hash = 'projects';
    } else if (page === 'other-projects') {
      window.location.hash = 'andere-projekte';
    } else if (page === 'contact') {
      window.location.hash = 'contact';
    } else {
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#eee] font-sans selection:bg-purple-500 selection:text-white">
      <Header currentPage={currentPage} onNavigate={navigate} />
      
      <main className="pt-24 px-4 sm:px-10 pb-20">
        {currentPage === 'home' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Kreativität trifft auf <span className="text-purple-400">Technologie</span>.
            </h1>
            <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
              Ich bin Serhat Yücel, ein UX/UI Designer mit Fokus auf intuitive digitale Erlebnisse. 
              Entdecke meine Projekte und Visionen für die Zukunft des Designs.
            </p>
            <button 
              onClick={() => navigate('projects')}
              className="mt-10 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
            >
              Projekte ansehen
            </button>
          </div>
        )}

        {currentPage === 'projects' && (
          <ProjectSlider 
            onProjectClick={(p) => p.id === 'other' ? navigate('other-projects') : navigate('project-detail', p)} 
          />
        )}

        {currentPage === 'project-detail' && selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => navigate('projects')} 
          />
        )}

        {currentPage === 'other-projects' && (
          <OtherDesigns />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      <GeminiAssistant currentProject={selectedProject} />
    </div>
  );
};

export default App;
