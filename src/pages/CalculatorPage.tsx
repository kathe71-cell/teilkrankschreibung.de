import Calculator from '../components/Calculator';
import CitationBox from '../components/CitationBox';
import TrustBox from '../components/TrustBox';
import { Scale } from 'lucide-react';
import SeoHead from '../components/SeoHead';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      <SeoHead 
        title="Teilkrankschreibung Rechner: Entgelt & Krankengeld Simulation"
        description="Hypothetische Simulation des Entgelts und anteiligen Krankengelds bei einer Teilkrankschreibung."
        path="/rechner"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Teil-AU Rechner</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            Berechnung &amp; Simulation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 mb-4">
            Teilkrankschreibungs- &amp; Entgeltrechner
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Simulieren Sie die finanziellen Auswirkungen eines in der Diskussion befindlichen Modells der Teilkrankschreibung.
            <br/><strong className="text-amber-700">Wichtiger Hinweis:</strong> Es handelt sich hierbei um eine hypothetische Reform-Simulation. Im aktuell geltenden deutschen Recht gibt es dieses Kombinationsmodell (Teillohn plus anteiliges Krankengeld) nicht als bestehenden individuellen Anspruch.
          </p>
        </div>

        {/* The Calculator */}
        <Calculator />

        {/* Methodik & Berechnungsgrundlagen */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 my-12 shadow-2xs">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-emerald-600" />
              <h2 className="text-2xl font-black text-slate-900">
                Methodik der hypothetischen Simulation
              </h2>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Die Modellrechnung zeigt, wie sich eine gesetzliche Regelung zur Teilarbeitsunfähigkeit auf Basis der aktuellen Bestimmungen des Entgeltfortzahlungsgesetzes sowie des SGB V rechnerisch auswirken <em>könnte</em>.
            </p>

            <div className="space-y-6 text-sm text-slate-700">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  1. Phase 1: Die ersten 6 Wochen (Entgeltfortzahlung nach § 3 EntgFG)
                </h3>
                <p className="leading-relaxed">
                  Erkrankt ein Arbeitnehmer, so hat er derzeit bis zur Dauer von sechs Wochen Anspruch auf Fortzahlung seines regulären Arbeitsentgelts durch den Arbeitgeber. In einem <em>hypothetischen Reformmodell</em> der Teilkrankschreibung würde der Arbeitgeber den Lohn für die geleisteten Stunden als reguläres Gehalt vergüten und den krankheitsbedingten Ausfallanteil im Rahmen der Entgeltfortzahlung ausgleichen.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  2. Phase 2: Ab der 7. Woche (Krankengeld-Regularien gem. § 47 SGB V)
                </h3>
                <p className="leading-relaxed mb-2">
                  In der Diskussion um eine Teil-AU wird oft ein anteiliges Krankengeld vorgeschlagen. Die Simulation nutzt die geltenden Berechnungsschritte (70 % des Brutto, max. 90 % des Netto, gedeckelt durch Beitragsbemessungsgrenze), wendet diese jedoch nur auf den prozentual ausgefallenen Arbeitsanteil an.
                </p>
                <div className="mt-2 text-xs text-amber-800 bg-amber-50 p-2 rounded">
                  <strong>Rechtshinweis:</strong> * Modellrechnung. Ein solches anteiliges Krankengeld zur Kombination mit Teillohn existiert derzeit rechtlich nicht.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Box */}
        <TrustBox />

        {/* Citation Box */}
        <CitationBox pageTitle="Teil-AU & Entgeltfortzahlungs-Rechner" urlPath="/rechner" />
      </div>
    </div>
  );
}
