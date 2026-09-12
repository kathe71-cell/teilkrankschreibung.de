import { useState } from 'react';
import { CheckCircle2, Bookmark, Clock } from 'lucide-react';
import { RATGEBER_ARTICLES } from '../data/ratgeber';
import TrustBox from '../components/TrustBox';
import CitationBox from '../components/CitationBox';

export default function RatgeberPage() {
  const [activeSlug, setActiveSlug] = useState<string>(RATGEBER_ARTICLES[0].slug);

  const currentArticle = RATGEBER_ARTICLES.find((a) => a.slug === activeSlug) || RATGEBER_ARTICLES[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Ratgeber &amp; Rechtslage</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            Fachbibliothek &amp; Rechtskompass
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 mb-4">
            Rechtliche Grundlagen &amp; Fachratgeber
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Detaillierte juristische Auswertungen zu Teilarbeitsunfähigkeit, stufenweiser Wiedereingliederung (§ 74 SGB V), Entgeltfortzahlung und Schutzvorschriften.
          </p>
        </div>

        {/* Layout: Sidebar Navigation + Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Nav / TOC (4 Cols) */}
          <aside className="lg:col-span-4 space-y-2 no-print">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">
              Ratgeber-Themenübersicht
            </h2>
            {RATGEBER_ARTICLES.map((art) => {
              const isSelected = art.slug === activeSlug;
              return (
                <button
                  key={art.slug}
                  type="button"
                  onClick={() => {
                    setActiveSlug(art.slug);
                    window.scrollTo({ top: 200, behavior: 'smooth' });
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500'
                      : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-semibold text-emerald-800">{art.category}</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>
                  <h3 className={`text-sm font-bold leading-snug ${isSelected ? 'text-slate-950' : 'text-slate-700'}`}>
                    {art.title}
                  </h3>
                </button>
              );
            })}
          </aside>

          {/* Active Article Viewer (8 Cols) */}
          <article className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3 pb-4 border-b border-slate-100">
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                {currentArticle.category}
              </span>
              <span>•</span>
              <span>{currentArticle.readTime}</span>
              <span>•</span>
              <span>Geprüft: {currentArticle.updatedAt}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              {currentArticle.title}
            </h2>

            {/* Lead Summary */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
              {currentArticle.summary}
            </p>

            {/* Key Takeaways Box */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 mb-8">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-emerald-700" />
                Kernfakten im Überblick
              </h3>
              <ul className="space-y-2">
                {currentArticle.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-8 text-slate-800 text-sm sm:text-base leading-relaxed">
              {currentArticle.content.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-950 pt-2 border-t border-slate-100">
                    {sec.heading}
                  </h3>
                  <p className="text-slate-700">{sec.text}</p>
                  {sec.subsections?.map((sub, sIdx) => (
                    <div key={sIdx} className="bg-slate-50 border-l-4 border-emerald-600 p-4 rounded-r-xl my-3">
                      <h4 className="font-bold text-sm text-slate-900 mb-1">
                        {sub.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sub.body}
                      </p>
                    </div>
                  ))}
                </section>
              ))}
            </div>

            {/* Article Citation */}
            <CitationBox pageTitle={currentArticle.title} urlPath={`/ratgeber#${currentArticle.slug}`} />
          </article>
        </div>

        {/* Trust Box */}
        <TrustBox />
      </div>
    </div>
  );
}
