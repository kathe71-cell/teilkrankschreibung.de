export interface DiagnoseItem {
  icd: string;
  title: string;
  category: 'Psychosomatik & Nervensystem' | 'Orthopädie & Bewegungsapparat' | 'Innere Medizin & Onkologie' | 'Post-Viral & Chronisch';
  typicalCapacity: string;
  description: string;
  workAdaptation: string[];
  legalRelevance: string;
}

export const DIAGNOSEN_DATA: DiagnoseItem[] = [
  {
    icd: 'F43.2',
    title: 'Anpassungsstörungen & Burnout-Symptomatik',
    category: 'Psychosomatik & Nervensystem',
    typicalCapacity: 'Individuelle ärztliche Festlegung nach Belastbarkeit',
    description: 'Reaktive Erschöpfungszustände und Anpassungsstörungen nach chronischer Überlastung oder kritischen Lebensereignissen. Eine vollständige Isolation vom Arbeitsplatz führt oft zu erhöhter Rückkehrangst.',
    workAdaptation: ['Verzicht auf Führungsverantwortung während der Anfangsphase', 'Feste Pausenzeiten und Reizreduktion', 'Möglichkeit von Homeoffice zur Vermeidung von Pendelstress'],
    legalRelevance: 'Häufigste Indikation für stufenweise Wiedereingliederung (§ 74 SGB V). BEM-Gespräch (§ 167 Abs. 2 SGB IX) gesetzlich verpflichtend anzubieten nach >6 Wochen AU.'
  },
  {
    icd: 'F32.1',
    title: 'Mittelgradige depressive Episode (in Remission)',
    category: 'Psychosomatik & Nervensystem',
    typicalCapacity: 'Individuelle ärztliche Beurteilung',
    description: 'Nach Abklingen der Akutphase stabilisiert ein strukturierter Tagesablauf und dosierter sozialer Kontakt im Berufsalltag den Heilungserfolg maßgeblich.',
    workAdaptation: ['Klare, überschaubare Aufgabenpakete', 'Regelmäßige Reflexionsgespräche mit Vorgesetzten', 'Flexible Arbeitszeitmodelle ohne Zeitdruck'],
    legalRelevance: 'Ärztlicher Stufenplan erfordert engmaschige Begleitung durch Hausarzt oder Facharzt für Psychiatrie/Psychosomatik.'
  },
  {
    icd: 'M54.5',
    title: 'Chronisches Lendenwirbelsäulen-Syndrom (LWS)',
    category: 'Orthopädie & Bewegungsapparat',
    typicalCapacity: 'Ärztliche Empfehlung (körperlich leichte Tätigkeit)',
    description: 'Bandscheibenbedingte Schmerzzustände oder postoperative Phasen nach Nukleotomie. Langes statisches Sitzen oder schweres Heben sind kontraindiziert, moderate Bewegung förderlich.',
    workAdaptation: ['Elektrisch höhenverstellbarer Sitz-Steh-Schreibtisch', 'Verbot des Hebens von Lasten >5 kg', 'Ergonomische Arbeitsplatzbegehung durch Betriebsarzt'],
    legalRelevance: 'Arbeitgeber ist nach § 3 ArbSchG zur Bereitstellung ergonomischer Hilfsmittel angehalten.'
  },
  {
    icd: 'M16.1',
    title: 'Koxarthrose / Z. n. Hüft-Totalendoprothese (Hüft-TEP)',
    category: 'Orthopädie & Bewegungsapparat',
    typicalCapacity: 'Individuelle ärztliche Beurteilung',
    description: 'Rehabilitationsphase nach Einsetzen eines künstlichen Hüftgelenks nach abgeschlossener stationärer/ambulanter Anschlussheilbehandlung (AHB).',
    workAdaptation: ['Vermeidung von Treppensteigen und Zwangshaltungen', 'Barrierefreier Zugang zum Arbeitsplatz', 'Teilweise Telearbeit möglich'],
    legalRelevance: 'Kostenträger während der Wiedereingliederung ist nach AHB häufig die Deutsche Rentenversicherung (DRV) mit Übergangsgeld (§ 20 SGB VI).'
  },
  {
    icd: 'M75.1',
    title: 'Rotatorenmanschetten-Ruptur (Schulter-OP)',
    category: 'Orthopädie & Bewegungsapparat',
    typicalCapacity: 'Individuelle ärztliche Beurteilung',
    description: 'Postoperative Rekonvaleszenz nach Sehnennaht der Schulter. Überkopfarbeiten und Zugbelastungen sind für mindestens 3 bis 6 Monate untersagt.',
    workAdaptation: ['Einhandbedienung bei Tastaturarbeiten', 'Entlastung des betroffenen Arms', 'Schulung ergonomischer Tastaturen'],
    legalRelevance: 'Festlegung genauer Belastungsgrenzen im ärztlichen Wiedereingliederungsplan zwingend erforderlich.'
  },
  {
    icd: 'U09.9 / G93.3',
    title: 'Long-COVID / ME/CFS (Chronisches Fatigue-Syndrom)',
    category: 'Post-Viral & Chronisch',
    typicalCapacity: 'Streng individuell, ggf. nur wenige Stunden/Woche',
    description: 'Anhaltende Neuro-Fatigue und Belastungsintoleranz (Post-Exertional Malaise, PEM) nach Virusinfektion (ME/CFS). Es besteht eine hohe Gefahr der Symptomverschlechterung (Crash) bei Überlastung.',
    workAdaptation: ['Strikte Einhaltung des Pacing (Vermeidung jeglicher Überlastung)', 'Kognitive und physische Belastungsgrenzen zwingend respektieren', 'Vollständige Homeoffice-Möglichkeit und absolute Flexibilität'],
    legalRelevance: 'Besondere Vorsicht beim Hamburger Modell: Belastung darf bei PEM nicht nach festem Schema gesteigert werden, da irreversible Rückschläge drohen.'
  },
  {
    icd: 'C50.9',
    title: 'Mammakarzinom (Z. n. Chemo- & Strahlentherapie)',
    category: 'Innere Medizin & Onkologie',
    typicalCapacity: 'Individuelle ärztliche Beurteilung',
    description: 'Langzeitrehabilitation nach onkologischer Primärtherapie. Erhebliche tumorassoziierte Fatigue, aber starker Wunsch nach sozialer und beruflicher Reintegration.',
    workAdaptation: ['Höchst flexible Tagesgestaltung', 'Freistellung für medizinische Nachsorgetermine', 'Reduzierte Termindichte'],
    legalRelevance: 'Schwerbehindertenstatus bzw. Gleichstellung nach SGB IX schützt vor Kündigung und gibt Anspruch auf leidensgerechten Arbeitsplatz (§ 164 SGB IX).'
  },
  {
    icd: 'I21.9',
    title: 'Zustand nach Myokardinfarkt (Herzinfarkt) & Stent',
    category: 'Innere Medizin & Onkologie',
    typicalCapacity: 'Individuelle kardiologische Festlegung',
    description: 'Kardiologische Rekonvaleszenz nach interventioneller Koronarversorgung. Puls- und Blutdruckspitzen durch Akkord- oder Schichtarbeit müssen vermieden werden.',
    workAdaptation: ['Ausschluss von Nacht- und Schichtarbeit', 'Vermeidung von termingetriebenem Stress', 'Regelmäßige Pausen für Vitalwert-Messungen'],
    legalRelevance: 'Betriebsärztliche Untersuchung vor Wiederaufnahme der Tätigkeit dringend anzuraten.'
  },
  {
    icd: 'G35.9',
    title: 'Multiple Sklerose (schubförmig-remittierend)',
    category: 'Psychosomatik & Nervensystem',
    typicalCapacity: 'Individuelle ärztliche Beurteilung je nach Tagesform',
    description: 'Chronisch-entzündliche Erkrankung des ZNS mit wechselnder Fatigue und motorischer Belastbarkeit. Hitzeempfindlichkeit (Uhthoff-Phänomen) erfordert klimatisierte Umgebung.',
    workAdaptation: ['Klimatisierter Arbeitsplatz / Sonnenschutz', 'Gleitzeit ohne Kernzeit', 'Möglichkeit kurzfristiger Pausen im Liegen'],
    legalRelevance: 'Präventionsverfahren nach § 167 Abs. 1 SGB IX unter Einbindung des Inklusionsamtes ratsam.'
  },
  {
    icd: 'K50.9',
    title: 'Morbus Crohn / Colitis ulcerosa (Chronisch-entzündliche Darmerkrankung)',
    category: 'Innere Medizin & Onkologie',
    typicalCapacity: 'Individuelle ärztliche Beurteilung',
    description: 'Chronische Magen-Darm-Entzündungen mit imperativem Stuhldrang und Nährstoffmangel. Arbeitsfähigkeit hängt primär von Sanitärzugang und Reisedruck ab.',
    workAdaptation: ['Arbeitsplatz in unmittelbarer Nähe zu Sanitäranlagen', 'Vermeidung von Außendienst und Dienstreisen', 'Homeoffice an Schultagen/Schubphasen'],
    legalRelevance: 'Gilt bei stabiler Remission als gut mit Teilzeittätigkeit vereinbar.'
  }
];
