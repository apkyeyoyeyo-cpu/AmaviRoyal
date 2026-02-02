
import React, { useState } from 'react';
import DesignLab from './components/DesignLab';

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const SHOPIFY_URL = "https://amaviroyal.myshopify.com"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const masterpieces = [
    { title: "The Sovereign Lion", category: "Family Crest", img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800" },
    { title: "Filament Pendant", category: "Jewellery", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800" },
    { title: "House of Dlamini", category: "Family Crest", img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="min-h-screen selection:bg-white selection:text-purple-900 bg-[#2d0a4e] text-white">
      {/* Sovereign Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-10 py-6 flex justify-between items-center bg-purple-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center transition-all duration-700 hover:rotate-45 shadow-lg overflow-hidden">
             <img src="https://lh3.googleusercontent.com/d/1vS8C-v0R6q2O_Ld0R4G0O-Z3G2O-Z3G2" alt="Amavi Logo" className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm lg:text-xl tracking-[0.3em] font-bold">AMAVI ROYAL</span>
            <span className="text-[6px] lg:text-[7px] text-white/60 tracking-[0.6em] uppercase font-bold">AI-First Design Lab</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12">
          <a href="#philosophy" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors">Philosophy</a>
          <a href="#chapters" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors">The Chapters</a>
          <a href="#gallery" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors">Gallery</a>
          <a href={SHOPIFY_URL} target="_blank" className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors">Boutique</a>
          <button onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 bg-white text-purple-950 text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-purple-100 transition-all rounded-full shadow-2xl">
            Synthesis
          </button>
        </div>
      </nav>

      {/* 1. HERO */}
      <header className="relative min-h-screen flex items-center pt-20 px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-white/20 rounded-full text-[8px] font-bold text-white uppercase tracking-[0.5em] mb-12 bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
              Sovereign Identity
            </div>
            <h1 className="text-6xl md:text-8xl font-display mb-12 leading-[1.05] text-white">
              Crests of <br />
              <span className="text-white opacity-80 italic">Eternity.</span>
            </h1>
            <p className="text-white/60 max-w-lg text-xl font-light leading-relaxed tracking-wide mb-14">
              Where surname heritage meets generative mathematics. Forging ancestral 20x20cm family crests in the heart of the Sovereign realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={() => document.getElementById('consultation')?.scrollIntoView({behavior: 'smooth'})} className="px-12 py-6 bg-white text-purple-950 text-[10px] font-bold uppercase tracking-[0.4em] hover:scale-105 transition-all rounded-2xl shadow-2xl">
                Invoke Design
              </button>
              <button onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth'})} className="px-12 py-6 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white/5 transition-all rounded-2xl">
                View Masterpieces
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
             <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/20 bg-white flex items-center justify-center p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1vS8C-v0R6q2O_Ld0R4G0O-Z3G2O-Z3G2" 
                  alt="Amavi Royal Crest" 
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-12 text-center w-full">
                   <p className="text-purple-950/40 text-[8px] uppercase tracking-[0.6em] font-bold mb-2">Primary Asset</p>
                   <h2 className="text-purple-950 font-display text-2xl uppercase">The Neo-Classical Filament</h2>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* 2. THE PHILOSOPHY */}
      <section id="philosophy" className="py-40 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-10 text-center">
          <h2 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.6em] mb-12">The Philosophy</h2>
          <p className="text-3xl lg:text-5xl font-display leading-tight mb-16 italic">
            "Heritage is not a relic of the past, but a blueprint for the future."
          </p>
          <div className="grid md:grid-cols-2 gap-20 text-left">
            <div>
              <h4 className="font-display text-xl mb-6">Generative Ancestry</h4>
              <p className="text-white/60 font-light leading-relaxed">
                By processing centuries of heraldic symbolism through our Sovereign GDA, we decode the visual DNA of your surname into physical form.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl mb-6">Micro-Lattice Precision</h4>
              <p className="text-white/60 font-light leading-relaxed">
                Our "Neo-Classical Filament" technique prints at a 0.01μ resolution, allowing for structural complexity impossible for the human hand alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE LAB SECTION */}
      <main id="consultation" className="relative px-8 py-40 max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.6em] mb-4">The Synthesis Lab</h2>
          <h3 className="text-5xl font-display text-white">Manifest Your Legacy</h3>
          <p className="text-white/40 mt-6 text-xs uppercase tracking-widest font-bold">20cm x 20cm Ancestral Bas-Reliefs</p>
        </div>
        <DesignLab />
      </main>

      {/* 4. THE GALLERY */}
      <section id="gallery" className="py-40 bg-purple-950/30">
        <div className="max-w-7xl mx-auto px-10">
          <header className="mb-20">
             <h2 className="text-[10px] font-bold text-white/50 uppercase tracking-[0.6em] mb-4">The Gallery</h2>
             <h3 className="text-4xl font-display text-white">Past Masterpieces</h3>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            {masterpieces.map((item, idx) => (
              <div key={idx} className="group relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-white/5 border border-white/10 transition-all hover:border-white/30">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <span className="text-white/40 text-[9px] uppercase tracking-widest block mb-2">{item.category}</span>
                   <h4 className="text-2xl font-display text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAPTERS */}
      <section id="chapters" className="py-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Heraldry', icon: '🏛️', desc: 'Decoding lineage into unique 3D identifiers for high-impact presence.' },
              { title: 'Jewellery', icon: '💎', desc: 'Platinum filaments designed to mirror the soul of the wearer.' },
              { title: 'Crests', icon: '🛡️', desc: 'Museum-grade 20cm x 20cm bas-reliefs forged from your ancestral surname.' }
            ].map(ch => (
              <div key={ch.title} className="bg-white p-12 rounded-[3rem] text-purple-950 shadow-2xl transition-all hover:-translate-y-4">
                <span className="text-4xl mb-8 block">{ch.icon}</span>
                <h4 className="text-2xl font-display mb-6">{ch.title}</h4>
                <p className="text-purple-900/60 text-sm font-light leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER / INVITATION */}
      <footer id="invitation" className="relative py-40 px-10 border-t border-white/10 bg-purple-950/20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl md:text-6xl font-display text-white mb-12">Forge your future.</h3>
          
          {isSubmitted ? (
             <div className="bg-white p-12 rounded-[3rem] text-purple-950 animate-in zoom-in-95">
                <h4 className="font-display text-2xl mb-2">Request Transmitted</h4>
                <p className="text-purple-900/60 text-xs uppercase tracking-widest font-bold">Provenance verification in progress.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input required type="text" placeholder="Full Name / House Name" className="w-full bg-white/10 border border-white/20 px-8 py-6 rounded-3xl outline-none focus:bg-white focus:text-purple-950 transition-all text-white" />
              <button type="submit" className="w-full bg-white text-purple-950 py-8 rounded-[2rem] text-[10px] font-bold uppercase tracking-[0.6em] shadow-2xl hover:bg-purple-50 transition-all active:scale-95">
                Submit Audience Request
              </button>
            </form>
          )}

          <div className="mt-40 flex flex-col items-center gap-8">
            <div className="w-12 h-12 bg-white flex items-center justify-center">
               <img src="https://lh3.googleusercontent.com/d/1vS8C-v0R6q2O_Ld0R4G0O-Z3G2O-Z3G2" alt="Amavi Mini" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">
               <a href="#" className="hover:text-white transition-colors">IP Rights</a>
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-white/20 text-[8px] uppercase tracking-[1em]">Amavi Royal &copy; 2024. Sovereign Heritage.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
