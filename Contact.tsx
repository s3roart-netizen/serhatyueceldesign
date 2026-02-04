
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center animate-in fade-in zoom-in-95 duration-700">
      <h2 className="text-5xl md:text-7xl font-bold mb-12">Kontakt</h2>
      
      <div className="flex justify-center mt-16">
        <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors max-w-md w-full">
          <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-4">Email</h3>
          <a href="mailto:serhat02@live.de" className="text-2xl font-semibold hover:text-purple-400 transition-colors">
            serhat02@live.de
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
