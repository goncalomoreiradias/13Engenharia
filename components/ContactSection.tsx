import React, { useState } from 'react';
import { MapPin, Phone, Mail, Loader2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-32 bg-brand-concrete relative overflow-hidden scroll-mt-24" id="contacto">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-brand-black/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Map */}
          <div className="space-y-12">
            <div>
              <span className="font-mono text-brand-gold text-xs tracking-widest mb-4 block">CONTACTO</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-black mb-6">
                Vamos <span className="italic text-gray-500">Construir?</span>
              </h2>
              <p className="text-gray-500 font-light">
                Estamos disponíveis para analisar o seu projeto com o rigor técnico que ele exige.
              </p>
            </div>

            <div className="space-y-8 font-mono text-sm text-brand-black/80">
               <div className="flex items-start gap-4 p-6 bg-white border border-transparent hover:border-brand-black/10 transition-colors">
                  <MapPin className="shrink-0 text-brand-gold" size={20} />
                  <div>
                    <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">Escritório</p>
                    <p>R. Antero de Quental 8, 1º F<br/>3880-148 Ovar, Portugal</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 p-6 bg-white border border-transparent hover:border-brand-black/10 transition-colors">
                  <Phone className="shrink-0 text-brand-gold" size={20} />
                  <div>
                    <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">Direct Line</p>
                    <p>+351 925 622 704</p>
                  </div>
               </div>

               <div className="flex items-start gap-4 p-6 bg-white border border-transparent hover:border-brand-black/10 transition-colors">
                  <Mail className="shrink-0 text-brand-gold" size={20} />
                  <div>
                    <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">Email</p>
                    <p>info@13engenharia.pt</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-concrete flex items-center justify-center">
               <div className="w-1 h-1 bg-brand-black"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 pt-4">
              <div className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-200 text-brand-black pb-3 pt-5 focus:border-brand-black focus:outline-none transition-colors peer placeholder-transparent"
                    placeholder="Nome"
                    id="name"
                  />
                  <label htmlFor="name" className="font-mono absolute left-0 top-0 text-gray-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold">
                    Nome Completo
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-200 text-brand-black pb-3 pt-5 focus:border-brand-black focus:outline-none transition-colors peer placeholder-transparent"
                    placeholder="Email"
                    id="email"
                  />
                  <label htmlFor="email" className="font-mono absolute left-0 top-0 text-gray-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold">
                    Email Corporativo
                  </label>
                </div>
                
                 <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-200 text-brand-black pb-3 pt-5 focus:border-brand-black focus:outline-none transition-colors peer placeholder-transparent resize-none"
                    placeholder="Mensagem"
                    id="message"
                  />
                  <label htmlFor="message" className="font-mono absolute left-0 top-0 text-gray-400 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-gold">
                    Descrição do Projeto
                  </label>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`group relative overflow-hidden px-8 py-4 bg-brand-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-500 disabled:opacity-50`}
                >
                  <span className="flex items-center gap-2">
                    {status === 'submitting' ? (
                      <>Processing <Loader2 className="animate-spin w-3 h-3" /></>
                    ) : status === 'success' ? (
                      <>Enviado</>
                    ) : (
                      <>Enviar Pedido <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};