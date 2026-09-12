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
    typicalCapacity: '2 bis 4 Stunden täglich, schrittweise steigernd',
    description: 'Reaktive Erschöpfungszustände und Anpassungsstörungen nach chronischer Überlastung oder kritischen Lebensereignissen. Eine vollständige Isolation vom Arbeitsplatz führt oft zu erhöhter Rückkehrangst.',
    workAdaptation: ['Verzicht auf Führungsverantwortung während der Anfangsphase', 'Feste Pausenzeiten und Reizreduktion', 'Möglichkeit von Homeoffice zur Vermeidung von Pendelstress'],
    legalRelevance: 'Häufigste Indikation für stufenweise Wiedereingliederung (§ 74 SGB V). BEM-Gespräch (§ 167 Abs. 2 SGB IX) gesetzlich verpflichtend anzubieten nach >6 Wochen AU.'
  },
  {
    icd: 'F32.1',
    title: 'Mittelgradige depressive Episode (in Remission)',
    category: 'Psychosomatik & Nervensystem',
    typicalCapacity: '3 bis 5 Stunden täglich',
    description: 'Nach Abklingen der Akutphase stabilisiert ein strukturierter Tagesablauf und dosierter sozialer Kontakt im Berufsalltag den Heilungserfolg maßgeblich.',
    workAdaptation: ['Klare, überschaubare Aufgabenpakete', 'Regelmäßige Reflexionsgespräche mit Vorgesetzten', 'Flexible Arbeitszeitmodelle ohne Zeitdruck'],
    legalRelevance: 'Ärztlicher Stufenplan erfordert engmaschige Begleitung durch Hausarzt oder Facharzt für Psychiatrie/Psychosomatik.'
  },
  {
    icd: 'M54.5',
    title: 'Chronisches Lendenwirbelsäulen-Syndrom (LWS)',
    category: 'Orthopädie & Bewegungsapparat',
    typicalCapacity: '4 Stunden täglich (körperlich leichte Tätigkeit)',
    description: 'Bandscheibenbedingte Schmerzzustände oder postoperative Phasen nach Nukleotomie. Langes statisches Sitzen oder schweres Heben sind kontraindiziert, moderate Bewegung förderlich.',
    workAdaptation: ['Elektrisch höhenverstellbarer Sitz-Steh-Schreibtisch', 'Verbot des Hebens von Lasten >5 kg', 'Ergonomische Arbeitsplatzbegehung durch Betriebsarzt'],
    legalRelevance: 'Arbeitgeber ist nach § 3 ArbSchG zur Bereitstellung ergonomischer Hilfsmittel angehalten.'
  },
  {
    icd: 'M16.1',
    title: 'Koxarthrose / Z. n. Hüft-Totalendoprothese (Hüft-TEP)',
    category: 'Orthopädie & Bewegungsapparat',
    typicalCapacity: '3 bis 6 Stunden täglich',
    description: 'Rehabilitationsphase nach Einsetzen eines künstlichen Hüftgelenks nach abgeschlossener stationärer/ambulanter Anschlussheilbehandlung (AHB).',
    workAdaptation: ['Vermeidung von Treppensteigen und Zwangshaltungen', 'Barrierefreier Zugang zum Arbeitsplatz', 'Teilweise Telearbeit möglich'],
    legalRelevance: 'Kostenträger während der Wiedereingliederung ist nach AHB häufig die Deutsche Rentenversicherung (DRV) mit Übergangsgeld (§ 20 SGB VI).'
  },
  {
    icd: 'M75.1',
    title: 'Rotatorenmanschetten-Ruptur (Schulter-OP)',
    category: 'Orthopädie & Bewegungsapparat',
    typicalCapacity: '4 Stunden täglich (einarmige Tätigkeiten)',
    description: 'Postoperative Rekonvaleszenz nach Sehnennaht der Schulter. Überkopfarbeiten und Zugbelastungen sind für mindestens 3 bis 6 Monate untersagt.',
    workAdaptation: ['Einhandbedienung bei Tastaturarbeiten', 'Entlastung des betroffenen Arms', 'Schulung ergonomischer Tastaturen'],
    legalRelevance: 'Festlegung genauer Belastungsgrenzen im ärztlichen Wiedereingliederungsplan zwingend erforderlich.'
  },
  {
    icd: 'U09.9',
    title: 'Post-COVID-Syndrom / Chronisches Fatigue-Syndrom',
    category: 'Post-Viral & Chronisch',
    typicalCapacity: '2 bis 4 Stunden täglich mit Pacing-Pausen',
    description: 'Anhaltende Neuro-Fatigue, Belastungsintoleranz (Post-Exertional Malaise, PEM) und kognitive Leistungseinbußen nach SARS-CoV-2-Infektion.',
    workAdaptation: ['Strikte Einhaltung des Pacing (Vermeidung des Crashes)', 'Ruhiger Einzelarbeitsplatz ohne Großraumbüro-Geräuschpegel', 'Vollständige Homeoffice-Möglichkeit'],
    legalRelevance: 'Besondere Vorsicht beim Hamburger Modell: Belastung darf nur extrem vorsichtig gesteigert werden, da Rückschläge drohen.'
  },
  {
    icd: 'C50.9',
    title: 'Mammakarzinom (Z. n. Chemo- & Strahlentherapie)',
    category: 'Innere Medizin & Onkologie',
    typicalCapacity: '2 bis 4 Stunden, schrittweise Steigerung über 3-6 Monate',
    description: 'Langzeitrehabilitation nach onkologischer Primärtherapie. Erhebliche tumorassoziierte Fatigue, aber starker Wunsch nach sozialer und beruflicher Reintegration.',
    workAdaptation: ['Höchst flexible Tagesgestaltung', 'Freistellung für medizinische Nachsorgetermine', 'Reduzierte Termindichte'],
    legalRelevance: 'Schwerbehindertenstatus bzw. Gleichstellung nach SGB IX schützt vor Kündigung und gibt Anspruch auf leidensgerechten Arbeitsplatz (§ 164 SGB IX).'
  },
  {
    icd: 'I21.9',
    title: 'Zustand nach Myokardinfarkt (Herzinfarkt) & Stent',
    category: 'Innere Medizin & Onkologie',
    typicalCapacity: '4 Stunden täglich (körperlich und psychisch stressfrei)',
    description: 'Kardiologische Rekonvaleszenz nach interventioneller Koronarversorgung. Puls- und Blutdruckspitzen durch Akkord- oder Schichtarbeit müssen vermieden werden.',
    workAdaptation: ['Ausschluss von Nacht- und Schichtarbeit', 'Vermeidung von termingetriebenem Stress', 'Regelmäßige Pausen für Vitalwert-Messungen'],
    legalRelevance: 'Betriebsärztliche Untersuchung vor Wiederaufnahme der Tätigkeit dringend anzuraten.'
  },
  {
    icd: 'G35.9',
    title: 'Multiple Sklerose (schubförmig-remittierend)',
    category: 'Psychosomatik & Nervensystem',
    typicalCapacity: '3 bis 5 Stunden täglich je nach Tagesform',
    description: 'Chronisch-entzündliche Erkrankung des ZNS mit wechselnder Fatigue und motorischer Belastbarkeit. Hitzeempfindlichkeit (Uhthoff-Phänomen) erfordert klimatisierte Umgebung.',
    workAdaptation: ['Klimatisierter Arbeitsplatz / Sonnenschutz', 'Gleitzeit ohne Kernzeit', 'Möglichkeit kurzfristiger Pausen im Liegen'],
    legalRelevance: 'Präventionsverfahren nach § 167 Abs. 1 SGB IX unter Einbindung des Inklusionsamtes ratsam.'
  },
  {
    icd: 'K50.9',
    title: 'Morbus Crohn / Colitis ulcerosa (Chronisch-entzündliche Darmerkrankung)',
    category: 'Innere Medizin & Onkologie',
    typicalCapacity: '4 bis 6 Stunden täglich',
    description: 'Chronische Magen-Darm-Entzündungen mit imperativem Stuhldrang und Nährstoffmangel. Arbeitsfähigkeit hängt primär von Sanitärzugang und Reisedruck ab.',
    workAdaptation: ['Arbeitsplatz in unmittelbarer Nähe zu Sanitäranlagen', 'Vermeidung von Außendienst und Dienstreisen', 'Homeoffice an Schultagen/Schubphasen'],
    legalRelevance: 'Gilt bei stabiler Remission als gut mit Teilzeittätigkeit vereinbar.'
  }
];
