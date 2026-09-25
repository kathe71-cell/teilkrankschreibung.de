import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist-ssr/entry-server.js");

const routesToPrerender = [
  { url: "/", title: "Teilkrankschreibung: Rechtslage, Rechner & Ratgeber 2026", desc: "Unabhängiges Informationsportal zur Teilkrankschreibung, stufenweisen Wiedereingliederung (§ 74 SGB V), Entgeltfortzahlung & interaktivem Rechner." },
  { url: "/rechner", title: "Teilkrankschreibung Rechner: Entgelt, Krankengeld & Arbeitszeit", desc: "Interaktiver Berechnungs-Simulator für stufenweise Wiedereingliederung, Netto-Entgelt, Krankengeld und Übergangsgeld." },
  { url: "/ratgeber", title: "Ratgeber Teilkrankschreibung & Hamburger Modell 2026", desc: "Ausführlicher Leitfaden zu arbeitsrechtlichen Voraussetzungen, Stufenplan, Zustimmung des Arbeitgebers und Fristen." },
  { url: "/diagnosen", title: "Diagnosen & Indikationen für Teilkrankschreibung", desc: "Übersicht häufiger ICD-10 Indikationen für stufenweise Wiedereingliederung (Burnout, Depression, Orthopädie, Kardiologie)." },
  { url: "/glossar", title: "Glossar: Fachbegriffe zur Teilkrankschreibung", desc: "Wichtige Begriffe von Arbeitsunfähigkeits-Richtlinie (AU-RL) bis Zuzahlung verständlich erklärt." },
  { url: "/faq", title: "Häufig gestellte Fragen (FAQ) zur Teilkrankschreibung", desc: "Antworten auf die wichtigsten arbeitsrechtlichen und sozialversicherungsrechtlichen Fragen." },
  { url: "/rechner-embed", title: "Teilkrankschreibung Rechner Widget | teilkrankschreibung.de", desc: "Kostenloses interaktives Rechner-Widget für Wiedereingliederung und Netto-Entgelt zur Einbettung." },
  { url: "/impressum", title: "Impressum | teilkrankschreibung.de", desc: "Impressum und rechtliche Angaben von teilkrankschreibung.de." },
  { url: "/datenschutz", title: "Datenschutzerklärung | teilkrankschreibung.de", desc: "Datenschutzerklärung und DSGVO-Informationen von teilkrankschreibung.de." }
];

console.log("Starting prerendering of " + routesToPrerender.length + " routes for teilkrankschreibung.de...");

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace("<div id=\"root\"></div>", "<div id=\"root\">" + appHtml + "</div>");
    rendered = rendered.replace(/<title>.*?<\/title>/, "<title>" + route.title + "</title>");
    rendered = rendered.replace(/<meta name=\"description\" content=\".*?\" \/>/, "<meta name=\"description\" content=\"" + route.desc + "\" />");
    const fullUrl = "https://teilkrankschreibung.de" + (route.url === "/" ? "" : route.url);
    rendered = rendered.replace(/<link rel=\"canonical\" href=\".*?\" \/>/, "<link rel=\"canonical\" href=\"" + fullUrl + "\" />");
    rendered = rendered.replace(/<meta property=\"og:url\" content=\".*?\" \/>/, "<meta property=\"og:url\" content=\"" + fullUrl + "\" />");
    rendered = rendered.replace(/<meta property=\"og:title\" content=\".*?\" \/>/, "<meta property=\"og:title\" content=\"" + route.title + "\" />");
    rendered = rendered.replace(/<meta name=\"twitter:title\" content=\".*?\" \/>/, "<meta name=\"twitter:title\" content=\"" + route.title + "\" />");
    rendered = rendered.replace(/<meta property=\"og:description\" content=\".*?\" \/>/, "<meta property=\"og:description\" content=\"" + route.desc + "\" />");
    rendered = rendered.replace(/<meta name=\"twitter:description\" content=\".*?\" \/>/, "<meta name=\"twitter:description\" content=\"" + route.desc + "\" />");
    const filePath = route.url === "/" ? "dist/index.html" : "dist" + route.url + "/index.html";
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);
    console.log("  ✓ " + route.url + " -> " + filePath + " (" + (rendered.length / 1024).toFixed(1) + " kB)");
  } catch (err) {
    console.error("  ✗ Error prerendering " + route.url + ":", err);
  }
}

console.log("Prerendering complete!");