import { Link } from 'react-router-dom';
import { ShieldCheck, BookOpen, Calculator, Activity, HelpCircle, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-10 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-lg">
                §
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                teilkrank<span className="text-emerald-400">schreibung</span>.de
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Unabhängiges deutsches Fach- und Informationsportal zur rechtlichen Einordnung der Teilarbeitsunfähigkeit, stufenweisen Wiedereingliederung nach dem Hamburger Modell (§ 74 SGB V) und Lohnfortzahlungsmodellen.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Faktenbasiert nach SGB V, EntgFG und AU-Richtlinie des G-BA</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Themen &amp; Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rechner" className="hover:text-white transition-colors flex items-center gap-2">
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Teil-AU Rechner</span>
                </Link>
              </li>
              <li>
                <Link to="/ratgeber" className="hover:text-white transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ratgeber &amp; Rechtslage</span>
                </Link>
              </li>
              <li>
                <Link to="/diagnosen" className="hover:text-white transition-colors flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Diagnosen-Kompass</span>
                </Link>
              </li>
              <li>
                <Link to="/glossar" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fachglossar A-Z</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors flex items-center gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Häufige Fragen (FAQ)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches & Vertrauen */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              Recht &amp; Transparenz
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/impressum" className="hover:text-white transition-colors">
                  &rarr; Impressum (§ 5 DDG)
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white transition-colors">
                  &rarr; Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/rechner-embed" className="hover:text-white transition-colors">
                  &rarr; Rechner für Webmaster (Embed)
                </Link>
              </li>
              <li>
                <a href="/feed.xml" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  &rarr; RSS-Feed (Fast-Indexing)
                </a>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  &rarr; AI Data Feed (llms.txt)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar / Fakten-Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 teilkrankschreibung.de · Alle Angaben ohne Gewähr. Keine Rechtsberatung im Sinne des RDG.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
              § 5 DDG konform
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
              Zero-CDN Fonts
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400">
              Vercel Web Analytics (Cookielos)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 font-medium">
              100 % Werbefrei
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
