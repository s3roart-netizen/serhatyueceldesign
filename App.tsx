import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectSlider from './components/ProjectSlider';
import ProjectDetail from './components/ProjectDetail';
import OtherDesigns from './components/OtherDesigns';
import Contact from './components/Contact';
import { Page, ProjectData } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects') {
        setCurrentPage('projects');
        setSelectedProject(null);
      } else if (hash === 'andere-projekte') {
        setCurrentPage('other-projects');
        setSelectedProject(null);
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        setSelectedProject(null);
      } else if (PROJECTS[hash]) {
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
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Kreativität trifft auf <span className="animate-ai-gradient">Technologie</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Ich bin Serhat Yücel, ein UX/UI Designer mit Fokus auf intuitive digitale Erlebnisse. 
              Entdecke meine Projekte und Visionen für die Zukunft des Designs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => navigate('projects')}
                className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
              >
                Projekte ansehen
              </button>
              <button 
                onClick={() => navigate('contact')}
                className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Kontakt aufnehmen
              </button>
            </div>
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
    </div>
  );
};

export default App;