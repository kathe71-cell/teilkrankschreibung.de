import Calculator from '../components/Calculator';
import CitationBox from '../components/CitationBox';
import TrustBox from '../components/TrustBox';
import { Scale } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
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
            Berechnen Sie die finanziellen Auswirkungen reduzierter Arbeitsfähigkeit. Ermitteln Sie das Zusammenspiel aus Teillohn des Arbeitgebers und anteiligem Krankengeld nach § 47 SGB V.
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
                Methodik und gesetzliche Berechnungsgrundlagen
              </h2>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Die Simulation basiert auf den maßgeblichen Bestimmungen des Entgeltfortzahlungsgesetzes sowie des Fünften Buches Sozialgesetzbuch (SGB V).
            </p>

            <div className="space-y-6 text-sm text-slate-700">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  1. Phase 1: Die ersten 6 Wochen (Entgeltfortzahlung nach § 3 EntgFG)
                </h3>
                <p className="leading-relaxed">
                  Erkrankt ein Arbeitnehmer, so hat er bis zur Dauer von sechs Wochen Anspruch auf Fortzahlung seines regulären Arbeitsentgelts durch den Arbeitgeber (100 % des Regellohns). In einem hypothetischen Modell der Teilkrankschreibung würde der Arbeitgeber den Lohn für die geleisteten Stunden als reguläres Gehalt vergüten und den Ausfallanteil im Rahmen der Entgeltfortzahlung ausgleichen. Der Arbeitnehmer erhält somit sein gewohntes volles Nettoeinkommen.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  2. Phase 2: Ab der 7. Woche (Krankengeldberechnung nach § 47 SGB V)
                </h3>
                <p className="leading-relaxed mb-2">
                  Nach Ablauf der sechswöchigen Entgeltfortzahlung endet die Lohnfortzahlungspflicht des Arbeitgebers. Gesetzlich Krankenversicherte erhalten Krankengeld von ihrer Krankenkasse:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                  <li><strong>70 % des beitragspflichtigen Brutto-Regelentgelts</strong>, höchstens jedoch:</li>
                  <li><strong>90 % des maßgeblichen Netto-Regelentgelts</strong>.</li>
                  <li>Gedeckelt durch die kalendertägliche Beitragsbemessungsgrenze der GKV.</li>
                  <li>Vom Krankengeld werden Beiträge zur Renten-, Pflege- und Arbeitslosenversicherung einbehalten (ca. 12,8 %).</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  3. Warum lohnt sich die Teilkrankschreibung finanziell?
                </h3>
                <p className="leading-relaxed">
                  Wer 50 % arbeiten kann, erzielt für diese 50 % sein volles vertragliches Gehalt. Da das Krankengeld für die verbleibenden 50 % nur auf den Ausfallteil berechnet wird, liegt das gesamte monatliche Nettoeinkommen spürbar über dem Bezug von reinem Krankengeld bei 100 % Arbeitsunfähigkeit. Zudem bleibt der Rentenversicherungsbeitrag höher.
                </p>
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
