import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre', number: '01' },
    { name: 'Serviços', href: '#servicos', number: '02' },
    { name: 'Projetos', href: '#projetos', number: '03' },
    { name: 'Contacto', href: '#contacto', number: '04' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 border-b ${
        isScrolled
          ? 'bg-brand-paper/90 backdrop-blur-md py-4 border-brand-line text-brand-black'
          : 'bg-transparent py-8 border-transparent text-brand-black'
      }`}
    >
      <div className="max-w-[95%] mx-auto flex justify-between items-center relative z-50">
        {/* Logo */}
        <a href="#" className="flex flex-col group relative z-50">
          <div className="flex items-baseline gap-1">
             <span className="font-serif text-3xl font-bold tracking-widest leading-none">
              13
            </span>
            <div className="h-2 w-2 bg-brand-gold rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase mt-1">
             Engenharia
          </span>
        </a>

        {/* Desktop Menu - Technical Look */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex flex-col items-center relative"
            >
              <span className="font-mono text-[10px] text-gray-400 mb-1 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {link.number}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.15em] hover:text-brand-gold transition-colors">
                {link.name}
              </span>
              <span className="absolute -bottom-2 w-0 h-[1px] bg-brand-black group-hover:w-full transition-all duration-500 delay-75"></span>
            </a>
          ))}
          
          <a href="#contacto" className="ml-4 px-6 py-2 border border-brand-black text-xs uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-500">
            Iniciar Obra
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-brand-black hover:text-brand-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Fixed positioning and visibility */}
      <div 
        className={`fixed inset-0 bg-[#f0f0f0] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          mobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col gap-10 text-center relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group relative font-serif text-5xl text-brand-black hover:text-brand-gold transition-colors italic tracking-wide"
            >
              <span className="absolute -left-8 top-0 font-mono text-xs not-italic text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                {link.number}
              </span>
              {link.name}
            </a>
          ))}
          
          <div className="mt-8 w-12 h-[1px] bg-brand-black/20 mx-auto"></div>
          
          <a 
            href="#contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-brand-black transition-colors"
          >
            Entrar em Contacto
          </a>
        </div>
        
        {/* Background Decoration for Mobile Menu */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-30 pointer-events-none"></div>
      </div>
    </nav>
  );
};