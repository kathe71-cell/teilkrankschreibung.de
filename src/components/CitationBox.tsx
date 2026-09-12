import { useState } from 'react';
import { Quote, Copy, Check } from 'lucide-react';

interface CitationProps {
  pageTitle?: string;
  urlPath?: string;
}

export default function CitationBox({
  pageTitle = 'Teilkrankschreibung: Rechtslage, Rechner & Arbeitsrecht',
  urlPath = ''
}: CitationProps) {
  const [copied, setCopied] = useState(false);
  const fullUrl = `https://teilkrankschreibung.de${urlPath}`;
  const citationText = `teilkrankschreibung.de Fachredaktion (2026). ${pageTitle}. Abgerufen von ${fullUrl} (Stand: September 2026).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 my-8 no-print">
      <div className="flex items-center justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Quote className="w-4 h-4 text-emerald-600" />
          <span>Zitation (APA / Harvard Format)</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-md transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Kopiert!' : 'Zitation kopieren'}</span>
        </button>
      </div>
      <p className="text-xs sm:text-sm text-slate-700 font-mono bg-slate-50 p-3 rounded-lg border border-slate-200/70 select-all leading-relaxed">
        {citationText}
      </p>
      <p className="text-[11px] text-slate-400 mt-2">
        Zur Verwendung in juristischen Gutachten, Fachartikeln, Kanzleiblogs und universitären Arbeiten.
      </p>
    </div>
  );
}
