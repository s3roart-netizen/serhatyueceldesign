
import React, { useState, useEffect } from 'react';
import { ProjectData, Persona } from '../types';

interface ProjectDetailProps {
  project: ProjectData;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [currentIdeateIdx, setCurrentIdeateIdx] = useState(0);

  useEffect(() => {
    if (project.details?.ideateImageUrls && project.details.ideateImageUrls.length > 0) {
      const timer = setInterval(() => {
        setCurrentIdeateIdx((prev) => (prev + 1) % project.details!.ideateImageUrls!.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [project.details?.ideateImageUrls]);

  const openLightbox = (url: string) => {
    setSelectedImageUrl(url);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setSelectedImageUrl(null);
    document.body.style.overflow = 'auto'; 
  };

  const getActiveImages = (): string[] => {
    if (!project.details?.userBehavior) return [];
    if (activeTabIdx === 0) return [project.details.userBehavior.mainImageUrl];
    const item = project.details.userBehavior.items[activeTabIdx - 1];
    if (!item) return [];
    return Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl];
  };

  const activeImages = getActiveImages();

  const PersonaView = ({ persona }: { persona: Persona }) => (
    <div className="mt-12 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/30 overflow-hidden shadow-lg flex items-center justify-center">
                {persona.avatarUrl ? (
                  <img src={persona.avatarUrl} alt={persona.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-white">{persona.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">{persona.name}</h4>
                <p className="text-purple-400 font-medium">{persona.job}</p>
              </div>
            </div>
            <div className="space-y-4 text-sm font-light">
              <div><span className="text-gray-500 block">Alter</span>{persona.age}</div>
              <div><span className="text-gray-500 block">Geschlecht</span>{persona.gender}</div>
              <div><span className="text-gray-500 block">Technikaffinität</span>{persona.techSavvy}</div>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Ziele</h5>
              <ul className="space-y-2">
                {persona.goals.map((g, i) => <li key={i} className="text-sm text-gray-300 flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>{g}</li>)}
              </ul>
            </div>
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">Pain Points</h5>
              <ul className="space-y-2">
                {persona.painPoints.map((p, i) => <li key={i} className="text-sm text-gray-300 flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span>{p}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-lg text-gray-400 italic font-light">"{persona.bio}"</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="mb-10 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Zurück zu Projekten
      </button>

      <header className="mb-16">
        {project.logoUrl ? (
          <img src={project.logoUrl} alt={project.title} className="h-32 md:h-48 w-auto mb-8 object-contain" />
        ) : (
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{project.title}</h1>
        )}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">{project.text}</p>
      </header>

      {project.details && (
        <div className="space-y-32 pb-20">
          {project.details.research && (
            <section>
              <h2 className="text-3xl font-semibold mb-6 border-b border-white/10 pb-4">Research</h2>
              <p className="text-lg text-gray-400 mb-12">{project.details.researchIntro}</p>
              {project.details.userBehavior && (
                <div className="mt-16">
                  <div className="flex flex-wrap gap-8 mb-10">
                    <button onClick={() => setActiveTabIdx(0)} className={`text-2xl font-medium transition-colors ${activeTabIdx === 0 ? 'text-white border-b-2' : 'text-white/30 hover:text-white/50'}`}>Nutzerverhalten</button>
                    {project.details.userBehavior.items.map((item, idx) => (
                      <button key={idx} onClick={() => setActiveTabIdx(idx+1)} className={`text-2xl font-medium transition-colors ${activeTabIdx === idx+1 ? 'text-white border-b-2' : 'text-white/30 hover:text-white/50'}`}>{item.label}</button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeImages.map((url, i) => (
                      <div key={i} className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-4 cursor-pointer group shadow-xl" onClick={() => openLightbox(url)}>
                        <img src={url} className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {project.details.persona && (
            <section>
              <h2 className="text-3xl font-semibold mb-6 border-b border-white/10 pb-4">Define</h2>
              <PersonaView persona={project.details.persona} />
            </section>
          )}

          {project.details.ideateImageUrls && project.details.ideateImageUrls.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold mb-6 border-b border-white/10 pb-4">Ideate</h2>
              <div className="space-y-6">
                <div 
                  className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 cursor-pointer shadow-2xl group" 
                  onClick={() => openLightbox(project.details!.ideateImageUrls![currentIdeateIdx])}
                >
                  {project.details.ideateImageUrls.map((url, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentIdeateIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                      <img src={url} className="w-full h-full object-contain p-8" alt={`Ideation Phase ${idx + 1}`} />
                    </div>
                  ))}
                </div>
                
                {/* 3 Punkte zur Auswahl unter der Sektion */}
                <div className="flex justify-center items-center gap-4">
                  {project.details.ideateImageUrls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdeateIdx(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentIdeateIdx ? 'bg-white scale-150' : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Gehe zu Bild ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {project.details.sitemapUrl && (
            <section>
              <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Sitemap</h2>
              <div className="rounded-3xl overflow-hidden border border-white/10 p-4 bg-white/5 shadow-2xl cursor-pointer group" onClick={() => openLightbox(project.details!.sitemapUrl!)}>
                <img src={project.details.sitemapUrl} className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]" />
              </div>
            </section>
          )}

          {project.details.userFlowUrl && (
            <section>
              <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">User Flow</h2>
              <div className="rounded-3xl overflow-hidden border border-white/10 p-4 bg-white/5 shadow-2xl cursor-pointer group" onClick={() => openLightbox(project.details!.userFlowUrl!)}>
                <img src={project.details.userFlowUrl} className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]" />
              </div>
            </section>
          )}

          {project.details.wireframeUrls && project.details.wireframeUrls.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Wireframes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.details.wireframeUrls.map((url, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 cursor-pointer group shadow-xl" onClick={() => openLightbox(url)}>
                    <img src={url} className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.details.finalDesignUrls && project.details.finalDesignUrls.length > 0 && (
            <section>
              <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Aktuelles Design</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {project.details.finalDesignUrls.map((url, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer group shadow-lg" onClick={() => openLightbox(url)}>
                    <img src={url} className="w-full aspect-[9/19] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {selectedImageUrl && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl animate-in fade-in duration-300" onClick={closeLightbox}>
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={selectedImageUrl} className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-500" />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
