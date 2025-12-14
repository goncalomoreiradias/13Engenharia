import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';

// --- HIGH-END CAD SIMULATOR LOADER ---
const CanvasConstructionLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Configuration
    const buildings: { x: number; y: number; w: number; h: number; currH: number; speed: number; type: number }[] = [];
    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
    const gridSpacing = 40;
    
    // Initialize City Grid
    const initCity = () => {
      const cols = Math.ceil(canvas.width / gridSpacing);
      // Create dense cluster in middle, sparse on edges
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * canvas.width;
        // Bias towards center for height
        const distFromCenter = Math.abs(x - canvas.width / 2);
        const maxH = (canvas.height * 0.7) * (1 - (distFromCenter / canvas.width));
        
        buildings.push({
          x: x,
          y: canvas.height, // Start from bottom
          w: 10 + Math.random() * 50,
          h: 100 + Math.random() * maxH,
          currH: 0,
          speed: 2 + Math.random() * 8,
          type: Math.floor(Math.random() * 3) // 0: solid, 1: grid, 2: framed
        });
      }
    };
    initCity();

    let frame = 0;
    const animationLoop = () => {
      if (!ctx) return;
      frame++;
      
      // Clear with slight trail effect for "monitor" feel
      ctx.fillStyle = 'rgba(10, 10, 10, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Horizon Grid (Floor)
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let y = canvas.height; y > canvas.height / 2; y -= 20) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Animate & Draw Buildings
      buildings.forEach(b => {
        // Grow
        if (b.currH < b.h) {
          b.currH += b.speed;
          // Spawn particles (welding sparks) at top while growing
          if (Math.random() > 0.8) {
             particles.push({
               x: b.x + Math.random() * b.w,
               y: canvas.height - b.currH,
               vx: (Math.random() - 0.5) * 4,
               vy: -Math.random() * 4,
               life: 1.0
             });
          }
        }

        const x = b.x;
        const y = canvas.height - b.currH;
        const w = b.w;
        const h = b.currH;

        // Draw Building Structure
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; // Faint structural lines
        if (b.type === 0) ctx.strokeStyle = 'rgba(191, 161, 95, 0.3)'; // Gold tint
        
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, w, h);

        // Internal details (complex details)
        ctx.beginPath();
        if (b.type === 1) { // Cross bracing
            ctx.moveTo(x, y); ctx.lineTo(x + w, y + h);
            ctx.moveTo(x + w, y); ctx.lineTo(x, y + h);
        } else if (b.type === 2) { // Horizontal floors
            for(let fy = y; fy < y + h; fy += 15) {
                ctx.moveTo(x, fy); ctx.lineTo(x+w, fy);
            }
        }
        ctx.stroke();

        // Highlight top (Active construction line)
        if (b.currH < b.h) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(x, y, w, 2);
        }
      });

      // Animate Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.05;
        
        ctx.fillStyle = `rgba(191, 161, 95, ${p.life})`;
        ctx.fillRect(p.x, p.y, 2, 2);
        
        if (p.life <= 0) particles.splice(i, 1);
      }

      // Progress bar logic simulation
      if (frame < 300) { // Approx 5 seconds at 60fps
         const calculatedProgress = Math.min(100, Math.floor((frame / 250) * 100));
         setProgress(calculatedProgress);
         requestAnimationFrame(animationLoop);
      } else {
         setIsFading(true);
         setTimeout(onComplete, 800);
      }
    };

    requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      {/* The CAD Simulator Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      
      {/* Overlay: Vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_90%)] pointer-events-none"></div>

      {/* The "Blueprint Paper" Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] bg-white p-1 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 scale-100">
        
        {/* Paper Texture/Border */}
        <div className="border-2 border-brand-black p-8 relative overflow-hidden bg-[#fcfcfc]">
           
           {/* Technical grid on paper */}
           <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
           </div>

           <div className="relative z-10 text-center space-y-4">
              <div className="flex justify-center mb-6">
                 {/* Animated Logo Icon */}
                 <div className="relative w-12 h-12 border border-brand-black flex items-center justify-center">
                    <div className="w-8 h-[1px] bg-brand-black animate-pulse"></div>
                    <div className="h-8 w-[1px] bg-brand-black absolute animate-pulse"></div>
                 </div>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl text-brand-black font-bold tracking-tight">
                13 Engenharia
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                 <span>Est. 2024</span>
                 <span className="w-px h-3 bg-gray-300"></span>
                 <span>Projeto: Portfolio</span>
              </div>

              {/* Loading Bar on Paper */}
              <div className="mt-8">
                 <div className="flex justify-between text-[9px] font-mono text-gray-400 mb-1 uppercase">
                    <span>Rendering Structure</span>
                    <span>{progress}%</span>
                 </div>
                 <div className="w-full h-[2px] bg-gray-100">
                    <div className="h-full bg-brand-black transition-all duration-100" style={{ width: `${progress}%` }}></div>
                 </div>
              </div>
           </div>

           {/* Stamp Effect */}
           <div className="absolute -bottom-4 -right-4 opacity-10 rotate-[-15deg] border-4 border-red-900 text-red-900 p-2 font-black uppercase text-xl">
              Aprovado
           </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <CanvasConstructionLoader onComplete={() => setLoading(false)} />}
      
      <div className={`bg-brand-concrete min-h-screen text-brand-black selection:bg-brand-black selection:text-white overflow-hidden transition-all duration-1000 ${loading ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          
          <section id="sobre" className="py-32 px-6 flex justify-center bg-brand-paper relative scroll-mt-20 border-b border-brand-line">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-brand-line md:left-12"></div>
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-brand-line md:right-12"></div>
            
            <div className="max-w-4xl text-center relative">
              <span className="font-mono text-xs text-brand-gold mb-6 block tracking-widest">FIG. 01 — VISÃO</span>
              <p className="font-serif text-3xl md:text-5xl leading-tight text-brand-black">
                "A engenharia é a arte de organizar as forças da natureza para o benefício do homem."
              </p>
               <div className="mt-8 w-px h-16 bg-brand-black mx-auto"></div>
            </div>
          </section>

          <Services />
          <Projects />
          <ContactSection />
        </main>
        
        <Footer />
        <AIConsultant />
      </div>
    </>
  );
};

export default App;