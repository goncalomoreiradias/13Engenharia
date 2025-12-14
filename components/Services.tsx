import React from 'react';
import { Building2, Zap, Settings, ThermometerSun, Flame, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: 1,
    title: "Civil",
    items: ["Estabilidade", "Hidráulica", "Acústica"],
    icon: Building2
  },
  {
    id: 2,
    title: "Eletrotécnica",
    items: ["ITED", "Alta Tensão", "Domótica"],
    icon: Zap
  },
  {
    id: 3,
    title: "Mecânica",
    items: ["AVAC", "Sistemas", "Ventilação"],
    icon: Settings
  },
  {
    id: 4,
    title: "Térmica",
    items: ["Certificação", "Eficiência", "Passivhaus"],
    icon: ThermometerSun
  },
  {
    id: 5,
    title: "Gás",
    items: ["Redes Prediais", "Inspeção", "Segurança"],
    icon: Flame
  },
  {
    id: 6,
    title: "Segurança",
    items: ["SCIE", "Medidas Auto.", "Emergência"],
    icon: ShieldAlert
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-brand-concrete relative overflow-hidden scroll-mt-24">
      {/* Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-brand-black/10 pb-8">
          <div>
            <span className="font-mono text-brand-gold text-xs tracking-widest mb-4 block">SECTOR 02 — ESPECIALIDADES</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-black">
              Serviços <span className="italic text-gray-400 font-light">Técnicos</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-500 font-light mt-6 md:mt-0 text-right">
            Rigor normativo aliado à precisão de execução.
            Soluções completas de engenharia integradas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group p-10 border-r border-b border-brand-black/10 hover:bg-white transition-all duration-500 relative ${idx < 3 ? 'border-t' : ''} ${idx % 3 === 0 ? 'border-l' : ''}`}
            >
              {/* Technical Corner Markers */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs text-gray-400 group-hover:text-brand-gold transition-colors">0{service.id}</span>
                <service.icon className="w-6 h-6 text-brand-black stroke-1 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              
              <h3 className="text-2xl text-brand-black font-serif mb-6 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              
              <ul className="space-y-2 border-t border-brand-black/5 pt-6">
                {service.items.map((item, i) => (
                  <li key={i} className="text-xs font-mono uppercase text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-gold/0 group-hover:bg-brand-gold transition-colors duration-500"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-brand-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};