import { Link } from 'react-router-dom';
import { 
  Calculator as CalcIcon, 
  BookOpen, 
  ArrowRight, 
  Scale, 
  CheckCircle2, 
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import PositionZeroBox from '../components/PositionZeroBox';
import TrustBox from '../components/TrustBox';
import CitationBox from '../components/CitationBox';
import Calculator from '../components/Calculator';
import { DIAGNOSEN_DATA } from '../data/diagnosen';
import { RATGEBER_ARTICLES } from '../data/ratgeber';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Editorial Hero Section (Light & High-Contrast) */}
      <section className="bg-white border-b border-slate-200 pt-12 pb-16 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Tag & Legal Reference */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase">
              <Scale className="w-3.5 h-3.5" />
              SGB V · EntgFG · AU-Richtlinie 2026
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
              Unabhängiges deutsches Fachportal
            </span>
          </div>

          {/* Display Headline */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] mb-6">
              Teilkrankschreibung <br />
              <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                Rechtslage, Rechner
              </span> &amp; Arbeitsrecht
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mb-8">
              Das unabhängige Portal zur Teilarbeitsunfähigkeit in Deutschland. Verstehen Sie das geltende 
              <strong className="text-slate-950 font-bold"> Alles-oder-Nichts-Prinzip</strong>, die stufenweise Wiedereingliederung nach dem 
              <strong className="text-slate-950 font-bold"> Hamburger Modell (§ 74 SGB V)</strong> und berechnen Sie Ihre Ansprüche im interaktiven Simulator.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#rechner"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-base shadow-md transition-all"
              >
                <CalcIcon className="w-5 h-5" />
                <span>Zum Teil-AU Rechner</span>
              </a>
              <Link
                to="/ratgeber"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-900 font-bold text-base transition-all border border-slate-300/80"
              >
                <BookOpen className="w-5 h-5 text-slate-600" />
                <span>Rechtslage &amp; Ratgeber</span>
              </Link>
            </div>
          </div>

          {/* Editorial Key Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono block">Status Quo</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono block mt-0.5">§ 74 SGB V</span>
              <span className="text-xs text-slate-600 mt-1 block">Hamburger Modell</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono block">Krankengeld</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono block mt-0.5">70 % / 90 %</span>
              <span className="text-xs text-slate-600 mt-1 block">Höchstanspruch nach § 47</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono block">Entgeltfortzahlung</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono block mt-0.5">6 Wochen</span>
              <span className="text-xs text-slate-600 mt-1 block">100 % Arbeitgeberlohn</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono block">Reform-Modell</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono block mt-0.5">25 / 50 / 75 %</span>
              <span className="text-xs text-slate-600 mt-1 block">Skandinavische Teil-AU</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Position-0 Definition Box */}
        <PositionZeroBox />

        {/* Anchor for Rechner */}
        <section id="rechner" className="scroll-mt-24">
          <Calculator />
        </section>

        {/* Bento Grid: 3 Legal Comparison Models */}
        <section className="my-16">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
              Systemvergleich
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
              Die drei Modelle im direkten Vergleich
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Geltende Rechtslage in Deutschland vs. Stufenplan vs. internationale Teilkrankschreibung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Geltendes Recht (DE)</span>
              <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">
                Alles-oder-Nichts-Prinzip
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Arbeitnehmer sind entweder zu 100 % arbeitsfähig oder zu 100 % arbeitsunfähig. Eine stundenweise Krankschreibung im Akutfall ist vertragsärztlich nicht vorgesehen.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Volle Entgeltfortzahlung (Tag 1–42)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Volles Krankengeld ab Woche 7
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  Keine legale Teilarbeit möglich
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow relative">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  Etabliert
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Rehabilitation</span>
              <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">
                Hamburger Modell (§ 74 SGB V)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Stufenweise Belastungserprobung nach längerer Krankheit. Der Arbeitnehmer gilt formal weiterhin als 100 % arbeitsunfähig und bezieht Krankengeld statt Lohn.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 font-medium">
                <li className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Freiwillige Stufenvereinbarung
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Krankengeld oder Übergangsgeld
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Gesetzlicher Unfallschutz (BSG)
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Reformvorschlag</span>
              <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">
                Gesetzliche Teilkrankschreibung
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Gezielte Teil-AU (z. B. 50 %) bereits zu Beginn oder früher im Verlauf. Kombination aus regulärem Arbeitgeberlohn für gearbeitete Stunden und anteiligem Krankengeld.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Vorbild: Schweden &amp; Dänemark
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Höheres Netto als bei Voll-AU
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  Erhalt von Routine &amp; Bindung
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hub-and-Spoke Grid: Top Fallgruppen & Diagnosen */}
        <section className="my-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                ICD-10 Kompass
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                Typische Indikationen für reduzierte Arbeitsfähigkeit
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Krankheitsbilder, bei denen stufenweise Rückkehr oder Teilarbeit medizinisch indiziert ist.
              </p>
            </div>
            <Link
              to="/diagnosen"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
            >
              <span>Alle Diagnosen &amp; ICD-Codes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIAGNOSEN_DATA.slice(0, 6).map((item) => (
              <div
                key={item.icd}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-extrabold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ICD-10: {item.icd}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 font-medium flex items-center justify-between">
                  <span>Restbelastung:</span>
                  <span className="font-bold text-emerald-800">{item.typicalCapacity.split(',')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Guides Section */}
        <section className="my-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                Aus der Fachredaktion
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                Ratgeber zu Arbeitsrecht &amp; Sozialversicherungsrecht
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Fundierte Fachbeiträge mit Paragraphen, Fristen und Praxisempfehlungen.
              </p>
            </div>
            <Link
              to="/ratgeber"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
            >
              <span>Alle Ratgeber anzeigen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RATGEBER_ARTICLES.slice(0, 4).map((art) => (
              <Link
                key={art.slug}
                to={`/ratgeber#${art.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-emerald-800">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {art.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {art.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Fachartikel lesen</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust Box */}
        <TrustBox />

        {/* FAQ Preview Section */}
        <section className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
              Wissensdatenbank
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
              Häufige Fragen zur Teilkrankschreibung
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Die wichtigsten Antworten auf juristische und arbeitsrechtliche Zweifelsfragen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-bold text-base text-slate-900 mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Darf ich trotz Krankschreibung ein paar Stunden arbeiten?</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wer voll krankgeschrieben ist, hat keine Verpflichtung zur Arbeit. Ein eigenmächtiges Arbeiten kann versicherungsrechtliche Risiken bergen und den Anschein erwecken, dass keine Arbeitsunfähigkeit vorliegt. Erlaubt ist Teilarbeit nur im Rahmen eines offiziellen Stufenplans (§ 74 SGB V).
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-bold text-base text-slate-900 mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Kann der Arbeitgeber das Hamburger Modell ablehnen?</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grundsätzlich ja, das Hamburger Modell beruht auf Freiwilligkeit beider Parteien. Eine Ausnahme gilt jedoch für schwerbehinderte oder gleichgestellte Beschäftigte nach § 164 Abs. 4 SGB IX: Hier besteht ein einklagbarer Rechtsanspruch auf leidensgerechte Beschäftigung.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-bold text-base text-slate-900 mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Was passiert mit meinem Urlaub während der Teilarbeit?</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Während der stufenweisen Wiedereingliederung kann kein Erholungsurlaub genommen werden, da der Arbeitnehmer formal arbeitsunfähig ist. Urlaubstage verfallen nicht, sondern bleiben für die Zeit nach vollständiger Genesung erhalten.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h3 className="font-bold text-base text-slate-900 mb-2 flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Bin ich bei Teilarbeit auf dem Weg zur Arbeit unfallversichert?</span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ja. Das Bundessozialgericht (BSG) hat klargestellt, dass Teilnehmende an einer stufenweisen Wiedereingliederung dem Schutz der gesetzlichen Unfallversicherung (BG) unterliegen – sowohl am Tätigkeitsort als auch auf dem Arbeitsweg.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Alle weiteren Fragen im FAQ-Katalog ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Citation Box */}
        <CitationBox pageTitle="Teilkrankschreibung: Rechtslage, Rechner & Arbeitsrecht" urlPath="/" />
      </main>
    </div>
  );
}
