import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TrustBox from '../components/TrustBox';
import CitationBox from '../components/CitationBox';
import SeoHead from '../components/SeoHead';

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Rechtslage & Gesetz',
      q: 'Gibt es in Deutschland bereits eine gesetzliche Teilkrankschreibung?',
      a: 'Nein, eine reguläre Teilkrankschreibung für akute Erkrankungen (z. B. 50 % AU am ersten Tag) existiert im deutschen Recht bislang nicht. Nach dem Alles-oder-Nichts-Prinzip ist ein Arbeitnehmer entweder voll arbeitsfähig oder voll arbeitsunfähig. Einzige gesetzlich geregelte Ausnahme zur schrittweisen Rückkehr ist die stufenweise Wiedereingliederung nach § 74 SGB V (Hamburger Modell).'
    },
    {
      category: 'Rechtslage & Gesetz',
      q: 'Wie funktioniert das Hamburger Modell nach § 74 SGB V?',
      a: 'Nach längerer schwerer Krankheit kann der behandelnde Arzt in Absprache mit Patient, Arbeitgeber und Krankenkasse einen ärztlichen Stufenplan festlegen. Der Arbeitnehmer kehrt stundenweise an seinen Arbeitsplatz zurück (z. B. Start mit 2 Stunden täglich, dann Steigerung auf 4, 6 und 8 Stunden). Während dieser Phase besteht formell weiterhin volle Arbeitsunfähigkeit.'
    },
    {
      category: 'Finanzen & Krankengeld',
      q: 'Wer bezahlt das Gehalt während des Hamburger Modells?',
      a: 'Während der stufenweisen Wiedereingliederung ruhen die wechselseitigen vertraglichen Hauptleistungspflichten. Der Arbeitnehmer hat keinen gesetzlichen Anspruch auf Arbeitsentgelt gegen den Arbeitgeber, sondern bezieht weiterhin Krankengeld von der gesetzlichen Krankenkasse (§ 44 SGB V) oder Übergangsgeld von der Rentenversicherung (§ 20 SGB VI).'
    },
    {
      category: 'Finanzen & Krankengeld',
      q: 'Wie berechnet sich das Krankengeld nach § 47 SGB V?',
      a: 'Krankengeld beträgt 70 % des regelmäßigen Bruttoentgelts vor Beginn der Arbeitsunfähigkeit, ist jedoch auf höchstens 90 % des Nettoentgelts gedeckelt. Zudem ist es durch die gesetzliche Beitragsbemessungsgrenze der Krankenversicherung nach oben begrenzt. Vom Brutto-Krankengeld werden Sozialversicherungsbeiträge (Renten-, Arbeitslosen- und Pflegeversicherung, ca. 12,8 %) abgezogen.'
    },
    {
      category: 'Arbeitsverhältnis & Chef',
      q: 'Kann mein Arbeitgeber die stufenweise Wiedereingliederung ablehnen?',
      a: 'Grundsätzlich ja. Die Durchführung des Hamburger Modells erfordert das Einverständnis aller Beteiligten (Arbeitnehmer, Arbeitgeber, Arzt, Kasse). Der Arbeitgeber kann aus dringenden betrieblichen Gründen ablehnen. Ausnahme: Für schwerbehinderte oder ihnen gleichgestellte Arbeitnehmer besteht nach § 164 Abs. 4 SGB IX ein Rechtsanspruch auf leidensgerechte Beschäftigung.'
    },
    {
      category: 'Arbeitsverhältnis & Chef',
      q: 'Welche Weisungsrechte hat der Arbeitgeber bei Teilarbeit?',
      a: 'Der Arbeitgeber hat kein uneingeschränktes Direktionsrecht (§ 106 GewO). Er kann weder Überstunden anordnen noch die im ärztlichen Stufenplan vereinbarten Zeiten eigenmächtig ausdehnen. Der Arbeitnehmer absolviert eine medizinische Belastungserprobung und erbringt keine reguläre Arbeitsleistung unter Leistungsdruck.'
    },
    {
      category: 'Arbeitsverhältnis & Chef',
      q: 'Was passiert mit meinem Urlaubsanspruch?',
      a: 'Während der Maßnahme kann kein Erholungsurlaub genommen werden, da der Arbeitnehmer rechtlich arbeitsunfähig ist. Bestehende Urlaubsansprüche verfallen nicht, sondern können nach erfolgreichem Abschluss der Wiedereingliederung und Wiederherstellung der vollen Arbeitsfähigkeit beansprucht werden.'
    },
    {
      category: 'Unfallschutz & Versicherung',
      q: 'Bin ich während der Wiedereingliederung unfallversichert?',
      a: 'Ja. Das Bundessozialgericht (BSG) hat mit Urteil vom 21.03.2006 (Az. B 2 U 11/06 R) entschieden, dass Beschäftigte auch während des Hamburger Modells unter dem Schutz der gesetzlichen Unfallversicherung (DGUV / Berufsgenossenschaft) stehen. Dies gilt sowohl für Arbeitsunfälle am Arbeitsplatz als auch für Wegeunfälle.'
    },
    {
      category: 'Rechtslage & Gesetz',
      q: 'Was ist der Unterschied zu den Modellen in Schweden oder Österreich?',
      a: 'In Schweden (Sjukpenning) und Österreich kann ein Arzt eine Teilkrankschreibung von Beginn an ausstellen (z. B. 25 %, 50 %, 75 % AU). Der Arbeitgeber zahlt den Lohn für die geleisteten Stunden, die Krankenkasse zahlt den anteiligen Ausfall. Dadurch bleiben Betroffene im Berufsleben integriert und das Gesamteinkommen ist höher als bei reinem Krankengeldbezug.'
    },
    {
      category: 'Arbeitsverhältnis & Chef',
      q: 'Kann der Stufenplan abgebrochen werden, wenn es gesundheitlich nicht klappt?',
      a: 'Ja, jederzeit. Die Maßnahme kann in Absprache mit dem behandelnden Arzt modifiziert (z. B. Verlängerung einer Stufe) oder ganz abgebrochen werden. Ein Abbruch hat keine arbeitsrechtlichen Sanktionen zur Folge; der Arbeitnehmer bleibt weiterhin normal krankgeschrieben und bezieht Krankengeld.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      <SeoHead 
        title="FAQ zur Teilkrankschreibung: Häufige rechtliche Fragen"
        description="Antworten auf die wichtigsten juristischen, finanziellen und arbeitsrechtlichen Fragen zur Teilarbeitsunfähigkeit in Deutschland."
        path="/faq"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Häufige Fragen (FAQ)</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            Fragen &amp; Antworten
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 mt-2 mb-4">
            Häufige Fragen zur Teilkrankschreibung
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Antworten auf die wichtigsten juristischen, finanziellen und arbeitsrechtlichen Fragen zur Teilarbeitsunfähigkeit in Deutschland.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 mb-2 inline-block">
                      {faq.category}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                      {faq.q}
                    </h2>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Box */}
        <TrustBox />

        {/* Citation Box */}
        <CitationBox pageTitle="Häufige Fragen zur Teilkrankschreibung (FAQ)" urlPath="/faq" />
      </div>
    </div>
  );
}
