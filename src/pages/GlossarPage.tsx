import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { GLOSSAR_DATA } from '../data/glossar';
import TrustBox from '../components/TrustBox';
import CitationBox from '../components/CitationBox';
import SeoHead from '../components/SeoHead';

export default function GlossarPage() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Alle');

  const categories = ['Alle', 'Arbeitsrecht', 'Krankenkasse & SGB V', 'Rehabilitation & BEM', 'Medizin & Praxis'];

  const filteredEntries = useMemo(() => {
    return GLOSSAR_DATA.filter((e) => {
      const matchSearch =
        e.term.toLowerCase().includes(search.toLowerCase()) ||
        e.shortDef.toLowerCase().includes(search.toLowerCase()) ||
        e.fullDef.toLowerCase().includes(search.toLowerCase()) ||
        (e.norm && e.norm.toLowerCase().includes(search.toLowerCase()));

      const matchCat = selectedCat === 'Alle' || e.category === selectedCat;

      return matchSearch && matchCat;
    });
  }, [search, selectedCat]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      <SeoHead 
        title="Fachglossar Teilkrankschreibung: Arbeitsrecht & Medizin"
        description="Definitionen, Fachbegriffe und Rechtsbegriffe rund um die Teilarbeitsunfähigkeit und stufenweise Wiedereingliederung."
        path="/glossar"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Fachglossar A-Z</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            Rechtslexikon &amp; Definitionen
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 mb-4">
            Fachglossar A–Z
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Die wichtigsten Rechtsbegriffe, Paragraphen und Definitionen rund um Arbeitsunfähigkeit, Krankengeld und Wiedereingliederung verständlich erklärt.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Begriff oder Paragraph suchen (z. B. Entgeltfortzahlung, Hamburger Modell, § 74, BEM)..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-base text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
                  selectedCat === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredEntries.map((item) => (
            <div
              key={item.term}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  {item.norm && (
                    <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.norm}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-black text-slate-950 mb-2">
                  {item.term}
                </h2>

                <p className="text-sm font-semibold text-slate-800 mb-3 leading-snug">
                  {item.shortDef}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.fullDef}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Box */}
        <TrustBox />

        {/* Citation Box */}
        <CitationBox pageTitle="Fachglossar zur Arbeitsunfähigkeit (A-Z)" urlPath="/glossar" />
      </div>
    </div>
  );
}
