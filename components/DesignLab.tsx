
import React, { useState } from 'react';
import { ProductCategory, DesignState } from '../types';
import { generateDesignConcept, generateDesignImage } from '../services/geminiService';

const SURNAMES_ARCHIVE = {
  "Southern Africa": ["Dlamini", "Nkosi", "Mthembu", "Khoza", "Ndlovu", "Mandela", "Tutu", "Buthelezi", "Khumalo", "Molefe", "Masondo", "Naidoo", "Pillay", "Botha", "Van der Merwe", "De Klerk", "Joubert"],
  "Europe": ["Smith", "Jones", "Williams", "Taylor", "Brown", "Wilson", "Johnson", "Walker", "De Jong", "Jansen", "De Vries", "Van den Berg", "Van Dijk", "Visser", "Smit", "Meijer"],
  "Middle East": ["Al-Maktoum", "Al-Saud", "Al-Nahyan", "Al-Sabah", "Al-Thani", "Mansour", "Haddad", "Khoury", "Saleh"],
  "Chinese": ["Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou"]
};

const DesignLab: React.FC = () => {
  const [state, setState] = useState<DesignState>({
    category: ProductCategory.FAMILY_CREST, // Default to Crest
    prompt: '',
    heritage: 'House of Amavi',
    style: 'Sovereign Minimalist',
    isGenerating: false
  });

  const [loadingStep, setLoadingStep] = useState<string>('');
  const [currentResult, setCurrentResult] = useState<any>(null);
  const [showArchive, setShowArchive] = useState(false);

  const handleGenerate = async () => {
    setState(prev => ({ ...prev, isGenerating: true }));
    setLoadingStep('Consulting Ancestral Records...');
    try {
      const concept = await generateDesignConcept(state.category, state.prompt, state.heritage, state.style);
      setLoadingStep('Forging 3D Bas-Relief...');
      const imageUrl = await generateDesignImage(concept.visualPrompt);
      setCurrentResult({ ...concept, imageUrl });
    } catch (error) {
      alert("The Sovereign GDA is at capacity. Please try again later.");
    } finally {
      setState(prev => ({ ...prev, isGenerating: false }));
      setLoadingStep('');
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Input Side: Pure White Card */}
      <div className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] text-purple-950">
        <header className="mb-10 border-b border-purple-50 pb-8">
          <h3 className="text-[10px] font-bold text-purple-900/40 uppercase tracking-[0.5em] mb-3">Sovereign GDA</h3>
          <h2 className="text-3xl font-display">Design synthesis</h2>
        </header>
        
        <div className="space-y-10">
          <div>
            <label className="block text-[9px] font-bold text-purple-900/30 uppercase tracking-[0.3em] mb-4">Category Selection</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1 bg-purple-50 rounded-2xl">
              {Object.values(ProductCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setState(s => ({ ...s, category: cat }))}
                  className={`py-3 px-2 rounded-xl text-[8px] lg:text-[9px] font-bold transition-all ${
                    state.category === cat ? 'bg-purple-950 text-white shadow-lg scale-[1.02]' : 'text-purple-900/40 hover:text-purple-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[9px] font-bold text-purple-900/30 uppercase tracking-widest">Surname / Lineage</label>
                <button onClick={() => setShowArchive(!showArchive)} className="text-[8px] font-bold text-purple-900 underline uppercase tracking-widest">
                  {showArchive ? 'Close' : 'Royal Archive'}
                </button>
              </div>
              
              {showArchive ? (
                <div className="bg-purple-50 rounded-2xl p-6 max-h-[300px] overflow-y-auto mb-4 border border-purple-100 animate-in fade-in slide-in-from-top-2">
                  {Object.entries(SURNAMES_ARCHIVE).map(([region, names]) => (
                    <div key={region} className="mb-6">
                      <h5 className="text-[8px] font-black text-purple-900/40 uppercase mb-3 border-b border-purple-100 pb-1">{region}</h5>
                      <div className="flex flex-wrap gap-2">
                        {names.map(name => (
                          <button key={name} onClick={() => { setState(s => ({ ...s, heritage: `${name} Lineage` })); setShowArchive(false); }} className="px-3 py-1.5 bg-white border border-purple-100 rounded text-[10px] hover:bg-purple-950 hover:text-white transition-all">{name}</button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <input type="text" className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-6 py-5 outline-none focus:ring-1 focus:ring-purple-950 transition-all text-purple-950" value={state.heritage} placeholder="Enter surname..." onChange={(e) => setState(s => ({ ...s, heritage: e.target.value }))} />
              )}
            </div>

            <div>
              <label className="block text-[9px] font-bold text-purple-900/30 uppercase tracking-widest mb-2">Aesthetic Vision</label>
              <textarea rows={3} className="w-full bg-purple-50 border border-purple-100 rounded-2xl px-6 py-5 outline-none focus:ring-1 focus:ring-purple-950 transition-all text-purple-950 resize-none" placeholder="Add specific legacy symbols or tones..." value={state.prompt} onChange={(e) => setState(s => ({ ...s, prompt: e.target.value }))} />
            </div>
          </div>

          <button onClick={handleGenerate} disabled={state.isGenerating} className="w-full bg-purple-950 text-white font-bold py-8 rounded-[2rem] hover:bg-purple-900 transition-all uppercase tracking-[0.4em] text-[10px] shadow-2xl disabled:opacity-50 active:scale-[0.98]">
            {state.isGenerating ? 'Synthesizing Blueprint...' : 'Forge Artifact'}
          </button>
        </div>
      </div>

      {/* Output Side: White Artifact on Purple */}
      <div className="relative min-h-[600px] flex items-center justify-center">
        {state.isGenerating && (
          <div className="flex flex-col items-center bg-white/5 p-16 lg:p-20 rounded-[4rem] backdrop-blur-3xl border border-white/10 shadow-2xl">
            <div className="w-20 h-20 border-t-2 border-white rounded-full animate-spin mb-8"></div>
            <p className="text-white tracking-[0.4em] uppercase text-[10px] font-bold animate-pulse">{loadingStep}</p>
          </div>
        )}

        {currentResult && !state.isGenerating && (
          <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="rounded-[4rem] overflow-hidden border border-white/20 aspect-square bg-white p-6 shadow-2xl royal-shadow">
              <img src={currentResult.imageUrl} className="w-full h-full object-cover rounded-[3rem] transition-transform duration-[5s] hover:scale-105" alt="AI Design" />
            </div>
            
            <div className="bg-white p-12 rounded-[3.5rem] text-purple-950 shadow-2xl">
              <h3 className="text-2xl lg:text-3xl font-display mb-6">{currentResult.title}</h3>
              <p className="text-purple-900/70 text-sm font-light leading-relaxed italic border-l-2 border-purple-100 pl-6 mb-10">"{currentResult.soulNarrative}"</p>
              
              <div className="grid grid-cols-3 gap-6 text-center border-t border-purple-50 pt-10">
                <div><div className="text-[8px] text-purple-900/40 uppercase mb-2">Substrate</div><div className="text-[11px] font-bold">{currentResult.technicalBlueprint.material}</div></div>
                <div><div className="text-[8px] text-purple-900/40 uppercase mb-2">Precision</div><div className="text-[11px] font-bold">{currentResult.technicalBlueprint.precision}</div></div>
                <div><div className="text-[8px] text-purple-900/40 uppercase mb-2">Weight</div><div className="text-[11px] font-bold">{currentResult.technicalBlueprint.weight}</div></div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                 <button className="flex-1 py-5 text-[9px] font-bold bg-purple-950 text-white rounded-2xl uppercase tracking-[0.3em] hover:bg-purple-900 transition-all shadow-lg">Reserve Blueprint</button>
                 <button className="flex-1 py-5 text-[9px] font-bold border border-purple-100 text-purple-950 rounded-2xl uppercase tracking-[0.3em] hover:bg-purple-50 transition-all">Secure IP</button>
              </div>
            </div>
          </div>
        )}
        
        {!currentResult && !state.isGenerating && (
          <div className="text-center p-20 border-2 border-dashed border-white/10 rounded-[4rem] group transition-all hover:border-white/30">
            <span className="text-5xl opacity-40 block mb-8 transition-transform group-hover:scale-110">🛡️</span>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold">Awaiting Lineage Selection</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignLab;
