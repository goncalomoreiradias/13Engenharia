import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Vila Sol",
    category: "Residencial Privado",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    description: "Reabilitação integral"
  },
  {
    id: 2,
    title: "Complexo Horizon",
    category: "Edifício Corporativo",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2000&auto=format&fit=crop",
    description: "Estrutura Metálica"
  },
  {
    id: 3,
    title: "Casa da Falésia",
    category: "Habitação Unifamiliar",
    year: "2022",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
    description: "Geotecnia Complexa"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projetos" className="py-32 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sticky Header concept usually requires sticky positioning, keeping simple but elegant here */}
        <div className="mb-24 flex items-end justify-between border-b-2 border-brand-black pb-4">
          <h2 className="font-serif text-6xl md:text-8xl text-brand-black leading-none">
            Obras
          </h2>
          <div className="text-right hidden md:block">
            <p className="font-mono text-xs text-gray-400">STATUS: CONCLUÍDO</p>
            <p className="font-mono text-xs text-gray-400">TOTAL: 42 PROJETOS</p>
          </div>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image with "Sliding Door" reveal effect on scroll (simulated via CSS group hover for now or intersection observer in full app) */}
              <div className="w-full md:w-3/5 relative group cursor-none">
                <div className="overflow-hidden relative aspect-[4/3]">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                  />
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                
                {/* Decoration Lines */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-brand-black transition-all duration-500 group-hover:top-0 group-hover:left-0"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-brand-black transition-all duration-500 group-hover:bottom-0 group-hover:right-0"></div>
              </div>

              {/* Text Info */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-brand-gold tracking-widest">NO. {project.id.toString().padStart(2, '0')}</span>
                  <div className="h-[1px] w-12 bg-gray-300"></div>
                  <span className="font-mono text-xs text-gray-400 uppercase">{project.year}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-serif text-brand-black">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 font-light leading-relaxed border-l-2 border-brand-gold/30 pl-6">
                  {project.description} <br/>
                  <span className="text-sm text-gray-400 mt-2 block font-mono uppercase tracking-tight">{project.category}</span>
                </p>

                <button className="text-xs font-bold uppercase tracking-widest border-b border-brand-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors pt-4">
                  Ver Detalhes Técnicos
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
            <a href="#" className="inline-block border border-brand-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-black hover:text-white transition-all duration-500">
                Arquivo Completo
            </a>
        </div>
      </div>
    </section>
  );
};