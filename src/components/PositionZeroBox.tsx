import { useState } from 'react';
import { BookmarkCheck, Copy, Check, Scale } from 'lucide-react';

export default function PositionZeroBox() {
  const [copied, setCopied] = useState(false);
  const definitionText = "Eine Teilkrankschreibung (Teilarbeitsunfähigkeit) bezeichnet die medizinisch attestierte Minderung der individuellen Leistungsfähigkeit, bei der ein Arbeitnehmer nur noch stundenweise (z. B. 25 %, 50 % oder 75 %) arbeiten kann. Im geltenden deutschen Recht (§ 44 SGB V) gilt das Alles-oder-Nichts-Prinzip; als stufenweise Wiedereingliederung existiert das Hamburger Modell (§ 74 SGB V).";

  const handleCopy = () => {
    navigator.clipboard.writeText(definitionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-white border-2 border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden my-8">
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full -mr-12 -mt-12 pointer-events-none opacity-50" />
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black text-sm">
            <Scale className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            Definition nach deutschem Arbeits- &amp; Sozialrecht
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Kopiert!' : 'Definition kopieren'}</span>
        </button>
      </div>

      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
        Was versteht man unter einer Teilkrankschreibung?
      </h2>

      <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
        Eine <strong className="font-bold text-slate-950">Teilkrankschreibung (Teilarbeitsunfähigkeit)</strong> bezeichnet die medizinisch attestierte Minderung der individuellen Leistungsfähigkeit, bei der ein Arbeitnehmer nur noch stundenweise (z. B. 25 %, 50 % oder 75 %) arbeiten kann. Im geltenden deutschen Recht (<span className="font-mono text-emerald-800 bg-emerald-50 px-1 rounded">§ 44 SGB V</span>) gilt das Alles-oder-Nichts-Prinzip; als stufenweise Wiedereingliederung existiert das Hamburger Modell (<span className="font-mono text-emerald-800 bg-emerald-50 px-1 rounded">§ 74 SGB V</span>).
      </p>

      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
        <span className="flex items-center gap-1.5">
          <BookmarkCheck className="w-4 h-4 text-emerald-600" />
          Zitierfähige Normbasis: SGB V, EntgFG, AU-RL
        </span>
        <span>•</span>
        <span>Stand: September 2026</span>
      </div>
    </section>
  );
}
