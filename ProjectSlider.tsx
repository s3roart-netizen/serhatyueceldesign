
// Import React to resolve 'Cannot find namespace React' when using React.FC
import React, { useState, useEffect, useRef } from 'react';
import { ProjectData } from '../types';
import { PROJECTS } from '../constants';

interface ProjectSliderProps {
  onProjectClick: (project: ProjectData) => void;
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ onProjectClick }) => {
  const projectList = Object.values(PROJECTS);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startAuto = () => {
    stopAuto();
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectList.length);
    }, 5000);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [projectList.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[60vh] md:h-[70vh] group mt-10" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-2xl">
        {projectList.map((project, idx) => {
          const isINeed = project.id === 'ineed';
          const isActive = idx === activeIndex;

          return (
            <div
              key={project.id}
              onClick={() => onProjectClick(project)}
              className={`absolute inset-0 transition-opacity duration-1000 cursor-pointer ${
                isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              } ${project.bgClass}`}
            >
              {/* Background Image - Absolute full frame scaling */}
              {project.imageUrl && (
                <div 
                  className="absolute inset-0 transition-transform duration-1000 ease-out"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: 'scale(1)', 
                  }}
                />
              )}
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Content Positioning */}
              <div className={`absolute z-10 transition-all duration-700 w-full px-10 md:px-16 bottom-10 md:bottom-12`}>
                {/* Status Indicator (Blinking Dot) */}
                {project.status && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full live-pulse-dot shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                    <span className="text-xs font-bold tracking-widest text-white/70 uppercase">{project.status}</span>
                  </div>
                )}

                {/* iNeed title text replacement vs. Other project logos */}
                {project.logoUrl && !isINeed ? (
                  <img 
                    src={project.logoUrl} 
                    alt={project.title} 
                    className="h-32 md:h-48 w-auto mb-2 object-contain transition-all" 
                  />
                ) : (
                  <h3 className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter text-white drop-shadow-2xl">
                    {project.title}
                  </h3>
                )}
                
                <p className={`text-lg md:text-xl text-gray-300 max-w-xl line-clamp-3 font-light leading-relaxed`}>
                  {project.previewText || project.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-4 mt-8">
        {projectList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'bg-white scale-125' : 'bg-gray-700 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
