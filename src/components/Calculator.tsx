import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calculator as CalcIcon, 
  Share2, 
  Check, 
  Code, 
  Printer, 
  ShieldAlert, 
  ArrowRight,
  Building2,
  UserCheck,
  Info
} from 'lucide-react';

interface CalculatorProps {
  isEmbed?: boolean;
}

export default function Calculator({ isEmbed = false }: CalculatorProps) {
  const [searchParams] = useSearchParams();

  // Read initial from URL or defaults
  const initialBrutto = Number(searchParams.get('brutto')) || 3800;
  const initialStunden = Number(searchParams.get('stunden')) || 40;
  const initialReduktion = Number(searchParams.get('prozent')) || 50;
  const initialPhase = (searchParams.get('phase') as 'phase1' | 'phase2') || 'phase2';
  const initialSteuerklasse = Number(searchParams.get('klasse')) || 1;

  const [brutto, setBrutto] = useState<number>(initialBrutto);
  const [stunden, setStunden] = useState<number>(initialStunden);
  const [arbeitsfaehigkeit, setArbeitsfaehigkeit] = useState<number>(initialReduktion);
  const [phase, setPhase] = useState<'phase1' | 'phase2'>(initialPhase);
  const [steuerklasse, setSteuerklasse] = useState<number>(initialSteuerklasse);

  const [copiedLink, setCopiedLink] = useState(false);
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  const [showShareModal, setShowShareModal] = useState(false);

  const updateParams = (
    _b: number,
    _s: number,
    _a: number,
    _p: string,
    _st: number
  ) => {
    // Neutralisiert: Kein automatisches Update der URL bei jedem Tastendruck mehr!
  };

  // Realistic tax & social contribution net calculation approximation
  const calculateNetto = (gross: number, taxClass: number): number => {
    if (gross <= 0) return 0;
    // Social contributions: RV ~9.3%, AV ~1.3%, KV ~8.15%, PV ~2.2% = ~21%
    const socialDeductions = gross * 0.2095;
    
    // Progressive Income tax approximation for single/married
    let taxable = gross - socialDeductions;
    let taxRate = 0;
    if (taxClass === 3) {
      taxRate = taxable < 1500 ? 0.05 : taxable < 3500 ? 0.14 : 0.24;
    } else if (taxClass === 5) {
      taxRate = taxable < 1000 ? 0.12 : taxable < 3000 ? 0.26 : 0.35;
    } else {
      // Classes 1, 4
      taxRate = taxable < 1200 ? 0.08 : taxable < 2500 ? 0.16 : taxable < 4500 ? 0.24 : 0.32;
    }
    const wageTax = Math.max(0, taxable * taxRate);
    return Math.max(0, Math.round(gross - socialDeductions - wageTax));
  };

  const results = useMemo(() => {
    const monthlyHours = stunden * 4.333;
    const hourlyRate = brutto / monthlyHours;

    const capacityRatio = arbeitsfaehigkeit / 100;
    const sickRatio = 1 - capacityRatio;

    const workedHoursPerWeek = stunden * capacityRatio;
    const sickHoursPerWeek = stunden * sickRatio;

    const fullNetto = calculateNetto(brutto, steuerklasse);

    // Full Sick (100% AU) in Phase 2 (Krankengeld):
    // 70% of regular gross, max 90% of regular net (§ 47 SGB V)
    const grossKrankengeldFull = Math.min(brutto * 0.70, fullNetto * 0.90);
    // Deductions from Krankengeld (RV 9.3%, AV 1.3%, PV 2.2% = ~12.8%)
    const netKrankengeldFull = Math.round(grossKrankengeldFull * 0.872);

    // Partial Model
    const workedGross = Math.round(brutto * capacityRatio);
    const workedNetto = calculateNetto(workedGross, steuerklasse);

    const sickGross = brutto * sickRatio;
    const sickNettoRef = fullNetto * sickRatio;

    // Partial Krankengeld for the sick fraction
    const grossKrankengeldPartial = Math.min(sickGross * 0.70, sickNettoRef * 0.90);
    const netKrankengeldPartial = Math.round(grossKrankengeldPartial * 0.872);

    // Total Net for partial model
    let totalPartialNet = 0;
    if (phase === 'phase1') {
      // In Phase 1: employer pays worked salary + 100% Entgeltfortzahlung for sick hours = regular salary
      totalPartialNet = fullNetto;
    } else {
      // In Phase 2: worked salary (net) + Krankengeld for remaining hours
      totalPartialNet = workedNetto + netKrankengeldPartial;
    }

    // Advantage of partial model vs full sick in Phase 2
    const netAdvantage = totalPartialNet - netKrankengeldFull;

    // Employer savings in Phase 2: Employer pays only for actual worked hours, instead of missing 100%
    const employerCostInPartial = workedGross;
    const employerCostFullSickPhase1 = brutto; // 100% Entgeltfortzahlung

    return {
      monthlyHours: Math.round(monthlyHours),
      hourlyRate: hourlyRate.toFixed(2),
      workedHoursPerWeek: workedHoursPerWeek.toFixed(1),
      sickHoursPerWeek: sickHoursPerWeek.toFixed(1),
      fullNetto,
      netKrankengeldFull,
      workedGross,
      workedNetto,
      netKrankengeldPartial,
      totalPartialNet,
      netAdvantage,
      employerCostInPartial,
      employerCostFullSickPhase1,
    };
  }, [brutto, stunden, arbeitsfaehigkeit, phase, steuerklasse]);

  const handleShareLink = () => {
    setShowShareModal(true);
  };

  const confirmShare = () => {
    const url = `${window.location.origin}/rechner?brutto=${brutto}&stunden=${stunden}&prozent=${arbeitsfaehigkeit}&phase=${phase}&klasse=${steuerklasse}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
      setShowShareModal(false);
    }, 2000);
  };

  const embedSnippet = `<iframe id="tkr-rechner" src="https://www.teilkrankschreibung.de/rechner-embed?brutto=${brutto}&stunden=${stunden}&prozent=${arbeitsfaehigkeit}&phase=${phase}" width="100%" height="700" frameborder="0" style="border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.08);max-width:850px;display:block;margin:auto;transition:height 0.2s;" title="Teilkrankschreibung Rechner"></iframe>\n<script>\nwindow.addEventListener("message", function(e) {\n  if (e.origin !== "https://teilkrankschreibung.de" && e.origin !== "https://www.teilkrankschreibung.de") return;\n  var iframe = document.getElementById("tkr-rechner");\n  if (!iframe || e.source !== iframe.contentWindow) return;\n  if (e.data && e.data.type === "resize" && typeof e.data.height === "number" && isFinite(e.data.height) && e.data.height > 0) {\n    iframe.style.height = e.data.height + "px";\n  }\n});\n</script>\n<p style="font-size:12px;color:#64748b;text-align:center;margin-top:8px;">Bereitgestellt von <a href="https://www.teilkrankschreibung.de/" target="_blank" style="color:#059669;text-decoration:underline;">teilkrankschreibung.de</a></p>`;
  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedSnippet);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2000);
  };

  return (
    <div className={`bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden relative ${isEmbed ? 'p-4 sm:p-6' : 'p-6 sm:p-10 my-8'}`}>
      
      {showShareModal && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Ergebnisse teilen</h3>
            <p className="text-sm text-slate-600 mb-4">
              Wenn Sie den Link kopieren, werden Ihre aktuellen Eingaben (Gehalt, Arbeitsstunden, Prozent, Phase, Steuerklasse) in der URL gespeichert. Die Daten werden nicht an uns übertragen, sind aber für jeden sichtbar, dem Sie den Link senden.
            </p>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowShareModal(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Abbrechen</button>
              <button onClick={confirmShare} className="px-4 py-2 text-sm font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                {copiedLink ? 'Kopiert!' : 'Zustimmen & Kopieren'}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Title & Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
              <CalcIcon className="w-4 h-4" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Interaktiver Fachrechner
            </span>
            <span className="text-xs text-slate-400 font-mono">§ 47 SGB V / § 3 EntgFG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Teil-AU &amp; Entgeltfortzahlungs-Rechner
          </h2>
          <p className="text-sm text-slate-600 mt-0.5">
            Hypothetische Simulation des verbleibenden Arbeitseinkommens und anteiligen Krankengelds bei reduzierter Arbeitsfähigkeit.
          </p>
        </div>

        {/* Action Toolbar */}
        {!isEmbed && (
          <div className="flex flex-wrap items-center gap-2 no-print">
            <button
              type="button"
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all min-h-11"
              title="Aktuelle Konfiguration als Link speichern"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-slate-500" />}
              <span>{copiedLink ? 'Link kopiert!' : 'Link kopieren'}</span>
            </button>

            <button
              type="button"
              onClick={() => setShowEmbedCode(!showEmbedCode)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all min-h-11"
              title="iFrame-Code für die eigene Webseite erhalten"
            >
              <Code className="w-4 h-4 text-slate-500" />
              <span>Embed-Widget</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all min-h-11"
              title="Berechnungsblatt drucken oder als PDF speichern"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Drucken / PDF</span>
            </button>
          </div>
        )}
      </div>

      {/* Embed Code Drawer */}
      {showEmbedCode && !isEmbed && (
        <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 my-4 border border-slate-800 text-xs no-print">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-100">Kostenloses Rechner-Widget für Ihre Website (HTML iFrame)</span>
            <button
              type="button"
              onClick={handleCopyEmbed}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
            >
              {copiedEmbed ? <Check className="w-3.5 h-3.5" /> : <Code className="w-3.5 h-3.5" />}
              {copiedEmbed ? 'Kopiert!' : 'Code kopieren'}
            </button>
          </div>
          <pre className="p-3 bg-slate-950 rounded-lg overflow-x-auto text-[11px] font-mono text-emerald-300">
            {embedSnippet}
          </pre>
        </div>
      )}

      {/* Main Grid: Inputs vs Results */}
      <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900 leading-relaxed">
          <strong className="block mb-1">Hypothetische Reform-Simulation</strong>
          Das dargestellte Teil-AU-Kombinationsmodell ist kein bestehender individueller Leistungsanspruch in Deutschland. Diese Simulation verdeutlicht lediglich, wie eine Reform analog zu skandinavischen Vorbildern finanziell wirken könnte.
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
        {/* Left Inputs (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Bruttoeinkommen */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="brutto-input" className="text-sm font-bold text-slate-800">
                Reguläres Bruttomonatsgehalt
              </label>
              <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                Vollzeitbasis
              </span>
            </div>
            <div className="relative">
              <input
                id="brutto-input"
                type="number"
                min={500}
                max={25000}
                step={50}
                value={brutto}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setBrutto(val);
                  updateParams(val, stunden, arbeitsfaehigkeit, phase, steuerklasse);
                }}
                className="w-full pl-4 pr-12 py-3 text-lg font-bold font-mono text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-hidden transition-all"
              />
              <span className="absolute right-4 top-3.5 font-bold text-slate-500">€</span>
            </div>
            <div className="flex gap-2 mt-2">
              {[2500, 3500, 4500, 6000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setBrutto(preset);
                    updateParams(preset, stunden, arbeitsfaehigkeit, phase, steuerklasse);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                    brutto === preset ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {preset.toLocaleString('de-DE')} €
                </button>
              ))}
            </div>
          </div>

          {/* Wochenarbeitszeit */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="hours-input" className="text-sm font-bold text-slate-800">
                Vertragliche Wochenarbeitszeit
              </label>
              <span className="font-mono text-sm font-bold text-emerald-700">
                {stunden} Std./Woche
              </span>
            </div>
            <input
              id="hours-input"
              type="range"
              min={10}
              max={50}
              step={1}
              value={stunden}
              onChange={(e) => {
                const val = Number(e.target.value);
                setStunden(val);
                updateParams(brutto, val, arbeitsfaehigkeit, phase, steuerklasse);
              }}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 mt-1 font-mono">
              <span>10 Std.</span>
              <span>20 Std. (Halbtags)</span>
              <span>38.5 Std. (Tarif)</span>
              <span>40 Std.</span>
            </div>
          </div>

          {/* Grad der Arbeitsfähigkeit / Teilarbeitszeit */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="capacity-input" className="text-sm font-bold text-slate-900">
                Verbleibende Arbeitsfähigkeit
              </label>
              <span className="text-base font-black text-emerald-700 bg-white px-3 py-1 rounded-lg border border-emerald-300 font-mono shadow-2xs">
                {arbeitsfaehigkeit} % ({results.workedHoursPerWeek} h)
              </span>
            </div>
            <input
              id="capacity-input"
              type="range"
              min={10}
              max={90}
              step={5}
              value={arbeitsfaehigkeit}
              onChange={(e) => {
                const val = Number(e.target.value);
                setArbeitsfaehigkeit(val);
                updateParams(brutto, stunden, val, phase, steuerklasse);
              }}
              className="w-full h-3 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex gap-2 mt-3">
              {[25, 50, 75].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setArbeitsfaehigkeit(preset);
                    updateParams(brutto, stunden, preset, phase, steuerklasse);
                  }}
                  className={`flex-1 text-xs py-2 rounded-xl font-bold transition-all ${
                    arbeitsfaehigkeit === preset
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white text-emerald-900 border border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  {preset} % Stufe
                </button>
              ))}
            </div>
            <p className="text-[11px] text-emerald-800 mt-2 font-medium">
              Ausfallanteil: <strong>{100 - arbeitsfaehigkeit} %</strong> ({results.sickHoursPerWeek} Std./Woche krankheitsbedingt freigestellt)
            </p>
          </div>

          {/* Phase-Toggle: Woche 1-6 vs. ab Woche 7 */}
          <div>
            <label className="text-sm font-bold text-slate-800 block mb-1.5">
              Krankheitsphase / Kostenträger
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setPhase('phase1');
                  updateParams(brutto, stunden, arbeitsfaehigkeit, 'phase1', steuerklasse);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  phase === 'phase1'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block text-xs font-bold uppercase tracking-wider opacity-80">Phase 1</span>
                <span className="font-extrabold text-sm block mt-0.5">Woche 1 bis 6</span>
                <span className="text-[11px] opacity-75">Entgeltfortzahlung (§ 3 EntgFG)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setPhase('phase2');
                  updateParams(brutto, stunden, arbeitsfaehigkeit, 'phase2', steuerklasse);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  phase === 'phase2'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className="block text-xs font-bold uppercase tracking-wider opacity-80">Phase 2</span>
                <span className="font-extrabold text-sm block mt-0.5">Ab Woche 7</span>
                <span className="text-[11px] opacity-75">Krankengeld (§ 44 SGB V)</span>
              </button>
            </div>
          </div>

          {/* Steuerklasse */}
          <div>
            <label htmlFor="taxclass-select" className="text-xs font-bold text-slate-600 block mb-1">
              Steuerklasse (für Netto-Schätzung)
            </label>
            <select
              id="taxclass-select"
              value={steuerklasse}
              onChange={(e) => {
                const val = Number(e.target.value);
                setSteuerklasse(val);
                updateParams(brutto, stunden, arbeitsfaehigkeit, phase, val);
              }}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg font-medium text-slate-800"
            >
              <option value={1}>Steuerklasse I (Ledig, ohne Kinder)</option>
              <option value={3}>Steuerklasse III (Verheiratet, Hauptverdiener)</option>
              <option value={4}>Steuerklasse IV (Verheiratet, gleich verteilt)</option>
              <option value={5}>Steuerklasse V (Verheiratet, Zuverdiener)</option>
            </select>
          </div>
        </div>

        {/* Right Output: Comparative Bento Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Metric: Total Net Comparison Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full -mr-16 -mt-16 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
                  {phase === 'phase1' ? 'Simulation Phase 1 (Erste 6 Wochen)' : 'Simulation Phase 2 (Ab Woche 7)'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                  Monatliches Gesamteinkommen (Netto)
                </h3>
              </div>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                  ca. {results.totalPartialNet.toLocaleString('de-DE')} €
                </span>
                <span className="block text-xs text-slate-400">pro Monat (Schätzwert)</span>
              </div>
            </div>

          </div>

          {/* 3-Column Scenario Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Scenario 1: Vollzeit */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">Szenario A</span>
                <span className="text-sm font-extrabold text-slate-900 block mt-0.5">100 % Gesund (Vollzeit)</span>
                <span className="text-xs text-slate-600 block mt-1">{stunden} Std./Woche Arbeit</span>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200">
                <span className="text-xs text-slate-600 block">Netto regulär:</span>
                <span className="text-lg font-black text-slate-900 font-mono">
                  {results.fullNetto.toLocaleString('de-DE')} €
                </span>
              </div>
            </div>

            {/* Scenario 2: Vollständig krank */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">Szenario B</span>
                <span className="text-sm font-extrabold text-slate-900 block mt-0.5">100 % Arbeitsunfähig</span>
                <span className="text-xs text-slate-600 block mt-1">
                  {phase === 'phase1' ? 'Volle Lohnfortzahlung' : 'Reines Krankengeld (§ 47)'}
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200">
                <span className="text-xs text-slate-600 block">Netto bei 100% AU:</span>
                <span className="text-lg font-black text-amber-900 font-mono">
                  {phase === 'phase1' ? `${results.fullNetto.toLocaleString('de-DE')} €` : `${results.netKrankengeldFull.toLocaleString('de-DE')} €`}
                </span>
              </div>
            </div>

            {/* Scenario 3: Teilkrankschreibung */}
            <div className="bg-emerald-50/80 border-2 border-emerald-500 rounded-2xl p-4 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">Szenario C</span>
                <span className="text-sm font-black text-emerald-950 block mt-0.5">{arbeitsfaehigkeit} % Teil-AU</span>
                <span className="text-xs text-emerald-800 block mt-1">Hypothetische Reform-Simulation</span>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200">
                <span className="text-xs text-emerald-800 font-bold block">Simuliertes Netto:</span>
                <span className="text-xl font-black text-emerald-900 font-mono">
                  {results.totalPartialNet.toLocaleString('de-DE')} €
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Financial Breakdown Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Detaillierte Zusammensetzung der Einkommensströme
            </h4>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200/80">
                <span className="text-slate-600 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  Geleistete Teilarbeitszeit ({arbeitsfaehigkeit} %)
                </span>
                <span className="font-bold text-slate-900 font-mono">
                  ca. {results.workedNetto.toLocaleString('de-DE')} € Netto ({results.workedGross.toLocaleString('de-DE')} € Brutto)
                </span>
              </div>

              {phase === 'phase2' ? (
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-600 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-600" />
                    Simulierter Krankenkassen-Anteil für {100 - arbeitsfaehigkeit} % Ausfallzeit
                  </span>
                  <span className="font-bold text-slate-900 font-mono">
                    ca. {results.netKrankengeldPartial.toLocaleString('de-DE')} € Krankengeld (Netto)
                  </span>
                </div>
              ) : (
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/80">
                  <span className="text-slate-600 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-600" />
                    Entgeltfortzahlung AG für {100 - arbeitsfaehigkeit} % Ausfallzeit
                  </span>
                  <span className="font-bold text-slate-900 font-mono">
                    100 % Lohnfortzahlung (§ 3 EntgFG)
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center py-1.5 font-bold text-slate-900">
                <span>Stundenbasis</span>
                <span className="font-mono text-xs text-slate-600">
                  {results.hourlyRate} €/Std. regulär · {results.workedHoursPerWeek} h Arbeit / {results.sickHoursPerWeek} h Freistellung
                </span>
              </div>
            </div>
          </div>

          {/* Employer perspective hint */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex items-start gap-3">
            <Building2 className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Hypothetischer Vorteil für den Arbeitgeber:</strong> In diesem simulierten Modell zahlt der Arbeitgeber nur die tatsächlich erbrachten {arbeitsfaehigkeit} % Arbeitsleistung ({results.workedGross.toLocaleString('de-DE')} € Brutto). Das Unternehmen behält das Fachwissen im Betrieb und vermeidet eine monatelange vollständige Vakanz.
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Disclaimer according to Guidelines */}
      <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
        <p>
          * <strong>Modellrechnung</strong>: Die tatsächliche Höhe von Gehalt, Entgeltfortzahlung und Krankengeld hängt vom individuellen Bruttoarbeitsentgelt, den gesetzlichen Beitragsbemessungsgrenzen der gesetzlichen Krankenversicherung, dem kassenindividuellen Zusatzbeitrag, der Steuerklasse sowie den konkreten Vereinbarungen im Arbeitsvertrag oder Wiedereingliederungsplan ab. Krankengeld unterliegt dem steuerlichen Progressionsvorbehalt (§ 32b EStG).
        </p>
      </div>

      {/* Embedded View Attribution Link */}
      {isEmbed && (
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Interaktive Berechnung nach SGB V</span>
          <a
            href="https://teilkrankschreibung.de/rechner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold"
          >
            <span>Vollständiger Rechner auf teilkrankschreibung.de</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
