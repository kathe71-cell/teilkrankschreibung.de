export interface GlossarEntry {
  term: string;
  category: 'Arbeitsrecht' | 'Krankenkasse & SGB V' | 'Rehabilitation & BEM' | 'Medizin & Praxis';
  norm?: string;
  shortDef: string;
  fullDef: string;
}

export const GLOSSAR_DATA: GlossarEntry[] = [
  {
    term: 'Arbeitsunfähigkeit (AU)',
    category: 'Arbeitsrecht',
    norm: '§ 2 AU-RL / § 44 SGB V',
    shortDef: 'Zustand, in dem der Arbeitnehmer seine arbeitsvertraglich geschuldeten Pflichten krankheitsbedingt nicht oder nur auf die Gefahr der Verschlimmerung ausführen kann.',
    fullDef: 'Arbeitsunfähigkeit liegt vor, wenn der Arbeitnehmer auf Grund von Krankheit seine zuletzt vor der Arbeitsunfähigkeit ausgeübte Tätigkeit nicht mehr oder nur unter der Gefahr der Verschlimmerung der Erkrankung ausführen kann. Maßstab ist stets der konkrete Arbeitsplatz und das Anforderungsprofil des bestehenden Arbeitsvertrags.'
  },
  {
    term: 'Arbeitsunfähigkeits-Richtlinie (AU-RL)',
    category: 'Medizin & Praxis',
    norm: 'G-BA Richtlinie',
    shortDef: 'Verbindliche Vorgaben des Gemeinsamen Bundesausschusses für Vertragsärzte zur Feststellung und Bescheinigung von Arbeitsunfähigkeit.',
    fullDef: 'Die AU-Richtlinie regelt detailliert die Pflichten der niedergelassenen Ärzte in Deutschland, u. a. die persönliche Untersuchungspflicht, Regelungen zur Videosprechstunde, telefonischen Krankschreibung, Dauer der Erst- und Folgebescheinigung sowie die Einleitung der stufenweisen Wiedereingliederung nach § 74 SGB V.'
  },
  {
    term: 'Hamburger Modell',
    category: 'Rehabilitation & BEM',
    norm: '§ 74 SGB V / § 44 SGB IX',
    shortDef: 'Stufenweise Wiedereingliederung von Arbeitnehmern in den Arbeitsprozess nach längerer schwerer Krankheit bei fortbestehender formeller Arbeitsunfähigkeit.',
    fullDef: 'Das Hamburger Modell ermöglicht eine schrittweise Heranführung an die volle Arbeitszeit (z. B. Beginn mit 2 Stunden, Steigerung auf 4, 6 und 8 Stunden). Während dieser Phase besteht rechtlich kein Arbeitsverhältnis im Sinne der Erbringung der Hauptleistungspflicht, sondern ein Rehabilitationsverhältnis eigener Art. Der Arbeitnehmer bezieht weiterhin Krankengeld oder Übergangsgeld.'
  },
  {
    term: 'Teilarbeitsunfähigkeit / Teilkrankschreibung',
    category: 'Krankenkasse & SGB V',
    norm: 'Reformdiskussion / Vorbild Skandinavien',
    shortDef: 'Rechtliches Konzept, bei dem ein Arbeitnehmer zu einem bestimmten Prozentsatz arbeitsunfähig geschrieben wird und anteilig regulär arbeitet und entlohnt wird.',
    fullDef: 'Im Unterschied zum Hamburger Modell würde eine echte gesetzliche Teilkrankschreibung (z. B. 50 % AU) von Beginn oder früher im Krankheitsverlauf greifen: Der Arbeitnehmer arbeitet vertraglich z. B. halbtags gegen regulären Lohn und erhält für den ausgefallenen Anteil Krankengeld oder Entgeltfortzahlung. In Ländern wie Schweden, Dänemark und Österreich Standard.'
  },
  {
    term: 'Entgeltfortzahlung im Krankheitsfall',
    category: 'Arbeitsrecht',
    norm: '§ 3 EntgFG',
    shortDef: 'Gesetzlicher Anspruch des Arbeitnehmers auf Fortzahlung des vollen Arbeitsentgelts durch den Arbeitgeber für bis zu 6 Wochen je Krankheitsfall.',
    fullDef: 'Nach vierwöchigem ununterbrochenem Bestehen des Arbeitsverhältnisses hat ein unverschuldet erkrankter Arbeitnehmer Anspruch auf Fortzahlung von 100 % seines regelmäßigen Arbeitsentgelts durch den Arbeitgeber für die Dauer von bis zu 42 Kalendertagen (6 Wochen). Bei erneuter Erkrankung wegen derselben Grunderkrankung gilt die Sechs-Monats- bzw. Zwölf-Monats-Frist (§ 3 Abs. 1 EntgFG).'
  },
  {
    term: 'Krankengeld',
    category: 'Krankenkasse & SGB V',
    norm: '§§ 44 ff. SGB V',
    shortDef: 'Entgeltersatzleistung der gesetzlichen Krankenkasse nach Ablauf der 6-wöchigen Entgeltfortzahlung.',
    fullDef: 'Krankengeld beträgt 70 % des regelmäßigen Bruttoentgelts (Regelentgelt), darf jedoch 90 % des regelmäßigen Nettoentgelts nicht übersteigen (§ 47 Abs. 1 SGB V). Es wird für dieselbe Krankheit innerhalb einer Dreijahresfrist (Blockfrist) für maximal 78 Wochen gezahlt (inklusive der 6 Wochen Entgeltfortzahlung).'
  },
  {
    term: 'Betriebliches Eingliederungsmanagement (BEM)',
    category: 'Rehabilitation & BEM',
    norm: '§ 167 Abs. 2 SGB IX',
    shortDef: 'Gesetzlich vorgeschriebenes Verfahren des Arbeitgebers zur Überwindung von Arbeitsunfähigkeit bei mehr als 6 Wochen Ausfallzeit innerhalb eines Jahres.',
    fullDef: 'Sind Beschäftigte innerhalb eines Jahres länger als sechs Wochen ununterbrochen oder wiederholt arbeitsunfähig, muss der Arbeitgeber mit Zustimmung und Beteiligung des Arbeitnehmers sowie des Betriebsrats/Personalrats und der Schwerbehindertenvertretung klären, wie die Arbeitsunfähigkeit überwunden und der Arbeitsplatz erhalten werden kann.'
  },
  {
    term: 'Übergangsgeld',
    category: 'Rehabilitation & BEM',
    norm: '§§ 20, 21 SGB VI',
    shortDef: 'Entgeltersatzleistung der Deutschen Rentenversicherung während medizinischer oder beruflicher Rehabilitationsmaßnahmen sowie bei anschließender Wiedereingliederung.',
    fullDef: 'Wird eine stufenweise Wiedereingliederung unmittelbar im Anschluss an eine von der Rentenversicherung getragene medizinische Reha (AHB) innerhalb von vier Wochen begonnen, zahlt die DRV für die Dauer der Wiedereingliederung Übergangsgeld (68 % bzw. 75 % bei Unterhaltspflichten).'
  },
  {
    term: 'Direktionsrecht / Weisungsrecht',
    category: 'Arbeitsrecht',
    norm: '§ 106 GewO',
    shortDef: 'Recht des Arbeitgebers, Inhalt, Ort und Zeit der Arbeitsleistung nach billigem Ermessen näher zu bestimmen.',
    fullDef: 'Während einer stufenweisen Wiedereingliederung nach dem Hamburger Modell ruhen die vertraglichen Hauptpflichten. Der Arbeitgeber hat insoweit kein reguläres Weisungsrecht bzgl. Leistungsdruck und Überstunden. Er kann den Beschäftigten nur im Rahmen des vorab vereinbarten Stufenplans beschäftigen.'
  },
  {
    term: 'Gesetzliche Unfallversicherung (DGUV)',
    category: 'Arbeitsrecht',
    norm: 'SGB VII',
    shortDef: 'Haftpflichtversicherung der Arbeitgeber für Arbeitsunfälle, Wegeunfälle und Berufskrankheiten der Beschäftigten.',
    fullDef: 'Nach höchstrichterlicher Rechtsprechung des Bundessozialgerichts (BSG) stehen Arbeitnehmer auch während einer stufenweisen Wiedereingliederung nach § 74 SGB V unter dem Schutz der gesetzlichen Unfallversicherung (Wegeunfall und Unfall am Betriebsort), da die Maßnahme betriebsbezogen ist.'
  },
  {
    term: 'Elektronische AU (eAU)',
    category: 'Medizin & Praxis',
    norm: '§ 109 SGB IV',
    shortDef: 'Digitales Meldeverfahren, bei dem Arztpraxen die AU-Daten direkt an die Krankenkassen übermitteln und Arbeitgeber diese elektronisch abrufen.',
    fullDef: 'Seit Januar 2023 entfällt der gelbe Papierschein für Arbeitgeber. Arbeitnehmer müssen sich weiterhin unverzüglich beim Arbeitgeber krankmelden, der Arbeitgeber ruft die Bescheinigungsdaten jedoch über seine Entgeltabrechnungssoftware bei der Krankenkasse ab.'
  },
  {
    term: 'Beitragsbemessungsgrenze (BBG)',
    category: 'Krankenkasse & SGB V',
    norm: '§ 223 SGB V',
    shortDef: 'Maximaler Betrag des Bruttoeinkommens, der für die Berechnung der Kranken- und Pflegeversicherungsbeiträge sowie das maximale Krankengeld herangezogen wird.',
    fullDef: 'Einkommen oberhalb der gesetzlichen Beitragsbemessungsgrenze der gesetzlichen Krankenversicherung ist beitragsfrei. Dadurch ist auch das maximale kalendertägliche Regelentgelt zur Krankengeldberechnung gedeckelt.'
  }
];
