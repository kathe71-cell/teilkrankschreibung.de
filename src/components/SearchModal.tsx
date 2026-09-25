import { useState, useEffect, useRef } from 'react';
import { Search, X, Activity, ChevronRight } from 'lucide-react';
import { DIAGNOSEN_DATA } from '../data/diagnosen';
import { GLOSSAR_DATA } from '../data/glossar';

interface SearchItem {
  id: string;
  title: string;
  category: 'Rechner & Tools' | 'Diagnosen (ICD-10)' | 'Recht & SGB V Glossar' | 'Ratgeber';
  description: string;
  path: string;
  tags: string[];
}

const STATIC_ITEMS: SearchItem[] = [
  {
    id: 'rechner',
    title: 'Teil-AU & Gehaltsrechner',
    category: 'Rechner & Tools',
    description: 'Berechne Gehalt, Krankengeld, Hinzuverdienst und Arbeitszeiten bei stufenweiser Wiedereingliederung.',
    path: '/rechner',
    tags: ['rechner', 'gehalt', 'krankengeld', 'hinzuverdienst', 'stufenplan', 'stunden', 'arbeitszeit']
  },
  {
    id: 'ratgeber',
    title: 'Ratgeber Stufenweise Wiedereingliederung',
    category: 'Ratgeber',
    description: 'Voraussetzungen, Fristen, Ablehnungsrechte des Arbeitgebers und Schritt-für-Schritt-Anleitung.',
    path: '/ratgeber',
    tags: ['hamburger modell', 'stufenplan', 'voraussetzungen', 'arbeitgeber', 'ablehnung', 'fristen', 'krankenkasse']
  },
  {
    id: 'diagnosen-overview',
    title: 'Diagnosen & ICD-10 Katalog',
    category: 'Diagnosen (ICD-10)',
    description: 'Übersicht medizinischer Diagnosen mit Belastbarkeitsprofilen (Burnout, LWS, Long-COVID, Herzerkrankungen).',
    path: '/diagnosen',
    tags: ['icd-10', 'diagnosen', 'burnout', 'lws', 'long covid', 'depression', 'orthopädie', 'herz']
  },
  {
    id: 'glossar-overview',
    title: 'SGB V & BEM Rechtliches Glossar',
    category: 'Recht & SGB V Glossar',
    description: 'Fachbegriffe wie BEM (§ 167 SGB IX), § 74 SGB V, § 28 SGB IX, Krankengeld und Entgeltfortzahlung.',
    path: '/glossar',
    tags: ['sgb v', 'sgb ix', 'bem', 'betriebliches eingliederungsmanagement', 'krankengeld', 'paragraph', 'gesetz']
  },
  {
    id: 'faq',
    title: 'Häufig gestellte Fragen (FAQ)',
    category: 'Ratgeber',
    description: 'Antworten zu Gehalt, Urlaub, Kündigungsschutz und Versicherung während der Teil-Arbeitsunfähigkeit.',
    path: '/faq',
    tags: ['faq', 'urlaub', 'kündigung', 'versicherung', 'fragen', 'gehalt']
  }
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build combined items from static items, diagnosen, and glossar
  const dynamicDiagnosen: SearchItem[] = (DIAGNOSEN_DATA || []).map((d) => ({
    id: `diag-${d.icd}`,
    title: `${d.icd} - ${d.title}`,
    category: 'Diagnosen (ICD-10)',
    description: d.description,
    path: `/diagnosen#${d.icd.toLowerCase().replace('.', '')}`,
    tags: [d.icd, d.category, d.legalRelevance, ...d.workAdaptation]
  }));

  const dynamicGlossar: SearchItem[] = (GLOSSAR_DATA || []).map((g, idx) => ({
    id: `gloss-${idx}`,
    title: g.term,
    category: 'Recht & SGB V Glossar',
    description: g.shortDef || g.fullDef,
    path: '/glossar',
    tags: [g.term, g.norm || '', g.category]
  }));

  const allItems = [...STATIC_ITEMS, ...dynamicDiagnosen, ...dynamicGlossar];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 6)
    : allItems.filter(item => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags.some(tag => tag.toLowerCase().includes(q))
        );
      }).slice(0, 15);

  const handleSelect = (path: string) => {
    window.location.href = path;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white text-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Nach ICD-10 (z.B. F43.2), Paragraph (§ 74 SGB V, BEM) oder Rechner suchen..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded font-semibold transition-colors"
            >
              Löschen
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto divide-y divide-slate-100 flex-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.path)}
                className="py-3 px-3 hover:bg-emerald-50/70 rounded-xl cursor-pointer transition-colors group flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md uppercase tracking-wider group-hover:bg-emerald-200 group-hover:text-emerald-900 transition-colors">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500">
              <Activity className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold">Keine Ergebnisse zu "{query}" gefunden.</p>
              <p className="text-xs text-slate-400 mt-1">Versuche ICD-Codes wie „F43.2“, Paragraphen wie „§ 74 SGB V“ oder Begriffe wie „Hamburger Modell“.</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-3 bg-slate-900 text-slate-400 text-xs flex justify-between items-center border-t border-slate-800">
          <div className="flex items-center gap-2">
            <span className="bg-slate-800 text-emerald-400 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono">⌘K</span>
            <span>Öffnen / Schließen</span>
          </div>
          <div className="text-[11px] text-slate-400">
            * SGB V &amp; BEM Fachdatenbank • clientseitig
          </div>
        </div>
      </div>
    </div>
  );
}
