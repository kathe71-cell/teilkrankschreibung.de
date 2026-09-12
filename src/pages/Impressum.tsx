import { Mail, Phone, MapPin, Scale } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-slate-900">Startseite</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">Impressum</span>
        </nav>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-slate-100 text-slate-900">
              <Scale className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Gesetzliche Anbieterkennzeichnung nach § 5 DDG
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mb-8 tracking-tight">
            Impressum
          </h1>

          <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
            {/* Angaben nach § 5 DDG */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-3">
                Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
              </h2>
              <div className="space-y-1 text-slate-800">
                <p className="font-bold text-slate-950">Jens Kathe</p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Hansastraße 6, 34119 Kassel, Deutschland</span>
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-3">
                Kontakt
              </h2>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>E-Mail: </span>
                  <a href="mailto:jens@kathe.org" className="text-emerald-700 hover:text-emerald-800 font-bold underline">
                    jens@kathe.org
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Telefon: </span>
                  <a href="tel:+4917866526230" className="text-emerald-700 hover:text-emerald-800 font-bold">
                    +49 178 6652623
                  </a>
                </p>
              </div>
            </section>

            {/* Umsatzsteuer */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2">
                Umsatzsteuer
              </h2>
              <p className="text-slate-600">
                Umsatzsteuerbefreit als Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer ausgewiesen.
              </p>
            </section>

            {/* Redaktionelle Verantwortung */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV)
              </h2>
              <p className="text-slate-800">
                Jens Kathe<br />
                Hansastraße 6, 34119 Kassel, Deutschland
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section className="border-b border-slate-100 pb-6">
              <h2 className="text-lg font-bold text-slate-950 mb-2">
                EU-Streitschlichtung &amp; Verbraucherstreitbeilegung
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte & Links */}
            <section className="space-y-3 text-xs text-slate-500 leading-relaxed">
              <h2 className="text-base font-bold text-slate-900">
                Haftung für Inhalte &amp; Rechtshinweis
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die Inhalte dieses Portals wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Die auf teilkrankschreibung.de bereitgestellten Informationen, Rechner und Simulationen stellen keine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) und keine medizinische Diagnose dar. Sie dienen der neutralen Information.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
