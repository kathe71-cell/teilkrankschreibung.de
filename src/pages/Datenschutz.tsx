import { ShieldCheck, EyeOff, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12">
      <SeoHead 
        title="Datenschutzerklärung | teilkrankschreibung.de"
        description="Informationen zum Datenschutz, cookieloser Webanalyse und fehlenden externen CDNs."
        path="/datenschutz"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Datenschutz</span>
        </nav>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Datenschutz nach DSGVO &amp; TDDDG
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 tracking-tight">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            {/* Präambel */}
            <section className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-5">
              <h2 className="text-base font-bold text-emerald-950 mb-2 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-emerald-600" />
                <span>Privacy First: Keine Cookies, kein Werbetracking</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Der Schutz Ihrer personenbezogenen Daten hat für uns höchste Priorität. Dieses Portal verwendet weder Google Analytics noch Marketing-Tracker noch Tracking-Cookies gemäß TDDDG. Alle Schriften werden lokal ohne externe CDNs ausgeliefert.
              </p>
            </section>

            {/* Verantwortliche Stelle */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2">
                1. Name und Anschrift des Verantwortlichen
              </h2>
              <p className="text-slate-700 mb-2">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist der Betreiber dieser Website:
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm">
                <p className="font-semibold text-slate-900">
                  Vollständige Kontaktdaten siehe <Link to="/impressum" className="text-emerald-700 underline font-bold">Impressum</Link>.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  E-Mail für Datenschutzanfragen: <a href="mailto:jens@kathe.org" className="underline">jens@kathe.org</a>
                </p>
              </div>
            </section>

            {/* Vercel Hosting & Web Analytics */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
                <Server className="w-5 h-5 text-emerald-600" />
                <span>2. Hosting und Webanalyse durch Vercel</span>
              </h2>
              <p className="text-slate-700 mb-2">
                Diese Website wird über <strong>Vercel</strong> gehostet und nutzt Vercel Web Analytics, bereitgestellt von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
              </p>
              <p className="text-slate-600 text-xs leading-relaxed mb-3">
                Zum Zweck der Bereitstellung der Website und zur statistischen Auswertung der Performance werden Zugriffsdaten (z. B. aufgerufene Seiten, Referrer-URL, Browsertyp, Betriebssystem) erfasst. Die Datenübertragung in die USA wird auf Grundlage von Standardvertragsklauseln bzw. des Data Privacy Frameworks abgesichert.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                <li><strong>Cookielos:</strong> Vercel Analytics verwendet keine Cookies zur Speicherung von Informationen auf Ihrem Endgerät im Sinne des TDDDG.</li>
                <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung, Sicherheit und Reichweitenmessung).</li>
              </ul>
            </section>

            {/* Zero-CDN Schriften */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-600" />
                <span>3. Lokale System-Schriftarten (Kein CDN)</span>
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                Diese Website bindet keine externen Schriftarten über fremde Server (wie Google Fonts) ein. Stattdessen nutzen wir das auf Ihrem Endgerät bereits vorinstallierte native System-Schriftarten-Set, sodass keine Übertragung Ihrer IP-Adresse an externe Font-Provider stattfindet.
              </p>
            </section>

            {/* Lokale Rechner-Verarbeitung */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2">
                4. Datenverarbeitung im Teil-AU-Rechner
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                Alle von Ihnen in den Rechner eingegebenen Werte (Bruttogehalt, Wochenstunden, Prozentsatz) werden rein clientseitig in Ihrem Browser berechnet. Es erfolgt zu keinem Zeitpunkt eine Übertragung oder Speicherung Ihrer Gehaltsdaten auf unseren Servern oder in Datenbanken.
              </p>
            </section>

            {/* Betroffenenrechte */}
            <section className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <h2 className="text-base font-bold text-slate-900">
                5. Ihre Rechte als betroffene Person
              </h2>
              <p>
                Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter der im Impressum angegebenen E-Mail-Adresse.
              </p>
              <p>
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu (Der Hessische Beauftragte für Datenschutz und Informationsfreiheit).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
