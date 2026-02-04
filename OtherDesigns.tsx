
// Import React to resolve 'Cannot find namespace React' when using React.FC
import React, { useState, useMemo } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { OTHER_DESIGNS_DATA } from '../constants';
import { DesignItem } from '../types';

const OtherDesigns: React.FC = () => {
  const categories = Object.keys(OTHER_DESIGNS_DATA);
  const [selectedCategory, setSelectedCategory] = useState(categories[1]); // Default to Illustration
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Illustration']);
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);

  const toggleExpand = (cat: string) => {
    setExpandedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedSubCategory(null);
    if (!expandedCategories.includes(cat)) {
      toggleExpand(cat);
    }
  };

  const handleSubCategoryClick = (cat: string, sub: string) => {
    setSelectedCategory(cat);
    setSelectedSubCategory(sub);
  };

  const currentItems = useMemo(() => {
    const items = OTHER_DESIGNS_DATA[selectedCategory] || [];
    if (selectedSubCategory) {
      return items.filter(item => item.subCategory === selectedSubCategory);
    }
    return items;
  }, [selectedCategory, selectedSubCategory]);

  const getSubCategories = (cat: string) => {
    const items = OTHER_DESIGNS_DATA[cat] || [];
    const subs = new Set<string>();
    items.forEach(i => {
      if (i.subCategory) subs.add(i.subCategory);
    });
    
    if (cat === 'Illustration') {
      subs.add('Zeichnungen');
      subs.add('Digitales Produktdesign');
    }
    
    return Array.from(subs).sort();
  };

  const getEmbedUrl = (url: string, type?: string) => {
    if (type !== 'pdf') return url;
    if (url.includes('dropbox.com')) {
      return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('dl=0', 'raw=1');
    }
    return url;
  };

  return (
    <div className="relative min-h-[80vh] rounded-[3rem] overflow-hidden p-8 md:p-16 border border-white/5 bg-black/40 backdrop-blur-sm animate-in fade-in duration-1000">
      <AnimatedBackground />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-white/90">Weitere Designs</h2>
          
          <ul className="space-y-6">
            {categories.map((cat) => {
              const subs = getSubCategories(cat);
              const isExpanded = expandedCategories.includes(cat);
              const isMainActive = selectedCategory === cat && !selectedSubCategory;

              return (
                <li key={cat} className="group">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={`text-2xl font-bold nav-link-transition text-left flex-1 py-1 ${
                        isMainActive 
                          ? 'animate-ai-gradient scale-105 origin-left' 
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {cat}
                    </button>
                    {subs.length > 0 && (
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleExpand(cat); }}
                        className={`p-2 transition-all duration-500 rounded-full hover:bg-white/5 ${isExpanded ? 'rotate-180 bg-white/5' : ''}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="ml-4 space-y-3 border-l-2 border-white/10 pl-6">
                      {subs.map(sub => (
                        <li key={sub}>
                          <button
                            onClick={() => handleSubCategoryClick(cat, sub)}
                            className={`text-lg nav-link-transition py-1 ${
                              selectedSubCategory === sub 
                                ? 'text-purple-400 font-semibold' 
                                : 'text-gray-500 hover:text-gray-300 font-light'
                            }`}
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 content-start">
          {currentItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="aspect-[4/5] relative group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 animate-in fade-in zoom-in-95 duration-700"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.url} 
                  muted 
                  loop 
                  playsInline
                  onMouseOver={e => (e.target as HTMLVideoElement).play()}
                  onMouseOut={e => (e.target as HTMLVideoElement).pause()}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              ) : item.type === 'pdf' ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 gap-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-red-400/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm font-bold tracking-widest text-red-400/60 uppercase">PDF Dokument</span>
                  {item.title && <span className="text-xs text-gray-500 px-6 text-center">{item.title}</span>}
                </div>
              ) : (
                <img 
                  src={item.url} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}
              
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  {item.type === 'video' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : item.type === 'pdf' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
          {currentItems.length === 0 && (
            <div className="col-span-2 py-32 text-center text-gray-500 italic border-2 border-dashed border-white/5 rounded-[2rem] bg-white/[0.02]">
              Hier folgen in Kürze neue Arbeiten.
            </div>
          )}
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/98 backdrop-blur-3xl animate-in fade-in duration-500"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/30 hover:text-white transition-all p-4 bg-white/5 hover:bg-white/10 rounded-full z-[110] border border-white/10"
            onClick={() => setSelectedItem(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <video 
                src={selectedItem.url} 
                controls 
                autoPlay 
                playsInline
                className="max-w-full max-h-full rounded-xl shadow-2xl animate-in zoom-in-95 duration-700"
              />
            ) : selectedItem.type === 'pdf' ? (
              <div className="w-full h-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700">
                 <iframe 
                  src={getEmbedUrl(selectedItem.url, 'pdf')} 
                  className="w-full h-full border-none"
                  title={selectedItem.title || 'PDF Viewer'}
                />
              </div>
            ) : (
              <img 
                src={selectedItem.url} 
                alt="" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-700"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherDesigns;