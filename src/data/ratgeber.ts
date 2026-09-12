export interface RatgeberArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  updatedAt: string;
  summary: string;
  keyFacts: string[];
  content: {
    heading: string;
    text: string;
    subsections?: { subtitle: string; body: string }[];
  }[];
}

export const RATGEBER_ARTICLES: RatgeberArticle[] = [
  {
    slug: 'rechtslage-teilkrankschreibung',
    title: 'Teilkrankschreibung in Deutschland: Status Quo, Rechtslage & Reformmodelle',
    category: 'Rechtsrahmen & Reformen',
    readTime: '6 Min. Lesezeit',
    updatedAt: 'September 2026',
    summary: 'Im deutschen Arbeits- und Sozialrecht gilt bisher das strikte Alles-oder-Nichts-Prinzip. Warum eine echte Teilkrankschreibung nach skandinavischem Vorbild diskutiert wird und wie der aktuelle Reformstand aussieht.',
    keyFacts: [
      'Geltendes Recht: Eine gesetzliche Teilkrankschreibung für den Akutfall existiert in Deutschland bislang nicht.',
      'Alles-oder-Nichts-Prinzip: Nach ständiger Rechtsprechung des Bundesarbeitsgerichts (BAG) ist ein Arbeitnehmer entweder voll arbeitsfähig oder voll arbeitsunfähig.',
      'Vorbild Skandinavien: In Schweden, Norwegen und Dänemark sind Teil-AUs (25 %, 50 %, 75 %) Standard und senken Langzeitfehltage um über 20 %.',
      'Bestehende Brücke: Einzig die stufenweise Wiedereingliederung (§ 74 SGB V) erlaubt Teilarbeit, jedoch unter fortbestehender voller AU.'
    ],
    content: [
      {
        heading: '1. Das Alles-oder-Nichts-Prinzip im deutschen Sozialrecht',
        text: 'Das deutsche System der Arbeitsunfähigkeit basiert historisch auf einer binären Einstufung: Ein Arbeitnehmer kann seine arbeitsvertraglich geschuldete Leistung entweder zu 100 % erbringen oder gilt als vollständig arbeitsunfähig. Kann eine Pflegekraft, ein Bauingenieur oder eine Bürokraft krankheitsbedingt nur noch 3 oder 4 Stunden am Tag arbeiten, muss der Arzt nach den Vorgaben der Arbeitsunfähigkeits-Richtlinie (AU-RL) des Gemeinsamen Bundesausschusses (G-BA) dennoch eine vollständige Arbeitsunfähigkeitsbescheinigung ausstellen.',
        subsections: [
          {
            subtitle: 'Folgen für Arbeitnehmer und Arbeitgeber',
            body: 'Dieses Prinzip führt zu paradoxen Situationen: Arbeitnehmer mit leichten oder abklingenden Beschwerden, die gerne stundenweise oder im Homeoffice arbeiten würden, werden vollständig aus dem Berufsalltag isoliert. Arbeitgeber verlieren 100 % der Arbeitskraft und müssen dennoch 6 Wochen lang volle Entgeltfortzahlung leisten. Nach 6 Wochen fallen Beschäftigte in das deutlich niedrigere Krankengeld der Krankenkasse.'
          }
        ]
      },
      {
        heading: '2. Die Reformdebatte: Vorschläge von Bundesärztekammer & Verbänden',
        text: 'Sowohl der Bundesverband der Deutschen Industrie (BDI) als auch die Bundesvereinigung der Deutschen Arbeitgeberverbände (BDA) sowie namhafte Ärzteorganisationen fordern seit Jahren die Einführung einer echten Teilkrankschreibung. Argumentiert wird mit dem Erhalt der beruflichen Routine, der Vermeidung von psychischer Isolation und der finanziellen Entlastung von Krankenkassen und Betrieben.',
        subsections: [
          {
            subtitle: 'Das Stufenmodell nach skandinavischem Vorbild',
            body: 'In Schweden (Sjukpenning) stufen Ärzte den Grad der Arbeitsunfähigkeit präzise in 25 %, 50 % oder 75 % ein. Der Arbeitgeber zahlt den Lohn für die geleisteten Stunden, die Sozialversicherung übernimmt anteilig das Krankengeld für den Rest. Wissenschaftliche Studien belegen, dass dieser Ansatz die Dauer von Langzeiterkrankungen signifikant verkürzt.'
          }
        ]
      },
      {
        heading: '3. Juristische Knackpunkte einer Neuregelung',
        text: 'Die Umsetzung einer gesetzlichen Teilkrankschreibung erfordert tiefgreifende Gesetzesänderungen im Entgeltfortzahlungsgesetz (EntgFG), im SGB V (§§ 44 ff.) sowie im Arbeitsvertragsrecht. Zu klären sind unter anderem: Haftung des Arbeitgebers bei Überlastung, exakte Zeiterfassung bei Teilarbeit und der Unfallversicherungsschutz bei geteilten Schichten.'
      }
    ]
  },
  {
    slug: 'hamburger-modell-stufenplan',
    title: 'Das Hamburger Modell (§ 74 SGB V): Schrittweise Rückkehr in den Beruf',
    category: 'Stufenweise Wiedereingliederung',
    readTime: '8 Min. Lesezeit',
    updatedAt: 'September 2026',
    summary: 'Das Hamburger Modell ist die einzige im deutschen Recht etablierte Form der stufenweisen Belastungserprobung. Wie der Stufenplan funktioniert, wer zahlt und welche Rechte Arbeitnehmer haben.',
    keyFacts: [
      'Rechtsgrundlage: § 74 SGB V für gesetzlich Versicherte, § 44 SGB IX für schwerbehinderte Menschen.',
      'Status: Der Arbeitnehmer gilt während der gesamten Maßnahme formal als 100 % arbeitsunfähig.',
      'Kein Gehaltsanspruch: Es besteht kein Anspruch auf Arbeitsentgelt nach § 611a BGB, sondern Weiterbezug von Krankengeld oder Übergangsgeld.',
      'Freiwilligkeit: Die Maßnahme erfordert zwingend das Einverständnis von Arbeitnehmer, Arbeitgeber, behandelndem Arzt und Krankenkasse.'
    ],
    content: [
      {
        heading: '1. Voraussetzungen für eine stufenweise Wiedereingliederung',
        text: 'Das Hamburger Modell kommt typischerweise nach längerer schwerer Erkrankung (z. B. nach Herzinfarkt, Krebsbehandlung, orthopädischer Groß-OP oder Burnout) zum Einsatz. Voraussetzung ist, dass der Arbeitnehmer noch arbeitsunfähig ist, aber aus ärztlicher Sicht die Belastung stufenweise wieder aufnehmen kann, um in absehbarer Zeit die volle Arbeitsfähigkeit wiederzuerlangen.',
        subsections: [
          {
            subtitle: 'Erstellung des ärztlichen Stufenplans',
            body: 'Der behandelnde Arzt erstellt in Absprache mit dem Patienten einen detaillierten Stufenplan. Dieser legt fest, mit wie vielen Stunden pro Tag begonnen wird (z. B. 2 Stunden über 2 Wochen) und wie die Steigerung erfolgt (z. B. Steigerung auf 4 Stunden für 3 Wochen, dann 6 Stunden für 3 Wochen bis zur Vollzeit).'
          }
        ]
      },
      {
        heading: '2. Rechtsnatur des Wiedereingliederungsverhältnisses',
        text: 'Das Bundesarbeitsgericht (BAG) hat klargestellt: Während der stufenweisen Wiedereingliederung ruht das eigentliche Arbeitsverhältnis. Es entsteht ein vertragliches Rechtsverhältnis eigener Art („Rehabilitationsverhältnis“). Der Arbeitnehmer erbringt keine vertragliche Arbeitsleistung, sondern absolviert ein medizinisches Belastungstraining.',
        subsections: [
          {
            subtitle: 'Finanzierung während des Hamburger Modells',
            body: 'Da kein Lohnanspruch besteht, zahlt die gesetzliche Krankenkasse weiterhin Krankengeld (oder die Rentenversicherung Übergangsgeld). Der Arbeitgeber kann auf freiwilliger Basis einen Krankengeldzuschuss gewähren, der jedoch auf das Krankengeld angerechnet werden kann, wenn bestimmte Freibeträge überschritten werden.'
          }
        ]
      },
      {
        heading: '3. Abbruch und Modifikation des Stufenplans',
        text: 'Zeigt sich während der Erprobung, dass die gesundheitliche Belastung zu hoch ist, kann der Stufenplan jederzeit in Abstimmung mit dem Arzt verlängert, stundenmäßig reduziert oder ganz abgebrochen werden. Ein Abbruch von bis zu 7 Tagen unterbricht die Maßnahme in der Regel nicht.'
      }
    ]
  },
  {
    slug: 'berechnung-entgelt-krankengeld',
    title: 'Entgeltfortzahlung und Krankengeld: So berechnet sich Ihr Einkommen',
    category: 'Berechnung & Finanzen',
    readTime: '7 Min. Lesezeit',
    updatedAt: 'September 2026',
    summary: 'Wie hoch ist das Krankengeld nach § 47 SGB V wirklich? Wie wirkt sich eine Teilarbeitszeit auf Gehalt, Abzüge und Steuern aus? Alle Formeln und Rechenbeispiele im Detail.',
    keyFacts: [
      'Entgeltfortzahlung: 100 % des regulären Arbeitsentgelts für die ersten 6 Wochen (§ 3 EntgFG).',
      'Krankengeld-Formel: 70 % des beitragspflichtigen Brutto-Regelentgelts, höchstens 90 % des Nettoentgelts (§ 47 SGB V).',
      'Gesetzlicher Höchstsatz: Gedeckelt durch die Beitragsbemessungsgrenze der gesetzlichen Krankenversicherung.',
      'Sozialabgaben: Vom Krankengeld werden Beiträge zur Renten-, Pflege- und Arbeitslosenversicherung abgezogen (ca. 12 %). Die Krankenversicherung ist beitragsfrei.'
    ],
    content: [
      {
        heading: '1. Die 6-Wochen-Grenze und der Übergang zum Krankengeld',
        text: 'Im Krankheitsfall ist der Arbeitgeber nach § 3 Abs. 1 EntgFG verpflichtet, dem Arbeitnehmer das ihm bei der für ihn maßgebenden regelmäßigen Arbeitszeit zustehende Arbeitsentgelt bis zur Dauer von 6 Wochen (42 Kalendertage) fortzuzahlen. Dieser Anspruch besteht für jede neue Erkrankung, es sei denn, es handelt sich um eine Fortsetzungserkrankung derselben Krankheitsursache innerhalb gesetzlicher Fristen.',
        subsections: [
          {
            subtitle: 'Die 70/90-Regel beim Krankengeld',
            body: 'Ab der 7. Woche übernimmt die gesetzliche Krankenkasse. Das Krankengeld beträgt 70 % des vor Beginn der Arbeitsunfähigkeit erzielten regelmäßigen Bruttoarbeitsentgelts, darf jedoch 90 % des Nettoarbeitsentgelts nicht übersteigen. Der jeweils niedrigere Wert bildet das Brutto-Krankengeld.'
          }
        ]
      },
      {
        heading: '2. Modellrechnung für Teilarbeit vs. Vollkrankheit',
        text: 'In einer simulierten Teilkrankschreibung (z. B. 50 % Arbeitszeit) würde der Arbeitnehmer für die erbrachten 50 % der Arbeitsstunden reguläres Arbeitsentgelt vom Arbeitgeber beziehen. Für die ausgefallenen 50 % der Stunden käme anteiliges Krankengeld zur Auszahlung. Dies führt für den Arbeitnehmer zu einem deutlich höheren Gesamteinkommen als bei 100 % Krankengeldbezug.'
      },
      {
        heading: '3. Steuerliche Besonderheit: Progressionsvorbehalt',
        text: 'Krankengeld ist zwar nach § 3 Nr. 1 Buchst. a EStG steuerfrei, unterliegt jedoch dem Progressionsvorbehalt gemäß § 32b Abs. 1 Nr. 1 Buchst. b EStG. Das bedeutet, dass das bezogene Krankengeld den persönlichen Steuersatz auf das restliche steuerpflichtige Einkommen erhöht. Empfänger von mehr als 410 € Krankengeld im Kalenderjahr sind gesetzlich zur Abgabe einer Einkommensteuererklärung verpflichtet.'
      }
    ]
  },
  {
    slug: 'arbeitsrecht-haftung-arbeitsschutz',
    title: 'Arbeitsrechtliche Pflichten & Haftung: Was gilt bei Teilarbeit?',
    category: 'Arbeitsrecht',
    readTime: '6 Min. Lesezeit',
    updatedAt: 'September 2026',
    summary: 'Welche Weisungsrechte hat der Chef bei Teilarbeit? Droht bei Ablehnung die Kündigung? Wie steht es um Urlaubsansprüche während Wiedereingliederungsphasen?',
    keyFacts: [
      'Kein Weisungsrecht: Der Arbeitgeber kann bei stufenweiser Wiedereingliederung keine Überstunden oder Zusatzaufgaben anordnen.',
      'BEM-Pflicht: Bei mehr als 6 Wochen AU im Jahr muss der Arbeitgeber ein BEM anbieten (§ 167 Abs. 2 SGB IX).',
      'Urlaubsanspruch: Während des Hamburger Modells kann kein Erholungsurlaub genommen werden, da der AN arbeitsunfähig ist. Urlaubstage verfallen nicht.',
      'Fürsorgepflicht: Der Arbeitgeber haftet bei bewusster Überlastung des genesenden Arbeitnehmers nach § 618 BGB.'
    ],
    content: [
      {
        heading: '1. Grenzen des Weisungsrechts nach § 106 GewO',
        text: 'Befindet sich ein Arbeitnehmer in einer gesundheitlichen Erprobungsphase, kann der Arbeitgeber sein Direktionsrecht nicht wie bei einem gesunden Mitarbeiter ausüben. Die Zuweisung von Mehrarbeit, Akkordarbeit oder stressintensiven Sonderaufgaben ist unzulässig. Der Arbeitgeber muss sich streng an den ärztlichen Belastungsplan halten.',
        subsections: [
          {
            subtitle: 'Ablehnung durch den Arbeitgeber',
            body: 'Grundsätzlich kann der Arbeitgeber die Teilnahme am Hamburger Modell ablehnen, wenn dringende betriebliche Gründe entgegenstehen – es sei denn, es handelt sich um schwerbehinderte oder gleichgestellte Beschäftigte (§ 164 Abs. 4 SGB IX), bei denen ein einklagbarer Rechtsanspruch auf leidensgerechte Beschäftigung besteht.'
          }
        ]
      },
      {
        heading: '2. Urlaubsansprüche während der Teilarbeit',
        text: 'Ein häufiger Streitpunkt: Da der Arbeitnehmer während der stufenweisen Wiedereingliederung als arbeitsunfähig gilt, kann er in dieser Zeit keinen gesetzlichen Erholungsurlaub nach dem Bundesurlaubsgesetz (BUrlG) antreten. Der Urlaubsanspruch bleibt vollständig erhalten und kann nach Wiederherstellung der vollen Arbeitsfähigkeit beansprucht werden.'
      }
    ]
  },
  {
    slug: 'unfallversicherung-wegeunfall',
    title: 'Unfallversicherung & Wegeunfall (SGB VII) während stufenweiser Wiedereingliederung',
    category: 'Versicherungsschutz',
    readTime: '5 Min. Lesezeit',
    updatedAt: 'September 2026',
    summary: 'Wer zahlt bei einem Unfall auf dem Weg zur Arbeit oder im Betrieb während der Teilarbeit? Das Grundsatzurteil des Bundessozialgerichts (BSG) schafft Rechtssicherheit.',
    keyFacts: [
      'Voller Schutz: Beschäftigte stehen auch während des Hamburger Modells unter dem Schutz der gesetzlichen Unfallversicherung (BG / DGUV).',
      'Wegeunfall abgedeckt: Auch der direkte Hin- und Rückweg zwischen Wohnung und Arbeitsstätte ist versichert.',
      'BSG-Urteil: Das Bundessozialgericht bejaht den betrieblichen Zusammenhang der Wiedereingliederungsmaßnahme.',
      'Verletztengeld: Bei einem Arbeitsunfall greift vorrangig das Verletztengeld der Berufsgenossenschaft.'
    ],
    content: [
      {
        heading: '1. Das Grundsatzurteil des Bundessozialgerichts (BSG)',
        text: 'Lange Zeit war unklar, ob ein als arbeitsunfähig geltender Arbeitnehmer, der stundenweise im Betrieb arbeitet, gesetzlich unfallversichert ist. Das Bundessozialgericht hat mit wegweisendem Urteil (Az. B 2 U 11/06 R) entschieden: Auch wenn kein regulärer Arbeitslohn gezahlt wird, dient die stufenweise Wiedereingliederung dem Betrieb und der Wiederherstellung der Arbeitsfähigkeit. Die Tätigkeit gilt als versicherte Beschäftigung im Sinne des § 2 Abs. 1 Nr. 1 SGB VII.',
        subsections: [
          {
            subtitle: 'Schutzbereich: Arbeitsort und Wegeunfall',
            body: 'Der Unfallversicherungsschutz umfasst sowohl Tätigkeiten am Arbeitsplatz selbst als auch das Zurücklegen des mit der Wiedereingliederung zusammenhängenden unmittelbaren Weges nach und von dem Ort der Tätigkeit (§ 8 Abs. 2 Nr. 1 SGB VII).'
          }
        ]
      },
      {
        heading: '2. Meldung bei Arbeits- oder Wegeunfällen',
        text: 'Ereignet sich während der Wiedereingliederung ein Unfall, ist unverzüglich ein Durchgangsarzt (D-Arzt) aufzusuchen. Der Arbeitgeber muss den Unfall binnen 3 Tagen an die zuständige Berufsgenossenschaft oder Unfallkasse melden, wenn der Vorfall zu einer Arbeitsunfähigkeit von mehr als 3 Tagen führt.'
      }
    ]
  }
];
