import { ShieldCheck, FileCheck, Landmark, CheckCircle2 } from 'lucide-react';

export default function TrustBox() {
  return (
    <aside className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Fachredaktion
              </span>
              <span className="text-xs font-semibold text-slate-500">Stand: September 2026</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              teilkrankschreibung.de
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Informationen zur Teilarbeitsunfähigkeit auf Basis von SGB V und EntgFG.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Ohne Werbung
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Unabhängiges Portal
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-slate-600">
        <div className="flex items-start gap-2.5">
          <Landmark className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 block">Amtliche Primärquellen</span>
            Fünftes Buch Sozialgesetzbuch (SGB V), Entgeltfortzahlungsgesetz (EntgFG), Neuntes Buch Sozialgesetzbuch (SGB IX).
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <FileCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 block">Medizinische Richtlinien</span>
            Arbeitsunfähigkeits-Richtlinie (AU-RL) des Gemeinsamen Bundesausschusses (G-BA) &amp; Gutachten des SVR Gesundheit.
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 block">Rechtsprechung</span>
            Urteile des Bundesarbeitsgerichts (BAG) &amp; Bundessozialgerichts (BSG zur DGUV-Unfallversicherung).
          </div>
        </div>
      </div>
    </aside>
  );
}
