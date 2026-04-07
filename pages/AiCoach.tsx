
import React, { useState } from 'react';
import { generateWellnessTip, askAiCoach, generateSessionPlan } from '../services/geminiService';
import { Button } from '../components/Button';
import { ICONS } from '../constants';

type Mode = 'concierge' | 'instructor';

// --- DATA CONSTANTS ---
const EQUIPMENT_OPTIONS = [
  'Mat',
  'Reformer',
  'Reformer with Tower',
  'Full Cadillac',
  'Wunda Chair',
  'Ladder Barrel',
  'Spine Corrector',
  'Jumpboard',
  'Accessories (Magic Circle, Ball, Bands, Weights)'
];

const MOOD_OPTIONS = [
  'Calm & Centered',
  'Energizing',
  'Athletic / Performance',
  'Strength Focused',
  'Mobility & Flexibility',
  'Recovery / Restoration',
  'Challenging & Advanced'
];

const ISSUE_OPTIONS = [
  'Lower back discomfort',
  'Cervical / neck stiffness',
  'Knee sensitivity',
  'Shoulder limitation',
  'Postural imbalance',
  'Diabetes',
  'High stress / fatigue'
];

export const AiCoach: React.FC = () => {
  const [mode, setMode] = useState<Mode>('concierge');
  
  // Concierge State
  const [tip, setTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(false);
  const [conciergeQuestion, setConciergeQuestion] = useState("");
  const [conciergeAnswer, setConciergeAnswer] = useState("");
  const [loadingConcierge, setLoadingConcierge] = useState(false);

  // Instructor Mode State
  const [equipment, setEquipment] = useState<string[]>([]);
  const [mood, setMood] = useState<string>("");
  const [issues, setIssues] = useState<string[]>([]);
  const [customNote, setCustomNote] = useState("");
  const [sessionPlan, setSessionPlan] = useState<string | null>(null);
  const [loadingPlan, setLoadingPlan] = useState(false);

  // --- HANDLERS ---

  const handleGetDailyTip = async () => {
    setLoadingTip(true);
    const result = await generateWellnessTip("motivated", "moderate");
    setTip(result);
    setLoadingTip(false);
  };

  const handleAskConcierge = async () => {
      if(!conciergeQuestion.trim()) return;
      setLoadingConcierge(true);
      const res = await askAiCoach(conciergeQuestion);
      setConciergeAnswer(res);
      setLoadingConcierge(false);
  }

  const toggleSelection = (item: string, list: string[], setList: (l: string[]) => void) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleGeneratePlan = async () => {
    if (equipment.length === 0 || !mood) {
      alert("Please select at least one piece of equipment and a session mood.");
      return;
    }
    setLoadingPlan(true);
    const result = await generateSessionPlan(equipment, mood, issues, customNote);
    setSessionPlan(result);
    setLoadingPlan(false);
  };

  // --- RENDERERS ---

  // Helper to parse inline styles: **bold** and *italic*
  const parseInlineStyles = (text: string) => {
    // Split by ** for bold
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-navy-dark">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="text-gray-600 font-medium italic">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  // Advanced Parser for the Plan output
  const renderPlanOutput = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      
      if (!trimmed) return <div key={idx} className="h-3" />;
      
      // Section Headers (using the prompt's emoji rule or markdown headers)
      if (trimmed.startsWith('---')) {
        return <hr key={idx} className="border-gray-200 my-6" />;
      }

      if (trimmed.startsWith('### ') || (trimmed.toUpperCase() === trimmed && trimmed.length > 5 && (trimmed.includes('PHASE') || trimmed.includes('SESSION')))) {
         const content = trimmed.replace('### ', '').replace(/\*/g, '');
         return (
           <h3 key={idx} className="font-serif text-lg tracking-wide text-navy mt-6 mb-4 font-bold border-l-4 border-orange pl-3 bg-sand-dark/30 py-2">
             {content}
           </h3>
         );
      }

      // Exercise Headers (Bold lines starting with emoji usually)
      if (trimmed.startsWith('**') && trimmed.endsWith('**') && (trimmed.includes('🧘') || trimmed.length < 50)) {
         return (
             <div key={idx} className="font-sans text-base text-navy font-bold mt-4 mb-1">
                 {parseInlineStyles(trimmed)}
             </div>
         );
      }

      // Teaching Focus / Breath Pattern headers
      if (trimmed.includes('Teaching Focus') || trimmed.includes('Breath Pattern') || trimmed.includes('Why this matters')) {
          // Check if it's strictly a sub-header line
          if (trimmed.length < 30) {
              return <h4 key={idx} className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-3 mb-1">{trimmed.replace(/\*/g, '')}</h4>;
          }
      }

      // List Items
      if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
        return (
            <li key={idx} className="ml-0 pl-4 text-charcoal/90 mb-1 leading-relaxed list-none relative text-sm">
                <span className="absolute left-0 text-orange">•</span>
                {parseInlineStyles(trimmed.replace(/^[-•]\s*/, ''))}
            </li>
        );
      }
      
      if (trimmed.startsWith('🌬️')) {
          return (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 italic mt-1">
                  <span>{trimmed}</span>
              </div>
          )
      }

      // Safety / Instructor Note Boxes
      if (trimmed.startsWith('👉') || trimmed.startsWith('⚠️')) {
          const isWarning = trimmed.startsWith('⚠️');
          return (
            <div key={idx} className={`p-4 rounded-lg border-l-4 my-4 text-sm ${isWarning ? 'bg-red-50 border-red-400 text-red-900' : 'bg-navy/5 border-navy text-navy'}`}>
                <p className="font-medium">{parseInlineStyles(trimmed)}</p>
            </div>
          );
      }

      // Standard Paragraphs
      return (
          <p key={idx} className="text-charcoal leading-relaxed mb-2 text-sm">
              {parseInlineStyles(trimmed)}
          </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-sand pb-24 px-6 pt-8">
      
      {/* Mode Switcher */}
      <div className="flex bg-white p-1 rounded-xl shadow-sm mb-8 sticky top-4 z-30 border border-gray-100">
        <button 
          onClick={() => setMode('concierge')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${mode === 'concierge' ? 'bg-navy text-white shadow-md' : 'text-gray-400 hover:text-navy'}`}
        >
          Concierge
        </button>
        <button 
          onClick={() => setMode('instructor')}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${mode === 'instructor' ? 'bg-navy text-white shadow-md' : 'text-gray-400 hover:text-navy'}`}
        >
          Instructor Mode
        </button>
      </div>

      {mode === 'concierge' ? (
        <div className="animate-[fadeIn_0.3s_ease-out]">
            <h1 className="font-serif text-3xl text-charcoal mb-2">AI Concierge</h1>
            <p className="text-gray-500 mb-8">Your personalized wellness intelligence.</p>

            {/* Daily Insight Card */}
            <div className="bg-navy text-white p-6 rounded-2xl shadow-lg mb-8 relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="font-serif text-xl mb-4 flex items-center gap-2">
                        {ICONS.FIRE} Daily Insight
                    </h2>
                    {tip ? (
                    <p className="font-sans text-lg leading-relaxed italic opacity-90">"{tip}"</p>
                    ) : (
                    <div className="text-center py-4">
                        <Button onClick={handleGetDailyTip} variant="ghost" className="text-white bg-white/20 hover:bg-white/30 border border-white/20">
                        {loadingTip ? 'Connecting...' : 'Reveal Today\'s Wisdom'}
                        </Button>
                    </div>
                    )}
                </div>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            </div>

            {/* Ask Question Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-serif text-lg mb-4 text-charcoal">Ask the Labs</h3>
                <textarea
                    value={conciergeQuestion}
                    onChange={(e) => setConciergeQuestion(e.target.value)}
                    placeholder="e.g., How can I modify a plank for wrist pain?"
                    className="w-full p-3 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-navy mb-4 text-sm"
                    rows={3}
                />
                <Button onClick={handleAskConcierge} fullWidth disabled={loadingConcierge}>
                    {loadingConcierge ? 'Thinking...' : 'Ask Coach'}
                </Button>
                
                {conciergeAnswer && (
                    <div className="mt-6 p-4 bg-sand rounded-lg border border-navy/20">
                        <p className="text-sm text-charcoal leading-relaxed">{conciergeAnswer}</p>
                    </div>
                )}
            </div>
        </div>
      ) : (
        <div className="animate-[fadeIn_0.3s_ease-out]">
            <div className="mb-6">
                <h1 className="font-serif text-2xl text-charcoal mb-1">Session Planner</h1>
                <p className="text-[10px] text-orange font-bold uppercase tracking-widest bg-orange/10 inline-block px-2 py-1 rounded">Instructor Grade • Beta</p>
            </div>

            {!sessionPlan ? (
            <div className="space-y-8 pb-10">
                
                {/* Section 1: Equipment */}
                <section>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">1. Select Apparatus</h3>
                    <div className="flex flex-wrap gap-2">
                        {EQUIPMENT_OPTIONS.map(item => (
                            <button
                                key={item}
                                onClick={() => toggleSelection(item, equipment, setEquipment)}
                                className={`px-3 py-2 text-xs rounded-md border transition-all duration-200 
                                ${equipment.includes(item) 
                                    ? 'bg-navy text-white border-navy shadow-md' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-navy/50'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Section 2: Mood */}
                <section>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">2. Session Intent</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {MOOD_OPTIONS.map(m => (
                            <button
                                key={m}
                                onClick={() => setMood(m)}
                                className={`px-4 py-3 text-sm rounded-lg border text-left flex justify-between items-center transition-all duration-200
                                ${mood === m 
                                    ? 'bg-orange/10 border-orange text-navy-dark font-medium shadow-inner' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                            >
                                {m}
                                {mood === m && <span className="text-orange">●</span>}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Section 3: Issues */}
                <section>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">3. Considerations & Issues</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {ISSUE_OPTIONS.map(issue => (
                            <button
                                key={issue}
                                onClick={() => toggleSelection(issue, issues, setIssues)}
                                className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200
                                ${issues.includes(issue)
                                    ? 'bg-red-50 text-red-800 border-red-200 font-medium'
                                    : 'bg-white text-gray-500 border-gray-200'}`}
                            >
                                {issue}
                            </button>
                        ))}
                    </div>
                    <textarea
                        value={customNote}
                        onChange={(e) => setCustomNote(e.target.value)}
                        placeholder="Additional notes (e.g., 'Focus on scapular stability' or 'Client is recovering from ankle sprain')"
                        className="w-full p-3 rounded-lg bg-white border border-gray-200 focus:ring-1 focus:ring-navy text-sm shadow-sm placeholder:text-gray-300"
                        rows={3}
                    />
                </section>

                <div className="pt-4">
                    <Button 
                        onClick={handleGeneratePlan} 
                        fullWidth 
                        size="lg" 
                        disabled={loadingPlan || equipment.length === 0 || !mood}
                        className="shadow-xl shadow-navy/20"
                    >
                        {loadingPlan ? (
                            <span className="flex items-center gap-2">
                                <span className="animate-spin">⚡</span> Designing Session...
                            </span>
                        ) : 'GENERATE SESSION PLAN'}
                    </Button>
                    <p className="text-center text-[10px] text-gray-400 mt-3">
                        Generates a professional structure based on CoreKaya methodology.
                    </p>
                </div>
            </div>
            ) : (
                <div className="animate-[slideUp_0.5s_ease-out]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Header for Document */}
                        <div className="bg-navy p-4 flex justify-between items-center sticky top-0 z-10 border-b border-white/10">
                            <div>
                                <h2 className="text-white font-serif text-lg tracking-wide">Session Plan</h2>
                                <p className="text-white/50 text-[10px] uppercase tracking-widest">Digital Instructor Copy</p>
                            </div>
                            <button 
                                onClick={() => setSessionPlan(null)}
                                className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded text-xs transition-colors"
                            >
                                New Plan
                            </button>
                        </div>
                        
                        {/* Document Content */}
                        <div className="p-6 md:p-8 bg-white min-h-[60vh]">
                             {/* Paper texture overlay effect */}
                             <div className="absolute inset-0 bg-[#fffdf5] opacity-50 pointer-events-none mix-blend-multiply"></div>
                             
                             <div className="relative z-0">
                                {renderPlanOutput(sessionPlan)}
                             </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
                             <Button onClick={() => setSessionPlan(null)} variant="outline" fullWidth size="sm">
                                 Discard
                             </Button>
                             <Button onClick={() => window.print()} variant="primary" fullWidth size="sm">
                                 Save / Print
                             </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      )}
    </div>
  );
};
