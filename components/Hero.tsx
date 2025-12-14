import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-concrete">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* Main Image with Shutter Reveal */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-concrete z-10 animate-reveal-mask origin-bottom" style={{ animationDelay: '0.2s' }}></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-80" // Lighter image
        />
        {/* White overlay to wash it out slightly for the 'clean' look */}
        <div className="absolute inset-0 bg-white/30 mix-blend-overlay" />
      </div>

      {/* Technical Lines Decoration */}
      <div className="absolute top-0 left-12 h-full w-[1px] bg-brand-black/10 hidden md:block z-20"></div>
      <div className="absolute top-0 right-12 h-full w-[1px] bg-brand-black/10 hidden md:block z-20"></div>
      <div className="absolute bottom-24 left-0 w-full h-[1px] bg-brand-black/10 z-20"></div>

      {/* Content */}
      <div className="relative z-30 text-center max-w-5xl px-6">
        
        <div className="reveal-text-container mb-4">
          <div className="reveal-text-content flex items-center justify-center gap-4">
             <span className="h-[1px] w-8 bg-brand-black"></span>
             <p className="font-mono text-brand-black uppercase tracking-[0.3em] text-xs">
              Conceito & Concretização
            </p>
            <span className="h-[1px] w-8 bg-brand-black"></span>
          </div>
        </div>

        <div className="reveal-text-container mb-8">
           <h1 className="reveal-text-content font-serif text-6xl md:text-8xl lg:text-9xl text-brand-black leading-[0.9] mix-blend-multiply" style={{ animationDelay: '0.2s' }}>
            A Arte da <br />
            <span className="italic font-light text-brand-gold/90">Engenharia</span>
          </h1>
        </div>
        
        <div className="reveal-text-container">
           <p className="reveal-text-content text-brand-black/70 max-w-xl mx-auto text-lg font-light leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Transformamos visão em realidade com precisão técnica e estética intemporal. 
            Especialistas em construção civil de alto padrão.
          </p>
        </div>
        
        <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <a
            href="#projetos"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-brand-black text-white text-xs tracking-widest uppercase hover:bg-brand-gold transition-all duration-500"
          >
            Explorar Portfolio
            <div className="w-4 h-[1px] bg-white group-hover:w-8 transition-all"></div>
          </a>
        </div>
      </div>

      {/* Technical Footer Data */}
      <div className="absolute bottom-8 left-12 z-30 hidden md:block font-mono text-[10px] text-brand-black/50">
        <p>LAT: 40.8596° N</p>
        <p>LONG: 8.6257° W</p>
      </div>
      
      <div className="absolute bottom-8 right-12 z-30 hidden md:block font-mono text-[10px] text-brand-black/50 text-right">
        <p>SCROLL TO EXPLORE</p>
        <div className="h-8 w-[1px] bg-brand-black/20 ml-auto mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};