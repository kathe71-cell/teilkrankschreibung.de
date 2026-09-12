import { useState, useMemo } from 'react';
import { Search, Activity, Check, Filter } from 'lucide-react';
import { DIAGNOSEN_DATA } from '../data/diagnosen';
import TrustBox from '../components/TrustBox';
import CitationBox from '../components/CitationBox';

export default function DiagnosenPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const categories = ['Alle', 'Psychosomatik & Nervensystem', 'Orthopädie & Bewegungsapparat', 'Innere Medizin & Onkologie', 'Post-Viral & Chronisch'];

  const filteredDiagnosen = useMemo(() => {
    return DIAGNOSEN_DATA.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.icd.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.workAdaptation.some((a) => a.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat = selectedCategory === 'Alle' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Diagnosen-Kompass</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            ICD-10 Referenzkatalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 mb-4">
            Diagnosen- &amp; Indikations-Kompass
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Strukturierte Übersicht typischer Diagnosen, bei denen eine stufenweise Wiedereingliederung (§ 74 SGB V) oder reduzierte Arbeitsbelastung medizinisch empfohlen wird.
          </p>
        </div>

        {/* Instant Search Bar (Hero Instant Finder) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              data-svsearch
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ICD-Code oder Diagnose eingeben (z. B. F43, M54, Burnout, Bandscheibe, Post-COVID)..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-base text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-3.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
              >
                Zurücksetzen
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Fachbereich:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <span>{filteredDiagnosen.length} Treffer gefunden</span>
          <span className="font-mono">Klassifikation nach ICD-10-GM</span>
        </div>

        {/* Diagnosen Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredDiagnosen.map((item) => (
            <div
              key={item.icd}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="font-mono text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    ICD-10: {item.icd}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <h2 className="text-xl font-black text-slate-950 mb-2">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Capacity badge */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-0.5">
                    Empfohlene Belastungserprobung
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-950">
                    {item.typicalCapacity}
                  </span>
                </div>

                {/* Work Adaptations */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-slate-800 block mb-2">
                    Notwendige Arbeitsplatzanpassungen:
                  </span>
                  <ul className="space-y-1.5">
                    {item.workAdaptation.map((adapt, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{adapt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legal Reference Footer */}
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                <span className="font-bold text-slate-700 block mb-0.5">Rechtlicher Hinweis:</span>
                {item.legalRelevance}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDiagnosen.length === 0 && (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-10">
            <Activity className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">Keine Diagnose gefunden</h3>
            <p className="text-xs text-slate-500 mb-4">
              Für den Suchbegriff „{searchTerm}“ liegen keine Einträge vor.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Alle');
              }}
              className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}

        {/* Trust Box */}
        <TrustBox />

        {/* Citation Box */}
        <CitationBox pageTitle="Diagnosen- & Indikations-Kompass (ICD-10)" urlPath="/diagnosen" />
      </div>
    </div>
  );
}
