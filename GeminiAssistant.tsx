
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { ProjectData } from '../types';

interface GeminiAssistantProps {
  currentProject: ProjectData | null;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ currentProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    setAnswer('');
    const context = currentProject ? currentProject.title : "Portfolio allgemein";
    const result = await geminiService.askAboutProject(context, query);
    setAnswer(result);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-purple-400">Design Assistent</h4>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mb-4">
            Frage mich etwas über {currentProject ? `das Projekt "${currentProject.title}"` : "Serhats Arbeit"}.
          </p>

          {answer && (
            <div className="mb-4 p-4 bg-white/5 rounded-xl text-sm leading-relaxed text-gray-300">
              {answer}
            </div>
          )}

          <form onSubmit={handleAsk} className="flex gap-2">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="z.B. Was war die Design-Idee?"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              )}
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
            <path d="M12 12L2.69 7"></path>
            <path d="M12 12l5.63 8.16"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
