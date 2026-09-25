import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, BookOpen, Activity, HelpCircle, FileText, Menu, X, ShieldCheck, Search } from 'lucide-react';
import SearchModal from './SearchModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Rechner', href: '/rechner', icon: Calculator },
    { name: 'Ratgeber', href: '/ratgeber', icon: BookOpen },
    { name: 'Diagnosen', href: '/diagnosen', icon: Activity },
    { name: 'Glossar', href: '/glossar', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center font-black text-xl shadow-xs group-hover:scale-105 transition-transform">
              <span>§</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                teilkrank<span className="text-emerald-600">schreibung</span><span className="text-slate-400 font-medium text-sm">.de</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Informationsportal &amp; Rechner · SGB V
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? 'bg-slate-100 text-emerald-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Search */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors border border-slate-200 cursor-pointer"
              title="Suche öffnen (⌘K)"
            >
              <Search className="w-4 h-4 text-emerald-600" />
              <span className="font-mono bg-white text-slate-500 px-1 py-0.2 rounded border border-slate-300">⌘K</span>
            </button>
            <Link
              to="/rechner"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Teil-AU berechnen</span>
            </Link>
          </div>

          {/* Mobile Menu & Search Button */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="min-w-10 min-h-10 flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Suche öffnen"
            >
              <Search className="w-5 h-5 text-emerald-600" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-12 min-h-12 flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Hauptmenü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm mb-2"
          >
            <span className="flex items-center gap-2"><Search className="w-4 h-4 text-emerald-600" /> ICD-10, Paragraph oder Rechner suchen</span>
            <span className="text-xs bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-300 font-mono">⌘K</span>
          </button>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold min-h-12 ${
                  active
                    ? 'bg-emerald-50 text-emerald-800'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <Link
              to="/rechner"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-base min-h-12 shadow-sm"
            >
              <Calculator className="w-5 h-5" />
              <span>Zum Teil-AU Rechner</span>
            </Link>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
