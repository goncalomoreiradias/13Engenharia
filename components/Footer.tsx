import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <span className="font-serif text-4xl font-bold text-white tracking-widest block mb-6">13</span>
          <p className="text-gray-500 text-sm leading-relaxed">
            Excelência em engenharia e construção. <br />
            Compromisso com a qualidade, segurança e inovação.
          </p>
        </div>

        {/* Contacts */}
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-sm uppercase tracking-widest text-brand-gold mb-8">Contactos</h4>
          <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
            <Mail className="w-5 h-5 group-hover:text-brand-gold" />
            <span className="font-light">geral@13engenharia.pt</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
            <Phone className="w-5 h-5 group-hover:text-brand-gold" />
            <span className="font-light">+351 912 345 678</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
            <MapPin className="w-5 h-5 group-hover:text-brand-gold" />
            <span className="font-light">Porto, Portugal</span>
          </div>
        </div>

        {/* Social / Legal */}
        <div className="md:col-span-1 flex flex-col justify-between">
           <div className="flex gap-6">
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} strokeWidth={1}/></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} strokeWidth={1}/></a>
           </div>
           <p className="text-xs text-gray-700 mt-12 md:mt-0">
             © 2024 13 Engenharia.<br/>Todos os direitos reservados.
           </p>
        </div>
      </div>
    </footer>
  );
};